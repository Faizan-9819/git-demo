import type { BlogContent, BlogTocEntry } from "@/app/lib/blog-content-types";
import HeroSection from "@/components/blogs/electrician-website-cost/HeroSection";
import {
  DiyIcon,
  FreelancerIcon,
  DoneForYouIcon,
} from "@/components/blogs/electrician-website-cost/priceIcons";
import QuickAnswerSection from "@/components/blogs/electrician-website-cost/QuickAnswerSection";
import OptionSection from "@/components/blogs/electrician-website-cost/OptionSection";
import ComparisonSection from "@/components/blogs/electrician-website-cost/ComparisonSection";
import DecideSection from "@/components/blogs/electrician-website-cost/DecideSection";
import FaqSection from "@/components/blogs/electrician-website-cost/FaqSection";
import FinalThoughtSection from "@/components/blogs/electrician-website-cost/FinalThoughtSection";
import MoreForElectriciansSection from "@/components/blogs/electrician-website-cost/MoreForElectriciansSection";
import BlogImageBlock from "@/components/blogs/shared/BlogImageBlock";
import faq from "./faq";
import images, { getFeaturedImage } from "./images";

const toc: BlogTocEntry[] = [
  { id: "quick-answer", label: "The quick answer" },
  { id: "option-1", label: "DIY builders" },
  { id: "option-2", label: "Freelancer or agency" },
  { id: "option-3", label: "Done-for-you" },
  { id: "comparison", label: "The three models compared" },
  { id: "decide", label: "Decide in under a minute" },
  { id: "faq", label: "FAQ" },
  { id: "more", label: "More for electricians" },
];

