import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBlogEntryBySlug, getUrlSlugsForPair } from "./blog-content";
import { toBlogPost } from "./blog-posts";
import { buildBlogPostingMetadata } from "./seo";

export async function buildStaticBlogMetadata(
  pairingSlug: string,
  locale: "en" | "nl",
): Promise<Metadata> {
  const entry = await getBlogEntryBySlug(pairingSlug, locale);
  if (!entry) notFound();

  const post = toBlogPost(entry);
  const urlSlugs = await getUrlSlugsForPair(entry.blog.slug);
  return buildBlogPostingMetadata(post, locale, urlSlugs);
}
