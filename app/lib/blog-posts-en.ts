import type { BlogPost } from "./blog-posts";
import { getAllBlogPosts, getBlogPostBySlug, getRelatedBlogPosts } from "./blog-posts";

export async function getEnBlogPosts(): Promise<BlogPost[]> {
  return getAllBlogPosts();
}

export async function getEnBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  return getBlogPostBySlug(slug);
}

export async function getEnRelatedBlogPosts(slug: string, limit = 6): Promise<BlogPost[]> {
  return getRelatedBlogPosts(slug, limit);
}
