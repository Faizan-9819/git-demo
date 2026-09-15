import type { BlogFaqItem } from "@/app/lib/blog-content-types";
import Flag from "@/components/blogs/shared/ReviewFlag";

const faq: BlogFaqItem[] = [
  {
    question: "What makes an electrician homepage high-converting?",
    answer:
      "Seven elements: a clear Dutch headline with city and top services, a sticky click-to-call button, trust badges (KvK, Techniek Nederland, certifications, a real Google review count), a prominent spoed indicator with a specific response time, a customer-language services grid linking to dedicated pages, real photos of team, van and completed jobs, and a short contact form with a WhatsApp option.",
  },
  {
    question: "How important is WhatsApp on a Dutch electrician website?",
    answer:
      "Very important. WhatsApp is a primary channel for local services in the Netherlands, especially for homeowners aged 25–45. A visible WhatsApp button often captures enquiries from visitors who would never fill a form or make a call — making it one of the most reliable conversion levers you can add.",
  },
  {
    question:
      "Should I list all my services on the homepage or just the main ones?",
    answer:
      "List 6–8 main services in the words customers actually search (groepenkast vervangen, laadpaal installeren, stroomstoring oplossen). Each should link to a dedicated service page with detail, pricing guidance, and its own contact CTA. A full list of every possible job belongs on a separate services overview page, not the homepage.",
  },
  {
    question: "Do stock photos hurt conversions on electrician websites?",
    answer:
      "Yes, consistently. Dutch homeowners increasingly associate stock photos — especially the orange-overall-and-clipboard variety — with fake or franchise businesses. Real photos of the owner, the van, and completed jobs outperform stock even when they're less polished. The phone-camera penalty is smaller than the stock-photo penalty.",
  },
  {
    question: "How long should the homepage contact form be?",
    answer:
      "Four fields: name, phone, postcode, and a short description of the job. Every extra field reduces submissions. Full address, property details, and scheduling preferences should be collected in the follow-up call or email, not the first contact form.",
  },
  {
    question:
      "Why is a KvK number more important in the Netherlands than elsewhere?",
    answer:
      "Dutch consumers increasingly check business legitimacy before contacting anyone. A visible KvK number is the single strongest Dutch trust signal — free to display, verifiable in one click at kvk.nl, and at the top of the trust hierarchy most homeowners now use unconsciously.",
  },
  {
    question: "How do I know if my homepage is actually converting?",
    answer:
      "Track two numbers monthly: unique homepage visitors and total enquiries (calls, WhatsApp messages and form submissions combined). If that rate is below 2–3%, one or more of the seven elements is usually missing or weak. High-converting electrician homepages typically sit at 4–7%.",
    answerNode: (
      <>
        Track unique homepage visitors and attributable enquiries — calls,
        WhatsApp messages, and form submissions — using a documented method.
        Calculate the site's own baseline and compare equivalent periods and
        traffic sources after changes. There is no universal 2–3% failure
        threshold or 4–7% electrician-homepage benchmark without a defined
        dataset, attribution window, traffic mix, and sample size.
      </>
    ),
  },
];
export default faq;
