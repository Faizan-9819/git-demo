import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Professional Websites for Small Businesses | Growth Rocket",
  description:
    "A professional website for your small business — built, hosted and managed for you. Fixed yearly price, live in 7 days. See how it works.",
  alternates: {
    canonical: "https://www.getgrowthrocket.com/",
    languages: {
      en: "https://www.getgrowthrocket.com/",
      nl: "https://www.getgrowthrocket.com/nl/",
    },
  },
};

export default function Home() {
  return <HomeClient />;
}
