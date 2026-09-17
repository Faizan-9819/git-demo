"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

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

export default function ProcessTimeline() {
  const reduced = useReducedMotion();

  const list: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.14, delayChildren: 0.08 } },
  };

  const card: Variants = {
    hidden: { opacity: 0, y: reduced ? 0 : 28 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="how"
      aria-labelledby="how-heading"
      className="full-bleed bg-white py-[60px] text-[#0a0516] min-[761px]:py-[94px]"
    >
      <div className="fix">
        <div className="mb-[30px] min-[761px]:mb-[44px]">
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
          className="relative mt-[35px] grid grid-cols-1 gap-x-[24px] gap-y-[35px] min-[761px]:mt-[50px] min-[761px]:grid-cols-4 min-[761px]:gap-[22px] min-[1051px]:gap-[30px]"
        >
          {/* The rule the step circles sit on: vertical on mobile, horizontal
              from 761px, inset by half a circle so it spans centre to centre. */}
          <span
            aria-hidden
            className="absolute bottom-0 left-[20px] top-0 z-0 w-[2px] bg-[#ded8e7] min-[761px]:bottom-auto min-[761px]:left-[28px] min-[761px]:right-[28px] min-[761px]:top-[28px] min-[761px]:h-[2px] min-[761px]:w-auto"
          />

          {STEPS.map((step) => (
            <motion.article
              key={step.num}
              variants={card}
              className="relative z-[1] grid grid-cols-[40px_1fr] gap-x-[20px] gap-y-[12px] pt-[22px] min-[761px]:block min-[761px]:pt-0"
            >
              <span className="row-span-3 row-start-1 grid h-[40px] w-[40px] place-items-center rounded-full bg-[#e4fa65] font-bricolage text-[18px] tracking-[-0.03em] text-[#0a0516] shadow-[0_0_0_6px_#fff] min-[761px]:h-[56px] min-[761px]:w-[56px] min-[761px]:text-[24px] min-[761px]:shadow-[0_0_0_8px_#fff]">
                {step.num}
              </span>

              <h3 className="m-0 font-bricolage text-[25px] font-semibold leading-[1.05] tracking-[-0.035em] min-[761px]:mt-[26px] min-[761px]:text-[22px] min-[1051px]:text-[25px]">
                {step.title}
              </h3>

              <p className="m-0 font-sans text-[16px] leading-[1.75] text-[#625a70] min-[761px]:mt-[15px]">
                {step.body}
              </p>

              <span className="m-0 inline-flex w-max items-center rounded-full bg-[rgba(228,250,101,0.42)] px-[10px] py-[6px] font-sans text-[11px] font-bold tracking-[0.025em] text-[#0a0516] min-[761px]:mt-[20px] min-[761px]:px-[11px] min-[761px]:py-[7px] min-[761px]:text-[12px]">
                {step.owner}
              </span>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
