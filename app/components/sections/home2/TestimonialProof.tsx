"use client";

import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { RevealGroup, RevealItem } from "../../../features/FeatureReveal";

/**
 * Testimonial proof — ported from `section.testimonial-section` in
 * grsolidvariant.html ("Customer proof bridges the deep examples fold and the
 * quiet FAQ"), which is also where that page's script moves it: right after
 * the examples fold.
 *
 * The cards carry what the source markup carries and nothing else: the opening
 * mark, the quote, and a one-line footer naming who said it.
 *
 * The right column is a continuous upward marquee rather than the source's
 * crossfading stack: the track renders the quote list twice and scrolls by
 * half its height forever, so it reads as an endless column. The marquee
 * itself needs no client state, but below 901px it is swapped for a swipeable
 * Embla carousel of the same quotes, which does — so the section is a client
 * component. The two are mutually exclusive at that step, which is also where
 * the grid goes two-column, so the marquee only ever runs where it was
 * designed to: as the fold's right-hand column.
 *
 * Each card sizes to its own quote, so the window's height sets how much of
 * the column is visible and cards may be part-shown at its edges. On the
 * two-column layout that track also bleeds past the section's vertical padding
 * and runs the full height of the fold, top edge to bottom edge, with the
 * section's `overflow-hidden` clipping the cards at both ends.
 *
 * The stylesheet is desktop-first with max-width overrides at 900px and 760px;
 * those are inverted here into min-width steps, so the base values are the
 * smallest ones. `--fold-radius` is 28px in the base sheet but a later block
 * pins every fold and card to 13px with `!important`, so that is the value
 * used here.
 *
 * Horizontal spacing comes from the shared `.fix` container, which also owns
 * the two-column grid — the section itself only carries the surface, its
 * vertical rhythm (`--section-space`: 56px, 80px from 761px) and a 730px
 * ceiling, past which the fold reads as dead space. The marquee is what the
 * ceiling trims, since the `overflow-hidden` above clips from the bottom and
 * the copy comes first in the flow.
 */

type Quote = {
  text: string;
  source: string;
};

const QUOTES: Quote[] = [
  {
    text: "I finally have a website I’m proud to send people to — and a simple place to keep the enquiries that follow.",
    source: "A Growth Rocket customer",
  },
  {
    text: "It feels like my website, booking requests and customer details are finally connected instead of scattered across different tools.",
    source: "Independent service business owner",
  },
  {
    text: "The best part is that I did not have to figure out the technical side. The setup felt clear, calm and handled.",
    source: "Small business founder",
  },
  {
    text: "Customers can understand what I offer faster, and I have one simple place to follow up when they get in touch.",
    source: "Freelance professional",
  },
];

const HEADING_LINES = ["What", "Business owners", "Say about", "Growth Rocket"];

function QuoteCard({ quote }: { quote: Quote }) {
  return (
    <blockquote className="m-0 rounded-[13px] bg-white px-[24px] pb-[25px] pt-[28px] transition-colors duration-200  md:px-[34px] md:pb-[28px] md:pt-[30px]">
      <span
        aria-hidden
        className="mb-[4px] block text-[58px] leading-[.55] text-[#5b2dce] [font-family:Georgia,serif]"
      >
        “
      </span>

      <p className="m-0 font-bricolage text-[25px] font-semibold leading-[1.2] tracking-[-0.035em] text-[#0a0516] md:text-[clamp(22px,1.75vw,28px)]">
        {quote.text}
      </p>

      <footer className="mt-[22px] font-sans text-[13px] font-semibold leading-normal text-[#625a70]">
        {quote.source}
      </footer>
    </blockquote>
  );
}

function QuoteGroup({ hidden }: { hidden?: boolean }) {
  return (
    <div
      aria-hidden={hidden}
      className="flex flex-col gap-[var(--marquee-gap)]"
    >
      {QUOTES.map((quote, i) => (
        <QuoteCard key={`${quote.source}-${i}`} quote={quote} />
      ))}
    </div>
  );
}

/**
 * BlogTeaser's chevron pill, recoloured for this fold's light surface.
 *
 * Hover is the same move BlogTeaser makes — one step of the pill's own
 * surface, not the yellow accent, which belongs to the cards and CTAs. Here
 * that means resting at a softened white over the grey fold and lifting to
 * pure white with a firmer border and a small shadow, so the feedback reads
 * without introducing a second accent next to the carousel.
 */
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
      aria-label={dir === "prev" ? "Previous testimonial" : "Next testimonial"}
      className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-black/[0.12] bg-white/70 text-[#0a0516] transition-[background-color,border-color,box-shadow] duration-200 hover:border-black/20 hover:bg-white hover:shadow-[0_2px_10px_rgba(10,5,22,0.12)] disabled:pointer-events-none disabled:opacity-40 disabled:shadow-none"
    >
      {dir === "prev" ? (
        <ChevronLeft size={18} strokeWidth={2.25} />
      ) : (
        <ChevronRight size={18} strokeWidth={2.25} />
      )}
    </button>
  );
}

