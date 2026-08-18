import type { Metadata } from "next";
import { getNlBlogPosts } from "../../lib/blog-posts-nl";
import BlogLandingClient from "../../components/blog/BlogLandingClient";
import JsonLd from "../../components/JsonLd";
import { buildPageSchema } from "../../lib/seo";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Blog - Growth Rocket",
  description: "Praktische gidsen voor het laten groeien van een servicebedrijf online — websites, boekingen en aanvragen voor de vakman.",
  alternates: {
    canonical: "https://www.getgrowthrocket.com/nl/blog",
    languages: {
      en: "https://www.getgrowthrocket.com/blog",
      nl: "https://www.getgrowthrocket.com/nl/blog",
    },
  },
};

export default async function NlBlogLandingPage() {
  const posts = await getNlBlogPosts();
  return (
    <>
      <JsonLd
        data={buildPageSchema(
          "/nl/blog",
          "Blog - Growth Rocket",
          "Praktische gidsen voor het laten groeien van een servicebedrijf online — websites, boekingen en aanvragen voor de vakman."
        )}
      />
      <BlogLandingClient posts={posts} />
    </>
  );
}
