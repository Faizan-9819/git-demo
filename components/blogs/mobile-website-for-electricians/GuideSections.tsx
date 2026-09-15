"use client";

import type { ReactNode } from "react";
import Button from "@/app/components/ui/Button";
import CostComparisonTable, {
  type ComparisonRow,
} from "@/components/blogs/shared/CostComparisonTable";
import AuditChecklist from "./AuditChecklist";
import Flag from "./Flag";
import InlineLink from "./InlineLink";

function CheckIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className="mt-0.5 flex-none text-[#6F4CF5]"
    >
      <polyline points="4 12.5 9.5 18 20 6" />
    </svg>
  );
}

export function IntroSection() {
  return (
    <>
      <section id="opening" className="scroll-mt-24">
        <div className="w-full">
          <p className="font-sans text-[19px] leading-[31px] text-[#1F2937]">
            An &ldquo;elektricien spoed&rdquo; search at 10pm doesn&rsquo;t come
            from someone sitting at a desk. It comes from a homeowner standing
            next to a dead fuse box, with one thumb on their phone and a crying
            child in the next room. They will call the first electrician whose
            number works on the first tap.
          </p>
          <p className="mt-6 font-sans text-[19px] leading-[31px] text-[#1F2937]">
            If your mobile website is slow, hides your phone number, or asks
            them to fill in six fields, they will not call you. They will call
            the next result. This is how most Dutch electricians lose work they
            never even knew they were quoted for.
          </p>
          <p className="mt-6 font-sans text-[19px] leading-[31px] text-[#1F2937]">
            This guide explains what a mobile website for electricians actually
            needs — based on how Dutch customers really search for trades — and
            how to audit your own site in about ten minutes. At Growth Rocket,
            we&rsquo;ve built and optimised websites for local service
            businesses across the Netherlands, and the same mobile issues appear
            again and again: slow load times, hidden phone numbers, and contact
            forms that cost electricians valuable enquiries.
          </p>
        </div>
      </section>

      <section id="waarom" className="scroll-mt-24">
        <div className="mt-14 overflow-hidden rounded-[24px] border border-[#E5E7EB] shadow-lg">
          <img
            src="/blogimages/en/6-mobile-website-for-electricians/mobile_website_for_electricians_why_it_matters_more_than_you_think_and_how_to_fix_yours_ (3).webp"
            alt="Example electrician homepage"
          />
        </div>
        <h2 className="mt-22 w-full text-balance font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
          Why mobile matters so much for electricians
        </h2>
        <div className="w-full">
          <p className="mt-7 font-sans text-[19px] leading-[31px] text-[#1F2937]">
            <Flag>Over 70%</Flag> of visits to a typical Dutch electrician
            website come from a mobile device. For emergency queries like
            &ldquo;stroomstoring spoed&rdquo; or &ldquo;elektricien in de
            buurt&rdquo;, that share pushes <Flag>above 85%</Flag>. These are
            not casual browsers. They are people with a problem who want a phone
            number.
          </p>
        </div>

        <figure className="mt-10 w-full rounded-2xl border border-[#E6E8EF] bg-[#FBFBFD] p-7 outline-2 outline-offset-4 outline-dashed outline-[#DC2626] sm:p-[30px]">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <figcaption className="font-sans text-[11px] font-semibold uppercase tracking-[1.1px] text-[#9AA1AC]">
              Where the traffic comes from
            </figcaption>
            <span className="rounded-full border border-[#F3D2D2] bg-[#FDF2F2] px-2.5 py-1 font-sans text-[11px] font-semibold text-[#D64545]">
              ⚑ Verify · traffic figures
            </span>
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <div className="mb-2 flex items-baseline justify-between">
                <span className="font-sans text-sm font-semibold text-[#1F2937]">
                  Mobile
                </span>
                <span className="font-sans text-[12.5px] text-[#6B7280]">
                  70%+ of visits
                </span>
              </div>
              <div className="h-5 overflow-hidden rounded-md bg-[#EEF0F4]">
                <div className="h-full w-[72%] rounded-md bg-[#6F4CF5]" />
              </div>
            </div>
            <div>
              <div className="mb-2 flex items-baseline justify-between">
                <span className="font-sans text-sm font-semibold text-[#1F2937]">
                  Desktop
                </span>
                <span className="font-sans text-[12.5px] text-[#6B7280]">
                  the rest
                </span>
              </div>
              <div className="h-5 overflow-hidden rounded-md bg-[#EEF0F4]">
                <div className="h-full w-[28%] rounded-md bg-[#C9CDD6]" />
              </div>
            </div>
          </div>
          <div className="mt-[18px] font-sans text-[13px] leading-5 text-[#9AA1AC]">
            For emergency searches the mobile share rises above 85%. Share
            varies by business.
          </div>
        </figure>

        <div className="w-full">
          <p className="mt-8 font-sans text-[19px] leading-[31px] text-[#1F2937]">
            This changes what a good site looks like. On a desktop, visitors
            compare and read. On a phone in an emergency, they want one thing: a
            way to reach you in under three seconds. Every extra tap, every
            popup, every menu that requires thinking is a reason to leave.
          </p>
          <p className="mt-6 font-sans text-[19px] leading-[31px] text-[#1F2937]">
            There is also a trust problem specific to the Dutch market that most
            electricians underestimate. Complaints to the <Flag>ACM</Flag> about
            fraudulent &ldquo;malafide&rdquo; electrician websites —
            AI-generated spoed sites with fake addresses — have{" "}
            <Flag>reached record levels</Flag>. Dutch customers now actively
            check the mobile version of a site before calling, looking for signs
            of a legitimate local professional. A clean, fast mobile site is not
            just better marketing. It is how you prove you are the real one.
          </p>
        </div>
      </section>
    </>
  );
}

