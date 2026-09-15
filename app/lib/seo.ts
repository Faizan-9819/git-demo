import type { Metadata } from "next";
import type { BlogPost } from "./blog-posts";

export const SITE_URL = "https://www.getgrowthrocket.com";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/figma/hero-dashboard.png`;

export function toAbsoluteUrl(url: string) {
  if (!url) return DEFAULT_OG_IMAGE;
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  return `${SITE_URL}${url.startsWith("/") ? url : `/${url}`}`;
}

export function buildPageSchema(
  path: string,
  name: string,
  description: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url: `${SITE_URL}${path === "/" ? "" : path}`,
    isPartOf: {
      "@type": "WebSite",
      name: "Growth Rocket",
      url: SITE_URL,
    },
  };
}

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Growth Rocket",
    url: SITE_URL,
    logo: `${SITE_URL}/figma/icons/logos/logoblack.svg`,
  };
}

export function buildWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Growth Rocket",
    url: SITE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/blog?search={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function buildFaqJsonLdFromItems(items: { question: string; answer: string }[]) {
  if (items.length === 0) return null;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function buildBlogPostingMetadata(
  post: BlogPost,
  locale: "en" | "nl" = "en",
  urlSlugs?: { en: string; nl: string },
): Metadata {
  const enSlug = urlSlugs?.en ?? post.slug;
  const nlSlug = urlSlugs?.nl ?? post.slug;
  const canonicalPath = locale === "nl" ? `/nl/blog/${nlSlug}` : `/blog/${enSlug}`;
  const canonical = `${SITE_URL}${canonicalPath}`;
  const enUrl = `${SITE_URL}/blog/${enSlug}`;
  const nlUrl = `${SITE_URL}/nl/blog/${nlSlug}`;
  const image = toAbsoluteUrl(post.coverImage);

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical,
      languages: {
        en: enUrl,
        nl: nlUrl,
      },
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: canonical,
      type: "article",
      images: [{ url: image }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [image],
    },
  };
}
