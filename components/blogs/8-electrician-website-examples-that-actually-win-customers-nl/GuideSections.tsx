"use client";

import { useState, type ReactNode } from "react";
import Button from "@/app/components/ui/Button";
import type { BlogFaqItem } from "@/app/lib/blog-content-types";
import BlogAccordion from "@/components/blogs/shared/BlogAccordion";
import MoreLinksAccordion from "@/components/blogs/shared/MoreLinksAccordion";
import ImagePlaceholder from "@/components/blogs/8-electrician-website-examples-that-actually-win-customers/ImagePlaceholder";

function CheckIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#22A06B"
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mt-0.5 flex-none"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function WarningIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#F59E0B"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mt-0.5 flex-none"
    >
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
    </svg>
  );
}

export function IntroSection() {
  return (
    <section id="opening">
      <p className="font-poppins text-[17px] leading-[1.7] text-[#6B6580]">
        Run je een klein installatiebedrijf en wil je zien hoe <em>goed</em> er
        werkelijk uitziet, dan loopt deze gids acht voorbeelden van
        elektricienwebsites langs — Nederlandse en internationale — en ontleedt
        per site wat hij goed doet. De namen zijn geanonimiseerd en de
        voorbeelden zijn gegroepeerd op aanpak, zodat je de patronen kunt kiezen
        die bij jouw bedrijf passen.
      </p>
      <p className="mt-5 font-poppins text-[17px] leading-[1.7] text-[#6B6580]">
        Een goede elektricienwebsite hoeft niet spectaculair te zijn. Hij moet
        drie dingen doen: uitleggen wat je doet, bewijzen dat je te vertrouwen
        bent, en het makkelijk maken om contact op te nemen. De voorbeelden
        hieronder tonen verschillende wegen naar hetzelfde doel.
      </p>
    </section>
  );
}

