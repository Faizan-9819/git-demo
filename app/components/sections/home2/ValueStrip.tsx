/**
 * Value strip — ported from `div.value-strip` in grsolidvariant.html.
 *
 * A full-bleed lime band that sits directly under the hero. `.full-bleed`
 * pulls it out of HomeShell's sand padding and max width so it runs edge to
 * edge, and the inner row uses the shared `.fix` container.
 *
 * The source stylesheet is desktop-first with max-width overrides at 760px and
 * 370px; those are inverted here into min-width steps, so the base values are
 * the smallest ones.
 */

/* Below 761px the three phrases have to share a single line, which a fixed
   18/20px never manages on a phone — so the mobile size tracks the viewport
   and only settles at the source's 20px once there is room for it. The
   source's own 371px step is folded into the clamp. `whitespace-nowrap` keeps
   a phrase from breaking at its own space when the line gets tight. */
const STRONG =
  "font-bricolage text-[16px] font-bold tracking-[-0.04em] whitespace-nowrap md:text-[26px]";

const STAR = "text-[19px] text-[#726e2b] md:text-[25px]";

export default function ValueStrip() {
  return (
    <section className="full-bleed bg-[#e4fa65] py-[20px] text-[#0a0516] md:py-[24px] md:px-5 xl:px-0">
      <div className="fix flex flex-wrap items-center justify-between gap-[6px] md:gap-[12px] md:flex-nowrap md:gap-[20px]">
        <span className="basis-full font-sans text-[10px] font-semibold leading-[1.5] tracking-[0.1em] md:max-w-[120px] md:basis-auto md:text-[11px]">
          BUILT FOR YOUR EVERYDAY
        </span>

        {/* On mobile the five items get their own non-wrapping row under the
            eyebrow — the outer container has to keep `flex-wrap` for the
            eyebrow's `basis-full`, which would otherwise let these break too.
            `contents` dissolves this wrapper from 761px up, so the desktop row
            is exactly the flat one it was. */}
        <div className="flex basis-full flex-nowrap items-center justify-between gap-[6px] md:contents">
          <strong className={STRONG}>Get found.</strong>
          <span aria-hidden className={STAR}>
            ✳
          </span>
          <strong className={STRONG}>Get booked.</strong>
          <span aria-hidden className={STAR}>
            ✳
          </span>
          <strong className={STRONG}>Get organised.</strong>
        </div>
      </div>
    </section>
  );
}
