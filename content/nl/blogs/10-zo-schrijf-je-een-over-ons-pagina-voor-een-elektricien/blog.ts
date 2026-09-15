import type { BlogContent, BlogTocEntry } from "@/app/lib/blog-content-types";
import HeroSection from "@/components/blogs/10-how-to-write-an-about-us-page-for-an-electrician-nl/HeroSection";
import {
  IntroSection,
  CustomersSection,
  SignalsSection,
  BeforeAfterSection,
  WiderSiteSection,
  SummarySection,
  MoreForElectriciansSection,
} from "@/components/blogs/10-how-to-write-an-about-us-page-for-an-electrician-nl/GuideSections";
import WorkshopSection from "@/components/blogs/10-how-to-write-an-about-us-page-for-an-electrician-nl/WorkshopSection";
import FaqSection from "@/components/blogs/10-how-to-write-an-about-us-page-for-an-electrician-nl/FaqSection";
import faq from "./faq";
import { getFeaturedImage } from "./images";

const NL_SLUG = "10-zo-schrijf-je-een-over-ons-pagina-voor-een-elektricien";

const toc: BlogTocEntry[] = [
  { id: "wat-klanten", label: "Wat klanten zoeken" },
  { id: "signalen", label: "De 6 vertrouwenssignalen" },
  { id: "stap-1", label: "Stap 1: ontstaansverhaal" },
  { id: "stap-2", label: "Stap 2: team" },
  { id: "stap-3", label: "Stap 3: certificeringen" },
  { id: "stap-4", label: "Stap 4: waarden" },
  { id: "stap-5", label: "Stap 5: oprichtersnoot" },
  { id: "stap-6", label: "Stap 6: volgende stap" },
  { id: "voor-na", label: "Drie voor-en-na's" },
  { id: "plaats", label: "Plaats in je website" },
  { id: "faq", label: "FAQ" },
  { id: "samenvatting", label: "Samenvatting" },
  { id: "meer", label: "Meer voor elektriciens" },
];

const blog: BlogContent = {
  slug: "10-how-to-write-an-about-us-page-for-an-electrician",
  localizedSlug: NL_SLUG,
  language: "nl",
  title: "Zo schrijf je een over-ons-pagina voor een elektricien (die echt vertrouwen wekt)",
  excerpt:
    "De meeste huiseigenaren beslissen binnen dertig seconden na het openen van je over-ons-pagina of ze je bellen. Dit is het zes-signalen-raamwerk — plus een gratis, privé schrijfwerkplaats — om het goed te doen.",
  heroImage: getFeaturedImage().src,
  author: { name: "Growth Rocket" },
  tags: ["Elektricien Websites", "Copywriting"],
  category: "Elektricien Websites",
  readingTime: "9 Min",
  published: "2026-07-29",
  toc,
  faq,
  hero: { component: HeroSection },
  sections: [
    { component: IntroSection },
    { component: CustomersSection },
    { component: SignalsSection },
    { component: WorkshopSection },
    { component: BeforeAfterSection },
    { component: WiderSiteSection },
    { component: FaqSection },
    { component: SummarySection },
    { component: MoreForElectriciansSection },
  ],
};

export default blog;
