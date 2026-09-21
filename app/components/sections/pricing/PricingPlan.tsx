import OfferCards from "./OfferCards";
import BillingCard from "./BillingCard";

/**
 * The main pricing fold — ported from
 * `section#pricing.pricing-section.pricing-variant-section.pricing-final-section`
 * in Pricing.html.
 *
 * Three stacked blocks in that stylesheet fight over this section's surface:
 * `.pricing-section` starts on the brand purple, a later block repaints it lime
 * with `!important`, and `.pricing-variant-section` turns the section's own grid
 * back into a plain block so `.pricing-single-view` inside it can own the
 * columns. The lime and the block layout are what survive, and that is what is
 * written below.
 *
 * `.pricing-single-view` places its three children explicitly — heading in
 * row 1, the inclusion cards in row 2 column 1, the subscription card in row 2
 * column 2 — and the source's 1050px step (`lg` here, per the breakpoint table
 * in globals.css) collapses that to one column with the subscription card
 * moving to row 3. Since the mobile order is the DOM order, only the desktop
 * placement needs to be spelled out.
 *
 * Horizontal spacing comes from the shared `.fix` container rather than the
 * source's `--fold-inset`, so this fold lines up with every other section on the
 * page; the section itself only carries the surface and its vertical rhythm.
 */
export default function PricingPlan() {
  return (
    <section
      id="pricing"
      aria-labelledby="pricing-package-heading"
      className="overflow-hidden rounded-[13px] bg-[#e4fa65] py-[58px] text-[#0a0516]"
    >
      {/* The right column is the subscription card's own 450px rather than a
          fraction, so narrowing that card widens the inclusion cards beside it
          instead of opening a wider gap — the card stays flush against the
          `.fix` rail's right edge and the column gap is unchanged. The left
          track takes whatever is left. */}
      <div className="fix grid grid-cols-1 gap-x-[clamp(34px,5vw,72px)] gap-y-[28px] lg:grid-cols-[minmax(0,1fr)_450px] lg:items-center">
        <div className="min-w-0 lg:col-start-1 lg:row-start-1">
          <h2
            id="pricing-package-heading"
            className="m-0 font-bricolage text-[clamp(36px,3.5vw,52px)] font-semibold leading-[1.08] tracking-[-0.04em] text-[#0a0516]"
          >
            More together.
            <br />
            {/* `.purple` here is reset to `color: inherit` by
                `.pricing-package-heading h2 .purple`, so both lines read deep. */}
            <span>Less to think about.</span>
          </h2>

          <p className="mt-[16px] max-w-[660px] font-sans text-[17px] leading-[1.6] text-[#0a0516]">
            Your professional website. Your essential business tools. A team to
            keep the technical side running.
          </p>
        </div>

        <div className="min-w-0 lg:col-start-1 lg:row-start-2">
          <OfferCards />
        </div>

        <div className="min-w-0 lg:col-start-2 lg:row-start-2 lg:self-center">
          <BillingCard />
        </div>
      </div>
    </section>
  );
}
