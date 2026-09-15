"use client";

import { useState } from "react";
import InlineLink from "./InlineLink";

export function IntroSection() {
  return (
    <p className="m-0 w-full font-sans text-base leading-[26px] text-[#1F2937] sm:text-[19px] sm:leading-[31px]">
      Een goede over-ons-pagina voor een elektricien doet drie dingen: hij laat
      de mens achter het bedrijf zien, hij beantwoordt de vertrouwensvragen die
      een klant stilletjes stelt, en hij maakt de volgende stap vanzelfsprekend.
      Deze gids loopt precies door hoe je er zo een schrijft &mdash; inclusief
      drie voor-en-na-herschrijvingen van zwakke over-ons-pagina&rsquo;s, zodat
      je het verschil ziet.
    </p>
  );
}

const SILENT_QUESTIONS = [
  "Ben je echt?",
  "Ben je bevoegd?",
  "Wie komt er bij mij binnen?",
  "Wat gebeurt er als er iets misgaat?",
];

export function CustomersSection() {
  return (
    <section id="wat-klanten" className="mt-24 scroll-mt-24">
      <h2 className="w-full text-balance font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
        Wat klanten werkelijk zoeken op je over-ons-pagina
      </h2>
      <p className="mt-6 w-full font-sans text-base leading-[26px] text-[#1F2937] sm:text-[19px] sm:leading-[31px]">
        Begrijp, voordat je iets schrijft, wat de bezoeker aan het doen is.
      </p>
      <blockquote className="mt-8.5 w-full border-l-[3px] border-[#6F4CF5] pl-6">
        <p className="m-0 text-balance font-sans text-2xl font-semibold leading-[1.38] tracking-[-0.3px] text-[#1F2937] sm:text-[26px]">
          Hij leest niet uit nieuwsgierigheid over je. Hij keurt je.
        </p>
      </blockquote>
      <p className="mt-8.5 w-full font-sans text-base leading-[26px] text-[#1F2937] sm:text-[19px] sm:leading-[31px]">
        Zeker in de Nederlandse markt, waar klanten steeds vaker eerst
        controleren met wie ze te maken hebben voordat ze de telefoon pakken,
        zoeken ze bewijs dat je een echt en bevoegd bedrijf bent:
        certificeringen, echte foto&rsquo;s, teamleden met naam, en waarden die
        iets betekenen.
      </p>
      <div className="mt-8 grid w-full grid-cols-1 gap-3.5 lg:grid-cols-2">
        {SILENT_QUESTIONS.map((q) => (
          <div
            key={q}
            className="rounded-2xl border border-[#E6E8EF] bg-[#FBFBFD] p-4.5"
          >
            <div className="font-sans text-xs font-semibold uppercase tracking-[0.4px] text-[#9AA1AC]">
              De stille vraag
            </div>
            <div className="mt-1.5 font-sans text-lg font-semibold text-[#1F2937]">
              {q}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const SIGNALS = [
  {
    n: 1,
    text: "Waarom je het bedrijf bent begonnen",
    note: "(het ontstaansverhaal)",
  },
  { n: 2, text: "Wie er in het team zitten", note: "(met naam en gezicht)" },
  {
    n: 3,
    text: "Certificeringen en lidmaatschappen",
    note: "(Techniek Nederland, KVK-nummer, VCA, enzovoort)",
  },
  {
    n: 4,
    text: "Waarden die klanten iets zeggen",
    note: "(op tijd komen, netjes werken, heldere prijzen)",
  },
  { n: 5, text: "Een persoonlijke noot van de oprichter", note: null },
  {
    n: 6,
    text: "Een duidelijke volgende stap",
    note: "(bellen, boeken of een offerte aanvragen)",
  },
];

function SignalBadge({ n }: { n: number }) {
  return (
    <span className="flex size-[22px] flex-none items-center justify-center rounded-full bg-[#6F4CF5] font-sans text-xs font-bold text-white">
      {n}
    </span>
  );
}

export function SignalsSection() {
  return (
    <section id="signalen" className="mt-26 scroll-mt-24">
      {/* Preview Image */}
      <div className="mt-22 overflow-hidden rounded-[24px] border border-[#E5E7EB] shadow-lg">
        <img
          src="/blogimages/en/10-how-to-write-an-about-us-page-for-an-electrician/spotlight img 2 blog.png"
          alt="Example electrician homepage"
        />
      </div>

      <h2 className="mt-22 max-w-180 text-balance font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
        De zes vertrouwenssignalen
      </h2>
      <p className="mt-6 w-full font-sans text-base leading-[26px] text-[#1F2937] sm:text-[19px] sm:leading-[31px]">
        Een sterke over-ons-pagina dekt zes dingen. Zie ze als één samenhangende
        blauwdruk, niet als zes losse verkoopblokken.
      </p>

      <div className="mt-8.5 grid grid-cols-1 items-start gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-10">
        <figure
          role="img"
          aria-label="Geannoteerd voorbeeld van een over-ons-pagina van een elektricien met ontstaansverhaal, teamfoto en certificeringen"
          className="m-0 lg:sticky lg:top-24"
        >
          <div className="overflow-hidden rounded-2xl border border-[#E6E8EF] bg-white shadow-[0_12px_30px_rgba(16,24,40,0.06)]">
            <div className="flex h-[34px] items-center gap-1.5 border-b border-[#EEF0F4] bg-[#FBFBFD] px-3.5">
              <span className="size-2 rounded-full bg-[#E1E4EC]" />
              <span className="size-2 rounded-full bg-[#E1E4EC]" />
              <span className="size-2 rounded-full bg-[#E1E4EC]" />
              <span className="ml-2 font-sans text-[11px] text-[#9AA1AC]">
                over-ons
              </span>
            </div>
            <div className="p-4.5">
              <div className="flex items-center gap-2.5">
                <SignalBadge n={1} />
                <div className="h-[9px] w-[60%] rounded-[5px] bg-[#EDE9FB]" />
              </div>
              <div className="mt-2 flex flex-col gap-1.5 pl-8">
                <div className="h-[7px] w-full rounded bg-[#F0F1F4]" />
                <div className="h-[7px] w-[88%] rounded bg-[#F0F1F4]" />
              </div>

              <div className="mt-4.5 flex items-center gap-2.5">
                <SignalBadge n={2} />
                <div className="h-[9px] w-[34%] rounded-[5px] bg-[#EDE9FB]" />
              </div>
              <div className="mt-2.5 grid grid-cols-3 gap-2 pl-8">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="text-center">
                    <div className="flex aspect-square w-full items-center justify-center rounded-[10px] bg-[#EEF0F4]">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#B7BCC7"
                        strokeWidth="1.6"
                      >
                        <circle cx="12" cy="8" r="3.4" />
                        <path d="M5 20c0-3.5 3-5.5 7-5.5s7 2 7 5.5" />
                      </svg>
                    </div>
                    <div className="mx-auto mt-1.5 h-[5px] w-[70%] rounded-[3px] bg-[#F0F1F4]" />
                  </div>
                ))}
              </div>

              <div className="mt-4.5 flex items-center gap-2.5">
                <SignalBadge n={3} />
                <div className="flex flex-wrap gap-1.5">
                  <span className="h-4 w-11 rounded-full border border-[#E4DCFB] bg-[#F4F1FE]" />
                  <span className="h-4 w-14 rounded-full border border-[#E4DCFB] bg-[#F4F1FE]" />
                  <span className="h-4 w-8 rounded-full border border-[#E4DCFB] bg-[#F4F1FE]" />
                </div>
              </div>

              <div className="mt-4.5 flex items-center gap-2.5">
                <SignalBadge n={4} />
                <div className="h-[9px] w-[48%] rounded-[5px] bg-[#EDE9FB]" />
              </div>

              <div className="mt-4.5 flex items-start gap-2.5">
                <SignalBadge n={5} />
                <div className="flex flex-1 flex-col gap-1.5 border-l-2 border-[#EDE9FB] pl-2.5">
                  <div className="h-1.5 w-[90%] rounded bg-[#F0F1F4]" />
                  <div className="h-1.5 w-[75%] rounded bg-[#F0F1F4]" />
                  <div className="mt-0.5 h-2 w-[38%] rounded bg-[#EDE9FB]" />
                </div>
              </div>

              <div className="mt-4.5 flex items-center gap-2.5">
                <SignalBadge n={6} />
                <div className="flex h-[30px] max-w-[180px] flex-1 items-center rounded-lg bg-[#6F4CF5] px-3">
                  <div className="h-[7px] w-[60%] rounded bg-white/70" />
                </div>
              </div>
            </div>
          </div>
          <figcaption className="mt-3 font-sans text-[12.5px] leading-[18px] text-[#9AA1AC]">
            Blauwdruk als voorbeeld. De cijfers verwijzen naar de zes signalen
            hiernaast.
          </figcaption>
        </figure>

        <ol className="m-0 flex flex-col gap-3.5 p-0">
          {SIGNALS.map((s) => (
            <li
              key={s.n}
              className="flex items-start gap-3.5 rounded-2xl border border-[#EEF0F4] p-4"
            >
              <span className="flex size-[26px] flex-none items-center justify-center rounded-lg bg-[#F4F1FE] font-sans text-[13px] font-bold text-[#6F4CF5]">
                {s.n}
              </span>
              <p className="m-0 font-sans text-base leading-6 text-[#1F2937]">
                {s.text}{" "}
                {s.note && <span className="text-[#6B7280]">{s.note}</span>}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

type Rewrite = {
  n: 1 | 2 | 3;
  title: string;
  before: string;
  after: string;
  tags: string[];
};

const REWRITES: Rewrite[] = [
  {
    n: 1,
    title: "Herschrijving 1: de generieke bedrijfstekst",
    before:
      "“XYZ Elektroservice, opgericht in 2010, is een toonaangevende aanbieder van innovatieve elektrotechnische oplossingen, met een niet-aflatende toewijding aan excellentie voor elke klant. Ons ervaren team van professionals biedt een breed dienstenpakket op maat van uw behoeften.”",
    after:
      "“XYZ Elektroservice begon in 2010 als eenmanszaak in Utrecht. Vandaag zijn we een team van vier elektriciens en werken we voor huiseigenaren in de hele Randstad. We richten ons op drie dingen: oude groepenkasten vervangen, laadpalen installeren en spoedklussen binnen 24 uur. We zijn lid van Techniek Nederland en volledig verzekerd. Onze oprichter, Jan de Vries, staat nog elke week zelf op klussen.”",
    tags: [
      "Echte plaats: Utrecht & Randstad",
      "Teamgrootte: vier elektriciens",
      "Focus: drie concrete specialismen",
      "Bewijs: Techniek Nederland, verzekerd",
      "Continuïteit: oprichter Jan de Vries op klussen",
    ],
  },
  {
    n: 2,
    title: "Herschrijving 2: de “wij doen alles”-pagina",
    before:
      "“Wij bieden een compleet pakket elektrotechnische diensten, waaronder — maar niet beperkt tot — installaties, reparaties, onderhoud en advies voor particulier, zakelijk en industrie. Onze geavanceerde apparatuur en hoogopgeleide medewerkers garanderen keer op keer topresultaten.”",
    after:
      "“Wij werken alleen aan woningen — huizen, appartementen en kleine verbouwingen. Door die focus kunnen we snel en consequent zijn. Het meeste van ons werk valt in vier categorieën: oudere huizen opnieuw bedraden, omvormers voor zonnepanelen aansluiten, laadpalen plaatsen en groepenkasten vervangen. Valt jouw klus daarbuiten, dan zeggen we dat eerlijk en verwijzen we je door naar iemand die er beter in is.”",
    tags: [
      "Duidelijke focus: alleen woningen",
      "Reden voor focus: snel en consequent",
      "Concreet: vier categorieën werk",
      "Eerlijke grens: verwijst door",
    ],
  },
  {
    n: 3,
    title: "Herschrijving 3: de anonieme teampagina",
    before:
      "“Ons deskundige team van gecertificeerde elektriciens staat voor u klaar met service van het hoogste niveau. Elk teamlid brengt jarenlange ervaring en passie voor perfectie mee naar ieder project.”",
    after:
      "“Ons team is met opzet klein — drie elektriciens en één planner. Tom (oprichter) heeft 22 jaar ervaring en doet de complexe installaties. Lisa is gespecialiseerd in zonnepanelen en thuisbatterijen. Ahmed is onze nieuwste monteur, gecertificeerd voor laadpalen. Sandra plant elke klus in en is degene die opneemt als je belt. Van offerte tot oplevering zie je dezelfde gezichten.”",
    tags: [
      "Echte namen & rollen: Tom, Lisa, Ahmed, Sandra",
      "Teamgrootte: klein en bewust",
      "Specialismen per persoon",
      "Continuïteit: dezelfde gezichten",
    ],
  },
];

function RewriteBlock({ rewrite }: { rewrite: Rewrite }) {
  const [on, setOn] = useState(false);
  return (
    <div className={(rewrite.n > 1 ? "mt-10" : "mt-8.5") + " max-w-240"}>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h3 className="m-0 font-sans text-xl font-bold text-[#1F2937]">
          {rewrite.title}
        </h3>
        <button
          type="button"
          onClick={() => setOn((v) => !v)}
          aria-pressed={on}
          className="inline-flex min-h-10 cursor-pointer items-center gap-2 rounded-lg border border-[#E6E8EF] bg-white px-3.5 font-sans text-[13px] font-semibold text-[#6F4CF5]"
        >
          Markeer het verschil
        </button>
      </div>
      <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <figure className="m-0 rounded-[14px] border border-[#E6E8EF] bg-white p-4.5">
          <figcaption className="font-sans text-xs font-semibold uppercase tracking-[0.4px] text-[#9AA1AC]">
            Voor
          </figcaption>
          <blockquote className="mt-2.5 m-0 font-sans text-[15px] italic leading-[25px] text-[#6B7280]">
            {rewrite.before}
          </blockquote>
        </figure>
        <figure className="m-0 rounded-[14px] border border-[#E4DCFB] bg-[#F4F1FE] p-4.5">
          <figcaption className="font-sans text-xs font-semibold uppercase tracking-[0.4px] text-[#6F4CF5]">
            Na
          </figcaption>
          <blockquote className="mt-2.5 m-0 font-sans text-[15px] leading-[25px] text-[#1F2937]">
            {rewrite.after}
          </blockquote>
        </figure>
      </div>
      {on && (
        <div className="mt-3.5 flex flex-wrap gap-2">
          {rewrite.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-lg border border-[#FBE8A6] bg-[#FFF6DA] px-3 py-1.5 font-sans text-[12.5px] text-[#1F2937]"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export function BeforeAfterSection() {
  return (
    <section id="voor-na" className="mt-26 scroll-mt-24">
      <h2 className="w-full text-balance font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
        Drie herschrijvingen: voor en na
      </h2>
      <p className="mt-6 w-full font-sans text-base leading-[26px] text-[#1F2937] sm:text-[19px] sm:leading-[31px]">
        Hier zijn drie zwakke over-ons-teksten, herschreven met het bovenstaande
        raamwerk. Ze zijn gebaseerd op patronen die we vaak tegenkomen &mdash;
        niet op echte bedrijven.
      </p>

      {REWRITES.map((r) => (
        <RewriteBlock key={r.n} rewrite={r} />
      ))}

      <figure
        role="img"
        aria-label="Zwakke en sterke over-ons-teksten van een installatiebedrijf naast elkaar, met verschillen in toon, concreetheid en vertrouwenssignalen"
        className="mt-8.5 max-w-240 rounded-2xl border border-[#E6E8EF] bg-[#FBFBFD] p-5.5"
      >
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div>
            <div className="font-sans text-xs font-semibold uppercase tracking-[0.4px] text-[#9AA1AC]">
              Zwakke tekst
            </div>
            <ul className="mt-2.5 list-disc pl-[18px] font-sans text-sm leading-6 text-[#6B7280]">
              <li>Holle superlatieven</li>
              <li>Geen namen of plaats</li>
              <li>&ldquo;Doet alles voor iedereen&rdquo;</li>
              <li>Geen bewijs of grenzen</li>
            </ul>
          </div>
          <div>
            <div className="font-sans text-xs font-semibold uppercase tracking-[0.4px] text-[#6F4CF5]">
              Sterke tekst
            </div>
            <ul className="mt-2.5 list-disc pl-[18px] font-sans text-sm leading-6 text-[#1F2937]">
              <li>Echte namen, plaats en teamgrootte</li>
              <li>Concrete specialismen</li>
              <li>Bewijs: lidmaatschappen en verzekering</li>
              <li>Eerlijke grenzen en continuïteit</li>
            </ul>
          </div>
        </div>
        <figcaption className="mt-3.5 font-sans text-[12.5px] leading-[18px] text-[#9AA1AC]">
          Sterke teksten vervangen lege superlatieven door namen, focus, bewijs
          en beloftes.
        </figcaption>
      </figure>
    </section>
  );
}

const FLOW_STEPS = [
  {
    label: "Vertrouwen opbouwen",
    icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
  },
  {
    label: "Contact of boeking",
    icon: (
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    ),
  },
  {
    label: "Aanvraag vastleggen",
    icon: (
      <path d="M5 3h14a2 2 0 0 1 2 2v16l-4-3-3 2-3-2-4 3V5a2 2 0 0 1 2-2z" />
    ),
  },
  { label: "Opvolgen", icon: <path d="M20 6L9 17l-5-5" /> },
];

export function WiderSiteSection() {
  return (
    <section id="plaats" className="mt-26 scroll-mt-24">
      <h2 className="w-full text-balance font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
        Waar de over-ons-pagina in je bredere website past
      </h2>
      <p className="mt-6 w-full font-sans text-base leading-[26px] text-[#1F2937] sm:text-[19px] sm:leading-[31px]">
        De over-ons-pagina is één onderdeel van een werkende website. Hij bouwt
        vertrouwen op &mdash; maar de klant heeft daarna nog een makkelijke
        manier nodig om er iets mee te doen. Dat betekent meestal een
        contactformulier, een boekingsmogelijkheid of een duidelijk
        telefoonnummer, plus een manier om de aanvragen die binnenkomen bij te
        houden.
      </p>
      <p className="mt-5.5 w-full font-sans text-base leading-[26px] text-[#1F2937] sm:text-[19px] sm:leading-[31px]">
        Komen aanvragen sneller binnen dan jij ze kunt bijbenen, dan raken ze
        zoek. En raken ze zoek, dan is het vertrouwen dat je op de
        over-ons-pagina hebt opgebouwd voor niets geweest. Growth Rocket koppelt
        daarom een professionele website aan de{" "}
        <InlineLink href="https://hub.getgrowthrocket.com/">
          Growth Rocket Hub
        </InlineLink>
        , waar elke aanvraag, boeking en opvolging overzichtelijk op één plek
        staat. De website haalt de klant binnen; de Hub houdt je grip op wat er
        daarna gebeurt.
      </p>

      <div className="mt-7.5 flex w-full flex-col items-stretch gap-2.5 lg:flex-row">
        {FLOW_STEPS.map((step, i) => (
          <div
            key={step.label}
            className="flex flex-1 flex-col items-center gap-2.5 lg:flex-row"
          >
            <div
              className={
                "flex-1 rounded-[14px] border p-4.5 text-center " +
                (i === FLOW_STEPS.length - 1
                  ? "border-[#E4DCFB] bg-[#F4F1FE]"
                  : "border-[#EEF0F4] bg-white")
              }
            >
              <div
                className={
                  "mx-auto flex size-[38px] items-center justify-center rounded-[10px] text-[#6F4CF5] " +
                  (i === FLOW_STEPS.length - 1 ? "bg-white" : "bg-[#F4F1FE]")
                }
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {step.icon}
                </svg>
              </div>
              <div className="mt-2.5 font-sans text-[14px] font-semibold text-[#1F2937]">
                {step.label}
              </div>
            </div>
            {i < FLOW_STEPS.length - 1 && (
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#C5B7FB"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="flex-none rotate-90 lg:rotate-0"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8.5 w-full rounded-2xl border border-[#E4DCFB] bg-[#F4F1FE] p-6">
        <p className="m-0 text-pretty font-sans text-lg leading-7 text-[#1F2937]">
          Liever een website die vertrouwen én aanvragen in één keer goed
          regelt?{" "}
          <InlineLink href="/nl/contact">
            Bekijk hoe het werkt &rarr;
          </InlineLink>
        </p>
      </div>
    </section>
  );
}

const SILENT_SUMMARY = [
  "Wie ben je?",
  "Ben je bevoegd?",
  "Ga je netjes met mijn huis om?",
  "Wat gebeurt er als er iets misgaat?",
];

export function SummarySection() {
  return (
    <section id="samenvatting" className="mt-26 scroll-mt-24">
      <h2 className="w-full text-balance font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
        Alles bij elkaar
      </h2>
      <p className="mt-6 w-full font-sans text-base leading-[26px] text-[#1F2937] sm:text-[19px] sm:leading-[31px]">
        Een goede over-ons-pagina draait niet om mooi schrijven. Hij draait om
        het beantwoorden van de stille vragen die een klant stelt vóór hij belt:
        wie ben je? Ben je bevoegd? Ga je netjes met mijn huis om? En wat
        gebeurt er als er iets misgaat?
      </p>
      <blockquote className="mt-7.5 w-full rounded-[18px] border border-[#E4DCFB] bg-[#F4F1FE] p-7">
        <div className="font-sans text-xs font-semibold uppercase tracking-[0.6px] text-[#6F4CF5]">
          De vier stille vragen
        </div>
        <div className="mt-4 grid grid-cols-1 gap-3.5 lg:grid-cols-2">
          {SILENT_SUMMARY.map((q) => (
            <div
              key={q}
              className="font-sans text-xl font-semibold leading-7 text-[#1F2937]"
            >
              {q}
            </div>
          ))}
        </div>
      </blockquote>
      <p className="mt-6.5 w-full font-sans text-base leading-[26px] text-[#1F2937] sm:text-[19px] sm:leading-[31px]">
        Beantwoord die helder &mdash; met echte namen, echte foto&rsquo;s, echte
        certificeringen en een persoonlijke noot van de oprichter &mdash; en je
        over-ons-pagina doet zijn werk.
      </p>
      <p className="mt-5.5 w-full font-sans text-base leading-[26px] text-[#1F2937] sm:text-[19px] sm:leading-[31px]">
        Zorg daarna dat de{" "}
        <InlineLink href="/nl/blog/website-checklist-elektriciens/">
          website
        </InlineLink>{" "}
        eromheen snel is, goed werkt op mobiel en het makkelijk maakt om contact
        op te nemen. Dáár gaan de meeste elektricienwebsites onderuit &mdash;
        niet in het schrijven, maar in de opbouw.
      </p>
    </section>
  );
}

type MoreLink = { label: string; href: string };
type MoreGroup = { heading: string; links: MoreLink[] };

const MORE_GROUPS: MoreGroup[] = [
  {
    heading: "Kosten & keuzes",
    links: [
      {
        label: "Wat kost een website voor een elektricien?",
        href: "/nl/blog/kosten-website-voor-elektricien-in-nederland",
      },
      {
        label: "WordPress of een website-abonnement?",
        href: "/nl/blog/wordpress-of-een-website-abonnement-de-eerlijke-vergelijking-voor-elektriciens",
      },
      {
        label: "Zelf maken of laten maken: wat past bij jou?",
        href: "/nl/blog/3-website-zelf-maken-of-laten-maken-de-eerlijke-vergelijking-voor-elektriciens",
      },
    ],
  },
  {
    heading: "Bouw & proces",
    links: [
      {
        label: "Hoe lang duurt het om een elektricien website te maken?",
        href: "/nl/blog/hoe-lang-duurt-een-elektricien-website",
      },
      {
        label: "Mobiele website voor elektriciens: waarom het zwaarder telt",
        href: "/nl/blog/mobiele-website-voor-elektriciens",
      },
      {
        label: "Test je elektricienwebsite in 7 stappen op mobiel",
        href: "/nl/blog/mobielvriendelijke-elektricien-website-de-praktische-gids-om-het-goed-te-doen",
      },
      {
        label: "Binnen 7 dagen online: zo werkt het",
        href: "/nl/blog/11-elektricienwebsite-laten-maken",
      },
    ],
  },
  {
    heading: "Pagina's & SEO",
    links: [
      {
        label: "De website-checklist: 10 pagina's die niet mogen ontbreken",
        href: "/nl/blog/website-checklist-elektriciens",
      },
      {
        label: "De 7 elementen van een homepage die aanvragen oplevert",
        href: "/nl/blog/de-7-elementen-van-een-elektricien-homepage-die-aanvragen-oplevert",
      },
      {
        label: "8 voorbeelden van elektricienwebsites die klanten opleveren",
        href: "/nl/blog/8-voorbeelden-van-elektricienwebsites-die-klanten-opleveren",
      },
    ],
  },
];

export function MoreForElectriciansSection() {
  return (
    <section id="meer" className="mt-26 scroll-mt-24">
      <h2 className="max-w-180 text-balance font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
        Meer voor elektriciens
      </h2>
      <p className="mt-3.5 max-w-180 font-sans text-[16.5px] leading-[1.58] text-[#6B7280]">
        Alles wat je helpt om online meer aanvragen binnen te halen — van kosten
        en keuzes tot de bouw en de losse pagina&apos;s.
      </p>
      <div className="mt-7 max-w-225 overflow-hidden rounded-[14px] border border-[#E6E8EF] bg-[#F8F9FC]">
        <details className="group">
          <summary className="flex min-h-15 cursor-pointer list-none items-center justify-between gap-6 px-7 py-6">
            <span className="font-sans text-lg font-semibold text-[#1F2937]">
              Bekijk alle artikelen voor elektriciens
            </span>
            <span
              aria-hidden="true"
              className="flex-none font-sans text-[22px] font-normal leading-none text-[#9AA1AC] transition-transform duration-200 group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <div className="flex flex-col gap-7 px-7 pb-7">
            {MORE_GROUPS.map((group) => (
              <div key={group.heading}>
                <div className="mb-3 font-sans text-[11px] font-semibold uppercase tracking-[1px] text-[#9AA1AC]">
                  {group.heading}
                </div>
                <div className="flex flex-col gap-2.5">
                  {group.links.map((link) => (
                    <div
                      key={link.href}
                      className="flex items-baseline gap-2.5"
                    >
                      <span className="flex-none font-sans text-[15px] text-[#6F4CF5]">
                        →
                      </span>
                      <a
                        href={link.href}
                        className="font-sans text-[15.5px] leading-[1.55] text-[#1F2937] no-underline"
                      >
                        {link.label}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </details>
      </div>
    </section>
  );
}
