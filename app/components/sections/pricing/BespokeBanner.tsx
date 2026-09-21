import ArrowIcon from "../../ui/ArrowIcon";

/**
 * Bespoke enquiry banner — ported from
 * `section.pricing-teaser-section.pricing-bespoke-banner` in Pricing.html.
 *
 * It reuses the homepage pricing-teaser shell and repaints it: brand purple in
 * place of the deep surface, a smaller heading clamp, and an action column that
 * carries a label and a lime button instead of a price.
 *
 * The vertical rhythm is the one place the source contradicts itself — the
 * banner's own block asks for 42px and a 600px step asks for 32px, but a later
 * `.pricing-teaser-section` block sets 58/44px with `!important` and wins both.
 * So the padding below is 44px rising to 58px, and the 600px step never paints.
 *
 * Horizontal spacing comes from the shared `.fix` container rather than the
 * source's `--fold-inset`, so this fold lines up with every other section on the
 * page; the section itself only carries the surface and its vertical rhythm.
 */
export default function BespokeBanner() {
  const mailto =
    "mailto:sales@getgrowthrocket.com?subject=Bespoke%20Growth%20Rocket%20requirements";

  return (
    <section
      aria-labelledby="bespoke-heading"
      className="overflow-hidden rounded-[13px] bg-[#5b2dce] py-[44px] text-white md:py-[58px]"
    >
      <div className="fix grid grid-cols-1 items-center gap-[clamp(24px,4vw,72px)] lg:grid-cols-[minmax(0,1.25fr)_auto]">
        <div>
          <h2
            id="bespoke-heading"
            className="m-0 font-bricolage text-[clamp(28px,2.5vw,40px)] font-semibold leading-[1.05] tracking-[-0.04em] text-white"
          >
            {/* The source keeps this line on one row from 1200px up — `xl` here,
                per the breakpoint table in globals.css. */}
            <span className="xl:whitespace-nowrap">
              Want a setup built around your business?
            </span>
            <br />
            <span className="text-[#e4fa65]">Get a bespoke plan.</span>
          </h2>

          <p className="mt-[16px] max-w-[660px] font-sans text-[16px] leading-[1.58] text-[#c9c2d4] md:text-[17px]">
            Bring the advantages of Growth Rocket to a bespoke setup for your
            business. From additional pages to custom functionality, we can
            shape the design and build around your requirements.
          </p>
        </div>

        <div className="flex w-full flex-col items-start gap-[8px]! sm:w-auto">
          <span className="font-sans text-[15px] text-[#c9c2d4]">
            Tailored to your scope
          </span>

          <a
            href={mailto}
            className="arrow-cta flex min-h-[52px] w-full items-center max-w-fit gap-[8px] rounded-full border border-transparent bg-[#e4fa65] px-[20px] py-[14px] font-sans text-[15px] leading-[1.35] font-semibold text-[#0a0516] transition-colors hover:bg-white "
          >
            Discuss your requirements
            <ArrowIcon direction="up-right" size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
