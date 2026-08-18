import type { Metadata } from "next";
import type { BlogPost } from "./blog-posts";

export const SITE_URL = "https://www.getgrowthrocket.com";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/figma/hero-dashboard.png`;

function stripHtml(value: string) {
  return value
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function cleanQuestion(value: string) {
  return stripHtml(value)
    .replace(/^q\d+[.:\s-]*/i, "")
    .trim();
}

function cleanAnswer(value: string) {
  return stripHtml(value)
    .replace(/^a\d+[.:\s-]*/i, "")
    .trim();
}

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

export function buildBlogFaqJsonLdFromHtml(contentHtml: string) {
  const faqSectionMatch = contentHtml.match(
    /<h2[^>]*>\s*(?:<[^>]*>\s*)*faq\s*(?:<[^>]*>\s*)*<\/h2>([\s\S]*?)(?=<h2\b|$)/i,
  );

  if (!faqSectionMatch?.[1]) return null;

  const faqSection = faqSectionMatch[1];
  const qaMatches = [
    ...faqSection.matchAll(/<h3[^>]*>([\s\S]*?)<\/h3>([\s\S]*?)(?=<h3\b|$)/gi),
  ];

  const mainEntity = qaMatches
    .map(([, questionHtml, answerHtml]) => ({
      question: cleanQuestion(questionHtml),
      answer: cleanAnswer(answerHtml),
    }))
    .filter((entry) => entry.question.length > 0 && entry.answer.length > 0)
    .map((entry) => ({
      "@type": "Question",
      name: entry.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: entry.answer,
      },
    }));

  if (mainEntity.length === 0) return null;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity,
  };
}

export function buildBlogPostingMetadata(
  post: BlogPost,
  locale: "en" | "nl" = "en",
): Metadata {
  const canonicalPath = locale === "nl" ? `/nl/blog/${post.slug}` : `/blog/${post.slug}`;
  const canonical = `${SITE_URL}${canonicalPath}`;
  const enUrl = `${SITE_URL}/blog/${post.slug}`;
  const nlUrl = `${SITE_URL}/nl/blog/${post.slug}`;
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
