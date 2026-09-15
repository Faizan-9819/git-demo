import type { BlogContent, BlogTocEntry } from "@/app/lib/blog-content-types";
import HeroSection from "@/components/blogs/11-how-growth-rocket-gets-your-electrician-website-live-in-7-days/HeroSection";
import {
  OpeningSection,
  SystemSection,
  IntakeSection,
  OwnershipSection,
  ComparisonSection,
  WhatYouGetSection,
  FitSection,
  WhySection,
  ClosingSection,
  FinalCtaSection,
  MoreForElectriciansSection,
} from "@/components/blogs/11-how-growth-rocket-gets-your-electrician-website-live-in-7-days/GuideSections";
import TimelineSection from "@/components/blogs/11-how-growth-rocket-gets-your-electrician-website-live-in-7-days/TimelineSection";
import FaqSection from "@/components/blogs/11-how-growth-rocket-gets-your-electrician-website-live-in-7-days/FaqSection";
import faq from "./faq";
import { getFeaturedImage } from "./images";

const toc: BlogTocEntry[] = [
  { id: "opening", label: "The traditional way" },
  { id: "system", label: "A system, not a promise" },
  { id: "intake", label: "Before Day 1" },
  { id: "ownership", label: "Growth Rocket takes over" },
  { id: "timeline", label: "The 7-day timeline" },
  { id: "comparison", label: "Why agencies need weeks" },
  { id: "whatyouget", label: "What you get" },
  { id: "fit", label: "Built for / not for" },
  { id: "why", label: "Why it matters" },
  { id: "faq", label: "FAQ" },
  { id: "more", label: "More for electricians" },
];

const blog: BlogContent = {
  slug: "11-how-growth-rocket-gets-your-electrician-website-live-in-7-days",
  language: "en",
  title: "How Growth Rocket gets your electrician website live in 7 days",
  excerpt:
    "Not by rushing the work — by replacing a six-to-twelve-week project with a complete, managed system that removes the delays.",
  heroImage: getFeaturedImage().src,
  author: { name: "Growth Rocket" },
  tags: ["Electrician Websites", "Process"],
  category: "Electrician Websites",
  readingTime: "8 Mins",
  published: "2026-07-08",
  toc,
  faq,
  hero: { component: HeroSection },
  sections: [
    { component: OpeningSection },
    { component: SystemSection },
    { component: IntakeSection },
    { component: OwnershipSection },
    { component: TimelineSection },
    { component: ComparisonSection },
    { component: WhatYouGetSection },
    { component: FitSection },
    { component: WhySection },
    { component: FaqSection },
    { component: ClosingSection },
    { component: FinalCtaSection },
    { component: MoreForElectriciansSection },
  ],
};

export default blog;
