// "use client";
// import { useCallback, useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import useEmblaCarousel from "embla-carousel-react";
// import Reveal from "../../Reveal";
// import ArrowIcon from "../../ui/ArrowIcon";
// import EyebrowLabel from "../../ui/EyebrowLabel";
// import { useLanguage } from "../../../i18n/LanguageProvider";
// import { localizedHref } from "../../../i18n/locale-href";
// import type { Translation } from "../../../i18n/config";
//
// const POSTS: { title: Translation; image: string }[] = [
//   {
//     title: {
//       en: "Getting an electrician website built in 7 days",
//       nl: "Elektricienwebsite laten maken in 7 dagen",
//     },
//     image: "/home/blog-elektricien-7-dagen.jpg",
//   },
//   {
//     title: {
//       en: "From lecture hall to first client: starting your business right after graduating",
//       nl: "Van collegezaal naar eerste klant: zo start je direct na je studie je eerste bedrijf",
//     },
//     image: "/home/blog-eerste-bedrijf.jpg",
//   },
//   {
//     title: {
//       en: "A professional website that convinces customers. Tools that keep your business running",
//       nl: "Een professionele website die klanten overtuigt. Tools die je bedrijf draaiende houden",
//     },
//     image: "/home/blog-schoonmaak.jpg",
//   },
//   {
//     title: {
//       en: "How long does it take to get an electrician website built?",
//       nl: "Hoe lang duurt het om een elektricienwebsite te laten maken?",
//     },
//     image: "/home/blog-hoelang-elektricienwebsite.jpg",
//   },
// ];
//
// function ArrowButton({
//   dir,
//   disabled,
//   onClick,
// }: {
//   dir: "prev" | "next";
//   disabled: boolean;
//   onClick: () => void;
// }) {
//   return (
//     <button
//       type="button"
//       onClick={onClick}
//       disabled={disabled}
//       aria-label={dir === "prev" ? "Previous" : "Next"}
//       className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-[var(--color-slate-200)] bg-white text-[var(--color-haiti)] transition-colors hover:bg-[var(--color-violet-98)] disabled:pointer-events-none disabled:opacity-40"
//     >
//       {dir === "prev" ? (
//         <ChevronLeft size={18} strokeWidth={2.25} />
//       ) : (
//         <ChevronRight size={18} strokeWidth={2.25} />
//       )}
//     </button>
//   );
// }
//
// export default function BlogTeaser() {
//   const { t, locale } = useLanguage();
//   const [emblaRef, emblaApi] = useEmblaCarousel({
//     align: "start",
//     loop: true,
//   });
//
//   const [canPrev, setCanPrev] = useState(false);
//   const [canNext, setCanNext] = useState(false);
//
//   const onSelect = useCallback(() => {
//     if (!emblaApi) return;
//     setCanPrev(emblaApi.canScrollPrev());
//     setCanNext(emblaApi.canScrollNext());
//   }, [emblaApi]);
//
//   useEffect(() => {
//     if (!emblaApi) return;
//     onSelect();
//     emblaApi.on("select", onSelect);
//     emblaApi.on("reInit", onSelect);
//   }, [emblaApi, onSelect]);
//
//   const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
//   const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
//
//   return (
//     <section className="relative overflow-hidden rounded-[28px] bg-[var(--color-violet-98)] fix-wide py-[50px] lg:py-28 flex flex-col gap-5 lg:gap-11">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-8 items-end">
//         <div className="flex flex-col gap-3.5 max-w-140">
//           <EyebrowLabel align="left">
//             {t({ en: "Blog", nl: "Blog" })}
//           </EyebrowLabel>
//           <h2 className="m-0 font-poppins font-bold text-[clamp(28px,3.2vw,40px)] leading-[1.12] tracking-[-1px] text-[var(--color-haiti)]">
//             {t({
//               en: "Discover the latest articles",
//               nl: "Ontdek de laatste artikelen",
//             })}
//           </h2>
//         </div>
//         <div className="flex gap-[10px] justify-self-end">
//           <ArrowButton dir="prev" disabled={!canPrev} onClick={scrollPrev} />
//           <ArrowButton dir="next" disabled={!canNext} onClick={scrollNext} />
//         </div>
//       </div>
//
//       <div className="overflow-hidden pb-1" ref={emblaRef}>
//         <div className="flex -ml-5">
//           {POSTS.concat(POSTS).map((post, i) => (
//             <div
//               key={`${post.title.en}-${i}`}
//               className="shrink-0 w-full pl-5 sm:w-1/3"
//             >
//               <Reveal
//                 delay={Math.min(i * 0.05, 0.2)}
//                 className="flex h-full flex-col gap-4 rounded-[26px] border border-[var(--color-mist)] bg-white p-5 pb-[26px]"
//               >
//                 <div className="relative rounded-[18px] overflow-hidden h-[190px]">
//                   <Image
//                     src={post.image}
//                     alt={t(post.title)}
//                     fill
//                     sizes="(max-width: 640px) 100vw, 380px"
//                     className="object-cover"
//                   />
//                 </div>
//                 <div className="flex flex-1 flex-col gap-3 px-[6px]">
//                   <h3
//                     className="m-0 text-[20px] font-semibold leading-[1.25] tracking-[-0.3px] font-poppins text-[var(--color-haiti)]"
//                     dangerouslySetInnerHTML={{ __html: t(post.title) }}
//                   ></h3>
//                   <Link
//                     href={localizedHref("/blog", locale)}
//                     className="arrow-cta mt-auto inline-flex items-center gap-[8px] self-start font-poppins text-[14px] font-semibold text-[var(--color-violet-42)]"
//                   >
//                     {t({ en: "Read more", nl: "Lees meer" })}
//                     <ArrowIcon direction="right" size={14} />
//                   </Link>
//                 </div>
//               </Reveal>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

