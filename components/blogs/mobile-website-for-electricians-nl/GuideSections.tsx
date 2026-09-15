"use client";

import type { ReactNode } from "react";
import Button from "@/app/components/ui/Button";
import CostComparisonTable, {
  type ComparisonRow,
} from "@/components/blogs/shared/CostComparisonTable";
import MoreLinksAccordion from "@/components/blogs/shared/MoreLinksAccordion";
import AuditChecklist from "./AuditChecklist";
import Flag from "./Flag";
import InlineLink from "./InlineLink";

function CheckIcon() {
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
      className="mt-0.5 flex-none text-[#6F4CF5]"
    >
      <polyline points="4 12.5 9.5 18 20 6" />
    </svg>
  );
}

export function IntroSection() {
  return (
    <>
      <section id="opening" className="scroll-mt-24">
        <div className="w-full">
          <p className="font-poppins text-[19px] leading-[31px] text-[#1F2937]">
            Een zoekopdracht naar &ldquo;elektricien spoed&rdquo; om tien uur
            &rsquo;s avonds komt niet van iemand achter een bureau. Hij komt van
            een huiseigenaar naast een uitgevallen groepenkast, met één duim op
            de telefoon en een huilend kind in de kamer ernaast. Die belt de
            eerste elektricien van wie het nummer bij de eerste tik werkt.
          </p>
          <p className="mt-6 font-poppins text-[19px] leading-[31px] text-[#1F2937]">
            Is jouw mobiele website traag, verstopt hij je telefoonnummer of
            vraagt hij om zes velden in te vullen, dan belt die huiseigenaar jou
            niet. Hij belt het volgende resultaat. Zo verliezen de meeste
            Nederlandse elektriciens werk waarvan ze nooit hebben geweten dat
            het langskwam.
          </p>
          <p className="mt-6 font-poppins text-[19px] leading-[31px] text-[#1F2937]">
            Deze gids legt uit wat een mobiele website voor elektriciens
            werkelijk nodig heeft — gebaseerd op hoe Nederlandse klanten écht
            naar vakmensen zoeken — en hoe je je eigen site in een minuut of
            tien doorlicht. Bij Growth Rocket bouwen wij websites voor lokale
            dienstverleners in heel Nederland, en dezelfde mobiele problemen
            keren steeds terug: trage laadtijden, verstopte telefoonnummers en
            contactformulieren die elektriciens waardevolle aanvragen kosten.
          </p>
        </div>
      </section>

      <section id="waarom" className="scroll-mt-24">
        <div className="mt-22 overflow-hidden rounded-[24px] border border-[#E5E7EB] shadow-lg">
          <img
            src="/blogimages/en/6-mobile-website-for-electricians/mobile_website_for_electricians_why_it_matters_more_than_you_think_and_how_to_fix_yours_ (3).webp"
            alt="Example electrician homepage"
          />
        </div>

        <h2 className="mt-22 w-full text-balance font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
          Waarom mobiel voor elektriciens zo zwaar telt
        </h2>
        <div className="w-full">
          <p className="mt-7 font-poppins text-[19px] leading-[31px] text-[#1F2937]">
            Veruit het meeste bezoek aan een Nederlandse elektricienwebsite komt
            via een telefoon. Bij spoedzoekopdrachten als &ldquo;stroomstoring
            spoed&rdquo; of &ldquo;elektricien in de buurt&rdquo; is dat aandeel
            nog groter. Dit zijn geen rondkijkers — dit zijn mensen met een
            probleem die een telefoonnummer zoeken.
          </p>
        </div>

        <figure className="mt-10 w-full rounded-2xl border border-[#E6E8EF] bg-[#FBFBFD] p-7 outline-2 outline-offset-4 outline-dashed outline-[#DC2626] sm:p-[30px]">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <figcaption className="font-poppins text-[11px] font-semibold uppercase tracking-[1.1px] text-[#9AA1AC]">
              Waar het bezoek vandaan komt
            </figcaption>
            <span className="rounded-full border border-[#F3D2D2] bg-[#FDF2F2] px-2.5 py-1 font-poppins text-[11px] font-semibold text-[#D64545]">
              ⚑ Te verifiëren · illustratief cijfer
            </span>
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <div className="mb-2 flex items-baseline justify-between">
                <span className="font-poppins text-sm font-semibold text-[#1F2937]">
                  Mobiel
                </span>
                <span className="font-poppins text-[12.5px] text-[#6B7280]">
                  het merendeel
                </span>
              </div>
              <div className="h-5 overflow-hidden rounded-md bg-[#EEF0F4]">
                <div className="h-full w-[82%] rounded-md bg-[#6F4CF5]" />
              </div>
            </div>
            <div>
              <div className="mb-2 flex items-baseline justify-between">
                <span className="font-poppins text-sm font-semibold text-[#1F2937]">
                  Desktop
                </span>
                <span className="font-poppins text-[12.5px] text-[#6B7280]">
                  de rest
                </span>
              </div>
              <div className="h-5 overflow-hidden rounded-md bg-[#EEF0F4]">
                <div className="h-full w-[22%] rounded-md bg-[#C9CDD6]" />
              </div>
            </div>
          </div>
          <div className="mt-[18px] font-poppins text-[13px] leading-5 text-[#9AA1AC]">
            Bij spoedzoekopdrachten ligt het mobiele aandeel nog hoger.
            Illustratief — de verhouding verschilt per bedrijf.
          </div>
        </figure>

        <div className="w-full">
          <p className="mt-8 font-poppins text-[19px] leading-[31px] text-[#1F2937]">
            Dat verandert wat een goede site is. Op een computer vergelijkt en
            leest een bezoeker. Op een telefoon in een noodgeval wil hij één
            ding: jou binnen drie seconden kunnen bereiken. Elke extra tik, elke
            pop-up, elk menu dat nadenken vraagt, is een reden om te vertrekken.
          </p>
          <p className="mt-6 font-poppins text-[19px] leading-[31px] text-[#1F2937]">
            Er speelt bovendien een vertrouwensprobleem dat de meeste
            elektriciens onderschatten. Toezichthouders zoals de{" "}
            <Flag>ACM</Flag> waarschuwen voor{" "}
            <InlineLink
              href="https://www.acm.nl/nl/onderwerpen/consumenten"
              external
            >
              malafide aanbieders
            </InlineLink>{" "}
            — automatisch gegenereerde spoedwebsites met verzonnen adressen.
            Nederlandse klanten controleren daarom steeds vaker eerst de mobiele
            versie van een site voordat ze bellen, op zoek naar tekenen van een
            echt, lokaal bedrijf. Een strakke, snelle mobiele site is dus niet
            alleen betere marketing. Het is hoe je bewijst dat jij de echte
            bent.
          </p>
        </div>
      </section>
    </>
  );
}

