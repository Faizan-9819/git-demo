export type DecideItem = {
  condition: string;
  answer: string;
};

export default function DecideGrid({ items }: { items: DecideItem[] }) {
  return (
    <div className="mt-9 grid gap-5 sm:grid-cols-3">
      {items.map((item) => (
        <div
          key={item.answer}
          className="rounded-2xl border border-[var(--color-violet-92)] bg-white p-6 transition-colors hover:border-[var(--color-violet-76)]"
        >
          <div
            className="font-poppins text-[15px] leading-[23px] text-[var(--color-dolphin)]"
            dangerouslySetInnerHTML={{ __html: item.condition }}
          />
          <div
            className="mt-4 border-t border-[var(--color-violet-92)] pt-4 font-poppins text-base font-bold text-[var(--color-violet-42)]"
            dangerouslySetInnerHTML={{ __html: item.answer }}
          />
        </div>
      ))}
    </div>
  );
}
