export type FinalWordSectionProps = {
  heading: string;
  paragraphs: string[];
};

export default function FinalWordSection({
  heading,
  paragraphs,
}: FinalWordSectionProps) {
  return (
    <section id="final-word" className="scroll-mt-24">
      <h2
        className="mt-12 w-full text-balance font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]"
        dangerouslySetInnerHTML={{ __html: heading }}
      />
      {paragraphs.map((paragraph, i) => (
        <p
          key={i}
          className={
            i === 0
              ? "mt-7 w-full text-pretty font-poppins text-[19px] leading-[31px] text-[var(--color-haiti)]"
              : "mt-5 w-full text-pretty font-poppins text-base leading-[26px] text-[var(--color-dolphin)]"
          }
          dangerouslySetInnerHTML={{ __html: paragraph }}
        />
      ))}
    </section>
  );
}
