"use client";

import Image from "next/image";
import { useRef } from "react";

type Props = {
  title: string;
  caption: string;
  thumb: string;
  onOpen: (rect: DOMRect) => void;
};

/* Thumbnail card at 16:12 — taller than the 16:9 popup it opens, because the
   still is the whole card here and the video only plays in the lightbox. */
export default function VideoPreview({ title, caption, thumb, onOpen }: Props) {
  const ref = useRef<HTMLButtonElement>(null);

  return (
    <button
      ref={ref}
      type="button"
      aria-label={`Play ${title.toLowerCase()} video`}
      onClick={() => {
        const rect = ref.current?.getBoundingClientRect();
        if (rect) onOpen(rect);
      }}
      className="group relative flex aspect-[16/12] w-full cursor-pointer flex-col justify-end overflow-hidden rounded-[13px] p-[24px] text-left text-white max-[600px]:p-[22px]"
    >
      <Image
        src={thumb}
        alt=""
        fill
        sizes="(max-width: 900px) 100vw, 48vw"
        className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
      />
      {/* Flat scrim, not a gradient wash — keeps the title legible on any still. */}
      <div className="absolute inset-0 bg-[#0a0516]/40" />

      <span className="pointer-events-none absolute top-[24px] right-[24px] flex h-[62px] w-[62px] items-center justify-center rounded-full bg-[#e4fa65] text-[21px] text-[#0a0516] transition-transform duration-200 ease-out group-hover:scale-[1.08] max-[600px]:top-[22px] max-[600px]:right-[22px] max-[600px]:h-[54px] max-[600px]:w-[54px]">
        ▶
      </span>

      <span className="relative font-bricolage text-[clamp(24px,2.5vw,37px)] leading-none font-bold tracking-[-0.04em]">
        {title}
      </span>
      <small className="relative mt-[9px] text-[15px] opacity-[0.78]">
        {caption}
      </small>
    </button>
  );
}
