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
      className="mt-0.5 flex-none text-[var(--color-violet-42)]"
    >
      <polyline points="4 12.5 9.5 18 20 6" />
    </svg>
  );
}

function DotIcon() {
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
      className="mt-0.5 flex-none text-[var(--color-dolphin)]"
    >
      <circle cx="12" cy="12" r="9" />
      <line x1="12" y1="8" x2="12" y2="12.5" />
      <line x1="12" y1="16" x2="12" y2="16" />
    </svg>
  );
}

function WarningIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className="text-[var(--color-dolphin)]"
    >
      <path d="M12 3l9 16H3z" />
      <line x1="12" y1="10" x2="12" y2="14" />
      <line x1="12" y1="17" x2="12" y2="17" />
    </svg>
  );
}

function ChecklistBlock({
  eyebrow,
  items,
  dim,
}: {
  eyebrow: string;
  items: string[];
  dim?: boolean;
}) {
  return (
    <div className="mt-9 max-w-[760px]">
      <div
        className="font-poppins text-[11px] font-semibold uppercase tracking-[1.1px] text-[var(--color-dolphin)]"
        dangerouslySetInnerHTML={{ __html: eyebrow }}
      />
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <div key={item} className="flex items-start gap-3">
            {dim ? <DotIcon /> : <CheckIcon />}
            <span
              className="font-poppins text-base leading-6 text-[var(--color-haiti)]"
              dangerouslySetInnerHTML={{ __html: item }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export type WhySevenDaysSectionProps = {
  heading: string;
  intro: string;
  readyEyebrow: string;
  readyItems: string[];
  mattersEyebrow: string;
  mattersItems: string[];
  needsYouEyebrow: string;
  needsYouItems: string[];
  needsYouOutro: string;
  caveatHeading: string;
  caveatBody: string;
};

export default function WhySevenDaysSection({
  heading,
  intro,
  readyEyebrow,
  readyItems,
  mattersEyebrow,
  mattersItems,
  needsYouEyebrow,
  needsYouItems,
  needsYouOutro,
  caveatHeading,
  caveatBody,
}: WhySevenDaysSectionProps) {
  return (
    <section id="why-7-days" className="scroll-mt-24">
      <h2
        className="mt-12 w-full text-balance font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]"
        dangerouslySetInnerHTML={{ __html: heading }}
      />
      <p
        className="mt-7 w-full text-pretty font-poppins text-[19px] leading-[31px] text-[var(--color-haiti)]"
        dangerouslySetInnerHTML={{ __html: intro }}
      />

      <ChecklistBlock eyebrow={readyEyebrow} items={readyItems} />
      <ChecklistBlock eyebrow={mattersEyebrow} items={mattersItems} />
      <ChecklistBlock eyebrow={needsYouEyebrow} items={needsYouItems} dim />

      <p
        className="mt-4.5 w-full font-poppins text-sm leading-[23px] text-[var(--color-dolphin)]"
        dangerouslySetInnerHTML={{ __html: needsYouOutro }}
      />

      <div className="mt-9 w-full rounded-2xl border border-[var(--color-violet-92)] bg-[var(--color-blog-panel-light)] p-6 sm:p-7">
        <div className="flex items-center gap-2.5">
          <WarningIcon />
          <div
            className="font-poppins text-lg font-bold tracking-[-0.1px] text-[var(--color-haiti)]"
            dangerouslySetInnerHTML={{ __html: caveatHeading }}
          />
        </div>
        <p
          className="mt-3.5 font-poppins text-base leading-[25px] text-[var(--color-dolphin)]"
          dangerouslySetInnerHTML={{ __html: caveatBody }}
        />
      </div>
    </section>
  );
}
