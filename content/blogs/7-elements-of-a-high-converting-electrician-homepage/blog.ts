import type { BlogContent, BlogTocEntry } from "@/app/lib/blog-content-types";
import HeroSection from "@/components/blogs/high-converting-homepage/HeroSection";
import {
  ComparisonSection,
  ElementsSection,
  FaqAndCta,
  FrameworkSection,
  GoogleBusinessSection,
  IntroSection,
  MoreForElectriciansSection,
  RebuildPatternsSection,
} from "@/components/blogs/high-converting-homepage/GuideSections";
import faq from "./faq";

const toc: BlogTocEntry[] = [
  { id: "intro", label: "The three questions" },
  { id: "elements", label: "The 7 elements" },
  { id: "comparison", label: "Side by side" },
  { id: "patterns", label: "Quick wins" },
  { id: "google", label: "Google Business Profile" },
  { id: "faq", label: "FAQ" },
  { id: "more", label: "More for electricians" },
];

const blog: BlogContent = {
  slug: "7-elements-of-a-high-converting-electrician-homepage",
  language: "en",
  title: "7 Elements of a High-Converting Electrician Homepage",
  excerpt:
    "The seven homepage elements that help Dutch electricians turn more visitors into calls, WhatsApp messages, and quote requests.",
  heroImage:
    "/blogimages/en/7-elements-of-a-high-converting-electrician-homepage/blog_5-1.webp",
  author: { name: "Growth Rocket" },
  tags: ["Electrician Websites", "Conversion"],
  category: "Electrician Websites",
  readingTime: "12 Mins",
  published: "2026-07-18",
  toc,
  faq,
  hero: { component: HeroSection },
  afterHero: { component: FrameworkSection },
  sections: [
    { component: IntroSection },
    { component: ElementsSection },
    { component: ComparisonSection },
    { component: RebuildPatternsSection },
    { component: GoogleBusinessSection },
    { component: FaqAndCta, props: { faq } },
    { component: MoreForElectriciansSection },
  ],
};

export default blog;
