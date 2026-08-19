"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import BlogCard from "./BlogCard";
import CarouselButton from "../ui/CarouselButton";
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
