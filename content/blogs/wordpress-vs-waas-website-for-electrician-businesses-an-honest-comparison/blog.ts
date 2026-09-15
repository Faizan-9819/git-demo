import type { BlogContent, BlogTocEntry } from "@/app/lib/blog-content-types";
import HeroSection from "@/components/blogs/wordpress-vs-waas-website-for-electrician-businesses-an-honest-comparison/HeroSection";
import {
  IntroSection,
  ShortAnswerSection,
  WhatEachIsSection,
  WordpressDeepSection,
  WaasDeepSection,
  SeoSection,
  EdgeCasesSection,
  VerdictSection,
  DecisionFlowSection,
  MoreForElectriciansSection,
} from "@/components/blogs/wordpress-vs-waas-website-for-electrician-businesses-an-honest-comparison/GuideSections";
import ComparisonSection from "@/components/blogs/wordpress-vs-waas-website-for-electrician-businesses-an-honest-comparison/ComparisonSection";
import CostSection from "@/components/blogs/wordpress-vs-waas-website-for-electrician-businesses-an-honest-comparison/CostSection";
import DecisionSection from "@/components/blogs/wordpress-vs-waas-website-for-electrician-businesses-an-honest-comparison/DecisionSection";
import FaqSection from "@/components/blogs/wordpress-vs-waas-website-for-electrician-businesses-an-honest-comparison/FaqSection";
import faq from "./faq";
import { getFeaturedImage } from "./images";

const toc: BlogTocEntry[] = [
  { id: "short-answer", label: "The short answer" },
  { id: "what-each-is", label: "What each option is" },
  { id: "side-by-side", label: "Side by side" },
  { id: "wordpress-deep", label: "WordPress in depth" },
  { id: "waas-deep", label: "WaaS in depth" },
  { id: "costs", label: "Cost over 3 years" },
  { id: "seo", label: "SEO ceiling" },
  { id: "decision", label: "Decision test" },
  { id: "edge-cases", label: "Edge cases" },
  { id: "faq", label: "FAQ" },
  { id: "verdict", label: "Final word" },
  { id: "more", label: "More for electricians" },
];

const blog: BlogContent = {
  slug: "wordpress-vs-waas-website-for-electrician-businesses-an-honest-comparison",
  language: "en",
  title: "WordPress vs WaaS website for electrician businesses: an honest comparison",
  excerpt:
    "If you run an electrical business in the Netherlands, you've probably been told two different things by two different people. This honest comparison lays out which option fits which kind of electrician.",
  heroImage: getFeaturedImage().src,
  author: { name: "Growth Rocket" },
  tags: ["Electrician Websites", "Comparison"],
  category: "Electrician Websites",
  readingTime: "9 Mins",
  published: "2026-07-20",
  toc,
  faq,
  hero: { component: HeroSection },
  sections: [
    { component: IntroSection },
    { component: ShortAnswerSection },
    { component: WhatEachIsSection },
    { component: ComparisonSection },
    { component: WordpressDeepSection },
    { component: WaasDeepSection },
    { component: CostSection },
    { component: SeoSection },
    { component: DecisionSection },
    { component: EdgeCasesSection },
    { component: FaqSection },
    { component: VerdictSection },
    { component: DecisionFlowSection },
    { component: MoreForElectriciansSection },
  ],
};

export default blog;
