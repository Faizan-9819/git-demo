import type { BlogFaqItem } from "@/app/lib/blog-content-types";
import { startklaarArticleBodyHtml } from "./article-body-html";

const articleMeta = {
  title:
    "From Lecture Hall to First Customer: How to Launch Your First Business Straight Out of Your Studies",
  subtitle:
    "This is the first article in the StartKlaar series — a practical guide for anyone starting a business in the Netherlands.",
  author: "Growth Rocket",
  publishedLabel: "July 7, 2026",
  published: "2026-07-07",
  readingTime: "9 min read",
};

const faq: BlogFaqItem[] = [
  {
    question: "Do I need a website before I get my first customer?",
    answer:
      "Not necessarily for the very first one — many founders win their first customer through their network. But from that moment on, every potential customer will look you up before saying yes. Being discoverable and credible online isn't what gets you customer one; it's what turns customer one into customers two through twenty.",
  },
  {
    question: "Can I start a business while I'm still studying?",
    answer:
      "Yes — and it's one of the lowest-risk moments you'll ever get. Your costs are low, your flexibility is high, and every real customer teaches you more than a semester of cases. Many students start as a zzp'er alongside their studies.",
  },
  {
    question: "Should I register my business before finding customers?",
    answer:
      "Validate first, register when it gets real. Talk to potential customers and test your offer before any formalities; once someone actually wants to pay you, registering with the KVK is a quick step — the hard part was never the paperwork.",
  },
  {
    question: "How is Growth Rocket different from a website builder?",
    answer:
      "A website builder gives you a website — and leaves the bookings, enquiry management, hosting, maintenance and support to you. Growth Rocket is a complete online business system: the whole digital foundation, in one place, managed by one partner.",
  },
  {
    question: "What should I focus on first when launching?",
    answer:
      "Validation and visibility. Talk to potential customers before building anything, then make sure you're findable and credible the moment you go live. Almost everything else can be improved along the way.",
  },
];

export function getStartklaarArticleMeta() {
  return articleMeta;
}

export function getStartklaarArticleBodyHtml(): string {
  return startklaarArticleBodyHtml;
}

export function getStartklaarFaq(): BlogFaqItem[] {
  return faq;
}
