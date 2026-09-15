import type { BlogContent, BlogSeo, BlogRelated } from "./blog-content-types";
import { BLOG_MODULES, NL_BLOG_MODULES, type BlogEntry } from "./blog-registry";

let enCache: BlogEntry[] | null = null;
let nlCache: BlogEntry[] | null = null;

async function loadEn(): Promise<BlogEntry[]> {
  if (!enCache) enCache = await Promise.all(BLOG_MODULES.map((load) => load()));
  return enCache;
}

async function loadNl(): Promise<BlogEntry[]> {
  if (!nlCache) nlCache = await Promise.all(NL_BLOG_MODULES.map((load) => load()));
  return nlCache;
}

/** Every entry, including hidden ones — only for resolving a single known slug directly. */
async function getAllBlogEntriesUnfiltered(locale: "en" | "nl" = "en"): Promise<BlogEntry[]> {
  const en = await loadEn();
  if (locale === "en") return en;

  const nl = await loadNl();
  const nlBySlug = new Map(nl.map((entry) => [entry.blog.slug, entry]));
  // Dutch listing mirrors the English catalogue slug-for-slug; any blog
  // without a Dutch translation yet falls back to its English content.
  return en.map((entry) => nlBySlug.get(entry.blog.slug) ?? entry);
}

/**
 * Every non-hidden entry — the list every card grid, related-posts
 * carousel, and sitemap should read from. A blog with `hidden: true` on its
 * BlogContent never appears here, so it disappears from every listing
 * surface site-wide by flipping one flag. Its own route still resolves it
 * via getBlogEntryBySlug/getAllBlogEntriesUnfiltered and should call
 * notFound() explicitly when hidden.
 */
export async function getAllBlogEntries(locale: "en" | "nl" = "en"): Promise<BlogEntry[]> {
  const entries = await getAllBlogEntriesUnfiltered(locale);
  return entries.filter((entry) => !entry.blog.hidden);
}

/** The slug that appears in this entry's URL for its own locale — localizedSlug if set, else the shared slug. */
export function urlSlugFor(entry: BlogEntry): string {
  return entry.blog.localizedSlug ?? entry.blog.slug;
}

export async function getBlogEntryBySlug(
  slug: string,
  locale: "en" | "nl" = "en",
): Promise<BlogEntry | null> {
  const entries = await getAllBlogEntries(locale);
  return entries.find((entry) => entry.blog.slug === slug || urlSlugFor(entry) === slug) ?? null;
}

/** The EN and NL URL slugs for a given post, resolved by its shared pairing slug — for hreflang alternates. */
export async function getUrlSlugsForPair(pairingSlug: string): Promise<{ en: string; nl: string }> {
  const [enEntries, nlEntries] = await Promise.all([getAllBlogEntries("en"), getAllBlogEntries("nl")]);
  const en = enEntries.find((entry) => entry.blog.slug === pairingSlug);
  const nl = nlEntries.find((entry) => entry.blog.slug === pairingSlug);
  return {
    en: en ? urlSlugFor(en) : pairingSlug,
    nl: nl ? urlSlugFor(nl) : pairingSlug,
  };
}

export async function getRelatedBlogEntries(
  slug: string,
  locale: "en" | "nl" = "en",
  limit = 6,
): Promise<BlogEntry[]> {
  const entries = await getAllBlogEntries(locale);
  const current = entries.find((entry) => entry.blog.slug === slug);

  if (current && current.related.slugs.length > 0) {
    const bySlug = new Map(entries.map((entry) => [entry.blog.slug, entry]));
    const picked = current.related.slugs
      .map((relatedSlug) => bySlug.get(relatedSlug))
      .filter((entry): entry is BlogEntry => Boolean(entry));
    if (picked.length > 0) return picked.slice(0, limit);
  }

  return entries.filter((entry) => entry.blog.slug !== slug).slice(0, limit);
}

export type { BlogContent, BlogSeo, BlogRelated, BlogEntry };
