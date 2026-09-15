"use client";

import { Fragment } from "react";
import Button from "@/app/components/ui/Button";

function CheckIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#6F4CF5"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mt-0.5 flex-none"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

const OVERZICHT_ITEMS = [
  "Bouw zelf als je het leuk vindt om te knutselen, vrije avonden hebt en vooral een eenvoudig online visitekaartje zoekt.",
  "Huur een freelancer in als je precies weet wat je wilt, €1.500 tot €5.000 vooraf kunt missen en iemand in het bedrijf hebt die daarna de aanpassingen oppakt.",
  "Kies volledig ontzorgd als je geen tijd en geen technische handigheid hebt, en een werkende website met aanvragen en boekingen wilt voor één vaste prijs per jaar.",
  "Betaal je nu elke maand per aanvraag op Werkspot of Zoofy, dan verdient de ontzorgde route zichzelf meestal terug zodra hij één of twee directe aanvragen oplevert.",
  "Dé beste manier om een elektricienwebsite te bouwen bestaat niet — kies het model dat past bij jouw tijd en handigheid, niet het model dat er op dag één het goedkoopst uitziet.",
];

export function OverzichtSection() {
  return (
    <section id="overzicht" className="scroll-mt-24">
      <h2 className="mt-0 w-full text-balance font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
        In één oogopslag: zelf maken of laten maken
      </h2>
      <div className="mt-7 flex max-w-[720px] flex-col gap-3.5 rounded-2xl border border-[#E6E8EF] bg-[#F8F9FC] p-7 sm:p-[28px_30px]">
        {OVERZICHT_ITEMS.map((item) => (
          <div key={item} className="flex items-start gap-3">
            <CheckIcon />
            <span className="font-sans text-base leading-[1.56] text-[#1F2937]">
              {item}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export function VoorWieSection() {
  return (
    <section id="voor-wie" className="scroll-mt-24">
      {/* Preview Image */}
      <div className="mt-24 overflow-hidden rounded-[24px] border border-[#E5E7EB] shadow-lg">
        <img
          src="/blogimages/en/3-diy-vs-done-for-you-website-for-an-electrician-which-one-fits-you/blog_3 (1).webp"
          alt="Example electrician homepage"
        />
      </div>
      <h2 className="mt-24 w-full text-balance font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
        Voor wie deze vergelijking is
      </h2>
      <p className="mt-7 max-w-[720px] text-pretty font-sans text-[16.5px] leading-[1.58] text-[#4B5563]">
        Dit artikel is geschreven voor Nederlandse elektriciens met een
        eenmanszaak (zzp) of een klein team van twee tot tien mensen. Ben je een
        middelgroot installatiebedrijf met een eigen marketeer, dan ligt je
        keuze anders — je kiest dan waarschijnlijk een freelancer of bureau en
        beheert het intern.
      </p>
      <p className="mt-5 max-w-[720px] text-pretty font-sans text-[16.5px] leading-[1.58] text-[#4B5563]">
        Voor alle anderen dekken de drie routes hieronder vrijwel elk
        realistisch pad. We beginnen bij de route waar de meeste ondernemers als
        eerste aan denken.
      </p>
    </section>
  );
}

type RouteField = { label: string; body: string };

type RouteCardProps = {
  num: string;
  routeLabel: string;
  title: string;
  stats: { label: string; value: string }[];
  fields: RouteField[];
  chooseTitle: string;
  chooseItems: string[];
};

function RouteCard({
  num,
  routeLabel,
  title,
  stats,
  fields,
  chooseTitle,
  chooseItems,
}: RouteCardProps) {
  return (
    <div className="flex flex-col gap-6 rounded-2xl border border-[#E6E8EF] bg-white p-7 sm:flex-row sm:gap-7.5 sm:p-[32px_34px]">
      <div className="font-sans text-[62px] font-light leading-[0.85] text-[#C5B7FB] tabular-nums">
        {num}
      </div>
      <div className="min-w-0 flex-1">
        <div className="font-sans text-[11px] font-semibold uppercase tracking-[1.1px] text-[#9AA1AC]">
          {routeLabel}
        </div>
        <h3 className="mt-1.5 font-sans text-[22px] font-bold tracking-[-0.2px] text-[#1F2937]">
          {title}
        </h3>

        <div className="mt-5 flex flex-wrap border-y border-[#EEF0F4]">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={
                "py-3.5 pr-7 " + (i > 0 ? "border-l border-[#EEF0F4] pl-7" : "")
              }
            >
              <div className="font-sans text-[11px] font-semibold uppercase tracking-[1.1px] text-[#9AA1AC]">
                {stat.label}
              </div>
              <div className="mt-1 font-sans text-[15px] font-bold text-[#1F2937]">
                {stat.value}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5.5 flex max-w-[640px] flex-col gap-4.5">
          {fields.map((field) => (
            <div key={field.label}>
              <div className="mb-1 font-sans text-[11px] font-semibold uppercase tracking-[1.1px] text-[#9AA1AC]">
                {field.label}
              </div>
              <div className="font-sans text-base leading-[1.56] text-[#4B5563]">
                {field.body}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <div className="mb-3 font-sans text-[11px] font-semibold uppercase tracking-[1.1px] text-[#9AA1AC]">
            {chooseTitle}
          </div>
          <div className="flex flex-col gap-2.5">
            {chooseItems.map((item) => (
              <div key={item} className="flex items-start gap-2.5">
                <CheckIcon size={16} />
                <span className="font-sans text-[15.5px] leading-[1.48] text-[#1F2937]">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function RoutesSection() {
  const openLeadForm = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-lead-form"));
    }
  };
  return (
    <section id="routes" className="scroll-mt-24">
      <h2 className="mt-24 w-full text-balance font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
        De drie routes voor een elektricienwebsite
      </h2>

      <div className="mt-9 flex flex-col gap-5">
        <RouteCard
          num="01"
          routeLabel="Route 1"
          title="Zelf bouwen (Wix, WordPress, Squarespace)"
          stats={[
            { label: "Kosten", value: "€150–€400 / jaar" },
            { label: "Doorlooptijd", value: "Weekend – maanden" },
            { label: "Jouw inzet", value: "Hoog" },
          ]}
          fields={[
            {
              label: "Wat het is",
              body: "Je maakt een account bij een websitebouwer en zet de site zelf in elkaar met sjablonen. Wix en Squarespace werken met slepen en schuiven; WordPress is flexibeler, maar ook meer werk.",
            },
            {
              label: "Kosten",
              body: "Grofweg €10 tot €25 per maand voor hosting en een sjabloon. Tel daar een domein bij op (€10–€15 per jaar) en eventueel een betaald thema of een extra module. Totaal in het eerste jaar: zo'n €150 tot €400.",
            },
            {
              label: "Doorlooptijd",
              body: "Van een weekend tot enkele maanden — afhankelijk van hoe perfectionistisch je bent en hoe vaak echte klussen je van het scherm wegtrekken.",
            },
            {
              label: "Kwaliteit en vindbaarheid",
              body: "Het sjabloon ziet er prima uit. Maar de teksten, de opbouw en de lokale vindbaarheid komen volledig op jou neer — en precies daar lopen de meeste zelfbouwsites vast. Gevonden worden op “elektricien [plaats]” vraagt om goede paginateksten, een Google Bedrijfsprofiel en echte reviews.",
            },
            {
              label: "Onderhoud",
              body: "Jij regelt de updates, de beveiliging, de haperende modules — en alles wat op zondagavond om tien uur kapotgaat.",
            },
            {
              label: "Risico",
              body: "Het grootste risico zijn niet de kosten. Het is het halve jaar dat de site half af blijft staan terwijl jij op klussen staat.",
            },
          ]}
          chooseTitle="Kies zelf bouwen als…"
          chooseItems={[
            "Je het oprecht leuk vindt om online iets in elkaar te zetten",
            "Je vooral een digitaal visitekaartje zoekt, geen bron van aanvragen",
            "Je elke week een paar vrije avonden overhoudt",
          ]}
        />

        <RouteCard
          num="02"
          routeLabel="Route 2"
          title="Freelancer"
          stats={[
            { label: "Kosten", value: "€1.500–€5.000 vooraf" },
            { label: "Doorlooptijd", value: "4–8 weken" },
            { label: "Jouw inzet", value: "Gemiddeld vooraf" },
          ]}
          fields={[
            {
              label: "Wat het is",
              body: "Je huurt een zelfstandige webdesigner of kleine studio in om een site op maat te bouwen. Het resultaat is van jou.",
            },
            {
              label: "Kosten",
              body: "Doorgaans €1.500 tot €5.000 vooraf voor een mkb-site. Sommige freelancers rekenen daarna €500 tot €1.000 per jaar voor hosting en basisonderhoud. Alles daarbuiten gaat per uur — €60 tot €95 per uur is in Nederland gebruikelijk.",
            },
            {
              label: "Doorlooptijd",
              body: "Meestal 4 tot 8 weken, soms langer als de freelancer meer klanten tegelijk bedient of jij traag bent met foto's en teksten aanleveren.",
            },
            {
              label: "Kwaliteit en vindbaarheid",
              body: "Sterk wisselend. Een goede freelancer die eerder elektriciensites bouwde, levert een beter resultaat dan elke zelfbouwpoging. Een goedkope allrounder levert vooral een mooiere versie van een zelfbouwsite.",
            },
            {
              label: "Onderhoud",
              body: "Hier lopen de meeste freelancerprojecten stuk. Na de lancering wordt elke aanpassing een factuur. En verdwijnt de freelancer, dan erf je een site die je zelf niet makkelijk kunt veranderen.",
            },
            {
              label: "Risico",
              body: "Twee dingen: het bedrag vooraf ben je ook kwijt als het project stilvalt, en voor elke toekomstige wijziging hang je aan de agenda van één persoon.",
            },
          ]}
          chooseTitle="Kies een freelancer als…"
          chooseItems={[
            "Je precies weet wat je wilt en een heldere opdracht kunt formuleren",
            "Het bedrag vooraf geen pijn doet in je begroting",
            "Iemand in het bedrijf de aanpassingen na de lancering echt gaat oppakken",
          ]}
        />

        <RouteCard
          num="03"
          routeLabel="Route 3"
          title="Volledig ontzorgd (beheerd jaarabonnement)"
          stats={[
            { label: "Kosten", value: "€690 per jaar" },
            { label: "Doorlooptijd", value: "5–10 dagen" },
            { label: "Jouw inzet", value: "Laag" },
          ]}
          fields={[
            {
              label: "Wat het is",
              body: "Je betaalt een vast bedrag per jaar of per maand, en een aanbieder bouwt, host, onderhoudt en actualiseert de site voor je. Growth Rocket is er daar één van; er zijn er meer.",
            },
            {
              label: "Kosten",
              body: "€690 per jaar (€69 per maand), plus €290 eenmalige onboarding. Geen aparte rekeningen voor hosting, domein of onderhoud.",
            },
            {
              label: "Doorlooptijd",
              body: "Meestal 5 tot 10 dagen. De aanbieder bouwt op beproefde structuren en regelt de opzet; jij levert vooral foto's, je dienstenlijst en je contactgegevens aan.",
            },
            {
              label: "Kwaliteit en vindbaarheid",
              body: "Hangt af van de aanbieder. Een goede bouwt de site rond echte zoektermen (“groepenkast vervangen”, “laadpaal installeren [plaats]”) en richt ook je Google Bedrijfsprofiel in. Een slechte geeft je een mooie site zonder lokale vindbaarheid.",
            },
            {
              label: "Onderhoud",
              body: "Inbegrepen. Updates, beveiliging, hosting, kleine tekstwijzigingen — het wordt geregeld. Jij stuurt een berichtje; zij passen de site aan.",
            },
            {
              label: "Risico",
              body: "Het platform is niet van jou. Stap je over naar een andere aanbieder, dan laat je de site meestal achter. Kies daarom een aanbieder waarbij je je teksten en je domein netjes kunt meenemen.",
            },
          ]}
          chooseTitle="Kies volledig ontzorgd als…"
          chooseItems={[
            "Je geen tijd en geen zin hebt om een website te beheren",
            "Je een vaste jaarprijs wilt, zonder verrassingsfacturen",
            "Je de site, je aanvragen en je boekingen op één plek wilt hebben — in plaats van verspreid over vijf losse tools",
          ]}
        />
      </div>

      <div className="mt-6 flex flex-col items-start gap-4 rounded-xl border border-[#E4DCFB] bg-[#F4F1FE] p-5.5 sm:flex-row sm:items-center sm:justify-between">
        <span className="font-sans text-base leading-[1.5] text-[#1F2937]">
          Benieuwd wat er precies in een ontzorgde elektricienwebsite zit?
        </span>
        <button
          type="button"
          onClick={openLeadForm}
          className="flex-none cursor-pointer border-0 bg-transparent border-b-[1.5px] border-[#C5B7FB] pb-0.5 font-sans text-[15px] font-semibold text-[#6F4CF5]"
        >
          Bekijk hoe het werkt →
        </button>
      </div>
    </section>
  );
}

const ADVIES_ITEMS = [
  {
    q: "“Ik heb geen tijd en geen technische handigheid”",
    a: "Kies de volledig ontzorgde route. De tijd die zelf bouwen kost, overstijgt vrijwel altijd het maandbedrag van een ontzorgde site. Een freelancer kan ook, maar dan moet jij het project aansturen — en dat is precies het werk waar je geen tijd voor hebt.",
  },
  {
    q: "“Ik ben handig met computers en bouw graag zelf”",
    a: "Dan is zelf bouwen een redelijke keuze. Gebruik WordPress met een strak thema, of Squarespace voor een eenvoudiger opzet. Reken op een volle maand aan avonden — en wees eerlijk over de vraag of je het gaat afmaken.",
  },
  {
    q: "“Ik wil maatwerk en heb daar budget voor”",
    a: "Dan past een freelancer het best. Vraag naar drie elektriciensites die hij eerder bouwde, een vaste offerte en heldere afspraken over aanpassingen na de lancering.",
  },
  {
    q: "“Ik betaal nu per aanvraag op Werkspot of Zoofy”",
    a: "Reken het eerlijk door. Betaal je €15 tot €45 per aanvraag en win je er ongeveer één op de vijf, dan kost een klant je in werkelijkheid €75 tot €225. Een ontzorgde site van zo'n €25 per maand heeft zichzelf terugverdiend zodra hij die maand één directe aanvraag oplevert. De echte reden om over te stappen is trouwens niet de prijs — het is dat de klantrelatie van jou wordt, in plaats van gehuurd.",
  },
  {
    q: "“Ik heb al een website, maar hij oogt verouderd”",
    a: "Controleer drie dingen voordat je opnieuw bouwt: is de site mobielvriendelijk, laadt hij binnen 3 seconden, en word je gevonden op jouw plaats en dienst. Is het antwoord twee keer nee, dan is opnieuw bouwen verstandig — en is de ontzorgde route meestal de snelste weg terug naar een werkende site.",
  },
];

export function AdviesSection() {
  return (
    <section id="advies" className="scroll-mt-24">
      <h2 className="mt-24 w-full text-balance font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
        Advies per situatie
      </h2>
      <p className="mt-7 max-w-[720px] text-pretty font-sans text-[19px] leading-[1.63] text-[#1F2937]">
        Een vergelijkingstabel brengt je maar tot halverwege. De echte keuze
        hangt af van jouw situatie.
      </p>
      <div className="mt-9 flex max-w-[720px] flex-col gap-4">
        {ADVIES_ITEMS.map((item) => (
          <div
            key={item.q}
            className="rounded-[14px] border border-[#E6E8EF] bg-white p-6 sm:p-[24px_28px]"
          >
            <div className="font-sans text-lg font-bold tracking-[-0.1px] text-[#1F2937]">
              {item.q}
            </div>
            <p className="mt-2.5 text-pretty font-sans text-base leading-[1.56] text-[#4B5563]">
              {item.a}
            </p>
          </div>
        ))}
      </div>
      <p className="mt-8 max-w-[720px] text-pretty font-sans text-[16.5px] leading-[1.58] text-[#4B5563]">
        Er is nog één ding dat de meeste vergelijkingen buiten beschouwing
        laten.
      </p>
    </section>
  );
}

const FLOW_STEPS = [
  {
    title: "De website",
    detail: "hoe klanten je vinden en besluiten je te vertrouwen.",
    icon: (
      <>
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <line x1="3" y1="8" x2="21" y2="8" />
        <circle cx="6" cy="6" r="0.6" fill="currentColor" />
      </>
    ),
  },
  {
    title: "Het aanvraag- of boekingssysteem",
    detail: "hoe ze je bereiken zonder overdag te hoeven bellen.",
    icon: (
      <>
        <path d="M4 5h16v11H8l-4 4z" />
        <line x1="8" y1="9" x2="16" y2="9" />
        <line x1="8" y1="12" x2="13" y2="12" />
      </>
    ),
  },
  {
    title: "De plek waar aanvragen binnenkomen",
    detail: "zodat er niets tussendoor glipt.",
    icon: (
      <>
        <path d="M3 13l4-8h10l4 8v6H3z" />
        <path d="M3 13h5l2 3h4l2-3h5" />
      </>
    ),
  },
];

function FlowArrow() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="flex-none rotate-90 text-[#C3C8D2] sm:rotate-0"
    >
      <line x1="4" y1="12" x2="20" y2="12" />
      <polyline points="14 6 20 12 14 18" />
    </svg>
  );
}

export function SysteemSection() {
  return (
    <section id="systeem" className="scroll-mt-24">
      <h2 className="mt-24 w-full text-balance font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
        Wat de meeste vergelijkingen overslaan
      </h2>
      <p className="mt-7 max-w-[720px] text-pretty font-sans text-[19px] leading-[1.63] text-[#1F2937]">
        Een website alleen laat je bedrijf niet groeien. Wat het wel doet, is
        het systeem eromheen:
      </p>
      <div className="mt-9 rounded-2xl border border-[#E6E8EF] bg-[#F8F9FC] p-6 sm:p-[34px]">
        <div className="flex flex-col items-stretch gap-6 sm:flex-row sm:items-center sm:justify-between sm:gap-2">
          {FLOW_STEPS.map((step, i) => (
            <Fragment key={step.title}>
              {i > 0 && <FlowArrow />}
              <div className="flex flex-1 flex-col items-center gap-3 text-center">
                <div className="flex size-13 flex-none items-center justify-center rounded-[13px] border border-[#E1E4EC] bg-white text-[#1F2937]">
                  <svg
                    width="23"
                    height="23"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {step.icon}
                  </svg>
                </div>
                <div className="font-sans text-[15px] font-semibold text-[#1F2937]">
                  {step.title}
                </div>
                <div className="max-w-[220px] font-sans text-sm leading-[1.5] text-[#6B7280]">
                  {step.detail}
                </div>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
      <p className="mt-8 max-w-[720px] text-pretty font-sans text-[16.5px] leading-[1.58] text-[#4B5563]">
        Precies hier lopen de drie routes het verst uiteen. Zelfbouw- en
        freelancerprojecten leveren meestal alleen het eerste onderdeel. Het
        tweede en derde zitten er zelden bij. Een ontzorgde dienst als Growth
        Rocket bevat alle drie: de website, het aanvraagformulier en de Growth
        Rocket Hub — het dashboard waar aanvragen en boekingen overzichtelijk op
        één plek samenkomen.
      </p>
      <p className="mt-5 max-w-[720px] text-pretty font-sans text-[16.5px] leading-[1.58] text-[#4B5563]">
        Zoek je alleen een digitaal visitekaartje, dan doet dat derde onderdeel
        er niet toe. Moet de website werk binnenhalen én bijhouden, dan wel.
      </p>
    </section>
  );
}

const CTA_ITEMS = [
  "Professionele website, voor je gebouwd",
  "Aanvraag- en boekingssysteem inbegrepen",
  "Alles op één plek in de Growth Rocket Hub",
  "Hosting, updates en onderhoud geregeld",
  "Binnen 7 dagen online",
  "Eén vaste prijs per jaar, geen verrassingen",
];

export function CtaSection() {
  const openLeadForm = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-lead-form"));
    }
  };
  return (
    <section id="cta" className="scroll-mt-24">
      <div className="mt-24 rounded-[20px] border border-[#E6E8EF] bg-[#FBFBFD] p-7 sm:p-[52px_48px]">
        <h2 className="max-w-[560px] text-balance font-sans text-[26px] font-bold leading-[1.25] tracking-[-0.3px] text-[#1F2937] sm:text-[32px] sm:leading-[1.25]">
          Liever het hele systeem uit handen?
        </h2>
        <p className="mt-4.5 max-w-[600px] text-pretty font-sans text-lg leading-[1.56] text-[#6B7280]">
          Website, aanvragen en boekingen op één plek, binnen 7 dagen online.
          Bekijk hoe het proces werkt — van intake tot lancering.
        </p>
        <div className="mt-8 grid max-w-[760px] grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-[14px_40px]">
          {CTA_ITEMS.map((item) => (
            <div key={item} className="flex items-start gap-3">
              <CheckIcon size={19} />
              <span className="font-sans text-base leading-[1.5] text-[#1F2937]">
                {item}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-9">
          <Button
            onClick={openLeadForm}
            variant="primary"
            arrow="up-right"
            size="lg"
          >
            Bekijk hoe het werkt
          </Button>
        </div>
      </div>
    </section>
  );
}

type MeerLink = { label: string; href: string };
type MeerGroup = { heading: string; links: MeerLink[] };

const MEER_GROUPS: MeerGroup[] = [
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
        label: "Mobiele website voor elektriciens: waarom het zwaar telt",
        href: "/nl/blog/mobiele-website-voor-elektriciens",
      },
      {
        label: "Elektricienwebsite mobiel testen in 7 stappen",
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
        label: "Zo schrijf je een over-ons-pagina die vertrouwen wekt",
        href: "/nl/blog/10-zo-schrijf-je-een-over-ons-pagina-voor-een-elektricien",
      },
      {
        label: "8 voorbeelden van elektricienwebsites",
        href: "/nl/blog/8-voorbeelden-van-elektricienwebsites-die-klanten-opleveren",
      },
    ],
  },
];

export function MeerSection() {
  return (
    <section id="meer" className="scroll-mt-24">
      <h2 className="mt-24 max-w-[720px] text-balance font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
        Meer voor elektriciens
      </h2>
      <p className="mt-3.5 max-w-[720px] font-sans text-[16.5px] leading-[1.58] text-[#6B7280]">
        Alles wat je helpt om online meer aanvragen binnen te halen — van kosten
        en keuzes tot de bouw en de losse pagina's.
      </p>
      <div className="mt-7 overflow-hidden rounded-[14px] border border-[#E6E8EF] bg-[#F8F9FC]">
        <details className="group">
          <summary className="flex min-h-[60px] cursor-pointer list-none items-center justify-between gap-6 px-7 py-6">
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
            {MEER_GROUPS.map((group) => (
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
