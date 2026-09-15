"use client";

import type { ReactNode } from "react";
import InlineLink from "./InlineLink";

function CheckIcon({ color = "#6F4CF5" }: { color?: string }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mt-0.5 flex-none"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#9AA1AC"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mt-0.5 flex-none"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M15 9l-6 6M9 9l6 6" />
    </svg>
  );
}

export function IntroSection() {
  return (
    <p className="m-0 font-sans text-base leading-[26px] text-[#374151] sm:text-[19px] sm:leading-[31px]">
      Deze gids is een eerlijke vergelijking tussen WordPress en een
      website-abonnement (in de branche ook wel WaaS genoemd, Website as a
      Service): kosten vooraf, doorlopende kosten, tijdsinvestering, veiligheid,
      flexibiliteit en het plafond van je vindbaarheid. Er wordt geen winnaar
      uitgeroepen. In plaats daarvan leggen we uit welke optie bij welk soort
      elektricien past — met aan het einde een{" "}
      <InlineLink href="#beslistest">simpele beslistest</InlineLink>.
    </p>
  );
}

const SHORT_ANSWER_ROWS = [
  {
    label: "Flexibiliteit",
    body: (
      <>
        <strong className="font-semibold text-[#1F2937]">
          WordPress wint op flexibiliteit en eigendom op lange termijn.
        </strong>{" "}
        Heb je technische vaardigheden (of een ontwikkelaar die je vertrouwt) en
        wil je volledige controle, dan is het de krachtigste optie.
      </>
    ),
  },
  {
    label: "Snelheid",
    body: (
      <>
        <strong className="font-semibold text-[#1F2937]">
          Een website-abonnement wint op snelheid en voorspelbaarheid.
        </strong>{" "}
        Voor niet-technische elektriciens die snel een werkende website willen —
        zonder hosting, modules of beveiliging te beheren — haalt een volledig
        ontzorgd abonnement het werk weg.
      </>
    ),
  },
  {
    label: "Vindbaarheid",
    body: (
      <>
        <strong className="font-semibold text-[#1F2937]">
          Allebei kunnen ze goed gevonden worden op Google.
        </strong>{" "}
        Het plafond van je vindbaarheid wordt meer bepaald door je inhoud en
        lokale aanwezigheid dan door het platform.
      </>
    ),
  },
  {
    label: "Totale kosten",
    body: (
      <>
        <strong className="font-semibold text-[#1F2937]">
          Het echte kostenverschil zit in jouw tijd, niet in de licentie.
        </strong>{" "}
        WordPress oogt op papier goedkoper. Tel er een ontwikkelaar, modules,
        hosting en onderhoud bij op, en het verschil krimpt — of draait om.
      </>
    ),
  },
  {
    label: "Beheer",
    body: (
      <>
        <strong className="font-semibold text-[#1F2937]">
          Kies op basis van wie de site gaat beheren.
        </strong>{" "}
        Ben jij dat (of iemand die je betaalt), dan past WordPress. Wil je het
        geregeld hebben, dan past een abonnement.
      </>
    ),
  },
];

