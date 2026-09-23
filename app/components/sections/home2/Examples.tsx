"use client";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { RevealGroup, RevealItem } from "../../../features/FeatureReveal";
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
 * lift. The glow now comes with a fill flip to that same lime, matching the
 * cards in BlogTeaser — a deliberate step past the source, which leaves the
 * card dark.
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
 * this fold lines up with every other one on the page; and the arrow pair only
 * keeps the source's place in the head from `md` up. Below that the head is a
 * column — `.legacy-examples-head` stays a `space-between` row at every width,
 * which at phone widths leaves the heading about 190px next to the arrows — and
 * the pair moves under the cards at the right edge instead.
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
      className="relative overflow-hidden rounded-[13px] bg-[#0a0516] py-[56px] md:pt-[80px] md:pb-[64px]"
    >
      {/* `.legacy-examples-head`: a `space-between` row with the copy on the
          left and `.legacy-arrows` on the right, both bottom-aligned
          (`align-items:end`) and 30px apart. That row is kept from `md` up; the
          copy column below it is what the source's own head holds. */}
      <RevealGroup className="fix md:flex md:items-end md:justify-between md:gap-[30px]">
        <div>
          <RevealItem>
            <h2
              id="examples-heading"
              className="m-0 font-bricolage text-[31px] font-semibold leading-[1.1] tracking-[-0.04em] text-white xs:text-[clamp(40px,4vw,58px)]"
            >
              {withBreaks(
                t({
                  en: "Real businesses.<br/>Beautiful first impressions.",
                  nl: "Echte ondernemers.<br/>Een sterke eerste indruk.",
                }),
              )}
            </h2>
          </RevealItem>
          <RevealItem
            as="span"
            className="mt-[15px] block font-sans text-[16px] leading-[1.6] text-[#c9c2d4]"
          >
            {t({
              en: "Built around each business, its people and its purpose.",
              nl: "Gebouwd rond elk bedrijf, de mensen en het doel erachter.",
            })}
          </RevealItem>
        </div>

        {/* The source's arrow slot. Hidden below `md`, where the pair under the
            cards takes over — the two are the same control, never both shown. */}
        <RevealItem className="hidden flex-none gap-[10px] md:flex">
          <ArrowButton dir="prev" disabled={!canPrev} onClick={scrollPrev} />
          <ArrowButton dir="next" disabled={!canNext} onClick={scrollNext} />
        </RevealItem>
      </RevealGroup>

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
          {/* The per-card `delay` the slides used to carry is the group's
              stagger now. It is tighter than the fold default because only the
              first two or three cards are ever on screen — the rest arrive by
              arrow, already revealed. */}
          <RevealGroup stagger={0.05} className="flex gap-[20px]">
            {CASES.map((c) => (
              /* Cards are sized as a share of the track, not the source's flat
                 400px: at `--content-width` (1180px) three 400px cards plus
                 their gaps overflow, which cut the third one. */
              <div
                key={c.name}
                className="min-w-0 flex-none basis-full sm:basis-[calc((100%-20px)/2)] lg:basis-[calc((100%-40px)/3)]"
              >
                <RevealItem
                  media
                  /* Same card hover as BlogTeaser: the lime glow plus a fill
                     flip to that same lime, with the two lines of copy going
                     dark against it. Fill, glow and both colours share one
                     300ms ease-out so the card turns over as a single piece —
                     `transition-shadow` on its own left the fill snapping in
                     while the glow was still arriving. */
                  className="group flex h-full flex-col rounded-[13px] border border-white/10 bg-white/6 p-5 transition-[background-color,box-shadow] duration-300 ease-out hover:bg-[#e4fa65] hover:shadow-[0_0_0_1px_rgba(228,250,101,0.34),0_0_18px_rgba(228,250,101,0.24),0_0_42px_rgba(228,250,101,0.18)]"
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
                  {/* Both lines go to the card ground (#151021) against the
                      lime. BlogTeaser sends its secondary line to violet
                      instead, but here that line is the case's trade and
                      country — plain metadata, not a link — and violet on lime
                      read as a second accent competing with the name. */}
                  <div className="grid gap-[4px] px-[6px] pt-[16px] pb-[4px] text-white">
                    <strong className="font-sans text-[17px] font-bold transition-colors duration-300 ease-out group-hover:text-[#151021]">
                      {c.name}
                    </strong>
                    <span className="font-sans text-[13px] text-[#c9c2d4] transition-colors duration-300 ease-out group-hover:text-[#151021]">
                      {t(c.meta)}
                    </span>
                  </div>
                </RevealItem>
              </div>
            ))}
          </RevealGroup>
        </div>

        {/* Phones only: the controls sit under the cards at the right edge,
            where the head has no room for them. The viewport's own 20px of
            bottom padding already stands in for most of the gap, so only the
            remainder is added here. */}
        <div className="mt-[4px] flex justify-end gap-[10px] md:hidden">
          <ArrowButton dir="prev" disabled={!canPrev} onClick={scrollPrev} />
          <ArrowButton dir="next" disabled={!canNext} onClick={scrollNext} />
        </div>
      </div>
    </section>
  );
}
