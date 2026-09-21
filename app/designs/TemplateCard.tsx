"use client";

import Link from "next/link";
import type { Template } from "./templates-data";

/* ------------------------------------------------------------------ */
/*  PREVIOUS CARD — kept for reference, replaced by the                */
/*  `.designs-grid article` markup from Growth Rocket Designs.html.    */
/* ------------------------------------------------------------------ */
/*
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { Template } from "./templates-data";

export default function TemplateCard({ template, index = 0 }: TemplateCardProps) {
  return (
    <Link href={`/designs/${template.slug}`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
        whileHover={{ y: -8, transition: { duration: 0.25, ease: "easeOut" } }}
        className="group bg-white rounded-[18px] border border-[var(--color-slate-200)] overflow-hidden flex flex-col h-full cursor-pointer"
      >
        <div className="aspect-[752/678] relative border-b border-[var(--color-slate-200)] bg-[var(--color-slate-100)]">
          <div className="absolute inset-0 h-full w-full opacity-100 transition-opacity duration-300 ease-in-out group-hover:opacity-0">
            <TemplatePreview img={template.img} title={template.title} />
          </div>
          <div className="absolute inset-0 h-full w-full opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
            <TemplatePreview
              img={template.hoverImg || template.img}
              title={template.title}
            />
          </div>
        </div>

        <div className="p-[22px] flex flex-col flex-1">
          <div className="flex items-center gap-[12px]">
            <div className="w-[36px] h-[36px] rounded-full overflow-hidden shrink-0 border border-[var(--color-slate-200)]">
              <img
                src={template.logo || "/templates/favicon.png"}
                className="w-full h-full object-cover"
                alt={`${template.title} logo`}
              />
            </div>
            <div className="min-w-0">
              <h3 className="truncate text-[18px] font-bold tracking-[-0.09px] leading-[23.4px] text-[#0d0b1f]">
                {template.title}
              </h3>
              <p className="truncate text-[13px] text-[#9a97ab]">
                {template.subtitle}
              </p>
            </div>
          </div>

          <div className="mb-auto" />

          <div className="flex items-center pt-[14px] mt-[14px] border-t border-[var(--color-slate-200)]">
            <span className="text-[#6b2cc9] font-semibold text-[13px] flex items-center gap-[6px]">
              View details <ArrowRight size={14} strokeWidth={2.25} aria-hidden />
            </span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
*/

function TemplatePreview({ img, title }: { img: string; title: string }) {
  if (!img.trim()) {
    return (
      <div className="flex aspect-[1.22] w-full flex-col items-center justify-center gap-[8px] bg-[#eeeeee] px-[24px] text-center font-sans text-[#0a0516] max-sm:aspect-[1.42]">
        <span className="text-[13px] leading-[1.35] font-semibold">
          {title}
        </span>
        <span className="text-[11px] leading-none font-semibold tracking-[0.08em] text-[#0a0516]/50 uppercase">
          Preview Coming Soon
        </span>
      </div>
    );
  }

  return (
    /* .designs-grid img — aspect-ratio 1.22 (1.42 under 600px), cover, top. */
    <img
      src={img}
      alt={title}
      loading="lazy"
      className="aspect-[1.22] w-full object-cover object-top max-sm:aspect-[1.42]"
    />
  );
}

type TemplateCardProps = {
  template: Template;
  index?: number;
};

/**
 * `.designs-grid article` from Growth Rocket Designs.html:
 *
 *   article       overflow hidden, 1px rgb(10 5 22/11%) border, radius 13px,
 *                 background #eeeeee, transition transform/box-shadow .25s
 *   article:hover translateY(-5px) plus the lime halo
 *                 0 0 0 1px rgb(228 250 101/45%), 0 0 28px rgb(228 250 101/25%)
 *   article > div padding 18px 20px 20px
 *   h3            21px, tracking -.035em
 *   p             margin-top 4px, 14px, var(--gr-text-muted) #625a70
 *
 * The lift is CSS rather than framer-motion so it does not fight the inline
 * transform the grid's entry animation writes on its wrapper.
 *
 * The transition is written as an arbitrary property because Tailwind v4's
 * `-translate-y-*` compiles to the `translate` property, not `transform` —
 * a `transition-[transform,...]` would leave the lift un-animated and the
 * hover would snap.
 *
 * The source shows one static image per card and animates nothing inside it,
 * so the previous crossfade to `template.hoverImg` is gone: the whole hover is
 * the lift and the lime halo.
 */
export default function TemplateCard({ template }: TemplateCardProps) {
  return (
    <article className="translate-y-0 overflow-hidden border border-[rgb(10_5_22_/_11%)] bg-[#eeeeee] [transition:translate_.25s_ease,box-shadow_.25s_ease] hover:-translate-y-[5px] hover:shadow-[0_0_0_1px_rgb(228_250_101_/_45%),0_0_28px_rgb(228_250_101_/_25%)]">
      <Link href={`/designs/${template.slug}`} className="block">
        <TemplatePreview img={template.img} title={template.title} />

        <div className="px-[20px] pt-[18px] pb-[20px]">
          <h3 className="font-bricolage text-[21px] leading-[1.05] font-semibold tracking-[-0.035em] text-[#0a0516]">
            {template.title}
          </h3>
          <p className="mt-[4px] text-[14px] text-[#625a70]">
            {template.subtitle}
          </p>
        </div>
      </Link>
    </article>
  );
}

/* `ComingSoonCard` used to live here too. It is only ever rendered by the
   design-detail page, which keeps its original card, so it moved with it to
   `[slug]/RelatedTemplateCard.tsx`. */
