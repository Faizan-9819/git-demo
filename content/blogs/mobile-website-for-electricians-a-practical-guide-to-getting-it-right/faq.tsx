import type { BlogFaqItem } from "@/app/lib/blog-content-types";

const faq: BlogFaqItem[] = [
  {
    question: "How much of an electrician's website traffic comes from mobile?",
    answer:
      "For most Dutch electricians, between 70% and 85% of visitors arrive on a smartphone. The figure is higher for emergency-related searches and slightly lower for B2B work.",
  },
  {
    question: "Is a responsive design tradesperson site the same as a mobile website?",
    answer:
      "Mostly, yes. Responsive design means the site adjusts to any screen size, including phones. A true mobile-first site goes one step further: it is designed for the phone first, and the desktop version is adapted from that.",
  },
  {
    question: "How fast should a smartphone website for trades load?",
    answer:
      "Under three seconds on a 4G connection is the minimum. Under two seconds is the target. Beyond three seconds, drop-off increases sharply.",
  },
  {
    question: "Do I need a separate mobile site?",
    answer:
      "No. A separate mobile site (often on an m. subdomain) used to be common but is now outdated. A single responsive website that works on every device is the standard.",
  },
  {
    question: "Are pop-ups really that bad on mobile?",
    answer:
      "Yes. Google penalises intrusive pop-ups in mobile search rankings, and visitors leave when their screen is covered. If you must use one, keep it small and easy to dismiss.",
  },
  {
    question: "What is the easiest mobile fix I can make today?",
    answer:
      "Add a sticky call button to every page. It is the single change with the highest impact on enquiries for an electrician website.",
  },
];

export default faq;
