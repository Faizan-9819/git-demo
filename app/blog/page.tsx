import type { Metadata } from "next";
import { getEnBlogPosts } from "../lib/blog-posts-en";
import BlogLandingClient from "../components/blog/BlogLandingClient";
import JsonLd from "../components/JsonLd";
import { buildPageSchema } from "../lib/seo";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Blogs - Growth Rocket",
  description: "Practical guides on growing a service business online, written by Growth Rocket.",
  alternates: {
    canonical: "/blog",
  },
};

export default async function BlogLandingPage() {
  const posts = await getEnBlogPosts();
  return (
    <>
      <JsonLd
        data={buildPageSchema(
          "/blog",
          "Blogs - Growth Rocket",
          "Practical guides on growing a service business online, written by Growth Rocket."
        )}
      />
      <BlogLandingClient posts={posts} />
    </>
  );
}
