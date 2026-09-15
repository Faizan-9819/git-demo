import {
  getAllBlogEntries,
  getBlogEntryBySlug,
  getRelatedBlogEntries,
  urlSlugFor,
} from "./blog-content";
import type { BlogEntry } from "./blog-registry";

export const SITE_URL = "https://www.getgrowthrocket.com";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  readTime: string;
  category: string;
  acfCategories: string[];
  authorName: string;
  coverImage: string;
};

export function toBlogPost(entry: BlogEntry): BlogPost {
  const { blog, seo } = entry;
  return {
    slug: urlSlugFor(entry),
    title: blog.title,
    excerpt: blog.excerpt,
    description: seo.description,
    publishedAt: blog.published,
    updatedAt: blog.updated,
    readTime: blog.readingTime,
    category: blog.category,
    acfCategories: blog.tags,
    authorName: blog.author.name,
    coverImage: blog.heroImage,
  };
}

export function formatBlogDate(date: string) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  })
    .format(new Date(date))
    .replace(/ /g, "-");
}

export function buildBlogPostingJsonLd(
  post: BlogPost,
  siteUrl: string,
  locale: "en" | "nl" = "en",
) {
  const blogPath =
    locale === "nl" ? `/nl/blog/${post.slug}` : `/blog/${post.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: post.coverImage.startsWith("http")
      ? post.coverImage
      : `${siteUrl}${post.coverImage}`,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    author: {
      "@type": "Person",
      name: post.authorName,
    },
    publisher: {
      "@type": "Organization",
      name: "Growth Rocket",
      url: siteUrl,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}${blogPath}`,
    },
  };
}

export async function getAllBlogPosts(
  locale: "en" | "nl" = "en",
): Promise<BlogPost[]> {
  const entries = await getAllBlogEntries(locale);
  return entries.map(toBlogPost);
}

export async function getBlogPostBySlug(
  slug: string,
  locale: "en" | "nl" = "en",
): Promise<BlogPost | null> {
  const entry = await getBlogEntryBySlug(slug, locale);
  return entry ? toBlogPost(entry) : null;
}

export async function getRelatedBlogPosts(
  slug: string,
  locale: "en" | "nl" = "en",
): Promise<BlogPost[]> {
  const entries = await getAllBlogEntries(locale);

  return entries.filter((entry) => urlSlugFor(entry) !== slug).map(toBlogPost);
}
