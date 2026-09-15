import type { BlogContent, BlogTocEntry } from "@/app/lib/blog-content-types";
import HeroSection from "@/components/blogs/mobile-website-for-electricians-a-practical-guide-to-getting-it-right-nl/HeroSection";
import {
  AuditSection,
  ClosingSection,
  ComparisonSection,
  CostSection,
  FinalCtaSection,
  IntroSection,
  LayersSection,
  MoreForElectriciansSection,
  RequirementsSection,
  SignalsSection,
  WhySection,
} from "@/components/blogs/mobile-website-for-electricians-a-practical-guide-to-getting-it-right-nl/GuideSections";
import FaqSection from "@/components/blogs/electrician-website-cost/FaqSection";
import faq from "./faq";
import { getFeaturedImage } from "./images";

const NL_SLUG =
  "mobielvriendelijke-elektricien-website-de-praktische-gids-om-het-goed-te-doen";

const toc: BlogTocEntry[] = [
  { id: "waarom", label: "Waarom mobiel telt" },
  { id: "kosten", label: "Wat een slechte ervaring kost" },
  { id: "signals", label: "Wat we steeds terugzien" },
  { id: "eisen", label: "5 mobiele eisen" },
  { id: "vergelijking", label: "Slecht versus goed" },
  { id: "test", label: "De test in 7 stappen" },
  { id: "lagen", label: "De 3 lagen" },
  { id: "faq", label: "Veelgestelde vragen" },
  { id: "samenvatting", label: "Kort samengevat" },
  { id: "meer", label: "Meer voor elektriciens" },
];

const blog: BlogContent = {
  slug: "mobile-website-for-electricians-a-practical-guide-to-getting-it-right",
  localizedSlug: NL_SLUG,
  language: "nl",
  title:
    "Mobielvriendelijke elektricien website: de praktische gids om het goed te doen",
  excerpt:
    "Het overgrote deel van het bezoek aan een elektricienwebsite komt via mobiel, vaak midden in een storing. Een praktische gids voor belknop, laadtijd en tikvlakken — met een mobiele check in 7 stappen.",
  heroImage: getFeaturedImage().src,
  author: { name: "Growth Rocket" },
  tags: ["Elektricien Websites", "Mobiel"],
  category: "Elektricien Websites",
  readingTime: "10 Min",
  published: "2026-08-01",
  toc,
  faq,
  hero: { component: HeroSection },
  sections: [
    { component: IntroSection },
    { component: WhySection },
    { component: CostSection },
    { component: SignalsSection },
    { component: RequirementsSection },
    { component: ComparisonSection },
    { component: AuditSection },
    { component: LayersSection },
    {
      component: FaqSection,
      props: { heading: "Veelgestelde vragen", items: faq },
    },
    { component: ClosingSection },
    { component: FinalCtaSection },
    { component: MoreForElectriciansSection },
  ],
};

export default blog;
