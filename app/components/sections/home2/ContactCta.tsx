import ArrowIcon from "../../ui/ArrowIcon";

/**
 * Contact call-to-action — ported from `section#contact.contact-section` in
 * grsolidvariant.html, the last fold before the footer.
 *
 * As with the other ported folds, the values below are the final computed ones:
 * later blocks in that stylesheet repaint the surface with the brand tokens
 * (`--gr-lime` / `--gr-deep`), raise the vertical padding to 64px at every
 * width, and pin every fold's radius to 13px with `!important`.
 *
 * The source sheet is desktop-first with max-width overrides at 1050px, 760px
 * and 370px; those are inverted here into min-width steps, so the base values
 * are the smallest ones. The bottom row's link size is the one place that
 * inversion is not monotonic — the source sets 15px, drops to 12px under
 * 1050px, then returns to 15px under 760px — so it reads as 15 / 12 / 15 here.
 *
 * Horizontal spacing comes from the shared `.fix` container rather than the
 * source's `.wrap`, so this fold lines up with every other section on the page;
 * the section itself only carries the surface and its vertical rhythm.
 *
 * Note: a late block in that stylesheet hides every `.eyebrow` globally, so the
 * eyebrow below is markup the reference page never paints. It is kept visible
 * here because it is real copy — drop the `<p>` to match the reference exactly.
 */
export default function ContactCta() {
  const mailto =
    "mailto:sales@getgrowthrocket.com?subject=Let%E2%80%99s%20talk%20about%20Growth%20Rocket";

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="overflow-hidden rounded-[13px] bg-[#e4fa65] py-[64px] text-[#0a0516]"
    >
      <div className="fix">
        <p className="m-0 flex items-center gap-[10px] font-sans text-[12px] font-semibold leading-[1.5] tracking-[0.12em]">
          YOUR NEXT CHAPTER STARTS HERE
        </p>

        <div className="mt-[24px] flex items-end justify-between gap-[16px] min-[761px]:items-center min-[761px]:gap-[30px]">
          <h2
            id="contact-heading"
            className="m-0 font-bricolage text-[28px] font-semibold leading-[1.05] tracking-[-0.055em]  md:text-[76px]"
          >
            Big plans?
            <br />
            <span className="text-[#657221]">Let’s make room for them.</span>
          </h2>

          <a
            href={mailto}
            aria-label="Email the Growth Rocket sales team"
            className="arrow-cta grid h-[54px] w-[54px] flex-shrink-0 place-items-center rounded-full bg-[#0a0516] font-light text-[#e4fa65] min-[761px]:h-[110px] min-[761px]:w-[110px]"
          >
            <ArrowIcon direction="up-right" className="btn-arrow--xl" />
          </a>
        </div>

        <div className="mt-[30px] flex flex-col items-start gap-[20px] border-t border-[#b8ce50] pt-[25px] min-[761px]:mt-[40px] min-[761px]:flex-row min-[761px]:items-end min-[761px]:justify-between min-[761px]:gap-[24px]">
          <p className="m-0 font-sans text-[14px] leading-[1.65]">
            Tell us about your business.
            <br />
            We’ll help you find your next step.
          </p>

          <a
            href={mailto}
            className="arrow-cta inline-flex items-center gap-[6px] border-b border-current font-sans text-[15px] leading-[1.65] [overflow-wrap:anywhere] min-[761px]:text-[12px] min-[1051px]:text-[15px]"
          >
            sales@getgrowthrocket.com
            <ArrowIcon direction="up-right" size={14} />
          </a>

          <a
            href="tel:+31857444176"
            className="arrow-cta inline-flex items-center gap-[6px] border-b border-current font-sans text-[15px] leading-[1.65] [overflow-wrap:anywhere] min-[761px]:text-[12px] min-[1051px]:text-[15px]"
          >
            +31 85 744 4176
            <ArrowIcon direction="up-right" size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
