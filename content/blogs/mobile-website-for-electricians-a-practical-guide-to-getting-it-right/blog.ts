import type { BlogContent, BlogTocEntry } from "@/app/lib/blog-content-types";
import HeroSection from "@/components/blogs/mobile-website-for-electricians-a-practical-guide-to-getting-it-right/HeroSection";
import {
  AuditSection,
  ClosingSection,
  ComparisonSection,
  CostSection,
  FinalCtaSection,
  IntroSection,
  LayersSection,
  MoreForElectriciansSection,
  RequirementsSection,
  SignalsSection,
  WhySection,
} from "@/components/blogs/mobile-website-for-electricians-a-practical-guide-to-getting-it-right/GuideSections";
import FaqSection from "@/components/blogs/electrician-website-cost/FaqSection";
import faq from "./faq";
import { getFeaturedImage } from "./images";

const toc: BlogTocEntry[] = [
  { id: "waarom", label: "Why mobile matters" },
  { id: "kosten", label: "What it costs" },
  { id: "signals", label: "What we see most often" },
  { id: "eisen", label: "The mobile requirements" },
  { id: "vergelijking", label: "Hostile vs. friendly" },
  { id: "test", label: "Run the 7-step audit" },
  { id: "lagen", label: "The three layers" },
  { id: "faq", label: "FAQ" },
  { id: "samenvatting", label: "In short" },
  { id: "more", label: "More for electricians" },
];

const blog: BlogContent = {
  slug: "mobile-website-for-electricians-a-practical-guide-to-getting-it-right",
  language: "en",
  title: "Mobile Website for Electricians: A Practical Guide to Getting It Right",
  excerpt:
    "70-85% of electrician website visits happen on a phone, usually mid-emergency. A practical guide to click-to-call, load speed, and tap targets — with a 7-step mobile audit you can run today.",
  heroImage: getFeaturedImage().src,
  author: { name: "Growth Rocket" },
  tags: ["Electrician Websites", "Mobile"],
  category: "Electrician Websites",
  readingTime: "10 Mins",
  published: "2026-08-01",
  toc,
  faq,
  hero: { component: HeroSection },
  sections: [
    { component: IntroSection },
    { component: WhySection },
    { component: CostSection },
    { component: SignalsSection },
    { component: RequirementsSection },
    { component: ComparisonSection },
    { component: AuditSection },
    { component: LayersSection },
    {
      component: FaqSection,
      props: { heading: "Frequently asked questions", items: faq },
    },
    { component: ClosingSection },
    { component: FinalCtaSection },
    { component: MoreForElectriciansSection },
  ],
};

export default blog;
