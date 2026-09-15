import type { BlogContent, BlogTocEntry } from "@/app/lib/blog-content-types";
import HeroSection from "@/components/blogs/10-how-to-write-an-about-us-page-for-an-electrician/HeroSection";
import {
  IntroSection,
  CustomersSection,
  SignalsSection,
  BeforeAfterSection,
  WiderSiteSection,
  SummarySection,
  MoreForElectriciansSection,
} from "@/components/blogs/10-how-to-write-an-about-us-page-for-an-electrician/GuideSections";
import WorkshopSection from "@/components/blogs/10-how-to-write-an-about-us-page-for-an-electrician/WorkshopSection";
import FaqSection from "@/components/blogs/10-how-to-write-an-about-us-page-for-an-electrician/FaqSection";
import faq from "./faq";
import { getFeaturedImage } from "./images";

const toc: BlogTocEntry[] = [
  { id: "customers", label: "What customers want" },
  { id: "signals", label: "The 6 trust signals" },
  { id: "step-1", label: "Step 1: origin story" },
  { id: "step-2", label: "Step 2: team" },
  { id: "step-3", label: "Step 3: certifications" },
  { id: "step-4", label: "Step 4: values" },
  { id: "step-5", label: "Step 5: founder note" },
  { id: "step-6", label: "Step 6: next step" },
  { id: "before-after", label: "Before & after" },
  { id: "wider-site", label: "Where it fits" },
  { id: "faq", label: "FAQ" },
  { id: "summary", label: "Summary" },
  { id: "more", label: "More for electricians" },
];

const blog: BlogContent = {
  slug: "10-how-to-write-an-about-us-page-for-an-electrician",
  language: "en",
  title: "How to write an About Us page for an electrician (that actually builds trust)",
  excerpt:
    "Most homeowners decide whether to call you within 30 seconds of landing on your About Us page. Here's the six-signal framework — plus a free, private writing workshop — to help you get it right.",
  heroImage: getFeaturedImage().src,
  author: { name: "Growth Rocket" },
  tags: ["Electrician Websites", "Copywriting"],
  category: "Electrician Websites",
  readingTime: "9 Mins",
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
