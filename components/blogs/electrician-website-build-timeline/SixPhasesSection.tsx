export type Phase = {
  num: string;
  flowLabel: string;
  phaseLabel: string;
  title: string;
  description: string;
  diyLabel: string;
  diy: string;
  freelancerLabel: string;
  freelancer: string;
  managedLabel: string;
  managed: string;
  stallsLabel: string;
  stalls: string;
};

export type SixPhasesSectionProps = {
  heading: string;
  intro: string;
  phases: Phase[];
  ctaText: string;
  ctaLabel: string;
  ctaHref: string;
};

function ArrowIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <line x1="4" y1="12" x2="20" y2="12" />
      <polyline points="14 6 20 12 14 18" />
    </svg>
  );
}

function StatChip({
  label,
  value,
  emphasis,
}: {
  label: string;
  value: string;
  emphasis?: boolean;
}) {
  return (
    <div
      className={
        "rounded-[10px] border px-3.5 py-3 " +
        (emphasis
          ? "border-[var(--color-violet-92)] bg-[var(--color-violet-98)]"
          : "border-[var(--color-slate-300)]/40 bg-white")
      }
    >
      <div
        className={
          "font-poppins text-[11px] font-semibold uppercase tracking-[0.6px] " +
          (emphasis
            ? "text-[var(--color-violet-42)]"
            : "text-[var(--color-dolphin)]")
        }
        dangerouslySetInnerHTML={{ __html: label }}
      />
      <div
        className={
          "mt-1 font-poppins text-[15px] " +
          (emphasis
            ? "font-bold text-[var(--color-violet-42)]"
            : "font-bold text-[var(--color-haiti)]")
        }
        dangerouslySetInnerHTML={{ __html: value }}
      />
    </div>
  );
}

export default function SixPhasesSection({
  heading,
  intro,
  phases,
  ctaText,
  ctaLabel,
  ctaHref,
}: SixPhasesSectionProps) {
  return (
    <section id="six-phases" className="scroll-mt-24">
      <h2
        className="mt-12 w-full font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]"
        dangerouslySetInnerHTML={{ __html: heading }}
      />
      <p
        className="mt-7 w-full font-poppins text-base leading-[26px] text-[var(--color-dolphin)]"
        dangerouslySetInnerHTML={{ __html: intro }}
      />

      {/* flow overview */}
      <div className="mt-8 rounded-2xl border border-[var(--color-violet-92)] bg-[var(--color-blog-panel)] p-6 sm:p-7">
        <div className="flex items-start justify-between lg:gap-1.5 gap-x-3 gap-y-4 flex-wrap">
          {phases.map((phase, i) => (
            <div key={phase.num} className="contents">
              <div className="flex flex-1 flex-col items-center gap-2.5 text-center">
                <div
                  className={
                    "flex size-11 items-center justify-center rounded-xl border font-poppins text-[13px] font-bold " +
                    (i === phases.length - 1
                      ? "border-[var(--color-violet-92)] bg-[var(--color-violet-98)] text-[var(--color-violet-42)]"
                      : "border-[var(--color-violet-92)] bg-white text-[var(--color-violet-42)]")
                  }
                  dangerouslySetInnerHTML={{ __html: phase.num }}
                />
                <div
                  className="font-poppins text-[13.5px] font-semibold text-[var(--color-haiti)]"
                  dangerouslySetInnerHTML={{ __html: phase.flowLabel }}
                />
              </div>
              {i < phases.length - 1 && (
                <div className="mt-3 flex-none text-[var(--color-slate-300)]">
                  <ArrowIcon />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* phase cards */}
      <div className="mt-9 flex flex-col gap-5">
        {phases.map((phase) => (
          <div
            key={phase.num}
            className="flex flex-col gap-6 rounded-2xl border border-[var(--color-violet-92)] bg-white p-6 sm:flex-row sm:gap-8 sm:p-8"
          >
            <div className="flex flex-row-reverse items-center justify-between sm:contents">
              <div className="sm:hidden">
                <div
                  className="font-poppins text-[11px] font-semibold uppercase tracking-[1.1px] text-[var(--color-dolphin)]"
                  dangerouslySetInnerHTML={{ __html: phase.phaseLabel }}
                />
                <h3
                  className="mt-1.5 font-poppins text-[22px] font-bold tracking-[-0.2px] text-[var(--color-haiti)]"
                  dangerouslySetInnerHTML={{ __html: phase.title }}
                />
              </div>
              <div
                className="flex-none font-poppins text-[48px] font-light leading-[0.85] text-[var(--color-violet-76)] tabular-nums sm:text-[62px]"
                dangerouslySetInnerHTML={{ __html: phase.num }}
              />
            </div>
            <div className="min-w-0 flex-1">
              <div
                className="hidden font-poppins text-[11px] font-semibold uppercase tracking-[1.1px] text-[var(--color-dolphin)] sm:block"
                dangerouslySetInnerHTML={{ __html: phase.phaseLabel }}
              />
              <h3
                className="hidden font-poppins text-[22px] font-bold tracking-[-0.2px] text-[var(--color-haiti)] sm:mt-1.5 sm:block"
                dangerouslySetInnerHTML={{ __html: phase.title }}
              />
              <p
                className="mt-3 max-w-[620px] font-poppins text-base leading-[25px] text-[var(--color-dolphin)] sm:mt-3"
                dangerouslySetInnerHTML={{ __html: phase.description }}
              />

              <div className="mt-5 grid max-w-[560px] grid-cols-3 gap-2.5">
                <StatChip label={phase.diyLabel} value={phase.diy} />
                <StatChip
                  label={phase.freelancerLabel}
                  value={phase.freelancer}
                />
                <StatChip
                  label={phase.managedLabel}
                  value={phase.managed}
                  emphasis
                />
              </div>

              <div className="mt-4.5 border-l-[3px] border-[var(--color-violet-92)] py-0.5 pl-4">
                <span
                  className="font-poppins text-[11px] font-semibold uppercase tracking-[0.8px] text-[var(--color-dolphin)]"
                  dangerouslySetInnerHTML={{ __html: phase.stallsLabel }}
                />
                <p
                  className="mt-1.5 font-poppins text-[15px] leading-[23px] text-[var(--color-dolphin)]"
                  dangerouslySetInnerHTML={{ __html: phase.stalls }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* inline CTA bar */}
      <div className="mt-6 flex flex-wrap items-center justify-between gap-5 rounded-xl border border-[var(--color-violet-92)] bg-[var(--color-violet-98)] px-6 py-5">
        <span
          className="font-poppins text-base leading-6 text-[var(--color-haiti)]"
          dangerouslySetInnerHTML={{ __html: ctaText }}
        />
        <a
          href={ctaHref}
          className="flex-none border-b-[1.5px] border-[var(--color-violet-76)] pb-0.5 font-poppins text-[15px] font-semibold text-[var(--color-violet-42)] no-underline"
          dangerouslySetInnerHTML={{ __html: ctaLabel }}
        />
      </div>
    </section>
  );
}
