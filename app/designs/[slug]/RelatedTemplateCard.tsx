"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { Template } from "../templates-data";

/**
 * The design-detail page's "More designs" / "Other designs" strip.
 *
 * This is the previous `TemplateCard` / `ComingSoonCard` pair, moved here
 * verbatim when the /designs gallery was rebuilt from Growth Rocket
 * Designs.html. The gallery's card is now the source file's own — flat
 * #eeeeee tile, lime halo on hover — which would sit wrong on this page's
 * #f8f9fa surface, and this section was to stay as it was, so it keeps the
 * white rounded card it has always had.
 */

function TemplatePreview({ img, title }: { img: string; title: string }) {
  if (!img.trim()) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center gap-[8px] bg-[var(--color-slate-100)] px-[24px] text-center font-sans text-[var(--color-haiti)]">
        <span className="text-[13px] leading-[1.35] font-semibold">
          {title}
        </span>
        <span className="text-[11px] leading-none font-semibold tracking-[0.08em] text-[var(--color-haiti)]/50 uppercase">
          Preview Coming Soon
        </span>
      </div>
    );
  }

  return (
    <img
      src={img}
      alt={title}
      className="h-full w-full object-cover object-center"
    />
  );
}

type RelatedTemplateCardProps = {
  template: Template;
  index?: number;
};

export default function RelatedTemplateCard({
  template,
  index = 0,
}: RelatedTemplateCardProps) {
  return (
    <Link href={`/designs/${template.slug}`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
        whileHover={{ y: -8, transition: { duration: 0.25, ease: "easeOut" } }}
        className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-[18px] border border-[var(--color-slate-200)] bg-white"
      >
        <div className="relative aspect-[752/678] border-b border-[var(--color-slate-200)] bg-[var(--color-slate-100)]">
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

        <div className="flex flex-1 flex-col p-[22px]">
          <div className="flex items-center gap-[12px]">
            <div className="h-[36px] w-[36px] shrink-0 overflow-hidden rounded-full border border-[var(--color-slate-200)]">
              <img
                src={template.logo || "/templates/favicon.png"}
                className="h-full w-full object-cover"
                alt={`${template.title} logo`}
              />
            </div>
            <div className="min-w-0">
              <h3 className="truncate text-[18px] leading-[23.4px] font-bold tracking-[-0.09px] text-[#0d0b1f]">
                {template.title}
              </h3>
              <p className="truncate text-[13px] text-[#9a97ab]">
                {template.subtitle}
              </p>
            </div>
          </div>

          <div className="mb-auto" />

          <div className="mt-[14px] flex items-center border-t border-[var(--color-slate-200)] pt-[14px]">
            <span className="flex items-center gap-[6px] text-[13px] font-semibold text-[#6b2cc9]">
              View details{" "}
              <ArrowRight size={14} strokeWidth={2.25} aria-hidden />
            </span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

export function ComingSoonCard() {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-[18px] border border-[var(--color-slate-200)] bg-white">
      <div className="flex aspect-[752/678] items-center justify-center border-b border-[var(--color-slate-200)] bg-[var(--color-slate-100)] text-[13px] font-semibold tracking-[0.08em] text-[var(--color-haiti)]/50 uppercase">
        Preview Coming Soon
      </div>
      <div className="flex flex-1 flex-col p-[22px]">
        <div className="flex items-center gap-[12px]">
          <div className="min-w-0">
            <h3 className="truncate text-[18px] leading-[23.4px] font-bold tracking-[-0.09px] text-[#0d0b1f]">
              More designs
            </h3>
            <p className="truncate text-[13px] text-[#9a97ab]">Coming soon</p>
          </div>
        </div>

        <div className="mb-auto" />

        <div className="mt-[14px] flex items-center border-t border-[var(--color-slate-200)] pt-[14px]">
          <span className="text-[13px] font-semibold text-[var(--color-haiti)]/40">
            Coming soon
          </span>
        </div>
      </div>
    </div>
  );
}
