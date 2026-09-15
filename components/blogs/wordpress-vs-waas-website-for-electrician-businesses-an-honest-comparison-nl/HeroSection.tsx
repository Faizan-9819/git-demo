import Button from "@/app/components/ui/Button";

export default function HeroSection() {
  return (
    <section className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-[72px]">
      <div>
        <div className="font-sans text-[13px] font-semibold uppercase tracking-[2px] text-[#6F4CF5]">
          Growth Rocket · Vergelijkingsgids
        </div>
        <div className="mt-3.5 flex flex-wrap items-center gap-2.5">
          <span className="inline-flex h-[26px] items-center rounded-full bg-[#F4F1FE] px-3 font-sans text-[13px] font-semibold text-[#6F4CF5]">
            Voor elektriciens
          </span>
          <span className="font-sans text-[13px] text-[#9AA1AC]">
            ±9 min lezen
          </span>
        </div>
        <h1 className="mt-5 text-balance font-sans text-[34px] font-bold leading-[1.17] tracking-[-0.6px] text-[#0F1222] sm:text-[40px] sm:leading-[1.2] lg:text-[46px] lg:leading-[1.17] lg:tracking-[-1.2px]">
          WordPress of een website-abonnement? De eerlijke vergelijking voor
          elektriciens
        </h1>
        <p className="mt-[22px] max-w-[640px] text-pretty font-sans text-lg leading-[1.5] text-[#374151] sm:text-xl sm:leading-[1.52]">
          Run je een installatiebedrijf in Nederland, dan heb je waarschijnlijk
          van twee kanten iets anders gehoord. De één zegt: &ldquo;bouw hem
          gewoon op WordPress, dat is de standaard.&rdquo; De ander zegt:
          &ldquo;neem een beheerde website, daar heb jij geen tijd voor.&rdquo;
          Allebei kunnen ze gelijk hebben — afhankelijk van wie jíj bent.
        </p>
        <div className="mt-[30px] flex flex-wrap gap-3.5">
          <Button href="#decision" variant="primary" size="lg" arrow="up-right">
            Doe de beslistest
          </Button>
          <Button href="#naast-elkaar" variant="secondary" size="lg">
            Bekijk de vergelijking
          </Button>
        </div>
      </div>

      <figure className="m-0">
        <div
          role="img"
          aria-label="WordPress naast een volledig ontzorgd website-abonnement voor elektriciens — zelfbeheer en uit handen gegeven naast elkaar"
          className="grid grid-cols-2 overflow-hidden rounded-[20px] border border-[#E6E8EF] bg-white shadow-[0_20px_50px_rgba(91,33,182,0.08)]"
        >
          <div className="border-r border-[#EEF0F4] bg-[#FBFBFD] p-[22px] sm:p-6.5">
            <div className="font-sans text-xs font-semibold uppercase tracking-[1.5px] text-[#6B7280]">
              WordPress
            </div>
            <div className="mt-1 font-sans text-[15px] font-semibold text-[#1F2937]">
              Zelfbeheer
            </div>
            <div className="mt-4 flex flex-col gap-2.5">
              {["Hosting", "Modules", "Updates", "Code-eigendom"].map(
                (item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2.5 rounded-[10px] border border-[#E6E8EF] bg-white px-3 py-2.5 font-sans text-[13px] text-[#374151]"
                  >
                    <span
                      aria-hidden="true"
                      className="inline-block size-2 flex-none rounded-[2px] bg-[#1F2937]"
                    />
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </div>
                ),
              )}
            </div>
            <div className="mt-3.5 font-sans text-xs leading-[1.3] text-[#9AA1AC]">
              Jij (of iemand die je betaalt) beheert elk onderdeel.
            </div>
          </div>
          <div className="bg-[#F4F1FE] p-[22px] sm:p-6.5">
            <div className="font-sans text-xs font-semibold uppercase tracking-[1.5px] text-[#6F4CF5]">
              Website-abonnement
            </div>
            <div className="mt-1 font-sans text-[15px] font-semibold text-[#1F2937]">
              Volledig ontzorgd
            </div>
            <div className="mt-4 rounded-xl border border-[#D8D2F5] bg-white p-3.5">
              <div className="mb-2.5 font-sans text-[13px] font-semibold text-[#1F2937]">
                Eén beheerde dienst
              </div>
              <div className="flex flex-wrap gap-2">
                {["Bouw", "Hosting", "Beveiliging", "Updates"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-[#F4F1FE] px-2.5 py-1 font-sans text-xs text-[#6F4CF5]"
                    dangerouslySetInnerHTML={{ __html: item }}
                  />
                ))}
              </div>
            </div>
            <div className="mt-3.5 font-sans text-xs leading-[1.3] text-[#8B7FB0]">
              De aanbieder regelt alles; jij vraagt wijzigingen aan.
            </div>
          </div>
        </div>
        <figcaption className="mt-3 text-center font-sans text-[13px] text-[#9AA1AC]">
          Zelf beheren tegenover volledig uit handen gegeven — geen van beide is
          per definitie beter.
        </figcaption>
      </figure>
    </section>
  );
}
