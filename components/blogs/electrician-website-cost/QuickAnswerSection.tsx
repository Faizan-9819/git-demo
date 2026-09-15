function CheckIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className="mt-1 flex-none text-[var(--color-violet-42)]"
    >
      <polyline points="4 12.5 9.5 18 20 6" />
    </svg>
  );
}

export type QuickAnswerSectionProps = {
  intro: string[];
  calloutText: string;
  heading: string;
  leadIn: string;
  models: string[];
  outro: string;
};

export default function QuickAnswerSection({
  intro,
  calloutText,
  heading,
  leadIn,
  models,
  outro,
}: QuickAnswerSectionProps) {
  return (
    <section id="quick-answer" className="scroll-mt-24">
      <div className="w-full">
        {intro.map((p, i) => (
          <p
            key={i}
            className={
              (i === 0 ? "" : "mt-5") +
              " font-poppins text-[16.5px] leading-[26px] text-[var(--color-dolphin)]"
            }
            dangerouslySetInnerHTML={{ __html: p }}
          />
        ))}
      </div>

      <div className="mt-6 w-full rounded-xl border border-[var(--color-violet-92)] bg-[var(--color-violet-98)] px-5 py-4.5 sm:px-6">
        <p
          className="font-poppins text-[15.5px] leading-6 text-[var(--color-haiti)]"
          dangerouslySetInnerHTML={{ __html: calloutText }}
        />
      </div>

      <h2
        className="mt-20 w-full  font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:mt-24 sm:text-[30px]"
        dangerouslySetInnerHTML={{ __html: heading }}
      />
      <p
        className="mt-7 max-w-[720px] font-poppins text-[16.5px] leading-[26px] text-[var(--color-dolphin)]"
        dangerouslySetInnerHTML={{ __html: leadIn }}
      />

      <div className="mt-5 flex w-full flex-col gap-3.5 rounded-2xl border border-[var(--color-violet-92)] bg-[var(--color-blog-panel)] p-6 sm:p-7">
        {models.map((model) => (
          <div key={model} className="flex items-start gap-3">
            <CheckIcon />
            <span
              className="font-poppins text-base leading-[25px] text-[var(--color-haiti)]"
              dangerouslySetInnerHTML={{ __html: model }}
            />
          </div>
        ))}
      </div>

      <p
        className="mt-6 w-full font-poppins text-[16.5px] leading-[26px] text-[var(--color-dolphin)]"
        dangerouslySetInnerHTML={{ __html: outro }}
      />
    </section>
  );
}
