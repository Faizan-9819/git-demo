import type { BlogContent, BlogTocEntry } from "@/app/lib/blog-content-types";
import HeroSection from "@/components/blogs/electrician-7-day-launch/HeroSection";
import OpeningSection from "@/components/blogs/electrician-7-day-launch/OpeningSection";
import SystemSection from "@/components/blogs/electrician-7-day-launch/SystemSection";
import IntakeSection from "@/components/blogs/electrician-7-day-launch/IntakeSection";
import OwnershipSection from "@/components/blogs/electrician-7-day-launch/OwnershipSection";
import TimelineSection from "@/components/blogs/electrician-7-day-launch/TimelineSection";
import ComparisonSection from "@/components/blogs/electrician-7-day-launch/ComparisonSection";
import WhatYouGetSection from "@/components/blogs/electrician-7-day-launch/WhatYouGetSection";
import FitSection from "@/components/blogs/electrician-7-day-launch/FitSection";
import WhySection from "@/components/blogs/electrician-7-day-launch/WhySection";
import FaqSection from "@/components/blogs/electrician-7-day-launch/FaqSection";
import ClosingSection from "@/components/blogs/electrician-7-day-launch/ClosingSection";
import FinalCtaSection from "@/components/blogs/electrician-7-day-launch/FinalCtaSection";
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
];

const blog: BlogContent = {
  slug: "7-elements-of-a-high-converting-electrician-homepage",
  // Hidden: pulls this blog out of /blog, /nl/blog, related-posts carousels,
  // and sitemaps, and makes its own route 404 — flip back to false (or
  // delete this line) to bring it back. See BlogContent.hidden in
  // app/lib/blog-content-types.ts.
  hidden: true,
  language: "en",
  title: "How Growth Rocket gets your electrician website live in 7 days",
  excerpt:
    "Not by rushing the work — by replacing a six-to-twelve-week project with a complete, managed system that removes the delays.",
  heroImage: getFeaturedImage().src,
  author: { name: "Growth Rocket" },
  tags: ["Contractor Websites", "Business Growth"],
  category: "Contractor Websites",
  readingTime: "08 Mins",
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
    { component: FaqSection, props: { items: faq } },
    { component: ClosingSection },
    { component: FinalCtaSection },
  ],
};

export default blog;
