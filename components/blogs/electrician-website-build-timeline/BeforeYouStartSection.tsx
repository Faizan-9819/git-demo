function CheckIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className="mt-0.5 flex-none text-[var(--color-violet-42)]"
    >
      <polyline points="4 12.5 9.5 18 20 6" />
    </svg>
  );
}

export type BeforeYouStartSectionProps = {
  heading: string;
  intro: string;
  items: string[];
  outro: string;
  /** Set true when this is the first section in the article, to remove the top margin so it aligns with the TOC. */
  isFirst?: boolean;
};

export default function BeforeYouStartSection({
  heading,
  intro,
  items,
  outro,
  isFirst = false,
}: BeforeYouStartSectionProps) {
  return (
    <section id="before-you-start" className="scroll-mt-24">
      <h2
        className={
          (isFirst ? "mt-0" : "mt-12") +
          " w-full text-balance font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]"
        }
        dangerouslySetInnerHTML={{ __html: heading }}
      />
      <p
        className="mt-7 w-full text-pretty font-poppins text-[19px] leading-[31px] text-[var(--color-haiti)]"
        dangerouslySetInnerHTML={{ __html: intro }}
      />

      <div className="mt-8 grid w-full gap-3.5 sm:grid-cols-2">
        {items.map((item) => (
          <div key={item} className="flex items-start gap-3">
            <CheckIcon />
            <span
              className="font-poppins text-base leading-6 text-[var(--color-haiti)]"
              dangerouslySetInnerHTML={{ __html: item }}
            />
          </div>
        ))}
      </div>

      <p
        className="mt-7 w-full text-pretty font-poppins text-base leading-[26px] text-[var(--color-dolphin)]"
        dangerouslySetInnerHTML={{ __html: outro }}
      />
    </section>
  );
}
