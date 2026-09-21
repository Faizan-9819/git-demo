import ArrowIcon from "../../ui/ArrowIcon";

/**
 * Pricing teaser — ported from `section.pricing-teaser-section` in
 * grsolidvariant.html.
 *
 * A deep card with the copy on the left and the price block on the right,
 * collapsing to a single column at 900px. As with the hero, the values below
 * are the final computed ones: later blocks in that stylesheet raise the
 * vertical padding to 58/44px and pin the radius to 13px.
 *
 * The source is desktop-first with max-width overrides at 900px and 760px;
 * those are inverted here into min-width steps.
 *
 * Horizontal spacing comes from the shared `.fix` container, which also owns
 * the two-column grid — the section itself only carries the surface and its
 * vertical rhythm.
 */
export default function PricingTeaser() {
  return (
    <section
      id="pricing"
      aria-labelledby="pricing-teaser-heading"
      className="overflow-hidden rounded-[13px] bg-[#0a0516] py-[44px] text-white md:py-[58px]"
    >
      <div className="fix grid grid-cols-1 items-center gap-[clamp(24px,4vw,72px)] lg:grid-cols-[minmax(0,1.25fr)_auto]">
        <div>
          <h2
            id="pricing-teaser-heading"
            className="m-0 max-w-[760px] font-bricolage text-[clamp(34px,3.35vw,52px)] font-semibold leading-[1.05] tracking-[-0.04em] text-white"
          >
            Start with the complete
            <br />
            <span className="text-[#e4fa65]">Growth Rocket</span> package.
          </h2>

          <p className="mt-[16px] max-w-[660px] font-sans text-[16px] leading-[1.58] text-[#c9c2d4] md:text-[17px]">
            Your professional website, Growth Rocket Hub, hosting, maintenance
            and support. One connected setup from{" "}
            <strong className="text-[#e4fa65]">€69 per month.</strong>
          </p>
        </div>

        {/* The 330px min-width reserves the column so the heading beside it
            doesn't reflow; `justify-end` then parks the max-content tracks
            against that box's right edge — which is the `.fix` right margin —
            instead of letting them hug the left and leave a gap. Desktop only:
            below 901px this is a full-width row that stays left-aligned with
            the copy above it. */}
        <div className="grid grid-cols-[max-content_max-content] items-end justify-items-start gap-x-[8px] gap-y-[4px] lg:min-w-[330px] lg:justify-end">
          <span className="col-span-2 font-sans text-[11px] font-bold leading-none tracking-[0.12em] text-[#c9c2d4]">
            FROM
          </span>

          <strong className="font-bricolage text-[66px] font-bold leading-[0.88] tracking-[-0.025em] text-[#e4fa65] md:text-[clamp(58px,5.4vw,86px)]">
            €69
          </strong>

          <small className="mb-[0.48em] self-end font-sans text-[14px] font-semibold leading-none text-[#c9c2d4]">
            / month
          </small>

          <a
            href="#prijzen"
            className="arrow-cta col-span-2 mt-[14px] inline-flex min-h-[52px] w-full items-center justify-center gap-[8px] rounded-full border border-transparent bg-[#e4fa65] px-[20px] py-[14px] font-sans text-[15px] font-semibold leading-[1.35] text-[#0a0516] hover:bg-white md:w-auto"
          >
            View full pricing <ArrowIcon direction="up-right" size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
