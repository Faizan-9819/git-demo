import WhyCardsGrid, { type WhyCard } from "./WhyCardsGrid";

export type WhySectionProps = {
  heading: string;
  lead: string;
  body: string;
  cards: WhyCard[];
  outro: string;
  /** Set true when this is the first section in the article, to remove the top margin so it aligns with the TOC. */
  isFirst?: boolean;
};

export default function WhySection({
  heading,
  lead,
  body,
  cards,
  outro,
  isFirst = false,
}: WhySectionProps) {
  return (
    <section id="why" className="scroll-mt-24">
      <h2
        className={
          (isFirst ? "mt-0" : "mt-12") +
          " w-full font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]"
        }
        dangerouslySetInnerHTML={{ __html: heading }}
      />
      <div className="w-full">
        <p
          className="mt-7 font-poppins text-[19px] leading-[31px] text-[var(--color-haiti)]"
          dangerouslySetInnerHTML={{ __html: lead }}
        />
        <p
          className="mt-5 font-poppins text-[16.5px] leading-[26px] text-[var(--color-dolphin)]"
          dangerouslySetInnerHTML={{ __html: body }}
        />
      </div>

      <WhyCardsGrid items={cards} />

      <p
        className="mt-8 max-w-[720px] font-poppins text-[16.5px] leading-[26px] text-[var(--color-dolphin)]"
        dangerouslySetInnerHTML={{ __html: outro }}
      />
    </section>
  );
}
