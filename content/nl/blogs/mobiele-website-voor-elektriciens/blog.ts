import type { BlogContent, BlogTocEntry } from "@/app/lib/blog-content-types";
import HeroSection from "@/components/blogs/mobile-website-for-electricians-nl/HeroSection";
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
} from "@/components/blogs/mobile-website-for-electricians-nl/GuideSections";
import FaqSection from "@/components/blogs/electrician-website-cost/FaqSection";
import faq from "./faq";
import { getFeaturedImage } from "./images";

const NL_SLUG = "mobiele-website-voor-elektriciens";

const toc: BlogTocEntry[] = [
  { id: "waarom", label: "Waarom mobiel zwaar telt" },
  { id: "kosten", label: "Wat het je kost" },
  { id: "eisen", label: "Wat een goede site nodig heeft" },
  { id: "stappen", label: "De 8 stappen" },
  { id: "vergelijking", label: "Onvriendelijk vs. vriendelijk" },
  { id: "check", label: "Snelle mobiele check" },
  { id: "faq", label: "Veelgestelde vragen" },
  { id: "meer", label: "Meer voor elektriciens" },
];

const blog: BlogContent = {
  slug: "6-mobile-website-for-electricians",
  localizedSlug: NL_SLUG,
  language: "nl",
  title: "Mobiele website voor elektriciens: waarom het zwaarder telt dan je denkt",
  excerpt:
    "Een spoedzoeker met één duim op de telefoon belt de eerste elektricien die bij de eerste tik werkt. Zo fix je laadtijd, belknop en vertrouwenssignalen — met een 11-punts mobiele check.",
  heroImage: getFeaturedImage().src,
  author: { name: "Growth Rocket" },
  tags: ["Elektricien Websites", "Mobiel"],
  category: "Elektricien Websites",
  readingTime: "09 Min",
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
      props: { heading: "Veelgestelde vragen", items: faq },
    },
    { component: ClosingSection },
    {
      component: FinalCtaSection,
      props: {
        heading: "Klaar met zelf sleutelen aan je site?",
        body: "Je kent nu de volledige omvang van het werk. Liever een mobielvriendelijke elektricienwebsite die volledig voor je wordt gebouwd én beheerd — mobiel-eerst, met belknop, WhatsApp en vertrouwenssignalen op orde? Zie hoe het proces werkt.",
        features: [
          "Mobiel-eerst gebouwd",
          "Belknop & WhatsApp in de kop",
          "Laadtijd, formulier & werkgebied op orde",
          "Hosting, updates & onderhoud inbegrepen",
        ],
        ctaLabel: "Bekijk hoe het werkt",
      },
    },
    { component: MoreForElectriciansSection },
  ],
};

export default blog;
