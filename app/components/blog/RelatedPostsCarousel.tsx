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
      <div className="overflow-x-hidden" ref={emblaRef}>
        <div className="flex gap-5 lg:gap-6">
          {posts.map((post) => (
            <div
              key={post.slug}
              className="flex-[0_0_83.333%] sm:flex-[0_0_50%] lg:flex-[0_0_calc(33.333%-16px)] min-w-0"
            >
              <BlogCard post={post} />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-3">
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
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className="inline-flex size-11 items-center justify-center rounded-full border border-[var(--color-violet-92)] bg-white text-[var(--color-violet-42)] transition-all hover:-translate-y-[1px] hover:border-[var(--color-violet-76)] disabled:pointer-events-none disabled:opacity-40"
    >
      <Icon size={20} strokeWidth={2.25} aria-hidden />
    </button>
  );
}
