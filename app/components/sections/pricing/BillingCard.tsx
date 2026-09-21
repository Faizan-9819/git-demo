"use client";

import { useState } from "react";
import ArrowIcon from "../../ui/ArrowIcon";

/**
 * The subscription card — ported from `.pricing-price-card.pricing-unified-card`
 * in Pricing.html, together with the `[data-billing]` handler that drove it.
 *
 * In the source the switch rewrote six nodes by hand (`[data-price-old]`,
 * `[data-price-current]`, `[data-price-period]`, `[data-billing-detail]`,
 * `[data-billing-saving]` and a `[data-duo-price-*]` trio belonging to a
 * pricing layout this page never renders). That is one `useState` here, and the
 * copy the script assigned imperatively is the table below.
 *
 * The values are the final computed ones. Note that the source's `@media
 * (max-width:760px)` steps for `.price-main` never reach this card: every one of
 * them is written against `.price-main`/`.price-old` while the
 * `.pricing-unified-card` block that follows is a specificity higher, so the
 * clamps below hold at every width and the card has no mobile variant.
 */

type Billing = "annual" | "monthly";

const BILLING: Record<
  Billing,
  {
    old: string;
    current: string;
    period: string;
    detail: string;
    saving: string;
  }
> = {
  annual: {
    old: "€990",
    current: "€690",
    period: "/ year",
    detail: "That’s €57.50 a month, billed annually.",
    saving: "Save €138 compared with 12 monthly payments.",
  },
  monthly: {
    old: "€99",
    current: "€69",
    period: "/ month",
    detail: "Billed monthly.",
    saving: "Save €138 a year when you choose annual billing.",
  },
};

export default function BillingCard() {
  const [billing, setBilling] = useState<Billing>("annual");
  const plan = BILLING[billing];
  const isAnnual = billing === "annual";

  return (
    <div className="box-border w-full max-w-[450px] rounded-[13px] bg-[#0a0516] p-[clamp(22px,2.5vw,36px)] text-white">
      {/* The unselected side is painted the card's own `#0a0516` rather than
          left transparent. The track is `white/10` over that same deep, so a
          transparent pill dissolved into the groove and only the selected side
          read as a control; against the lightened track the deep pill now sits
          as clearly "not chosen" as the white one does "chosen". */}
      <div
        role="group"
        aria-label="Choose billing period"
        className="mb-[30px] flex w-full items-center gap-[4px] rounded-full bg-[#262626] p-[5px]"
      >
        <button
          type="button"
          onClick={() => setBilling("annual")}
          aria-pressed={isAnnual}
          className={`inline-flex min-h-[38px] flex-auto items-center justify-center gap-[9px] rounded-full px-[12px] py-[10px] font-sans text-[13px] leading-none font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-white ${
            isAnnual ? "bg-white text-[#0a0516]" : "bg-[#262626] text-white"
          }`}
        >
          {/*  */}
          Annually{" "}
          <span
            className={`inline-block rounded-full px-[6px] py-[5px] text-[10px] leading-none font-extrabold whitespace-nowrap ${
              isAnnual
                ? "bg-[#0a0516] text-[#e4fa65]"
                : "bg-[#e4fa65] text-[#0a0516]"
            }`}
          >
            Save 17%
          </span>
        </button>

        <button
          type="button"
          onClick={() => setBilling("monthly")}
          aria-pressed={!isAnnual}
          className={`min-h-[38px] flex-auto rounded-full px-[12px] py-[10px] font-sans text-[13px] leading-none font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-white ${
            !isAnnual ? "bg-white text-[#0a0516]" : "bg-[#262626] text-white"
          }`}
        >
          Monthly
        </button>
      </div>

      <div aria-live="polite" aria-atomic="true">
        {/* The strike is the source's `::after` rule — a 1px magenta rule at 48%
            rather than the base card's rotated 3px white one. */}
        <div className="relative inline-block font-sans text-[28px] leading-[1.15] font-medium tracking-[0.01em] text-white/75 tabular-nums after:absolute after:inset-x-0 after:top-[48%] after:h-px after:rounded-full after:bg-[#ed6acb] after:content-['']">
          {plan.old}
        </div>

        <div className="mt-[12px] flex flex-wrap items-baseline gap-[8px]">
          <strong className="font-bricolage text-[clamp(64px,6vw,88px)] leading-[0.86] tracking-[-0.035em] text-[#e4fa65]">
            {plan.current}
          </strong>
          <span className="font-sans text-[20px] font-medium text-[#c9c2d4]">
            {plan.period}
          </span>
        </div>

        <div className="mt-[18px] flex flex-wrap items-center justify-start gap-x-[9px] gap-y-[6px] text-white">
          <strong className="text-[24px] font-semibold whitespace-nowrap">
            + €290
          </strong>
          <span className="text-[15px]">one-time onboarding fee</span>
        </div>

        <p className="mt-[22px] border-t border-white/[0.18] pt-[16px] font-sans text-[14px] leading-[1.5] text-[#c9c2d4]">
          {plan.detail}
        </p>

        <p className="mt-[8px] min-h-[42px] font-sans text-[14px] leading-[1.5] font-semibold text-[#e4fa65]">
          {plan.saving}
        </p>
      </div>

      <a
        href="#contact"
        className="arrow-cta mt-[10px] flex min-h-[52px] w-fit items-center justify-between gap-[8px] rounded-full border border-transparent bg-[#e4fa65] px-[20px] py-[14px] text-left font-sans text-[14px] leading-[1.35] font-semibold text-[#0a0516] transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-white"
      >
        Get started with Growth Rocket
        <ArrowIcon direction="up-right" size={18} />
      </a>
    </div>
  );
}
