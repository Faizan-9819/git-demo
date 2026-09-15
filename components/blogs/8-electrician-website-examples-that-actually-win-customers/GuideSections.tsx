"use client";

import { useState, type ReactNode } from "react";
import Button from "@/app/components/ui/Button";
import type { BlogFaqItem } from "@/app/lib/blog-content-types";
import BlogAccordion from "@/components/blogs/shared/BlogAccordion";
import MoreLinksAccordion from "@/components/blogs/shared/MoreLinksAccordion";
import ImagePlaceholder from "./ImagePlaceholder";

function CheckIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#22A06B"
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mt-0.5 flex-none"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function WarningIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#F59E0B"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mt-0.5 flex-none"
    >
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
    </svg>
  );
}

export function IntroSection() {
  return (
    <section id="opening">
      <p className="font-poppins text-[17px] leading-[1.7] text-[#6B6580]">
        If you run a small electrical business and want to see what{" "}
        <em>good</em> actually looks like, this guide walks through eight
        electrician website examples — Dutch and international — and breaks down
        what each one does well. We&rsquo;ve kept the names anonymous and
        grouped them by approach, so you can pick the patterns that fit your
        business.
      </p>
      <p className="mt-5 font-poppins text-[17px] leading-[1.7] text-[#6B6580]">
        A good electrician website doesn&rsquo;t need to be flashy. It needs to
        do three things: explain what you do, prove you can be trusted, and make
        it easy to get in touch. The examples below show different ways to get
        there.
      </p>
    </section>
  );
}