export function CostSection() {
  return (
    <section id="kosten" className="scroll-mt-24">
      <h2 className="mt-22 w-full text-balance font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
        Wat een slechte mobiele site je bedrijf kost
      </h2>
      <div className="w-full">
        <p className="mt-7 font-poppins text-[19px] leading-[31px] text-[#1F2937]">
          De rekensom is harder dan de meeste elektriciens beseffen. Een
          aanvraag op{" "}
          <InlineLink href="https://www.werkspot.nl/" external>
            Werkspot
          </InlineLink>{" "}
          kost <Flag>€20 tot €45</Flag>, en omdat drie tot vijf vakmensen op
          dezelfde klus reageren, ligt de gemiddelde winkans rond de 20%. Dat
          komt neer op grofweg €100 tot €225 per gewonnen klant via een
          marktplaats — en die klant is daarna niet van jou.
        </p>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        <div className="rounded-2xl border border-[#E6E8EF] bg-[#FBFBFD] p-[30px_30px_32px]">
          <div className="font-poppins text-[11px] font-semibold uppercase tracking-[1px] text-[#9AA1AC]">
            Via een marktplaats
          </div>
          <div className="mt-[22px] flex flex-col">
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span className="font-poppins text-[44px] font-light leading-none tracking-[-1px] text-[#1F2937]">
                <Flag>€20–45</Flag>
              </span>
              <span className="font-poppins text-sm text-[#6B7280]">
                per aanvraag
              </span>
            </div>
            <div className="py-3.5 pl-0.5 text-[#C3C8D2]">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="12" y1="5" x2="12" y2="18" />
                <polyline points="7 13 12 18 17 13" />
              </svg>
            </div>
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span className="font-poppins text-[44px] font-light leading-none tracking-[-1px] text-[#1F2937]">
                ~20%
              </span>
              <span className="font-poppins text-sm text-[#6B7280]">
                winkans, 3–5 reageren mee
              </span>
            </div>
            <div className="py-3.5 pl-0.5 text-[#C3C8D2]">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="12" y1="5" x2="12" y2="18" />
                <polyline points="7 13 12 18 17 13" />
              </svg>
            </div>
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span className="font-poppins text-[44px] font-light leading-none tracking-[-1px] text-[#1F2937]">
                €100–225
              </span>
              <span className="font-poppins text-sm text-[#6B7280]">
                per gewonnen klant
              </span>
            </div>
          </div>
          <div className="mt-[22px] border-t border-[#EEF0F4] pt-[18px] font-poppins text-[14.5px] leading-[22px] text-[#6B7280]">
            En die klant is daarna een marktplaatsklant — bij de volgende klus
            zoekt hij daar weer.
          </div>
        </div>

        <div className="rounded-2xl border border-[#E4DCFB] bg-[#F4F1FE] p-[30px_30px_32px]">
          <div className="font-poppins text-[11px] font-semibold uppercase tracking-[1px] text-[#6F4CF5]">
            Via je eigen website
          </div>
          <div className="mt-[22px] flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <span className="font-poppins text-[44px] font-light leading-none tracking-[-1px] text-[#6F4CF5]">
              2–3
            </span>
            <span className="font-poppins text-sm text-[#6B7280]">
              directe telefoontjes per maand
            </span>
          </div>
          <p className="mt-5 font-poppins text-base leading-[26px] text-[#1F2937]">
            Een mobielvriendelijke site die zelfs maar twee of drie directe
            telefoontjes per maand opvangt, verdient zichzelf ruimschoots terug.
          </p>
          <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#E4DCFB] bg-white px-[15px] py-2 font-poppins text-[13.5px] font-semibold text-[#6F4CF5]">
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="4 12.5 9.5 18 20 6" />
            </svg>
            Elke beller is van jou
          </div>
        </div>
      </div>

      <div className="w-full">
        <p className="mt-8 font-poppins text-[19px] leading-[31px] text-[#1F2937]">
          Het probleem: de meeste elektricienwebsites kúnnen die telefoontjes
          niet opvangen, omdat ze zijn gebouwd voor een computerscherm en niet
          voor iemand die in een donkere gang staat.
        </p>
        <h3 className="mt-13 font-poppins text-[21px] font-[650] leading-[29px] tracking-[-0.2px] text-[#1F2937]">
          Wat we bij het doorlichten van elektriciensites steeds terugzien
        </h3>
        <p className="mt-5 font-poppins text-[19px] leading-[31px] text-[#1F2937]">
          Een van de meest voorkomende problemen: de site is gebouwd op een
          desktopgerichte opzet en is nooit serieus op een smartphone getest.
          Het gevolg zijn gemiste aanvragen van huiseigenaren die niet snel een
          telefoonnummer vinden, geen offerte kunnen aanvragen of niet kunnen
          controleren of het bedrijf echt bestaat.
        </p>
        <p className="mt-6 font-poppins text-[19px] leading-[31px] text-[#1F2937]">
          In de meeste gevallen vraagt beter mobiel presteren geen ingewikkelde
          techniek. Snellere laadtijden, zichtbare belknoppen, een duidelijk
          werkgebied en sterkere vertrouwenssignalen tillen het aantal directe
          aanvragen al flink op.
        </p>
      </div>
    </section>
  );
}

export function RequirementsSection() {
  const items = [
    "Laadt binnen 3 seconden op gewoon 4G, niet alleen op wifi",
    "Belknop zichtbaar zonder scrollen, met werkende tel-link",
    "WhatsApp-knop — steeds vaker het voorkeurskanaal van Nederlandse huiseigenaren",
    "Duimvriendelijke knoppen van minimaal 44 pixels hoog",
    "Leesbare tekst — lopende tekst minimaal 16 pixels, met sterk contrast",
    "Geen pop-ups op mobiel, zeker niet op het eerste scherm",
    "Eén site die zich aanpast aan elk schermformaat",
    "Korte formulieren — naam, telefoon, probleem, en verder niets",
    "Duidelijk werkgebied — de steden of regio's waar je echt werkt",
    "Echtheidssignalen — KVK-nummer, Techniek Nederland, echte teamfoto's",
  ];
  return (
    <section id="eisen" className="scroll-mt-24">
      <h2 className="mt-22 w-full text-balance font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
        Wat een goede mobiele elektricienwebsite nodig heeft
      </h2>
      <div className="w-full">
        <p className="mt-7 font-poppins text-[19px] leading-[31px] text-[#1F2937]">
          Voordat we het stappenplan induiken, eerst de ondergrens. Dit is het
          minimum voor elke elektricien die vandaag in Nederland werkt.
        </p>
      </div>

      <div className="mt-10 rounded-2xl border border-[#E6E8EF] bg-white p-[40px_28px] shadow-[0_1px_3px_rgba(16,24,40,0.04)] sm:p-[40px_44px]">
        <div className="grid gap-[18px_48px] sm:grid-cols-2">
          {items.map((item) => (
            <div key={item} className="flex items-start gap-3.5">
              <CheckIcon />
              <span
                className="font-poppins text-[16.5px] leading-[25px] text-[#1F2937]"
                dangerouslySetInnerHTML={{ __html: item }}
              />
            </div>
          ))}
        </div>
        <div className="mt-[30px] border-t border-[#EEF0F4] pt-6 font-poppins text-base leading-[25px] text-[#6B7280]">
          Elk punt op deze lijst is op te lossen zonder je site vanaf nul
          opnieuw te bouwen.
        </div>
      </div>
    </section>
  );
}

type Step = {
  num: string;
  title: string;
  pills: string[];
  body: ReactNode[];
  chips?: string[];
  bullets?: string[];
  /** Zin(nen) die na de bullets/chips komen, bijv. een afsluitende regel na een lijst. */
  after?: ReactNode[];
};

const STEPS: Step[] = [
  {
    num: "01",
    title: "Test je site op een echte telefoon, op mobiele data",
    pills: ["op 4G"],
    body: [
      "Open je eigen website op je telefoon — geen desktopvoorbeeld, een echte telefoon — en zet de wifi uit. Mobiele data is wat de meeste spoedbezoekers gebruiken. Probeer drie dingen: je telefoonnummer vinden, erop tikken om te bellen, en een aanvraag versturen. Kost een van die drie meer dan een paar seconden, of moet je inzoomen, dan heb je een probleem. Schrijf op wat er misging — die lijst wordt je klussenlijst.",
      "Doe de test daarna nog een keer, nu door de ogen van een huiseigenaar die je niet kent. Vertelt de site binnen vijf seconden wie je bent, waar je werkt en hoe je bereikbaar bent? Zo niet, begin daar.",
    ],
  },
  {
    num: "02",
    title: "Controleer je laadtijd",
    pills: ["< 3 sec", "≤ 200 KB per foto"],
    body: [
      "Ga naar PageSpeed Insights van Google, plak je adres erin en kijk specifiek naar de mobiele score. Alles onder de 50 kost je werk; boven de 90 wil je zitten. De drie meest voorkomende redenen waarom Nederlandse elektriciensites traag laden:",
    ],
    bullets: [
      "Veel te grote foto's van groepenkasten of laadpalen, rechtstreeks van de camera op 4 MB per stuk",
      "Zware paginabouwers vol ongebruikte onderdelen",
      "Meetscripts van oude campagnes die nooit zijn opgeruimd",
    ],
    after: [
      "Verklein elke foto tot onder de 200 KB en het grootste deel van het probleem verdwijnt. Te grote foto's zijn bij vrijwel elke doorlichting een van de grootste boosdoeners achter trage mobiele sites.",
    ],
  },
  {
    num: "03",
    title: "Voeg een belknop toe — én een WhatsApp-knop",
    pills: ["tel-link", "wa.me"],
    body: [
      "De belknop is het belangrijkste element op een elektricienwebsite. Een ontbrekende of slecht geplaatste belknop hoort bij de meest voorkomende oorzaken van gemiste mobiele aanvragen. Zet hem in de kop, zichtbaar zodra de pagina laadt. Maak hem onmiskenbaar — een knop met telefoonicoon en tekst als “Bel nu” of “Direct bellen”. Gebruik het tel-linkformaat, zodat tikken echt het belscherm opent. De knop blijft in beeld terwijl de bezoeker scrolt.",
      <>
        Zet er daarna een tweede knop naast: WhatsApp. Nederlandse klanten
        kiezen bij niet-urgente klussen steeds vaker voor{" "}
        <InlineLink href="https://www.whatsapp.com/business" external>
          WhatsApp-aanvragen
        </InlineLink>{" "}
        — een offerte voor een nieuwe groepenkast, een vraag over een laadpaal,
        of een foto van een kapot stopcontact. Voor jou komen WhatsApp-aanvragen
        bovendien mét foto binnen, wat tijd scheelt in de werkvoorbereiding.
        Gebruik een wa.me-link, zodat tikken direct WhatsApp opent.
      </>,
    ],
  },
  {
    num: "04",
    title: "Maak de knoppen duimvriendelijk",
    pills: ["≥ 44px"],
    body: [
      "Apple en Google adviseren allebei tikvlakken van minimaal 44 bij 44 pixels. Kleiner, en duimen missen. Gemiste tikken voelen alsof de site kapot is — en de bezoeker vertrekt. Loop elke knop op je homepage na:",
    ],
    chips: ["Bel nu", "WhatsApp", "Vraag een offerte aan", "Menu"],
    after: [
      "Is er één klein, krap of te dicht op andere links, maak hem dan groter en geef hem ruimte. Zet knoppen op mobiel onder elkaar in plaats van ze in één rij te proppen. Een duim is geen laserpointer.",
    ],
  },
  {
    num: "05",
    title: "Repareer lettergroottes en contrast",
    pills: ["16px", "sterk contrast"],
    body: [
      "Lopende tekst hoort 16 pixels of groter te zijn; koppen merkbaar groter. Lichtgrijze tekst op een witte achtergrond oogt elegant in een ontwerp, maar is onleesbaar op een telefoon in daglicht — precies waar veel van je bezoekers staan. Een simpele test: kun je je site buiten, in de zon, lezen zonder in te zoomen? Zo niet, vergroot dan de letters en het contrast. Dit telt extra voor oudere huiseigenaren — een flink deel van de verbouwmarkt.",
    ],
  },
  {
    num: "06",
    title: "Verwijder pop-ups en cookiemuren",
    pills: ["0 pop-ups"],
    body: [
      "Pop-ups op mobiel zijn de snelste manier om een bezoeker kwijt te raken. Google straft opdringerige schermvullende meldingen bovendien af in de mobiele zoekresultaten — je verliest dus zichtbaarheid én bezoekers. Haal elke nieuwsbrief-pop-up op mobiel weg. Verklein de cookiemelding tot een dunne strook onderin die de inhoud niet blokkeert. Moet je echt iets tonen, wacht dan tot de bezoeker minstens één volledig scherm heeft gelezen. Een spoedbeller wacht niet op een cookiemuur — die drukt op terug en belt je concurrent.",
    ],
  },
  {
    num: "07",
    title: "Kort je contactformulier in",
    pills: ["3 velden"],
    body: [
      "Op een telefoon voelt elk formulierveld twee keer zo lang. Vijf velden is meestal al te veel. Houd het op drie:",
    ],
    chips: ["Naam", "Telefoon", "Korte omschrijving"],
    after: [
      "E-mail is optioneel — wie een elektricien zoekt, wordt liever teruggebeld dan dat hij op een mailtje wacht. Bied bij offerteaanvragen een veld om een foto mee te sturen; een foto van de huidige groepenkast vertelt je meer dan drie alinea's tekst en laat je sneller offreren. Wil je nog een stap verder, voeg dan een eenvoudig keuzemenu toe voor het soort klus — “storing / groepenkast / laadpaal / zonnepanelen / anders” — zodat aanvragen voorgesorteerd binnenkomen.",
    ],
  },
  {
    num: "08",
    title: "Maak je werkgebied en je echtheid onmiskenbaar",
    pills: ["werkgebied", "KVK"],
    body: [
      <>
        &ldquo;Elektricien Utrecht&rdquo; en &ldquo;elektricien in de
        buurt&rdquo; horen bij de meest gebruikte zoektermen in de Nederlandse
        markt. Zegt je site niet duidelijk waar je werkt, dan neemt de bezoeker
        aan dat zijn woonplaats er niet bij hoort — en scrolt hij door. Zet je
        werkgebied in het bovenste blok — &ldquo;Werkzaam in Utrecht, Amersfoort
        en Hilversum&rdquo; is genoeg — en herhaal het in de voettekst. Het
        helpt ook je{" "}
        <InlineLink
          href="https://support.google.com/business/answer/7091"
          external
        >
          lokale vindbaarheid
        </InlineLink>
        .
      </>,
      "Toon op dezelfde plek de signalen die jou onderscheiden van malafide aanbieders: je KVK-nummer, je lidmaatschap van Techniek Nederland, een echte foto van je bus of team, en een zichtbaar reviewaantal van Google. Nederlandse klanten kijken daar tegenwoordig naar vóórdat ze bellen — zeker in grotere steden, waar ze meerdere aanbieders vergelijken, horen deze signalen boven de vouw.",
    ],
  },
];

function StepCard({ step, alt }: { step: Step; alt: boolean }) {
  return (
    <div
      className="rounded-2xl border border-[#E6E8EF] p-[30px_24px] sm:p-[30px_34px]"
      style={{ background: alt ? "#F8F9FC" : "#FFFFFF" }}
    >
      <div className="flex flex-col items-start gap-4 sm:flex-row sm:gap-[26px]">
        <div
          className="font-poppins text-[62px] font-light leading-[0.85] text-[#C5B7FB] tabular-nums"
          dangerouslySetInnerHTML={{ __html: step.num }}
        />
        <div className="min-w-0 flex-1 pt-1">
          <div className="flex flex-wrap items-center gap-2.5">
            <div
              className="font-poppins text-[20px] font-[650] leading-[1.2] tracking-[-0.2px] text-[#1F2937]"
              dangerouslySetInnerHTML={{ __html: step.title }}
            />
            {step.pills.map((pill) => (
              <span
                key={pill}
                className="rounded-full border border-[#E4DCFB] bg-[#F4F1FE] px-2.5 py-[3px] font-poppins text-xs font-semibold tabular-nums text-[#6F4CF5]"
                dangerouslySetInnerHTML={{ __html: pill }}
              />
            ))}
          </div>
          {step.body.map((p, i) => (
            <p
              key={i}
              className="mt-3.5 max-w-[640px] font-poppins text-[16.5px] leading-[27px] text-[#4B5563]"
            >
              {p}
            </p>
          ))}
          {step.bullets && (
            <div className="mt-4 flex flex-col gap-2.5">
              {step.bullets.map((bullet) => (
                <div key={bullet} className="flex items-start gap-2.5">
                  <span className="mt-2.5 size-[5px] flex-none rounded-full bg-[#6F4CF5]" />
                  <span
                    className="font-poppins text-[15.5px] leading-6 text-[#1F2937]"
                    dangerouslySetInnerHTML={{ __html: bullet }}
                  />
                </div>
              ))}
            </div>
          )}
          {step.chips && (
            <div className="mt-4 flex flex-wrap gap-2.5">
              {step.chips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-lg border border-[#E4E7EC] bg-white px-3.5 py-2 font-poppins text-sm font-medium text-[#1F2937]"
                  dangerouslySetInnerHTML={{ __html: chip }}
                />
              ))}
            </div>
          )}
          {step.after?.map((p, i) => (
            <p
              key={i}
              className="mt-4 max-w-[640px] font-poppins text-[16.5px] leading-[27px] text-[#4B5563]"
            >
              {p}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

function MidCtaBar({
  eyebrow,
  body,
  accent,
}: {
  eyebrow: string;
  body: string;
  accent?: boolean;
}) {
  const openLeadForm = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-lead-form"));
    }
  };
  return (
    <div
      className="mt-10 flex flex-wrap items-center justify-between gap-7 rounded-2xl p-[34px_36px]"
      style={{
        background: accent ? "#F4F1FE" : "#F8F9FC",
        border: `1px solid ${accent ? "#E4DCFB" : "#E6E8EF"}`,
      }}
    >
      <div className="max-w-[560px]">
        <div
          className="font-poppins text-[11px] font-semibold uppercase tracking-[1.1px]"
          style={{ color: accent ? "#6F4CF5" : "#9AA1AC" }}
          dangerouslySetInnerHTML={{ __html: eyebrow }}
        />
        <p
          className="mt-3 font-poppins text-lg leading-7 text-[#1F2937]"
          dangerouslySetInnerHTML={{ __html: body }}
        />
      </div>
      <Button
        onClick={openLeadForm}
        variant="primary"
        arrow="right"
        className="flex-none"
      >
        Bekijk hoe het werkt
      </Button>
    </div>
  );
}

export function StepsSection() {
  return (
    <section id="stappen" className="scroll-mt-24">
      <h2 className="mt-22 w-full text-balance font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
        Zo maak je je mobiele website in orde: 8 stappen
      </h2>
      <div className="w-full">
        <p className="mt-7 font-poppins text-[19px] leading-[31px] text-[#1F2937]">
          Volg ze op volgorde. Elke stap kost tussen de vijf minuten en een paar
          uur.
        </p>
      </div>

      <div className="mt-11 flex flex-col gap-4.5">
        {STEPS.map((step, i) => (
          <StepCard key={step.num} step={step} alt={i % 2 === 1} />
        ))}
      </div>

      <MidCtaBar
        accent
        eyebrow="Liever laten bouwen"
        body="Liever een mobielvriendelijke elektricienwebsite die voor je wordt gebouwd én beheerd? Zie eerst hoe het proces werkt."
      />
    </section>
  );
}

const comparisonRows: ComparisonRow[] = [
  {
    label: "Laadtijd",
    values: ["6–10 seconden op 4G", "Binnen 3 seconden op 4G"],
  },
  {
    label: "Telefoonnummer",
    values: [
      "Verstopt in voettekst of contactpagina",
      "Zichtbaar in de kop, werkende tel-link",
    ],
  },
  {
    label: "WhatsApp",
    values: ["Niet aanwezig", "Zichtbare knop met wa.me-link"],
  },
  {
    label: "Knoppen",
    values: [
      "Klein, krap, lastig te raken",
      "Minimaal 44 pixels, met ruimte, onder elkaar",
    ],
  },
  {
    label: "Tekstgrootte",
    values: ["12–14 pixels, lichtgrijs", "16 pixels of meer, sterk contrast"],
  },
  {
    label: "Pop-ups",
    values: [
      "Nieuwsbrief- en cookiemeldingen bij binnenkomst",
      "Geen pop-ups, dunne cookiestrook",
    ],
  },
  {
    label: "Contactformulier",
    values: [
      "6+ velden, geen foto-upload",
      "3 velden, foto-upload, keuzemenu per klus",
    ],
  },
  {
    label: "Werkgebied",
    values: [
      "Weggestopt of afwezig",
      "Zichtbaar in het bovenste blok en de voettekst",
    ],
  },
  {
    label: "Vertrouwenssignalen",
    values: [
      "Generieke stockfoto's",
      "KVK-nummer, Techniek Nederland, echte teamfoto's, reviewaantal",
    ],
  },
  {
    label: "Spoedroute",
    values: [
      "Meerdere klikken naar een nummer",
      "Eén tik om te bellen, zonder onderbreking",
    ],
    emphasize: true,
  },
];

export function ComparisonSection() {
  return (
    <section id="vergelijking" className="scroll-mt-24">
      <h2 className="mt-22 w-full font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
        Mobielonvriendelijk tegenover mobielvriendelijk: zo ziet het verschil
        eruit
      </h2>
      <div className="w-full">
        <p className="mt-7 font-poppins text-[19px] leading-[31px] text-[#1F2937]">
          Dit onderscheidt de twee in de praktijk — door de ogen van een
          Nederlandse huiseigenaar die &rsquo;s avonds &ldquo;elektricien
          spoed&rdquo; intypt.
        </p>
      </div>

      <CostComparisonTable
        labelColumnWidth="auto"
        labelColumnHeader="Element"
        columns={[
          { label: "Mobielonvriendelijk", tone: "bad", width: "1.15fr" },
          { label: "Mobielvriendelijk", tone: "good", width: "1.15fr" },
        ]}
        rows={comparisonRows}
      />

      <div className="w-full">
        <p className="mt-8 font-poppins text-[19px] leading-[31px] text-[#1F2937]">
          De mobielonvriendelijke site is lang niet altijd een oude site. Veel
          nieuwe sites op generieke sjablonen of goedkope sitebouwers hebben
          precies dezelfde problemen — ze zijn ontworpen op een computer, voor
          een computer, en nooit getest door iemand die met spoed een
          elektricien probeert te bereiken.
        </p>

        <h3 className="mt-14 font-poppins text-2xl font-[650] leading-[33px] tracking-[-0.2px] text-[#1F2937]">
          Waarom dit over je bedrijf gaat, niet alleen over je website
        </h3>
        <p className="mt-5.5 font-poppins text-[19px] leading-[31px] text-[#1F2937]">
          Een mobielvriendelijke vakmanssite is geen kwestie van smaak. Het is
          hoe je aanvragen opvangt in de minuten die ertoe doen — en hoe je
          stopt met marktplaatsen betalen om klanten te huren die van jou hadden
          moeten zijn.
        </p>
        <p className="mt-6 font-poppins text-[19px] leading-[31px] text-[#1F2937]">
          De rekensom is het deel dat de meeste elektriciens nooit maken. Een
          gemiddelde elektricien op Werkspot betaalt <Flag>€20 tot €45</Flag>{" "}
          per aanvraag, wint er ongeveer één op de vijf, en komt uit op €100 tot
          €225 per gewonnen klant. En die klant is daarna een Werkspot-klant,
          niet jouw klant — bij de volgende klus zoekt hij weer op Werkspot.
        </p>
        <p className="mt-6 font-poppins text-[19px] leading-[31px] text-[#1F2937]">
          Een mobielvriendelijke website die zelfs maar één direct telefoontje
          per week opvangt, kost een fractie daarvan — en elke beller is van
          jou. Over een jaar gerekend is dat verschil een tweede bus, of een
          nieuwe leerling.
        </p>
        <p className="mt-6 font-poppins text-[19px] leading-[31px] text-[#1F2937]">
          Er is nog een tweede, stil voordeel dat zelden wordt genoemd:
          personeel. De Nederlandse installatiesector kampt met{" "}
          <Flag>
            <InlineLink href="https://www.technieknederland.nl/" external>
              tienduizenden openstaande vacatures
            </InlineLink>
          </Flag>{" "}
          en een aanhoudend tekort aan monteurs en BBL-leerlingen. Leerlingen en
          jonge elektriciens vinden hun werkgever vrijwel altijd via hun
          telefoon. Een site die op mobiel prettig werkt, helpt je dus ook aan
          mensen — en dat is voor veel elektriciens inmiddels een groter
          probleem dan klanten vinden.
        </p>
      </div>
    </section>
  );
}

export function AuditSection() {
  return (
    <section id="check" className="scroll-mt-24">
      <h2 className="mt-22 w-full text-balance font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
        Snelle mobiele check: 11 punten
      </h2>
      <div className="w-full">
        <p className="mt-7 font-poppins text-[19px] leading-[31px] text-[#1F2937]">
          Loop deze lijst na op je eigen telefoon, op mobiele data. Tik elk
          onderdeel aan dat klopt — je score telt mee terwijl je gaat. Een score
          van 9 tot 11 is sterk. Alles onder de 7 betekent dat je site je actief
          aanvragen kost.
        </p>
      </div>

      <AuditChecklist />

      <div className="w-full">
        <p className="mt-8 font-poppins text-[19px] leading-[31px] text-[#1F2937]">
          Scoor je onder de 7, dan brengen de stappen in deze gids je erbovenop.
          Wil je grondiger testen, doorloop dan de{" "}
          <InlineLink href="#stappen">
            complete mobiele test in zeven stappen
          </InlineLink>
          . Scoor je onder de 4, dan is opnieuw beginnen met een mobielgerichte
          site meestal sneller dan een oude site oplappen — zoals je een dertig
          jaar oude installatie ook niet stopcontact voor stopcontact vernieuwt.
        </p>
      </div>

      <MidCtaBar
        eyebrow="Volledig ontzorgd"
        body="Liever een mobielvriendelijke elektricienwebsite die voor je wordt gebouwd én beheerd? Je hebt nu het volledige probleem en alle stappen gezien."
      />
    </section>
  );
}

export function ClosingSection() {
  return (
    <section id="closing" className="scroll-mt-24">
      <div className="w-full">
        <h2 className="mt-24 text-balance font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
          Wat je nu kunt doen
        </h2>
        <p className="mt-7 font-poppins text-[19px] leading-[31px] text-[#1F2937]">
          Een mobielgerichte site gaat niet over modern ogen. Hij gaat erover
          dat de huiseigenaar naast die uitgevallen groepenkast jou met één tik
          kan bereiken — en je genoeg vertrouwt om überhaupt te tikken.
        </p>
        <p className="mt-6 font-poppins text-[19px] leading-[31px] text-[#1F2937]">
          Werk de acht stappen uit deze gids af, loop de checklist na op je
          eigen telefoon en herhaal de test elke paar maanden. Voelt die lijst
          als extra werk bovenop een al volle agenda, dan is dat precies
          waarvoor de volledig ontzorgde websitedienst van Growth Rocket is
          gebouwd: ontwerp, opzet, hosting, updates en onderhoud worden
          geregeld, zodat jouw tijd naar klanten gaat in plaats van naar
          websiteklussen. Elke site wordt mobiel-eerst gebouwd — omdat je
          klanten zo zoeken, vergelijken en contact opnemen.
        </p>
      </div>

      <div className="my-16 max-w-[820px]">
        <div className="mb-7 h-0.5 w-12 bg-[#6F4CF5]" />
        <p className="text-balance font-poppins text-[32px] font-semibold leading-[44px] tracking-[-0.4px] text-[#1F2937]">
          De huiseigenaar naast die uitgevallen groepenkast bereikt jou met één
          tik — of hij bereikt je concurrent.
        </p>
      </div>
    </section>
  );
}

export function MoreForElectriciansSection() {
  return (
    <section id="meer" className="scroll-mt-24">
      <h2 className="mt-22 max-w-[720px] text-balance font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
        Meer voor elektriciens
      </h2>
      <p className="mt-3.5 max-w-[720px] font-poppins text-[16.5px] leading-[1.58] text-[#6B7280]">
        Alles wat je helpt om online meer aanvragen binnen te halen — van kosten
        en keuzes tot de bouw en de losse pagina&apos;s.
      </p>
      <MoreLinksAccordion
        toggleLabel="Bekijk alle artikelen voor elektriciens"
        groups={[
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
                label:
                  "Hoe lang duurt het om een elektricien website te maken?",
                href: "/nl/blog/hoe-lang-duurt-een-elektricien-website",
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
                label:
                  "De website-checklist: 10 pagina's die niet mogen ontbreken",
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
                label:
                  "8 voorbeelden van elektricienwebsites die klanten opleveren",
                href: "/nl/blog/8-voorbeelden-van-elektricienwebsites-die-klanten-opleveren",
              },
            ],
          },
        ]}
      />
    </section>
  );
}

