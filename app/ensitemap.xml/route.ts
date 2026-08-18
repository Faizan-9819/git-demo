import { getAllBlogPosts } from "../lib/blog-posts";
import { SITE_URL } from "../lib/seo";

const STATIC_EN_PAGES = [
  { url: `${SITE_URL}/`, priority: "1.0", changefreq: "weekly" },
  { url: `${SITE_URL}/website-for-electricians`, priority: "0.9", changefreq: "weekly" },
  { url: `${SITE_URL}/partner-network`, priority: "0.8", changefreq: "monthly" },
  { url: `${SITE_URL}/blog`, priority: "0.8", changefreq: "daily" },
  { url: `${SITE_URL}/contact`, priority: "0.7", changefreq: "monthly" },
  { url: `${SITE_URL}/privacy-policy`, priority: "0.3", changefreq: "yearly" },
  { url: `${SITE_URL}/terms-and-conditions`, priority: "0.3", changefreq: "yearly" },
  { url: `${SITE_URL}/cookie-policy`, priority: "0.3", changefreq: "yearly" },
  { url: `${SITE_URL}/imprint`, priority: "0.3", changefreq: "yearly" },
];

export async function GET() {
  const posts = await getAllBlogPosts();
  const blogUrls = posts.map((p) => ({
      url: `${SITE_URL}/blog/${p.slug}`,
      lastmod: p.publishedAt ? p.publishedAt.slice(0, 10) : undefined,
      priority: "0.7",
      changefreq: "monthly",
    }));

  const allUrls = [...STATIC_EN_PAGES, ...blogUrls];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls
  .map(
    (entry) => `  <url>
    <loc>${entry.url}</loc>${
      "lastmod" in entry && entry.lastmod
        ? `\n    <lastmod>${entry.lastmod}</lastmod>`
        : ""
    }
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
