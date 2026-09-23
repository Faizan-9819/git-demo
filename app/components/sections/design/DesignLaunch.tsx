"use client";

import {
  motion,
  useReducedMotion,
  type Transition,
  type Variants,
} from "framer-motion";
import { RevealGroup, RevealItem } from "../../../features/FeatureReveal";

/**
 * "Ready in as little as 7 days." — `section.dc-launch.dc-open` from
 * dentalcare.html, wearing home2's `ProcessTimeline` motion.
 *
 * Copy and type come from dentalcare.css:
 *
 *   .dc-open            padding:76px clamp(24px,5vw,80px)  (44px 22px <700px)
 *                       no radius, no background
 *   .dc-launch h2 span  color:var(--dc-purple) #5b2dce
 *   .dc-number          42x42; background:var(--dc-green) #e4fa65
 *                       border-radius:50%; font-size:12px; font-weight:600
 *                       margin-bottom:22px
 *   .dc-steps h3        font-size:25px; line-height:1.16
 *                       margin-bottom:12px   (24px under 700px)
 *   .dc-steps p         font-size:14px; color:#655f6c
 *   .dc-caption         font-size:12px; line-height:1.6; color:#6b6771
 *                       margin:20px 0 0
 *
 * ── Motion ────────────────────────────────────────────────────────────────
 * The steps are `ProcessTimeline`'s timeline, mechanism and all — not just its
 * timing constants. That distinction is the whole point: an earlier pass copied
 * the constants onto dentalcare's own `article::after` hairline and it did not
 * read as the same fold, because that hairline is a 1px stub sitting *between*
 * two circles and it does not exist at all below 700px. Nothing appeared to be
 * drawn.
 *
 * So this takes ProcessTimeline's geometry:
 *
 *   - The rule runs circle-centre to circle-centre and passes *beneath* each
 *     circle, which is what makes the line look like it threads the steps
 *     together rather than bridging gaps. A `shadow-[0_0_0_Npx_#fff]` ring on
 *     each circle masks it where it crosses — this works here because
 *     `.dc-open` sets no background, so the fold sits on HomeShell's white.
 *   - It is 2px, not dentalcare's 1px. At 1px the draw is barely perceptible,
 *     which was half of why the animation did not register.
 *   - The last step keeps ProcessTimeline's tail, running half a circle short
 *     of the row's right edge.
 *   - Below 700px the row becomes a single column with the circle beside the
 *     copy and the rule turns vertical, drawn top-down. dentalcare.css instead
 *     goes two-up and hides the rule (`article:after{display:none}`), so this
 *     is a deliberate departure: the timeline has to stay a timeline on a
 *     phone or there is no animation left to match.
 *
 * A pseudo-element cannot be driven by a variant, so each segment is a real
 * `motion.span` parented to the card it starts from. Same painted result, and
 * each segment can now be timed against its own card.
 */

const STEPS = [
  {
    n: "01",
    title: "Choose",
    body: "Start with this design and choose your billing option.",
  },
  {
    n: "02",
    title: "Share",
    body: "Send your branding, business details and content.",
  },
  {
    n: "03",
    title: "We build",
    body: "We set up your website and connected business tools.",
  },
  {
    n: "04",
    title: "Go live",
    body: "Review your website, approve it and launch.",
  },
];

/**
 * One clock for the whole fold, so the rule can be timed against the cards
 * rather than just appearing under them. Card `i` runs over
 * `[LEAD + STEP*i, +CARD]`; the segment that leads to it starts once card
 * `i - 1` is on screen and lands a beat before card `i` settles, so the line
 * reads as drawing each card into place.
 *
 * `ProcessTimeline`'s values verbatim — the two folds are the same four-step
 * timeline and should move at the same speed.
 */
const LEAD = 0.092; // before step 01 moves
const STEP = 0.161; // between consecutive steps
const CARD = 0.69; // a card's own fade-and-rise
const DRAW = 0.575; // a segment's draw
const DRAW_LEAD = 0.184; // after its own card, before the segment sets off

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const EASE_DRAW: [number, number, number, number] = [0.33, 1, 0.68, 1];

