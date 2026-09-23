import DesignBillingCard from "./DesignBillingCard";
import { RevealGroup, RevealItem } from "../../../features/FeatureReveal";

/**
 * "Your design is just the beginning." — `section.dc-package.dc-panel#package`
 * from dentalcare.html, carrying dentalcare.css's own values (final pass).
 *
 *   .dc-package           background:var(--dc-green) #e4fa65; display:grid
 *                         grid-template-columns:1.15fr .85fr; gap:80px
 *                         align-items:center
 *   @1000px               gap:35px
 *   @700px                1fr; gap:28px
 *   >div:first-child h2   font-size:clamp(26px,2.45vw,37px)
 *                         white-space:nowrap  (normal from 1100px down)
 *   @700px                30px
 *   >div:first-child>p    max-width:none; margin-top:20px; line-height:1.6
 *   .dc-package-pillars   list-style:none; margin:32px 0 0
 *                         grid-template-columns:repeat(3,minmax(0,1fr))
 *                         gap:22px
 *   @1100px               gap:12px
 *   @700px                1fr; gap:14px; margin-top:24px
 *   .dc-package-pillars li+li   border-left:1px solid #35401135
 *                         padding-left:20px  (12px at 1100px)
 *   @700px                border-left:0; padding:14px 0 0
 *                         border-top:1px solid #35401135
 *   .dc-package-pillars h3   font-size:20px; line-height:1.18
 *                         letter-spacing:-.035em; margin:0 0 12px
 *   @1100px               18px      @700px  21px; margin-bottom:6px
 *   .dc-package-pillars p font-size:13px; line-height:1.6; color:#45482d
 *   @1100px               12px      @700px  14px
 *
 * The pillars are dividers, not cards — `li+li{border-left}` is the only
 * separation between them.
 *
 * As everywhere else on this page, the horizontal inset is the shared `.fix`
 * rail rather than `.dc-panel`'s `clamp(24px,5vw,80px)`.
 */

const PILLARS = [
  {
    title: "A professional website",
    body: "Tailored to your business and the people you serve.",
  },
  {
    title: "Growth Rocket Hub",
    body: "Your complete business system, connected to your website.",
  },
  {
    title: "All maintained for you",
    body: "Hosting, SSL, technical maintenance and ongoing support.",
  },
];

export default function DesignPackage({ title }: { title: string }) {
  return (
    <section
      id="package"
      aria-labelledby="design-package-heading"
      className="overflow-hidden rounded-[13px] bg-[#e4fa65] py-[34px] text-[#0a0516] min-[701px]:py-[64px]"
    >
      <div className="fix grid grid-cols-1 items-center gap-[28px] min-[701px]:grid-cols-[1.15fr_0.85fr] min-[701px]:gap-[35px] min-[1101px]:gap-[80px]">
        <RevealGroup className="min-w-0">
          <RevealItem>
            <h2
              id="design-package-heading"
              className="m-0 font-bricolage text-[30px] leading-[1.08] font-semibold tracking-[-0.045em] min-[701px]:text-[clamp(26px,2.45vw,37px)] min-[1101px]:whitespace-nowrap"
            >
              Your design is just the beginning.
            </h2>
          </RevealItem>

          <RevealItem
            as="p"
            className="mt-[20px] mb-0 font-sans text-[16px] leading-[1.6]"
          >
            Your professional website, complete business system and ongoing
            technical care. All in one managed package.
          </RevealItem>

          {/* .dc-package-pillars */}
          <RevealItem>
            <ul className="mt-[24px] mb-0 grid list-none grid-cols-1 gap-[14px] p-0 min-[701px]:mt-[32px] min-[701px]:grid-cols-3 min-[701px]:gap-[12px] min-[1101px]:gap-[22px]">
              {PILLARS.map((pillar, i) => (
                <li
                  key={pillar.title}
                  className={
                    "min-w-0 " +
                    (i > 0
                      ? "border-t border-[#35401135] pt-[14px] min-[701px]:border-t-0 min-[701px]:border-l min-[701px]:border-l-[#35401135] min-[701px]:pt-0 min-[701px]:pl-[12px] min-[1101px]:pl-[20px]"
                      : "")
                  }
                >
                  <h3 className="mt-0 mb-[6px] font-bricolage text-[21px] leading-[1.18] font-semibold tracking-[-0.035em] min-[701px]:mb-[12px] min-[701px]:text-[18px] min-[1101px]:text-[20px]">
                    {pillar.title}
                  </h3>
                  <p className="m-0 font-sans text-[14px] leading-[1.6] text-[#45482d] min-[701px]:text-[12px] min-[1101px]:text-[13px]">
                    {pillar.body}
                  </p>
                </li>
              ))}
            </ul>
          </RevealItem>
        </RevealGroup>

        <div className="min-w-0">
          <DesignBillingCard
            ctaLabel={`Start with ${title}`}
            ctaHref={`mailto:sales@getgrowthrocket.com?subject=${encodeURIComponent(
              `Get started with ${title}`,
            )}`}
          />
        </div>
      </div>
    </section>
  );
}
