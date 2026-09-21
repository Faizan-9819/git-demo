import Reveal from "../components/Reveal";
import DesignsFold from "./DesignsFold";

/**
 * `section.designs-hero` from Growth Rocket Designs.html.
 *
 * The base rule paints the fold white-on-deep-text; a later block repaints it
 * deep with the lime accent and muted inverse body copy, so those are the
 * computed values used here:
 *
 *   background: var(--gr-deep)   #0a0516
 *   h1         clamp(48px,6.1vw,88px) / .94 / -.065em, 48px under 600px
 *   h1 span    var(--gr-lime)    #e4fa65
 *   p          max-width 780px, margin-top 26px, clamp(18px,1.5vw,22px) / 1.55,
 *              var(--gr-text-inverse-muted) #c9c2d4
 *
 * Headings are Bricolage 600 throughout, per `h1,h2,h3{font-weight:600}`.
 *
 * Copy is the source file's own opening, as requested; the rest of the page
 * keeps the content it already had.
 *
 * `mt-20` clears the fixed navbar, same as the Features hero.
 */
export default function DesignsHero() {
  return (
    <DesignsFold className="mt-20 bg-[#0a0516] text-white">
      <Reveal>
        <h1 className="font-bricolage text-[clamp(48px,6.1vw,88px)] leading-[0.94]! font-semibold tracking-[-0.065em]! max-[600px]:text-[48px]">
          Choose your design.
          <br />
          <span className="text-[#e4fa65]">Make it yours.</span>
        </h1>
        <p className="mt-[26px] max-w-[780px] text-[clamp(18px,1.5vw,22px)] leading-[1.55] text-[#c9c2d4]">
          Explore a selection of professional website directions for growing
          businesses. Pick a style that feels right, and we&rsquo;ll shape it
          around your services, story and customers.
        </p>
      </Reveal>
    </DesignsFold>
  );
}
