import type { BlogContent, BlogTocEntry } from "@/app/lib/blog-content-types";
import HeroSection from "@/components/blogs/electrician-website-build-timeline/HeroSection";
import SummaryCardsSection from "@/components/blogs/electrician-website-build-timeline/SummaryCardsSection";
import BeforeYouStartSection from "@/components/blogs/electrician-website-build-timeline/BeforeYouStartSection";
import SixPhasesSection from "@/components/blogs/electrician-website-build-timeline/SixPhasesSection";
import RoutesComparisonSection from "@/components/blogs/electrician-website-build-timeline/RoutesComparisonSection";
import WhySevenDaysSection from "@/components/blogs/electrician-website-build-timeline/WhySevenDaysSection";
import FinalWordSection from "@/components/blogs/electrician-website-build-timeline/FinalWordSection";
import FinalCtaSection from "@/components/blogs/electrician-website-build-timeline/FinalCtaSection";
import FaqSection from "@/components/blogs/electrician-website-cost/FaqSection";
import MoreForElectriciansSection from "@/components/blogs/electrician-website-cost/MoreForElectriciansSection";
import BlogImageBlock from "@/components/blogs/shared/BlogImageBlock";
import faq from "./faq";
import { getFeaturedImage } from "./images";

const toc: BlogTocEntry[] = [
  { id: "before-you-start", label: "Before you start" },
  { id: "six-phases", label: "The 6 phases" },
  { id: "routes-comparison", label: "Routes side by side" },
  { id: "why-7-days", label: "Why 7 days works" },
  { id: "faq", label: "FAQ" },
  { id: "more", label: "More for electricians" },
];