/**
 * Ported from `section#guides.legacy-blog` — the "Helpful ideas for your next
 * step." fold in grsolidvariant.html.
 *
 * The source sheet paints this fold three times over, so the values below are
 * the *resolved* ones rather than what the first `.legacy-blog` rules say:
 *
 * - The fold is deep `#0a0516` on white text. The base rule sets lavender
 *   `#f5f3ff` and a later colour block repeats it, but the last block that
 *   touches the fold flips it to `var(--gr-deep)!important`.
 * - Cards are `#151021` with a 12%-white hairline, not white on `#e6eefe`.
 * - Card links are lime `#e4fa65`; the headline and card titles are pure white.
 * - The "FROM THE BLOG" eyebrow is dropped: `.legacy-section-head>div>p` is
 *   `display:none!important` further down the sheet. The head then collapses to
 *   a single full-width column (`grid-template-columns:1fr!important`), so the
 *   headline is all that is left of it.
 * - The headline is Bricolage 600 at `clamp(40px,4vw,58px)` / 1.1 / -.04em from
 *   the shared `.legacy-section-head h2` rule, and holds one line
 *   (`white-space:nowrap`) until the 760px step releases it.
 * - Every box lands on the 13px global radius standard — the card and its 190px
 *   image alike. Arrow buttons stay circular ("intentional circles stay
 *   circular").
 *
 * Content is the source's: its headline and its three cards with their titles,
 * alt text and `#contact` "Read more" links, replacing the four real blog posts
 * the previous version listed. The source inlines its photos as base64, so each
 * is mapped to the nearest existing local asset — swap the three `image` values
 * for the real artwork when it lands.
 *
 * Kept exactly as it was, as asked: the carousel. Same Embla setup (aligned
 * left, looping), the same doubled track, the same three-per-view sizing from
 * `sm` up, and the same arrow pair in the head — only repainted for the dark
 * fold. That is also why the head keeps two columns on desktop where the source
 * has one: the arrows need the right-hand side.
 *
 * The source sheet is desktop-first with max-width steps at 900px and 760px;
 * those are inverted into min-width steps here.
 */

"use client";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Reveal from "../../Reveal";
import ArrowIcon from "../../ui/ArrowIcon";
import { useLanguage } from "../../../i18n/LanguageProvider";
import type { Translation } from "../../../i18n/config";

