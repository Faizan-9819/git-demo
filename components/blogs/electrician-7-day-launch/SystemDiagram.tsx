const SEQUENTIAL_STEPS = ["Discovery", "Design", "Copy", "Development", "Testing", "Launch — weeks later"];
const PARALLEL_STEPS = ["Content", "Design", "Development", "SEO Readiness", "Image prep", "Testing"];

export default function SystemDiagram() {
  return (
    <figure className="mt-14 overflow-hidden rounded-2xl border border-[var(--color-violet-92)]">
      <div className="grid md:grid-cols-2">
        <div className="border-b border-[var(--color-violet-92)] p-6 sm:p-8 md:border-b-0 md:border-r">
          <div className="font-poppins text-[11px] font-semibold uppercase tracking-[1.1px] text-[var(--color-dolphin)]">
            Traditional agency
          </div>
          <div className="mt-1.5 font-poppins text-sm text-[var(--color-dolphin)]">
            Each stage waits for the last
          </div>
          <div className="relative mt-6 pl-6">
            <div className="absolute bottom-1.5 left-[5px] top-1.5 w-px bg-[var(--color-violet-92)]" />
            <div className="flex flex-col gap-4">
              {SEQUENTIAL_STEPS.map((step) => (
                <div key={step} className="relative">
                  <div className="absolute -left-6 top-1 size-2.5 rounded-full border border-[var(--color-slate-300)] bg-white" />
                  <div
                    className="font-poppins text-[15px] font-medium text-[var(--color-haiti)]"
                    dangerouslySetInnerHTML={{ __html: step }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-[var(--color-violet-98)] p-6 sm:p-8">
          <div className="font-poppins text-[11px] font-semibold uppercase tracking-[1.1px] text-[var(--color-violet-42)]">
            Growth Rocket
          </div>
          <div className="mt-1.5 font-poppins text-sm text-[var(--color-dolphin)]">
            Everything runs at once
          </div>
          <div className="mt-6 flex items-stretch gap-3.5">
            <div className="flex flex-1 flex-col gap-2">
              {PARALLEL_STEPS.map((item) => (
                <div
                  key={item}
                  className="rounded-lg border border-[var(--color-violet-92)] bg-white px-3 py-2 font-poppins text-sm font-medium text-[var(--color-haiti)]"
                  dangerouslySetInnerHTML={{ __html: item }}
                />
              ))}
            </div>
            <div className="flex flex-none items-center text-[var(--color-violet-42)]">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <line x1="4" y1="12" x2="19" y2="12" />
                <polyline points="13 6 19 12 13 18" />
              </svg>
            </div>
            <div className="flex flex-none items-center">
              <div className="rounded-[10px] bg-[image:var(--grad-brand)] px-3.5 py-3 text-center text-white shadow-[0_6px_18px_rgba(91,33,159,0.25)]">
                <div className="font-poppins text-[11px] font-semibold uppercase tracking-[0.5px] opacity-85">
                  Day 7
                </div>
                <div className="mt-0.5 font-poppins text-[15px] font-bold">Launch</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </figure>
  );
}
