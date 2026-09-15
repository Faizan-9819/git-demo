import type { BlogContent, BlogTocEntry } from "@/app/lib/blog-content-types";
import HeroSection from "@/components/blogs/wordpress-vs-waas-website-for-electrician-businesses-an-honest-comparison-nl/HeroSection";
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
} from "@/components/blogs/wordpress-vs-waas-website-for-electrician-businesses-an-honest-comparison-nl/GuideSections";
import ComparisonSection from "@/components/blogs/wordpress-vs-waas-website-for-electrician-businesses-an-honest-comparison-nl/ComparisonSection";
import CostSection from "@/components/blogs/wordpress-vs-waas-website-for-electrician-businesses-an-honest-comparison-nl/CostSection";
import DecisionSection from "@/components/blogs/wordpress-vs-waas-website-for-electrician-businesses-an-honest-comparison-nl/DecisionSection";
import FaqSection from "@/components/blogs/wordpress-vs-waas-website-for-electrician-businesses-an-honest-comparison-nl/FaqSection";
import faq from "./faq";
import { getFeaturedImage } from "./images";

const NL_SLUG = "wordpress-of-een-website-abonnement-de-eerlijke-vergelijking-voor-elektriciens";

const toc: BlogTocEntry[] = [
  { id: "kort-antwoord", label: "Het korte antwoord" },
  { id: "wat-elke-optie", label: "Wat elke optie is" },
  { id: "naast-elkaar", label: "Naast elkaar" },
  { id: "wordpress-verdiept", label: "WordPress verdiept" },
  { id: "abonnement-verdiept", label: "Abonnement verdiept" },
  { id: "kosten", label: "Kosten over 3 jaar" },
  { id: "vindbaarheid", label: "Vindbaarheid" },
  { id: "beslistest", label: "Beslistest" },
  { id: "randgevallen", label: "Randgevallen" },
  { id: "faq", label: "FAQ" },
  { id: "eindoordeel", label: "Eindoordeel" },
  { id: "meer", label: "Meer voor elektriciens" },
];

const blog: BlogContent = {
  slug: "wordpress-vs-waas-website-for-electrician-businesses-an-honest-comparison",
  localizedSlug: NL_SLUG,
  language: "nl",
  title: "WordPress of een website-abonnement? De eerlijke vergelijking voor elektriciens",
  excerpt:
    "Run je een installatiebedrijf in Nederland, dan heb je waarschijnlijk van twee kanten iets anders gehoord. Deze eerlijke vergelijking legt uit welke optie bij welk soort elektricien past.",
  heroImage: getFeaturedImage().src,
  author: { name: "Growth Rocket" },
  tags: ["Elektricien Websites", "Vergelijking"],
  category: "Elektricien Websites",
  readingTime: "9 Min",
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
