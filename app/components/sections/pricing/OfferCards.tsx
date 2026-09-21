import type { ReactNode } from "react";
import { Plus } from "lucide-react";

/**
 * The two inclusion cards — ported from `.pricing-product-b > .offer-grid` in
 * Pricing.html: the website card and the Hub card, joined by a lime `+` badge.
 *
 * The source stylesheet carries three layers for these cards — the base
 * `.offer-*` blocks, a `[data-offer-layout=b]` compact variant, and a
 * `.pricing-product-b` block that re-tunes them for the pricing column. Only the
 * first and third apply here: `data-offer-layout` is never set on the pricing
 * page (the script only writes it onto `.offer-section`, which this page has
 * no copy of), so the compact variant's rules — which would hide the card
 * summaries, the card feet and the `.offer-full-label`s — never match. The
 * values below are the resulting computed ones.
 *
 * One departure from the source markup: the `+` badge is centred on the seam
 * between the two cards in both axes. The source pins it near the top
 * (`top: 36px`), which reads as floating beside the card headers;
 * `Solution.tsx` already centres its own badge, and this now matches it.
 *
 * The feature rows keep the source's repeated lime tick rather than the
 * per-subject icons `home2/Solution.tsx` uses. These cards sit in a much
 * narrower column, and the tick is what `.pricing-feature-tick` draws.
 *
 * The source is desktop-first with max-width overrides at 1050px, 760px and
 * 360px; those are inverted here into min-width steps, so the base values are
 * the smallest ones. Per the breakpoint table in globals.css, the source's 1050
 * step lands on `lg` and its 760 step on `md`. Below the 1050 step the grid is
 * a single column and the badge folds back into the flow, straddling the seam
 * between the stacked cards.
 */

type Feature = string;

const WEBSITE_FEATURES: Feature[] = [
  "8–10 pages, built for your business",
  "Mobile-friendly & SEO-ready",
  "30-second business video",
  "Enquiry & contact forms",
  "Your own domain name",
  "Hosting & SSL included",
  "Maintenance & updates",
];

const HUB_FEATURES: Feature[] = [
  "Lead & enquiry management",
  "Online appointment booking",
  "Customer & contact records",
  "Create & send quotes",
  "Create & send invoices",
  "Help & support requests",
];

/** `.pricing-feature-tick` — lime on both cards; the source has no hub override. */
function FeatureTick() {
  return (
    <span
      aria-hidden="true"
      className="flex flex-none basis-[18px] items-center justify-center self-center text-[#e4fa65]"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="block h-[18px] w-[18px]"
      >
        <path d="m5 12 4.5 4.5L19 7" />
      </svg>
    </span>
  );
}

/** The rotated card-header icon, at the 24px the pricing column uses. */
function BigIcon({ children }: { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.65"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-[24px] w-[24px]"
    >
      {children}
    </svg>
  );
}