const blog: BlogContent = {
  slug: "electrician-website-cost-netherlands",
  language: "en",
  title: "How Much Does an Electrician Website Cost in the Netherlands?",
  excerpt:
    "One provider quotes €50 a month. Another asks €2,500 upfront. A third offers a yearly plan under €1,000 — here's why, and what each model actually gets you.",
  heroImage: getFeaturedImage().src,
  author: { name: "Growth Rocket" },
  tags: ["Contractor Websites", "Business Growth"],
  category: "Contractor Websites",
  readingTime: "08 Mins",
  published: "2026-07-08",
  toc,
  faq,
  hero: {
    component: HeroSection,
    props: {
      eyebrowGuide: "Guide",
      eyebrowPill: "Made for electricians",
      title: "How Much Does an Electrician Website Cost in the Netherlands?",
      subtitle:
        "One provider quotes €50 a month. Another asks €2,500 upfront. A third offers a yearly plan under €1,000. The reason is simple — they're not offering the same thing.",
      ctaLabel: "Compare the three models",
      ctaHref: "#comparison",
      secondaryLabel: "Skip to the quick answer",
      secondaryHref: "#quick-answer",
      metaDate: "8 July 2026",
      metaReadTime: "8 min read",
      priceEyebrow: "The three price ranges",
      priceItems: [
        { label: "DIY builders", price: "€10–€25/month", icon: DiyIcon },
        {
          label: "Freelancer or agency",
          price: "€1,000–€3,000 upfront",
          icon: FreelancerIcon,
        },
        {
          label: "Done-for-you",
          price:
            "€690 per year + €290 one-time onboarding, everything included",
          icon: DoneForYouIcon,
        },
      ],
      priceFootnote:
        "The right choice depends on your time, your technical comfort, and what you actually want the website to do.",
    },
  },
  sections: [
    {
      component: QuickAnswerSection,
      props: {
        intro: [
          "If you run an electrical business and you're looking for a website, the prices seem to point in every direction. One provider quotes €50 a month. Another asks €2,500 upfront. A third offers a yearly plan under €1,000.",
          "The reason is simple — you're not comparing like-for-like services.",
          "Some providers hand you the tools and expect you to build everything yourself. Others deliver a custom site but leave the hosting, updates and changes to you afterwards. And there's a newer category: done-for-you services, where the website, the updates and the day-to-day management come together in one fixed price per year.",
          "In this guide we put the three models side by side, so you can see exactly what you're paying for — and what you're not.",
        ],
        calloutText:
          "To be clear up front: Growth Rocket falls into that third category. It's a complete online business system for Dutch trade businesses, bringing your website, your enquiries and your bookings together in one place — without the back-and-forth with freelancers and without the hours that building it yourself takes. If you recognise yourself in that direction, you'll see where it fits along the way. If not, the comparison below stands on its own.",
        heading: "The quick answer: what an electrician website costs",
        leadIn: "On the Dutch market you'll come across three models:",
        models: [
          "DIY website builders — roughly €10 to €25 per month (you build and manage everything yourself)",
          "Freelancer or web agency — €1,000 to €3,000 upfront, plus hosting and maintenance",
          "Done-for-you yearly subscription — €690 per year, plus a one-time €290 onboarding fee",
        ],
        outro:
          "Each model suits a different kind of business. The right choice depends on your time, your technical comfort, and what you actually want the website to do for your business.",
      },
    },
    {
      component: BlogImageBlock,
      props: {
        src: images.optionsIntro.src,
        alt: images.optionsIntro.alt,
      },
    },
    {
      component: OptionSection,
      props: {
        id: "option-1",
        option: {
          num: "01",
          eyebrow: "Option 1",
          title: "DIY website builders (€10–€25/month)",
          intro: [
            "With a website builder you pick a template, drag blocks into place and put a site online yourself.",
          ],
          includedLabel: "What's included",
          included: [
            "A library of templates",
            "Hosting and SSL security",
            "A basic domain (often a subdomain or a cheap .nl)",
            "An editor where you drag and drop yourself",
          ],
          excludedLabel: "What's usually excluded",
          excluded: [
            "Custom design",
            "Copy (you write it yourself)",
            "Anything beyond basic SEO",
            "Ongoing updates and fixes",
            "Features specific to electricians",
          ],
          pricingLabel: "Typical Dutch pricing",
          pricingLines: [
            "Packages run from around €10 per month at the low end to about €25 per month for more pages and features. There are usually no setup costs.",
          ],
          chooseLabel: "Choose this if",
          chooseText:
            "You're comfortable enough with technology, have a few spare hours to build it yourself, and mainly want an online business card. The cost is low — the quality depends entirely on the time you put in.",
          skipLabel: "Skip this if",
          skipText:
            "You don't have time to learn a website builder, or the site needs to bring in enquiries. Most DIY sites end up as a static brochure: writing good copy and setting up local visibility takes work most electricians simply don't have time for.",
        },
        outro:
          "The opposite model also exists — having everything built for you in one go.",
      },
    },
    {
      component: OptionSection,
      props: {
        id: "option-2",
        option: {
          num: "02",
          eyebrow: "Option 2",
          title: "Freelancer or agency builds (€1,000–€3,000 upfront)",
          intro: [
            "A freelance web designer or small agency builds a custom site for you. This is the traditional route.",
          ],
          includedLabel: "What's included",
          included: [
            "Custom design",
            "A fixed number of pages (usually 5 to 10)",
            "Basic SEO setup",
            "Sometimes: hosting for the first year",
          ],
          excludedLabel: "What's usually excluded (or billed separately)",
          excluded: [
            "Hosting after the first year (around €10–€20 per month)",
            "Domain renewal (about €10 per year)",
            "Copy changes (€50–€100 per hour)",
            "Security updates",
            "New photos, pages or seasonal changes",
          ],
          pricingLabel: "Typical Dutch pricing",
          pricingLines: [
            "Small freelance build: €1,000–€1,800 upfront",
            "Mid-size agency: €2,000–€3,500 upfront",
            "Installer-focused agencies: subscription-style packages from around €29.95–€59.95/month",
          ],
          extraNote:
            "The upfront model looks cost-effective over the long term — until you want to change something. Most electricians never touch their site after launch, because every change costs money or a phone call.",
          chooseLabel: "Choose this if",
          chooseText:
            "You want a fully custom look, have a clear picture in mind, and don't mind arranging hosting and updates yourself. It works well for mid-size firms with ten or more staff and in-house support.",
          skipLabel: "Skip this if",
          skipText:
            "You work alone or have a small team. The upfront price is only part of the picture — change costs pile up, and most sole traders end up never updating their site again.",
        },
        midCta: {
          text: "Still weighing the options? Growth Rocket handles the website, hosting, domain, and updates for one fixed yearly price — live in about 7 days.",
          label: "See how it works →",
          href: "/contact",
        },
        outro: "That leaves the model that takes the work off your hands.",
      },
    },
    {
      component: OptionSection,
      props: {
        id: "option-3",
        option: {
          num: "03",
          eyebrow: "Option 3",
          title:
            "Done-for-You Business Website System (€690 per year or €69 per month)",
          intro: [
            "This model is built for business owners who don't want to deal with websites — but do want a website that does its job.",
            "Instead of tools or a one-off build, everything is handled for you, for one fixed price per year. The website is built, managed and continuously updated — without you having to deal with hosting, plugins or freelancers. Fully managed, in the most literal sense.",
            "This is where Growth Rocket sits. Not just a website. A complete online business system for service businesses — where your online presence, your incoming enquiries and your bookings are connected and managed in one place.",
          ],
          includedLabel: "What's included",
          included: [
            "A website built and launched for you",
            "Hosting and SSL security, fully managed",
            "Domain arranged and maintained",
            "Ongoing changes to text and content (no per-change fees)",
            "An enquiry and booking system, built into the website",
            "The Growth Rocket Hub: one central dashboard where you track and manage all your enquiries and appointments",
          ],
          excludedLabel: "What's excluded",
          excluded: [
            "Advertising budget (for example Google Ads)",
            "Advanced or custom integrations beyond the standard setup",
          ],
          pricingLabel: "Typical Growth Rocket pricing",
          pricingLines: [
            "Professional: €690 per year or €69 per month",
            "Plus: bespoke, based on your requirements",
          ],
          pricingNote:
            "Spread monthly, that's €57.50 — one fixed yearly price of €690, without the hours or the learning curve of building it yourself.",
          chooseLabel: "When this model makes sense",
          chooseText:
            "Choose this if you want a professional website live within about a week, like a predictable yearly price, and don't want to lose time to updates or technical hassle. It usually fits solo electricians, ZZP'ers and small teams of two to ten people looking for something reliable and low-maintenance.",
          skipLabel: "When it doesn't",
          skipText:
            "If you need a strongly custom design, or deep integrations with specific software systems, this model can feel limited next to a full custom build.",
        },
        outro:
          'Still, not every requirement fits neatly into a standard package — that\'s what the bespoke route is for. <a href="https://www.getgrowthrocket.com/" target="_blank" rel="noopener noreferrer" class="text-[#5B21B6] hover:underline">Growth Rocket</a> also offers custom configurations for businesses that need more: extra functionality, integrations or a tailored setup. The standard packages cover most situations; more complex needs can be discussed without moving to a completely different model.',
      },
    },
    {
      component: ComparisonSection,
      props: {
        heading: "The three models compared",
        columns: [
          "DIY builder",
          "Freelancer or agency",
          "Done-for-you (Growth Rocket)",
        ],
        rows: [
          {
            label: "Upfront cost",
            values: ["€0", "€1,000–€3,000", "€290 one-time"],
          },
          {
            label: "Ongoing cost",
            values: [
              "€10–€25/month",
              "€10–€20/month hosting, plus paid updates",
              "€690/year (€69/month)",
            ],
          },
          {
            label: "What's included",
            values: [
              [
                "Templates",
                "Hosting and SSL",
                "You build and write everything yourself",
              ],
              [
                "Custom design and build",
                "Hosting, updates and changes billed separately",
              ],
              [
                "Professional website",
                "Hosting, SSL, backup and updates",
                "Growth Rocket Hub (appointments, enquiries, contact management)",
              ],
            ],
          },
          {
            label: "Time from you",
            values: [
              "High — you build it",
              "Medium upfront, low after",
              "Very low",
            ],
          },
          { label: "Updates included", values: ["No", "No", "Yes"] },
          {
            label: "Fits",
            values: [
              "Hands-on ZZP'ers",
              "Mid-size firms with in-house support",
              "Solo electricians and small teams",
            ],
          },
        ],
        yearOneEyebrow: "What most electricians actually pay in year one",
        yearOneLead:
          "The “cheapest” option is rarely the cheapest once you count your own hours — and the updates that usually get postponed or skipped.",
        yearOneItems: [
          "DIY builder — around €120–€300 per year, plus 15 to 25 hours of your own time",
          "Freelancer or agency — €1,000–€3,000 upfront, plus around €120–€240 per year for hosting and paid updates → typically €1,500–€2,500 or more in year one",
          "Done-for-you system (Growth Rocket) — €690 per year, plus €290 one-time onboarding",
        ],
        yearOneEmphasis:
          "The difference isn't just the amount — it's how predictable that amount stays.",
        yearOneOutro:
          ' A <a href="https://www.squarespace.com/" target="_blank" rel="noopener noreferrer"  class="text-[#5B21B6] hover:underline"> DIY builder</a> keeps the price low but costs you time. A freelancer build starts high and adds small amounts afterwards. A done-for-you system keeps the cost fixed, so you know exactly what you pay. No surprises.',
      },
    },
    {
      component: DecideSection,
      props: {
        heading: "Decide in under a minute",
        items: [
          {
            condition: "Tight budget, comfortable with tech, and time to spare",
            answer: "DIY builder",
          },
          {
            condition: "Need a custom design and someone in-house to manage it",
            answer: "Freelancer or agency",
          },
          {
            condition:
              "Everything handled, a fixed yearly price, and live in about a week",
            answer: "Done-for-you system (Growth Rocket)",
          },
        ],
        outro: "Still have questions? The most common ones are below.",
      },
    },
    {
      component: FaqSection,
      props: { heading: "Frequently asked questions", items: faq },
    },
    {
      component: FinalThoughtSection,
      props: {
        heading: "Final thought",
        paragraphs: [
          "The cheapest website isn't the one with the lowest monthly price — it's the one that quietly does its job without demanding your time, your attention or endless upkeep.",
          "For most electricians, the real cost isn't money. It's the hours you don't have, the updates that never happen and the enquiries you might miss because the site isn't right.",
          'That\'s why more and more <a href="https://www.getgrowthrocket.com/website-for-electricians" target="_blank" rel="noopener noreferrer">small electrical firms</a>  choose a fixed price and a done-for-you system — something that goes live quickly, stays updated and just does its job in the background while you\'re on the job. Pick the model that fits how you actually run your business — not just what looks cheaper on paper.',
        ],
        ctaHeading: "Rather never think about your website again after launch?",
        ctaBody:
          "Growth Rocket gives you a professional website with a built-in enquiry and booking system — set up, managed, and running for one fixed yearly price. No technical hassle, live within 7 days.",
        features: [
          "Professional website, built for you",
          "Enquiry and booking system included",
          "Everything in one place in the Growth Rocket Hub",
          "Hosting, updates and maintenance handled",
          "Live within 7 days",
        ],
        ctaLabel: "See how it works",
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
              {
                label: "How long does it take to build an electrician website?",
                href: "/blog/electrician-website-build-timeline",
              },
              {
                label: "Mobile website for electricians: why it matters",
                href: "/blog/6-mobile-website-for-electricians",
              },
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
                label: "The website checklist: 10 pages you can't skip",
                href: "/blog/electrician-website-checklist",
              },
              {
                label: "The 7 elements of a homepage that wins enquiries",
                href: "/blog/7-elements-of-a-high-converting-electrician-homepage",
              },
              {
                label: "How to write an about page that builds trust",
                href: "/blog/10-how-to-write-an-about-us-page-for-an-electrician",
              },
              {
                label: "8 examples of electrician websites",
                href: "/blog/8-electrician-website-examples-that-actually-win-customers",
              },
            ],
          },
        ],
      },
    },
  ],
};

export default blog;
