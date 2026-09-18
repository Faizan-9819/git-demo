import { Fragment } from "react";

/**
 * Footer loop strip — ported from `div.footer-loop-strip` in
 * grsolidvariant.html, the band that runs between the contact fold and the
 * footer.
 *
 * As with the other ported folds, the values below are the final computed
 * ones: the base rule paints the strip lime, a later block repaints it deep,
 * and the last one lands on white-on-deep with hairline borders that a final
 * block then zeroes out again. So what actually renders is plain type on the
 * page's own white — no surface, no border, no radius.
 *
 * The source is desktop-first with a max-width override at 520px; that is
 * inverted here into a min-width step, so the base padding is the smallest one.
 *
 * This is the one home2 block that deliberately skips `.fix`: a marquee has to
 * run edge to edge, so it fills the shell's full width and only its type is
 * clipped by the overflow.
 */

const PHRASE = "Get started in 7 days";

/** Phrase/divider pairs per half. The track renders the same run twice so the
 *  keyframe's half-width slide lands copy two exactly where copy one started
 *  and the seam never shows.
 *
 *  The run is a flat, evenly padded sequence — matching the source — rather
 *  than a 100vw group with `justify-around`. Space-around pads the run's own
 *  ends, which pushed the first phrase inward instead of letting it sit flush
 *  at the left edge, so the strip never read as starting at 0. Even padding
 *  keeps every gap identical, including across the seam.
 *
 *  Eight pairs is the count that keeps one half wider than any viewport at the
 *  clamp's 38px ceiling (~490px per pair, so ~3.9k px per half). A half
 *  narrower than the strip would run the track past its own end and flash
 *  empty page before restarting. */
const PAIRS_PER_HALF = 8;

function LoopRun({ hidden }: { hidden?: boolean }) {
  return (
    <div aria-hidden={hidden} className="flex shrink-0 items-center">
      {Array.from({ length: PAIRS_PER_HALF }).map((_, i) => (
        <Fragment key={i}>
          <span className="inline-flex items-center px-[13px] font-bricolage text-[clamp(24px,2.45vw,38px)] font-semibold leading-none tracking-[-0.045em] min-[521px]:px-[18px]">
            {PHRASE}
          </span>
          <span
            aria-hidden
            className="inline-flex items-center px-[10px] font-bricolage text-[clamp(24px,2.45vw,38px)] font-semibold leading-none tracking-[-0.045em] text-[#e4fa65]"
          >
            ✳
          </span>
        </Fragment>
      ))}
    </div>
  );
}

export default function FooterLoopStrip() {
  return (
    <div
      aria-label="Get started in seven days"
      className="w-full overflow-hidden bg-white py-[24px] whitespace-nowrap text-[#0a0516]"
    >
      <div className="gr-loop-strip-track flex w-max items-center">
        <LoopRun />
        <LoopRun hidden />
      </div>
    </div>
  );
}
