export type PriceRangeItem = {
  label: string;
  price: string;
  icon: React.ReactNode;
};

export default function PriceRangeCard({
  eyebrow,
  items,
  footnote,
}: {
  eyebrow: string;
  items: PriceRangeItem[];
  footnote: string;
}) {
  return (
    <div className="rounded-2xl border border-[var(--color-violet-92)] bg-[var(--color-blog-panel-light)] p-6 sm:p-8">
      <div
        className="mb-5 font-poppins text-[11px] font-semibold uppercase tracking-[1.2px] text-[var(--color-dolphin)]"
        dangerouslySetInnerHTML={{ __html: eyebrow }}
      />
      <div className="flex flex-col gap-4">
        {items.map((item) => (
          <div key={item.label} className="flex items-start gap-3.5">
            <div className="flex size-10 flex-none items-center justify-center rounded-[10px] bg-[var(--color-violet-98)] text-[var(--color-violet-42)]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                {item.icon}
              </svg>
            </div>
            <div>
              <div
                className="font-poppins text-[15.5px] font-bold text-[var(--color-haiti)]"
                dangerouslySetInnerHTML={{ __html: item.label }}
              />
              <div
                className="mt-0.5 font-poppins text-sm leading-[21px] text-[var(--color-dolphin)]"
                dangerouslySetInnerHTML={{ __html: item.price }}
              />
            </div>
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
