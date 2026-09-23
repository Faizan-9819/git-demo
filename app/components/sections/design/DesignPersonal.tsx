import Image from "next/image";
import { RevealGroup, RevealItem } from "../../../features/FeatureReveal";

/**
 * "Your business. Your identity. Your website." — `section.dc-personal.dc-panel`
 * from dentalcare.html, carrying dentalcare.css's own values (final pass).
 *
 *   .dc-personal          background:#eeeeef; display:grid
 *                         grid-template-columns:.85fr 1.15fr; gap:48px
 *                         align-items:center
 *   @700px                1fr; gap:28px
 *   .dc-personal h2       font-size:clamp(26px,3.1vw,44px)
 *   @700px                clamp(25px,6.3vw,38px)
 *   h2 .dc-personal-first-line  color:var(--dc-black); white-space:nowrap
 *                         (normal from 1100px down)
 *   .dc-personal h2 span  color:var(--dc-purple) #5b2dce
 *   .dc-personal-image    position:relative; align-self:stretch; height:100%
 *   @1000px               min-height:440px
 *   @700px                height:280px; min-height:280px
 *   .dc-personal-image img    absolute; inset:0; object-fit:cover
 *                         border-radius:13px
 *   .dc-personal-image>span   absolute; bottom/left/right:18px
 *                         background:#fffffff0; border-radius:8px
 *                         padding:13px 16px; font-size:12px
 *   .dc-personal>div>p    margin-top:22px; color:#655f6c
 *   .dc-list              list-style:none; margin:18px 0; padding:0
 *   .dc-list li           padding:10px 0 10px 25px; position:relative
 *                         font-size:14px; line-height:1.5
 *   .dc-list li+li        border-top:1px solid #0002
 *   .dc-list li:before    a 10x6 box with left+bottom 1.7px borders rotated
 *                         -45deg — a CSS tick, not a glyph — at left:3px
 *                         top:16px, border-color:var(--dc-purple)
 *
 * The list is a single column, which is what `li+li{border-top}` draws as a
 * divided stack.
 *
 * dentalcare.html points the picture at `assets/dental-practice.webp`, which
 * this repo does not carry; the template's own still stands in.
 *
 * As everywhere else on this page, the horizontal inset is the shared `.fix`
 * rail rather than `.dc-panel`'s `clamp(24px,5vw,80px)`.
 */
export default function DesignPersonal({
  title,
  business,
  img,
  items,
}: {
  title: string;
  business: string;
  img: string;
  items: string[];
}) {
  return (
    <section
      aria-labelledby="design-personal-heading"
      className="rounded-[13px] bg-[#eeeeef] py-[34px] text-[#0a0516] min-[701px]:py-[64px]"
    >
      <RevealGroup className="fix grid grid-cols-1 items-center gap-[28px] min-[701px]:grid-cols-[0.85fr_1.15fr] min-[701px]:gap-[48px]">
        {/* .dc-personal-image */}
        <RevealItem
          media
          className="relative h-[280px] min-h-[280px] w-full self-stretch min-[701px]:h-full min-[701px]:min-h-[440px] min-[1001px]:min-h-0"
        >
          <Image
            src={img}
            alt={`${title} design, shown as it would look for your ${business}`}
            fill
            sizes="(max-width: 700px) 100vw, 42vw"
            className="absolute inset-0 h-full w-full rounded-[13px] object-cover"
          />
          <span className="absolute right-[18px] bottom-[18px] left-[18px] rounded-[8px] bg-white/[0.94] px-[16px] py-[13px] font-sans text-[12px] leading-[1.5] text-[#0a0516]">
            {title}, shaped around your {business}.
          </span>
        </RevealItem>

        <div className="min-w-0">
          <RevealItem>
            <h2
              id="design-personal-heading"
              className="m-0 font-bricolage text-[clamp(25px,6.3vw,38px)] leading-[1.08] font-semibold tracking-[-0.045em] min-[701px]:text-[clamp(26px,3.1vw,44px)]"
            >
              <span className="text-[#0a0516] min-[1101px]:whitespace-nowrap">
                Your {business}. Your identity.
              </span>
              <br />
              <span className="text-[#5b2dce]">Your website.</span>
            </h2>
          </RevealItem>

          <RevealItem
            as="p"
            className="mt-[22px] mb-0 font-sans text-[16px] leading-[1.65] text-[#655f6c]"
          >
            The design is your starting point. We shape the website around the
            people, services and details that make your {business} yours.
          </RevealItem>

          {/* .dc-list — the tick is the source's rotated two-border box. */}
          <RevealItem>
            <ul className="my-[18px] list-none p-0">
              {items.map((item) => (
                <li
                  key={item}
                  className="relative py-[10px] pl-[25px] font-sans text-[14px] leading-[1.5] not-first:border-t not-first:border-[#00000022]"
                >
                  <span
                    aria-hidden="true"
                    className="absolute top-[16px] left-[3px] h-[6px] w-[10px] -rotate-45 border-b-[1.7px] border-l-[1.7px] border-[#5b2dce]"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </RevealItem>
        </div>
      </RevealGroup>
    </section>
  );
}
