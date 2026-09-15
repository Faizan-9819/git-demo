const NODES = ["Website", "Enquiries", "Growth Rocket Hub", "Ongoing support"];

function ArrowIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <line x1="4" y1="12" x2="18" y2="12" />
      <polyline points="13 7 18 12 13 17" />
    </svg>
  );
}

export default function EcosystemDiagram() {
  return (
    <div className="mt-9 rounded-2xl border border-[var(--color-violet-92)] bg-[var(--color-blog-panel)] p-7 sm:p-8">
      <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
        {NODES.map((node, i) => (
          <div key={node} className="contents">
            <div
              className={
                "flex-1 rounded-[10px] border px-3 py-3.5 text-center font-poppins text-sm font-semibold " +
                (node === "Growth Rocket Hub"
                  ? "border-[var(--color-violet-42)] bg-[image:var(--grad-brand)] text-white shadow-[0_6px_16px_rgba(91,33,159,0.22)]"
                  : "border-[var(--color-violet-92)] bg-white text-[var(--color-haiti)]")
              }
              dangerouslySetInnerHTML={{ __html: node }}
            />
            {i < NODES.length - 1 && (
              <div className="flex-none self-center text-[var(--color-slate-300)] sm:rotate-0 rotate-90">
                <ArrowIcon />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
