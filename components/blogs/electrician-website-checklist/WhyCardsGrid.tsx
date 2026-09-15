export type WhyCard = {
  title: string;
  body: string;
  icon: React.ReactNode;
};

export default function WhyCardsGrid({ items }: { items: WhyCard[] }) {
  return (
    <div className="mt-9 grid gap-5 sm:grid-cols-3">
      {items.map((item) => (
        <div
          key={item.title}
          className="rounded-2xl border border-[var(--color-violet-92)] bg-white p-6 transition-colors hover:border-[var(--color-violet-76)]"
        >
          <div className="flex size-11 items-center justify-center rounded-[11px] bg-[var(--color-violet-98)] text-[var(--color-violet-42)]">
            <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              {item.icon}
            </svg>
          </div>
          <div
            className="mt-4 font-poppins text-[17px] font-bold tracking-[-0.1px] text-[var(--color-haiti)]"
            dangerouslySetInnerHTML={{ __html: item.title }}
          />
          <div
            className="mt-1.5 font-poppins text-[15px] leading-[23px] text-[var(--color-dolphin)]"
            dangerouslySetInnerHTML={{ __html: item.body }}
          />
        </div>
      ))}
    </div>
  );
}
