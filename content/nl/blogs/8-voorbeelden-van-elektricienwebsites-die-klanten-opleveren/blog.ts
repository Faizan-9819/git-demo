import type { BlogContent, BlogTocEntry } from "@/app/lib/blog-content-types";
import HeroSection from "@/components/blogs/8-electrician-website-examples-that-actually-win-customers-nl/HeroSection";
import {
  CriteriaSection,
  CtaSection,
  ExamplesSection,
  FaqSection,
  IntroSection,
  MoreForElectriciansSection,
  OwnSiteSection,
  SharedSection,
} from "@/components/blogs/8-electrician-website-examples-that-actually-win-customers-nl/GuideSections";
import faq from "./faq";
import { getFeaturedImage } from "./images";

const NL_SLUG = "8-voorbeelden-van-elektricienwebsites-die-klanten-opleveren";

const toc: BlogTocEntry[] = [
  { id: "criteria", label: "De selectiecriteria" },
  { id: "ex1", label: "01 · De lokale specialist" },
  { id: "ex2", label: "02 · De dienstgedreven site" },
  { id: "ex3", label: "03 · De vertrouwen-eerst-site" },
  { id: "ex4", label: "04 · De nichespecialist" },
  { id: "ex5", label: "05 · De offertewizard-site" },
  { id: "ex6", label: "06 · De wervingsgerichte site" },
  { id: "ex7", label: "07 · De boeking-eerst-site" },
  { id: "ex8", label: "08 · De redactionele site" },
  { id: "gemeen", label: "Wat ze gemeen hebben" },
  { id: "eigen", label: "Voor je eigen site" },
  { id: "faq", label: "Veelgestelde vragen" },
  { id: "meer", label: "Meer voor elektriciens" },
];

const blog: BlogContent = {
  slug: "8-electrician-website-examples-that-actually-win-customers",
  localizedSlug: NL_SLUG,
  language: "nl",
  title: "8 Voorbeelden Van Elektricienwebsites Die Klanten Opleveren",
  excerpt:
    "Nederlandse en internationale sites, geanonimiseerd en ontleed — wat elke aanpak goed doet, waar hij tekortschiet, en welk patroon past bij jouw bedrijf.",
  heroImage: getFeaturedImage().src,
  author: { name: "Growth Rocket" },
  tags: ["Elektricien Websites", "Voorbeelden"],
  category: "Elektricien Websites",
  readingTime: "9 Min",
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
      props: { heading: "Veelgestelde vragen", items: faq },
    },
    { component: MoreForElectriciansSection },
  ],
};

export default blog;