export function FinalCtaSection({
  heading,
  body,
  features,
  ctaLabel,
}: {
  heading: string;
  body: string;
  features: string[];
  ctaLabel: string;
}) {
  const openLeadForm = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-lead-form"));
    }
  };
  return (
    <section id="slot-cta" className="scroll-mt-24">
      <div className="rounded-[20px] border border-[#E6E8EF] bg-[#FBFBFD] p-[52px_28px] sm:p-[52px_48px]">
        <h2
          className="max-w-[560px] text-balance font-poppins text-[32px] font-bold leading-10 tracking-[-0.4px] text-[#1F2937]"
          dangerouslySetInnerHTML={{ __html: heading }}
        />
        <p
          className="mt-[18px] max-w-[600px] font-poppins text-lg leading-7 text-[#6B7280]"
          dangerouslySetInnerHTML={{ __html: body }}
        />

        <div className="mt-8 grid max-w-[720px] gap-[14px_40px] sm:grid-cols-2">
          {features.map((feature) => (
            <div key={feature} className="flex items-start gap-3">
              <CheckIcon />
              <span
                className="font-poppins text-base leading-6 text-[#1F2937]"
                dangerouslySetInnerHTML={{ __html: feature }}
              />
            </div>
          ))}
        </div>

        <div className="mt-9 flex flex-wrap items-center gap-5">
          <Button
            onClick={openLeadForm}
            variant="primary"
            arrow="right"
            size="lg"
          >
            <span dangerouslySetInnerHTML={{ __html: ctaLabel }} />
          </Button>
          <span className="font-poppins text-sm text-[#9AA1AC]">
            Volledig ontzorgd, één vaste prijs per jaar.
          </span>
        </div>
      </div>
    </section>
  );
}
