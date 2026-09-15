"use client";

import Button from "@/app/components/ui/Button";

export type HeroRouteTrack = {
  label: string;
  time: string;
  widthPct: number;
  emphasis?: boolean;
};

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
  panelEyebrow: string;
  tracks: [HeroRouteTrack, HeroRouteTrack, HeroRouteTrack];
  axisStart: string;
  axisMid: string;
  axisEnd: string;
  panelFootnote: string;
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
  panelEyebrow,
  tracks,
  axisStart,
  axisMid,
  axisEnd,
  panelFootnote,
}: HeroSectionProps) {
  const openLeadForm = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-lead-form"));
    }
  };

  return (
    <section className="grid gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
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
          className="mt-5 text-balance font-poppins text-[36px] font-bold leading-[1.15] tracking-[-0.6px] text-[var(--color-haiti)] sm:text-[46px] sm:leading-[54px]"
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

      <div className="rounded-2xl border border-[var(--color-violet-92)] bg-[var(--color-blog-panel-light)] p-6 sm:p-8">
        <div
          className="mb-6 font-poppins text-[11px] font-semibold uppercase tracking-[1.2px] text-[var(--color-dolphin)]"
          dangerouslySetInnerHTML={{ __html: panelEyebrow }}
        />

        <div className="flex flex-col gap-6">
          {tracks.map((track) => (
            <div key={track.label}>
              <div className="mb-2 flex items-baseline justify-between">
                <span
                  className={
                    "font-poppins text-sm font-bold " +
                    (track.emphasis ? "text-[var(--color-violet-42)]" : "text-[var(--color-haiti)]")
                  }
                  dangerouslySetInnerHTML={{ __html: track.label }}
                />
                <span
                  className={
                    "font-poppins text-[13px] font-semibold " +
                    (track.emphasis ? "text-[var(--color-violet-42)]" : "text-[var(--color-dolphin)]")
                  }
                  dangerouslySetInnerHTML={{ __html: track.time }}
                />
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-[var(--color-violet-98)]">
                <div
                  className={
                    "h-full rounded-full transition-all duration-700 ease-out " +
                    (track.emphasis
                      ? "bg-[image:var(--grad-brand)]"
                      : "bg-[var(--color-violet-76)] opacity-60")
                  }
                  style={{ width: `${track.widthPct}%`, minWidth: track.emphasis ? "26px" : undefined }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="relative mt-5 h-4">
          <div
            className="absolute left-0 top-0 font-poppins text-[11px] text-[var(--color-dolphin)]"
            dangerouslySetInnerHTML={{ __html: axisStart }}
          />
          <div
            className="absolute left-1/3 top-0 -translate-x-1/2 font-poppins text-[11px] text-[var(--color-dolphin)]"
            dangerouslySetInnerHTML={{ __html: axisMid }}
          />
          <div
            className="absolute right-0 top-0 font-poppins text-[11px] text-[var(--color-dolphin)]"
            dangerouslySetInnerHTML={{ __html: axisEnd }}
          />
        </div>

        <div className="my-4 h-px bg-[var(--color-violet-92)]" />

        <div
          className="font-poppins text-[13px] leading-[19px] text-[var(--color-dolphin)]"
          dangerouslySetInnerHTML={{ __html: panelFootnote }}
        />
      </div>
    </section>
  );
}