const CRITERIA = [
  {
    title: "Hero clarity",
    body: "Does the homepage tell you what they do in under five seconds?",
    icon: (
      <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
    ),
  },
  {
    title: "Service presentation",
    body: "Are services structured, scannable, and locally relevant?",
    icon: (
      <>
        <rect width="7" height="9" x="3" y="3" rx="1" />
        <rect width="7" height="5" x="14" y="3" rx="1" />
        <rect width="7" height="9" x="14" y="12" rx="1" />
        <rect width="7" height="5" x="3" y="16" rx="1" />
      </>
    ),
  },
  {
    title: "Trust signals",
    body: "Reviews, certifications, and real photos of real people.",
    icon: (
      <>
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
  },
  {
    title: "Photography",
    body: "Original, on-the-job photos — not stock.",
    icon: (
      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
    ),
  },
  {
    title: "Navigation & contact",
    body: "How easy is it to call, message, or request a quote?",
    icon: (
      <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
    ),
  },
];

export function CriteriaSection() {
  return (
    <section id="criteria" className="scroll-mt-24 pt-14 flex flex-col gap-6">
      <div className=" mt-14 w-full flex flex-col gap-2">
        <span className="font-poppins text-xs font-semibold uppercase tracking-[2px] text-[#5B21B6]">
          How we picked them
        </span>
        <h2 className="w-full font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
          How we picked these examples
        </h2>
      </div>
      <p className="font-poppins text-[17px] leading-[1.7] text-[#6B6580]">
        We reviewed dozens of electrician websites across the Netherlands,
        Belgium, Germany, the UK, and North America. The eight here were
        selected on five criteria — and each example also calls out where it
        falls short, so you don&rsquo;t copy the weak parts.
      </p>
      <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
        {CRITERIA.map((c) => (
          <div
            key={c.title}
            className="flex flex-col gap-3 rounded-2xl bg-[#F5F3FF] p-5"
          >
            <div className="flex size-11 items-center justify-center rounded-xl border border-[#E6EEFE] bg-white text-[#5B21B6]">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {c.icon}
              </svg>
            </div>
            <div
              className="font-poppins text-[15px] font-semibold text-[#0A0516]"
              dangerouslySetInnerHTML={{ __html: c.title }}
            />
            <div
              className="font-poppins text-[13px] leading-5 text-[#6B6580]"
              dangerouslySetInnerHTML={{ __html: c.body }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

type Example = {
  id: string;
  number: string;
  title: string;
  intro: ReactNode;
  good: string[];
  watch: string[];
  ideal: string;
  image?: string;
};

const EXAMPLES: Example[] = [
  {
    id: "ex1",
    number: "01",
    title: "The local specialist — a family electrical business in Utrecht",
    intro: (
      <>
        A two-person electrical company in Utrecht with a homepage that opens
        with a single line:{" "}
        <em>
          &ldquo;Erkend elektricien in Utrecht en omgeving — bereikbaar binnen
          24 uur.&rdquo;
        </em>{" "}
        Below it, a phone number and a WhatsApp button.
      </>
    ),
    good: [
      "The hero answers three questions instantly: who, where, how fast.",
      "Two contact options above the fold: phone and WhatsApp. No friction.",
      "The About section uses real photos of the father-and-son team in their work van. Not stock.",
      "Reviews are pulled in from Google with the date and the customer's first name visible.",
    ],
    watch: [
      "The service pages are thin — two or three sentences each. That limits SEO and leaves questions unanswered.",
      "No pricing guidance at all. Visitors who want a sense of cost have to call.",
    ],
    ideal:
      "Solo operators and two- to three-person teams who win on local trust and speed.",
    image:
      "Clean local electrician hero with headline, phone, and WhatsApp.png",
  },
  {
    id: "ex2",
    number: "02",
    title: "The service‑led site — an electrical contractor in Rotterdam",
    intro:
      "A ten-person company focused on residential renovations and small commercial work. The site is built around services, with a dedicated page for each one.",
    good: [
      "Eight clearly named service pages: fuse box replacement, EV charger installation, power outage, new wiring, and more.",
      "Each service page follows the same structure: what's included, how long it takes, what to expect, FAQ.",
      "The power-outage page has a prominent emergency call button and a response time stated in plain language.",
      "Strong internal linking — every service page links to two or three related services.",
    ],
    watch: [
      "The homepage is busy. Three sliders, a long services grid, and a testimonial block all fight for attention.",
      "The FAQs are written in marketing language, not how a customer would actually phrase the question.",
    ],
    ideal:
      "Established firms (5–20 employees) targeting commercial-intent keywords like “EV charger installation [city].”",
  },
  {
    id: "ex3",
    number: "03",
    title: "The trust‑first site — a UK‑based family electrician",
    intro:
      "A British electrical company whose entire homepage is built around trust. Above the fold: a NICEIC certification badge, a Trustpilot rating, years in business, and a postcode checker.",
    good: [
      "Five trust signals visible without scrolling: certification, review score, years operating, insurance proof, and a consumer-standards badge.",
      "The team page shows every electrician with a photo, full name, certifications, and years on the job.",
      "Customer reviews include the type of job and the location, which makes them feel verifiable.",
      "A short video on the homepage — under 30 seconds — shows the owner walking through a recent job.",
    ],
    watch: [
      "The site is heavy. Page load is slow on mobile, partly because of the autoplay video.",
      "Some trust badges link to certificates from previous years. Outdated proof can hurt more than help.",
    ],
    ideal:
      "Electricians in markets where consumer trust is fragile — anywhere fraudulent or fly-by-night operators are on the rise.",
    image: "Hero with certification badges, review score, and team photo.png",
  },
  {
    id: "ex4",
    number: "04",
    title: "The niche specialist — EV charging & solar in Amsterdam",
    intro:
      "A specialist firm that installs only EV charging stations and home batteries. The website looks more like a tech product page than a traditional trades website.",
    good: [
      "The hero focuses on one outcome: “An EV charger that fits your car, home, and power supply.”",
      "A calculator asks three questions (car model, parking situation, fuse box) and returns a price range.",
      "Brand logos of the manufacturers they're certified to install — instant credibility.",
      "Case studies with before/after photos and the actual install time.",
    ],
    watch: [
      "So specialized it would confuse customers looking for general electrical work.",
      "The calculator only handles common scenarios. Edge cases dump people back to a generic form.",
    ],
    ideal:
      "Specialists who serve a single high-value niche — EV charging, solar, or home batteries.",
  },
  {
    id: "ex5",
    number: "05",
    title: "The quote‑wizard site — a German electrician in Hamburg",
    intro:
      "A small German electrical company that built its entire homepage around a multi-step quote request. The form takes about 90 seconds and asks for service type, urgency, address, and a photo upload.",
    good: [
      "The quote wizard replaces the generic “Contact Us” form with structured intake.",
      "Customers can upload a photo of the fuse box or problem area, which saves a site visit.",
      "A progress indicator shows how many steps are left — clear and unintimidating.",
      "A confirmation page sets expectations: “We reply within 4 working hours.”",
    ],
    watch: [
      "The form is the only contact option above the fold. Customers who want to call have to hunt.",
      "Photo upload fails on some older Android devices, which loses leads silently.",
    ],
    ideal:
      "Mid-size firms that want to filter low-quality leads and cut unqualified site visits — the trade-off: you lose people who prefer to just call.",
    image: "Multi-step quote wizard with photo-upload step.png",
  },
  {
    id: "ex6",
    number: "06",
    title: "The recruitment‑forward site — a Belgian electrical contractor",
    intro:
      "A 25-person Belgian firm whose website does something most electricians ignore: it actively recruits. The main navigation has Services, About, Careers, and Contact — and the careers page is treated with the same care as the service pages.",
    good: [
      "Equal billing for customers and applicants. The careers page has its own hero, photos, and team interviews.",
      "An “Apply via WhatsApp” button — no CV upload required for the first contact.",
      "Real photos of the team at work, on training days, and at company events.",
      "Clear pay ranges and benefits listed openly.",
    ],
    watch: [
      "The customer-facing service content is slightly underweight compared to the recruitment content.",
      "Some pages mix Dutch and French inconsistently, which can confuse Belgian visitors.",
    ],
    ideal:
      "Any electrical firm with five or more employees — labour shortages are now a bigger growth bottleneck than lead generation.",
  },
  {
    id: "ex7",
    number: "07",
    title: "The booking‑first site — a North American residential electrician",
    intro:
      "A US electrical company that lets customers book a service window directly from the homepage. The booking calendar is the centrepiece — customers pick a two-hour window and pay a small visit deposit.",
    good: [
      "One primary action above the fold: book a visit. No clutter.",
      "The deposit filters out tyre-kickers without losing serious customers.",
      "Each technician has a profile photo and bio that shows up at the booking confirmation.",
      "Automated SMS reminders 24 hours and 1 hour before the appointment reduce no-shows.",
    ],
    watch: [
      "The booking system is the front door. In markets where customers expect a phone conversation first, it can feel cold.",
      "No-show fees are mentioned in fine print only. Better to be upfront.",
    ],
    ideal:
      "Higher-volume residential electricians who want to systematize scheduling — best where booking‑first is already the norm (US, UK, urban Netherlands).",
  },
  {
    id: "ex8",
    number: "08",
    title: "The editorial site — a Dutch electrician with a real blog",
    intro: (
      <>
        A small Dutch electrical company with maybe 40 long, useful articles.
        Topics like &ldquo;Wanneer moet je je groepenkast laten
        vervangen?&rdquo; and &ldquo;Wat kost een laadpaal in 2026?&rdquo; —
        each article genuinely helpful, with photos and clear structure.
      </>
    ),
    good: [
      "Strong organic traffic from informational searches that competitors ignore.",
      "Every article ends with a soft, contextual call to action — “Send a photo and we'll take a look.” — rather than a hard sell.",
      "Content is clearly written by someone who actually does the work. The voice is consistent.",
      "Internal linking between articles is thoughtful, which keeps visitors on the site longer.",
    ],
    watch: [
      "Producing this volume of content takes real time. A solo electrician without help will struggle to keep it up.",
      "Some older articles aren't updated — outdated info on subsidies and pricing damages credibility.",
    ],
    ideal:
      "Firms that want long-term, compounding organic traffic and have the time — or a partner — to keep content fresh.",
    image: "Blog index page with thumbnails and publish dates.png",
  },
];

function ExampleCard({ example }: { example: Example }) {
  return (
    <section id={example.id} className="scroll-mt-24 pt-14">
      <div className="mb-[18px] flex items-center gap-4">
        <div
          className="flex size-[46px] flex-none items-center justify-center rounded-xl font-poppins text-lg font-bold text-white shadow-[0_12px_32px_rgba(91,33,182,0.10)]"
          style={{
            background: "linear-gradient(90deg, #5B219F 0%, #922698 100%)",
          }}
          dangerouslySetInnerHTML={{ __html: example.number }}
        />
        <h2
          className="text-balance font-poppins text-2xl font-bold leading-[1.15] tracking-[-0.6px] text-[#0A0516] sm:text-[26px]"
          dangerouslySetInnerHTML={{ __html: example.title }}
        />
      </div>
      <p className="mb-6 font-poppins text-[17px] leading-[1.7] text-[#6B6580]">
        {example.intro}
      </p>
      <div className="rounded-[18px] border border-[#E2E8F0] bg-white p-6 shadow-[0_1px_2px_rgba(16,24,40,0.05)] sm:p-[30px]">
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
          <div>
            <div className="mb-3.5 font-poppins text-xs font-semibold uppercase tracking-[1.5px] text-[#22A06B]">
              What it does well
            </div>
            <ul className="m-0 flex flex-col gap-3 p-0">
              {example.good.map((item) => (
                <li key={item} className="flex list-none gap-2.5">
                  <CheckIcon />
                  <span
                    className="font-poppins text-[15px] leading-[23px] text-[#334155]"
                    dangerouslySetInnerHTML={{ __html: item }}
                  />
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="mb-3.5 font-poppins text-xs font-semibold uppercase tracking-[1.5px] text-[#F59E0B]">
              What to watch out for
            </div>
            <ul className="m-0 flex flex-col gap-3 p-0">
              {example.watch.map((item) => (
                <li key={item} className="flex list-none gap-2.5">
                  <WarningIcon />
                  <span
                    className="font-poppins text-[15px] leading-[23px] text-[#334155]"
                    dangerouslySetInnerHTML={{ __html: item }}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-[22px] flex items-start gap-3.5 rounded-xl bg-[#F5F3FF] px-4.5 py-4">
          <span className="whitespace-nowrap pt-0.5 font-poppins text-xs font-semibold uppercase tracking-[1.5px] text-[#5B21B6]">
            Ideal for
          </span>
          <span
            className="font-poppins text-[15px] leading-[23px] text-[#334155]"
            dangerouslySetInnerHTML={{ __html: example.ideal }}
          />
        </div>
      </div>
      {example.image && (
        <div className="mt-6 shadow-[0_12px_32px_rgba(91,33,182,0.10)]">
          <ImagePlaceholder
            src={`/blogimages/en/8-electrician-website-examples-that-actually-win-customers/${example.image}`}
            caption={example.image}
            aspect="878.4/378.4"
          />
        </div>
      )}
    </section>
  );
}

export function ExamplesSection() {
  return (
    <>
      {EXAMPLES.map((example) => (
        <ExampleCard key={example.id} example={example} />
      ))}
    </>
  );
}

const SHARED_ROWS = [
  {
    what: "One clear job for the homepage",
    why: "Visitors aren't asked to read; they're shown what to do next.",
  },
  {
    what: "Real photos of real people",
    why: "Stock photography is the fastest way to look like a scam.",
  },
  {
    what: "Reviews with context",
    why: "A name, a place, a job type — these make a review feel verifiable.",
  },
  {
    what: "Mobile-first contact options",
    why: "Phone and WhatsApp visible above the fold.",
  },
  {
    what: "Structured service pages",
    why: "Each service has its own page, in a consistent format.",
  },
  {
    what: "Honest expectations",
    why: "Response time, pricing range, what's included — stated up front.",
  },
];

export function SharedSection() {
  return (
    <section id="gemeen" className="scroll-mt-24 pt-14 flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <span className=" w-full font-poppins text-xs font-semibold uppercase tracking-[2px] text-[#5B21B6]">
          The pattern behind all eight
        </span>
        <h2 className="w-full font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
          What all eight have in common
        </h2>
      </div>
      <p className="font-poppins text-[17px] leading-[1.7] text-[#6B6580]">
        Eight different sites, eight approaches — and a clear pattern when you
        put them side by side. The best electrician websites share six things.
      </p>
      <div className="overflow-hidden rounded-[18px] border border-[#E2E8F0]">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[520px] border-collapse">
            <thead>
              <tr style={{ background: "#0A0516" }}>
                <th
                  scope="col"
                  className="px-5.5 py-4 text-left font-poppins text-xs font-semibold uppercase tracking-wide text-white"
                >
                  What they share
                </th>
                <th
                  scope="col"
                  className="px-5.5 py-4 text-left font-poppins text-xs font-semibold uppercase tracking-wide text-white/65"
                >
                  Why it matters
                </th>
              </tr>
            </thead>
            <tbody>
              {SHARED_ROWS.map((row, i) => (
                <tr
                  key={row.what}
                  className="border-t border-[#E2E8F0]"
                  style={i % 2 === 1 ? { background: "#F5F3FF" } : undefined}
                >
                  <td
                    className="px-5.5 py-4 align-top font-poppins text-[15px] font-semibold text-[#0A0516]"
                    dangerouslySetInnerHTML={{ __html: row.what }}
                  />
                  <td
                    className="px-5.5 py-4 align-top font-poppins text-sm leading-[22px] text-[#6B6580]"
                    dangerouslySetInnerHTML={{ __html: row.why }}
                  />
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <p className="font-poppins text-[17px] leading-[1.7] text-[#6B6580]">
        A few things that appear on none of these sites: stock images of smiling
        models in hard hats, vague taglines like &ldquo;your trusted electrical
        partner,&rdquo; and contact forms with twelve required fields.
        That&rsquo;s the list to leave out.
      </p>
    </section>
  );
}

export function OwnSiteSection() {
  return (
    <section id="eigen" className="scroll-mt-24 pt-14 flex flex-col gap-6">
      <h2 className="w-full font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
        What this means for your own website
      </h2>
      <p className="font-poppins text-[17px] leading-[1.7] text-[#6B6580]">
        You don&rsquo;t need to copy any one of these examples. Pick the
        patterns that match your business and the customers you want to attract.
        If you&rsquo;re a solo electrician building on local trust, #1 is the
        cleanest start. If you want to rank for service keywords, model your
        structure on #2. If you&rsquo;re hiring more than you&rsquo;re selling,
        #6 deserves a serious look.
      </p>
      <blockquote className="m-0 rounded-2xl bg-[#F5F3FF] px-7 py-6">
        <p className="text-balance font-poppins text-[22px] font-bold leading-[1.2] tracking-[-0.5px] text-[#5B21B6] sm:text-[28px] sm:tracking-[-1px]">
          &ldquo;A website is a system, not a project.&rdquo;
        </p>
      </blockquote>
      <p className="font-poppins text-[17px] leading-[1.7] text-[#6B6580]">
        None of these businesses built their website once and forgot about it. A
        website needs updates, fresh reviews, new photos from real jobs, and the
        occasional new service page when your work changes.
      </p>
      <p className="font-poppins text-[17px] leading-[1.7] text-[#6B6580]">
        Growth Rocket helps small electrical businesses run that system without
        the back-and-forth of a traditional agency: a professional website, a
        way for customers to send enquiries or book, and the Growth Rocket Hub
        to manage everything in one place. Updates are handled for you, so your
        site stays current as your business grows.
      </p>
    </section>
  );
}

const CTA_FEATURES = [
  "Professional website on your own domain",
  "Enquiries and bookings in one system",
  "Reviews pulled in automatically",
  "Hosting, maintenance, and updates included",
];

export function CtaSection() {
  const openLeadForm = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-lead-form"));
    }
  };
  return (
    <section
      id="cta"
      className="scroll-mt-24 pt-14 relative overflow-hidden rounded-[24px] border border-[#E5D5FA] bg-[#F5F3FF] p-6 sm:p-10"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-[70px] -right-[50px] size-[240px] rounded-full opacity-35 blur-[80px]"
        style={{ background: "#A78BFA" }}
      />
      <div className="relative">
        <span className="font-poppins text-xs font-semibold uppercase tracking-[2px] text-[#5B21B6]">
          From inspiration to your own site
        </span>
        <h2 className="mb-3.5 mt-3 max-w-[560px] text-balance font-poppins text-2xl font-bold leading-[1.18] tracking-[-0.5px] text-[#0A0516] sm:text-[28px] sm:tracking-[-0.8px]">
          Want an electrician website that&rsquo;s built and maintained for you?
        </h2>
        <p className="mb-6 max-w-[600px] text-pretty font-poppins text-base leading-[1.6] text-[#6B6580]">
          Growth Rocket delivers a professional site, an enquiry and booking
          system, and the Growth Rocket Hub to manage everything in one place —
          updates included.
        </p>
        <div className="mb-7 grid max-w-[600px] grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-x-7">
          {CTA_FEATURES.map((feature) => (
            <div key={feature} className="flex items-start gap-2.5">
              <CheckIcon />
              <span
                className="font-poppins text-sm leading-[21px] text-[#334155]"
                dangerouslySetInnerHTML={{ __html: feature }}
              />
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-3">
          <Button
            onClick={openLeadForm}
            variant="primary"
            arrow="right"
            size="lg"
          >
            See how it works
          </Button>
          <Button onClick={openLeadForm} variant="secondary" size="lg">
            Website packages for electricians
          </Button>
        </div>
      </div>
    </section>
  );
}

export function FaqSection({
  heading,
  items,
}: {
  heading: string;
  items: BlogFaqItem[];
}) {
  return (
    <section id="faq" className="scroll-mt-24">
      <h2
        className="mt-24 max-w-[720px] text-balance font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]"
        dangerouslySetInnerHTML={{ __html: heading }}
      />

      <div className="mt-7 overflow-hidden rounded-[14px] border border-[#E6E8EF] bg-[#F8F9FC]">
        {items.map((item, i) => (
          <details
            key={item.question}
            className={`group ${i > 0 ? "border-t border-[#E6E8EF]" : ""}`}
          >
            <summary className="flex min-h-[60px] cursor-pointer list-none items-center justify-between gap-6 px-7 py-6">
              <span
                className="font-sans text-lg font-semibold text-[#1F2937]"
                dangerouslySetInnerHTML={{ __html: item.question }}
              />

              <span
                aria-hidden="true"
                className="flex-none font-sans text-[22px] font-normal leading-none text-[#9AA1AC] transition-transform duration-200 group-open:rotate-45"
              >
                +
              </span>
            </summary>

            <div className="max-w-[700px] px-7 pb-6 font-sans text-base leading-[1.63] text-[#6B7280]">
              {item.answerNode ?? (
                <span dangerouslySetInnerHTML={{ __html: item.answer }} />
              )}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}

export function MoreForElectriciansSection() {
  return (
    <section id="more" className="pt-14 scroll-mt-24">
      <h2 className="mt-24 max-w-[720px] text-balance font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
        More for electricians
      </h2>
      <p className="mt-3.5 max-w-[720px] font-poppins text-[17px] leading-[1.7] text-[#6B6580]">
        Everything that helps you win more enquiries online — from costs and
        choices to the build and the individual pages.
      </p>
      <div className="mt-7">
        <MoreLinksAccordion
          toggleLabel="Browse all articles for electricians"
          groups={[
            {
              heading: "Costs & choices",
              links: [
                {
                  label: "What does an electrician website cost?",
                  href: "/blog/electrician-website-cost-netherlands",
                },
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
                  label:
                    "How long does it take to build an electrician website?",
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
              ],
            },
          ]}
        />
      </div>
    </section>
  );
}