const CRITERIA = [
  {
    title: "Heldere opening",
    body: "Vertelt de homepage binnen vijf seconden wat het bedrijf doet?",
    icon: (
      <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
    ),
  },
  {
    title: "Dienstenpresentatie",
    body: "Zijn de diensten gestructureerd, scanbaar en lokaal relevant?",
    icon: (
      <>
        <rect width="7" height="9" x="3" y="3" rx="1" />
        <rect width="7" height="5" x="14" y="3" rx="1" />
        <rect width="7" height="9" x="14" y="12" rx="1" />
        <rect width="7" height="5" x="3" y="16" rx="1" />
      </>
    ),
  },
  {
    title: "Vertrouwenssignalen",
    body: "Reviews, certificeringen en echte foto's van echte mensen.",
    icon: (
      <>
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
  },
  {
    title: "Fotografie",
    body: "Eigen foto's van het werk — geen stockbeelden.",
    icon: (
      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
    ),
  },
  {
    title: "Navigatie & contact",
    body: "Hoe makkelijk is het om te bellen, te berichten of een offerte aan te vragen?",
    icon: (
      <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
    ),
  },
];

export function CriteriaSection() {
  return (
    <section id="criteria" className="scroll-mt-24 pt-14 flex flex-col gap-2">
      {/* Preview Image */}

      <div className=" mt-22 flex flex-col gap-2">
        <span className=" w-full font-poppins text-xs font-semibold uppercase tracking-[2px] text-[#5B21B6]">
          Hoe we ze kozen
        </span>
        <h2 className="w-full font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
          Hoe deze voorbeelden zijn gekozen
        </h2>
      </div>
      <p className="font-poppins text-[17px] leading-[1.7] text-[#6B6580]">
        We bekeken tientallen elektricienwebsites in Nederland, België,
        Duitsland, het Verenigd Koninkrijk en Noord-Amerika. De acht hier zijn
        geselecteerd op vijf criteria — en bij elk voorbeeld staat ook waar het
        tekortschiet, zodat je de zwakke plekken niet meekopieert.
      </p>
      <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
        {CRITERIA.map((c) => (
          <div
            key={c.title}
            className="flex flex-col gap-3 rounded-2xl bg-[#F5F3FF] p-5"
          >
            <div className="flex size-11 items-center justify-center rounded-xl border border-[#E6EEFE] bg-white text-[#5B21B6]">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {c.icon}
              </svg>
            </div>
            <div
              className="font-poppins text-[15px] font-semibold text-[#0A0516]"
              dangerouslySetInnerHTML={{ __html: c.title }}
            />
            <div
              className="font-poppins text-[13px] leading-5 text-[#6B6580]"
              dangerouslySetInnerHTML={{ __html: c.body }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

type Example = {
  id: string;
  number: string;
  title: string;
  intro: ReactNode;
  good: string[];
  watch: string[];
  ideal: string;
  image?: string;
};

const EXAMPLES: Example[] = [
  {
    id: "ex1",
    number: "01",
    title: "De lokale specialist — een familiebedrijf in Utrecht",
    intro: (
      <>
        Een tweemansbedrijf in Utrecht met een homepage die opent met één regel:{" "}
        <em>
          &ldquo;Erkend elektricien in Utrecht en omgeving — bereikbaar binnen
          24 uur.&rdquo;
        </em>{" "}
        Daaronder een telefoonnummer en een WhatsApp-knop.
      </>
    ),
    good: [
      "De opening beantwoordt drie vragen tegelijk: wie, waar, hoe snel.",
      "Twee contactopties boven de vouw — bellen en WhatsApp. Geen drempels.",
      "De over-ons-sectie toont echte foto's van het vader-en-zoonteam bij hun bus. Geen stock.",
      "Reviews worden live van Google opgehaald, met datum en voornaam zichtbaar.",
    ],
    watch: [
      "De dienstpagina's zijn dun: twee of drie zinnen per dienst. Dat beperkt de vindbaarheid.",
      "Geen enkele prijsindicatie. Wie een idee van de kosten wil, moet bellen.",
    ],
    ideal:
      "Zzp'ers en teams van twee of drie die winnen op lokaal vertrouwen en snelheid.",
    image:
      "Clean local electrician hero with headline, phone, and WhatsApp.png",
  },
  {
    id: "ex2",
    number: "02",
    title: "De dienstgedreven site — een installatiebedrijf in Rotterdam",
    intro:
      "Een bedrijf van tien man, gericht op woningrenovaties en klein zakelijk werk. De site is opgebouwd rond diensten, met voor elke dienst een eigen pagina.",
    good: [
      "Acht duidelijk benoemde dienstpagina's: groepenkast vervangen, laadpaal installeren, stroomstoring, elektra aanleggen.",
      "Elke dienstpagina volgt dezelfde opbouw: wat erbij zit, hoe lang het duurt, wat je kunt verwachten, veelgestelde vragen.",
      "De pagina Stroomstoring heeft een prominente spoedbelknop en een reactietijd in gewone taal.",
      "Sterke interne verwijzingen — elke dienstpagina linkt naar twee of drie verwante diensten.",
    ],
    watch: [
      "De homepage is druk. Drie fotocarrousels, een lang dienstenraster en een reviewblok vechten om aandacht.",
      "De veelgestelde vragen staan in marketingtaal, niet zoals een klant de vraag zelf zou stellen.",
    ],
    ideal:
      "Gevestigde bedrijven (5–20 medewerkers) die gevonden willen worden op zoektermen met koopintentie, zoals “laadpaal installeren [plaats]”.",
  },
  {
    id: "ex3",
    number: "03",
    title: "De vertrouwen‑eerst‑site — een Brits familiebedrijf",
    intro:
      "Een Britse elektricien met een homepage die volledig om vertrouwen draait. Boven de vouw: een NICEIC-certificeringslogo (de Britse erkenningsregeling), een Trustpilot-score, het aantal jaren in bedrijf en een postcodecheck.",
    good: [
      "Vijf vertrouwenssignalen zonder scrollen: certificering, reviewscore, bedrijfsjaren, verzekeringsbewijs en een consumentenkeurmerk.",
      "De teampagina toont elke monteur met foto, volledige naam, certificeringen en dienstjaren.",
      "Klantreviews vermelden het soort klus en de plaats — dat maakt ze controleerbaar.",
      "Een korte video op de homepage — onder de 30 seconden — waarin de eigenaar een recente klus laat zien.",
    ],
    watch: [
      "De site is zwaar. Op mobiel laadt hij traag, mede door de automatisch startende video.",
      "Sommige keurmerken linken naar certificaten van eerdere jaren. Verouderd bewijs schaadt meer dan het helpt.",
    ],
    ideal:
      "Elektriciens in markten waar het consumentenvertrouwen kwetsbaar is — overal waar malafide aanbieders in opkomst zijn.",
    image: "Hero with certification badges, review score, and team photo.png",
  },
  {
    id: "ex4",
    number: "04",
    title: "De nichespecialist — laadpalen & zonnepanelen in Amsterdam",
    intro:
      "Een specialist die uitsluitend laadpalen en thuisbatterijen installeert. De website lijkt meer op een productpagina van een techbedrijf dan op een klassieke vakmanssite.",
    good: [
      "De opening draait om één uitkomst: “Een laadpaal die past bij jouw auto, huis en stroomnet.”",
      "Een rekentool stelt drie vragen (automodel, parkeersituatie, groepenkast) en geeft een prijsmarge terug.",
      "Merklogo's van de fabrikanten waarvoor het bedrijf gecertificeerd is — directe geloofwaardigheid.",
      "Praktijkverhalen met voor-en-na-foto's en de werkelijke installatietijd.",
    ],
    watch: [
      "Zó gespecialiseerd dat klanten met algemeen elektrawerk erdoor in verwarring raken.",
      "De rekentool dekt alleen gangbare situaties. Uitzonderingen belanden op een generiek formulier.",
    ],
    ideal:
      "Specialisten met één hoogwaardige niche — laadpalen, zonnepanelen of thuisbatterijen.",
  },
  {
    id: "ex5",
    number: "05",
    title: "De offertewizard‑site — een Duitse elektricien in Hamburg",
    intro:
      "Een klein Duits bedrijf dat zijn hele homepage bouwde rond een offerteaanvraag in meerdere stappen. Het formulier kost ongeveer anderhalve minuut en vraagt naar het soort klus, de urgentie, het adres en een foto-upload.",
    good: [
      "De offertewizard vervangt het generieke contactformulier door een gestructureerde intake.",
      "Klanten sturen een foto van de groepenkast of het probleem mee — dat bespaart een voorrijbezoek.",
      "Een voortgangsbalk toont hoeveel stappen er nog komen: duidelijk en laagdrempelig.",
      "Een bevestigingspagina zet de verwachting: “Wij reageren binnen 4 werkuren.”",
    ],
    watch: [
      "Het formulier is boven de vouw de enige contactoptie. Wie wil bellen, moet zoeken.",
      "De foto-upload hapert op sommige oudere Android-telefoons — elke haperende upload verdwijnt geruisloos.",
    ],
    ideal:
      "Middelgrote bedrijven die vrijblijvende aanvragen willen filteren en minder voorrijbezoeken willen — de ruil: je verliest wie liever gewoon belt.",
    image: "Multi-step quote wizard with photo-upload step.png",
  },
  {
    id: "ex6",
    number: "06",
    title: "De wervingsgerichte site — een Belgisch installatiebedrijf",
    intro:
      "Een Belgisch bedrijf van 25 man met een site die iets doet wat de meeste elektriciens overslaan: actief werven. In het hoofdmenu staan Diensten, Over ons, Werken bij ons en Contact — en die vacaturepagina krijgt dezelfde zorg als de dienstpagina's.",
    good: [
      "Klanten en sollicitanten staan op gelijke voet. De vacaturepagina heeft een eigen opening, eigen foto's en teaminterviews.",
      "Een knop “Solliciteer via WhatsApp” — geen cv-upload nodig voor het eerste contact.",
      "Echte foto's van het team aan het werk, op opleidingsdagen en bij bedrijfsuitjes.",
      "Salarismarges en arbeidsvoorwaarden staan open en bloot vermeld.",
    ],
    watch: [
      "De klantgerichte diensteninhoud is wat mager vergeleken met de wervingsinhoud.",
      "Sommige pagina's mengen Nederlands en Frans door elkaar, wat Belgische bezoekers verwart.",
    ],
    ideal:
      "Elk installatiebedrijf met vijf of meer medewerkers — het personeelstekort is vaak een grotere groeirem dan het vinden van klanten.",
  },
  {
    id: "ex7",
    number: "07",
    title: "De boeking‑eerst‑site — een Noord‑Amerikaanse installateur",
    intro:
      "Een Amerikaans bedrijf waar klanten rechtstreeks vanaf de homepage een bezoekmoment boeken. De boekingskalender is het middelpunt: de klant kiest een tijdvak van twee uur en betaalt een kleine aanbetaling.",
    good: [
      "Eén hoofdactie boven de vouw: een bezoek boeken. Geen ruis.",
      "De aanbetaling filtert vrijblijvende kijkers weg zonder serieuze klanten af te schrikken.",
      "Elke monteur heeft een profielfoto en korte introductie, zichtbaar bij de bevestiging.",
      "Automatische herinneringen 24 uur en 1 uur vooraf beperken het aantal niet-verschenen klanten.",
    ],
    watch: [
      "Het boekingssysteem is de voordeur. Waar klanten eerst een telefoongesprek verwachten, kan dat afstandelijk voelen.",
      "De kosten bij niet verschijnen staan alleen in de kleine lettertjes. Wees daar liever open over.",
    ],
    ideal:
      "Woninginstallateurs met veel volume die hun planning willen stroomlijnen — in Nederland vooral in de grote steden.",
  },
  {
    id: "ex8",
    number: "08",
    title:
      "De redactionele site — een Nederlandse elektricien met een echt blog",
    intro: (
      <>
        Een klein Nederlands installatiebedrijf met een stuk of veertig lange,
        bruikbare artikelen. Onderwerpen als &ldquo;Wanneer moet je je
        groepenkast laten vervangen?&rdquo; en &ldquo;Wat kost een laadpaal in
        2026?&rdquo; — elk artikel oprecht behulpzaam, met foto&rsquo;s en
        heldere opbouw.
      </>
    ),
    good: [
      "Veel organisch bezoek uit informatieve zoekopdrachten die concurrenten laten liggen.",
      "Elk artikel eindigt met een zachte vervolgstap — “Stuur een foto, dan kijken we mee.” — in plaats van een harde verkoopzin.",
      "De inhoud is duidelijk geschreven door iemand die het werk zelf doet. De stem is consequent.",
      "De artikelen verwijzen doordacht naar elkaar, waardoor bezoekers langer blijven.",
    ],
    watch: [
      "Zo'n hoeveelheid inhoud maken kost echt tijd. Een zzp'er zonder hulp houdt dit zelden vol.",
      "Sommige oudere artikelen zijn niet bijgewerkt — verouderde info over subsidies en prijzen kost geloofwaardigheid.",
    ],
    ideal:
      "Bedrijven die willen bouwen aan langdurig, oplopend organisch bezoek en de tijd — of een partner — hebben om de inhoud vers te houden.",
    image: "Blog index page with thumbnails and publish dates.png",
  },
];

function ExampleCard({ example }: { example: Example }) {
  return (
    <section id={example.id} className="scroll-mt-24 pt-14">
      <div className="mb-[18px] flex items-center gap-4">
        <div
          className="flex size-[46px] flex-none items-center justify-center rounded-xl font-poppins text-lg font-bold text-white shadow-[0_12px_32px_rgba(91,33,182,0.10)]"
          style={{
            background: "linear-gradient(90deg, #5B219F 0%, #922698 100%)",
          }}
          dangerouslySetInnerHTML={{ __html: example.number }}
        />
        <h2
          className="text-balance font-poppins text-2xl font-bold leading-[1.15] tracking-[-0.6px] text-[#0A0516] sm:text-[26px]"
          dangerouslySetInnerHTML={{ __html: example.title }}
        />
      </div>
      <p className="mb-6 font-poppins text-[17px] leading-[1.7] text-[#6B6580]">
        {example.intro}
      </p>
      <div className="rounded-[18px] border border-[#E2E8F0] bg-white p-6 shadow-[0_1px_2px_rgba(16,24,40,0.05)] sm:p-[30px]">
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
          <div>
            <div className="mb-3.5 font-poppins text-xs font-semibold uppercase tracking-[1.5px] text-[#22A06B]">
              Wat goed gaat
            </div>
            <ul className="m-0 flex flex-col gap-3 p-0">
              {example.good.map((item) => (
                <li key={item} className="flex list-none gap-2.5">
                  <CheckIcon />
                  <span
                    className="font-poppins text-[15px] leading-[23px] text-[#334155]"
                    dangerouslySetInnerHTML={{ __html: item }}
                  />
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="mb-3.5 font-poppins text-xs font-semibold uppercase tracking-[1.5px] text-[#F59E0B]">
              Let hierop
            </div>
            <ul className="m-0 flex flex-col gap-3 p-0">
              {example.watch.map((item) => (
                <li key={item} className="flex list-none gap-2.5">
                  <WarningIcon />
                  <span
                    className="font-poppins text-[15px] leading-[23px] text-[#334155]"
                    dangerouslySetInnerHTML={{ __html: item }}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-[22px] flex items-start gap-3.5 rounded-xl bg-[#F5F3FF] px-4.5 py-4">
          <span className="whitespace-nowrap pt-0.5 font-poppins text-xs font-semibold uppercase tracking-[1.5px] text-[#5B21B6]">
            Ideaal voor
          </span>
          <span
            className="font-poppins text-[15px] leading-[23px] text-[#334155]"
            dangerouslySetInnerHTML={{ __html: example.ideal }}
          />
        </div>
      </div>
      {example.image && (
        <div className="mt-6 shadow-[0_12px_32px_rgba(91,33,182,0.10)]">
          <ImagePlaceholder
            src={`/blogimages/en/8-electrician-website-examples-that-actually-win-customers/${example.image}`}
            caption={example.image}
            aspect="878.4/378.4"
          />
        </div>
      )}
    </section>
  );
}

export function ExamplesSection() {
  return (
    <>
      {EXAMPLES.map((example) => (
        <ExampleCard key={example.id} example={example} />
      ))}
    </>
  );
}

const SHARED_ROWS = [
  {
    what: "Eén duidelijke taak voor de homepage",
    why: "Bezoekers hoeven niet te lezen; ze zien meteen wat de volgende stap is.",
  },
  {
    what: "Echte foto's van echte mensen",
    why: "Stockfotografie is de snelste manier om onbetrouwbaar te ogen.",
  },
  {
    what: "Reviews met context",
    why: "Een naam, een plaats, een klussoort maakt een review controleerbaar.",
  },
  {
    what: "Contactopties gebouwd voor mobiel",
    why: "Telefoon en WhatsApp zichtbaar boven de vouw.",
  },
  {
    what: "Gestructureerde dienstpagina's",
    why: "Elke dienst een eigen pagina, steeds in dezelfde vorm.",
  },
  {
    what: "Eerlijke verwachtingen",
    why: "Reactietijd, prijsmarge en wat erbij zit — vooraf benoemd.",
  },
];

export function SharedSection() {
  return (
    <section id="gemeen" className="scroll-mt-24 pt-14 flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <span className=" w-full font-poppins text-xs font-semibold uppercase tracking-[2px] text-[#5B21B6]">
          Het patroon achter alle acht
        </span>
        <h2 className="w-full font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
          Wat alle acht voorbeelden gemeen hebben
        </h2>
      </div>
      <p className="font-poppins text-[17px] leading-[1.7] text-[#6B6580]">
        Acht sites, acht aanpakken — en één duidelijk patroon zodra je ze naast
        elkaar legt. De beste elektricienwebsites delen zes dingen.
      </p>
      <div className="overflow-hidden rounded-[18px] border border-[#E2E8F0]">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[520px] border-collapse">
            <thead>
              <tr style={{ background: "#0A0516" }}>
                <th
                  scope="col"
                  className="px-5.5 py-4 text-left font-poppins text-xs font-semibold uppercase tracking-wide text-white"
                >
                  Wat ze delen
                </th>
                <th
                  scope="col"
                  className="px-5.5 py-4 text-left font-poppins text-xs font-semibold uppercase tracking-wide text-white/65"
                >
                  Waarom het telt
                </th>
              </tr>
            </thead>
            <tbody>
              {SHARED_ROWS.map((row, i) => (
                <tr
                  key={row.what}
                  className="border-t border-[#E2E8F0]"
                  style={i % 2 === 1 ? { background: "#F5F3FF" } : undefined}
                >
                  <td
                    className="px-5.5 py-4 align-top font-poppins text-[15px] font-semibold text-[#0A0516]"
                    dangerouslySetInnerHTML={{ __html: row.what }}
                  />
                  <td
                    className="px-5.5 py-4 align-top font-poppins text-sm leading-[22px] text-[#6B6580]"
                    dangerouslySetInnerHTML={{ __html: row.why }}
                  />
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <p className="font-poppins text-[17px] leading-[1.7] text-[#6B6580]">
        Een paar dingen die op géén van deze sites voorkomen: stockfoto&rsquo;s
        van lachende modellen met een helm, vage slogans als &ldquo;uw
        betrouwbare partner in elektrotechniek,&rdquo; en contactformulieren met
        twaalf verplichte velden. Dat is de lijst om weg te laten.
      </p>
    </section>
  );
}

export function OwnSiteSection() {
  return (
    <section id="eigen" className="scroll-mt-24 pt-14 flex flex-col gap-6">
      <h2 className="w-full font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
        Wat dit betekent voor je eigen website
      </h2>
      <p className="font-poppins text-[17px] leading-[1.7] text-[#6B6580]">
        Je hoeft geen van deze voorbeelden een-op-een te kopiëren. Je kiest de
        patronen die passen bij jouw bedrijf en de klanten die je wilt
        aantrekken. Ben je een zzp&rsquo;er die bouwt op lokaal vertrouwen, dan
        is nummer 1 het schoonste startpunt. Wil je gevonden worden op
        dienstzoektermen, model je opbouw dan naar nummer 2. Werf je harder dan
        je verkoopt, dan verdient nummer 6 een serieuze blik.
      </p>
      <blockquote className="m-0 rounded-2xl bg-[#F5F3FF] px-7 py-6">
        <p className="text-balance font-poppins text-[22px] font-bold leading-[1.2] tracking-[-0.5px] text-[#5B21B6] sm:text-[28px] sm:tracking-[-1px]">
          &ldquo;Een website is een systeem, geen project.&rdquo;
        </p>
      </blockquote>
      <p className="font-poppins text-[17px] leading-[1.7] text-[#6B6580]">
        Geen van deze bedrijven heeft de site één keer gebouwd en er nooit meer
        naar omgekeken. Een website vraagt updates, verse reviews, nieuwe
        foto&rsquo;s van echte klussen en af en toe een nieuwe dienstpagina als
        je werk verandert.
      </p>
      <p className="font-poppins text-[17px] leading-[1.7] text-[#6B6580]">
        Growth Rocket helpt kleine installatiebedrijven dat systeem draaiend te
        houden, zonder het heen-en-weer van een klassiek bureau: een
        professionele website, een manier voor klanten om aanvragen te sturen of
        te boeken, en de Growth Rocket Hub om alles op één plek te beheren.
        Updates worden voor je geregeld, zodat je site meegroeit met je bedrijf.
      </p>
    </section>
  );
}

const CTA_FEATURES = [
  "Professionele website op je eigen domein",
  "Aanvragen en boekingen in één systeem",
  "Reviews automatisch opgehaald",
  "Hosting, onderhoud en updates inbegrepen",
];

export function CtaSection() {
  const openLeadForm = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-lead-form"));
    }
  };
  return (
    <section
      id="cta"
      className="scroll-mt-24 pt-14 relative overflow-hidden rounded-[24px] border border-[#E5D5FA] bg-[#F5F3FF] p-6 sm:p-10"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-[70px] -right-[50px] size-[240px] rounded-full opacity-35 blur-[80px]"
        style={{ background: "#A78BFA" }}
      />
      <div className="relative">
        <span className="font-poppins text-xs font-semibold uppercase tracking-[2px] text-[#5B21B6]">
          Van inspiratie naar je eigen site
        </span>
        <h2 className="mb-3.5 mt-3 max-w-[560px] text-balance font-poppins text-2xl font-bold leading-[1.18] tracking-[-0.5px] text-[#0A0516] sm:text-[28px] sm:tracking-[-0.8px]">
          Liever een elektricienwebsite die gebouwd én bijgehouden wordt?
        </h2>
        <p className="mb-6 max-w-[600px] text-pretty font-poppins text-base leading-[1.6] text-[#6B6580]">
          Growth Rocket levert een professionele site, een aanvraag- en
          boekingssysteem en de Growth Rocket Hub om alles op één plek te
          beheren — updates inbegrepen.
        </p>
        <div className="mb-7 grid max-w-[600px] grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-x-7">
          {CTA_FEATURES.map((feature) => (
            <div key={feature} className="flex items-start gap-2.5">
              <CheckIcon />
              <span
                className="font-poppins text-sm leading-[21px] text-[#334155]"
                dangerouslySetInnerHTML={{ __html: feature }}
              />
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-3">
          <Button
            onClick={() => {
              window.location.href = "/nl/contact";
            }}
            variant="primary"
            arrow="right"
            size="lg"
          >
            Bekijk hoe het werkt
          </Button>
          <Button onClick={openLeadForm} variant="secondary" size="lg">
            Websitepakketten voor elektriciens
          </Button>
        </div>
      </div>
    </section>
  );
}

export function FaqSection({
  heading,
  items,
}: {
  heading: string;
  items: BlogFaqItem[];
}) {
  return (
    <section id="faq" className="scroll-mt-24">
      <h2
        className="mt-24 max-w-[720px] text-balance font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]"
        dangerouslySetInnerHTML={{ __html: heading }}
      />

      <div className="mt-7 overflow-hidden rounded-[14px] border border-[#E6E8EF] bg-[#F8F9FC]">
        {items.map((item, i) => (
          <details
            key={item.question}
            className={`group ${i > 0 ? "border-t border-[#E6E8EF]" : ""}`}
          >
            <summary className="flex min-h-[60px] cursor-pointer list-none items-center justify-between gap-6 px-7 py-6">
              <span
                className="font-sans text-lg font-semibold text-[#1F2937]"
                dangerouslySetInnerHTML={{ __html: item.question }}
              />

              <span
                aria-hidden="true"
                className="flex-none font-sans text-[22px] font-normal leading-none text-[#9AA1AC] transition-transform duration-200 group-open:rotate-45"
              >
                +
              </span>
            </summary>

            <div className="max-w-[700px] px-7 pb-6 font-sans text-base leading-[1.63] text-[#6B7280]">
              {item.answerNode ?? (
                <span dangerouslySetInnerHTML={{ __html: item.answer }} />
              )}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}

export function MoreForElectriciansSection() {
  return (
    <section id="meer" className="pt-14 scroll-mt-24">
      <h2 className="mt-24 max-w-[720px] text-balance font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
        Meer voor elektriciens
      </h2>
      <p className="mt-3.5 max-w-[720px] font-poppins text-[17px] leading-[1.7] text-[#6B6580]">
        Alles wat je helpt om online meer aanvragen binnen te halen — van kosten
        en keuzes tot de bouw en de losse pagina&apos;s.
      </p>
      <div className="mt-7">
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
                  label:
                    "Mobiele website voor elektriciens: waarom het zwaarder telt",
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
                  label:
                    "De website-checklist: 10 pagina's die niet mogen ontbreken",
                  href: "/nl/blog/website-checklist-elektriciens",
                },
                {
                  label:
                    "De 7 elementen van een homepage die aanvragen oplevert",
                  href: "/nl/blog/de-7-elementen-van-een-elektricien-homepage-die-aanvragen-oplevert",
                },
                {
                  label:
                    "Zo schrijf je een over-ons-pagina die vertrouwen wekt",
                  href: "/nl/blog/10-zo-schrijf-je-een-over-ons-pagina-voor-een-elektricien",
                },
              ],
            },
          ]}
        />
      </div>
    </section>
  );
}
