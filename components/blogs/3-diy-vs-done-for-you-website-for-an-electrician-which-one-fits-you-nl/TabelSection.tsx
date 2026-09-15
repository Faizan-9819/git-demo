type Row = { label: string; diy: string; freelancer: string; dfy: string };

const ROWS: Row[] = [
  {
    label: "Kosten vooraf",
    diy: "€0–€100",
    freelancer: "€1.500–€5.000",
    dfy: "€290 (eenmalige onboarding)",
  },
  {
    label: "Doorlopende kosten",
    diy: "€10–€25 per maand",
    freelancer: "€500–€1.000 per jaar, plus meerwerk",
    dfy: "€690 per jaar of €69 per maand",
  },
  {
    label: "Doorlooptijd",
    diy: "2 weken tot 3+ maanden",
    freelancer: "4–8 weken",
    dfy: "5–10 dagen",
  },
  {
    label: "Jouw inzet",
    diy: "Hoog",
    freelancer: "Gemiddeld vooraf, laag daarna",
    dfy: "Laag",
  },
  {
    label: "Ontwerpkwaliteit",
    diy: "Hangt af van jouw smaak",
    freelancer: "Hangt af van de freelancer",
    dfy: "Hangt af van de aanbieder",
  },
  {
    label: "Lokale vindbaarheid (“elektricien [plaats]”)",
    diy: "Doe je zelf",
    freelancer: "Soms inbegrepen",
    dfy: "Meestal inbegrepen",
  },
  {
    label: "Doorlopende aanpassingen",
    diy: "Doe je zelf",
    freelancer: "Per uur gefactureerd",
    dfy: "Inbegrepen",
  },
  {
    label: "Aanvraag- of boekingssysteem",
    diy: "Zelf bouwen of koppelen",
    freelancer: "Maatwerk, tegen meerprijs",
    dfy: "Meestal inbegrepen",
  },
  {
    label: "Hosting en beveiliging",
    diy: "Jouw verantwoordelijkheid",
    freelancer: "Soms inbegrepen",
    dfy: "Altijd inbegrepen",
  },
  {
    label: "Als er iets kapotgaat",
    diy: "Repareer je zelf",
    freelancer: "Wachten en betalen",
    dfy: "Wordt voor je opgelost",
  },
  {
    label: "Past bij",
    diy: "Technisch handige eigenaren",
    freelancer: "Eenmalige maatwerkbouw",
    dfy: "Drukke ondernemers die het geregeld willen hebben",
  },
  {
    label: "Risico",
    diy: "Site komt nooit af",
    freelancer: "Freelancer niet beschikbaar",
    dfy: "Gebonden aan de aanbieder",
  },
];

export default function TabelSection() {
  return (
    <section id="tabel" className="scroll-mt-24">
      <h2 className="mt-24 w-full text-balance font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
        De drie routes naast elkaar
      </h2>
      <div className="mt-9 overflow-x-auto rounded-[14px] border border-[#E6E8EF]">
        <div className="min-w-[820px]">
          <div className="grid grid-cols-[1.3fr_1.2fr_1.2fr_1.2fr]">
            <div className="border-b border-[#EEF0F4] bg-[#FBFBFD] px-5 py-4.5" />
            <div className="border-b border-l border-[#EEF0F4] bg-[#FBFBFD] px-5 py-4.5 font-sans text-xs font-semibold uppercase tracking-[1px] text-[#9AA1AC]">
              Zelf bouwen
            </div>
            <div className="border-b border-l border-[#EEF0F4] bg-[#FBFBFD] px-5 py-4.5 font-sans text-xs font-semibold uppercase tracking-[1px] text-[#9AA1AC]">
              Freelancer
            </div>
            <div className="border-b border-l border-[#EEF0F4] bg-[#F4F1FE] px-5 py-4.5 font-sans text-xs font-semibold uppercase tracking-[1px] text-[#6F4CF5]">
              Volledig ontzorgd
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
