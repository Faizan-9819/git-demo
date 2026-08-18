import type { Metadata } from "next";
import { getEnBlogPosts } from "../lib/blog-posts-en";
import BlogLandingClient from "../components/blog/BlogLandingClient";
import JsonLd from "../components/JsonLd";
import { buildPageSchema } from "../lib/seo";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Blogs - Growth Rocket",
  description: "Live Growth Rocket blog posts loaded from the WordPress API.",
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
          "Live Growth Rocket blog posts loaded from the WordPress API."
        )}
      />
      <BlogLandingClient posts={posts} />
    </>
  );
}