export function CostSection() {
  return (
    <section id="kosten" className="scroll-mt-24">
      <h2 className="mt-22 w-full text-balance font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
        The business cost of a bad mobile site
      </h2>
      <div className="w-full">
        <p className="mt-7 font-sans text-[19px] leading-[31px] text-[#1F2937]">
          The math is more brutal than most electricians realise. A lead on{" "}
          <InlineLink href="https://www.werkspot.nl/" external>
            Werkspot
          </InlineLink>{" "}
          costs <Flag>€20–€45</Flag>, and because three to five contractors
          respond to each request, the average win rate is around 20%. That
          works out to roughly €100–€225 per actual customer won through a
          marketplace — and the customer never belongs to you.
        </p>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        <div className="rounded-2xl border border-[#E6E8EF] bg-[#FBFBFD] p-[30px_30px_32px]">
          <div className="font-sans text-[11px] font-semibold uppercase tracking-[1px] text-[#9AA1AC]">
            Through a marketplace
          </div>
          <div className="mt-[22px] flex flex-col">
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span className="font-sans text-[44px] font-light leading-none tracking-[-1px] text-[#1F2937]">
                <Flag>€20–45</Flag>
              </span>
              <span className="font-sans text-sm text-[#6B7280]">per lead</span>
            </div>
            <div className="py-3.5 pl-0.5 text-[#C3C8D2]">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="12" y1="5" x2="12" y2="18" />
                <polyline points="7 13 12 18 17 13" />
              </svg>
            </div>
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span className="font-sans text-[44px] font-light leading-none tracking-[-1px] text-[#1F2937]">
                ~20%
              </span>
              <span className="font-sans text-sm text-[#6B7280]">
                win rate, 3–5 contractors respond
              </span>
            </div>
            <div className="py-3.5 pl-0.5 text-[#C3C8D2]">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="12" y1="5" x2="12" y2="18" />
                <polyline points="7 13 12 18 17 13" />
              </svg>
            </div>
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span className="font-sans text-[44px] font-light leading-none tracking-[-1px] text-[#1F2937]">
                €100–225
              </span>
              <span className="font-sans text-sm text-[#6B7280]">
                per customer won
              </span>
            </div>
          </div>
          <div className="mt-[22px] border-t border-[#EEF0F4] pt-[18px] font-sans text-[14.5px] leading-[22px] text-[#6B7280]">
            And that customer is now a marketplace customer — next time they
            have work, they search there again.
          </div>
        </div>

        <div className="rounded-2xl border border-[#E4DCFB] bg-[#F4F1FE] p-[30px_30px_32px]">
          <div className="font-sans text-[11px] font-semibold uppercase tracking-[1px] text-[#6F4CF5]">
            Through your own website
          </div>
          <div className="mt-[22px] flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <span className="font-sans text-[44px] font-light leading-none tracking-[-1px] text-[#6F4CF5]">
              2–3
            </span>
            <span className="font-sans text-sm text-[#6B7280]">
              direct calls per month
            </span>
          </div>
          <p className="mt-5 font-sans text-base leading-[26px] text-[#1F2937]">
            A mobile-friendly website that captures even two or three direct
            calls per month pays for itself many times over.
          </p>
          <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#E4DCFB] bg-white px-[15px] py-2 font-sans text-[13.5px] font-semibold text-[#6F4CF5]">
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="4 12.5 9.5 18 20 6" />
            </svg>
            Every caller is yours
          </div>
        </div>
      </div>

      <div className="w-full">
        <p className="mt-8 font-sans text-[19px] leading-[31px] text-[#1F2937]">
          The problem is that most electrician websites cannot capture those
          calls because they were built for desktop, not for someone standing in
          a dark hallway.
        </p>
        <h3 className="mt-13 w-full font-sans text-[21px] font-[650] leading-[29px] tracking-[-0.2px] text-[#1F2937]">
          What Growth Rocket sees across electrician websites
        </h3>
        <p className="mt-5 font-sans text-[19px] leading-[31px] text-[#1F2937]">
          One of the most common issues we find when reviewing electrician
          websites is that they were built on desktop-first templates and never
          properly tested on a smartphone. The result is lost enquiries from
          homeowners who cannot quickly find a phone number, submit a quote
          request, or verify that the business is legitimate.
        </p>
        <p className="mt-6 font-sans text-[19px] leading-[31px] text-[#1F2937]">
          In most cases, improving mobile performance does not require
          complicated technology. Faster load times, visible click-to-call
          buttons, clear service areas, and stronger trust signals can
          significantly improve the number of direct enquiries a website
          generates.
        </p>
      </div>
    </section>
  );
}

export function RequirementsSection() {
  const items = [
    "Loads in under 3 seconds on normal 4G, not just Wi-Fi",
    "Click-to-call button visible without scrolling, using a tel: link",
    "WhatsApp button — increasingly the preferred contact method for Dutch homeowners",
    "Thumb-friendly buttons at least 44 pixels tall",
    "Readable text — body font 16px minimum, strong contrast",
    "No popups on mobile, especially on the first screen",
    "Responsive design that adapts to any screen size",
    "Short forms — name, phone, problem, and nothing more",
    "Clear service area — the cities or regions you actually cover",
    "Legitimacy signals — KvK number, Techniek Nederland badge, real team photos",
  ];
  return (
    <section id="eisen" className="scroll-mt-24">
      <h2 className="mt-22 w-full text-balance font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
        What a good mobile website for electricians needs
      </h2>
      <div className="w-full">
        <p className="mt-7 font-sans text-[19px] leading-[31px] text-[#1F2937]">
          Before the step-by-step, here are the non-negotiables. This is the
          minimum standard for any electrician operating in the Netherlands
          today.
        </p>
      </div>

      <div className="mt-10 rounded-2xl border border-[#E6E8EF] bg-white p-[40px_28px] shadow-[0_1px_3px_rgba(16,24,40,0.04)] sm:p-[40px_44px]">
        <div className="grid gap-[18px_48px] sm:grid-cols-2">
          {items.map((item) => (
            <div key={item} className="flex items-start gap-3.5">
              <CheckIcon />
              <span
                className="font-sans text-[16.5px] leading-[25px] text-[#1F2937]"
                dangerouslySetInnerHTML={{ __html: item }}
              />
            </div>
          ))}
        </div>
        <div className="mt-[30px] border-t border-[#EEF0F4] pt-6 font-sans text-base leading-[25px] text-[#6B7280]">
          Every one of these is solvable without rebuilding your site from
          scratch.
        </div>
      </div>
    </section>
  );
}

type Step = {
  num: string;
  title: string;
  pills: string[];
  body: ReactNode[];
  chips?: string[];
  bullets?: string[];
  /** Paragraph(s) that follow the bullets/chips block, e.g. a wrap-up line after a list. */
  after?: ReactNode[];
};

const STEPS: Step[] = [
  {
    num: "01",
    title: "Test your site on a real phone, on mobile data",
    pills: ["on 4G"],
    body: [
      "Open your own website on your phone — not a desktop preview, an actual phone — and turn Wi-Fi off. Mobile data is what most emergency visitors are using. Try three things: find your phone number, tap it to call, and submit an enquiry. If any of those take more than a few seconds, or require zooming in, you have a problem. Write down what went wrong — that list becomes your fix list.",
      "Do this test again from the perspective of a homeowner who has never heard of you. Does the site tell them within five seconds who you are, which areas you cover, and how to reach you? If not, start there.",
    ],
  },
  {
    num: "02",
    title: "Check your load speed",
    pills: ["< 3 sec", "≤ 200 KB per photo"],
    body: [
      "Go to Google's PageSpeed Insights, paste in your URL, and look at the mobile score specifically. Anything under 50 is costing you work; above 90 is where you want to be. The three most common reasons Dutch electrician sites load slowly:",
    ],
    bullets: [
      "Oversized photos of installed groepenkasten or laadpalen, uploaded straight from a phone camera at 4MB each",
      "Heavy page builders like Elementor or Divi loaded with unused widgets",
      "Tracking scripts from old marketing campaigns that were never removed",
    ],
    after: [
      "Compress every image to under 200KB and most of the problem disappears. When we audit electrician websites, oversized images are consistently one of the largest contributors to poor mobile performance and low PageSpeed scores.",
    ],
  },
  {
    num: "03",
    title: "Add a click-to-call button — and a WhatsApp button",
    pills: ["tel: link", "wa.me"],
    body: [
      "The click-to-call button is the most important element on any electrician website. In our website reviews, missing or poorly positioned phone buttons are among the most common causes of lost mobile enquiries. Place it in the header, visible the moment the page loads. Make it obvious — a button with a phone icon and text like “Bel nu” or “Direct bellen”. Use the tel: link format so tapping actually dials. The button should stay visible as the visitor scrolls.",
      <>
        Then add a second button next to it: WhatsApp. Dutch customers
        increasingly prefer{" "}
        <InlineLink href="https://www.whatsapp.com/business" external>
          WhatsApp enquiries
        </InlineLink>{" "}
        for non-urgent work — a quote for a new groepenkast, a question about
        laadpaal installation, or a photo of a broken socket. For you as the
        electrician, WhatsApp enquiries come with photos attached, which saves
        time on werkvoorbereiding. Use a wa.me link so tapping opens WhatsApp
        directly.
      </>,
    ],
  },
  {
    num: "04",
    title: "Make buttons thumb-friendly",
    pills: ["≥ 44px"],
    body: [
      "Apple and Google both recommend tap targets of at least 44×44 pixels. Smaller than that, and thumbs miss. Missed taps feel like the site is broken, and visitors leave. Check every button on your homepage:",
    ],
    chips: ["Bel nu", "WhatsApp", "Offerte aanvragen", "Menu"],
    after: [
      "If any are small, cramped, or too close to other links, make them bigger and space them out. Stack buttons vertically on mobile rather than cramming them into a row. Thumbs are not laser pointers.",
    ],
  },
  {
    num: "05",
    title: "Fix font sizes and contrast",
    pills: ["16px", "strong contrast"],
    body: [
      "Body text should be 16px or larger. Headings should be noticeably bigger. Light grey text on a white background may look elegant in a design mockup, but it is unreadable on a phone in daylight — which is where many of your visitors are. A simple test: can you read your site outdoors, in sunlight, without zooming? If not, increase the font size and contrast. This matters especially for older homeowners, who make up a significant share of the renovation market.",
    ],
  },
  {
    num: "06",
    title: "Remove popups and cookie walls",
    pills: ["0 popups"],
    body: [
      "Popups on mobile are the fastest way to lose a visitor. Google also penalises “intrusive interstitials” in mobile search rankings, so you lose visibility as well as visitors. Remove any newsletter popup on mobile entirely. Shrink the cookie banner to a thin strip at the bottom that does not block content. If you must show a message, wait until the visitor has read at least one full screen. Emergency callers will not wait through a cookie wall — they will press back and call your competitor.",
    ],
  },
  {
    num: "07",
    title: "Shorten your contact form",
    pills: ["3 fields"],
    body: [
      "On a phone, every form field feels twice as long. Five fields is usually too many. Keep it to three:",
    ],
    chips: ["Name", "Phone", "Short description"],
    after: [
      "Email is optional — most people calling an electrician would rather be called back than wait for an email reply. Offer a photo upload field for quote requests; a photo of a current groepenkast tells you more than three paragraphs of text and lets you quote faster. If you want to go one step further, add a simple dropdown for service type — “storing / groepenkast / laadpaal / zonnepanelen / anders” — so enquiries arrive pre-sorted in your inbox.",
    ],
  },
  {
    num: "08",
    title: "Make your service area and legitimacy obvious",
    pills: ["service area", "KvK"],
    body: [
      <>
        “Elektricien Utrecht” and “elektricien in de buurt” are two of the most
        common search terms in the Dutch market. If your site doesn't clearly
        state which areas you cover, visitors assume you don't cover theirs and
        keep scrolling. Put your service area in the top section — something
        like “Werkzaam in Utrecht, Amersfoort en Hilversum” is enough — and
        repeat it in the footer. This also helps your{" "}
        <InlineLink
          href="https://support.google.com/business/answer/7091"
          external
        >
          local Google ranking
        </InlineLink>
        .
      </>,
      "In the same area, show the trust signals that separate you from malafide operators: your KvK number, your Techniek Nederland membership, a real photo of your van or team, and a visible review count from Google. Dutch customers now look for these before calling — especially in larger cities, where they compare multiple providers, so keep these above the fold whenever possible.",
    ],
  },
];

function MidCtaBar({
  eyebrow,
  body,
  accent,
}: {
  eyebrow: string;
  body: string;
  accent?: boolean;
}) {
  const openLeadForm = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-lead-form"));
    }
  };
  return (
    <div
      className="mt-10 flex flex-wrap items-center justify-between gap-7 rounded-2xl p-[34px_36px]"
      style={{
        background: accent ? "#F4F1FE" : "#F8F9FC",
        border: `1px solid ${accent ? "#E4DCFB" : "#E6E8EF"}`,
      }}
    >
      <div className="max-w-[560px]">
        <div
          className="font-sans text-[11px] font-semibold uppercase tracking-[1.1px]"
          style={{ color: accent ? "#6F4CF5" : "#9AA1AC" }}
          dangerouslySetInnerHTML={{ __html: eyebrow }}
        />
        <p
          className="mt-3 font-sans text-lg leading-7 text-[#1F2937]"
          dangerouslySetInnerHTML={{ __html: body }}
        />
      </div>
      <Button
        onClick={openLeadForm}
        variant="primary"
        arrow="right"
        className="flex-none"
      >
        See how it works
      </Button>
    </div>
  );
}

