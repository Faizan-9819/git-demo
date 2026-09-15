import type { BlogContent, BlogTocEntry } from "@/app/lib/blog-content-types";
import HeroSection from "@/components/blogs/8-electrician-website-examples-that-actually-win-customers/HeroSection";
import {
  CriteriaSection,
  CtaSection,
  ExamplesSection,
  FaqSection,
  IntroSection,
  MoreForElectriciansSection,
  OwnSiteSection,
  SharedSection,
} from "@/components/blogs/8-electrician-website-examples-that-actually-win-customers/GuideSections";
import faq from "./faq";
import { getFeaturedImage } from "./images";

const toc: BlogTocEntry[] = [
  { id: "criteria", label: "How we picked them" },
  { id: "ex1", label: "01 · The local specialist" },
  { id: "ex2", label: "02 · The service-led site" },
  { id: "ex3", label: "03 · The trust-first site" },
  { id: "ex4", label: "04 · The niche specialist" },
  { id: "ex5", label: "05 · The quote-wizard site" },
  { id: "ex6", label: "06 · The recruitment-forward site" },
  { id: "ex7", label: "07 · The booking-first site" },
  { id: "ex8", label: "08 · The editorial site" },
  { id: "gemeen", label: "What they share" },
  { id: "eigen", label: "For your own site" },
  { id: "faq", label: "Frequently asked questions" },
  { id: "more", label: "More for electricians" },
];

const blog: BlogContent = {
  slug: "8-electrician-website-examples-that-actually-win-customers",
  language: "en",
  title: "8 Electrician Website Examples That Actually Win Customers",
  excerpt:
    "Dutch and international sites, kept anonymous and broken down — what each approach gets right, where it falls short, and which pattern fits your business.",
  heroImage: getFeaturedImage().src,
  author: { name: "Growth Rocket" },
  tags: ["Electrician Websites", "Examples"],
  category: "Electrician Websites",
  readingTime: "10 Mins",
  published: "2026-07-15",
  toc,
  faq,
  hero: { component: HeroSection },
  sections: [
    { component: IntroSection },
    { component: CriteriaSection },
    { component: ExamplesSection },
    { component: SharedSection },
    { component: OwnSiteSection },
    { component: CtaSection },
    {
      component: FaqSection,
      props: { heading: "Frequently asked questions", items: faq },
    },
    { component: MoreForElectriciansSection },
  ],
};

export default blog;
