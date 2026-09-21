import ArrowIcon from "../../ui/ArrowIcon";
import { RevealGroup, RevealItem } from "../../../features/FeatureReveal";

/**
 * Pricing teaser — the copy of `section.pricing-teaser-section` from
 * grsolidvariant.html, wearing `FaqAccordion.tsx`'s styling rather than its
 * own.
 *
 * The content is unchanged from the original port: the same heading, the same
 * supporting sentence, the same "from €69 / month" and the same "View full
 * pricing" link to the pricing fold. Everything around it now follows the FAQ
 * fold instead of the source's deep card:
 *
 * - White surface at the 13px fold radius with `56/80px` vertical padding,
 *   in place of the `#0a0516` card at `44/58px`.
 * - The FAQ's `0.85fr / 1.15fr` rail with a sticky left column, in place of the
 *   teaser's `1.25fr / auto` centred row.
 * - Violet `#5b2dce` as the accent and `#625a70` for supporting copy, in place
 *   of lime on white; lime is left to the small tile, which is where the FAQ
 *   fold uses it too.
 * - The supporting sentence sits in the FAQ's `HelpCard` shell — bordered,
 *   radial-tinted, capped at 378px — under the heading, and the price sits in a
 *   card matching the FAQ's question cards.
 *
 * The CTA keeps its `arrow-cta` hover, so it still reacts like every other call
 * to action on the page; only its palette follows the FAQ's violet pill.
 */
export default function PricingTeaser() {
  return (
    <section
      id="pricing"
      aria-labelledby="pricing-teaser-heading"
      className="rounded-[13px] bg-white py-[56px] text-[#0a0516] md:py-[80px]"
    >
      {/* items-start is what lets the left column stick: a grid item stretches
          to the full row height by default, leaving sticky nothing to travel
          in. It only matters from 768px, where the two columns exist. */}
      <div className="fix grid grid-cols-1 items-start gap-[35px] md:grid-cols-[0.85fr_1.15fr] md:gap-[50px] lg:gap-[90px]">
        {/* top-[120px] clears the fixed navbar (76px) with breathing room. */}
        <RevealGroup className="self-start md:sticky md:top-[120px]">
          <RevealItem>
            <h2
              id="pricing-teaser-heading"
              className="m-0 font-bricolage text-[clamp(40px,4vw,58px)] font-semibold leading-[1.1] tracking-[-0.04em]"
            >
              Start with the complete
              <br />
              <span className="text-[#5b2dce]">Growth Rocket</span> package.
            </h2>
          </RevealItem>

          <RevealItem>
            <div className="relative mt-[28px] flex w-full max-w-[378px] flex-col gap-[16px] overflow-hidden rounded-[13px] border border-[#ded8e7] p-[26px] md:mt-[32px] md:p-[30px]">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-[13px]"
                style={{
                  background:
                    "radial-gradient(60% 60% at 50% 50%, rgba(91,45,206,0.10) 0%, rgba(255,255,255,0) 100%), #ffffff",
                }}
              />
              <p className="relative m-0 font-sans text-[15px] leading-[1.6] text-[#625a70]">
                Your professional website, Growth Rocket Hub, hosting,
                maintenance and support. One connected setup from{" "}
                <strong className="font-semibold text-[#5b2dce]">
                  €69 per month.
                </strong>
              </p>
            </div>
          </RevealItem>
        </RevealGroup>

        <RevealGroup
          stagger={0.05}
          amount={0.05}
          className="flex w-full flex-col gap-[16px]"
        >
          <RevealItem className="w-full rounded-[13px] border border-[#ded8e7] bg-white p-[26px] transition-colors duration-200 hover:border-[#b9a6f0] md:p-[30px]">
            <div className="flex items-center justify-between gap-[14px]">
              <span className="font-sans text-[11px] leading-none font-bold tracking-[0.12em] text-[#625a70]">
                FROM
              </span>

              {/* The FAQ fold's lime tile, which is the one place it uses lime. */}
              <span className="inline-flex size-[40px] shrink-0 items-center justify-center rounded-[10px] bg-[#e4fa65] text-[#5b2dce]">
                <ArrowIcon direction="up-right" size={19} />
              </span>
            </div>

            <div className="mt-[18px] flex items-end gap-[8px]">
              <strong className="font-bricolage text-[66px] leading-[0.88] font-bold tracking-[-0.025em] text-[#5b2dce] md:text-[clamp(58px,5.4vw,86px)]">
                €69
              </strong>
              <small className="mb-[0.48em] font-sans text-[14px] leading-none font-semibold text-[#625a70]">
                / month
              </small>
            </div>

            <a
              href="#prijzen"
              className="arrow-cta mt-[24px] inline-flex min-h-[52px] w-full items-center justify-center gap-[8px] rounded-full bg-[#5b2dce] px-[20px] py-[14px] font-sans text-[14px] leading-[1.35] font-semibold text-white hover:bg-[#e4fa65] hover:text-[#0a0516] md:w-auto"
            >
              View full pricing <ArrowIcon direction="up-right" size={18} />
            </a>
          </RevealItem>
        </RevealGroup>
      </div>
    </section>
  );
}
