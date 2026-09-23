"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import BlogCard from "./BlogCard";
import type { BlogPost } from "../../lib/blog-posts";

type Props = {
  posts: BlogPost[];
};

export default function RelatedPostsCarousel({ posts }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
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
    <div className="relative">
      {/* The viewport's clip would cut the cards' lime hover glow off at either
          edge, so — as in /home2's Examples and BlogTeaser — it is padded by one
          gutter's worth (20px) all round and pulled back out by the same amount:
          the glow gets room to spread while the cards stay aligned to `.fix`. */}
      <div className="-mx-[20px] -mb-[20px] overflow-hidden p-[20px]" ref={emblaRef}>
        <div className="flex gap-[20px]">
          {posts.map((post) => (
            <div
              key={post.slug}
              className="min-w-0 flex-[0_0_83.333%] sm:flex-[0_0_50%] lg:flex-[0_0_calc(33.333%-14px)]"
            >
              <BlogCard post={post} />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-[20px] flex items-center justify-end gap-[10px]">
        <CarouselButton
          direction="prev"
          disabled={!canPrev}
          onClick={scrollPrev}
        />
        <CarouselButton
          direction="next"
          disabled={!canNext}
          onClick={scrollNext}
        />
      </div>
    </div>
  );
}

function CarouselButton({
  direction,
  disabled,
  onClick,
}: {
  direction: "prev" | "next";
  disabled: boolean;
  onClick: () => void;
}) {
  const Icon = direction === "prev" ? ChevronLeft : ChevronRight;
  const label = direction === "prev" ? "Previous" : "Next";
  // The carousel lives on the deep fold, so these are /home2's dark arrow
  // buttons — intentional circles stay circular, whatever the 13px standard
  // does to everything else.
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className="inline-flex size-11 cursor-pointer items-center justify-center rounded-full border border-white/[0.12] bg-[#151021] text-white transition-colors hover:bg-[#1f1830] disabled:pointer-events-none disabled:opacity-40"
    >
      <Icon size={18} strokeWidth={2.25} aria-hidden />
    </button>
  );
}