export function ShortAnswerSection() {
  return (
    <section id="kort-antwoord" className="mt-20 scroll-mt-[88px]">
      {/* Preview Image */}
      <div className="mt-22 overflow-hidden rounded-[24px] border border-[#E5E7EB] shadow-lg">
        <img
          src="/blogimages/en/wordpress-vs-waas-website-for-electrician-businesses-an-honest-comparison/wordpress_vs_waas_website_for_electrician_businesses_an_honest_comparison (1).webp"
          alt="Voorbeeld van een elektricien-homepage"
        />
      </div>
      <h2 className=" mt-22 text-balance font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
        Het korte antwoord
      </h2>
      <div className="mt-6 overflow-hidden rounded-[18px] border border-[#E6E8EF]">
        {SHORT_ANSWER_ROWS.map((row, i) => (
          <div
            key={row.label}
            className={
              "flex flex-col gap-1.5 p-5 sm:flex-row sm:items-baseline sm:gap-4 sm:p-[20px_22px]" +
              (i > 0 ? " border-t border-[#EEF0F4]" : "")
            }
          >
            <div
              className="flex-none font-sans text-[13px] font-semibold tracking-[0.3px] text-[#6F4CF5] sm:w-[118px]"
              dangerouslySetInnerHTML={{ __html: row.label }}
            />
            <p className="m-0 font-sans text-base leading-[1.55] text-[#374151] sm:text-[16.5px]">
              {row.body}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center gap-3 rounded-xl bg-[#F4F1FE] px-5 py-4">
        <CheckIcon />
        <div className="font-sans text-base font-semibold leading-[1.4] text-[#1F2937] sm:text-[17px]">
          Kies op basis van wie de site gaat beheren.
        </div>
      </div>
    </section>
  );
}

export function WhatEachIsSection() {
  return (
    <section id="wat-elke-optie" className="mt-24 scroll-mt-[88px]">
      <h2 className="text-balance font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
        Wat elke optie eigenlijk is
      </h2>
      <p className="mt-4.5 font-sans text-base leading-[26px] text-[#374151] sm:text-[19px] sm:leading-[31px]">
        Voordat we vergelijken, helpt het om scherp te hebben wát we
        vergelijken.
      </p>

      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="rounded-[18px] border border-[#E6E8EF] bg-white p-6">
          <h3 className="font-sans text-lg font-bold leading-[1.37] text-[#1F2937] sm:text-[19px]">
            WordPress (zelf beheerd of door een freelancer gebouwd)
          </h3>
          <p className="mt-3 font-sans text-base leading-[1.62] text-[#374151]">
            WordPress is opensourcesoftware waar een groot deel van de websites
            wereldwijd op draait. Je installeert het zelf, of je betaalt een
            freelancer om er een site op te bouwen. De bestanden, de database en
            het ontwerp zijn van jou. De verantwoordelijkheid ook — hosting,
            updates, modules, beveiliging en back-ups beheer je zelf, of je
            besteedt ze uit.
          </p>
          <div className="mt-4 font-sans text-[13px] font-semibold uppercase tracking-[0.3px] text-[#6B7280]">
            Twee gangbare routes
          </div>
          <ul className="m-0 mt-2.5 flex list-none flex-col gap-2.5 p-0">
            <li className="flex gap-2.5 font-sans text-[15.5px] leading-[1.48] text-[#374151]">
              <span
                aria-hidden="true"
                className="mt-2.5 size-1.5 flex-none rounded-full bg-[#6F4CF5]"
              />
              Een freelancerbouw van €500 tot €2.500, waarna je de updates zelf
              doet.
            </li>
            <li className="flex gap-2.5 font-sans text-[15.5px] leading-[1.48] text-[#374151]">
              <span
                aria-hidden="true"
                className="mt-2.5 size-1.5 flex-none rounded-full bg-[#6F4CF5]"
              />
              Een doorlopende afspraak met een ontwikkelaar of bureau die de
              site maandelijks bijhoudt.
            </li>
          </ul>
        </div>
        <div className="rounded-[18px] border border-[#E6E8EF] bg-white p-6">
          <h3 className="font-sans text-lg font-bold leading-[1.37] text-[#1F2937] sm:text-[19px]">
            Website-abonnement (volledig ontzorgd)
          </h3>
          <p className="mt-3 font-sans text-base leading-[1.62] text-[#374151]">
            Een website-abonnement is een abonnementsmodel. Je betaalt een vast
            bedrag per maand of per jaar, en de aanbieder regelt de bouw, de
            hosting, de updates, de beveiliging en de inhoudswijzigingen. Je
            komt niet aan de code. Jij vraagt een wijziging aan; zij voeren hem
            door.
          </p>
          <p className="mt-3 font-sans text-base leading-[1.62] text-[#374151]">
            Voor elektriciens betekent dit doorgaans een nichegerichte,
            kant-en-klare website met een ingebouwd aanvraagsysteem, een
            boekings- en afsprakensysteem, en de Growth Rocket Hub met
            contactbeheer — plus hosting, SSL-beveiliging, back-ups en updates,
            zoals{" "}
            <InlineLink href="/elektricien-website/">
              websitepakketten voor elektriciens
            </InlineLink>{" "}
            van Growth Rocket.
          </p>
        </div>
      </div>

      <figure className="m-0 mt-8">
        <div className="mb-3.5 font-sans text-[13px] font-semibold uppercase tracking-[0.3px] text-[#6B7280]">
          Wie doet wat?
        </div>
        <div
          role="img"
          aria-label="Diagram: wie regelt hosting, updates, beveiliging en inhoud bij WordPress en bij een website-abonnement"
          className="overflow-hidden rounded-[18px] border border-[#E6E8EF]"
        >
          <div className="overflow-x-auto">
            <table className="w-full min-w-[480px] border-collapse">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="border-b border-[#EEF0F4] bg-[#FBFBFD] px-4.5 py-3.5 text-left font-sans text-xs font-semibold uppercase tracking-[0.3px] text-[#9AA1AC]"
                  >
                    Onderdeel
                  </th>
                  <th
                    scope="col"
                    className="border-b border-l border-[#EEF0F4] bg-[#FBFBFD] px-4.5 py-3.5 text-left font-sans text-sm font-bold text-[#1F2937]"
                  >
                    WordPress
                  </th>
                  <th
                    scope="col"
                    className="border-b border-l border-[#EEF0F4] bg-[#F4F1FE] px-4.5 py-3.5 text-left font-sans text-sm font-bold text-[#6F4CF5]"
                  >
                    Website-abonnement
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Hosting", "Jij of je host", "De aanbieder"],
                  ["Updates", "Jij of je ontwikkelaar", "De aanbieder"],
                  ["Beveiliging", "Jouw verantwoordelijkheid", "Inbegrepen"],
                  ["Back-ups", "Jouw verantwoordelijkheid", "Inbegrepen"],
                  [
                    "Inhoudswijzigingen",
                    "Zelf, of betaald per wijziging",
                    "Verzoek insturen, aanbieder voert door",
                  ],
                ].map(([task, wp, waas], i, arr) => (
                  <tr key={task}>
                    <td
                      className={
                        "px-4.5 py-3.5 font-sans text-sm font-semibold text-[#1F2937]" +
                        (i < arr.length - 1 ? " border-b border-[#EEF0F4]" : "")
                      }
                      dangerouslySetInnerHTML={{ __html: task }}
                    />
                    <td
                      className={
                        "border-l border-[#EEF0F4] px-4.5 py-3.5 font-sans text-sm text-[#374151]" +
                        (i < arr.length - 1 ? " border-b" : "")
                      }
                      dangerouslySetInnerHTML={{ __html: wp }}
                    />
                    <td
                      className={
                        "border-l border-[#EEF0F4] bg-[#FBFAFF] px-4.5 py-3.5 font-sans text-sm text-[#374151]" +
                        (i < arr.length - 1 ? " border-b" : "")
                      }
                      dangerouslySetInnerHTML={{ __html: waas }}
                    />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <figcaption className="mt-2.5 font-sans text-[13px] text-[#9AA1AC]">
          Bij WordPress ligt het beheer bij jou; bij een abonnement bij de
          aanbieder.
        </figcaption>
      </figure>
    </section>
  );
}

type DeepDiveProps = {
  id: string;
  title: string;
  whyExists: ReactNode;
  whatYouGet: ReactNode;
  howItDiffers: ReactNode;
  fitTitle: string;
  fitItems: string[];
  poorFitTitle: string;
  poorFitItems: string[];
  tradeoffLabel: string;
  tradeoffLeft: string;
  tradeoffRight: string;
};

function DeepDiveSection({
  id,
  title,
  whyExists,
  whatYouGet,
  howItDiffers,
  fitTitle,
  fitItems,
  poorFitTitle,
  poorFitItems,
  tradeoffLabel,
  tradeoffLeft,
  tradeoffRight,
}: DeepDiveProps) {
  return (
    <section id={id} className="mt-24 scroll-mt-[88px]">
      <h2
        className="text-balance font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <div className="mt-5.5 flex flex-col gap-5.5">
        <div>
          <div className="mb-1.5 font-sans text-[13px] font-semibold uppercase tracking-[0.4px] text-[#6F4CF5]">
            Waarom het bestaat
          </div>
          <p className="m-0 font-sans text-base leading-[26px] text-[#374151] sm:text-[19px] sm:leading-[31px]">
            {whyExists}
          </p>
        </div>
        <div>
          <div className="mb-1.5 font-sans text-[13px] font-semibold uppercase tracking-[0.4px] text-[#6F4CF5]">
            Wat je krijgt
          </div>
          <p className="m-0 font-sans text-base leading-[26px] text-[#374151] sm:text-[19px] sm:leading-[31px]">
            {whatYouGet}
          </p>
        </div>
        <div>
          <div className="mb-1.5 font-sans text-[13px] font-semibold uppercase tracking-[0.4px] text-[#6F4CF5]">
            Waarin het verschilt
          </div>
          <p className="m-0 font-sans text-base leading-[26px] text-[#374151] sm:text-[19px] sm:leading-[31px]">
            {howItDiffers}
          </p>
        </div>
      </div>

      <div className="mt-6.5 overflow-hidden rounded-[18px] border border-[#E6E8EF]">
        <div className="p-5 sm:p-[20px_22px]">
          <div
            className="mb-3 font-sans text-base font-bold text-[#1F2937]"
            dangerouslySetInnerHTML={{ __html: fitTitle }}
          />
          <ul className="m-0 flex list-none flex-col gap-2.5 p-0">
            {fitItems.map((item) => (
              <li
                key={item}
                className="flex gap-2.5 font-sans text-[15.5px] leading-[1.48] text-[#374151]"
              >
                <CheckIcon />
                <span dangerouslySetInnerHTML={{ __html: item }} />
              </li>
            ))}
          </ul>
        </div>
        <div className="border-t border-[#EEF0F4] bg-[#FBFBFD] p-5 sm:p-[20px_22px]">
          <div
            className="mb-3 font-sans text-base font-bold text-[#1F2937]"
            dangerouslySetInnerHTML={{ __html: poorFitTitle }}
          />
          <ul className="m-0 flex list-none flex-col gap-2.5 p-0">
            {poorFitItems.map((item) => (
              <li
                key={item}
                className="flex gap-2.5 font-sans text-[15.5px] leading-[1.48] text-[#374151]"
              >
                <CrossIcon />
                <span dangerouslySetInnerHTML={{ __html: item }} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-5.5 rounded-2xl border border-[#EEF0F4] bg-[#FBFBFD] p-5">
        <div
          className="mb-2.5 font-sans text-[13px] font-semibold text-[#6B7280]"
          dangerouslySetInnerHTML={{ __html: tradeoffLabel }}
        />
        <div className="flex items-center gap-3">
          <span className="flex-none font-sans text-[12.5px] text-[#9AA1AC]">
            Weinig
          </span>
          <div
            className="h-2 flex-1 rounded-full"
            style={{ background: "linear-gradient(90deg,#E5D5FA,#6F4CF5)" }}
          />
          <span className="flex-none font-sans text-[12.5px] text-[#9AA1AC]">
            Veel
          </span>
        </div>
        <div className="mt-2 flex justify-between font-sans text-[13px] text-[#374151]">
          <span dangerouslySetInnerHTML={{ __html: tradeoffLeft }} />
          <span dangerouslySetInnerHTML={{ __html: tradeoffRight }} />
        </div>
      </div>
    </section>
  );
}

export function WordpressDeepSection() {
  return (
    <DeepDiveSection
      id="wordpress-verdiept"
      title="WordPress voor elektriciens: waar het wint, en waar niet"
      whyExists="WordPress is gebouwd als flexibel publicatieplatform. De filosofie is open eigendom: iedereen kan het installeren, aanpassen en overal hosten. Het is de standaardkeuze voor wie maximale controle wil."
      whatYouGet="Een leeg canvas plus een enorm aanbod aan modules. Jij (of een ontwikkelaar) kiest een thema, voegt modules toe voor formulieren, vindbaarheid, beveiliging en boekingen, en zet zo de website in elkaar die je wilt. Er zit geen ingebouwde opvatting in over hoe een elektriciensite eruit hoort te zien."
      howItDiffers="WordPress geeft je een hoog plafond. Wil je ooit een eigen offertetool, een meertalig klantportaal, een koppeling met je boekhoudsoftware of een specialistische module — WordPress kan het. De ruil: jij (of iemand die je betaalt) moet die complexiteit bouwen, instellen en onderhouden."
      fitTitle="WordPress is de juiste keuze als…"
      fitItems={[
        "Je logt zonder moeite in op een beheerscherm, werkt modules bij en lost storingen zelf op.",
        "Je hebt een ontwikkelaar die je vertrouwt en kunt een maandelijks tarief dragen.",
        "Je verwacht op termijn maatwerkfuncties nodig te hebben die geen kant-en-klaar product biedt.",
        "Je wilt dat de site een langetermijnbezit is dat volledig van jou is en vrij te verhuizen.",
      ]}
      poorFitTitle="WordPress past slecht als…"
      poorFitItems={[
        "Je geen updates, beveiligingsreparaties of hosting wilt beheren.",
        "Je alleen een strakke, werkende website nodig hebt die aanvragen opvangt — meer niet.",
        "Je je avonden liever aan je gezin besteedt dan aan het leren van een beheersysteem.",
      ]}
      tradeoffLabel="De ruil: meer controle, meer beheer"
      tradeoffLeft="Controle over ontwerp en functies"
      tradeoffRight="Beheerverantwoordelijkheid"
    />
  );
}

export function WaasDeepSection() {
  return (
    <DeepDiveSection
      id="abonnement-verdiept"
      title="Website-abonnement voor elektriciens: waar het wint, en waar niet"
      whyExists="Het abonnementsmodel komt voort uit een simpele observatie: de meeste ondernemers willen geen websiteproject. Ze willen een website die werkt. Het abonnement haalt het project weg — de bouw, de hostingkeuzes, de module-updates, de beveiligingszorgen — en vervangt het door één vast bedrag."
      whatYouGet={
        <>
          Een werkende website op een beheerd platform, met hosting,
          beveiliging, back-ups en inhoudsupdates inbegrepen. Bij aanbieders die
          zich op elektriciens richten, betekent dat meestal ook een ingebouwd
          aanvraagsysteem, een boekings- en afsprakensysteem, de Growth Rocket
          Hub met contactbeheer, en een ontwerp dat op mobiel werkt. Jij vraagt
          wijzigingen aan; de aanbieder voert ze door.
        </>
      }
      howItDiffers="Een abonnement ruilt flexibiliteit voor tijd. Je krijgt geen onbeperkt maatwerk, maar je verliest ook geen drie weekenden per jaar aan botsende modules. De aanbieder heeft de technische keuzes al gemaakt, dus de tijd van “ik heb een website nodig” naar “er komen aanvragen binnen” telt in dagen, niet in weken."
      fitTitle="De juiste keuze als…"
      fitItems={[
        "Je wilt binnen een week of twee een professionele website online hebben.",
        "Je wilt niet nadenken over hosting, updates of beveiliging.",
        "Je betaalt liever één voorspelbaar bedrag per maand of per jaar dan vier losse facturen bij te houden.",
        "Je wilt hulp bij inhoudswijzigingen en er niet zelf voor hoeven inloggen.",
      ]}
      poorFitTitle="Past slecht als…"
      poorFitItems={[
        "Je volledig eigendom van de code wilt en de vrijheid om overal te hosten.",
        "Je heel specifieke maatwerkwensen hebt die buiten het platform vallen.",
        "Je al een ontwikkelaar op vaste basis hebt die alles regelt.",
      ]}
      tradeoffLabel="De ruil: tijd gewonnen, flexibiliteit begrensd"
      tradeoffLeft="Tijd bespaard"
      tradeoffRight="Grens aan maatwerk"
    />
  );
}

const SEO_CARDS = [
  {
    body: "Voor lokale vindbaarheid kunnen beide platforms goed scoren. De factoren die het verschil maken zijn platformonafhankelijk: je Google Bedrijfsprofiel, reviews, lokale landingspagina's, mobiele snelheid en consequente bedrijfsgegevens (naam, adres, telefoonnummer).",
    title: "Lokale fundamenten",
  },
  {
    body: "WordPress heeft meer knoppen om aan te draaien. Met de juiste modules en een ontwikkelaar kun je vrijwel alles bijstellen. Een goede abonnementsaanbieder heeft de technische basis al op orde (schone code, snelle hosting, SSL-beveiliging, gebouwd voor mobiel), maar zo diep bijsturen kan niet.",
    title: "Technische fijnafstemming",
  },
  {
    body: "WordPress is flexibeler als je tientallen blogartikelen, plaatspagina's en dienstpagina's wilt publiceren. De meeste abonnementsplatforms ondersteunen inhoud, maar met eenvoudiger structuren.",
    title: "Inhoud opschalen",
  },
];

export function SeoSection() {
  return (
    <section id="vindbaarheid" className="mt-24 scroll-mt-[88px]">
      <h2 className="w-full  font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
        Het vindbaarheidsplafond: kan een beheerde site net zo goed scoren als
        WordPress?
      </h2>
      <p className="mt-4.5 font-sans text-base leading-[26px] text-[#374151] sm:text-[19px] sm:leading-[31px]">
        Hier maken veel elektriciens zich zorgen over. Het eerlijke antwoord
        bestaat uit drie lagen.
      </p>
      <div className="mt-5.5 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {SEO_CARDS.map((card, i) => (
          <div
            key={card.title}
            className="rounded-2xl border border-[#E6E8EF] bg-white p-5"
          >
            <div className="flex size-8 items-center justify-center rounded-[9px] bg-[#F4F1FE] font-sans text-[15px] font-bold text-[#6F4CF5]">
              {i + 1}
            </div>
            <div
              className="mt-3 font-sans text-base font-bold text-[#1F2937]"
              dangerouslySetInnerHTML={{ __html: card.title }}
            />
            <p
              className="mt-2 font-sans text-sm leading-[1.5] text-[#6B7280]"
              dangerouslySetInnerHTML={{ __html: card.body }}
            />
          </div>
        ))}
      </div>
      <div className="mt-5.5 rounded-r-2xl border-l-[3px] border-[#6F4CF5] bg-[#F4F1FE] px-5.5 py-4.5">
        <p className="m-0 text-pretty font-sans text-lg font-semibold leading-[1.56] text-[#1F2937]">
          Voor de meeste elektriciens is het platform niet de bottleneck.
          Inhoud, reviews en lokale aanwezigheid zijn dat wel. Publiceer je
          niets en onderhoud je je Google Bedrijfsprofiel niet, dan brengt
          WordPress noch een abonnement je omhoog.
        </p>
      </div>
    </section>
  );
}

const EDGE_CASES = [
  {
    q: "Je hebt al een WordPress-site die werkt",
    a: "Stap niet over om het overstappen. Is hij veilig, snel en levert hij aanvragen op, dan wegen de verhuiskosten zelden op tegen de winst.",
    open: true,
  },
  {
    q: "Je stapt over van een marktplaats als Werkspot",
    a: (
      <>
        Dan werken beide opties. De winst zit in het bezitten van je eigen
        aanvraagbron, niet in het specifieke platform. Wie zijn afhankelijkheid
        van marktplaatsen afweegt, leest ook vaak over{" "}
        <InlineLink href="/blog/werkspot-alternatieven-elektriciens/">
          alternatieven voor Werkspot
        </InlineLink>
        .
      </>
    ),
  },
  {
    q: "Je hebt personeel net zo hard nodig als klanten",
    a: "Zorg dat de optie die je kiest een nette vacaturepagina ondersteunt. Het personeelstekort in de installatiebranche maakt dat een echte groeihefboom.",
  },
];

export function EdgeCasesSection() {
  return (
    <section id="randgevallen" className="mt-24 scroll-mt-[88px]">
      <h2 className="text-balance font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
        Randgevallen en eerlijke kanttekeningen
      </h2>
      <p className="mt-4.5 font-sans text-base leading-[26px] text-[#374151] sm:text-[19px] sm:leading-[31px]">
        Een paar situaties die de simpele test niet volledig dekt. Controleer
        dit vóór je overstapt.
      </p>
      <div className="mt-5.5 flex flex-col gap-3">
        {EDGE_CASES.map((item) => (
          <details
            key={item.q}
            className="group overflow-hidden rounded-[14px] border border-[#E6E8EF]"
            open={item.open}
          >
            <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-3.5 px-5 py-3.5 font-sans text-base font-semibold text-[#1F2937]">
              <span dangerouslySetInnerHTML={{ __html: item.q }} />
              <span
                aria-hidden="true"
                className="flex-none text-[24px] leading-none text-[#6F4CF5] transition-transform duration-150 group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <div className="px-5 pb-[18px] font-sans text-[15px] leading-[1.6] text-[#374151]">
              {item.a}
            </div>
          </details>
        ))}
        <details className="group overflow-hidden rounded-[14px] border border-[#F0D9C0] bg-[#FFFBF5]">
          <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-3.5 px-5 py-3.5 font-sans text-base font-semibold text-[#1F2937]">
            Je wilt later volledig eigendom
            <span
              aria-hidden="true"
              className="flex-none text-[24px] leading-none text-[#B4791F] transition-transform duration-150 group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <div className="px-5 pb-[18px] font-sans text-[15px] leading-[1.6] text-[#374151]">
            Weegt eigendom op lange termijn zwaarder dan gemak op korte termijn,
            dan wint WordPress op dat ene punt. Sommige abonnementsaanbieders
            laten je je inhoud exporteren, andere niet —{" "}
            <strong className="font-semibold text-[#8A5A12]">
              vraag het vóór je tekent.
            </strong>
          </div>
        </details>
      </div>
    </section>
  );
}

export function VerdictSection() {
  const openLeadForm = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-lead-form"));
    }
  };
  return (
    <section id="eindoordeel" className="mt-24 scroll-mt-[88px]">
      <h2 className="text-balance font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
        Het eerlijke eindoordeel
      </h2>
      <p className="mt-4.5 font-sans text-base leading-[26px] text-[#374151] sm:text-[19px] sm:leading-[31px]">
        De eerlijke vergelijking eindigt waar hij begon: dit is geen wedstrijd
        met één winnaar.
      </p>
      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="rounded-[18px] border border-[#E6E8EF] bg-white p-6">
          <h3 className="font-sans text-lg font-bold text-[#1F2937] sm:text-[19px]">
            Kies WordPress als…
          </h3>
          <p className="mt-3 font-sans text-base leading-[1.56] text-[#374151]">
            …je flexibiliteit en eigendom wilt, en jij (of iemand die je
            vertrouwt) de site gaat beheren. Het beloont technische handigheid
            met controle op lange termijn.
          </p>
        </div>
        <div className="rounded-[18px] border border-[#E6E8EF] bg-[#FBFAFF] p-6">
          <h3 className="font-sans text-lg font-bold text-[#1F2937] sm:text-[19px]">
            Kies een website-abonnement als…
          </h3>
          <p className="mt-3 font-sans text-base leading-[1.56] text-[#374151]">
            …je een werkende website wilt zonder parttime webbeheerder te
            worden. Het beloont focus op je vak met een vaste prijs en nul
            onderhoudslast.
          </p>
        </div>
      </div>
      <p className="mt-5.5 font-sans text-base leading-[26px] text-[#374151] sm:text-[19px] sm:leading-[31px]">
        Voor de meeste Nederlandse elektriciens die hun tijd liever op de klus
        doorbrengen dan in een beheerscherm, wint het abonnement op snelheid
        naar resultaat. Voor technisch aangelegde eigenaren of grotere bedrijven
        met een vaste ontwikkelaar wint WordPress op het plafond. Kies op basis
        van wie de site gaat beheren — en hoeveel je avonden je waard zijn.
      </p>

      <div
        className="mt-9 rounded-[20px] border border-[#E5D5FA] p-7 sm:p-8"
        style={{ background: "linear-gradient(160deg,#F5F3FF,#EDE7FB)" }}
      >
        <p className="m-0 text-pretty font-sans text-lg leading-[1.47] text-[#1F2937]">
          Herken je jezelf in de abonnementsroute?{" "}
          <button
            type="button"
            onClick={openLeadForm}
            className="cursor-pointer border-0 bg-transparent p-0 font-sans text-lg font-bold text-[#6F4CF5] underline-offset-2 hover:underline"
          >
            Bekijk hoe het werkt →
          </button>
        </p>
      </div>
    </section>
  );
}

export function DecisionFlowSection() {
  return (
    <div className="mx-auto mt-14 max-w-[1200px]">
      <div className="rounded-[18px] border border-[#E6E8EF] bg-[#FBFBFD] p-6.5">
        <div className="font-sans text-xs font-semibold uppercase tracking-[0.4px] text-[#9AA1AC]">
          Beslisschema
        </div>
        <figure
          role="img"
          aria-label="Beslisschema voor de keuze tussen WordPress en een website-abonnement voor elektriciens"
          className="m-0 mt-3.5"
        >
          <div className="flex flex-wrap items-center gap-3.5">
            <div className="min-w-[220px] flex-1 rounded-xl border border-[#E6E8EF] bg-white px-4.5 py-4 font-sans text-[14.5px] font-semibold leading-[1.45] text-[#1F2937]">
              Ga je (of iemand die je betaalt) de site zelf beheren?
            </div>
            <div className="flex min-w-[320px] flex-1 flex-col gap-2.5">
              <div className="flex items-center gap-3">
                <span className="flex-none rounded-md bg-[#1F2937] px-2.5 py-[3px] font-sans text-xs font-semibold text-white">
                  Ja, 3–4×
                </span>
                <span aria-hidden="true" className="text-[#9AA1AC]">
                  →
                </span>
                <div className="flex-1 rounded-[10px] border border-[#E6E8EF] bg-white px-3.5 py-3 font-sans text-sm text-[#374151]">
                  <strong className="font-semibold text-[#1F2937]">
                    WordPress past waarschijnlijk het best.
                  </strong>{" "}
                  De flexibiliteit betaalt zich uit.
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex-none rounded-md bg-[#6F4CF5] px-2.5 py-[3px] font-sans text-xs font-semibold text-white">
                  Nee, 0–2×
                </span>
                <span aria-hidden="true" className="text-[#9AA1AC]">
                  →
                </span>
                <div className="flex-1 rounded-[10px] border border-[#E5D5FA] bg-white px-3.5 py-3 font-sans text-sm text-[#374151]">
                  <strong className="font-semibold text-[#1F2937]">
                    Een website-abonnement past waarschijnlijk het best.
                  </strong>{" "}
                  Sneller live, minder doorlopende last.
                </div>
              </div>
            </div>
          </div>
          <figcaption className="mt-3.5 font-sans text-[13px] text-[#9AA1AC]">
            Tel je &ldquo;ja&rdquo; op de vier vragen uit de beslistest. Dit
            schema werkt ook zonder de interactieve test.
          </figcaption>
        </figure>
      </div>
    </div>
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
        label: "Zo schrijf je een over-ons-pagina die vertrouwen wekt",
        href: "/nl/blog/10-zo-schrijf-je-een-over-ons-pagina-voor-een-elektricien",
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
    <section id="meer" className="mt-24 scroll-mt-[88px]">
      <h2 className="text-balance font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
        Meer voor elektriciens
      </h2>
      <p className="mt-4.5 font-sans text-base leading-[26px] text-[#374151] sm:text-[19px] sm:leading-[31px]">
        Alles wat je helpt om online meer aanvragen binnen te halen — van kosten
        en keuzes tot de bouw en de losse pagina&apos;s.
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
