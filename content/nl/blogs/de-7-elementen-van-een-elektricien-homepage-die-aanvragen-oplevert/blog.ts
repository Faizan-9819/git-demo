import type { BlogContent, BlogTocEntry } from "@/app/lib/blog-content-types";
import HeroSection from "@/components/blogs/high-converting-homepage-nl/HeroSection";
import {
  ComparisonSection,
  ElementsSection,
  FaqAndCta,
  FrameworkSection,
  GoogleBusinessSection,
  IntroSection,
  MoreForElectriciansSection,
  RebuildPatternsSection,
} from "@/components/blogs/high-converting-homepage-nl/GuideSections";
import faq from "./faq";

const NL_SLUG =
  "de-7-elementen-van-een-elektricien-homepage-die-aanvragen-oplevert";

const toc: BlogTocEntry[] = [
  { id: "intro", label: "De drie vragen" },
  { id: "elements", label: "De 7 elementen" },
  { id: "comparison", label: "Naast elkaar" },
  { id: "patterns", label: "Snelle ingrepen" },
  { id: "google", label: "Google Bedrijfsprofiel" },
  { id: "faq", label: "Veelgestelde vragen" },
  { id: "more", label: "Meer voor elektriciens" },
];

const blog: BlogContent = {
  slug: "7-elements-of-a-high-converting-electrician-homepage",
  localizedSlug: NL_SLUG,
  language: "nl",
  title: "De 7 Elementen Van Een Elektricien-Homepage Die Aanvragen Oplevert",
  excerpt:
    "De zeven homepage-elementen die Nederlandse elektriciens helpen om meer bezoekers om te zetten in telefoontjes, WhatsApp-berichten en offerteaanvragen.",
  heroImage:
    "/blogimages/en/7-elements-of-a-high-converting-electrician-homepage/blog_5-1.webp",
  author: { name: "Growth Rocket" },
  tags: ["Elektricien Websites", "Conversie"],
  category: "Elektricien Websites",
  readingTime: "12 Min",
  published: "2026-07-17",
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
