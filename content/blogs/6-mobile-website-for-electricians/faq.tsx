import type { BlogFaqItem } from "@/app/lib/blog-content-types";
import Flag from "@/components/blogs/mobile-website-for-electricians/Flag";
import InlineLink from "@/components/blogs/mobile-website-for-electricians/InlineLink";

const faq: BlogFaqItem[] = [
  {
    question: "How much does a mobile-friendly website for electricians cost in the Netherlands?",
    answer:
      "Prices vary widely. DIY sitebuilders like Siteklik start around €10–€15 per month but need your time and often lack local SEO. Agencies can charge €1,500–€5,000 upfront plus monthly fees, which is overkill for most small firms. Managed services sit in between — one fixed yearly price, with everything set up and maintained for you.",
    answerNode: (
      <>
        Prices vary widely. DIY sitebuilders like Siteklik start around <Flag>€10–€15 per month</Flag> but need
        your time and often lack local SEO. Agencies can charge <Flag>€1,500–€5,000</Flag> upfront plus monthly
        fees, which is overkill for most small firms. Managed services sit in between — one fixed yearly price,
        with everything set up and maintained for you.
      </>
    ),
  },
  {
    question: "Do I need a separate mobile site or a responsive one?",
    answer:
      "Responsive. One website that adapts to any screen — phone, tablet, desktop. Separate mobile sites are outdated, worse for SEO, and twice the work to maintain.",
  },
  {
    question: "How long does it take to make my current site mobile-friendly?",
    answer:
      "Small fixes — click-to-call button, font sizes, popup removal — take a few hours. A full rebuild of an old site usually takes about a week; Growth Rocket typically delivers a new, mobile-ready electrician site in around 7 days.",
    answerNode: (
      <>
        Small fixes — click-to-call button, font sizes, popup removal — take a few hours. A full rebuild of an
        old site usually takes about a week; Growth Rocket typically delivers a new,{" "}
        <InlineLink href="/blog/electrician-7-day-launch">mobile-ready electrician site in around 7 days</InlineLink>
        .
      </>
    ),
  },
  {
    question: "What is the single most important mobile feature for an electrician?",
    answer:
      "A visible click-to-call button in the header. Nothing else comes close. Most emergency visitors don't read — they tap.",
  },
  {
    question: "Will a better mobile site help me rank higher on Google?",
    answer:
      "Yes. Google uses mobile-first indexing, which means it judges your site based on the mobile version. A fast, clean mobile site with a clear service area usually ranks better in the local pack than a slow desktop-first one.",
  },
  {
    question: "Does WhatsApp really help for an electrician business?",
    answer:
      "For Dutch customers, yes. Non-urgent enquiries — quotes for a new groepenkast, questions about laadpaal installation, photos of issues — increasingly come via WhatsApp rather than phone or email. Adding it reduces friction and gives you pre-qualified enquiries with photos.",
  },
  {
    question: "Can I test my site for free?",
    answer:
      "Yes. Google's PageSpeed Insights and Mobile-Friendly Test are both free. Run your URL through both and you'll have a clear list of what to fix.",
  },
];

export default faq;
