"use client";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Reveal from "../../Reveal";
import { useLanguage } from "../../../i18n/LanguageProvider";
import type { Translation } from "../../../i18n/config";
import { withBreaks } from "@/app/lib/withBreaks";

/**
 * Examples — ported from `section#work.legacy-examples` in grsolidvariant.html.
 *
 * Surface, type and copy now follow that fold: the deep `--gr-deep` (#0a0516)
 * ground instead of the old slate blue, Bricolage for the heading instead of
 * Poppins, and the four cases the HTML actually lists. The later stylesheet
 * blocks are the ones that win there, so this uses their values: every fold and
 * card is pinned to a 13px radius, and the card hover is a lime glow with no
 * lift and no fill change.
 *
 * Two things the HTML renders but never shows: the `EXAMPLES` eyebrow is hidden
 * globally (`.legacy-examples-head>div>p{display:none!important}`), so it is
 * dropped here rather than rendered invisibly.
 *
 * The source list is a plain `overflow-x:auto` strip with decorative arrows —
 * here it stays an Embla carousel driven by those arrows, so nothing scrolls
 * horizontally on its own and no scrollbar appears. The viewport sits inside
 * the fold inset, which is where the cards start at rest in the HTML too.
 *
 * The stylesheet is desktop-first with max-width overrides at 900px, 760px and
 * 520px; those are inverted here into min-width steps, so the base values are
 * the smallest ones. Two deliberate deviations: horizontal spacing comes from
 * the shared `.fix` container rather than the source's own `--fold-inset`, so
 * this fold lines up with every other one on the page; and the head is a column
 * below 761px rather than the source's row, which at phone widths leaves the
 * heading about 190px next to the arrow pair.
 */

const CASES: { name: string; meta: Translation; image: string }[] = [
  {
    name: "TCM Mina",
    meta: {
      en: "Nutrition advice · Austria",
      nl: "Voedingsadvies · Oostenrijk",
    },
    image: "/home/case-tcm-mina.png",
  },
  {
    name: "Motor Expert",
    meta: { en: "Car service · Vienna", nl: "Autoservice · Wenen" },
    image: "/home/case-motorexpert.png",
  },
  {
    name: "Zenwise Academy",
    meta: {
      en: "Language education · Netherlands",
      nl: "Taalonderwijs · Nederland",
    },
    image: "/home/case-zenwise.jpg",
  },
  {
    name: "Seabulk International",
    meta: { en: "Trade & logistics · Dubai", nl: "Handel & logistiek · Dubai" },
    image: "/home/case-seabulk.png",
  },
];

function ArrowButton({
  dir,
  disabled,
  onClick,
}: {
  dir: "prev" | "next";
  disabled: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={dir === "prev" ? "Previous examples" : "Next examples"}
      className="grid h-11 w-11 flex-none cursor-pointer place-items-center rounded-full border border-white/18 bg-white/6 text-white transition-colors hover:bg-white/12 disabled:pointer-events-none disabled:opacity-40"
    >
      {dir === "prev" ? (
        <ChevronLeft size={20} strokeWidth={2.25} />
      ) : (
        <ChevronRight size={20} strokeWidth={2.25} />
      )}
    </button>
  );
}

export default function Examples() {
  const { t } = useLanguage();
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
  });

  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section
      id="voorbeelden"
      aria-labelledby="examples-heading"
      className="relative overflow-hidden rounded-[13px] bg-[#0a0516] py-[56px] min-[761px]:pt-[80px] min-[761px]:pb-[64px]"
    >
      <div className="fix flex flex-col gap-[24px] min-[761px]:flex-row min-[761px]:items-end min-[761px]:justify-between min-[761px]:gap-[30px]">
        <div>
          <h2
            id="examples-heading"
            className="m-0 font-bricolage text-[31px] font-semibold leading-[1.1] tracking-[-0.04em] text-white min-[521px]:text-[clamp(40px,4vw,58px)]"
          >
            {withBreaks(
              t({
                en: "Real businesses.<br/>Beautiful first impressions.",
                nl: "Echte ondernemers.<br/>Een sterke eerste indruk.",
              }),
            )}
          </h2>
          <span className="mt-[15px] block font-sans text-[16px] leading-[1.6] text-[#c9c2d4]">
            {t({
              en: "Built around each business, its people and its purpose.",
              nl: "Gebouwd rond elk bedrijf, de mensen en het doel erachter.",
            })}
          </span>
        </div>

        <div className="flex gap-[10px] self-end">
          <ArrowButton dir="prev" disabled={!canPrev} onClick={scrollPrev} />
          <ArrowButton dir="next" disabled={!canNext} onClick={scrollNext} />
        </div>
      </div>

      <div className="fix mt-[18px]">
        {/* Embla's viewport does the clipping, so the strip never becomes a
            scroll container of its own — no horizontal scrollbar, on any
            platform that draws them persistently.

            That clip would also cut the hover glow off the card sitting at
            either edge, so the viewport is inset by one gap's worth (20px) in
            every direction and pulled back out horizontally, which leaves the
            glow room to spread while the cards still line up with `.fix`.
            20px is the most it can take: at any snap the neighbouring card's
            edge lands exactly on that boundary, so a wider inset would let a
            slide show outside the container. */}
        <div className="-mx-5 overflow-hidden p-5" ref={emblaRef}>
          <div className="flex gap-[20px]">
            {CASES.map((c, i) => (
              /* Cards are sized as a share of the track, not the source's flat
                 400px: at `--content-width` (1180px) three 400px cards plus
                 their gaps overflow, which cut the third one. */
              <div
                key={c.name}
                className="min-w-0 flex-none basis-full min-[641px]:basis-[calc((100%-20px)/2)] min-[901px]:basis-[calc((100%-40px)/3)]"
              >
                <Reveal
                  delay={Math.min(i * 0.05, 0.2)}
                  className="flex h-full flex-col rounded-[13px] border border-white/10 bg-white/6 p-5 transition-shadow duration-200 hover:shadow-[0_0_0_1px_rgba(228,250,101,0.34),0_0_18px_rgba(228,250,101,0.24),0_0_42px_rgba(228,250,101,0.18)]"
                >
                  <div className="relative aspect-[3/2] overflow-hidden rounded-[13px]">
                    <Image
                      src={c.image}
                      alt={`${c.name} website`}
                      fill
                      sizes="(min-width: 901px) 380px, (min-width: 641px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="grid gap-[4px] px-[6px] pt-[16px] pb-[4px] text-white">
                    <strong className="font-sans text-[17px] font-bold">
                      {c.name}
                    </strong>
                    <span className="font-sans text-[13px] text-[#c9c2d4]">
                      {t(c.meta)}
                    </span>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
