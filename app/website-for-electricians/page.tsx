import type { Metadata } from "next";
import ElectricianClient from "./ElectricianClient";
import { getAllBlogPosts } from "../lib/blog-posts";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Website for Electricians — Built & Managed for You | Growth Rocket",
  description:
    "A professional website for your electrical business. Built, hosted and managed for you — fixed yearly price, live in 7 days.",
  alternates: {
    canonical: "https://www.getgrowthrocket.com/website-for-electricians",
    languages: {
      en: "https://www.getgrowthrocket.com/website-for-electricians",
      nl: "https://www.getgrowthrocket.com/website-voor-elektriciens",
    },
  },
};

export default async function Home() {
  const posts = await getAllBlogPosts();

  return <ElectricianClient posts={posts} />;
}
