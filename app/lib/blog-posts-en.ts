import type { BlogPost } from "./blog-posts";
import {
  getAllBlogPosts,
  getBlogPostBySlug,
  getRelatedBlogPosts,
} from "./blog-posts";

export async function getEnBlogPosts(): Promise<BlogPost[]> {
  return getAllBlogPosts("en");
}

export async function getEnBlogPostBySlug(
  slug: string,
): Promise<BlogPost | null> {
  return getBlogPostBySlug(slug, "en");
}

export async function getEnRelatedBlogPosts(slug: string): Promise<BlogPost[]> {
  return getRelatedBlogPosts(slug, "en");
}
