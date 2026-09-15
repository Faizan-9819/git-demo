const ROWS = [
  { label: "Project planning", them: "Multiple meetings", us: "One simple onboarding" },
  { label: "Copywriting", them: "Separate project phase", us: "Included from Day 2" },
  { label: "Design", them: "Multiple concepts and revisions", us: "Proven framework tailored to your business" },
  { label: "Development", them: "Starts after design approval", us: "Runs alongside content preparation" },
  { label: "Testing", them: "Final project stage", us: "Continuous throughout the build" },
  { label: "Launch", them: "Weeks later", us: "Day 7", usBold: true },
  { label: "Client workload", them: "You manage the project", us: "Growth Rocket takes responsibility" },
];

export default function ComparisonTable() {
  return (
    <div className="mt-11 overflow-hidden rounded-2xl border border-[var(--color-violet-92)]">
      <div className="overflow-x-auto">
        <div className="grid min-w-[560px] grid-cols-[1.1fr_1.4fr_1.4fr]">
          <div className="border-b border-[var(--color-violet-92)] bg-[var(--color-blog-panel-light)] px-6 py-4.5" />
          <div className="border-b border-l border-[var(--color-violet-92)] bg-[var(--color-blog-panel-light)] px-6 py-4.5 font-poppins text-xs font-semibold uppercase tracking-[1px] text-[var(--color-dolphin)]">
            Traditional agency
          </div>
          <div className="border-b border-l border-[var(--color-violet-92)] bg-[var(--color-violet-98)] px-6 py-4.5 font-poppins text-xs font-semibold uppercase tracking-[1px] text-[var(--color-violet-42)]">
            Growth Rocket
          </div>

          {ROWS.map((row) => (
            <div key={row.label} className="contents">
              <div
                className="flex items-center border-b border-[var(--color-violet-92)] bg-[var(--color-blog-panel-light)] px-6 py-5 font-poppins text-sm font-semibold text-[var(--color-haiti)]"
                dangerouslySetInnerHTML={{ __html: row.label }}
              />
              <div
                className="flex items-center border-b border-l border-[var(--color-violet-92)] px-6 py-5 font-poppins text-[15.5px] leading-[23px] text-[var(--color-dolphin)]"
                dangerouslySetInnerHTML={{ __html: row.them }}
              />
              <div
                className={
                  "flex items-center border-b border-l border-[var(--color-violet-92)] bg-[var(--color-blog-panel-wash)] px-6 py-5 font-poppins text-[15.5px] leading-[23px] text-[var(--color-haiti)] " +
                  (row.usBold ? "font-bold" : "font-medium")
                }
                dangerouslySetInnerHTML={{ __html: row.us }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
