import type { Metadata } from "next";
import { getAllBlogPosts } from "../../lib/blog-posts";
import ElectricianClient from "@/app/website-for-electricians/ElectricianClient";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Website voor Elektriciens — All-in vanaf €690/jaar | Growth Rocket",
  description:
    "Een professionele website voor uw elektriciensbedrijf. Gebouwd, gehost en beheerd voor u — vaste jaarprijs, live in 7 dagen.",
  alternates: {
    canonical: "https://www.getgrowthrocket.com/nl/website-voor-elektriciens",
    languages: {
      en: "https://www.getgrowthrocket.com/website-for-electricians",
      nl: "https://www.getgrowthrocket.com/nl/website-voor-elektriciens",
    },
  },
};

export default async function NlElectriciansPage() {
  const posts = await getAllBlogPosts();
  return <ElectricianClient posts={posts} />;
}
