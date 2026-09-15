import type { BlogContent, BlogTocEntry } from "@/app/lib/blog-content-types";
import HeroSection from "@/components/blogs/3-diy-vs-done-for-you-website-for-an-electrician-which-one-fits-you-nl/HeroSection";
import {
  OverzichtSection,
  VoorWieSection,
  RoutesSection,
  AdviesSection,
  SysteemSection,
  CtaSection,
  MeerSection,
} from "@/components/blogs/3-diy-vs-done-for-you-website-for-an-electrician-which-one-fits-you-nl/GuideSections";
import TabelSection from "@/components/blogs/3-diy-vs-done-for-you-website-for-an-electrician-which-one-fits-you-nl/TabelSection";
import FaqSection from "@/components/blogs/3-diy-vs-done-for-you-website-for-an-electrician-which-one-fits-you-nl/FaqSection";
import faq from "./faq";
import { getFeaturedImage } from "./images";

const NL_SLUG = "3-website-zelf-maken-of-laten-maken-de-eerlijke-vergelijking-voor-elektriciens";

const toc: BlogTocEntry[] = [
  { id: "overzicht", label: "In het kort" },
  { id: "voor-wie", label: "Voor wie" },
  { id: "routes", label: "De drie routes" },
  { id: "tabel", label: "Naast elkaar" },
  { id: "advies", label: "Advies per situatie" },
  { id: "systeem", label: "Wat de meeste missen" },
  { id: "faq", label: "Veelgestelde vragen" },
  { id: "meer", label: "Meer voor elektriciens" },
];

const blog: BlogContent = {
  slug: "3-diy-vs-done-for-you-website-for-an-electrician-which-one-fits-you",
  localizedSlug: NL_SLUG,
  language: "nl",
  title: "Website zelf maken of laten maken? De eerlijke vergelijking voor elektriciens",
  excerpt:
    "Drie eerlijke routes: zelf bouwen met Wix of WordPress, een freelancer inhuren, of een vast bedrag per jaar voor een volledig ontzorgde dienst. Geen verkooppraatje — alleen de afwegingen.",
  heroImage: getFeaturedImage().src,
  author: { name: "Growth Rocket" },
  tags: ["Elektricien Websites", "Vergelijking"],
  category: "Elektricien Websites",
  readingTime: "8 Min",
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