export default function TestimonialProof() {
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
      aria-labelledby="testimonial-heading"
      /* The 730px ceiling exists to trim the marquee, so it is scoped to the
         widths that still run one: below 901px the carousel is as tall as one
         card and the cap would cut the arrows off instead. */
      className="overflow-hidden rounded-[13px] bg-[#eeeeee] py-[56px] text-[#0a0516] md:py-[80px] lg:max-h-[730px]"
    >
      <div className="fix grid grid-cols-1 items-center gap-[28px] md:gap-[34px] lg:grid-cols-[minmax(430px,1fr)_minmax(0,520px)] lg:gap-[clamp(34px,5vw,86px)]">
        {/* The headline already comes as four separate lines, so each one is
            its own item — the nearest thing to a per-word reveal that costs
            nothing here, and it reads as the lines stacking up. */}
        <RevealGroup>
          <h2
            id="testimonial-heading"
            className="m-0 max-w-[720px] font-bricolage text-[40px] font-semibold leading-[1.02] tracking-[-0.045em] md:text-[clamp(42px,4.05vw,62px)]"
          >
            {HEADING_LINES.map((line, i) => (
              <RevealItem
                as="span"
                key={line}
                className={
                  i === HEADING_LINES.length - 1
                    ? "block whitespace-nowrap text-[#5b2dce]"
                    : "block"
                }
              >
                {line}
              </RevealItem>
            ))}
          </h2>

          <RevealItem
            /* aria-hidden lives on the inner row: RevealItem forwards only
               `as`, `media` and `className`. */
            className="mt-[22px] md:mt-[28px]"
          >
          <div
            aria-hidden
            className="flex items-center gap-[16px] text-left"
          >
            <span className="grid h-[54px] w-[54px] flex-none place-items-center rounded-full bg-[#e4fa65] text-[28px] text-[#0a0516] lg:h-[62px] lg:w-[62px] lg:text-[31px]">
              ✳
            </span>
            <b className="font-sans text-[15px] font-semibold leading-[1.4]">
              Less to manage.
              <br />
              More room to build.
            </b>
          </div>
          </RevealItem>
        </RevealGroup>

        {/* The cards size to their own copy, so the window's height is its own
            number rather than a multiple of theirs — roughly two cards' worth,
            larger on phones because the column narrows while the quote type
            barely shrinks, so the same copy wraps to more lines.

            That height has to stay definite at every breakpoint. `overflow`
            does not stop an auto-height box from growing to fit its content,
            so letting this one size itself would make it as tall as the whole
            marquee track and bury the copy column far below the fold.

            From 901px the column also ignores the section's vertical padding
            and runs edge to edge: the negative block margin shrinks its margin
            box by the 80px of padding at each end, so the grid row settles at
            `height - 160px` and the cards span the full fold. */}
        <div
          aria-label="Customer testimonials"
          className="relative hidden h-[720px] max-w-[560px] overflow-hidden [--marquee-duration:26s] [--marquee-gap:20px] md:h-[660px] lg:-my-[80px] lg:block lg:max-w-none"
        >
          {/* Two identical groups, spaced by the same gap they use inside, so
              the keyframe's half-height lift loops without a visible seam. */}
          <div className="gr-marquee-up-track flex flex-col gap-[var(--marquee-gap)]">
            <QuoteGroup />
            <QuoteGroup hidden />
          </div>
        </div>

        {/* Below 901px the same quotes swipe sideways instead. `min-w-0` stops
            the track's intrinsic width from widening the grid column — the
            viewport below is what clips it. */}
        <div
          aria-label="Customer testimonials"
          className="min-w-0 lg:hidden"
        >
          <div className="overflow-hidden pb-1" ref={emblaRef}>
            {/* The -20px/+20px pair is the gutter trick the other home2
                carousels use: padding on each slide makes the gap, the
                negative margin cancels the leading one so the first card
                still starts at the margin. `[&>blockquote]:h-full` squares
                the cards off against the tallest quote without QuoteCard
                having to know it is in a carousel. */}
            <div className="-ml-[20px] flex items-stretch">
              {QUOTES.map((quote, i) => (
                <div
                  key={`${quote.source}-${i}`}
                  className="w-full shrink-0 pl-[20px] [&>blockquote]:h-full"
                >
                  <QuoteCard quote={quote} />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-[20px] flex justify-end gap-[10px]">
            <ArrowButton dir="prev" disabled={!canPrev} onClick={scrollPrev} />
            <ArrowButton dir="next" disabled={!canNext} onClick={scrollNext} />
          </div>
        </div>
      </div>
    </section>
  );
}
