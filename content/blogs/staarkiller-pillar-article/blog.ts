import type { BlogContent, BlogTocEntry } from "@/app/lib/blog-content-types";
import HeroSection from "@/components/blogs/staarkiller-pillar-article/HeroSection";
import IntroSection from "@/components/blogs/staarkiller-pillar-article/IntroSection";
import WhySection from "@/components/blogs/staarkiller-pillar-article/WhySection";
import FundamentalsSection from "@/components/blogs/staarkiller-pillar-article/FundamentalsSection";
import GapSection from "@/components/blogs/staarkiller-pillar-article/GapSection";
import FirstCustomerSection from "@/components/blogs/staarkiller-pillar-article/FirstCustomerSection";
import StartklaarSection from "@/components/blogs/staarkiller-pillar-article/StartklaarSection";
import LaunchpadSection from "@/components/blogs/staarkiller-pillar-article/LaunchpadSection";
import FounderSection from "@/components/blogs/staarkiller-pillar-article/FounderSection";

const toc: BlogTocEntry[] = [
  { id: "why", label: "Why businesses do not launch" },
  { id: "fundamentals", label: "The fundamentals" },
  { id: "gap", label: "The implementation gap" },
  { id: "firstcustomer", label: "Your first customer" },
  { id: "startklaar", label: "Five kinds of ready" },
  { id: "launchpad", label: "The launchpad" },
  { id: "founder", label: "Become a founder" },
];

const blog: BlogContent = {
  slug: "staarkiller-pillar-article",
  language: "en",
  title: "From graduate to founder: how to get your first business startklaar",
  excerpt:
    "A practical guide for graduates who want to turn an idea into a business that customers can find, trust, and buy from.",
  heroImage: "/blogimages/en/staarkiller-pillar-article/33722-1280-1.webp",
  author: { name: "Growth Rocket" },
  tags: ["Starting a Business", "Business Growth"],
  category: "Business Growth",
  readingTime: "8 Mins",
  published: "2026-08-25",
  toc,
  hero: {
    component: HeroSection,
    props: {
      eyebrow: "For graduates with an idea",
      title:
        "From graduate to founder: how to get your first business startklaar",
      subtitle:
        "You have the knowledge. Now build the practical foundation that helps your first business get found, earn trust, and win its first customers.",
      metaDate: "25 August 2026",
      metaReadTime: "8 min read",
    },
  },
  sections: [
    { component: IntroSection },
    { component: WhySection },
    { component: FundamentalsSection },
    { component: GapSection },
    { component: FirstCustomerSection },
    { component: StartklaarSection },
    { component: LaunchpadSection },
    { component: FounderSection },
  ],
};

export default blog;
