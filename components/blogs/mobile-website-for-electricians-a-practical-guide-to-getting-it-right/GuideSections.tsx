"use client";

import {
  isValidElement,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import Button from "@/app/components/ui/Button";
import MoreLinksAccordion from "@/components/blogs/shared/MoreLinksAccordion";
import AuditTool from "./AuditTool";
import InlineLink from "./InlineLink";

function ArrowRight({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function IntroSection() {
  return (
    <section id="opening">
      <p className="font-poppins text-base leading-[1.62] text-[#374151] sm:text-lg">
        A mobile website for electricians is no longer a nice-to-have — it is
        the version of your business most customers will ever see.
      </p>
      <p className="mt-5 font-poppins text-base leading-[1.62] text-[#374151] sm:text-lg">
        At Growth Rocket, we&rsquo;ve reviewed and built websites for local
        service businesses across the Netherlands, and one pattern appears
        consistently: electricians lose enquiries not because they lack demand,
        but because their mobile experience creates friction. Slow loading
        pages, hidden contact details, and difficult navigation quietly push
        potential customers toward competitors.
      </p>
      <p className="mt-5 font-poppins text-base leading-[1.62] text-[#374151] sm:text-lg">
        This guide walks through what mobile-first design actually means for a
        tradesperson site, the specific elements that matter, and a short audit
        you can run on your own site today.
      </p>
    </section>
  );
}

export function WhySection() {
  return (
    <section id="waarom" className="scroll-mt-[88px] pt-14 sm:pt-24">
      {/* Preview Image */}
      <div className="mt-14 overflow-hidden rounded-[24px] border border-[#E5E7EB] shadow-lg">
        <img
          src="/blogimages/en/mobile-website-for-electricians-a-practical-guide-to-getting-it-right/mobile_website_for_electricians_a_practical_guide_to_getting_it_right (1).webp"
          alt="Example electrician homepage"
        />
      </div>

      <h2 className="mt-22 w-full text-balance font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
        Why mobile matters more than you think
      </h2>
      <p className=" mt-6 mb-5 font-poppins text-base leading-[1.62] text-[#374151] sm:text-lg">
        For most electricians in the Netherlands, more than 70% of website
        visitors come from a smartphone. The reason is simple: people search
        when the problem happens. Power is out, a socket is sparking, the lights
        flicker — they grab the nearest device, which is almost always their
        phone.
      </p>
      <p className="mb-5 font-poppins text-base leading-[1.62] text-[#374151] sm:text-lg">
        Search terms reflect that urgency. Queries like &ldquo;elektricien
        spoed&rdquo;, &ldquo;stroomstoring 24/7&rdquo;, and &ldquo;elektricien
        in de buurt&rdquo; are some of the highest-intent keywords in the trade.
        The visitor is not browsing. They want to call someone within the next
        minute.
      </p>
      <p className="font-poppins text-base leading-[1.62] text-[#374151] sm:text-lg">
        If your site loads slowly, hides the phone number, or asks them to pinch
        and zoom, they go back to Google and call the next result. That is the
        entire decision, and it happens on a 6-inch screen.
      </p>

      {/* urgency infographic */}
      <figure
        role="img"
        aria-label="Stat showing over 70% of electrician website visits come from mobile devices, with urgent search examples like elektricien spoed"
        className="m-0 mt-9 rounded-[18px] border border-[#EEF0F4] bg-[#FBFBFD] p-5 sm:p-8"
      >
        <div className="flex flex-wrap items-center justify-center gap-6">
          <div
            aria-hidden="true"
            className="w-[196px] flex-none rounded-[26px] bg-[#0E0A1C] p-2 shadow-[0_16px_36px_rgba(17,24,39,0.12)]"
          >
            <div className="overflow-hidden rounded-[19px] bg-white">
              <div className="p-3 pb-1.5">
                <div className="flex items-center gap-2 rounded-full bg-[#F1F3F8] px-3 py-2">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#6B7280"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <circle cx="11" cy="11" r="7" />
                    <path d="M21 21l-4.3-4.3" />
                  </svg>
                  <span className="font-poppins text-xs font-semibold text-[#111827]">
                    elektricien spoed
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-2 px-3 pb-3.5 pt-0.5">
                <div className="flex items-center gap-2 font-poppins text-[11px] text-[#374151]">
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#9AA1AC"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <path d="M12 8v4l3 2" />
                    <circle cx="12" cy="12" r="9" />
                  </svg>
                  stroomstoring 24/7
                </div>
                <div className="flex items-center gap-2 font-poppins text-[11px] text-[#374151]">
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#9AA1AC"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <path d="M12 21s-7-5.6-7-11a7 7 0 0 1 14 0c0 5.4-7 11-7 11Z" />
                    <circle cx="12" cy="10" r="2.4" />
                  </svg>
                  elektricien in de buurt
                </div>
                <div className="flex items-center gap-2 font-poppins text-[11px] text-[#374151]">
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#9AA1AC"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <path d="M12 8v4l3 2" />
                    <circle cx="12" cy="12" r="9" />
                  </svg>
                  emergency electrician near me
                </div>
              </div>
            </div>
          </div>
          <div className="min-w-[200px] flex-[1_1_220px]">
            <div className="mb-2 font-poppins text-xs font-semibold uppercase tracking-[0.12em] text-[#6F4CF5]">
              Searching in the moment
            </div>
            <p className="m-0 font-poppins text-[15px] leading-[1.55] text-[#4B5563]">
              The urgent search happens right next to the fuse box — on the
              phone, in a hurry. If a tappable call button isn&rsquo;t right
              there, they&rsquo;re back on Google within seconds.
            </p>
          </div>
        </div>
      </figure>

      <aside className="mt-7 flex items-start gap-3.5 rounded-[14px] border border-[#E6E0FB] bg-[#F4F1FE] px-5 py-4.5">
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#6F4CF5"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mt-0.5 flex-none"
        >
          <rect x="7" y="2" width="10" height="20" rx="2.5" />
          <path d="M11 18h2" />
        </svg>
        <p className="m-0 text-pretty font-poppins text-[15px] font-medium leading-[1.5] text-[#3B2E63] sm:text-base">
          The entire decision happens on a 6-inch screen. That is where it is
          decided whether you get the call or the next name on the list.
        </p>
      </aside>
    </section>
  );
}

export function CostSection() {
  const items = [
    {
      title: "Phone number buried",
      body: "The phone number is buried, so the visitor leaves before calling.",
      icon: (
        <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.5 2.1L8 9.6a16 16 0 0 0 6 6l1.1-1.1a2 2 0 0 1 2.1-.5c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.7 2Z" />
      ),
    },
    {
      title: "A pop-up covers the screen",
      body: 'A pop-up covers the screen, so they tap "back" instead of "close".',
      icon: (
        <>
          <rect x="4" y="5" width="16" height="12" rx="2" />
          <path d="M8 21h8" />
        </>
      ),
    },
    {
      title: "The page loads in five seconds",
      body: "The page loads in five seconds, so they assume the business is inactive.",
      icon: (
        <>
          <path d="M12 7v5l3 2" />
          <circle cx="12" cy="12" r="9" />
        </>
      ),
    },
  ];
  return (
    <section id="kosten" className="scroll-mt-[88px] pt-14 sm:pt-24">
      <h2 className="mb-[22px] w-full font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
        What a poor mobile experience actually costs
      </h2>
      <p className="mb-7 font-poppins text-base leading-[1.62] text-[#374151] sm:text-lg">
        A slow or hostile mobile site does not just lose one visitor. It quietly
        loses leads every day, and you rarely see it happening. Common patterns:
      </p>

      <ol className="relative m-0 list-none p-0">
        {items.map((item, i) => (
          <li key={item.title} className="relative pb-6 pl-[52px] last:pb-0">
            {i < items.length - 1 && (
              <span
                aria-hidden="true"
                className="absolute -bottom-2 left-[15px] top-[34px] w-0.5 bg-[#EEF0F4]"
              />
            )}
            <span
              aria-hidden="true"
              className="absolute left-0 top-0 flex size-8 items-center justify-center rounded-full border-[1.5px] border-[#E6E8EF] bg-white text-[#6F4CF5]"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {item.icon}
              </svg>
            </span>
            <div
              className="mb-[3px] font-poppins text-base font-bold text-[#111827]"
              dangerouslySetInnerHTML={{ __html: item.title }}
            />
            <p
              className="m-0 font-poppins text-[15px] leading-[1.55] text-[#6B7280]"
              dangerouslySetInnerHTML={{ __html: item.body }}
            />
          </li>
        ))}
      </ol>
      <p className="mt-6 font-poppins text-base leading-[1.62] text-[#374151] sm:text-lg">
        <strong className="font-semibold text-[#111827]">
          Each of these is fixable.
        </strong>{" "}
        None of them require a redesign from scratch.
      </p>
    </section>
  );
}

export function SignalsSection() {
  const cards = [
    {
      title: "Contact details",
      body: "The phone number is difficult to find.",
      icon: (
        <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.4 2.5 1.6 3.6-.9 4.8a16 16 0 0 0 6 6c1.2-2.5 2.3-1.3 4.8-.9a2 2 0 0 1 1.7 2Z" />
      ),
    },
    {
      title: "Mobile speed",
      body: "Pages load slowly on mobile data.",
      icon: <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z" />,
    },
    {
      title: "Long forms",
      body: "Enquiry forms ask for too much information.",
      icon: (
        <>
          <rect x="5" y="3" width="14" height="18" rx="2" />
          <path d="M9 8h6M9 12h6M9 16h3" />
        </>
      ),
    },
    {
      title: "Hidden trust signals",
      body: "Trust signals are buried deep in the site.",
      icon: <path d="M12 2 4 5v6c0 5 3.4 8.5 8 11 4.6-2.5 8-6 8-11V5l-8-3Z" />,
    },
  ];
  return (
    <section id="signals" className="scroll-mt-[88px] pt-14 sm:pt-24">
      <h2 className="mb-[22px] w-full font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
        What Growth Rocket sees most often
      </h2>
      <p className="mb-6 w-full font-poppins text-base leading-[1.62] text-[#374151] sm:text-lg">
        When Growth Rocket audits electrician websites, the same problems appear
        repeatedly. The phone number is difficult to find, pages load slowly on
        mobile data, enquiry forms ask for too much information, and important
        trust signals are buried deep within the site.
      </p>

      <div className="mb-6 rounded-2xl border border-[#EEF0F4] bg-[#FBFBFD] p-2">
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-xl border border-[#F1F3F8] bg-white p-4"
            >
              <div className="mb-1.5 flex items-center gap-2.5">
                <span className="flex size-[34px] items-center justify-center rounded-[9px] bg-[#F4F1FE] text-[#6F4CF5]">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {card.icon}
                  </svg>
                </span>
                <span
                  className="font-poppins text-sm font-bold text-[#111827]"
                  dangerouslySetInnerHTML={{ __html: card.title }}
                />
              </div>
              <p
                className="m-0 font-poppins text-[13px] leading-[1.5] text-[#6B7280]"
                dangerouslySetInnerHTML={{ __html: card.body }}
              />
            </div>
          ))}
        </div>
      </div>

      <p className=" w-full font-poppins text-base leading-[1.62] text-[#374151] sm:text-lg">
        The encouraging part is that most of these issues can be fixed without
        rebuilding everything from scratch. Small improvements to speed,
        usability, and enquiry flow often have a bigger impact than adding new
        features or redesigning the entire website.
      </p>
    </section>
  );
}

type Requirement = { title: string; body: ReactNode[] };

const REQUIREMENTS: Requirement[] = [
  {
    title: "Click-to-call buttons that work in one tap",
    body: [
      "The single most important element on a mobile website for electricians is a clearly visible call button. It should appear:",
      <ul
        key="list"
        className="m-0 mb-2.5 list-disc pl-5 font-poppins text-[15px] leading-[1.6] text-[#4B5563]"
      >
        <li>At the top of every page (sticky header).</li>
        <li>Inside the first screen, before the visitor scrolls.</li>
        <li>At the bottom of the page as a fixed bar.</li>
      </ul>,
      <>
        The button should use a{" "}
        <code className="rounded-[5px] bg-[#F1F3F8] px-1.5 py-px font-mono text-[0.9em] text-[#5A3CE0]">
          tel:
        </code>{" "}
        link so one tap starts the call. No forms, no contact pages in between.
      </>,
    ],
  },
  {
    title: "Thumb-friendly tap targets",
    body: [
      "People hold their phone in one hand and tap with their thumb. Buttons, menu items, and form fields should be at least 44 by 44 pixels — roughly the size of an adult thumb pad. Anything smaller leads to mis-taps and frustration.",
      "Spacing matters as much as size. Two buttons too close together are almost as bad as one button that is too small.",
    ],
  },
  {
    title: "Fast load times (under 3 seconds)",
    body: [
      "Speed is not a technical detail. It is a trust signal. Visitors who wait more than three seconds for a page to load assume the business is unprofessional or no longer active.",
      "The biggest causes of slow mobile sites:",
      <ul
        key="list"
        className="m-0 mb-2.5 list-disc pl-5 font-poppins text-[15px] leading-[1.6] text-[#4B5563]"
      >
        <li>Oversized images that were not compressed.</li>
        <li>Heavy page builders with too many plugins.</li>
        <li>Embedded videos that auto-load on the homepage.</li>
        <li>Fonts and scripts loading from too many sources.</li>
      </ul>,
      "A simple, well-built site should load in under two seconds on a 4G connection.",
    ],
  },
  {
    title: "Readable fonts without zooming",
    body: [
      "Body text should be at least 16 pixels. Headings should be larger, and there should be enough contrast between text and background. Light grey text on a white background may look elegant on a designer's monitor, but it is unreadable on a phone in daylight.",
    ],
  },
  {
    title: "No pop-ups, no cookie walls, no chatbots in the way",
    body: [
      "Pop-ups on mobile are almost always counterproductive. They cover the content, the close button is too small, and the visitor leaves. Cookie banners are required, but they should be small and dismissible in one tap.",
      "If you use a chat widget, it should not auto-open. Let the visitor choose to engage.",
    ],
  },
];

const HIGHLIGHT_STYLE = {
  boxShadow: "0 0 0 3px #6F4CF5, 0 6px 16px rgba(111,76,245,0.25)",
} as const;

/** req 1 -> areas 1+1b, req 2 -> areas 2+2b, req 3 -> area 3, req 4 -> area 4, req 5 -> area 5 */
function AnnotatedPhone({ active }: { active: number | null }) {
  const glow = (n: number) => (active === n ? HIGHLIGHT_STYLE : undefined);
  return (
    <div className="relative min-w-[min(100%,220px)] flex-[0_1_240px] lg:sticky lg:top-24 lg:self-start">
      <figure
        role="img"
        aria-label="Annotated mobile website for electricians showing click-to-call button, thumb-friendly menu, and readable fonts"
        className="m-0 w-[min(100%,260px)] mx-auto rounded-[34px] bg-[#0E0A1C] p-[9px] shadow-[0_22px_50px_rgba(91,33,182,0.18)]"
      >
        <div className="overflow-hidden rounded-[26px] bg-white">
          <div
            className="flex h-12 items-center justify-between rounded-lg px-3 transition-[box-shadow] duration-200"
            style={glow(1)}
          >
            <span className="inline-flex items-center gap-[5px] font-poppins text-xs font-bold text-[#1F2937]">
              <span className="size-[7px] rounded-full bg-[#6F4CF5]" />
              Miller Electric
            </span>
            <span
              className="inline-flex flex-col gap-1 rounded-md p-1.5 transition-[box-shadow] duration-200"
              style={glow(2)}
            >
              <span className="h-0.5 w-4 rounded-sm bg-[#1F2937]" />
              <span className="h-0.5 w-4 rounded-sm bg-[#1F2937]" />
              <span className="h-0.5 w-4 rounded-sm bg-[#1F2937]" />
            </span>
          </div>
          <div className="p-3.5">
            <div
              className="-mx-1.5 -mt-1 rounded-lg px-1.5 py-1 transition-[box-shadow] duration-200"
              style={glow(4)}
            >
              <div className="font-poppins text-[15px] font-bold leading-[1.25] text-[#111827]">
                Power out? Call now.
              </div>
              <div className="mt-1 font-poppins text-xs leading-[1.45] text-[#4B5563]">
                Certified electrician in your area. 24/7 emergency, fixed
                prices.
              </div>
            </div>
            <div
              className="mt-3 flex h-[46px] items-center justify-center gap-1.5 rounded-[11px] bg-[#16A34A] font-poppins text-sm font-bold text-white transition-[box-shadow] duration-200"
              style={glow(1)}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.4 2.5 1.6 3.6-.9 4.8a16 16 0 0 0 6 6c1.2-2.5 2.3-1.3 4.8-.9a2 2 0 0 1 1.7 2Z" />
              </svg>
              Call now
            </div>
            <div
              className="mt-2.5 flex gap-2 transition-[box-shadow] duration-200"
              style={glow(5)}
            >
              <div
                className="flex h-11 flex-1 items-center justify-center rounded-[9px] bg-[#F1F3F8] font-poppins text-[11px] font-semibold text-[#374151] transition-[box-shadow] duration-200"
                style={glow(2)}
              >
                Services
              </div>
              <div className="flex h-11 flex-1 items-center justify-center rounded-[9px] bg-[#F1F3F8] font-poppins text-[11px] font-semibold text-[#374151]">
                Quote
              </div>
            </div>
            <div
              className="-mx-1.5 mt-3 rounded-lg p-1.5 transition-[box-shadow] duration-200"
              style={glow(3)}
            >
              <div className="h-2 w-[70%] rounded bg-[#DDE1EA]" />
              <div className="mt-[7px] h-2 w-[92%] rounded bg-[#E9ECF3]" />
              <div className="mt-[7px] h-2 w-[84%] rounded bg-[#E9ECF3]" />
            </div>
          </div>
        </div>
      </figure>
      <p
        aria-hidden="true"
        className="mt-3 text-center font-poppins text-xs text-[#9AA1AC]"
      >
        Each requirement lights up the matching area.
      </p>
    </div>
  );
}

export function RequirementsSection() {
  const [active, setActive] = useState<number | null>(null);
  const reqRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (window.innerWidth <= 900) return;
    const els = reqRefs.current.filter(
      (el): el is HTMLDivElement => el !== null,
    );
    if (!els.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) {
          const n = Number(visible[0].target.getAttribute("data-req"));
          if (n) setActive(n);
        }
      },
      { rootMargin: "-30% 0px -45% 0px", threshold: [0, 0.3, 0.6, 1] },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="eisen" className="scroll-mt-[88px] pt-14 sm:pt-24">
      <h2 className="mb-5 w-full font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
        The mobile requirements that actually move the needle
      </h2>
      <p className=" w-full font-poppins text-base leading-[1.62] text-[#374151] sm:text-lg">
        Mobile-first design is often described in vague terms. For a
        tradesperson, only a handful of things really matter. Here is the
        practical list.
      </p>

      <div className="mt-8 flex flex-wrap-reverse items-start gap-x-10 gap-y-8">
        <div className="min-w-[min(100%,300px)] flex-[2.4_1_360px]">
          <div className="flex flex-col gap-[22px]">
            {REQUIREMENTS.map((req, i) => (
              <div
                key={req.title}
                ref={(el) => {
                  reqRefs.current[i] = el;
                }}
                data-req={i + 1}
                className={
                  i > 0
                    ? "scroll-mt-24 border-t border-[#F1F3F8] pt-[22px]"
                    : "scroll-mt-24"
                }
              >
                <div className="flex gap-4">
                  <span
                    aria-hidden="true"
                    className="flex size-[34px] flex-none items-center justify-center rounded-xl font-poppins text-lg font-bold text-white shadow-[0_12px_32px_rgba(91,33,182,0.10)]"
                    style={{
                      background:
                        "linear-gradient(90deg, #5B219F 0%, #922698 100%)",
                    }}
                  >
                    {i + 1}
                  </span>

                  <div>
                    <h3
                      className="mb-2 font-poppins text-lg font-bold leading-[1.3] text-[#111827] sm:text-xl"
                      dangerouslySetInnerHTML={{ __html: req.title }}
                    />
                    {req.body.map((p, j) =>
                      typeof p === "string" ? (
                        <p
                          key={j}
                          className="m-0 mb-2.5 font-poppins text-base leading-[1.58] text-[#4B5563] last:mb-0"
                          dangerouslySetInnerHTML={{ __html: p }}
                        />
                      ) : isValidElement(p) && p.type === "ul" ? (
                        <div key={j} className="mb-2.5 last:mb-0">
                          {p}
                        </div>
                      ) : (
                        <p
                          key={j}
                          className="m-0 mb-2.5 font-poppins text-base leading-[1.58] text-[#4B5563] last:mb-0"
                        >
                          {p}
                        </p>
                      ),
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <AnnotatedPhone active={active} />
      </div>
      <p className="mt-8 font-poppins text-base leading-[1.62] text-[#374151] sm:text-lg">
        How those requirements add up is clearest in a side-by-side comparison.
      </p>
    </section>
  );
}

const COMPARE_ROWS = [
  {
    element: "Phone number",
    bad: "Hidden in footer text",
    good: "Sticky button in header and bottom bar",
  },
  { element: "Page load", bad: "6+ seconds on 4G", good: "Under 2 seconds" },
  {
    element: "Body text",
    bad: "12px, light grey",
    good: "16px, high contrast",
  },
  {
    element: "Tap targets",
    bad: "Small, close together",
    good: "44px minimum, well spaced",
  },
  {
    element: "Pop-ups",
    bad: "Newsletter sign-up on entry",
    good: "None, or one small banner",
  },
  {
    element: "Booking",
    bad: "Long form, 8+ fields",
    good: "Short enquiry, 3 fields",
  },
  {
    element: "Service info",
    bad: "Buried in dropdowns",
    good: "Visible on first screen",
  },
];

export function ComparisonSection() {
  return (
    <section id="vergelijking" className="scroll-mt-[88px] pt-14 sm:pt-24">
      <h2 className="mb-5 w-full font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
        Mobile-hostile vs. mobile-friendly: a side-by-side
      </h2>
      <p className="mb-7 font-poppins text-base leading-[1.62] text-[#374151] sm:text-lg">
        The clearest way to understand the difference is to look at two versions
        of the same page.
      </p>

      <figure
        role="img"
        aria-label="Side-by-side comparison of a mobile-hostile electrician website versus a mobile-friendly responsive design tradesperson site"
        className="m-0 mb-7 flex flex-wrap justify-center gap-5"
      >
        <div className="max-w-[260px] flex-[1_1_200px]">
          <div
            aria-hidden="true"
            className="rounded-[30px] bg-[#26222F] p-2 shadow-[0_16px_34px_rgba(17,24,39,0.12)]"
          >
            <div className="relative overflow-hidden rounded-[22px] bg-white">
              <div className="flex h-[38px] items-center justify-center border-b border-[#F1F3F8] font-poppins text-[10px] text-[#B7BAC4]">
                Miller Electric
              </div>
              <div className="relative p-3">
                <div className="absolute inset-2 z-[2] flex items-center justify-center rounded-xl bg-[#0F0C1E]/55">
                  <div className="relative w-4/5 rounded-lg bg-white p-2.5 text-center">
                    <div className="mb-1.5 font-poppins text-[9px] text-[#374151]">
                      Sign up for our newsletter
                    </div>
                    <div className="h-5 rounded bg-[#EDEFF3]" />
                    <span className="absolute right-1 top-0.5 font-poppins text-[9px] text-[#9AA1AC]">
                      ×
                    </span>
                  </div>
                </div>
                <div className="h-[7px] w-3/5 rounded-[3px] bg-[#E9ECF3]" />
                <div className="mt-1.5 h-[7px] w-[90%] rounded-[3px] bg-[#EDEFF3]" />
                <div className="mt-1.5 h-[7px] w-[82%] rounded-[3px] bg-[#EDEFF3]" />
                <div className="mt-1.5 h-[7px] w-[88%] rounded-[3px] bg-[#EDEFF3]" />
                <div className="mt-6 h-[7px] w-2/5 rounded-[3px] bg-[#EDEFF3]" />
              </div>
            </div>
          </div>
          <div className="mt-3 text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#F5E2C8] bg-[#FDF3E7] px-3 py-1.5 font-poppins text-[13px] font-semibold text-[#8A5310]">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
              >
                <path d="M12 8v5" />
                <circle cx="12" cy="16.5" r="0.6" fill="currentColor" />
                <path d="M10.3 3.6 2.4 18a2 2 0 0 0 1.7 3h15.8a2 2 0 0 0 1.7-3L13.7 3.6a2 2 0 0 0-3.4 0Z" />
              </svg>
              Hostile
            </span>
          </div>
        </div>
        <div className="max-w-[260px] flex-[1_1_200px]">
          <div
            aria-hidden="true"
            className="rounded-[30px] bg-[#0E0A1C] p-2 shadow-[0_18px_40px_rgba(91,33,182,0.2)]"
          >
            <div className="overflow-hidden rounded-[22px] bg-white">
              <div className="flex h-[38px] items-center justify-between border-b border-[#EEF0F4] px-3">
                <span className="font-poppins text-[11px] font-bold text-[#1F2937]">
                  Miller Electric
                </span>
                <span className="font-poppins text-[10px] font-bold text-[#16A34A]">
                  Call
                </span>
              </div>
              <div className="p-3">
                <div className="font-poppins text-xs font-bold leading-[1.3] text-[#111827]">
                  Power out? Call now.
                </div>
                {/* Call Button */}
                <div className="mt-2 flex h-[38px] items-center justify-center gap-1.5 rounded-[9px] bg-[#16A34A] font-poppins text-xs font-bold text-white">
                  {/*  */}
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {/*  */}
                    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.4 2.5 1.6 3.6-.9 4.8a16 16 0 0 0 6 6c1.2-2.5 2.3-1.3 4.8-.9a2 2 0 0 1 1.7 2Z" />
                  </svg>
                  020 - 123 4567
                </div>
                <div className="mt-2.5 h-2 w-4/5 rounded bg-[#DDE1EA]" />
                <div className="mt-1.5 h-2 w-[94%] rounded bg-[#E9ECF3]" />
                <div className="mt-1.5 h-2 w-[70%] rounded bg-[#E9ECF3]" />
              </div>
            </div>
          </div>
          <div className="mt-3 text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#E6E0FB] bg-[#F4F1FE] px-3 py-1.5 font-poppins text-[13px] font-semibold text-[#3B2E63]">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#6F4CF5"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
              Friendly
            </span>
          </div>
        </div>
      </figure>

      <div className="overflow-hidden rounded-2xl border border-[#E6E8EF]">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[560px] border-collapse font-poppins text-[15px]">
            <caption className="sr-only">
              Comparison of a mobile-hostile and a mobile-friendly electrician
              website
            </caption>
            <thead>
              <tr className="bg-[#F8F9FC]">
                <th
                  scope="col"
                  className="border-b border-[#EEF0F4] px-4.5 py-3.5 text-left text-[13px] font-bold tracking-[0.02em] text-[#111827] sm:px-[18px]"
                >
                  Element
                </th>
                <th
                  scope="col"
                  className="border-b border-[#EEF0F4] px-4.5 py-3.5 text-left text-[13px] font-bold text-[#8A5310] sm:px-[18px]"
                >
                  Mobile-hostile site
                </th>
                <th
                  scope="col"
                  className="border-b border-[#EEF0F4] bg-[#FBFAFF] px-4.5 py-3.5 text-left text-[13px] font-bold text-[#5A3CE0] sm:px-[18px]"
                >
                  Mobile-friendly site
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPARE_ROWS.map((row) => (
                <tr key={row.element}>
                  <th
                    scope="row"
                    className="border-b border-[#F1F3F8] px-4.5 py-3.5 text-left align-top font-semibold text-[#111827] sm:px-[18px]"
                    dangerouslySetInnerHTML={{ __html: row.element }}
                  />
                  <td
                    className="border-b border-[#F1F3F8] px-4.5 py-3.5 align-top leading-[1.45] text-[#6B7280] sm:px-[18px]"
                    dangerouslySetInnerHTML={{ __html: row.bad }}
                  />
                  <td
                    className="border-b border-[#F1F3F8] bg-[#FBFAFF] px-4.5 py-3.5 align-top font-medium leading-[1.45] text-[#374151] sm:px-[18px]"
                    dangerouslySetInnerHTML={{ __html: row.good }}
                  />
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <p className="mt-6  w-full font-poppins text-base leading-[1.62] text-[#374151] sm:text-lg">
        The visitor on the right calls within 30 seconds. The visitor on the
        left leaves and calls the next electrician.
      </p>
    </section>
  );
}

export function AuditSection() {
  return (
    <section id="test" className="scroll-mt-[88px] pt-14 sm:pt-24">
      <h2 className="mb-5 w-full font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
        How to audit your own electrician website on mobile
      </h2>
      <p className="font-poppins text-base leading-[1.62] text-[#374151] sm:text-lg">
        You do not need a developer to spot the most common problems. Run
        through this audit on your own phone, ideally on 4G rather than wifi.
      </p>

      <AuditTool />

      <p className="mt-6 font-poppins text-base leading-[1.62] text-[#374151] sm:text-lg">
        If you fail more than two of these checks, your mobile experience is
        costing you customers — quietly, every week.
      </p>
    </section>
  );
}

export function LayersSection() {
  const openLeadForm = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-lead-form"));
    }
  };
  const layers = [
    {
      label: "Layer 1",
      title: "The website itself",
      body: "Built with responsive design, fast load times, and a clear call-to-action on every screen. This is the front door.",
      icon: (
        <>
          <rect x="3" y="4" width="18" height="14" rx="2" />
          <path d="M3 8h18M8 21h8" />
        </>
      ),
      dark: false,
    },
    {
      label: "Layer 2",
      title: "The enquiry and booking system",
      body: "A short form or WhatsApp button that lets the customer reach you in under 30 seconds. No accounts, no logins, no friction.",
      icon: (
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z" />
      ),
      dark: false,
    },
    {
      label: "Layer 3",
      title: "The system that organises everything",
      body: "When the enquiry comes in, it goes somewhere structured. Growth Rocket Hub keeps every enquiry, booking, and customer detail in one place, so nothing falls through the cracks while you are on a job.",
      icon: (
        <>
          <rect x="3" y="3" width="8" height="8" rx="1.5" />
          <rect x="13" y="3" width="8" height="8" rx="1.5" />
          <rect x="3" y="13" width="8" height="8" rx="1.5" />
          <rect x="13" y="13" width="8" height="8" rx="1.5" />
        </>
      ),
      dark: true,
    },
  ];
  return (
    <section id="lagen" className="scroll-mt-[88px] pt-14 sm:pt-24">
      <h2 className="mb-5 w-full font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
        What a mobile-ready electrician website looks like in practice
      </h2>
      <p className="mb-7 font-poppins text-base leading-[1.62] text-[#374151] sm:text-lg">
        A working setup for a tradesperson site has three layers, and they all
        need to work on a phone:
      </p>

      <div className="flex flex-wrap items-stretch gap-3.5">
        {layers.map((layer, i) => (
          <div key={layer.label} className="contents">
            {layer.dark && (
              <div aria-hidden="true" className="h-0 basis-full" />
            )}
            <div
              className="min-w-[min(100%,240px)] flex-[1_1_240px] rounded-2xl border p-[22px]"
              style={
                layer.dark
                  ? {
                      borderColor: "#6F4CF5",
                      background: "#0E0A1C",
                      color: "#fff",
                    }
                  : { borderColor: "#E6E8EF", background: "#fff" }
              }
            >
              <div className="mb-3 flex items-center gap-2.5">
                <span
                  className="flex size-10 items-center justify-center rounded-[11px]"
                  style={
                    layer.dark
                      ? {
                          background: "rgba(255,255,255,0.12)",
                          color: "#C5B7FB",
                        }
                      : { background: "#F4F1FE", color: "#6F4CF5" }
                  }
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {layer.icon}
                  </svg>
                </span>
                <span
                  className="font-poppins text-xs font-bold"
                  style={
                    layer.dark
                      ? { color: "rgba(255,255,255,0.5)" }
                      : { color: "#9AA1AC" }
                  }
                  dangerouslySetInnerHTML={{ __html: layer.label }}
                />
              </div>
              <h3
                className="mb-2 font-poppins text-lg font-bold"
                style={{ color: layer.dark ? "#fff" : "#111827" }}
                dangerouslySetInnerHTML={{ __html: layer.title }}
              />
              <p
                className="m-0 font-poppins text-[15px] leading-[1.55]"
                style={{
                  color: layer.dark ? "rgba(255,255,255,0.82)" : "#4B5563",
                }}
                dangerouslySetInnerHTML={{ __html: layer.body }}
              />
            </div>
            {i < layers.length - 1 && (
              <div
                aria-hidden="true"
                className="flex flex-none items-center justify-center text-[#C5B7FB]"
              >
                <ArrowRight size={26} />
              </div>
            )}
          </div>
        ))}
      </div>

      <p className="mt-6  w-full font-poppins text-base leading-[1.62] text-[#374151] sm:text-lg">
        You do not need to build all three yourself. A managed service handles
        the website, the enquiry flow, and the back-end together — so the mobile
        experience is consistent from the first tap to the follow-up call.
      </p>

      <div className="mt-6.5 flex flex-wrap items-center justify-between gap-3.5 rounded-2xl border border-[#E6E0FB] bg-[#FBFAFF] px-6 py-5.5">
        <p className="m-0 max-w-[520px] text-pretty font-poppins text-base font-medium text-[#3B2E63]">
          Curious what those three layers look like together?
        </p>
        <Button
          onClick={openLeadForm}
          variant="primary"
          arrow="right"
          className="flex-none"
        >
          See how it works
        </Button>
      </div>
    </section>
  );
}

export function ClosingSection() {
  return (
    <section id="samenvatting" className="scroll-mt-[88px] pt-14 sm:pt-24">
      <h2 className="mb-[22px] w-full font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
        In short
      </h2>
      <p className="mb-5 w-full font-poppins text-base leading-[1.62] text-[#374151] sm:text-lg">
        A mobile website for electricians is not about looking modern. It is
        about being callable in one tap, readable in one glance, and trustworthy
        in three seconds. Most of the work is removing friction, not adding
        features.
      </p>

      <blockquote className="my-8 border-none p-0">
        <p className="text-balance font-poppins text-[22px] font-bold leading-[1.28] tracking-[-0.01em] text-[#111827] sm:text-[32px]">
          &ldquo;Callable in one tap, readable in one glance, and trustworthy in
          three seconds.&rdquo;
        </p>
        <div
          aria-hidden="true"
          className="mt-4 h-[5px] w-14 rounded-full bg-[#FDE68A]"
        />
      </blockquote>

      <p className="mb-5 w-full font-poppins text-base leading-[1.62] text-[#374151] sm:text-lg">
        Run the audit above. Fix the two or three things that matter most — see{" "}
        <InlineLink href="/blog/electrician-website-checklist">
          what a good electrician website should include
        </InlineLink>{" "}
        for the broader checklist. If your current site cannot be fixed easily,
        it is usually faster to start with a mobile-first build than to patch an
        old one.
      </p>
      <p className="w-full font-poppins text-base leading-[1.62] text-[#374151] sm:text-lg">
        Growth Rocket helps electricians do exactly that by combining a
        mobile-first website, enquiry capture tools, and Growth Rocket Hub into
        one managed system. Instead of juggling multiple providers, you get a
        website that is built to generate enquiries, easy for customers to use
        on their phones, and fully managed so you can focus on running your
        business.
      </p>
    </section>
  );
}

export function FinalCtaSection() {
  const openLeadForm = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-lead-form"));
    }
  };
  return (
    <section className="pt-12 sm:pt-[72px]">
      <div className="relative overflow-hidden rounded-[22px] border border-[#E6E0FB] bg-[#F4F1FE] p-6 sm:p-10">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-[60px] -bottom-[90px] size-[280px] rounded-full opacity-40 blur-[80px]"
          style={{ background: "#C5B7FB" }}
        />
        <div className="relative max-w-[640px]">
          <h2 className="mb-3 font-poppins text-xl font-bold leading-[1.3] tracking-[-0.01em] text-[#111827] sm:text-[26px]">
            Prefer a mobile-ready website that is built and managed for you?
          </h2>
          <p className="mb-5.5 font-poppins text-base leading-[1.58] text-[#4B5563]">
            Growth Rocket brings the three layers together: a mobile-first
            website, enquiry and booking capture, and Growth Rocket Hub — as one
            managed system.
          </p>
          <Button
            onClick={openLeadForm}
            variant="primary"
            arrow="right"
            size="lg"
          >
            See how it works
          </Button>
        </div>
      </div>
    </section>
  );
}

export function MoreForElectriciansSection() {
  return (
    <section id="more" className="scroll-mt-[88px] pt-14 sm:pt-24">
      <h2 className="mb-5 text-balance font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
        More for electricians
      </h2>
      <p className="mb-7 max-w-[720px] font-poppins text-base leading-[1.62] text-[#374151] sm:text-lg">
        Everything that helps you win more enquiries online — from costs and
        choices to the build and the individual pages.
      </p>
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
                label: "How long does it take to build an electrician website?",
                href: "/blog/electrician-website-build-timeline",
              },
              {
                label: "Mobile website for electricians: why it matters",
                href: "/blog/6-mobile-website-for-electricians",
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
        ]}
      />
    </section>
  );
}
