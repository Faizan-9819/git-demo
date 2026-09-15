import type { BlogContent, BlogTocEntry } from "@/app/lib/blog-content-types";
import HeroSection from "@/components/blogs/mobile-website-for-electricians/HeroSection";
import {
  AuditSection,
  ClosingSection,
  ComparisonSection,
  CostSection,
  FinalCtaSection,
  IntroSection,
  MoreForElectriciansSection,
  RequirementsSection,
  StepsSection,
} from "@/components/blogs/mobile-website-for-electricians/GuideSections";
import FaqSection from "@/components/blogs/electrician-website-cost/FaqSection";
import faq from "./faq";
import { getFeaturedImage } from "./images";

const toc: BlogTocEntry[] = [
  { id: "waarom", label: "Why mobile matters" },
  { id: "kosten", label: "What it costs" },
  { id: "eisen", label: "What a good site needs" },
  { id: "stappen", label: "The 8 steps" },
  { id: "vergelijking", label: "Hostile vs. friendly" },
  { id: "check", label: "Quick mobile audit" },
  { id: "faq", label: "FAQ" },
  { id: "meer", label: "More for electricians" },
];

const blog: BlogContent = {
  slug: "6-mobile-website-for-electricians",
  language: "en",
  title: "Mobile Website for Electricians: Why It Matters More Than You Think",
  excerpt:
    "An emergency searcher with one thumb on the phone calls the first electrician whose number works on the first tap. Here's how to fix load speed, click-to-call, and trust signals — with an 11-point mobile audit.",
  heroImage: getFeaturedImage().src,
  author: { name: "Growth Rocket" },
  tags: ["Electrician Websites", "Mobile"],
  category: "Electrician Websites",
  readingTime: "09 Mins",
  published: "2026-07-31",
  toc,
  faq,
  hero: { component: HeroSection },
  sections: [
    { component: IntroSection },
    { component: CostSection },
    { component: RequirementsSection },
    { component: StepsSection },
    { component: ComparisonSection },
    { component: AuditSection },
    {
      component: FaqSection,
      props: { heading: "Frequently asked questions", items: faq },
    },
    { component: ClosingSection },
    {
      component: FinalCtaSection,
      props: {
        heading: "Done tinkering with your own site?",
        body: "You now understand the full scope of the work. Rather have a mobile-ready electrician website built and managed for you — mobile-first, with click-to-call, WhatsApp, and trust signals sorted? See how the process works.",
        features: [
          "Built mobile-first",
          "Click-to-call & WhatsApp in the header",
          "Load speed, form & service area sorted",
          "Hosting, updates & maintenance included",
        ],
        ctaLabel: "See how it works",
      },
    },
    { component: MoreForElectriciansSection },
  ],
};

export default blog;
