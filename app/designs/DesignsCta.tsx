"use client";

import { RevealGroup, RevealItem } from "../features/FeatureReveal";
import ArrowIcon from "../components/ui/ArrowIcon";
import DesignsFold from "./DesignsFold";

/* Geometry of `.button` in Growth Rocket Designs.html (min-height 52px, gap
   32px, radius 999px, padding 14px 20px, 15px/1.35 semibold), layered over the
   shared .btn so ArrowIcon's hover swap still works.
   `.btn` in globals.css is unlayered, so it outranks every Tailwind utility no
   matter the class order — hence the `!` on each override, and on the scale
   cancel, exactly as the Features page's own button does it. */
const BUTTON =
  "btn !min-h-[52px] !gap-[8px] !rounded-full !px-[20px] !py-[14px] !text-[15px] !leading-[1.35] !font-semibold !font-sans " +
  "!transition-colors !duration-200 hover:!scale-100 active:!scale-100";

/**
 * `section.designs-cta` — the closing fold of Growth Rocket Designs.html.
 *
 * The base rule paints it deep; the last pass repaints it lime, which is what
 * renders and what is used here:
 *
 *   background  var(--gr-lime) #e4fa65, deep text
 *   layout      flex, align-items center, justify-content space-between,
 *               gap 46px; column + align-items start at 900px
 *   h2          clamp(40px,4.5vw,66px), span #657221
 *   p           max-width 670px, margin-top 20px, 18px, rgb(10 5 22/72%)
 *   .button     deep on lime, brand-ink on white text at hover
 *
 * The source links this to its pricing page; there is no /pricing route here,
 * so the button opens the site's lead form via the same `open-lead-form` event
 * the home page's Start CTA dispatches.
 */
export default function DesignsCta() {
  const openLeadForm = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-lead-form"));
    }
  };

  return (
    <DesignsFold
      className="bg-[#e4fa65] text-[#0a0516]"
      innerClassName="flex items-center justify-between gap-[46px] max-lg:flex-col max-lg:items-start"
    >
      <RevealGroup>
        <RevealItem>
          <h2 className="font-bricolage text-[clamp(40px,4.5vw,66px)] leading-[0.94] font-semibold tracking-[-0.065em]">
            Like a direction?
            <br />
            <span className="text-[#657221]">Let&rsquo;s make it yours.</span>
          </h2>
        </RevealItem>
        <RevealItem
          as="p"
          className="mt-[20px] max-w-[670px] text-[18px] leading-[1.65] text-[rgb(10_5_22_/_72%)]"
        >
          Your final website is built around your business, with the content,
          pages and connected tools you need.
        </RevealItem>
      </RevealGroup>

      {/* `delay` rather than a bigger stagger, so the button trails the copy
          column instead of slowing the whole fold down. */}
      <RevealGroup delay={0.12} className="shrink-0">
        <RevealItem>
          <button
            type="button"
            onClick={openLeadForm}
            className={`${BUTTON} bg-[#0a0516] text-[#e4fa65] hover:bg-[#5b219f] hover:text-white`}
          >
            <span className="btn__label">Start With Growth Rocket</span>
            <ArrowIcon direction="up-right" />
          </button>
        </RevealItem>
      </RevealGroup>
    </DesignsFold>
  );
}
