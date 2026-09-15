import type { BlogFaqItem } from "@/app/lib/blog-content-types";

const faq: BlogFaqItem[] = [
  {
    question: "Is WordPress free for electricians?",
    answer:
      "The software is free, but a usable electrician website on WordPress is not. Expect €500–€2,500 for a freelancer build, plus €15–€30/month for hosting, plus plugin and maintenance costs. The free part of WordPress is the licence — everything else costs money or time.",
  },
  {
    question: "How long does it take to launch a website for an electrician business?",
    answer:
      "A WaaS site typically goes live within 7 days. A WordPress build by a freelancer usually takes 2–6 weeks, depending on revisions and content readiness.",
  },
  {
    question: "Can I move from WaaS to WordPress later?",
    answer:
      "Sometimes. It depends on the provider. Before signing up for any WaaS, ask whether you can export your content (text, images, enquiry data) and what the process looks like. A clean exit clause is a fair thing to ask for.",
  },
  {
    question: "Does WordPress rank better than WaaS on Google?",
    answer:
      "Not by default. Both can rank well for local searches like elektricien [city]. What matters more is your Google Business Profile, reviews, local content, and site speed — all of which are achievable on either platform.",
  },
  {
    question: "Is a managed website really cheaper than WordPress?",
    answer:
      "Over three years, often yes — once you include hosting, plugins, and maintenance time. WordPress can be cheaper if you do all the maintenance yourself and your time is genuinely free.",
  },
  {
    question: "What about security?",
    answer:
      "WordPress sites get targeted because the platform is so common. Keeping plugins, themes, and the core updated is essential, and so are regular backups. WaaS providers handle this as part of the subscription. If security is a worry and you don't want to manage it, that's a strong reason to choose WaaS.",
  },
];

export default faq;
