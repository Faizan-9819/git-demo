type Row = { label: string; diy: string; freelancer: string; dfy: string };

const ROWS: Row[] = [
  {
    label: "Upfront cost",
    diy: "€0–€100",
    freelancer: "€1,500–€5,000",
    dfy: "€290 (one-time onboarding)",
  },
  {
    label: "Ongoing cost",
    diy: "€10–€25 / month",
    freelancer: "€500–€1,000 / year + extras",
    dfy: "€690 per year or €69 per month",
  },
  {
    label: "Time to launch",
    diy: "2 weeks to 3+ months",
    freelancer: "4–8 weeks",
    dfy: "5–10 days",
  },
  {
    label: "Effort from you",
    diy: "High",
    freelancer: "Medium upfront, low after",
    dfy: "Low",
  },
  {
    label: "Design quality",
    diy: "Depends on your taste",
    freelancer: "Depends on the freelancer",
    dfy: "Depends on the provider",
  },
  {
    label: "Local SEO (“elektricien [city]”)",
    diy: "You do it yourself",
    freelancer: "Sometimes included",
    dfy: "Usually included",
  },
  {
    label: "Ongoing updates",
    diy: "You do them",
    freelancer: "Billed hourly",
    dfy: "Included",
  },
  {
    label: "Enquiry / booking system",
    diy: "Build or plug in yourself",
    freelancer: "Custom build, extra cost",
    dfy: "Usually included",
  },
  {
    label: "Hosting & security",
    diy: "Your responsibility",
    freelancer: "Sometimes included",
    dfy: "Always included",
  },
  {
    label: "If something breaks",
    diy: "You fix it",
    freelancer: "You wait and pay",
    dfy: "Fixed for you",
  },
  {
    label: "Best for",
    diy: "Tech-confident owners",
    freelancer: "One-off branded builds",
    dfy: "Busy owners who want it handled",
  },
  {
    label: "Risk",
    diy: "Site never finished",
    freelancer: "Freelancer unavailable",
    dfy: "Locked into provider",
  },
];

export default function TabelSection() {
  return (
    <section id="tabel" className="scroll-mt-24">
      <h2 className="mt-24 w-full text-balance font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
        The three routes side by side
      </h2>
      <div className="mt-9 overflow-x-auto rounded-[14px] border border-[#E6E8EF]">
        <div className="min-w-[820px]">
          <div className="grid grid-cols-[1.3fr_1.2fr_1.2fr_1.2fr]">
            <div className="border-b border-[#EEF0F4] bg-[#FBFBFD] px-5 py-4.5" />
            <div className="border-b border-l border-[#EEF0F4] bg-[#FBFBFD] px-5 py-4.5 font-sans text-xs font-semibold uppercase tracking-[1px] text-[#9AA1AC]">
              DIY (Wix / WordPress)
            </div>
            <div className="border-b border-l border-[#EEF0F4] bg-[#FBFBFD] px-5 py-4.5 font-sans text-xs font-semibold uppercase tracking-[1px] text-[#9AA1AC]">
              Freelancer
            </div>
            <div className="border-b border-l border-[#EEF0F4] bg-[#F4F1FE] px-5 py-4.5 font-sans text-xs font-semibold uppercase tracking-[1px] text-[#6F4CF5]">
              Done-For-You
            </div>
          </div>
          {ROWS.map((row, i) => {
            const isLast = i === ROWS.length - 1;
            const borderCls = isLast ? "" : "border-b border-[#EEF0F4]";
            return (
              <div
                key={row.label}
                className="grid grid-cols-[1.3fr_1.2fr_1.2fr_1.2fr]"
              >
                <div
                  className={
                    "bg-[#FBFBFD] px-5 py-4 font-sans text-sm font-semibold text-[#1F2937] " +
                    borderCls
                  }
                >
                  {row.label}
                </div>
                <div
                  className={
                    "border-l border-[#EEF0F4] px-5 py-4 font-sans text-sm text-[#4B5563] " +
                    borderCls
                  }
                >
                  {row.diy}
                </div>
                <div
                  className={
                    "border-l border-[#EEF0F4] px-5 py-4 font-sans text-sm text-[#4B5563] " +
                    borderCls
                  }
                >
                  {row.freelancer}
                </div>
                <div
                  className={
                    "border-l border-[#EEF0F4] bg-[#F4F1FE] px-5 py-4 font-sans text-sm text-[#4B5563] " +
                    borderCls
                  }
                >
                  {row.dfy}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
