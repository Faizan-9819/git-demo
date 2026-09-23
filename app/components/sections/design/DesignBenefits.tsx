import type { ReactNode } from "react";
import { RevealGroup, RevealItem } from "../../../features/FeatureReveal";
import type { BenefitIcon, DesignBenefit } from "./copy";

/**
 * "Build confidence. Before the first visit." — `section.dc-benefits.dc-open`
 * from dentalcare.html, carrying dentalcare.css's own values.
 *
 *   .dc-open            padding:76px clamp(24px,5vw,80px)
 *   @700px              padding:44px 22px
 *   (`.dc-open` sets no radius and no background — unlike `.dc-panel` these
 *    folds sit straight on the page's white, with no card behind them.)
 *   .dc-main h2         font-size:clamp(32px,3.8vw,52px); line-height:1.08
 *                       letter-spacing:-.045em   (34px under 700px)
 *   .dc-benefits h2 span    color:var(--dc-purple) #5b2dce
 *   .dc-section-top     grid-template-columns:1.2fr 1fr; gap:70px
 *                       align-items:end; margin-bottom:38px
 *   @1000px             gap:35px
 *   @700px              grid-template-columns:1fr; gap:28px
 *                       margin-bottom:28px
 *   .dc-section-top>p   max-width:450px; color:#615b69
 *   .dc-benefit-grid    grid-template-columns:repeat(4,1fr); gap:32px
 *   @1000px             1fr 1fr
 *   @700px              gap:28px 20px
 *   .dc-benefit-icon    46x46; border-radius:13px
 *                       background:var(--dc-green) #e4fa65
 *                       color:var(--dc-purple) #5b2dce; margin-bottom:22px
 *   .dc-benefit-icon svg    24x24; stroke-width:1.5
 *   .dc-benefit-grid h3 font-size:23px; max-width:240px; margin-bottom:14px
 *   @700px              21px
 *   .dc-benefit-grid p  font-size:14px; color:#655f6c   (13px under 700px)
 *
 * The four marks are dentalcare.html's own inline SVGs, path for path. They
 * are keyed by name rather than inlined in `copy.ts` because that file is
 * imported by both a server and a client component and cannot hold JSX.
 *
 * As everywhere else on this page, the horizontal inset is the shared `.fix`
 * rail rather than the source's `clamp(24px,5vw,80px)`.
 */

const ICON_SHARED = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

const ICONS: Record<BenefitIcon, ReactNode> = {
  document: (
    <>
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <path d="M9 8h6m-6 4h6m-6 4h3" />
    </>
  ),
  people: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20v-2a6 6 0 0 1 12 0v2m1-15a3 3 0 0 1 0 6m2 3a5 5 0 0 1 3 4v2" />
    </>
  ),
  star: (
    <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9Z" />
  ),
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M7 3v4m10-4v4M3 10h18m-13 5 3 3 5-5" />
    </>
  ),
};

export default function DesignBenefits({
  heading,
  intro,
  benefits,
}: {
  heading: [string, string];
  intro: string;
  benefits: DesignBenefit[];
}) {
  return (
    <section
      aria-labelledby="design-benefits-heading"
      className="py-[44px] text-[#0a0516] min-[701px]:py-[76px]"
    >
      <div className="fix">
        {/* .dc-section-top */}
        <RevealGroup className="mb-[28px] grid grid-cols-1 items-end gap-[28px] min-[701px]:mb-[38px] min-[701px]:grid-cols-[1.2fr_1fr] min-[701px]:gap-[35px] min-[1001px]:gap-[70px]">
          <RevealItem>
            <h2
              id="design-benefits-heading"
              className="m-0 font-bricolage text-[34px] leading-[1.08] font-semibold tracking-[-0.045em] min-[701px]:text-[clamp(32px,3.8vw,52px)]"
            >
              {heading[0]}
              <br />
              <span className="text-[#5b2dce]">{heading[1]}</span>
            </h2>
          </RevealItem>

          <RevealItem
            as="p"
            className="m-0 max-w-[450px] font-sans text-[16px] leading-[1.65] text-[#615b69]"
          >
            {intro}
          </RevealItem>
        </RevealGroup>

        {/* .dc-benefit-grid */}
        <RevealGroup
          amount={0.1}
          stagger={0.05}
          className="grid grid-cols-2 gap-x-[20px] gap-y-[28px] min-[701px]:gap-[32px] min-[1001px]:grid-cols-4"
        >
          {benefits.map(({ icon, title, body }) => (
            <RevealItem key={title} as="article" className="min-w-0">
              <span
                aria-hidden="true"
                className="mb-[22px] grid h-[46px] w-[46px] place-items-center rounded-[13px] bg-[#e4fa65] text-[#5b2dce]"
              >
                <svg {...ICON_SHARED} className="h-[24px] w-[24px]">
                  {ICONS[icon]}
                </svg>
              </span>

              <h3 className="mt-0 mb-[14px] max-w-[240px] font-bricolage text-[21px] leading-[1.16] font-semibold min-[701px]:text-[23px]">
                {title}
              </h3>

              <p className="m-0 font-sans text-[13px] leading-[1.65] text-[#655f6c] min-[701px]:text-[14px]">
                {body}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
