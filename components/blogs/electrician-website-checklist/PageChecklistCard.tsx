function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="mt-0.5 flex-none text-[var(--color-violet-42)]">
      <polyline points="4 12.5 9.5 18 20 6" />
    </svg>
  );
}

export type PageChecklistCardProps = {
  num: string;
  eyebrow: string;
  title: string;
  intro: string;
  includeLabel: string;
  include: string[];
  mistakeLabel: string;
  mistake: string;
  learnMoreHref?: string;
  learnMoreLabel?: string;
};

export default function PageChecklistCard({
  num,
  eyebrow,
  title,
  intro,
  includeLabel,
  include,
  mistakeLabel,
  mistake,
  learnMoreHref,
  learnMoreLabel,
}: PageChecklistCardProps) {
  return (
    <div className="flex flex-col gap-6 rounded-2xl border border-[var(--color-violet-92)] bg-white p-6 transition-colors hover:border-[var(--color-violet-76)] sm:flex-row sm:gap-7 sm:p-8">
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
        <p
          className="mt-3.5 font-poppins text-[15.5px] leading-[25px] text-[var(--color-dolphin)] sm:text-base sm:leading-[26px]"
          dangerouslySetInnerHTML={{ __html: intro }}
        />

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <div>
            <div
              className="mb-3 font-poppins text-[11px] font-semibold uppercase tracking-[1.1px] text-[var(--color-dolphin)]"
              dangerouslySetInnerHTML={{ __html: includeLabel }}
            />
            <div className="flex flex-col gap-2.5">
              {include.map((item) => (
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
              className="mb-3 font-poppins text-[11px] font-semibold uppercase tracking-[1.1px] text-[#D6389E]"
              dangerouslySetInnerHTML={{ __html: mistakeLabel }}
            />
            <div className="rounded-[10px] border border-[var(--color-violet-92)] border-l-[3px] border-l-[#D6389E] bg-[var(--color-blog-panel-light)] px-4.5 py-4">
              <span
                className="font-poppins text-sm leading-6 text-[var(--color-dolphin)]"
                dangerouslySetInnerHTML={{ __html: mistake }}
              />
            </div>
          </div>
        </div>

        {learnMoreHref && learnMoreLabel && (
          <div className="mt-5">
            <a
              href={learnMoreHref}
              className="font-poppins text-sm font-medium text-[var(--color-violet-42)] underline decoration-[var(--color-violet-76)] decoration-1 underline-offset-[3px] transition-colors hover:decoration-[var(--color-violet-42)]"
              dangerouslySetInnerHTML={{ __html: learnMoreLabel }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
