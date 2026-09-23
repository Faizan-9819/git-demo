import Link from "next/link";
import { RevealGroup, RevealItem } from "../../../features/FeatureReveal";

/**
 * "Small businesses deserve big possibilities." — the
 * `section.contact-section.about-closing` fold from about.html, carrying
 * about.css's own values.
 *
 *   .about-closing            background:var(--gr-lime)  #e4fa65
 *                             color:var(--gr-deep)
 *   .about-closing h2         max-width:none
 *                             font-size:clamp(32px,3.8vw,56px)
 *                             line-height:1.04; letter-spacing:-.045em
 *   h2 .about-closing-first-line  color:var(--gr-deep)
 *   h2 span                   color:#657221
 *   @901px                    .about-closing-first-line white-space:nowrap
 *   .about-closing p          max-width:none; margin-top:24px
 *                             color:var(--gr-deep)
 *   @1100px                   p font-size:clamp(14px,1.2vw,18px); nowrap
 *   .about-closing-actions    display:flex; flex-wrap:wrap; gap:14px
 *                             margin-top:30px
 *   .about-closing .button    min-height:54px; gap:24px; border-radius:999px
 *                             justify-content:space-between
 *                             white-space:normal
 *   .about-business-button    background:var(--gr-deep); color:var(--gr-lime)
 *                             border:1px solid var(--gr-deep)
 *   .about-partner-button     background:transparent; color:var(--gr-deep)
 *                             border:1px solid var(--gr-deep)
 *   .button:hover             background/border:var(--gr-brand-ink) #5b2dce
 *                             color:var(--gr-white)
 *   @600px                    actions column, stretched; button 100%, 14px
 *
 * The fold is lime, not the violet an earlier pass gave it. That does put it
 * next to the lime `ContactCta` the root layout mounts underneath — but this is
 * what about.css specifies, and `.contact-section` is the very class the source
 * shares with that fold.
 *
 * The base `.button` from the shared sheet supplies the rest: `padding:14px
 * 23px`, `font-weight:600`, `font-size:15px`, `line-height:1.35`, and
 * `.button span{font-size:21px}` for the `↗`.
 */
export default function AboutClosing() {
  const partnerMailto =
    "mailto:sales@getgrowthrocket.com?subject=Become%20a%20Growth%20Rocket%20partner";

  const button =
    "inline-flex min-h-[54px] items-center justify-between gap-[24px] rounded-full border px-[23px] py-[14px] font-sans text-[15px] leading-[1.35] font-semibold whitespace-normal transition-colors hover:border-[#5b2dce] hover:bg-[#5b2dce] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5b2dce] max-[600px]:w-full max-[600px]:text-[14px]";

  return (
    <section
      aria-labelledby="about-closing-heading"
      className="overflow-hidden rounded-[13px] bg-[#e4fa65] py-[clamp(48px,6vw,84px)] text-[#0a0516] max-[600px]:py-[38px]"
    >
      <RevealGroup className="fix">
        <RevealItem>
          <h2
            id="about-closing-heading"
            className="m-0 font-bricolage text-[clamp(32px,3.8vw,56px)] leading-[1.04] font-semibold tracking-[-0.045em]"
          >
            <span className="text-[#0a0516] min-[901px]:whitespace-nowrap">
              Small businesses deserve big possibilities.
            </span>
            <br />
            <span className="text-[#657221]">Let’s build them together.</span>
          </h2>
        </RevealItem>

        <RevealItem
          as="p"
          className="mt-[24px] mb-0 font-sans text-[18px] leading-[1.65] text-[#0a0516] min-[1100px]:text-[clamp(14px,1.2vw,18px)] min-[1100px]:whitespace-nowrap max-[600px]:text-[17px]"
        >
          Join Growth Rocket in making technology accessible to every small
          business with the ambition to grow.
        </RevealItem>

        <RevealItem className="mt-[30px] flex flex-wrap gap-[14px] max-[600px]:flex-col max-[600px]:items-stretch">
          <Link
            href="/pricing"
            className={`${button} border-[#0a0516] bg-[#0a0516] text-[#e4fa65]`}
          >
            Get Growth Rocket for your business
            <span aria-hidden="true" className="text-[21px] leading-none">
              ↗
            </span>
          </Link>

          <a
            href={partnerMailto}
            className={`${button} border-[#0a0516] bg-transparent text-[#0a0516]`}
          >
            Become a partner
            <span aria-hidden="true" className="text-[21px] leading-none">
              ↗
            </span>
          </a>
        </RevealItem>
      </RevealGroup>
    </section>
  );
}
