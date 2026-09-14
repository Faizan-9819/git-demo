"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { Template } from "./templates-data";

function TemplatePreview({ img, title }: { img: string; title: string }) {
  if (!img.trim()) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center gap-[8px] bg-[var(--color-slate-100)] px-[24px] text-center font-sans text-[var(--color-haiti)]">
        <span className="text-[13px] font-semibold leading-[1.35]">
          {title}
        </span>
        <span className="text-[11px] font-semibold uppercase leading-none tracking-[0.08em] text-[var(--color-haiti)]/50">
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

type TemplateCardProps = {
  template: Template;
  index?: number;
};

export default function TemplateCard({
  template,
  index = 0,
}: TemplateCardProps) {
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
    <div className="bg-white rounded-[18px] border border-[var(--color-slate-200)] overflow-hidden flex flex-col h-full">
      <div className="aspect-[752/678] flex items-center justify-center border-b border-[var(--color-slate-200)] bg-[var(--color-slate-100)] text-[13px] font-semibold uppercase tracking-[0.08em] text-[var(--color-haiti)]/50">
        Preview Coming Soon
      </div>
      <div className="p-[22px] flex flex-col flex-1">
        <div className="flex items-center gap-[12px]">
          <div className="min-w-0">
            <h3 className="truncate text-[18px] font-bold tracking-[-0.09px] leading-[23.4px] text-[#0d0b1f]">
              More designs
            </h3>
            <p className="truncate text-[13px] text-[#9a97ab]">Coming soon</p>
          </div>
        </div>

        <div className="mb-auto" />

        <div className="flex items-center pt-[14px] mt-[14px] border-t border-[var(--color-slate-200)]">
          <span className="text-[13px] font-semibold text-[var(--color-haiti)]/40">
            Coming soon
          </span>
        </div>
      </div>
    </div>
  );
}
