import type { ReactNode } from "react";
import { RevealGroup, RevealItem } from "../../../features/FeatureReveal";

/**
 * "What that means for your business." — `section.about-purpose` from
 * about.html, carrying about.css's own values.
 *
 *   .about-purpose            background:var(--gr-brand-surface)
 *                             color:var(--gr-white)
 *   .about-purpose p          color:rgb(255 255 255 / 88%)
 *   .about-vision             max-width:1020px; margin-top:14px
 *                             color:var(--gr-lime)  #e4fa65
 *                             font-size:clamp(20px,1.8vw,26px)
 *                             font-weight:400; line-height:1.4
 *                             letter-spacing:-.015em
 *   .about-purpose-grid       grid-template-columns:repeat(3,minmax(0,1fr))
 *                             gap:clamp(24px,4vw,64px); margin-top:42px
 *   .about-icon               48x48; border-radius:13px
 *                             background:var(--gr-lime)
 *                             color:var(--gr-brand-ink)  #5b2dce
 *   .about-icon svg           25x25
 *   .about-purpose h3         font-size:23px; line-height:1.2
 *                             letter-spacing:-.025em; margin-top:22px
 *   .about-purpose-grid p     margin-top:12px; font-size:17px
 *   @900px                    grid:1fr; gap:30px; h3 margin-top:16px
 *                             p max-width:640px
 *   @600px                    grid margin-top:30px
 *
 * `--gr-brand-surface` resolves to the flat `#5b2dce` — the later `:root` in
 * the shared sheet collapses the purple gradient to a single value.
 *
 * The three articles have no card behind them: icon, heading and copy sit
 * directly on the violet. `.about-vision` is a lime statement line under the
 * heading, not a column beside it.
 *
 * The SVGs are about.html's own, path for path, at its 1.8 stroke weight.
 */

const ICON_SHARED = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

const PURPOSE: { title: string; body: string; icon: ReactNode }[] = [
  {
    title: "A fairer starting point.",
    body: "You should be able to build a professional business without a large technology budget or an in-house technical team.",
    icon: <path d="M5 21V3h12v18M9 21V6l8-3M12 12h.01M3 21h18" />,
  },
  {
    title: "More room for your craft.",
    body: "We want you to spend more time with your customers and doing the work you know best, with less energy lost to technical complexity.",
    icon: (
      <>
        <rect x="2" y="8" width="7" height="8" rx="2" />
        <rect x="15" y="8" width="7" height="8" rx="2" />
        <path d="M9 12h6" />
      </>
    ),
  },
  {
    title: "Confidence to move forward.",
    body: "You should feel able to take the next step, knowing there are people you can turn to when technology feels unfamiliar.",
    icon: (
      <path d="M4 13v-1a8 8 0 0 1 16 0v1M4 12h3v7H5a2 2 0 0 1-2-2v-3a2 2 0 0 1 1-2Zm16 0h-3v7h2a2 2 0 0 0 2-2v-3a2 2 0 0 0-1-2ZM17 19c0 2-2 2-5 2" />
    ),
  },
];

export default function AboutPurpose() {
  return (
    <section
      aria-labelledby="about-purpose-heading"
      className="rounded-[13px] bg-[#5b2dce] py-[clamp(48px,6vw,84px)] text-white max-[600px]:py-[38px]"
    >
      <div className="fix">
        <RevealGroup>
          <RevealItem>
            <h2
              id="about-purpose-heading"
              className="m-0 font-bricolage text-[clamp(32px,3.4vw,50px)] leading-[1.06] font-semibold tracking-[-0.045em] text-white"
            >
              What that means for your business.
            </h2>
          </RevealItem>

          {/* .about-vision */}
          <RevealItem
            as="p"
            className="mt-[14px] mb-0 max-w-[1020px] font-sans text-[clamp(20px,1.8vw,26px)] leading-[1.4] font-normal tracking-[-0.015em] text-[#e4fa65]"
          >
            Our vision is a future where the size of your business does not
            determine your access to useful technology.
          </RevealItem>
        </RevealGroup>

        <RevealGroup
          amount={0.1}
          className="mt-[30px] grid grid-cols-1 gap-[30px] min-[901px]:mt-[42px] min-[901px]:grid-cols-3 min-[901px]:gap-[clamp(24px,4vw,64px)]"
        >
          {PURPOSE.map(({ title, body, icon }) => (
            <RevealItem key={title} as="article" className="min-w-0">
              <span
                aria-hidden="true"
                className="grid h-[48px] w-[48px] place-items-center rounded-[13px] bg-[#e4fa65] text-[#5b2dce]"
              >
                <svg {...ICON_SHARED} className="h-[25px] w-[25px]">
                  {icon}
                </svg>
              </span>

              <h3 className="mt-[16px] mb-0 font-bricolage text-[23px] leading-[1.2] font-semibold tracking-[-0.025em] text-white min-[901px]:mt-[22px]">
                {title}
              </h3>

              <p className="mt-[12px] mb-0 max-w-[640px] font-sans text-[17px] leading-[1.65] text-white/[0.88] min-[901px]:max-w-none">
                {body}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
