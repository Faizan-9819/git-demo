const IDEAL = [
  "Local service businesses serving one or multiple areas",
  "New businesses needing a professional presence quickly",
  "Electrical companies replacing an outdated website",
  "Businesses wanting website, enquiry management and support under one provider",
  "Owners who'd rather serve customers than manage a digital project",
];

const NOT_FOR = [
  "Custom-built e-commerce websites",
  "Complex booking platforms with inventory management",
  "Bespoke web applications",
  "Large-scale enterprise websites",
  "Completely custom functionality from the ground up",
];

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <polyline points="4 12.5 9.5 18 20 6" />
    </svg>
  );
}

export default function FitGrid() {
  return (
    <div className="mt-11 grid gap-5 sm:grid-cols-2">
      <div className="rounded-2xl border border-[var(--color-violet-92)] bg-[var(--color-violet-98)] p-6 sm:p-8">
        <div className="font-poppins text-xs font-semibold uppercase tracking-[1px] text-[var(--color-violet-42)]">
          Ideal fit
        </div>
        <div className="mt-5 flex flex-col gap-4">
          {IDEAL.map((item) => (
            <div key={item} className="flex items-start gap-3.5">
              <span className="mt-0.5 flex-none text-[var(--color-violet-42)]">
                <CheckIcon />
              </span>
              <span
                className="font-poppins text-[16px] leading-6 text-[var(--color-haiti)]"
                dangerouslySetInnerHTML={{ __html: item }}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-2xl border border-[var(--color-violet-92)] bg-[var(--color-blog-panel-light)] p-6 sm:p-8">
        <div className="font-poppins text-xs font-semibold uppercase tracking-[1px] text-[var(--color-dolphin)]">
          Not designed for
        </div>
        <div className="mt-5 flex flex-col gap-4">
          {NOT_FOR.map((item) => (
            <div key={item} className="flex items-start gap-3.5">
              <span className="mt-2.5 h-px w-3 flex-none rounded-full bg-[var(--color-slate-300)]" />
              <span
                className="font-poppins text-[16px] leading-6 text-[var(--color-dolphin)]"
                dangerouslySetInnerHTML={{ __html: item }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
