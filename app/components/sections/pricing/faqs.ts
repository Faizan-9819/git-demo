/**
 * Pricing FAQ copy — the questions from `.pricing-faq-list` in Pricing.html.
 *
 * This lives apart from `PricingFaq.tsx` because that component is now a client
 * component, and a `"use client"` module's exports reach a server component as
 * client references rather than their values: importing the array from there
 * gave the route a proxy object, and `PRICING_FAQS.map` was not a function. The
 * data has no directive of its own, so both the fold and the route's FAQPage
 * JSON-LD can read the same source.
 */
export type PricingFaq = { q: string; a: string };

export const PRICING_FAQS: PricingFaq[] = [
  {
    q: "What is included in the Growth Rocket plan?",
    a: "Your professional website, Growth Rocket Hub, hosting, SSL, maintenance, updates and support are included. You can choose monthly billing at €69 per month or annual billing at €690 per year, plus a €290 one-time onboarding fee.",
  },
  {
    q: "Is the website built for me?",
    a: "Yes. Growth Rocket is not a do-it-yourself website builder. We create the website structure, set up the pages and connect the forms and business tools for you.",
  },
  {
    q: "What is Growth Rocket Hub?",
    a: "It is the place where you manage the work that follows your website: enquiries, appointments, customer records, quotes and invoices.",
  },
  {
    q: "Can I use my own domain?",
    a: "Yes. You can use your existing domain or we can guide you through setting up a new one for your business.",
  },
  {
    q: "Are hosting, SSL and maintenance included?",
    a: "Yes. Hosting, SSL, maintenance and technical updates are part of the package, so you do not need to manage separate technical services.",
  },
  {
    q: "Can the package grow with my business?",
    a: "Yes. You can start with the core Growth Rocket package and discuss additional pages, features or support as your business grows.",
  },
];
