import type { BlogPost } from "./blog-posts";
import {
  getAllBlogPosts,
  getBlogPostBySlug,
  getRelatedBlogPosts,
} from "./blog-posts";

export async function getNlBlogPosts(): Promise<BlogPost[]> {
  return getAllBlogPosts("nl");
}

export async function getNlBlogPostBySlug(
  slug: string,
): Promise<BlogPost | null> {
  return getBlogPostBySlug(slug, "nl");
}

export async function getNlRelatedBlogPosts(slug: string): Promise<BlogPost[]> {
  return getRelatedBlogPosts(slug, "nl");
}
