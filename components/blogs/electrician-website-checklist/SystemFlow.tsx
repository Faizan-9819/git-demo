type FlowNode = {
  label: string;
  icon: React.ReactNode;
  emphasis?: boolean;
};

function ArrowIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <line x1="4" y1="12" x2="20" y2="12" />
      <polyline points="14 6 20 12 14 18" />
    </svg>
  );
}

export default function SystemFlow({ nodes }: { nodes: FlowNode[] }) {
  return (
    <div className="mt-9 rounded-2xl border border-[var(--color-violet-92)] bg-[var(--color-blog-panel)] p-7 sm:p-8">
      <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
        {nodes.map((node, i) => (
          <div key={node.label} className="contents">
            <div className="flex flex-1 flex-col items-center gap-3 text-center">
              <div
                className={
                  "flex size-[52px] items-center justify-center rounded-[13px] border " +
                  (node.emphasis
                    ? "border-[var(--color-violet-42)] bg-[image:var(--grad-brand)] text-white shadow-[0_6px_18px_rgba(91,33,159,0.28)]"
                    : "border-[var(--color-violet-92)] bg-white text-[var(--color-haiti)]")
                }
              >
                <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  {node.icon}
                </svg>
              </div>
              <div
                className="font-poppins text-[15px] font-semibold text-[var(--color-haiti)]"
                dangerouslySetInnerHTML={{ __html: node.label }}
              />
            </div>
            {i < nodes.length - 1 && (
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
