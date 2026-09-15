"use client";

import Button from "@/app/components/ui/Button";
import ChecklistPreviewCard, { type ChecklistPreviewItem } from "./ChecklistPreviewCard";

export type HeroSectionProps = {
  eyebrowGuide: string;
  eyebrowPill: string;
  title: string;
  subtitle: string;
  ctaLabel: string;
  /** No longer used — the primary CTA always opens the lead form. Kept optional so existing call sites don't need to change. */
  ctaHref?: string;
  secondaryLabel: string;
  /** No longer used — the secondary link always opens the lead form. Kept optional so existing call sites don't need to change. */
  secondaryHref?: string;
  metaDate: string;
  metaReadTime: string;
  previewEyebrow: string;
  previewItems: ChecklistPreviewItem[];
  previewFootnote: string;
};

export default function HeroSection({
  eyebrowGuide,
  eyebrowPill,
  title,
  subtitle,
  ctaLabel,
  secondaryLabel,
  metaDate,
  metaReadTime,
  previewEyebrow,
  previewItems,
  previewFootnote,
}: HeroSectionProps) {
  const openLeadForm = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-lead-form"));
    }
  };

  return (
    <section className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
      <div>
        <div className="flex flex-wrap items-center gap-3.5">
          <span className="font-poppins text-[13px] font-semibold uppercase tracking-[1.04px] text-[var(--color-dolphin)]">
            <span className="text-[var(--color-violet-42)]">Growth Rocket</span>
            <span className="px-2 text-[var(--color-slate-300)]">·</span>
            <span dangerouslySetInnerHTML={{ __html: eyebrowGuide }} />
          </span>
          <span
            className="rounded-full border border-[var(--color-violet-92)] bg-[var(--color-violet-98)] px-3 py-1 font-poppins text-[11px] font-semibold tracking-[0.4px] text-[var(--color-violet-42)]"
            dangerouslySetInnerHTML={{ __html: eyebrowPill }}
          />
        </div>

        <h1
          className="mt-5 text-balance font-poppins text-[32px] font-bold leading-[1.15] tracking-[-0.5px] text-[var(--color-haiti)] sm:text-[40px] sm:leading-[1.15] lg:text-[46px] lg:leading-[54px] lg:tracking-[-0.6px]"
          dangerouslySetInnerHTML={{ __html: title }}
        />

        <p
          className="mt-6 max-w-[520px] text-pretty font-poppins text-lg leading-8 text-[var(--color-dolphin)] sm:text-xl"
          dangerouslySetInnerHTML={{ __html: subtitle }}
        />

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <Button onClick={openLeadForm} variant="primary" arrow="up-right">
            <span dangerouslySetInnerHTML={{ __html: ctaLabel }} />
          </Button>
          <button
            type="button"
            onClick={openLeadForm}
            className="border-b-[1.5px] border-[var(--color-violet-76)] pb-0.5 font-poppins text-[15px] font-semibold text-[var(--color-haiti)] no-underline"
            dangerouslySetInnerHTML={{ __html: secondaryLabel }}
          />
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-2.5 font-poppins text-sm text-[var(--color-dolphin)]">
          <span>Growth Rocket</span>
          <span className="text-[var(--color-slate-300)]">·</span>
          <span dangerouslySetInnerHTML={{ __html: metaDate }} />
          <span className="text-[var(--color-slate-300)]">·</span>
          <span dangerouslySetInnerHTML={{ __html: metaReadTime }} />
        </div>
      </div>

      <ChecklistPreviewCard eyebrow={previewEyebrow} items={previewItems} footnote={previewFootnote} />
    </section>
  );
}
