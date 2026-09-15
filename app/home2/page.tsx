import type { Metadata } from "next";
import Home2Client from "./Home2Client";

export const metadata: Metadata = {
  title: "Professional Websites for Small Businesses | Growth Rocket",
  description:
    "A professional website for your small business — built, hosted and managed for you. Fixed yearly price, live in 7 days. See how it works.",
  alternates: {
    canonical: "https://www.getgrowthrocket.com/home2",
  },
};

export default function Home2Page() {
  return <Home2Client />;
}
