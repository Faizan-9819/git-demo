"use client";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import Reveal from "../../Reveal";
import EyebrowLabel from "../../ui/EyebrowLabel";
import { useLanguage } from "../../../i18n/LanguageProvider";
import { localizedHref } from "../../../i18n/locale-href";
import type { Translation } from "../../../i18n/config";

const POSTS: { title: Translation; image: string }[] = [
  {
    title: {
      en: "Getting an electrician website built in 7 days",
      nl: "Elektricienwebsite laten maken in 7 dagen",
    },
    image: "/home/blog-elektricien-7-dagen.jpg",
  },
  {
    title: {
      en: "From lecture hall to first client: starting your business right after graduating",
      nl: "Van collegezaal naar eerste klant: zo start je direct na je studie je eerste bedrijf",
    },
    image: "/home/blog-eerste-bedrijf.jpg",
  },
  {
    title: {
      en: "A professional website that convinces customers. Tools that keep your business running",
      nl: "Een professionele website die klanten overtuigt. Tools die je bedrijf draaiende houden",
    },
    image: "/home/blog-schoonmaak.jpg",
  },
  {
    title: {
      en: "How long does it take to get an electrician website built?",
      nl: "Hoe lang duurt het om een elektricienwebsite te laten maken?",
    },
    image: "/home/blog-hoelang-elektricienwebsite.jpg",
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
      className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-slate-200)] bg-white font-poppins text-[18px] text-[var(--color-haiti)] transition-colors hover:bg-[var(--color-violet-98)] disabled:pointer-events-none disabled:opacity-40"
    >
      {dir === "prev" ? "‹" : "›"}
    </button>
  );
}

export default function BlogTeaser() {
  const { t, locale } = useLanguage();
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    dragFree: true,
    containScroll: "trimSnaps",
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
    <section className="relative overflow-hidden rounded-[28px] bg-[var(--color-violet-98)] fix-wide py-[50px] lg:py-28 flex flex-col gap-5 lg:gap-11">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-8 items-end">
        <div className="flex flex-col gap-3.5 max-w-140">
          <EyebrowLabel align="left">
            {t({ en: "Blog", nl: "Blog" })}
          </EyebrowLabel>
          <h2 className="m-0 font-poppins font-bold text-[clamp(28px,3.2vw,40px)] leading-[1.12] tracking-[-1px] text-[var(--color-haiti)]">
            {t({
              en: "Discover the latest articles",
              nl: "Ontdek de laatste artikelen",
            })}
          </h2>
        </div>
        <div className="flex gap-[10px] justify-self-end">
          <ArrowButton dir="prev" disabled={!canPrev} onClick={scrollPrev} />
          <ArrowButton dir="next" disabled={!canNext} onClick={scrollNext} />
        </div>
      </div>

      <div className="overflow-hidden pb-1" ref={emblaRef}>
        <div className="flex gap-5">
          {POSTS.map((post, i) => (
            <Reveal
              key={post.title.en}
              delay={Math.min(i * 0.05, 0.2)}
              className="shrink-0 w-full sm:w-95 flex flex-col gap-4 rounded-[26px] border border-[var(--color-mist)] bg-white p-5 pb-[26px]"
            >
              <div className="relative rounded-[18px] overflow-hidden h-[190px]">
                <Image
                  src={post.image}
                  alt={t(post.title)}
                  fill
                  sizes="(max-width: 640px) 100vw, 380px"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col gap-3 px-[6px]">
                <h3
                  className="m-0 text-[20px] font-semibold leading-[1.25] tracking-[-0.3px] font-poppins text-[var(--color-haiti)]"
                  dangerouslySetInnerHTML={{ __html: t(post.title) }}
                ></h3>
                <Link
                  href={localizedHref("/blog", locale)}
                  className="mt-auto font-poppins text-[14px] font-semibold text-[var(--color-violet-42)]"
                >
                  {t({ en: "Read more →", nl: "Lees meer →" })}
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