const blog: BlogContent = {
  slug: "electrician-website-build-timeline",
  language: "en",
  title: "How long does it take to build an electrician website? A realistic timeline",
  excerpt:
    "The honest answer: between 7 days and 3 months. What makes the difference isn't the building itself — it's which route you choose and where that route stalls.",
  heroImage: getFeaturedImage().src,
  author: { name: "Growth Rocket" },
  tags: ["Contractor Websites", "Business Growth"],
  category: "Contractor Websites",
  readingTime: "09 Mins",
  published: "2026-07-17",
  toc,
  faq,
  hero: {
    component: HeroSection,
    props: {
      eyebrowGuide: "Guide",
      eyebrowPill: "Built for electricians",
      title: "How long does it take to build an electrician website? A realistic timeline",
      subtitle:
        "The honest answer: between 7 days and 3 months. What makes the difference isn't the building itself — it's which route you choose and where that route stalls.",
      ctaLabel: "Compare the routes",
      ctaHref: "#routes-comparison",
      secondaryLabel: "Jump to the timeline",
      secondaryHref: "#six-phases",
      metaDate: "17 July 2026",
      metaReadTime: "9 min read",
      panelEyebrow: "Time to live — the three routes",
      tracks: [
        { label: "DIY", time: "3 wks – 3 mos", widthPct: 100 },
        { label: "Freelancer", time: "4 – 8 weeks", widthPct: 62 },
        { label: "Fully managed", time: "7 – 10 days", widthPct: 13, emphasis: true },
      ],
      axisStart: "start",
      axisMid: "1 mo",
      axisEnd: "3 mos",
      panelFootnote: "Same site, three speeds. The duration depends mostly on who handles the copy, photos, and setup.",
    },
  },
  afterHero: {
    component: SummaryCardsSection,
    props: {
      cards: [
        {
          label: "DIY",
          value: "3 wks – 3 mos",
          description: "Quick to start, but finishing it around jobs is the real bottleneck.",
        },
        {
          label: "Freelancer",
          value: "4 – 8 weeks",
          description: "Custom work, but the timeline hangs on revision rounds and one calendar.",
        },
        {
          label: "Fully managed",
          value: "7 – 10 days",
          description: "Proven structure, setup handled — you supply photos, services, and approval.",
          emphasis: true,
        },
      ],
    },
  },
  sections: [
    {
      component: BeforeYouStartSection,
      props: {
        isFirst: true,
        heading: "Before you start: what you'll need",
        intro:
          "Whichever route you take, the same raw materials decide the pace. Gather them up front and every route shifts to the fast end of the timeline. Leave them, and every route waits on you.",
        items: [
          "Basic business info — company name, KvK number, VAT (BTW) number, service area, contact details",
          "Services list — what you do (groepenkast, laadpaal, verlichting) and what you don't",
          "Photos — 8–15 real photos of your team, van, and completed jobs (not stock)",
          "Reviews — Google reviews or written testimonials from past customers",
          "Logo — if you have one; most providers can make a simple wordmark",
          "Domain name — e.g. yourname-elektrotechniek.nl (existing or new)",
          "Google Business Profile login — if you already have one",
        ],
        outro:
          "With these on hand, every website runs through the same six phases. Here they are in order — and how long each phase takes per route.",
      },
    },
    {
      component: BlogImageBlock,
      props: {
        src: getFeaturedImage().src,
        alt: getFeaturedImage().alt,
      },
    },
    {
      component: SixPhasesSection,
      props: {
        heading: "The 6 phases of building an electrician website",
        intro:
          "Every website build — DIY, freelancer, or managed — goes through the same order. The phases don't change; only who handles each one and how fast it goes.",
        phases: [
          {
            num: "01",
            flowLabel: "Discovery",
            phaseLabel: "Phase 1",
            title: "Discovery",
            description:
              "Clarify who the site is for, what you want it to do — enquiries, bookings, job applications — and which services matter most. The phase most often skipped, which costs time later.",
            diyLabel: "DIY",
            diy: "1 – 3 hours",
            freelancerLabel: "Freelancer",
            freelancer: "1 – 2 weeks",
            managedLabel: "Managed",
            managed: "20 – 40 min",
            stallsLabel: "Where it stalls",
            stalls:
              "Not deciding whether the site is mainly for customers, staff, or both — discovery goes in circles. Decide before you start.",
          },
          {
            num: "02",
            flowLabel: "Content",
            phaseLabel: "Phase 2",
            title: "Content gathering",
            description:
              "Collect photos, write or approve service descriptions, and provide reviews. This is the phase almost every project underestimates — it has to happen between real jobs.",
            diyLabel: "DIY",
            diy: "1 – 8 weeks",
            freelancerLabel: "Freelancer",
            freelancer: "1 – 3 weeks",
            managedLabel: "Managed",
            managed: "2 – 5 days",
            stallsLabel: "Where it stalls",
            stalls:
              "Real photos are the bottleneck; writing service descriptions from scratch is the second. Managed services solve both — you approve drafts instead of starting from a blank page.",
          },
          {
            num: "03",
            flowLabel: "Design",
            phaseLabel: "Phase 3",
            title: "Design",
            description:
              "Colours, fonts, layout, and navigation. Most electrician sites follow a proven structure — hero, services grid, reviews, contact. A managed service has this largely decided.",
            diyLabel: "DIY",
            diy: "1 day – 2 wks",
            freelancerLabel: "Freelancer",
            freelancer: "1 – 3 weeks",
            managedLabel: "Managed",
            managed: "1 – 2 days",
            stallsLabel: "Where it stalls",
            stalls:
              "Freelancer projects stall here on multiple revision rounds — each adds 3–5 days. DIY stalls on perfectionism with a template.",
          },
          {
            num: "04",
            flowLabel: "Development",
            phaseLabel: "Phase 4",
            title: "Development",
            description:
              "Turn the design into a working site: build the pages, connect forms, set up hosting, and point the domain. This is where most of the visible work sits.",
            diyLabel: "DIY",
            diy: "1 – 4 weeks",
            freelancerLabel: "Freelancer",
            freelancer: "2 – 4 weeks",
            managedLabel: "Managed",
            managed: "1 – 2 days",
            stallsLabel: "Where it stalls",
            stalls:
              "DIY: plugin conflicts and broken themes. Freelancer: waiting on login details — domain registrar, email, Google accounts.",
          },
          {
            num: "05",
            flowLabel: "Review",
            phaseLabel: "Phase 5",
            title: "Review & approval",
            description:
              "Look at the site, test it on your phone, check every service description, and request changes. This is where you catch mistakes before customers do.",
            diyLabel: "DIY",
            diy: "Ongoing",
            freelancerLabel: "Freelancer",
            freelancer: "3 – 7 days",
            managedLabel: "Managed",
            managed: "1 – 3 days",
            stallsLabel: "Where it stalls",
            stalls:
              "Busy owners say “I'll check it this weekend” and the project waits. A good review takes 30 minutes, not three weekends — block the time and do it in one sitting.",
          },
          {
            num: "06",
            flowLabel: "Launch",
            phaseLabel: "Phase 6",
            title: "Launch",
            description:
              "Point the site to your domain, connect your Google Business Profile, and go live. This is the moment the site starts working for you.",
            diyLabel: "DIY",
            diy: "Same day",
            freelancerLabel: "Freelancer",
            freelancer: "1 – 2 days",
            managedLabel: "Managed",
            managed: "Same day",
            stallsLabel: "Where it stalls",
            stalls:
              "Domain transfers and DNS changes can take up to 48 hours to propagate. That's normal, and outside anyone's control.",
          },
        ],
        ctaText: "Curious what a 7-day managed build actually includes?",
        ctaLabel: "See what's included →",
        ctaHref: "/blog/11-how-growth-rocket-gets-your-electrician-website-live-in-7-days",
      },
    },
    {
      component: RoutesComparisonSection,
      props: {
        heading: "The routes side by side",
        intro:
          "All six phases in one view, per route. These are realistic ranges, not best-case promises — and the bottom line is what matters.",
        columns: ["DIY (Wix / WordPress)", "Freelancer", "Managed service"],
        rows: [
          { label: "1. Discovery", values: ["1 – 3 hours", "1 – 2 weeks", "20 – 40 min"] },
          { label: "2. Content gathering", values: ["1 – 8 weeks", "1 – 3 weeks", "2 – 5 days"] },
          { label: "3. Design", values: ["1 day – 2 weeks", "1 – 3 weeks", "1 – 2 days"] },
          { label: "4. Development", values: ["1 – 4 weeks", "2 – 4 weeks", "1 – 2 days"] },
          { label: "5. Review", values: ["Ongoing", "3 – 7 days", "1 – 3 days"] },
          { label: "6. Launch", values: ["Same day", "1 day", "Same day"] },
        ],
        totalsLabel: "Total (realistic)",
        totals: ["3 weeks – 3 months", "4 – 8 weeks", "7 – 10 days"],
        outro:
          "The ranges don't add neatly to the total: phases overlap and most of the delay is waiting, not working. So the total is a realistic estimate, not a sum.",
      },
    },
    {
      component: WhySevenDaysSection,
      props: {
        heading: "Why a 7-day build works — and where Growth Rocket fits",
        intro:
          "A 7-day launch sounds aggressive until you see what's already pre-built before you ever start. The managed route isn't faster for its own sake — the slow parts of a typical project have been solved upstream, leaving only the parts that genuinely need your input.",
        readyEyebrow: "What's ready before day 1",
        readyItems: [
          "A proven page structure built for Dutch electricians — homepage, services, service area, reviews, contact",
          "Mobile-responsive templates already QA'd on real phones, not just resized in a browser",
          "Enquiry and booking forms wired to a backend that emails and SMSs you the moment a lead comes in",
          "Hosting, SSL, basic on-page SEO, and Google Business Profile integration set up as standard",
          "A content framework, so you approve drafts instead of writing service descriptions from a blank page",
          "The Growth Rocket Hub, where enquiries and bookings come together",
        ],
        mattersEyebrow: "Why this matters for you",
        mattersItems: [
          "You don't lose billable days — the whole process needs about 2 hours of your time, not two weeks of evenings",
          "You get a site built for your trade, not a generic small-business template",
          "You stop paying for \"discovery\" — a 20–40 minute intake and you're moving",
          "One predictable monthly fee covers hosting, updates, and small changes — no €3,000+ upfront invoice",
        ],
        needsYouEyebrow: "What still needs you",
        needsYouItems: [
          "Sending your logo, photos, and services within 24–48 hours of kickoff",
          "Reviewing the draft and sending one consolidated batch of changes — not five trickling rounds",
          "Giving access to your domain when asked",
        ],
        needsYouOutro:
          "Deliver that in one go and 7 days is comfortable. Let it slip and the date moves — on every route. Speed is a two-way commitment: Growth Rocket has removed every delay on the provider side, so the only variable left is you.",
        caveatHeading: "When 7 days won't work",
        caveatBody:
          "Be realistic — sometimes it should take longer, and that's fine. Plan for 2–3 weeks if you want a fully custom design, you're waiting on a new logo from a separate designer, your domain is held by an old IT contact you can't reach, or you need multi-language from day one (this can be added in phase 2). That's still fast by freelancer standards — and still cheaper over 12 months than a one-off custom build.",
      },
    },
    { component: FaqSection, props: { heading: "Frequently asked questions", items: faq } },
    {
      component: FinalWordSection,
      props: {
        heading: "Final word",
        paragraphs: [
          "A working electrician website isn't a 3-month project unless you make it one. The six phases are the same for everyone — what changes is how much of each phase you handle yourself and how quickly you respond.",
          "If you want it done fast, the recipe is straightforward: pick the route that matches your time — DIY if you have the evenings, a freelancer if you have a clear custom brief, managed if you want it handled — gather your materials up front, and block time for review.",
          "Seven days is achievable. Two months is common. Which one you end up with depends less on the builder and more on you.",
        ],
      },
    },
    {
      component: FinalCtaSection,
      props: {
        heading: "Rather be online within a week, without the hassle?",
        body: "Website, enquiries, and bookings in one place, live in 7 to 10 days. See how the process works — from intake to launch.",
        features: [
          "Professional website, built for you",
          "Enquiry and booking system included",
          "Everything in one place in the Growth Rocket Hub",
          "Hosting, updates, and maintenance handled",
          "Google Business Profile and local visibility set up",
          "One fixed price per year, no surprises",
        ],
        ctaLabel: "Start a 7-day managed website",
        ctaHref: "/blog/11-how-growth-rocket-gets-your-electrician-website-live-in-7-days",
      },
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
              { label: "The website checklist: 10 pages you can't skip", href: "/blog/electrician-website-checklist" },
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
