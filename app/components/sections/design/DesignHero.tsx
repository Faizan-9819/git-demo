import { RevealGroup, RevealItem } from "../../../features/FeatureReveal";

/**
 * Design hero — `section.dc-hero.dc-panel` from dentalcare.html, carrying
 * dentalcare.css's own values. Where that sheet states a rule twice (it is
 * written in three passes — a base cut, a "second cut" and a final
 * conversion-focused pass) the value below is the one that actually wins.
 *
 *   .dc-panel        border-radius:13px; margin-bottom:14px
 *                    padding:64px clamp(24px,5vw,80px)
 *   .dc-hero         background:var(--dc-black) #0a0516; color:white
 *                    padding-top:24px; padding-bottom:42px   (second cut)
 *   .dc-hero-grid    grid-template-columns:1.6fr 1fr; gap:65px
 *                    align-items:center
 *   @1000px          gap:35px
 *   @700px           grid-template-columns:1fr; gap:22px
 *   .dc-hero h1      font-size:clamp(40px,4.6vw,66px); line-height:1.01
 *   @700px           44px
 *   .dc-hero h1 span color:var(--dc-green) #e4fa65; font-size:.78em
 *                    white-space:nowrap  →  normal under 1000px
 *   .dc-label        font-size:11px; font-weight:600; letter-spacing:.13em
 *                    line-height:1.4; margin:0 0 20px  (14px under 700px)
 *   .dc-hero .dc-label  color:#c3bdcc
 *   .dc-hero-copy>p  color:#c9c4d3; max-width:370px; font-size:16px
 *   @700px           max-width:none; font-size:14px
 *   .dc-hero-copy strong  font-weight:500; color:white
 *                    text-decoration:underline
 *                    text-decoration-color:var(--dc-green)
 *                    text-underline-offset:5px
 *
 * The breadcrumb is NOT part of this fold — dentalcare.html puts
 * `nav.dc-crumb` after the hero as a direct child of `.dc-main`, and
 * dentalcare.css paints it as its own white bar. See `DesignCrumb`.
 *
 * The one deliberate departure is horizontal spacing: `.dc-panel` insets with
 * `clamp(24px,5vw,80px)` (and a 1350px centring rail above 1550px), and this
 * uses the shared `.fix` rail instead so the page lines up with the rest of
 * the site.
 */
export default function DesignHero({
  title,
  label,
  subline,
  business,
}: {
  title: string;
  label: string;
  subline: string;
  business: string;
}) {
  return (
    <section
      aria-labelledby="design-hero-heading"
      className="overflow-hidden rounded-[13px] bg-[#0a0516] pt-[24px] pb-[42px] text-white"
    >
      <RevealGroup className="fix grid grid-cols-1 items-center gap-[22px] min-[701px]:grid-cols-[1.6fr_1fr] min-[701px]:gap-[35px] min-[1001px]:gap-[65px]">
        <RevealItem>
          <p className="mt-0 mb-[14px] font-sans text-[11px] leading-[1.4] font-semibold tracking-[0.13em] text-[#c3bdcc] uppercase min-[701px]:mb-[20px]">
            {label}
          </p>

          <h1
            id="design-hero-heading"
            className="m-0 font-bricolage text-[44px] leading-[1.01] font-semibold tracking-[-0.045em] text-white min-[701px]:text-[clamp(40px,4.6vw,66px)]"
          >
            {title}.
            <br />
            <span className="text-[0.78em] whitespace-normal text-[#e4fa65] ">
              {subline}
            </span>
          </h1>
        </RevealItem>

        <>
          <p className="m-0 font-sans text-[14px] leading-[1.65] text-[#c9c4d3] min-[701px]:max-w-[370px] min-[701px]:text-[16px]">
            A professional website for your {business}. A complete business
            system with{" "}
            <strong className="font-medium text-white underline decoration-[#e4fa65] underline-offset-[5px]">
              Growth Rocket Hub
            </strong>
            . All maintained for you.
          </p>
        </>
      </RevealGroup>
    </section>
  );
}