/** The three cards the source markup ships, in its order. */
const POSTS: {
  title: Translation;
  alt: string;
  image: string;
  href: string;
}[] = [
  {
    title: {
      en: "What your first business website really needs.",
      nl: "Wat je eerste zakelijke website echt nodig heeft.",
    },
    alt: "Business owner working",
    image: "/home/waarom-ondernemer.png",
    href: "#contact",
  },
  {
    title: {
      en: "Make the next step easy for your customers.",
      nl: "Maak de volgende stap makkelijk voor je klanten.",
    },
    alt: "Customer conversation",
    image: "/home/blog-eerste-bedrijf.jpg",
    href: "#contact",
  },
  {
    title: {
      en: "From first enquiry to invoice. Keep it together.",
      nl: "Van eerste aanvraag tot factuur. Houd het bij elkaar.",
    },
    alt: "Business workspace",
    image: "/home/blog-schoonmaak.jpg",
    href: "#contact",
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
      aria-label={dir === "prev" ? "Previous" : "Next"}
      className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/[0.12] bg-[#151021] text-white transition-colors hover:bg-[#1f1830] disabled:pointer-events-none disabled:opacity-40"
    >
      {dir === "prev" ? (
        <ChevronLeft size={18} strokeWidth={2.25} />
      ) : (
        <ChevronRight size={18} strokeWidth={2.25} />
      )}
    </button>
  );
}

export default function BlogTeaser() {
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
      id="guides"
      aria-labelledby="guides-heading"
      className="relative overflow-hidden rounded-[13px] bg-[#0a0516] py-[56px] text-white min-[761px]:py-[80px]"
    >
      <div className="fix">
        {/* `.legacy-blog .legacy-section-head` is `align-items:center`; the
            right-hand column here holds the carousel arrows rather than the
            copy the other folds put there. */}
        <div className="grid grid-cols-1 items-center gap-[18px] md:grid-cols-[1fr_auto] md:gap-[42px]">
          <h2
            id="guides-heading"
            className="m-0 font-bricolage text-[clamp(40px,4vw,58px)] font-semibold leading-[1.1] tracking-[-0.04em] text-white min-[761px]:whitespace-nowrap"
          >
            {t({
              en: "Helpful ideas for your next step.",
              nl: "Handige ideeën voor je volgende stap.",
            })}
          </h2>

          <div className="flex gap-[10px] md:justify-self-end">
            <ArrowButton dir="prev" disabled={!canPrev} onClick={scrollPrev} />
            <ArrowButton dir="next" disabled={!canNext} onClick={scrollNext} />
          </div>
        </div>

        {/* `.legacy-blog-grid`: 44px below the head, three columns from 900px up
            with a 20px gutter — reproduced here as the carousel's slide width
            and the negative-margin gutter the track already used. */}
        {/* The viewport's clip would cut the hover glow off whichever card sits
            at an edge, so — as in Examples — it is padded by one gutter's worth
            (20px) all round and pulled back out by the same amount, leaving the
            glow room to spread while the cards stay aligned to `.fix` and the
            44px gap below the head is preserved (24 + 20). The bottom keeps the
            4px the old `pb-1` gave the Reveal animation. */}
        <div
          className="mt-[24px] -mx-[20px] -mb-[16px] overflow-hidden p-[20px]"
          ref={emblaRef}
        >
          <div className="-ml-[20px] flex">
            {POSTS.concat(POSTS).map((post, i) => (
              <div
                key={`${post.title.en}-${i}`}
                className="w-full shrink-0 pl-[20px] sm:w-1/3"
              >
                <Reveal
                  delay={Math.min(i * 0.05, 0.2)}
                  /* Same card hover as Examples: a lime (#e4fa65) glow, no
                     lift and no fill change. */
                  className="flex h-full flex-col gap-[16px] rounded-[13px] border border-white/[0.12] bg-[#151021] px-[20px] pt-[20px] pb-[24px] transition-shadow duration-200 hover:shadow-[0_0_0_1px_rgba(228,250,101,0.34),0_0_18px_rgba(228,250,101,0.24),0_0_42px_rgba(228,250,101,0.18)]"
                >
                  <div className="relative h-[190px] overflow-hidden rounded-[13px]">
                    <Image
                      src={post.image}
                      alt={post.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, 380px"
                      className="object-cover"
                    />
                  </div>

                  <h3 className="m-0 px-[6px] font-bricolage text-[20px] font-semibold leading-[1.25] tracking-[-0.02em] text-white">
                    {t(post.title)}
                  </h3>

                  {/* `margin-top:auto` keeps the links on one line across the
                      row however long the titles run. */}
                  <a
                    href={post.href}
                    className="arrow-cta mt-auto inline-flex items-center gap-[8px] self-start px-[6px] font-sans text-[14px] font-semibold text-[#e4fa65]"
                  >
                    {t({ en: "Read more", nl: "Lees meer" })}
                    <ArrowIcon direction="right" size={14} />
                  </a>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