export default function DesignLaunch({ business }: { business: string }) {
  const reduced = useReducedMotion();

  const list: Variants = { hidden: {}, show: {} };

  const card: Variants = {
    hidden: { opacity: 0, y: reduced ? 0 : 28 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: CARD, delay: LEAD + STEP * i, ease: EASE },
    }),
  };

  // `custom` is the index of the step a segment *starts* from, so segment 0
  // runs 01 → 02. Reduced motion keeps the rule whole and just fades it in.
  const drawTransition = (i: number): Transition => ({
    duration: reduced ? 0.3 : DRAW,
    delay: LEAD + STEP * i + DRAW_LEAD,
    ease: reduced ? "linear" : EASE_DRAW,
  });

  const drawX: Variants = {
    hidden: reduced ? { opacity: 0 } : { scaleX: 0 },
    show: (i: number) =>
      reduced
        ? { opacity: 1, transition: drawTransition(i) }
        : { scaleX: 1, transition: drawTransition(i) },
  };

  const drawY: Variants = {
    hidden: reduced ? { opacity: 0 } : { scaleY: 0 },
    show: (i: number) =>
      reduced
        ? { opacity: 1, transition: drawTransition(i) }
        : { scaleY: 1, transition: drawTransition(i) },
  };

  return (
    <section
      aria-labelledby="design-launch-heading"
      className="py-[44px] text-[#0a0516] min-[701px]:py-[76px]"
    >
      <div className="fix">
        {/* .dc-section-top — only the head joins the shared reveal system. The
            timeline below it keeps its own choreography: one clock drives the
            cards AND the rule segments drawn between them, and a RevealGroup
            would take the cards off that clock and leave the line drawing to
            nothing. */}
        <RevealGroup className="mb-[28px] grid grid-cols-1 items-end gap-[28px] min-[701px]:mb-[38px] min-[701px]:grid-cols-[1.2fr_1fr] min-[701px]:gap-[35px] min-[1001px]:gap-[70px]">
          <RevealItem>
            <h2
              id="design-launch-heading"
              className="m-0 font-bricolage text-[34px] leading-[1.08] font-semibold tracking-[-0.045em] min-[701px]:text-[clamp(32px,3.8vw,52px)]"
            >
              Ready in as little as{" "}
              <span className="text-[#5b2dce]">7 days.</span>
            </h2>
          </RevealItem>

          <RevealItem
            as="p"
            className="m-0 max-w-[450px] font-sans text-[16px] leading-[1.65] text-[#615b69]"
          >
            You focus on your {business}.
            <br />
            We take care of bringing it online.
          </RevealItem>
        </RevealGroup>

        {/* .dc-steps */}
        <motion.div
          variants={list}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="relative grid grid-cols-1 gap-y-[30px] min-[701px]:grid-cols-4 min-[701px]:gap-[32px]"
        >
          {STEPS.map((step, i) => (
            <motion.article
              key={step.n}
              custom={i}
              variants={card}
              className="relative z-[1] grid min-w-0 grid-cols-[42px_1fr] gap-x-[20px] gap-y-[12px] pt-[22px] min-[701px]:block min-[701px]:pt-0"
            >
              {/* Desktop rule: this circle's centre to the next one's, i.e. one
                  column plus one 32px gap. The last step keeps ProcessTimeline's
                  tail, out to half a circle short of the row's right edge. Sits
                  behind the circle, which masks it with its white ring. */}
              <motion.span
                aria-hidden
                custom={i}
                variants={drawX}
                className={`absolute top-[21px] left-[21px] -z-10 hidden h-[2px] origin-left bg-[#d6d3db] min-[701px]:block ${
                  i < STEPS.length - 1
                    ? "min-[701px]:w-[calc(100%+32px)]"
                    : "min-[701px]:w-[calc(100%-42px)]"
                }`}
              />

              {/* Mobile rule: centre of this circle to the centre of the next
                  one, so nothing hangs above 01 or below the last step. The
                  30px row gap plus the next card's 22px top padding and half
                  its circle is the 73px overhang. */}
              {i < STEPS.length - 1 && (
                <motion.span
                  aria-hidden
                  custom={i}
                  variants={drawY}
                  className="absolute top-[43px] bottom-[-73px] left-[20px] -z-10 w-[2px] origin-top bg-[#d6d3db] min-[701px]:hidden"
                />
              )}

              <span className="row-span-2 row-start-1 grid h-[42px] w-[42px] place-items-center rounded-full bg-[#e4fa65] font-sans text-[12px] font-semibold text-[#0a0516] shadow-[0_0_0_6px_#fff] min-[701px]:mb-[22px] min-[701px]:shadow-[0_0_0_8px_#fff]">
                {step.n}
              </span>

              <h3 className="m-0 font-bricolage text-[24px] leading-[1.16] font-semibold min-[701px]:mb-[12px] min-[701px]:text-[25px]">
                {step.title}
              </h3>

              <p className="m-0 font-sans text-[14px] leading-[1.65] text-[#655f6c]">
                {step.body}
              </p>
            </motion.article>
          ))}
        </motion.div>

        {/* .dc-caption */}
        <p className="mt-[20px] mb-0 font-sans text-[12px] leading-[1.6] text-[#6b6771]">
          The 7-day setup depends on receiving the required information and
          approvals on time.
        </p>
      </div>
    </section>
  );
}