function StepCard({ step, alt }: { step: Step; alt: boolean }) {
  return (
    <div
      className="rounded-2xl border border-[#E6E8EF] p-[30px_24px] sm:p-[30px_34px]"
      style={{ background: alt ? "#F8F9FC" : "#FFFFFF" }}
    >
      <div className="flex flex-col items-start gap-4 sm:flex-row sm:gap-[26px]">
        <div
          className="font-sans text-[62px] font-light leading-[0.85] text-[#C5B7FB] tabular-nums"
          dangerouslySetInnerHTML={{ __html: step.num }}
        />
        <div className="min-w-0 flex-1 pt-1">
          <div className="flex flex-wrap items-center gap-2.5">
            <div
              className="font-sans text-[20px] font-[650] leading-[1.2] tracking-[-0.2px] text-[#1F2937]"
              dangerouslySetInnerHTML={{ __html: step.title }}
            />
            {step.pills.map((pill) => (
              <span
                key={pill}
                className="rounded-full border border-[#E4DCFB] bg-[#F4F1FE] px-2.5 py-[3px] font-sans text-xs font-semibold tabular-nums text-[#6F4CF5]"
                dangerouslySetInnerHTML={{ __html: pill }}
              />
            ))}
          </div>
          {step.body.map((p, i) => (
            <p
              key={i}
              className="mt-3.5 max-w-[640px] font-sans text-[16.5px] leading-[27px] text-[#4B5563]"
            >
              {p}
            </p>
          ))}
          {step.bullets && (
            <div className="mt-4 flex flex-col gap-2.5">
              {step.bullets.map((bullet) => (
                <div key={bullet} className="flex items-start gap-2.5">
                  <span className="mt-2.5 size-[5px] flex-none rounded-full bg-[#6F4CF5]" />
                  <span
                    className="font-sans text-[15.5px] leading-6 text-[#1F2937]"
                    dangerouslySetInnerHTML={{ __html: bullet }}
                  />
                </div>
              ))}
            </div>
          )}
          {step.chips && (
            <div className="mt-4 flex flex-wrap gap-2.5">
              {step.chips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-lg border border-[#E4E7EC] bg-white px-3.5 py-2 font-sans text-sm font-medium text-[#1F2937]"
                  dangerouslySetInnerHTML={{ __html: chip }}
                />
              ))}
            </div>
          )}
          {step.after?.map((p, i) => (
            <p
              key={i}
              className="mt-4 max-w-[640px] font-sans text-[16.5px] leading-[27px] text-[#4B5563]"
            >
              {p}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export function StepsSection() {
  return (
    <section id="stappen" className="scroll-mt-24">
      <h2 className="mt-22 w-full text-balance font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
        How to fix your mobile website: 8 steps
      </h2>
      <div className="w-full">
        <p className="mt-7 font-sans text-[19px] leading-[31px] text-[#1F2937]">
          Follow these in order. Each step takes between five minutes and a few
          hours.
        </p>
      </div>

      <div className="mt-11 flex flex-col gap-4.5">
        {STEPS.map((step, i) => (
          <StepCard key={step.num} step={step} alt={i % 2 === 1} />
        ))}
      </div>

      <MidCtaBar
        accent
        eyebrow="Rather have it built"
        body="Rather have a mobile-ready electrician website built and managed for you? See how the process works first."
      />
    </section>
  );
}

const comparisonRows: ComparisonRow[] = [
  {
    label: "Load time",
    values: ["6–10 seconds on 4G", "Under 3 seconds on 4G"],
  },
  {
    label: "Phone number",
    values: [
      "Hidden in footer or contact page",
      "Visible in header, tel: link active",
    ],
  },
  {
    label: "WhatsApp",
    values: ["Not available", "Visible button with wa.me link"],
  },
  {
    label: "Buttons",
    values: ["Small, cramped, hard to tap", "At least 44px, spaced, stacked"],
  },
  {
    label: "Text size",
    values: ["12–14px body text, light grey", "16px+ body text, high contrast"],
  },
  {
    label: "Popups",
    values: [
      "Newsletter and cookie popups on arrival",
      "No popups, minimal cookie strip",
    ],
  },
  {
    label: "Contact form",
    values: [
      "6+ fields, no photo upload",
      "3 fields, photo upload, service dropdown",
    ],
  },
  {
    label: "Service area",
    values: ["Buried or missing", "Visible in top section and footer"],
  },
  {
    label: "Trust signals",
    values: [
      "Generic stock photos",
      "KvK number, Techniek Nederland, real team photos, review count",
    ],
  },
  {
    label: "Emergency flow",
    values: [
      "Multiple clicks to reach a phone",
      "One tap to call, no interruption",
    ],
    emphasize: true,
  },
];

export function ComparisonSection() {
  return (
    <section id="vergelijking" className="scroll-mt-24">
      <h2 className="mt-22 w-full  font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
        Mobile-hostile vs. mobile-friendly: what the difference looks like
      </h2>
      <div className="w-full">
        <p className="mt-7 font-sans text-[19px] leading-[31px] text-[#1F2937]">
          Here is what separates the two in practice, from the perspective of a
          Dutch homeowner searching &ldquo;elektricien spoed&rdquo; at night.
        </p>
      </div>

      <CostComparisonTable
        labelColumnWidth="auto"
        labelColumnHeader="Element"
        columns={[
          { label: "Mobile-hostile site", tone: "bad", width: "1.15fr" },
          { label: "Mobile-friendly site", tone: "good", width: "1.15fr" },
        ]}
        rows={comparisonRows}
        wrapCells
      />

      <div className="w-full">
        <p className="mt-8 font-sans text-[19px] leading-[31px] text-[#1F2937]">
          The mobile-hostile site isn&rsquo;t always an old site. Many new sites
          built on generic templates or cheap sitebuilders have the same
          problems because they were designed on a desktop, for a desktop, and
          never tested by someone actually trying to book an electrician in an
          emergency.
        </p>

        <h3 className="mt-14 font-sans text-2xl font-[650] leading-[33px] tracking-[-0.2px] text-[#1F2937]">
          Why this matters for your business, not just your website
        </h3>
        <p className="mt-5.5 font-sans text-[19px] leading-[31px] text-[#1F2937]">
          A responsive tradesperson site is not a design preference. It is how
          you capture enquiries during the minutes that matter — and how you
          stop paying marketplaces to rent customers that should be yours.
        </p>
        <p className="mt-6 font-sans text-[19px] leading-[31px] text-[#1F2937]">
          The economics are the part most electricians don&rsquo;t calculate. An
          average Dutch electrician on Werkspot pays <Flag>€20–€45</Flag> per
          lead, wins roughly one in five, and ends up spending €100–€225 per
          customer won. On top of that, the customer is now a Werkspot customer,
          not your customer. Next time they have work, they will search Werkspot
          again.
        </p>
        <p className="mt-6 font-sans text-[19px] leading-[31px] text-[#1F2937]">
          A mobile-friendly website that captures even one direct call per week
          costs a fraction of that — and every caller belongs to you. Over a
          year, that difference is the cost of a second van, or a new
          apprentice.
        </p>
        <p className="mt-6 font-sans text-[19px] leading-[31px] text-[#1F2937]">
          There is a second quiet benefit most agencies never mention:
          recruitment. The Dutch installation sector has around{" "}
          <Flag>30,600 open vacancies</Flag> and a{" "}
          <InlineLink href="https://www.technieknederland.nl/" external>
            chronic shortage of qualified monteurs and BBL leerlingen
          </InlineLink>
          . Apprentices and younger electricians almost always find employers
          through their phone. A website trades professionals actually enjoy
          visiting on a smartphone also helps you hire — which, for most
          electricians, is a bigger pain than finding customers in the first
          place.
        </p>
      </div>
    </section>
  );
}

export function AuditSection() {
  return (
    <section id="check" className="scroll-mt-24">
      <h2 className="mt-22 w-full font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
        Quick mobile audit checklist
      </h2>
      <div className="w-full">
        <p className="mt-7 font-sans text-[19px] leading-[31px] text-[#1F2937]">
          Run through this list on your own phone, on mobile data. Tick each
          item that&rsquo;s true — your score updates as you go. A score of 9–11
          is strong. Anything under 7 means your site is actively costing you
          enquiries.
        </p>
      </div>

      <AuditChecklist />

      <div className="w-full">
        <p className="mt-8 font-sans text-[19px] leading-[31px] text-[#1F2937]">
          If you scored under 7, the fixes in this guide will get you there. If
          you scored under 4, it is usually faster to start with a new,{" "}
          <InlineLink href="#eisen">mobile-first site</InlineLink> than to patch
          an old one — the same way you wouldn&rsquo;t rewire a 30-year-old
          installatie one socket at a time.
        </p>
      </div>

      <MidCtaBar
        eyebrow="Managed for you"
        body="See how Growth Rocket builds mobile-ready electrician sites. You've now seen the full problem and every fix."
      />
    </section>
  );
}

export function ClosingSection() {
  return (
    <section id="closing" className="scroll-mt-24">
      <div className="w-full">
        <h2 className="mt-24 text-balance font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
          What to do next
        </h2>
        <p className="mt-7 font-sans text-[19px] leading-[31px] text-[#1F2937]">
          A mobile-first site is not about looking modern. It is about making
          sure the homeowner standing next to a dead fuse box can reach you in
          one tap — and that she trusts you enough to tap at all.
        </p>
        <p className="mt-6 font-sans text-[19px] leading-[31px] text-[#1F2937]">
          Fix the eight items in this guide, run the checklist on your own
          phone, and re-test every few months. If the list feels like more work
          on top of an already full schedule, that is exactly what Growth
          Rocket&rsquo;s managed website service is designed for: we handle the
          design, setup, hosting, updates, and ongoing maintenance so
          electricians can focus on customer work rather than website fixes.
          Every website we build is designed mobile-first — because that is how
          modern customers search, compare, and contact local businesses.
        </p>
      </div>

      <div className="my-16 w-full">
        <div className="mb-7 h-0.5 w-12 bg-[#6F4CF5]" />
        <p className="text-balance font-sans text-[32px] font-semibold leading-[44px] tracking-[-0.4px] text-[#1F2937]">
          The homeowner beside a dead fuse box reaches you in one tap — or
          reaches your competitor.
        </p>
      </div>
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
];

export function MoreForElectriciansSection() {
  return (
    <section id="meer" className="scroll-mt-24">
      <h2 className="mt-22 max-w-[720px] text-balance font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
        More for electricians
      </h2>
      <p className="mt-3.5 max-w-[720px] font-sans text-[16.5px] leading-[1.58] text-[#6B7280]">
        Everything that helps you win more enquiries online — from costs and
        choices to the build and the individual pages.
      </p>
      <div className="mt-7 overflow-hidden rounded-[14px] border border-[#E6E8EF] bg-[#F8F9FC]">
        <details className="group">
          <summary className="flex min-h-[60px] cursor-pointer list-none items-center justify-between gap-6 px-7 py-6">
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

export function FinalCtaSection({
  heading,
  body,
  features,
  ctaLabel,
}: {
  heading: string;
  body: string;
  features: string[];
  ctaLabel: string;
}) {
  const openLeadForm = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-lead-form"));
    }
  };
  return (
    <section id="slot-cta" className="scroll-mt-24">
      <div className="rounded-[20px] border border-[#E6E8EF] bg-[#FBFBFD] p-[52px_28px] sm:p-[52px_48px]">
        <h2
          className="max-w-[560px] text-balance font-sans text-[32px] font-bold leading-10 tracking-[-0.4px] text-[#1F2937]"
          dangerouslySetInnerHTML={{ __html: heading }}
        />
        <p
          className="mt-[18px] max-w-[600px] font-sans text-lg leading-7 text-[#6B7280]"
          dangerouslySetInnerHTML={{ __html: body }}
        />

        <div className="mt-8 grid max-w-[720px] gap-[14px_40px] sm:grid-cols-2">
          {features.map((feature) => (
            <div key={feature} className="flex items-start gap-3">
              <CheckIcon />
              <span
                className="font-sans text-base leading-6 text-[#1F2937]"
                dangerouslySetInnerHTML={{ __html: feature }}
              />
            </div>
          ))}
        </div>

        <div className="mt-9 flex flex-wrap items-center gap-5">
          <Button
            onClick={openLeadForm}
            variant="primary"
            arrow="right"
            size="lg"
          >
            <span dangerouslySetInnerHTML={{ __html: ctaLabel }} />
          </Button>
          <span className="font-sans text-sm text-[#9AA1AC]">
            Fully managed, one fixed yearly price.
          </span>
        </div>
      </div>
    </section>
  );
}
