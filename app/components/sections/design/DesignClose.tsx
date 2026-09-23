import ArrowIcon from "../../ui/ArrowIcon";
import { RevealGroup, RevealItem } from "../../../features/FeatureReveal";

/**
 * "Make this your next website." — `section.dc-close.dc-panel` from
 * dentalcare.html, the last fold before the footer, carrying dentalcare.css's
 * own values.
 *
 *   .dc-close           background:var(--dc-green) #e4fa65
 *   .dc-close h2        font-size:clamp(38px,4.4vw,64px)   (38px <700px)
 *   .dc-close h2 span   color:var(--dc-purple) #5b2dce
 *   .dc-close>p         margin-top:24px; max-width:690px
 *   .dc-actions         flex; gap:24px; align-items:center; flex-wrap:wrap
 *                       margin-top:30px       (gap:12px under 700px)
 *   .dc-btn             inline-flex; justify-content:space-between; gap:28px
 *                       border-radius:100px; padding:15px 23px
 *                       font-weight:600; font-size:14px; line-height:1.4
 *                       min-height:52px
 *   .dc-btn span        font-size:22px
 *
 * The source's own hover (`translateY(-2px)` + `0 5px 20px #0002`) is dropped
 * for `arrow-cta`, so these react exactly like every CTA on home2 — the same
 * scale, and ArrowIcon's two-slot swap in place of the flat `↗` glyph. The
 * colours stay as dentalcare.css sets them: home2's purple→lime swap would
 * dissolve the primary button into this fold's lime panel.
 *   .dc-purple-btn      background:var(--dc-purple); color:white
 *   .dc-outline-btn     border:1px solid #0005; background:transparent
 *   @700px              .dc-close .dc-btn{width:100%}
 *   @prefers-reduced-motion   .dc-btn{transition:none}
 *
 * The fold is lime, and it is the page's closing pitch, so `SiteFooter` holds
 * the layout's own lime `ContactCta` back on /designs/* — two lime folds in a
 * row read as one fold repeating itself. The footer below arrives on its own.
 *
 * As everywhere else on this page, the horizontal inset is the shared `.fix`
 * rail rather than `.dc-panel`'s `clamp(24px,5vw,80px)`.
 */
export default function DesignClose({
  title,
  business,
}: {
  title: string;
  business: string;
}) {
  const mailto = `mailto:sales@getgrowthrocket.com?subject=${encodeURIComponent(
    `${title} website enquiry`,
  )}`;

  const button =
    "arrow-cta inline-flex min-h-[52px] w-fit items-center justify-between gap-[8px] rounded-[100px] px-[23px] py-[15px] font-sans text-[14px] leading-[1.4] font-semibold min-[701px]:w-auto";

  return (
    <section
      aria-labelledby="design-close-heading"
      className="overflow-hidden rounded-[13px] bg-[#e4fa65] py-[34px] text-[#0a0516] min-[701px]:py-[64px]"
    >
      <RevealGroup className="fix">
        <RevealItem>
          <h2
            id="design-close-heading"
            className="m-0 font-bricolage text-[38px] leading-[1.08] font-semibold tracking-[-0.045em] min-[701px]:text-[clamp(38px,4.4vw,64px)]"
          >
            Make {title}
            <br />
            <span className="text-[#5b2dce]">
              your {business}’s next website.
            </span>
          </h2>
        </RevealItem>

        <RevealItem
          as="p"
          className="mt-[24px] mb-0 max-w-[690px] font-sans text-[16px] leading-[1.65]"
        >
          A professional website for your {business}. Your complete business
          system in Growth Rocket Hub. All maintained for you.
        </RevealItem>

        {/* .dc-actions */}
        <RevealItem className="mt-[30px] flex flex-wrap items-center gap-[12px] min-[701px]:gap-[24px]">
          <a href="#package" className={`${button} bg-[#5b2dce] text-white`}>
            Start with this design
            <ArrowIcon direction="up-right" size={18} />
          </a>

          <a
            href={mailto}
            className={`${button} border border-[#00000055] bg-transparent text-[#0a0516]`}
          >
            Talk to our team
            <ArrowIcon direction="up-right" size={18} />
          </a>
        </RevealItem>
      </RevealGroup>
    </section>
  );
}