function OfferCard({
  id,
  surface,
  icon,
  iconClassName,
  title,
  summary,
  summaryClassName,
  features,
  foot,
}: {
  id: string;
  surface: string;
  icon: ReactNode;
  iconClassName: string;
  title: ReactNode;
  summary: string;
  summaryClassName: string;
  features: Feature[];
  foot: string;
}) {
  return (
    <article
      aria-labelledby={id}
      className={`flex min-w-0 flex-col rounded-[13px] p-[22px_20px_16px] text-white shadow-[0_16px_34px_rgba(10,5,22,0.1)] md:p-[24px_22px_20px] ${surface}`}
    >
      <header>
        <div className="flex items-start justify-between gap-[12px]">
          <h3
            id={id}
            className="m-0 font-bricolage text-[26px] font-semibold leading-[1.12] tracking-[-0.035em] lg:text-[clamp(22px,1.8vw,28px)]"
          >
            {title}
          </h3>

          <span
            aria-hidden="true"
            className={`grid h-[38px] w-[38px] flex-none place-items-center rounded-[13px] ${iconClassName}`}
          >
            {icon}
          </span>
        </div>

        <p
          className={`mt-[15px] mb-[23px] text-[16px] leading-[1.7] ${summaryClassName}`}
        >
          {summary}
        </p>
      </header>

      {/* flex-1 is the source's `.offer-features{flex:1}`: it stretches the list
          so both cards' feet sit on the same baseline when they hold a
          different number of rows (7 here, 6 in the Hub card). */}
      <ul className="m-0 mt-[19px] grid flex-1 list-none grid-cols-1 p-0">
        {features.map((label) => (
          <li
            key={label}
            className="flex items-center gap-[12px] border-t border-white/[0.18] py-[14px]"
          >
            <FeatureTick />
            <h4 className="m-0 font-bricolage text-[15px] font-medium leading-[1.25] tracking-normal">
              {label}
            </h4>
          </li>
        ))}
      </ul>

      <p className="m-0 flex items-center gap-[10px] border-t border-white/25 py-[22px] text-[13px] font-medium text-[#e4fa65] md:gap-[13px] md:pt-[18px] md:pb-[21px] lg:text-[14px]">
        <span
          aria-hidden="true"
          className="text-[23px] leading-none md:text-[27px]"
        >
          ✳
        </span>
        {foot}
      </p>
    </article>
  );
}

export default function OfferCards() {
  return (
    <div aria-label="Website and Growth Rocket Hub included" className="min-w-0">
      <div className="relative grid grid-cols-1 gap-0 md:gap-[14px] lg:grid-cols-2">
        <OfferCard
          id="website-heading"
          surface="bg-[#0a0516]"
          icon={
            <BigIcon>
              <rect x="2" y="4" width="20" height="16" rx="3" />
              <path d="M2 9h20M6 6.5h.1M9 6.5h.1M7 14h10M7 17h6" />
            </BigIcon>
          }
          iconClassName="rotate-[-7deg] bg-[#e4fa65] text-[#0a0516]"
          title={
            <>
              Your <span className="text-[#e4fa65]">Website</span>.
              <br />
              Made for your business.
            </>
          }
          summary="We write it. We build it. We look after it."
          summaryClassName="text-[#c9c2d4]"
          features={WEBSITE_FEATURES}
          foot="Built for you. Looked after for you."
        />

        {/* Centred on the seam in both axes once the grid is two columns wide,
            a flow element straddling the stacked cards below that.

            The mark is lucide's `Plus`, the same one `home2/Solution.tsx` sets
            between its two cards, rather than a `+` character — that glyph is
            typographic, so its weight and centring drifted with the font. The
            badge keeps the source's own palette here (lime disc, deep mark),
            which is the inverse of Solution's deep disc with a lime ring. */}
        <span
          aria-hidden="true"
          className="z-[2] mx-auto my-[-9px] grid h-[43px] w-[43px] place-items-center rounded-full border-[5px] border-[#e4fa65] bg-[#e4fa65] text-[#0a0516] md:h-[42px] md:w-[42px] lg:absolute lg:top-1/2 lg:left-1/2 lg:z-[1] lg:my-0 lg:-translate-x-1/2 lg:-translate-y-1/2"
        >
          <Plus size={20} strokeWidth={2.5} />
        </span>

        <OfferCard
          id="hub-heading"
          surface="bg-[#5b2dce]"
          icon={
            <BigIcon>
              <rect x="8" y="8" width="8" height="8" rx="2" />
              <path d="M12 2v6M12 16v6M2 12h6M16 12h6M5 5l3 3m8 8 3 3M19 5l-3 3m-8 8-3 3" />
            </BigIcon>
          }
          iconClassName="rotate-[7deg] bg-white text-[#5b2dce]"
          title={
            <>
              <span className="text-[#e4fa65]">Growth Rocket Hub</span>.
              <br />
              Your work, in one place.
            </>
          }
          summary="Manage customers, bookings, quotes and invoices."
          summaryClassName="text-white/[0.88]"
          features={HUB_FEATURES}
          foot="Your everyday work. All in one place."
        />
      </div>
    </div>
  );
}
