import type { BlogContent, BlogTocEntry } from "@/app/lib/blog-content-types";
import HeroSection from "@/components/blogs/3-diy-vs-done-for-you-website-for-an-electrician-which-one-fits-you/HeroSection";
import {
  OverzichtSection,
  VoorWieSection,
  RoutesSection,
  AdviesSection,
  SysteemSection,
  CtaSection,
  MeerSection,
} from "@/components/blogs/3-diy-vs-done-for-you-website-for-an-electrician-which-one-fits-you/GuideSections";
import TabelSection from "@/components/blogs/3-diy-vs-done-for-you-website-for-an-electrician-which-one-fits-you/TabelSection";
import FaqSection from "@/components/blogs/3-diy-vs-done-for-you-website-for-an-electrician-which-one-fits-you/FaqSection";
import faq from "./faq";
import { getFeaturedImage } from "./images";

const toc: BlogTocEntry[] = [
  { id: "overzicht", label: "In brief" },
  { id: "voor-wie", label: "Who it's for" },
  { id: "routes", label: "The three routes" },
  { id: "tabel", label: "Side by side" },
  { id: "advies", label: "Scenario advice" },
  { id: "systeem", label: "What most skip" },
  { id: "faq", label: "FAQ" },
  { id: "meer", label: "More for electricians" },
];

const blog: BlogContent = {
  slug: "3-diy-vs-done-for-you-website-for-an-electrician-which-one-fits-you",
  language: "en",
  title: "DIY vs Done-For-You website for an electrician: which one fits you?",
  excerpt:
    "Three honest routes: build it yourself with Wix or WordPress, hire a freelancer, or pay a fixed fee for a fully managed service. No hype — just the trade-offs.",
  heroImage: getFeaturedImage().src,
  author: { name: "Growth Rocket" },
  tags: ["Electrician Websites", "Comparison"],
  category: "Electrician Websites",
  readingTime: "8 Mins",
  published: "2026-07-08",
  toc,
  faq,
  hero: { component: HeroSection },
  sections: [
    { component: OverzichtSection },
    { component: VoorWieSection },
    { component: RoutesSection },
    { component: TabelSection },
    { component: AdviesSection },
    { component: SysteemSection },
    { component: CtaSection },
    { component: FaqSection },
    { component: MeerSection },
  ],
};

export default blog;
