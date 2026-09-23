import Image from "next/image";
import Link from "next/link";
import ArrowIcon from "../../ui/ArrowIcon";
import { RevealGroup, RevealItem } from "../../../features/FeatureReveal";
import type { Template } from "../../../designs/templates-data";

/**
 * "Another look for your business." — `section.dc-related.dc-open` from
 * dentalcare.html, carrying dentalcare.css's own values (final pass).
 *
 *   .dc-related           display:block  (the earlier grid is overridden)
 *   .dc-related h2        font-size:36px
 *   .dc-related .dc-section-top   margin-bottom:30px
 *   .dc-dental-concepts   grid-template-columns:1fr 1fr; gap:24px
 *   @700px                1fr
 *   article               border:1px solid #dedce2; border-radius:13px
 *                         overflow:hidden
 *   .dc-concept-art       grid-template-columns:1.1fr 1fr; gap:20px
 *                         align-items:center; padding:30px; min-height:240px
 *   @1000px               padding:20px; gap:14px      @700px  padding:24px
 *   .dc-concept-warm      background:#f3eee6; color:#45483a
 *   .dc-concept-clean     background:#e9f0ed; color:#173d35
 *   .dc-concept-art img   width:100%; height:200px; object-fit:cover
 *                         border-radius:40px 40px 8px 8px   (190px <700px)
 *   .dc-concept-art span  font-size:8px; letter-spacing:.13em
 *   .dc-concept-art strong    display:block; font-size:28px; line-height:1.1
 *                         font-weight:500; letter-spacing:-.04em; margin:18px 0
 *   @1000px               24px      @700px  27px
 *   .dc-concept-art i     font-size:8px; font-style:normal; background:#fff9
 *                         border-radius:20px; padding:8px; inline-block
 *   .dc-concept-caption   padding:21px; flex; gap:15px; align-items:start
 *                         justify-content:space-between
 *   @1000px               flex-direction:column     @700px  row
 *   .dc-concept-caption h3    font-size:22px
 *   .dc-concept-caption p     font-size:12px; color:#655f6c; margin-top:8px
 *   .dc-concept-caption>span  font-size:9px; white-space:nowrap
 *                         color:#655f6c; border:1px solid #ddd
 *                         padding:4px 8px; border-radius:30px
 *
 * The card shape is the source's. What fills it is not: dentalcare.html's two
 * cards are its own words for designs that do not exist ("concept previews for
 * this first cut"), and this route has sixteen that do, with their own
 * screenshots and taglines. So the two cards are real templates and their
 * captions link somewhere — the warm tint on the first, the clean on the
 * second, exactly as the source alternates them.
 *
 * As everywhere else on this page, the horizontal inset is the shared `.fix`
 * rail rather than `.dc-open`'s `clamp(24px,5vw,80px)`.
 */

const TONES = [
  { art: "bg-[#f3eee6] text-[#45483a]", pill: "bg-white/60" },
  { art: "bg-[#e9f0ed] text-[#173d35]", pill: "bg-white/60" },
];

export default function DesignRelated({
  heading,
  intro,
  templates,
}: {
  heading: [string, string];
  intro: string;
  templates: Template[];
}) {
  /* The grid is a fixed 1fr 1fr, so it takes two. */
  const pair = templates.slice(0, 2);
  if (pair.length === 0) return null;

  return (
    <section
      aria-labelledby="design-related-heading"
      className="py-[44px] text-[#0a0516] min-[701px]:py-[76px]"
    >
      <div className="fix">
        {/* .dc-section-top */}
        <RevealGroup className="mb-[30px] grid grid-cols-1 items-end gap-[28px] min-[701px]:grid-cols-[1.2fr_1fr] min-[701px]:gap-[35px] min-[1001px]:gap-[70px]">
          <RevealItem>
            <h2
              id="design-related-heading"
              className="m-0 font-bricolage text-[34px] leading-[1.08] font-semibold tracking-[-0.045em] min-[701px]:text-[36px]"
            >
              {heading[0]}
              <br />
              {heading[1]}
            </h2>
          </RevealItem>

          <RevealItem
            as="p"
            className="m-0 max-w-[450px] font-sans text-[16px] leading-[1.65] text-[#655f6c]"
          >
            {intro}
          </RevealItem>
        </RevealGroup>

        {/* .dc-dental-concepts */}
        <RevealGroup
          amount={0.1}
          stagger={0.06}
          className="grid grid-cols-1 gap-[24px] min-[701px]:grid-cols-2"
        >
          {pair.map((t, i) => (
            <RevealItem
              key={t.slug}
              as="article"
              media
              className="min-w-0 overflow-hidden rounded-[13px] border border-[#dedce2]"
            >
              {/* `arrow-cta-host`: the "View design" pill is the card's only
                  CTA, so hovering anywhere on the card plays its arrow swap —
                  the same pairing home2's BlogTeaser cards use. */}
              <Link
                href={`/designs/${t.slug}`}
                className="arrow-cta-host group block"
              >
                {/* .dc-concept-art */}
                <div
                  className={`grid min-h-[240px] grid-cols-[1.1fr_1fr] items-center gap-[14px] p-[24px] min-[701px]:gap-[20px] min-[1001px]:p-[30px] ${TONES[i % 2].art}`}
                >
                  <div className="min-w-0">
                    <span className="block font-sans text-[8px] tracking-[0.13em] uppercase">
                      {t.subtitle}
                    </span>
                    <strong className="my-[18px] block font-bricolage text-[27px] leading-[1.1] font-medium tracking-[-0.04em] min-[1001px]:text-[28px]">
                      {t.title}
                    </strong>
                    <i
                      className={`arrow-cta inline-flex items-center gap-[5px] rounded-[20px] p-[8px] text-[8px] not-italic ${TONES[i % 2].pill}`}
                    >
                      View design
                      <ArrowIcon direction="up-right" size={10} />
                    </i>
                  </div>

                  <div className="relative h-[190px] w-full overflow-hidden rounded-t-[40px] rounded-b-[8px] min-[701px]:h-[200px]">
                    <Image
                      src={t.img}
                      alt={`${t.title} website design`}
                      fill
                      sizes="(max-width: 700px) 50vw, 25vw"
                      className="object-cover object-top transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
                    />
                  </div>
                </div>

                {/* .dc-concept-caption */}
                <div className="flex flex-col items-start justify-between gap-[15px] bg-white p-[21px] min-[701px]:flex-row min-[1001px]:flex-col min-[1101px]:flex-row">
                  <div className="min-w-0">
                    <h3 className="m-0 font-bricolage text-[22px] leading-[1.16] font-semibold">
                      {t.title}
                    </h3>
                    <p className="mt-[8px] mb-0 font-sans text-[12px] leading-[1.6] text-[#655f6c]">
                      {t.tagline}
                    </p>
                  </div>

                  <span className="shrink-0 rounded-[30px] border border-[#dddddd] px-[8px] py-[4px] font-sans text-[9px] whitespace-nowrap text-[#655f6c]">
                    {t.subtitle} design
                  </span>
                </div>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
