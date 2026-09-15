import type { ComponentType, ReactNode } from "react";

export type BlogSection = {
  component: ComponentType<any>;
  props?: Record<string, any>;
};

export type BlogAuthor = {
  name: string;
  role?: string;
};

export type BlogTocEntry = {
  id: string;
  label: string;
};

export type BlogFaqItem = {
  question: string;
  answer: string;
  /** Optional rich-text override for the visible accordion body (e.g. an inline highlight). `answer` stays plain text and is what's used for the FAQPage JSON-LD schema. */
  answerNode?: ReactNode;
};

export type BlogImage = {
  src: string;
  alt: string;
  caption?: string;
  /** Set true on exactly one image per blog — it becomes blog.heroImage and the /blog card image. */
  featuredImage?: boolean;
};

export type BlogContent = {
  slug: string;
  /**
   * Optional locale-specific URL slug (e.g. a Dutch phrase for the NL
   * version of a post). The `slug` field above stays identical between the
   * EN and NL entries of the same post — that's what pairs them together
   * for language-toggle and related-posts lookups. `localizedSlug` only
   * changes what appears in the URL for this specific language entry.
   */
  localizedSlug?: string;
  /**
   * Set true to pull this blog out of every listing surface — /blog and
   * /nl/blog cards, related-posts carousels, and sitemaps — without
   * deleting its content or registry entry. Its own route still resolves
   * the entry directly and calls notFound() so the URL correctly 404s
   * instead of silently continuing to render. See getAllBlogEntries in
   * app/lib/blog-content.ts for where the filtering happens.
   */
  hidden?: boolean;
  language: "en" | "nl";
  title: string;
  excerpt: string;
  heroImage: string;
  author: BlogAuthor;
  tags: string[];
  category: string;
  readingTime: string;
  published: string;
  updated?: string;
  toc?: BlogTocEntry[];
  faq?: BlogFaqItem[];
  hero: BlogSection;
  /**
   * Optional full-width block rendered between the hero and the TOC/article
   * two-column layout — for content like a summary-cards row that should
   * span the full page width, not sit squeezed inside the article column
   * next to the TOC sidebar.
   */
  afterHero?: BlogSection;
  sections: BlogSection[];
};

export type BlogSeo = {
  slug: string;
  language: "en" | "nl";
  title: string;
  description: string;
  keywords: string[];
  canonical: string;
  robots: string;
  ogImage: string;
  twitter: {
    card: string;
  };
};

export type BlogRelated = {
  slugs: string[];
};
