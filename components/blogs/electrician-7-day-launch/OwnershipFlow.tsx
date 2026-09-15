const STEPS = [
  {
    label: "Your intake",
    icon: (
      <>
        <rect x="6" y="3" width="12" height="18" rx="2" />
        <line x1="9" y1="9" x2="15" y2="9" />
        <line x1="9" y1="13" x2="14" y2="13" />
      </>
    ),
  },
  {
    label: "Growth Rocket team",
    icon: (
      <>
        <circle cx="9" cy="8" r="3" />
        <path d="M3 20c0-3.3 2.7-5 6-5s6 1.7 6 5" />
        <circle cx="17.5" cy="9" r="2.3" />
        <path d="M15.5 20c0-2.8 1.5-4.3 4-4.3 1 0 1.8.2 2.5.7" />
      </>
    ),
  },
  {
    label: "Website build",
    icon: (
      <>
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <line x1="3" y1="8" x2="21" y2="8" />
      </>
    ),
  },
  {
    label: "Launch",
    icon: (
      <>
        <path d="M12 3c3 1.5 4.5 4.5 4.5 8 0 2-1 4-2 5H9.5c-1-1-2-3-2-5C7.5 7.5 9 4.5 12 3z" />
        <circle cx="12" cy="9.5" r="1.6" />
        <path d="M9.5 16l-1.5 3M14.5 16l1.5 3" />
      </>
    ),
    emphasis: true,
  },
];

function ArrowIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <line x1="4" y1="12" x2="18" y2="12" />
      <polyline points="13 7 18 12 13 17" />
    </svg>
  );
}

export default function OwnershipFlow() {
  return (
    <div className="rounded-2xl border border-[var(--color-violet-92)] bg-[var(--color-blog-panel)] p-7 sm:p-8">
      <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
        {STEPS.map((step, i) => (
          <div key={step.label} className="contents">
            <div className="flex flex-1 flex-col items-center gap-3 text-center">
              <div
                className={
                  "flex size-[52px] items-center justify-center rounded-[13px] border " +
                  (step.emphasis
                    ? "border-[var(--color-violet-42)] bg-[image:var(--grad-brand)] text-white shadow-[0_6px_18px_rgba(91,33,159,0.25)]"
                    : "border-[var(--color-violet-92)] bg-white text-[var(--color-haiti)]")
                }
              >
                <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  {step.icon}
                </svg>
              </div>
              <div
                className="font-poppins text-[15px] font-semibold text-[var(--color-haiti)]"
                dangerouslySetInnerHTML={{ __html: step.label }}
              />
            </div>
            {i < STEPS.length - 1 && (
              <div className="flex-none text-[var(--color-slate-300)] sm:rotate-0 rotate-90">
                <ArrowIcon />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
