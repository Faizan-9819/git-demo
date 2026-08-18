import type { BlogPost } from "./blog-posts";

const WORDPRESS_API_BASE =
  "https://wordpress-919508-5996429.cloudwaysapps.com/wp-json/wp/v2";

const FALLBACK_IMAGE = "/figma/hero-dashboard.png";

type WordPressRendered = { rendered: string };
type WordPressAuthor = { name?: string };
type WordPressFeaturedMedia = { source_url?: string };
type WordPressTerm = { name?: string; taxonomy?: string };
type WordPressYoastHeadJson = {
  description?: string;
  og_image?: { url?: string }[];
};
type WordPressPost = {
  id: number;
  slug: string;
  date: string;
  link: string;
  title: WordPressRendered;
  excerpt: WordPressRendered;
  content: WordPressRendered;
  yoast_head_json?: WordPressYoastHeadJson;
  acf?: { blogs_categories?: string[]; post_author?: string };
  _embedded?: {
    author?: WordPressAuthor[];
    "wp:featuredmedia"?: WordPressFeaturedMedia[];
    "wp:term"?: WordPressTerm[][];
  };
};

function decodeHtml(value: string) {
  const entities: Record<string, string> = {
    "&amp;": "&", "&#038;": "&", "&quot;": '"', "&#039;": "'",
    "&#8217;": "'", "&#8216;": "'", "&#8220;": '"', "&#8221;": '"',
    "&#8211;": "-", "&#8212;": "-", "&mdash;": "-", "&ndash;": "-",
    "&nbsp;": " ", "&hellip;": "...", "&#8230;": "...", "&lt;": "<", "&gt;": ">",
  };
  return value.replace(/&[a-zA-Z#0-9]+;/g, (e) => entities[e] ?? e);
}

function stripHtml(html: string) {
  return decodeHtml(html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim());
}

function sanitizeHtml(html: string) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/<table([\s\S]*?)<\/table>/gi, '<div class="table-scroll"><table$1</table></div>')
    .trim();
}

function formatReadTime(html: string) {
  const words = stripHtml(html).split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes.toString().padStart(2, "0")} Mins`;
}

function mapPost(post: WordPressPost): BlogPost {
  const category =
    post._embedded?.["wp:term"]?.flat().find((t) => t.taxonomy === "category")?.name ?? "Blog";
  const acfCategories: string[] = Array.isArray(post.acf?.blogs_categories)
    ? post.acf.blogs_categories
    : [];
  const featuredImage =
    post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ??
    post.yoast_head_json?.og_image?.[0]?.url ??
    FALLBACK_IMAGE;
  const excerpt = stripHtml(post.excerpt.rendered);

  return {
    id: post.id,
    slug: post.slug,
    title: stripHtml(post.title.rendered),
    excerpt,
    excerptHtml: sanitizeHtml(post.excerpt.rendered),
    contentHtml: sanitizeHtml(post.content.rendered),
    publishedAt: post.date,
    readTime: formatReadTime(post.content.rendered),
    category,
    acfCategories,
    authorName: post.acf?.post_author || post._embedded?.author?.[0]?.name || "Growth Rocket",
    description: decodeHtml(post.yoast_head_json?.description ?? excerpt),
    coverImage: featuredImage,
    sourceLink: post.link,
  };
}

async function fetchWithRetry(url: string, options: RequestInit, retries = 2, delay = 1000): Promise<Response> {
  try {
    const res = await fetch(url, options);
    if (!res.ok && retries > 0) {
      await new Promise((resolve) => setTimeout(resolve, delay));
      return fetchWithRetry(url, options, retries - 1, delay * 2);
    }
    return res;
  } catch (err) {
    if (retries > 0) {
      await new Promise((resolve) => setTimeout(resolve, delay));
      return fetchWithRetry(url, options, retries - 1, delay * 2);
    }
    throw err;
  }
}

// Module-level caches to avoid hitting the WordPress API repeatedly during build/page compilation
let cachedPosts: BlogPost[] | null = null;
let postsFetchPromise: Promise<BlogPost[]> | null = null;

export async function getNlBlogPosts(maxPages = 50): Promise<BlogPost[]> {
  // If full cache exists, return it (sliced if requesting page 1)
  if (cachedPosts) {
    return maxPages === 1 ? cachedPosts.slice(0, 100) : cachedPosts;
  }
  // If fetching is already in progress, wait for it
  if (postsFetchPromise) {
    const posts = await postsFetchPromise;
    return maxPages === 1 ? posts.slice(0, 100) : posts;
  }

  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

  postsFetchPromise = (async () => {
    try {
      const firstRes = await fetchWithRetry(
        `${WORDPRESS_API_BASE}/posts?per_page=100&page=1&_embed=1`,
        {
          headers: { "User-Agent": "Mozilla/5.0", Accept: "application/json" },
          next: { revalidate: 60 },
        },
      );

      if (!firstRes.ok) return [];

      const totalPages = Math.min(
        Number(firstRes.headers.get("x-wp-totalpages") ?? "1"),
        50, // Always load all up to 50 internally to populate cache fully
      );
      const all: WordPressPost[] = await firstRes.json();

      if (totalPages > 1) {
        const promises = [];
        for (let page = 2; page <= totalPages; page++) {
          promises.push(
            fetchWithRetry(
              `${WORDPRESS_API_BASE}/posts?per_page=100&page=${page}&_embed=1`,
              {
                headers: { "User-Agent": "Mozilla/5.0", Accept: "application/json" },
                next: { revalidate: 60 },
              },
            )
              .then((res) => (res.ok ? (res.json() as Promise<WordPressPost[]>) : []))
              .catch((err) => {
                console.error(`getNlBlogPosts: Error fetching page ${page}:`, err);
                return [] as WordPressPost[];
              }),
          );
        }
        const pagesData = await Promise.all(promises);
        for (const data of pagesData) {
          all.push(...data);
        }
      }

      const mapped = all.map(mapPost);
      cachedPosts = mapped;
      return mapped;
    } catch (err) {
      console.error("getNlBlogPosts: WordPress API unavailable:", err);
      postsFetchPromise = null; // Reset promise so next caller can retry
      return [];
    }
  })();

  const posts = await postsFetchPromise;
  return maxPages === 1 ? posts.slice(0, 100) : posts;
}

export async function getNlBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
  try {
    const res = await fetchWithRetry(
      `${WORDPRESS_API_BASE}/posts?slug=${slug}&_embed=1`,
      {
        headers: { "User-Agent": "Mozilla/5.0", Accept: "application/json" },
        next: { revalidate: 60 },
      },
    );
    if (!res.ok) return null;
    const data: WordPressPost[] = await res.json();
    if (!data.length) return null;
    return mapPost(data[0]);
  } catch (err) {
    console.error("getNlBlogPostBySlug: WordPress API unavailable:", err);
    return null;
  }
}

export async function getNlRelatedBlogPosts(slug: string, limit = 6): Promise<BlogPost[]> {
  const posts = await getNlBlogPosts(1);
  return posts.filter((p) => p.slug !== slug).slice(0, limit);
}
