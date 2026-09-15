export type SummaryCard = {
  label: string;
  value: string;
  description: string;
  emphasis?: boolean;
};

export type SummaryCardsSectionProps = {
  cards: [SummaryCard, SummaryCard, SummaryCard];
};

export default function SummaryCardsSection({ cards }: SummaryCardsSectionProps) {
  return (
    <section aria-label="Route summary" className="mt-11 grid gap-4 sm:grid-cols-3">
      {cards.map((card) => (
        <div
          key={card.label}
          className={
            "rounded-2xl border p-6 sm:p-7 " +
            (card.emphasis
              ? "border-[var(--color-violet-92)] bg-[var(--color-violet-98)]"
              : "border-[var(--color-violet-92)] bg-white")
          }
        >
          <div
            className={
              "font-poppins text-[11px] font-semibold uppercase tracking-[1.1px] " +
              (card.emphasis ? "text-[var(--color-violet-42)]" : "text-[var(--color-dolphin)]")
            }
            dangerouslySetInnerHTML={{ __html: card.label }}
          />
          <div
            className={
              "mt-2.5 font-poppins text-[28px] font-bold tracking-[-0.4px] " +
              (card.emphasis ? "text-[var(--color-violet-42)]" : "text-[var(--color-haiti)]")
            }
            dangerouslySetInnerHTML={{ __html: card.value }}
          />
          <div
            className="mt-2 font-poppins text-sm leading-[21px] text-[var(--color-dolphin)]"
            dangerouslySetInnerHTML={{ __html: card.description }}
          />
        </div>
      ))}
    </section>
  );
}
