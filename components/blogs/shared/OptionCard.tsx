function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="mt-0.5 flex-none text-[var(--color-violet-42)]">
      <polyline points="4 12.5 9.5 18 20 6" />
    </svg>
  );
}

export type OptionPricingLine = string;

export type OptionCardProps = {
  num: string;
  eyebrow: string;
  title: string;
  intro: string[];
  included: string[];
  excluded: string[];
  includedLabel: string;
  excludedLabel: string;
  pricingLabel: string;
  pricingLines: OptionPricingLine[];
  pricingNote?: string;
  extraNote?: string;
  chooseLabel: string;
  chooseText: string;
  skipLabel: string;
  skipText: string;
};

export default function OptionCard({
  num,
  eyebrow,
  title,
  intro,
  included,
  excluded,
  includedLabel,
  excludedLabel,
  pricingLabel,
  pricingLines,
  pricingNote,
  extraNote,
  chooseLabel,
  chooseText,
  skipLabel,
  skipText,
}: OptionCardProps) {
  return (
    <div className="mt-24 flex flex-col gap-6 rounded-2xl border border-[var(--color-violet-92)] bg-white p-6 transition-colors hover:border-[var(--color-violet-76)] sm:flex-row sm:gap-7 sm:p-8">
      <div
        className="flex-none font-poppins text-[40px] font-light leading-[0.85] text-[var(--color-violet-76)] tabular-nums sm:text-[56px] lg:text-[62px]"
        dangerouslySetInnerHTML={{ __html: num }}
      />
      <div className="min-w-0 flex-1">
        <div
          className="font-poppins text-[11px] font-semibold uppercase tracking-[1.1px] text-[var(--color-dolphin)]"
          dangerouslySetInnerHTML={{ __html: eyebrow }}
        />
        <h3
          className="mt-1.5 font-poppins text-[20px] font-bold tracking-[-0.2px] text-[var(--color-haiti)] sm:text-[22px]"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        {intro.map((p, i) => (
          <p
            key={i}
            className="mt-3.5 font-poppins text-[15.5px] leading-[25px] text-[var(--color-dolphin)] sm:text-base sm:leading-[26px]"
            dangerouslySetInnerHTML={{ __html: p }}
          />
        ))}

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <div>
            <div
              className="mb-3 font-poppins text-[11px] font-semibold uppercase tracking-[1.1px] text-[var(--color-dolphin)]"
              dangerouslySetInnerHTML={{ __html: includedLabel }}
            />
            <div className="flex flex-col gap-2.5">
              {included.map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <CheckIcon />
                  <span
                    className="font-poppins text-[15px] leading-[23px] text-[var(--color-haiti)]"
                    dangerouslySetInnerHTML={{ __html: item }}
                  />
                </div>
              ))}
            </div>
          </div>
          <div>
            <div
              className="mb-3 font-poppins text-[11px] font-semibold uppercase tracking-[1.1px] text-[var(--color-dolphin)]"
              dangerouslySetInnerHTML={{ __html: excludedLabel }}
            />
            <div className="flex flex-col gap-2.5">
              {excluded.map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <span className="flex-none font-poppins leading-[23px] text-[var(--color-dolphin)]">–</span>
                  <span
                    className="font-poppins text-[15px] leading-[23px] text-[var(--color-dolphin)]"
                    dangerouslySetInnerHTML={{ __html: item }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-[10px] border border-[var(--color-violet-92)] bg-[var(--color-blog-panel-light)] px-4.5 py-3.5">
          <div
            className="mb-1.5 font-poppins text-[11px] font-semibold uppercase tracking-[1.1px] text-[var(--color-dolphin)]"
            dangerouslySetInnerHTML={{ __html: pricingLabel }}
          />
          <div className="flex flex-col gap-1.5">
            {pricingLines.map((line) => (
              <div
                key={line}
                className="font-poppins text-[15.5px] leading-[24px] text-[var(--color-haiti)]"
                dangerouslySetInnerHTML={{ __html: line }}
              />
            ))}
          </div>
          {pricingNote && (
            <div
              className="mt-2 font-poppins text-sm leading-[23px] text-[var(--color-dolphin)]"
              dangerouslySetInnerHTML={{ __html: pricingNote }}
            />
          )}
        </div>

        {extraNote && (
          <p
            className="mt-5 font-poppins text-[15.5px] leading-[25px] text-[var(--color-dolphin)]"
            dangerouslySetInnerHTML={{ __html: extraNote }}
          />
        )}

        <div className="mt-6 flex flex-col gap-4">
          <div>
            <div
              className="mb-1.5 font-poppins text-[11px] font-semibold uppercase tracking-[1.1px] text-[var(--color-dolphin)]"
              dangerouslySetInnerHTML={{ __html: chooseLabel }}
            />
            <div
              className="font-poppins text-[15.5px] leading-[25px] text-[var(--color-dolphin)]"
              dangerouslySetInnerHTML={{ __html: chooseText }}
            />
          </div>
          <div>
            <div
              className="mb-1.5 font-poppins text-[11px] font-semibold uppercase tracking-[1.1px] text-[var(--color-dolphin)]"
              dangerouslySetInnerHTML={{ __html: skipLabel }}
            />
            <div
              className="font-poppins text-[15.5px] leading-[25px] text-[var(--color-dolphin)]"
              dangerouslySetInnerHTML={{ __html: skipText }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
