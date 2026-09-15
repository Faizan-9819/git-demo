import type { BlogContent, BlogTocEntry } from "@/app/lib/blog-content-types";
import HeroSection from "@/components/blogs/electrician-website-checklist/HeroSection";
import WhySection from "@/components/blogs/electrician-website-checklist/WhySection";
import PagesSection from "@/components/blogs/electrician-website-checklist/PagesSection";
import SystemSection from "@/components/blogs/electrician-website-checklist/SystemSection";
import MidCtaSection from "@/components/blogs/electrician-website-checklist/MidCtaSection";
import FaqSection from "@/components/blogs/electrician-website-cost/FaqSection";
import MoreForElectriciansSection from "@/components/blogs/electrician-website-cost/MoreForElectriciansSection";
import faq from "./faq";
import { getFeaturedImage } from "./images";
import { TrustIcon, ServicesIcon, ContactIcon } from "@/components/blogs/electrician-website-checklist/whyIcons";

const toc: BlogTocEntry[] = [
  { id: "why", label: "Why this checklist" },
  { id: "pages", label: "The 10 pages" },
  { id: "system", label: "Handled in 7 days" },
  { id: "faq", label: "FAQ" },
  { id: "more", label: "More for electricians" },
];

const blog: BlogContent = {
  slug: "electrician-website-checklist",
  language: "en",
  title: "The electrician website checklist: 10 must-have pages every site needs",
  excerpt:
    "Most electrician websites are missing the pages customers actually look for before calling. This checklist covers the 10 essential pages your site needs — and the mistake to avoid on each one.",
  heroImage: getFeaturedImage().src,
  author: { name: "Growth Rocket" },
  tags: ["Contractor Websites", "Business Growth"],
  category: "Contractor Websites",
  readingTime: "07 Mins",
  published: "2026-07-08",
  toc,
  faq,
  hero: {
    component: HeroSection,
    props: {
      eyebrowGuide: "Checklist",
      eyebrowPill: "Made for electricians",
      title: "The electrician website checklist: 10 must-have pages every site needs",
      subtitle:
        "Most electrician websites are missing the pages customers actually look for before calling. This checklist covers the 10 essential pages your site needs — and the mistake to avoid on each one.",
      ctaLabel: "Download the full checklist (PDF)",
      ctaHref: "https://growthrocket.eu/resources/electrician-website-checklist-pdf/",
      secondaryLabel: "See the 10 pages",
      secondaryHref: "#pages",
      metaDate: "8 July 2026",
      metaReadTime: "7 min read",
      previewEyebrow: "The 10 pages",
      previewItems: [
        { label: "Homepage", checked: true },
        { label: "Services", checked: true },
        { label: "Service area", checked: true },
        { label: "About", checked: false },
        { label: "Reviews", checked: false },
        { label: "Contact", checked: false },
        { label: "Quote request", checked: false },
        { label: "FAQ", checked: false },
        { label: "Emergency callouts", checked: false },
        { label: "Careers", checked: false },
      ],
      previewFootnote: "3 of 10 present — how the average electrician site scores",
    },
  },
  sections: [
    {
      component: WhySection,
      props: {
        isFirst: true,
        heading: "Why this checklist matters",
        lead:
          "An electrician's website has one job: help a potential customer decide to call or request a quote. Missing pages create doubt. Thin pages waste traffic. And a site built like a brochure rarely brings in work.",
        body: "The checklist below is based on what Dutch homeowners and businesses actually look for when choosing an electrician online — trust signals, clear services, and an easy way to get in touch.",
        cards: [
          { title: "Trust signals", body: "Proof that you're a real, certified business.", icon: TrustIcon },
          { title: "Clear services", body: "Services in the customer's own words.", icon: ServicesIcon },
          { title: "Easy to reach", body: "Call, WhatsApp or a quote — in one tap.", icon: ContactIcon },
        ],
        outro: "Let's start at the beginning — the page everyone sees first.",
      },
    },
    {
      component: PagesSection,
      props: {
        heading: "The 10 must-have pages for an electrician website",
        lead: "Each page below includes a short explanation, what to include, and the common mistake to avoid.",
        image: { src: getFeaturedImage().src, alt: getFeaturedImage().alt },
        transitionAfterIndex: 4,
        transitionText: "That's trust covered. Now getting in touch needs to be effortless.",
        pages: [
          {
            num: "01",
            eyebrow: "Page 1",
            title: "Homepage",
            intro: "Explain who you are, what you do, and the area you cover — within 5 seconds.",
            includeLabel: "What to include",
            include: [
              'A clear headline (e.g. "Certified electrician serving Amsterdam and surrounding areas")',
              "A short summary of your main services",
              "A phone number and contact button in the top navigation",
              "2–3 trust signals (years in business, certifications, review count)",
              "A clear call to action (request a quote, call now, book a visit)",
            ],
            mistakeLabel: "Common mistake",
            mistake:
              "Using vague slogans instead of stating the service and the area. Visitors should never have to scroll to find out where you work.",
          },
          {
            num: "02",
            eyebrow: "Page 2",
            title: "Services page",
            intro: "List every service you offer so customers can match their need to your work.",
            includeLabel: "What to include",
            include: [
              "A full list of services (installation, rewiring, fuse box replacement, inspections, lighting, etc.)",
              "A short description for each",
              'Clear pricing guidance where possible (from prices, hourly rate, or "quote on request")',
              "A button to request a quote for each service",
            ],
            mistakeLabel: "Common mistake",
            mistake: "One long paragraph of services instead of a structured list. Customers skim — they don't read.",
          },
          {
            num: "03",
            eyebrow: "Page 3",
            title: "Service area or city pages",
            intro: "Help you rank in local search and show customers you work in their town.",
            includeLabel: "What to include",
            include: [
              "A dedicated page for each city or region you serve",
              'A short intro mentioning the area (e.g. "Electrician in Utrecht")',
              "The services you provide there",
              "Local references or completed projects if available",
            ],
            mistakeLabel: "Common mistake",
            mistake:
              "Copy-pasting the same content across city pages. Google treats this as duplicate content, and it rarely ranks.",
          },
          {
            num: "04",
            eyebrow: "Page 4",
            title: "About page",
            intro: "Build trust. Customers want to know who is coming to their home.",
            includeLabel: "What to include",
            include: [
              "The story of the business and how long you've been operating",
              "Real photos of you and your team (not stock images)",
              "Certifications, licenses, and memberships (e.g. Techniek Nederland)",
              "KvK number and VAT number for credibility",
            ],
            mistakeLabel: "Common mistake",
            mistake:
              "Writing in generic marketing language. A simple, honest page works better than a polished corporate one.",
          },
          {
            num: "05",
            eyebrow: "Page 5",
            title: "Reviews or testimonials page",
            intro: "Show real proof that customers trust your work.",
            includeLabel: "What to include",
            include: [
              "Genuine reviews from past customers",
              "Star ratings if you have them on Google",
              "A mix of residential and commercial reviews, if applicable",
              "A link to your Google Business profile",
            ],
            mistakeLabel: "Common mistake",
            mistake:
              "Made-up testimonials without names or locations. Customers can spot them quickly, and it damages trust.",
          },
          {
            num: "06",
            eyebrow: "Page 6",
            title: "Contact page",
            intro: "Make it effortless for someone to reach you.",
            includeLabel: "What to include",
            include: [
              "Phone number (clickable on mobile)",
              "Email address",
              "WhatsApp button (very common in the Netherlands)",
              "A short contact form",
              "Opening hours",
              "Address or service area map",
            ],
            mistakeLabel: "Common mistake",
            mistake:
              "Hiding the contact page behind multiple clicks, or only offering a form. Some customers prefer to call straight away.",
          },
          {
            num: "07",
            eyebrow: "Page 7",
            title: "Quote request page",
            intro: "Capture structured information from customers who are ready to buy.",
            includeLabel: "What to include",
            include: [
              "A simple form with key questions (service type, location, timing)",
              "An option to upload a photo of the issue (e.g. fuse box)",
              "A clear note on how quickly you'll respond",
              "A thank-you message after submission",
            ],
            mistakeLabel: "Common mistake",
            mistake: "Asking for too much information. Long forms reduce enquiries. Keep it to what's genuinely needed.",
          },
          {
            num: "08",
            eyebrow: "Page 8",
            title: "FAQ page",
            intro: "Answer the questions customers search for before they call.",
            includeLabel: "What to include",
            include: [
              "8–12 questions covering pricing, timing, guarantees, certifications, and common services",
              "Short, direct answers (2–4 sentences each)",
              "Links to relevant service pages",
            ],
            mistakeLabel: "Common mistake",
            mistake: "Generic FAQs that don't answer real questions. Use the questions customers actually ask you on the phone.",
          },
          {
            num: "09",
            eyebrow: "Page 9",
            title: "Emergency callouts page",
            intro: "Capture high-intent, urgent traffic — power outages, tripped fuse boxes, faulty wiring.",
            includeLabel: "What to include",
            include: [
              "A clear statement that you handle emergencies",
              'Your response time (e.g. "Available within 2 hours in the Randstad")',
              "A prominent phone number and WhatsApp button",
              "Pricing guidance for emergency callouts",
            ],
            mistakeLabel: "Common mistake",
            mistake: "Not having this page at all. Emergency searches have the highest buying intent of any electrician keyword.",
          },
          {
            num: "10",
            eyebrow: "Page 10",
            title: "Careers or apprenticeship page",
            intro: "Attract new staff and apprentices — often the biggest bottleneck for Dutch electrical firms.",
            includeLabel: "What to include",
            include: [
              "Open roles (electricians, apprentices, BBL leerplek)",
              "A short description of the company culture",
              "An easy way to apply (form, email, or WhatsApp)",
              "Benefits and training offered",
            ],
            mistakeLabel: "Common mistake",
            mistake:
              "Treating the careers page as an afterthought. In a labour-shortage market, this page can be as valuable as your services page.",
          },
        ],
        outro:
          "Ten pages, each with its own content, purpose, and upkeep. Which raises a practical question: who's going to build and maintain all of it?",
      },
    },
    {
      component: SystemSection,
      props: {
        heading: "How Growth Rocket handles all 10 pages for you",
        paragraphs: [
          "Setting up these pages manually takes weeks. Most electricians don't have the time, and most agencies charge thousands for a one-off build.",
          "Growth Rocket websites come with all 10 pages pre-built into a managed template designed for trades businesses — a complete online business system, and you're live within 7 days. Content is adjusted to your business, your certifications, and your service area. The enquiry form connects directly to the Growth Rocket Hub, so every lead, quote request, and emergency callout is organised in one place.",
        ],
        nodeLabels: ["Your website (10 pages)", "Enquiry or booking", "Growth Rocket Hub"],
        outro:
          "Everything works out of the box, and updates are handled for you — no technical hassle. One thing the system can't manufacture: the proof. Real reviews, real photos, and real projects come from your own work — the website just gives them the place they deserve.",
      },
    },
    {
      component: MidCtaSection,
      props: {
        heading: "Want a complete electrician website — built and managed for you?",
        body: "See how the 7-day process works — from intake to launch, explained day by day.",
        features: [
          "All 10 pages built in as standard",
          "Copy written for you",
          "Enquiry form connected to the Hub",
          "Live within 7 days",
          "Hosting, updates and maintenance handled",
          "One fixed price per year, no surprises",
        ],
        ctaLabel: "See how it works",
        ctaHref: "/blog/11-how-growth-rocket-gets-your-electrician-website-live-in-7-days",
      },
    },
    {
      component: FaqSection,
      props: { heading: "Frequently asked questions", items: faq },
    },
    {
      component: MoreForElectriciansSection,
      props: {
        heading: "More for electricians",
        intro:
          "Everything that helps you win more enquiries online — from costs and choices to the build and the individual pages.",
        toggleLabel: "Browse all articles for electricians",
        groups: [
          {
            heading: "Costs & choices",
            links: [
              { label: "What does a website for an electrician cost?", href: "/blog/electrician-website-cost-netherlands" },
              {
                label: "WordPress or a website subscription?",
                href: "/blog/wordpress-vs-waas-website-for-electrician-businesses-an-honest-comparison",
              },
              {
                label: "DIY vs done-for-you: which fits you?",
                href: "/blog/3-diy-vs-done-for-you-website-for-an-electrician-which-one-fits-you",
              },
            ],
          },
          {
            heading: "Build & process",
            links: [
              { label: "How long does it take to build an electrician website?", href: "/blog/electrician-website-build-timeline" },
              { label: "Mobile website for electricians: why it matters", href: "/blog/6-mobile-website-for-electricians" },
              {
                label: "Test your electrician website on mobile in 7 steps",
                href: "/blog/mobile-website-for-electricians-a-practical-guide-to-getting-it-right",
              },
              {
                label: "Online within 7 days: how it works",
                href: "/blog/11-how-growth-rocket-gets-your-electrician-website-live-in-7-days",
              },
            ],
          },
          {
            heading: "Pages & SEO",
            links: [
              {
                label: "The 7 elements of a homepage that wins enquiries",
                href: "/blog/7-elements-of-a-high-converting-electrician-homepage",
              },
              {
                label: "How to write an about page that builds trust",
                href: "/blog/10-how-to-write-an-about-us-page-for-an-electrician",
              },
              { label: "8 examples of electrician websites", href: "/blog/8-electrician-website-examples-that-actually-win-customers" },
            ],
          },
        ],
      },
    },
  ],
};

export default blog;
