import type { BlogContent, BlogTocEntry } from "@/app/lib/blog-content-types";
import HeroSection from "@/components/blogs/11-how-growth-rocket-gets-your-electrician-website-live-in-7-days-nl/HeroSection";
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
} from "@/components/blogs/11-how-growth-rocket-gets-your-electrician-website-live-in-7-days-nl/GuideSections";
import TimelineSection from "@/components/blogs/11-how-growth-rocket-gets-your-electrician-website-live-in-7-days-nl/TimelineSection";
import FaqSection from "@/components/blogs/11-how-growth-rocket-gets-your-electrician-website-live-in-7-days-nl/FaqSection";
import faq from "./faq";
import { getFeaturedImage } from "./images";

const NL_SLUG = "11-elektricienwebsite-laten-maken";

const toc: BlogTocEntry[] = [
  { id: "opening", label: "De traditionele manier" },
  { id: "system", label: "Een systeem, geen belofte" },
  { id: "intake", label: "Vóór dag 1" },
  { id: "ownership", label: "Growth Rocket neemt het over" },
  { id: "timeline", label: "De 7 dagen" },
  { id: "comparison", label: "Waarom een bureau weken nodig heeft" },
  { id: "whatyouget", label: "Wat je krijgt" },
  { id: "fit", label: "Wél en niet voor gebouwd" },
  { id: "why", label: "Waarom dit telt" },
  { id: "faq", label: "Veelgestelde vragen" },
  { id: "meer", label: "Meer voor elektriciens" },
];

const blog: BlogContent = {
  slug: "11-how-growth-rocket-gets-your-electrician-website-live-in-7-days",
  localizedSlug: NL_SLUG,
  language: "nl",
  title: "Elektricienwebsite laten maken: zo staat hij met Growth Rocket binnen 7 dagen online",
  excerpt:
    "Niet door te haasten — maar door een project van zes tot twaalf weken te vervangen door een compleet, beheerd systeem dat de vertragingen wegneemt.",
  heroImage: getFeaturedImage().src,
  author: { name: "Growth Rocket" },
  tags: ["Elektricien Websites", "Proces"],
  category: "Elektricien Websites",
  readingTime: "8 Min",
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
