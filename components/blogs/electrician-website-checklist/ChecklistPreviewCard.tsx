function CheckIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <polyline points="4 12.5 9.5 18 20 6" />
    </svg>
  );
}

export type ChecklistPreviewItem = { label: string; checked: boolean };

export default function ChecklistPreviewCard({
  eyebrow,
  items,
  footnote,
}: {
  eyebrow: string;
  items: ChecklistPreviewItem[];
  footnote: string;
}) {
  return (
    <div className="rounded-2xl border border-[var(--color-violet-92)] bg-[var(--color-blog-panel-light)] p-6 sm:p-8">
      <div
        className="mb-5 font-poppins text-[11px] font-semibold uppercase tracking-[1.2px] text-[var(--color-dolphin)]"
        dangerouslySetInnerHTML={{ __html: eyebrow }}
      />
      <div className="flex flex-col gap-2.5">
        {items.map((item) => (
          <div key={item.label} className="flex items-center gap-3">
            {item.checked ? (
              <div className="flex size-[18px] flex-none items-center justify-center rounded-[5px] bg-[var(--color-violet-42)]">
                <CheckIcon />
              </div>
            ) : (
              <div className="size-[18px] flex-none rounded-[5px] border-[1.5px] border-[var(--color-slate-300)] bg-white" />
            )}
            <span
              className={
                "font-poppins text-sm " +
                (item.checked ? "text-[var(--color-haiti)]" : "text-[var(--color-dolphin)]")
              }
              dangerouslySetInnerHTML={{ __html: item.label }}
            />
          </div>
        ))}
      </div>
      <div className="my-5 h-px bg-[var(--color-violet-92)]" />
      <div
        className="font-poppins text-[13px] leading-[19px] text-[var(--color-dolphin)]"
        dangerouslySetInnerHTML={{ __html: footnote }}
      />
    </div>
  );
}
