"use client";

import {
  motion,
  useReducedMotion,
  type Transition,
  type Variants,
} from "framer-motion";

/**
 * Process timeline — ported from `section.how-section` in grsolidvariant.html.
 *
 * Later blocks in that stylesheet rebuild this fold as a timeline: the step
 * numbers become lime circles with a white ring, and a 2px rule runs behind
 * them — horizontal from 761px up, vertical below. The white ring is what
 * masks the rule where it passes under each circle, so the card must stay on
 * a white surface.
 *
 * Two things the HTML renders but never shows, both reproduced as-is:
 * the eyebrow is hidden globally (`.eyebrow { display: none !important }`),
 * and the trailing `<p>` is swapped for identical `h2::after` copy — kept here
 * as a real paragraph so it stays selectable and readable to a screen reader.
 */

const STEPS = [
  {
    num: "01",
    title: "Tell us your story.",
    body: "Your services, your customers, your ideas. We get to know what makes your business yours.",
    owner: "YOU + US",
  },
  {
    num: "02",
    title: "We bring it to life.",
    body: "We write your copy, build your website and set up your enquiry forms and appointments.",
    owner: "WE TAKE IT FROM HERE",
  },
  {
    num: "03",
    title: "Make it feel right.",
    body: "Take a look, tell us what you think, and we make the final adjustments together.",
    owner: "YOUR SIGN-OFF",
  },
  {
    num: "04",
    title: "You’re open online.",
    body: "Your website goes live on your own domain, tested and connected to your Growth Rocket Hub.",
    owner: "READY FOR BUSINESS",
  },
];

/**
 * One clock for the whole fold, so the rule can be timed against the cards
 * rather than just appearing under them. Card `i` runs over
 * `[LEAD + STEP*i, +CARD]`; the segment that leads to it starts once card
 * `i - 1` is on screen and lands a beat before card `i` settles, so the line
 * reads as drawing each card into place.
 */
const LEAD = 0.092; // before step 01 moves
const STEP = 0.161; // between consecutive steps
const CARD = 0.69; // a card's own fade-and-rise
const DRAW = 0.575; // a segment's draw
const DRAW_LEAD = 0.184; // after its own card, before the segment sets off

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const EASE_DRAW: [number, number, number, number] = [0.33, 1, 0.68, 1];

export default function ProcessTimeline() {
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
      id="how"
      aria-labelledby="how-heading"
      className="full-bleed bg-white py-[60px] text-[#0a0516] md:py-[94px]"
    >
      <div className="fix">
        <div className="mb-[30px] md:mb-[44px]">
          <h2
            id="how-heading"
            className="m-0 font-bricolage text-[clamp(40px,4vw,58px)] font-semibold leading-[1.1] tracking-[-0.04em]"
          >
            Ready in just <span className="text-[#5b2dce]">7 days.</span>
            <br />
            Without the tech headache.
          </h2>
          <p className="mt-[22px] max-w-[420px] font-sans text-[17px] font-normal leading-[1.7] tracking-normal text-[#625a70]">
            Four clear steps. We do the setup, you have the say.
          </p>
        </div>

        <motion.div
          variants={list}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="relative mt-[35px] grid grid-cols-1 gap-x-[24px] gap-y-[35px] md:mt-[50px] md:grid-cols-4 md:gap-[22px] lg:gap-[30px]"
        >
          {/* The rule the step circles sit on. The source draws it as one bar
              behind the whole row (horizontal from 761px, vertical below), but
              a single bar can only appear all at once, so it is cut into a
              segment per step and each one is parented to the card it starts
              from. Same painted result, and each segment can now be timed
              against its own card. */}
          {STEPS.map((step, i) => (
            <motion.article
              key={step.num}
              custom={i}
              variants={card}
              className="relative z-[1] grid grid-cols-[40px_1fr] gap-x-[20px] gap-y-[12px] pt-[22px] md:block md:pt-0"
            >
              {/* Desktop rule: this circle's centre to the next one's, i.e. one
                  column plus one gap. The last step keeps the source's tail out
                  to 28px short of the row's right edge. Sits behind the circle,
                  which masks it with its white ring. */}
              <motion.span
                aria-hidden
                custom={i}
                variants={drawX}
                className={`absolute left-[28px] top-[28px] -z-10 hidden h-[2px] origin-left bg-[#ded8e7] md:block ${
                  i < STEPS.length - 1
                    ? "md:w-[calc(100%+22px)] lg:w-[calc(100%+30px)]"
                    : "md:w-[calc(100%-56px)]"
                }`}
              />

              {/* Mobile rule: centre of this circle to the centre of the next
                  one, so nothing hangs above 01 or below the last step. The
                  35px row gap plus the next card's 22px top padding and half
                  its circle is the 77px overhang. */}
              {i < STEPS.length - 1 && (
                <motion.span
                  aria-hidden
                  custom={i}
                  variants={drawY}
                  className="absolute bottom-[-77px] left-[19px] top-[42px] -z-10 w-[2px] origin-top bg-[#ded8e7] md:hidden"
                />
              )}

              <span className="row-span-3 row-start-1 grid h-[40px] w-[40px] place-items-center rounded-full bg-[#e4fa65] font-bricolage text-[18px] tracking-[-0.03em] text-[#0a0516] shadow-[0_0_0_6px_#fff] md:h-[56px] md:w-[56px] md:text-[24px] md:shadow-[0_0_0_8px_#fff]">
                {step.num}
              </span>

              <h3 className="m-0 font-bricolage text-[25px] font-semibold leading-[1.05] tracking-[-0.035em] md:mt-[26px] md:text-[22px] lg:text-[25px]">
                {step.title}
              </h3>

              <p className="m-0 font-sans text-[16px] leading-[1.75] text-[#625a70] md:mt-[15px]">
                {step.body}
              </p>

              <span className="m-0 inline-flex w-max items-center rounded-full bg-[rgba(228,250,101,0.42)] px-[10px] py-[6px] font-sans text-[11px] font-bold tracking-[0.025em] text-[#0a0516] md:mt-[20px] md:px-[11px] md:py-[7px] md:text-[12px]">
                {step.owner}
              </span>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
