"use client";

import { useState } from "react";
import InlineLink from "./InlineLink";

export function IntroSection() {
  return (
    <p className="m-0 w-full font-sans text-base leading-[26px] text-[#1F2937] sm:text-[19px] sm:leading-[31px]">
      A good about us page electrician owners can be proud of does three things:
      it shows the human behind the business, it answers the trust questions a
      customer is silently asking, and it makes booking the next step feel easy.
      This guide walks through exactly how to write one &mdash; including
      before-and-after rewrites of weak About pages so you can see the
      difference.
    </p>
  );
}

const SILENT_QUESTIONS = [
  "Are you real?",
  "Are you qualified?",
  "Who is coming into my home?",
  "What if something goes wrong?",
];

export function CustomersSection() {
  return (
    <section id="customers" className="mt-24 scroll-mt-24">
      <h2 className="w-full text-balance font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
        What customers are really looking for on your About page
      </h2>
      <p className="mt-6 max-w-180 font-sans text-base leading-[26px] text-[#1F2937] sm:text-[19px] sm:leading-[31px]">
        Before writing anything, understand what the visitor is doing.
      </p>
      <blockquote className="mt-8.5 max-w-180 border-l-[3px] border-[#6F4CF5] pl-6">
        <p className="m-0 text-balance font-sans text-2xl font-semibold leading-[1.38] tracking-[-0.3px] text-[#1F2937] sm:text-[26px]">
          They are not learning about you out of curiosity. They are screening
          you.
        </p>
      </blockquote>
      <p className="mt-8.5 w-full font-sans text-base leading-[26px] text-[#1F2937] sm:text-[19px] sm:leading-[31px]">
        In the Dutch market in particular, where complaints about unqualified or
        fraudulent installers have hit record levels, customers are looking for
        proof that you are legitimate before they pick up the phone. That means
        certifications, real photos, named team members, and clear values.
      </p>
      <div className="mt-8 grid max-w-180 grid-cols-1 gap-3.5 lg:grid-cols-2">
        {SILENT_QUESTIONS.map((q) => (
          <div
            key={q}
            className="rounded-2xl border border-[#E6E8EF] bg-[#FBFBFD] p-4.5"
          >
            <div className="font-sans text-xs font-semibold uppercase tracking-[0.4px] text-[#9AA1AC]">
              Silent question
            </div>
            <div className="mt-1.5 font-sans text-lg font-semibold text-[#1F2937]">
              {q}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const SIGNALS = [
  { n: 1, text: "Why you started the business", note: "(origin story)" },
  { n: 2, text: "Who is on the team", note: "(with names and faces)" },
  {
    n: 3,
    text: "Certifications and memberships",
    note: (
      <>
        (
        <InlineLink href="https://www.technieknederland.nl/">
          Techniek Nederland
        </InlineLink>
        , KvK number, REI/VCA, etc.)
      </>
    ),
  },
  {
    n: 4,
    text: "Values that matter to customers",
    note: "(punctuality, cleanliness, transparent pricing)",
  },
  { n: 5, text: "A personal note from the founder", note: null },
  { n: 6, text: "A clear next step", note: "(call, book, request a quote)" },
];

function SignalBadge({ n }: { n: number }) {
  return (
    <span className="flex size-[22px] flex-none items-center justify-center rounded-full bg-[#6F4CF5] font-sans text-xs font-bold text-white">
      {n}
    </span>
  );
}

export function SignalsSection() {
  return (
    <section id="signals" className="mt-26 scroll-mt-24">
      {/* Preview Image */}
      <div className="mt-22 overflow-hidden rounded-[24px] border border-[#E5E7EB] shadow-lg">
        <img
          src="/blogimages/en/10-how-to-write-an-about-us-page-for-an-electrician/spotlight img 2 blog.png"
          alt="Example electrician homepage"
        />
      </div>

      <h2 className=" mt-22 max-w-180 text-balance font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
        The six trust signals
      </h2>
      <p className="mt-6 w-full font-sans text-base leading-[26px] text-[#1F2937] sm:text-[19px] sm:leading-[31px]">
        A strong About page covers six things. Treat them as one coherent
        blueprint, not six separate sales blocks.
      </p>

      <div className="mt-8.5 grid grid-cols-1 items-start gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-10">
        <figure
          role="img"
          aria-label="Annotated example of an electrician about us page showing origin story, team photo, and certifications layout"
          className="m-0 lg:sticky lg:top-24"
        >
          <div className="overflow-hidden rounded-2xl border border-[#E6E8EF] bg-white shadow-[0_12px_30px_rgba(16,24,40,0.06)]">
            <div className="flex h-[34px] items-center gap-1.5 border-b border-[#EEF0F4] bg-[#FBFBFD] px-3.5">
              <span className="size-2 rounded-full bg-[#E1E4EC]" />
              <span className="size-2 rounded-full bg-[#E1E4EC]" />
              <span className="size-2 rounded-full bg-[#E1E4EC]" />
              <span className="ml-2 font-sans text-[11px] text-[#9AA1AC]">
                about-us
              </span>
            </div>
            <div className="p-4.5">
              <div className="flex items-center gap-2.5">
                <SignalBadge n={1} />
                <div className="h-[9px] w-[60%] rounded-[5px] bg-[#EDE9FB]" />
              </div>
              <div className="mt-2 flex flex-col gap-1.5 pl-8">
                <div className="h-[7px] w-full rounded bg-[#F0F1F4]" />
                <div className="h-[7px] w-[88%] rounded bg-[#F0F1F4]" />
              </div>

              <div className="mt-4.5 flex items-center gap-2.5">
                <SignalBadge n={2} />
                <div className="h-[9px] w-[34%] rounded-[5px] bg-[#EDE9FB]" />
              </div>
              <div className="mt-2.5 grid grid-cols-3 gap-2 pl-8">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="text-center">
                    <div className="flex aspect-square w-full items-center justify-center rounded-[10px] bg-[#EEF0F4]">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#B7BCC7"
                        strokeWidth="1.6"
                      >
                        <circle cx="12" cy="8" r="3.4" />
                        <path d="M5 20c0-3.5 3-5.5 7-5.5s7 2 7 5.5" />
                      </svg>
                    </div>
                    <div className="mx-auto mt-1.5 h-[5px] w-[70%] rounded-[3px] bg-[#F0F1F4]" />
                  </div>
                ))}
              </div>

              <div className="mt-4.5 flex items-center gap-2.5">
                <SignalBadge n={3} />
                <div className="flex flex-wrap gap-1.5">
                  <span className="h-4 w-11 rounded-full border border-[#E4DCFB] bg-[#F4F1FE]" />
                  <span className="h-4 w-14 rounded-full border border-[#E4DCFB] bg-[#F4F1FE]" />
                  <span className="h-4 w-8 rounded-full border border-[#E4DCFB] bg-[#F4F1FE]" />
                </div>
              </div>

              <div className="mt-4.5 flex items-center gap-2.5">
                <SignalBadge n={4} />
                <div className="h-[9px] w-[48%] rounded-[5px] bg-[#EDE9FB]" />
              </div>

              <div className="mt-4.5 flex items-start gap-2.5">
                <SignalBadge n={5} />
                <div className="flex flex-1 flex-col gap-1.5 border-l-2 border-[#EDE9FB] pl-2.5">
                  <div className="h-1.5 w-[90%] rounded bg-[#F0F1F4]" />
                  <div className="h-1.5 w-[75%] rounded bg-[#F0F1F4]" />
                  <div className="mt-0.5 h-2 w-[38%] rounded bg-[#EDE9FB]" />
                </div>
              </div>

              <div className="mt-4.5 flex items-center gap-2.5">
                <SignalBadge n={6} />
                <div className="flex h-[30px] max-w-[180px] flex-1 items-center rounded-lg bg-[#6F4CF5] px-3">
                  <div className="h-[7px] w-[60%] rounded bg-white/70" />
                </div>
              </div>
            </div>
          </div>
          <figcaption className="mt-3 font-sans text-[12.5px] leading-[18px] text-[#9AA1AC]">
            Example blueprint. The numbers map to the six signals on the right.
          </figcaption>
        </figure>

        <ol className="m-0 flex flex-col gap-3.5 p-0">
          {SIGNALS.map((s) => (
            <li
              key={s.n}
              className="flex items-start gap-3.5 rounded-2xl border border-[#EEF0F4] p-4"
            >
              <span className="flex size-[26px] flex-none items-center justify-center rounded-lg bg-[#F4F1FE] font-sans text-[13px] font-bold text-[#6F4CF5]">
                {s.n}
              </span>
              <p className="m-0 font-sans text-base leading-6 text-[#1F2937]">
                {s.text}{" "}
                {s.note && <span className="text-[#6B7280]">{s.note}</span>}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

type Rewrite = {
  n: 1 | 2 | 3;
  title: string;
  before: string;
  after: string;
  tags: string[];
};

const REWRITES: Rewrite[] = [
  {
    n: 1,
    title: "Rewrite 1: the generic corporate bio",
    before:
      "“Established in 2010, XYZ Electrical Services is a leading provider of innovative electrical solutions, committed to delivering excellence to every client. Our experienced team of professionals offers a comprehensive range of services tailored to meet your needs.”",
    after:
      "“XYZ Electrical Services started in 2010 as a one-man operation in Utrecht. Today we are a team of four electricians serving homeowners across the Randstad. We focus on three things: replacing old fuse boxes, installing EV chargers, and emergency callouts within 24 hours. We are members of Techniek Nederland and fully insured. Our founder, Jan de Vries, still goes out on jobs every week.”",
    tags: [
      "Real place: Utrecht & the Randstad",
      "Team size: four electricians",
      "Focus: three concrete specialisms",
      "Proof: Techniek Nederland, insured",
      "Continuity: founder Jan de Vries on jobs",
    ],
  },
  {
    n: 2,
    title: "Rewrite 2: the “we do everything” page",
    before:
      "“We offer a full suite of electrical services including but not limited to residential, commercial, and industrial installations, repairs, maintenance, and consultations. Our state-of-the-art equipment and highly trained staff ensure top-quality results every time.”",
    after:
      "“We work on residential properties only — houses, apartments, and small renovations. That focus lets us be fast and consistent. Most of our work falls into four categories: rewiring older homes, installing solar inverters, fitting EV chargers, and replacing fuse boxes. If your job is outside this list, we will tell you honestly and recommend someone better suited.”",
    tags: [
      "Clear focus: residential only",
      "Reason for focus: fast and consistent",
      "Concrete: four categories of work",
      "Honest limit: refers you on",
    ],
  },
  {
    n: 3,
    title: "Rewrite 3: the anonymous team page",
    before:
      "“Our skilled team of certified electricians is dedicated to providing you with the highest level of service. Each member brings years of experience and a passion for excellence to every project.”",
    after:
      "“Our team is small on purpose — three electricians and one office coordinator. Tom (founder) has 22 years of experience and handles complex installations. Lisa specialises in solar and battery systems. Ahmed is our newest electrician, certified in EV charger installation. Sandra schedules every job and is the person who picks up when you call. You will see the same faces from quote to completion.”",
    tags: [
      "Real names & roles: Tom, Lisa, Ahmed, Sandra",
      "Team size: small on purpose",
      "Specialisms per person",
      "Continuity: same faces throughout",
    ],
  },
];

function RewriteBlock({ rewrite }: { rewrite: Rewrite }) {
  const [on, setOn] = useState(false);
  return (
    <div className={(rewrite.n > 1 ? "mt-10" : "mt-8.5") + " max-w-240"}>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h3 className="m-0 font-sans text-xl font-bold text-[#1F2937]">
          {rewrite.title}
        </h3>
        <button
          type="button"
          onClick={() => setOn((v) => !v)}
          aria-pressed={on}
          className="inline-flex min-h-10 cursor-pointer items-center gap-2 rounded-lg border border-[#E6E8EF] bg-white px-3.5 font-sans text-[13px] font-semibold text-[#6F4CF5]"
        >
          Highlight the difference
        </button>
      </div>
      <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <figure className="m-0 rounded-[14px] border border-[#E6E8EF] bg-white p-4.5">
          <figcaption className="font-sans text-xs font-semibold uppercase tracking-[0.4px] text-[#9AA1AC]">
            Before
          </figcaption>
          <blockquote className="mt-2.5 m-0 font-sans text-[15px] italic leading-[25px] text-[#6B7280]">
            {rewrite.before}
          </blockquote>
        </figure>
        <figure className="m-0 rounded-[14px] border border-[#E4DCFB] bg-[#F4F1FE] p-4.5">
          <figcaption className="font-sans text-xs font-semibold uppercase tracking-[0.4px] text-[#6F4CF5]">
            After
          </figcaption>
          <blockquote className="mt-2.5 m-0 font-sans text-[15px] leading-[25px] text-[#1F2937]">
            {rewrite.after}
          </blockquote>
        </figure>
      </div>
      {on && (
        <div className="mt-3.5 flex flex-wrap gap-2">
          {rewrite.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-lg border border-[#FBE8A6] bg-[#FFF6DA] px-3 py-1.5 font-sans text-[12.5px] text-[#1F2937]"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export function BeforeAfterSection() {
  return (
    <section id="before-after" className="mt-26 scroll-mt-24">
      <h2 className="w-full text-balance font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
        Three before-and-after rewrites
      </h2>
      <p className="mt-6 w-full font-sans text-base leading-[26px] text-[#1F2937] sm:text-[19px] sm:leading-[31px]">
        Here are three weak About pages, rewritten using the framework above.
        These are based on common patterns we see, not real businesses.
      </p>

      {REWRITES.map((r) => (
        <RewriteBlock key={r.n} rewrite={r} />
      ))}

      <figure
        role="img"
        aria-label="Side-by-side comparison of weak versus strong electrical company bio examples showing improvements in tone, specificity, and trust signals"
        className="mt-8.5 max-w-240 rounded-2xl border border-[#E6E8EF] bg-[#FBFBFD] p-5.5"
      >
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div>
            <div className="font-sans text-xs font-semibold uppercase tracking-[0.4px] text-[#9AA1AC]">
              Weak copy
            </div>
            <ul className="mt-2.5 list-disc pl-[18px] font-sans text-sm leading-6 text-[#6B7280]">
              <li>Empty superlatives</li>
              <li>No names or place</li>
              <li>&ldquo;Does everything for everyone&rdquo;</li>
              <li>No proof or limits</li>
            </ul>
          </div>
          <div>
            <div className="font-sans text-xs font-semibold uppercase tracking-[0.4px] text-[#6F4CF5]">
              Strong copy
            </div>
            <ul className="mt-2.5 list-disc pl-[18px] font-sans text-sm leading-6 text-[#1F2937]">
              <li>Real names, place, and team size</li>
              <li>Concrete specialisms</li>
              <li>Proof: memberships and insurance</li>
              <li>Honest limits and continuity</li>
            </ul>
          </div>
        </div>
        <figcaption className="mt-3.5 font-sans text-[12.5px] leading-[18px] text-[#9AA1AC]">
          Strong copy replaces empty superlatives with names, focus, proof, and
          promises.
        </figcaption>
      </figure>
    </section>
  );
}

const FLOW_STEPS = [
  {
    label: "Build trust",
    icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
  },
  {
    label: "Contact or booking",
    icon: (
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    ),
  },
  {
    label: "Capture enquiry",
    icon: (
      <path d="M5 3h14a2 2 0 0 1 2 2v16l-4-3-3 2-3-2-4 3V5a2 2 0 0 1 2-2z" />
    ),
  },
  {
    label: "Follow up",
    icon: <path d="M20 6L9 17l-5-5" />,
  },
];

export function WiderSiteSection() {
  return (
    <section id="wider-site" className="mt-26 scroll-mt-24">
      <h2 className="w-full text-balance font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
        Where the About page fits into your wider site
      </h2>
      <p className="mt-6 w-full font-sans text-base leading-[26px] text-[#1F2937] sm:text-[19px] sm:leading-[31px]">
        The About page is one part of a working website. It builds trust, but
        the customer still needs an easy way to act on it. That usually means a
        contact form, a booking option, or a clear phone number &mdash; and a
        way to manage the enquiries that come through.
      </p>
      <p className="mt-5.5 w-full font-sans text-base leading-[26px] text-[#1F2937] sm:text-[19px] sm:leading-[31px]">
        If enquiries come in faster than you can keep up with, they get lost. If
        they get lost, the trust you built on the About page is wasted. Growth
        Rocket pairs a professional website with the{" "}
        <InlineLink href="https://hub.getgrowthrocket.com/">
          Growth Rocket Hub
        </InlineLink>
        , where every enquiry, booking, and follow-up is organised in one place.
        The website brings the customer in. The Hub keeps you on top of what
        happens next.
      </p>

      <div className="mt-7.5 flex w-full flex-col items-stretch gap-2.5 lg:flex-row">
        {FLOW_STEPS.map((step, i) => (
          <div
            key={step.label}
            className="flex flex-1 flex-col items-center gap-2.5 lg:flex-row"
          >
            <div
              className={
                "flex-1 rounded-[14px] border p-4.5 text-center " +
                (i === FLOW_STEPS.length - 1
                  ? "border-[#E4DCFB] bg-[#F4F1FE]"
                  : "border-[#EEF0F4] bg-white")
              }
            >
              <div
                className={
                  "mx-auto flex size-[38px] items-center justify-center rounded-[10px] text-[#6F4CF5] " +
                  (i === FLOW_STEPS.length - 1 ? "bg-white" : "bg-[#F4F1FE]")
                }
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {step.icon}
                </svg>
              </div>
              <div className="mt-2.5 font-sans text-[14px] font-semibold text-[#1F2937]">
                {step.label}
              </div>
            </div>
            {i < FLOW_STEPS.length - 1 && (
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#C5B7FB"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="flex-none rotate-90 lg:rotate-0"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8.5 w-full rounded-2xl border border-[#E4DCFB] bg-[#F4F1FE] p-6">
        <p className="m-0 text-pretty font-sans text-lg leading-7 text-[#1F2937]">
          The About page builds trust &mdash; the site around it turns that
          trust into booked work.{" "}
          <InlineLink href="/contact">
            Get a managed website built around trust and lead capture &rarr;
          </InlineLink>
        </p>
      </div>
    </section>
  );
}

const SILENT_SUMMARY = [
  "Who are you?",
  "Are you qualified?",
  "Will you treat my house with respect?",
  "What happens if something goes wrong?",
];

export function SummarySection() {
  return (
    <section id="summary" className="mt-26 scroll-mt-24">
      <h2 className="w-full text-balance font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
        Putting it all together
      </h2>
      <p className="mt-6 w-full font-sans text-base leading-[26px] text-[#1F2937] sm:text-[19px] sm:leading-[31px]">
        A good About Us page is not about clever writing. It is about answering
        the silent questions a customer is asking before they call: Who are you?
        Are you qualified? Will you treat my house with respect? What happens if
        something goes wrong?
      </p>
      <blockquote className="mt-7.5 w-full rounded-[18px] border border-[#E4DCFB] bg-[#F4F1FE] p-7">
        <div className="font-sans text-xs font-semibold uppercase tracking-[0.6px] text-[#6F4CF5]">
          The four silent questions
        </div>
        <div className="mt-4 grid grid-cols-1 gap-3.5 lg:grid-cols-2">
          {SILENT_SUMMARY.map((q) => (
            <div
              key={q}
              className="font-sans text-xl font-semibold leading-7 text-[#1F2937]"
            >
              {q}
            </div>
          ))}
        </div>
      </blockquote>
      <p className="mt-6.5 w-full font-sans text-base leading-[26px] text-[#1F2937] sm:text-[19px] sm:leading-[31px]">
        Cover those clearly, with real names, real photos, real certifications,
        and a personal note from the founder, and your About page will do its
        job.
      </p>
      <p className="mt-5.5 w-full font-sans text-base leading-[26px] text-[#1F2937] sm:text-[19px] sm:leading-[31px]">
        Then make sure the website around it is fast, mobile-friendly, and easy
        to contact you through. That is where most{" "}
        <InlineLink href="/website-for-electricians/">
          electrician websites
        </InlineLink>{" "}
        fall down &mdash; not in the writing, but in the structure.
      </p>
    </section>
  );
}

type MoreLink = { label: string; href: string };
type MoreGroup = { heading: string; links: MoreLink[] };

const MORE_GROUPS: MoreGroup[] = [
  {
    heading: "Costs & choices",
    links: [
      {
        label: "What does a website for an electrician cost?",
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
        label: "8 examples of electrician websites",
        href: "/blog/8-electrician-website-examples-that-actually-win-customers",
      },
    ],
  },
];

export function MoreForElectriciansSection() {
  return (
    <section id="more" className="mt-26 scroll-mt-24">
      <h2 className="max-w-180 text-balance font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
        More for electricians
      </h2>
      <p className="mt-3.5 max-w-180 font-sans text-[16.5px] leading-[1.58] text-[#6B7280]">
        Everything that helps you win more enquiries online — from costs and
        choices to the build and the individual pages.
      </p>
      <div className="mt-7 max-w-225 overflow-hidden rounded-[14px] border border-[#E6E8EF] bg-[#F8F9FC]">
        <details className="group">
          <summary className="flex min-h-15 cursor-pointer list-none items-center justify-between gap-6 px-7 py-6">
            <span className="font-sans text-lg font-semibold text-[#1F2937]">
              Browse all articles for electricians
            </span>
            <span
              aria-hidden="true"
              className="flex-none font-sans text-[22px] font-normal leading-none text-[#9AA1AC] transition-transform duration-200 group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <div className="flex flex-col gap-7 px-7 pb-7">
            {MORE_GROUPS.map((group) => (
              <div key={group.heading}>
                <div className="mb-3 font-sans text-[11px] font-semibold uppercase tracking-[1px] text-[#9AA1AC]">
                  {group.heading}
                </div>
                <div className="flex flex-col gap-2.5">
                  {group.links.map((link) => (
                    <div
                      key={link.href}
                      className="flex items-baseline gap-2.5"
                    >
                      <span className="flex-none font-sans text-[15px] text-[#6F4CF5]">
                        →
                      </span>
                      <a
                        href={link.href}
                        className="font-sans text-[15.5px] leading-[1.55] text-[#1F2937] no-underline"
                      >
                        {link.label}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </details>
      </div>
    </section>
  );
}
