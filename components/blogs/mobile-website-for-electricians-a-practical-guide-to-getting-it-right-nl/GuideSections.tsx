"use client";

import {
  isValidElement,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import Button from "@/app/components/ui/Button";
import MoreLinksAccordion from "@/components/blogs/shared/MoreLinksAccordion";
import AuditTool from "./AuditTool";
import InlineLink from "./InlineLink";

function ArrowRight({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function IntroSection() {
  return (
    <section id="opening">
      <p className="font-poppins text-base leading-[1.62] text-[#374151] sm:text-lg">
        Een mobielvriendelijke website is voor een elektricien geen extraatje
        meer — het is de versie van je bedrijf die de meeste klanten ooit te
        zien krijgen.
      </p>
      <p className="mt-5 font-poppins text-base leading-[1.62] text-[#374151] sm:text-lg">
        Bij Growth Rocket hebben wij websites van lokale dienstverleners in heel
        Nederland doorgelicht en gebouwd, en één patroon keert steeds terug:
        elektriciens verliezen geen aanvragen door gebrek aan vraag, maar door
        drempels in de mobiele ervaring. Traag ladende pagina&apos;s, verstopte
        contactgegevens en onhandige menu&apos;s duwen potentiële klanten
        geruisloos richting de concurrent.
      </p>
      <p className="mt-5 font-poppins text-base leading-[1.62] text-[#374151] sm:text-lg">
        Deze gids loopt langs wat mobiel-eerst ontwerpen voor een vakmanssite
        werkelijk betekent, welke onderdelen er echt toe doen, en hoe je je
        eigen site vandaag nog in tien minuten test.
      </p>
    </section>
  );
}

export function WhySection() {
  return (
    <section id="waarom" className="scroll-mt-[88px] pt-14 sm:pt-24">
      {/* Preview Image */}
      <div className="mt-14 overflow-hidden rounded-[24px] border border-[#E5E7EB] shadow-lg">
        <img
          src="/blogimages/en/mobile-website-for-electricians-a-practical-guide-to-getting-it-right/mobile_website_for_electricians_a_practical_guide_to_getting_it_right (1).webp"
          alt="Example electrician homepage"
        />
      </div>

      <h2 className="mt-22 w-full font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
        Waarom mobiel zwaarder telt dan je denkt
      </h2>
      <p className="mt-7 mb-5 font-poppins text-base leading-[1.62] text-[#374151] sm:text-lg">
        Bij de meeste Nederlandse elektriciens komt veruit het grootste deel van
        de websitebezoekers binnen via een smartphone. De reden is simpel:
        mensen zoeken op het moment dat het probleem zich voordoet. De stroom
        valt uit, een stopcontact vonkt, het licht flikkert — ze pakken het
        dichtstbijzijnde apparaat, en dat is vrijwel altijd hun telefoon.
      </p>
      <p className="mb-5 font-poppins text-base leading-[1.62] text-[#374151] sm:text-lg">
        De zoektermen weerspiegelen die urgentie. Opdrachten als
        &ldquo;elektricien spoed&rdquo;, &ldquo;stroomstoring 24/7&rdquo; en
        &ldquo;elektricien in de buurt&rdquo; horen bij de zoekwoorden met de
        hoogste koopintentie in het vak. Die bezoeker is niet aan het
        rondkijken. Die wil binnen een minuut iemand aan de lijn.
      </p>
      <p className="font-poppins text-base leading-[1.62] text-[#374151] sm:text-lg">
        Laadt je site traag, verstopt hij je telefoonnummer of dwingt hij tot
        inzoomen, dan gaat de bezoeker terug naar Google en belt hij het
        volgende resultaat. Dat is de hele beslissing — en hij valt op een
        scherm van vijftien centimeter.
      </p>

      {/* urgency infographic */}
      <figure
        role="img"
        aria-label="Het merendeel van het bezoek aan elektricienwebsites komt via mobiel, met urgente zoektermen als elektricien spoed"
        className="m-0 mt-9 rounded-[18px] border border-[#EEF0F4] bg-[#FBFBFD] p-5 sm:p-8"
      >
        <div className="flex flex-wrap items-center justify-center gap-6">
          <div
            aria-hidden="true"
            className="w-[196px] flex-none rounded-[26px] bg-[#0E0A1C] p-2 shadow-[0_16px_36px_rgba(17,24,39,0.12)]"
          >
            <div className="overflow-hidden rounded-[19px] bg-white">
              <div className="p-3 pb-1.5">
                <div className="flex items-center gap-2 rounded-full bg-[#F1F3F8] px-3 py-2">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#6B7280"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <circle cx="11" cy="11" r="7" />
                    <path d="M21 21l-4.3-4.3" />
                  </svg>
                  <span className="font-poppins text-xs font-semibold text-[#111827]">
                    elektricien spoed
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-2 px-3 pb-3.5 pt-0.5">
                <div className="flex items-center gap-2 font-poppins text-[11px] text-[#374151]">
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#9AA1AC"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <path d="M12 8v4l3 2" />
                    <circle cx="12" cy="12" r="9" />
                  </svg>
                  stroomstoring 24/7
                </div>
                <div className="flex items-center gap-2 font-poppins text-[11px] text-[#374151]">
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#9AA1AC"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <path d="M12 21s-7-5.6-7-11a7 7 0 0 1 14 0c0 5.4-7 11-7 11Z" />
                    <circle cx="12" cy="10" r="2.4" />
                  </svg>
                  elektricien in de buurt
                </div>
                <div className="flex items-center gap-2 font-poppins text-[11px] text-[#374151]">
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#9AA1AC"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <path d="M12 8v4l3 2" />
                    <circle cx="12" cy="12" r="9" />
                  </svg>
                  elektricien spoed avond
                </div>
              </div>
            </div>
          </div>
          <div className="min-w-[200px] flex-[1_1_220px]">
            <div className="mb-2 font-poppins text-xs font-semibold uppercase tracking-[0.12em] text-[#6F4CF5]">
              Zoeken op het moment zelf
            </div>
            <p className="m-0 font-poppins text-[15px] leading-[1.55] text-[#4B5563]">
              De urgente zoekopdracht ontstaat naast de groepenkast — op de
              telefoon, met haast. Wie dan niet meteen een tikbare belknop ziet,
              is binnen seconden terug bij Google.
            </p>
          </div>
        </div>
      </figure>

      <aside className="mt-7 flex items-start gap-3.5 rounded-[14px] border border-[#E6E0FB] bg-[#F4F1FE] px-5 py-4.5">
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#6F4CF5"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mt-0.5 flex-none"
        >
          <rect x="7" y="2" width="10" height="20" rx="2.5" />
          <path d="M11 18h2" />
        </svg>
        <p className="m-0 text-pretty font-poppins text-[15px] font-medium leading-[1.5] text-[#3B2E63] sm:text-base">
          De hele beslissing valt op een scherm van vijftien centimeter. Daar
          wordt bepaald of jij gebeld wordt of de volgende in de lijst.
        </p>
      </aside>
    </section>
  );
}

export function CostSection() {
  const items = [
    {
      title: "Telefoonnummer weggestopt",
      body: "Het telefoonnummer zit weggestopt, dus de bezoeker vertrekt voordat hij belt.",
      icon: (
        <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.5 2.1L8 9.6a16 16 0 0 0 6 6l1.1-1.1a2 2 0 0 1 2.1-.5c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.7 2Z" />
      ),
    },
    {
      title: "Pop-up bedekt het scherm",
      body: 'Een pop-up bedekt het scherm, dus hij tikt op "terug" in plaats van op "sluiten".',
      icon: (
        <>
          <rect x="4" y="5" width="16" height="12" rx="2" />
          <path d="M8 21h8" />
        </>
      ),
    },
    {
      title: "Pagina laadt in vijf seconden",
      body: "De pagina laadt in vijf seconden, dus hij neemt aan dat het bedrijf niet meer actief is.",
      icon: (
        <>
          <path d="M12 7v5l3 2" />
          <circle cx="12" cy="12" r="9" />
        </>
      ),
    },
  ];
  return (
    <section id="kosten" className="scroll-mt-[88px] pt-14 sm:pt-24">
      <h2 className="mb-[22px] w-full font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
        Wat een slechte mobiele ervaring werkelijk kost
      </h2>
      <p className="mb-7 font-poppins text-base leading-[1.62] text-[#374151] sm:text-lg">
        Een trage of onhandige mobiele site verliest niet één bezoeker. Hij
        verliest geruisloos elke dag aanvragen — en jij ziet het zelden
        gebeuren. De bekende patronen:
      </p>

      <ol className="relative m-0 list-none p-0">
        {items.map((item, i) => (
          <li key={item.title} className="relative pb-6 pl-[52px] last:pb-0">
            {i < items.length - 1 && (
              <span
                aria-hidden="true"
                className="absolute -bottom-2 left-[15px] top-[34px] w-0.5 bg-[#EEF0F4]"
              />
            )}
            <span
              aria-hidden="true"
              className="absolute left-0 top-0 flex size-8 items-center justify-center rounded-full border-[1.5px] border-[#E6E8EF] bg-white text-[#6F4CF5]"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {item.icon}
              </svg>
            </span>
            <div
              className="mb-[3px] font-poppins text-base font-bold text-[#111827]"
              dangerouslySetInnerHTML={{ __html: item.title }}
            />
            <p
              className="m-0 font-poppins text-[15px] leading-[1.55] text-[#6B7280]"
              dangerouslySetInnerHTML={{ __html: item.body }}
            />
          </li>
        ))}
      </ol>
      <p className="mt-6 font-poppins text-base leading-[1.62] text-[#374151] sm:text-lg">
        <strong className="font-semibold text-[#111827]">
          Elk van deze drie is op te lossen.
        </strong>{" "}
        Geen van drieën vraagt om een herontwerp vanaf nul.
      </p>
    </section>
  );
}

export function SignalsSection() {
  const cards = [
    {
      title: "Contactgegevens",
      body: "Het telefoonnummer is lastig te vinden.",
      icon: (
        <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.4 2.5 1.6 3.6-.9 4.8a16 16 0 0 0 6 6c1.2-2.5 2.3-1.3 4.8-.9a2 2 0 0 1 1.7 2Z" />
      ),
    },
    {
      title: "Mobiele snelheid",
      body: "Pagina's laden traag op mobiele data.",
      icon: <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z" />,
    },
    {
      title: "Te lange formulieren",
      body: "Aanvraagformulieren vragen te veel informatie.",
      icon: (
        <>
          <rect x="5" y="3" width="14" height="18" rx="2" />
          <path d="M9 8h6M9 12h6M9 16h3" />
        </>
      ),
    },
    {
      title: "Verborgen vertrouwenssignalen",
      body: "Vertrouwenssignalen zitten diep in de site verstopt.",
      icon: <path d="M12 2 4 5v6c0 5 3.4 8.5 8 11 4.6-2.5 8-6 8-11V5l-8-3Z" />,
    },
  ];
  return (
    <section id="signals" className="scroll-mt-[88px] pt-14 sm:pt-24">
      <h2 className="mb-[22px] w-full font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
        Wat er bij doorlichtingen steeds terugkomt
      </h2>
      <p className="mb-6 font-poppins text-base leading-[1.62] text-[#374151] sm:text-lg">
        Bij het doorlichten van elektricienwebsites duiken telkens dezelfde
        problemen op: het telefoonnummer is lastig te vinden, pagina&apos;s
        laden traag op mobiele data, aanvraagformulieren vragen te veel
        informatie, en belangrijke vertrouwenssignalen zitten diep in de site
        verstopt.
      </p>

      <div className="mb-6 rounded-2xl border border-[#EEF0F4] bg-[#FBFBFD] p-2">
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-xl border border-[#F1F3F8] bg-white p-4"
            >
              <div className="mb-1.5 flex items-center gap-2.5">
                <span className="flex size-[34px] items-center justify-center rounded-[9px] bg-[#F4F1FE] text-[#6F4CF5]">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {card.icon}
                  </svg>
                </span>
                <span
                  className="font-poppins text-sm font-bold text-[#111827]"
                  dangerouslySetInnerHTML={{ __html: card.title }}
                />
              </div>
              <p
                className="m-0 font-poppins text-[13px] leading-[1.5] text-[#6B7280]"
                dangerouslySetInnerHTML={{ __html: card.body }}
              />
            </div>
          ))}
        </div>
      </div>

      <p className="font-poppins text-base leading-[1.62] text-[#374151] sm:text-lg">
        Het bemoedigende deel: de meeste van deze problemen zijn te verhelpen
        zonder alles opnieuw te bouwen. Kleine verbeteringen in snelheid,
        gebruiksgemak en de aanvraagroute leveren vaak meer op dan nieuwe
        functies of een compleet nieuw ontwerp.
      </p>
    </section>
  );
}

type Requirement = { title: string; body: ReactNode[] };

const REQUIREMENTS: Requirement[] = [
  {
    title: "Een belknop die in één tik werkt",
    body: [
      "Het belangrijkste element op een mobiele elektricienwebsite is een duidelijk zichtbare belknop. Die hoort te staan:",
      <ul
        key="list"
        className="m-0 mb-2.5 list-disc pl-5 font-poppins text-[15px] leading-[1.6] text-[#4B5563]"
      >
        <li>Bovenaan elke pagina (meescrollende kop).</li>
        <li>Op het eerste scherm, vóórdat de bezoeker scrolt.</li>
        <li>Onderaan de pagina, als vaste balk.</li>
      </ul>,
      <>
        De knop gebruikt een{" "}
        <code className="rounded-[5px] bg-[#F1F3F8] px-1.5 py-px font-mono text-[0.9em] text-[#5A3CE0]">
          tel:
        </code>
        -link, zodat één tik het gesprek start. Geen formulieren, geen
        contactpagina&apos;s ertussen.
      </>,
    ],
  },
  {
    title: "Duimvriendelijke tikvlakken",
    body: [
      "Mensen houden hun telefoon in één hand en tikken met hun duim. Knoppen, menu-items en formuliervelden horen minimaal 44 bij 44 pixels te zijn — grofweg het oppervlak van een volwassen duimtop. Kleiner leidt tot mistikken en irritatie.",
      "Ruimte telt net zo zwaar als grootte. Twee knoppen die te dicht op elkaar staan, zijn bijna net zo hinderlijk als één knop die te klein is.",
    ],
  },
  {
    title: "Snelle laadtijd (binnen 3 seconden)",
    body: [
      "Snelheid is geen technisch detail — het is een vertrouwenssignaal. Wie langer dan drie seconden op een pagina wacht, neemt aan dat het bedrijf onprofessioneel of niet meer actief is.",
      "De grootste veroorzakers van trage mobiele sites:",
      <ul
        key="list"
        className="m-0 mb-2.5 list-disc pl-5 font-poppins text-[15px] leading-[1.6] text-[#4B5563]"
      >
        <li>Veel te grote foto&apos;s die nooit zijn verkleind</li>
        <li>Zware paginabouwers met te veel modules</li>
        <li>Ingesloten video&apos;s die op de homepage automatisch laden</li>
        <li>Lettertypes en scripts die uit te veel bronnen worden opgehaald</li>
      </ul>,
      "Een eenvoudige, goed gebouwde site laadt op een 4G-verbinding binnen twee seconden.",
    ],
  },
  {
    title: "Leesbare letters zonder inzoomen",
    body: [
      "Lopende tekst is minimaal 16 pixels; koppen groter, met voldoende contrast tussen tekst en achtergrond. Lichtgrijze tekst op een witte achtergrond oogt elegant op het scherm van een ontwerper, maar is onleesbaar op een telefoon in daglicht.",
    ],
  },
  {
    title: "Geen pop-ups, geen cookiemuren, geen chatvensters in de weg",
    body: [
      "Pop-ups op mobiel werken vrijwel altijd averechts: ze bedekken de inhoud, het sluitkruisje is te klein, en de bezoeker vertrekt. Een cookiemelding is verplicht, maar hoort klein te zijn en met één tik weg te klikken.",
      "Gebruik je een chatfunctie, laat die dan niet vanzelf openklappen. Laat de bezoeker zelf kiezen of hij het gesprek aangaat.",
    ],
  },
];

const HIGHLIGHT_STYLE = {
  boxShadow: "0 0 0 3px #6F4CF5, 0 6px 16px rgba(111,76,245,0.25)",
} as const;

/** eis 1 -> zones 1+1b, eis 2 -> zones 2+2b, eis 3 -> zone 3, eis 4 -> zone 4, eis 5 -> zone 5 */
function AnnotatedPhone({ active }: { active: number | null }) {
  const glow = (n: number) => (active === n ? HIGHLIGHT_STYLE : undefined);
  return (
    <div className="relative min-w-[min(100%,220px)] flex-[0_1_240px] lg:sticky lg:top-24 lg:self-start">
      <figure
        role="img"
        aria-label="Geannoteerde mobiele elektricienwebsite met belknop, duimvriendelijk menu en leesbare letters"
        className="m-0 w-[min(100%,260px)] mx-auto rounded-[34px] bg-[#0E0A1C] p-[9px] shadow-[0_22px_50px_rgba(91,33,182,0.18)]"
      >
        <div className="overflow-hidden rounded-[26px] bg-white">
          <div
            className="flex h-12 items-center justify-between rounded-lg px-3 transition-[box-shadow] duration-200"
            style={glow(1)}
          >
            <span className="inline-flex items-center gap-[5px] font-poppins text-xs font-bold text-[#1F2937]">
              <span className="size-[7px] rounded-full bg-[#6F4CF5]" />
              Van Dijk Elektro
            </span>
            <span
              className="inline-flex flex-col gap-1 rounded-md p-1.5 transition-[box-shadow] duration-200"
              style={glow(2)}
            >
              <span className="h-0.5 w-4 rounded-sm bg-[#1F2937]" />
              <span className="h-0.5 w-4 rounded-sm bg-[#1F2937]" />
              <span className="h-0.5 w-4 rounded-sm bg-[#1F2937]" />
            </span>
          </div>
          <div className="p-3.5">
            <div
              className="-mx-1.5 -mt-1 rounded-lg px-1.5 py-1 transition-[box-shadow] duration-200"
              style={glow(4)}
            >
              <div className="font-poppins text-[15px] font-bold leading-[1.25] text-[#111827]">
                Storing? Bel direct.
              </div>
              <div className="mt-1 font-poppins text-xs leading-[1.45] text-[#4B5563]">
                Erkend elektricien in de regio. 24/7 spoed, vaste prijzen.
              </div>
            </div>
            <div
              className="mt-3 flex h-[46px] items-center justify-center gap-1.5 rounded-[11px] bg-[#16A34A] font-poppins text-sm font-bold text-white transition-[box-shadow] duration-200"
              style={glow(1)}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.4 2.5 1.6 3.6-.9 4.8a16 16 0 0 0 6 6c1.2-2.5 2.3-1.3 4.8-.9a2 2 0 0 1 1.7 2Z" />
              </svg>
              Bel nu
            </div>
            <div
              className="mt-2.5 flex gap-2 transition-[box-shadow] duration-200"
              style={glow(5)}
            >
              <div
                className="flex h-11 flex-1 items-center justify-center rounded-[9px] bg-[#F1F3F8] font-poppins text-[11px] font-semibold text-[#374151] transition-[box-shadow] duration-200"
                style={glow(2)}
              >
                Diensten
              </div>
              <div className="flex h-11 flex-1 items-center justify-center rounded-[9px] bg-[#F1F3F8] font-poppins text-[11px] font-semibold text-[#374151]">
                Offerte
              </div>
            </div>
            <div
              className="-mx-1.5 mt-3 rounded-lg p-1.5 transition-[box-shadow] duration-200"
              style={glow(3)}
            >
              <div className="h-2 w-[70%] rounded bg-[#DDE1EA]" />
              <div className="mt-[7px] h-2 w-[92%] rounded bg-[#E9ECF3]" />
              <div className="mt-[7px] h-2 w-[84%] rounded bg-[#E9ECF3]" />
            </div>
          </div>
        </div>
      </figure>
      <p
        aria-hidden="true"
        className="mt-3 text-center font-poppins text-xs text-[#9AA1AC]"
      >
        Bij elke eis licht het bijbehorende deel op.
      </p>
    </div>
  );
}

export function RequirementsSection() {
  const [active, setActive] = useState<number | null>(null);
  const reqRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (window.innerWidth <= 900) return;
    const els = reqRefs.current.filter(
      (el): el is HTMLDivElement => el !== null,
    );
    if (!els.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) {
          const n = Number(visible[0].target.getAttribute("data-req"));
          if (n) setActive(n);
        }
      },
      { rootMargin: "-30% 0px -45% 0px", threshold: [0, 0.3, 0.6, 1] },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="eisen" className="scroll-mt-[88px] pt-14 sm:pt-24">
      <h2 className="mb-5 w-full font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
        De mobiele eisen die het verschil echt maken
      </h2>
      <p className="font-poppins text-base leading-[1.62] text-[#374151] sm:text-lg">
        Mobiel-eerst ontwerpen wordt vaak in vage termen beschreven. Voor een
        vakman doet maar een handvol dingen er werkelijk toe. Dit is de
        praktische lijst.
      </p>

      <div className="mt-8 flex flex-wrap-reverse items-start gap-x-10 gap-y-8">
        <div className="min-w-[min(100%,300px)] flex-[2.4_1_360px]">
          <div className="flex flex-col gap-[22px]">
            {REQUIREMENTS.map((req, i) => (
              <div
                key={req.title}
                ref={(el) => {
                  reqRefs.current[i] = el;
                }}
                data-req={i + 1}
                className={
                  i > 0
                    ? "scroll-mt-24 border-t border-[#F1F3F8] pt-[22px]"
                    : "scroll-mt-24"
                }
              >
                <div className="flex gap-4">
                  <span
                    aria-hidden="true"
                    className="flex size-[34px] flex-none items-center justify-center rounded-xl font-poppins text-lg font-bold text-white shadow-[0_12px_32px_rgba(91,33,182,0.10)]"
                    style={{
                      background:
                        "linear-gradient(90deg, #5B219F 0%, #922698 100%)",
                    }}
                  >
                    {i + 1}
                  </span>

                  <div>
                    <h3
                      className="mb-2 font-poppins text-lg font-bold leading-[1.3] text-[#111827] sm:text-xl"
                      dangerouslySetInnerHTML={{ __html: req.title }}
                    />
                    {req.body.map((p, j) =>
                      typeof p === "string" ? (
                        <p
                          key={j}
                          className="m-0 mb-2.5 font-poppins text-base leading-[1.58] text-[#4B5563] last:mb-0"
                          dangerouslySetInnerHTML={{ __html: p }}
                        />
                      ) : isValidElement(p) && p.type === "ul" ? (
                        <div key={j} className="mb-2.5 last:mb-0">
                          {p}
                        </div>
                      ) : (
                        <p
                          key={j}
                          className="m-0 mb-2.5 font-poppins text-base leading-[1.58] text-[#4B5563] last:mb-0"
                        >
                          {p}
                        </p>
                      ),
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <AnnotatedPhone active={active} />
      </div>
      <p className="mt-8 font-poppins text-base leading-[1.62] text-[#374151] sm:text-lg">
        Hoe die eisen bij elkaar optellen, zie je het scherpst in een
        vergelijking.
      </p>
    </section>
  );
}

const COMPARE_ROWS = [
  {
    element: "Telefoonnummer",
    bad: "Verstopt in de voettekst",
    good: "Meescrollende knop in de kop én onderbalk",
  },
  { element: "Laadtijd", bad: "6+ seconden op 4G", good: "Binnen 2 seconden" },
  {
    element: "Lopende tekst",
    bad: "12 pixels, lichtgrijs",
    good: "16 pixels, sterk contrast",
  },
  {
    element: "Tikvlakken",
    bad: "Klein, dicht op elkaar",
    good: "Minimaal 44 pixels, met ruimte",
  },
  {
    element: "Pop-ups",
    bad: "Nieuwsbriefmelding bij binnenkomst",
    good: "Geen, of één kleine strook",
  },
  {
    element: "Aanvragen",
    bad: "Lang formulier, 8+ velden",
    good: "Korte aanvraag, 3 velden",
  },
  {
    element: "Diensteninfo",
    bad: "Weggestopt in uitklapmenu’s",
    good: "Zichtbaar op het eerste scherm",
  },
];

export function ComparisonSection() {
  return (
    <section id="vergelijking" className="scroll-mt-[88px] pt-14 sm:pt-24">
      <h2 className="mb-5 w-full font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
        Mobielonvriendelijk tegenover mobielvriendelijk: naast elkaar
      </h2>
      <p className="mb-7 font-poppins text-base leading-[1.62] text-[#374151] sm:text-lg">
        De duidelijkste manier om het verschil te zien, is twee versies van
        dezelfde pagina naast elkaar te leggen.
      </p>

      <figure
        role="img"
        aria-label="Mobielonvriendelijke elektricienwebsite naast een mobielvriendelijke vakmanssite"
        className="m-0 mb-7 flex flex-wrap justify-center gap-5"
      >
        <div className="max-w-[260px] flex-[1_1_200px]">
          <div
            aria-hidden="true"
            className="rounded-[30px] bg-[#26222F] p-2 shadow-[0_16px_34px_rgba(17,24,39,0.12)]"
          >
            <div className="relative overflow-hidden rounded-[22px] bg-white">
              <div className="flex h-[38px] items-center justify-center border-b border-[#F1F3F8] font-poppins text-[10px] text-[#B7BAC4]">
                Van Dijk Elektro
              </div>
              <div className="relative p-3">
                <div className="absolute inset-2 z-[2] flex items-center justify-center rounded-xl bg-[#0F0C1E]/55">
                  <div className="relative w-4/5 rounded-lg bg-white p-2.5 text-center">
                    <div className="mb-1.5 font-poppins text-[9px] text-[#374151]">
                      Schrijf je in voor de nieuwsbrief
                    </div>
                    <div className="h-5 rounded bg-[#EDEFF3]" />
                    <span className="absolute right-1 top-0.5 font-poppins text-[9px] text-[#9AA1AC]">
                      ×
                    </span>
                  </div>
                </div>
                <div className="h-[7px] w-3/5 rounded-[3px] bg-[#E9ECF3]" />
                <div className="mt-1.5 h-[7px] w-[90%] rounded-[3px] bg-[#EDEFF3]" />
                <div className="mt-1.5 h-[7px] w-[82%] rounded-[3px] bg-[#EDEFF3]" />
                <div className="mt-1.5 h-[7px] w-[88%] rounded-[3px] bg-[#EDEFF3]" />
                <div className="mt-6 h-[7px] w-2/5 rounded-[3px] bg-[#EDEFF3]" />
              </div>
            </div>
          </div>
          <div className="mt-3 text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#F5E2C8] bg-[#FDF3E7] px-3 py-1.5 font-poppins text-[13px] font-semibold text-[#8A5310]">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
              >
                <path d="M12 8v5" />
                <circle cx="12" cy="16.5" r="0.6" fill="currentColor" />
                <path d="M10.3 3.6 2.4 18a2 2 0 0 0 1.7 3h15.8a2 2 0 0 0 1.7-3L13.7 3.6a2 2 0 0 0-3.4 0Z" />
              </svg>
              Onvriendelijk
            </span>
          </div>
        </div>
        <div className="max-w-[260px] flex-[1_1_200px]">
          <div
            aria-hidden="true"
            className="rounded-[30px] bg-[#0E0A1C] p-2 shadow-[0_18px_40px_rgba(91,33,182,0.2)]"
          >
            <div className="overflow-hidden rounded-[22px] bg-white">
              <div className="flex h-[38px] items-center justify-between border-b border-[#EEF0F4] px-3">
                <span className="font-poppins text-[11px] font-bold text-[#1F2937]">
                  Van Dijk Elektro
                </span>
                <span className="font-poppins text-[10px] font-bold text-[#16A34A]">
                  Bel
                </span>
              </div>
              <div className="p-3">
                <div className="font-poppins text-xs font-bold leading-[1.3] text-[#111827]">
                  Storing? Bel direct.
                </div>
                <div className="mt-2 flex h-[38px] items-center justify-center gap-1.5 rounded-[9px] bg-[#16A34A] font-poppins text-xs font-bold text-white">
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.4 2.5 1.6 3.6-.9 4.8a16 16 0 0 0 6 6c1.2-2.5 2.3-1.3 4.8-.9a2 2 0 0 1 1.7 2Z" />
                  </svg>
                  06 - 1234 5678
                </div>
                <div className="mt-2.5 h-2 w-4/5 rounded bg-[#DDE1EA]" />
                <div className="mt-1.5 h-2 w-[94%] rounded bg-[#E9ECF3]" />
                <div className="mt-1.5 h-2 w-[70%] rounded bg-[#E9ECF3]" />
              </div>
            </div>
          </div>
          <div className="mt-3 text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#E6E0FB] bg-[#F4F1FE] px-3 py-1.5 font-poppins text-[13px] font-semibold text-[#3B2E63]">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#6F4CF5"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
              Vriendelijk
            </span>
          </div>
        </div>
      </figure>

      <div className="overflow-hidden rounded-2xl border border-[#E6E8EF]">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[560px] border-collapse font-poppins text-[15px]">
            <caption className="sr-only">
              Vergelijking tussen een mobielonvriendelijke en een
              mobielvriendelijke elektricienwebsite
            </caption>
            <thead>
              <tr className="bg-[#F8F9FC]">
                <th
                  scope="col"
                  className="border-b border-[#EEF0F4] px-4.5 py-3.5 text-left text-[13px] font-bold tracking-[0.02em] text-[#111827] sm:px-[18px]"
                >
                  Element
                </th>
                <th
                  scope="col"
                  className="border-b border-[#EEF0F4] px-4.5 py-3.5 text-left text-[13px] font-bold text-[#8A5310] sm:px-[18px]"
                >
                  Mobielonvriendelijke site
                </th>
                <th
                  scope="col"
                  className="border-b border-[#EEF0F4] bg-[#FBFAFF] px-4.5 py-3.5 text-left text-[13px] font-bold text-[#5A3CE0] sm:px-[18px]"
                >
                  Mobielvriendelijke site
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPARE_ROWS.map((row) => (
                <tr key={row.element}>
                  <th
                    scope="row"
                    className="border-b border-[#F1F3F8] px-4.5 py-3.5 text-left align-top font-semibold text-[#111827] sm:px-[18px]"
                    dangerouslySetInnerHTML={{ __html: row.element }}
                  />
                  <td
                    className="border-b border-[#F1F3F8] px-4.5 py-3.5 align-top leading-[1.45] text-[#6B7280] sm:px-[18px]"
                    dangerouslySetInnerHTML={{ __html: row.bad }}
                  />
                  <td
                    className="border-b border-[#F1F3F8] bg-[#FBFAFF] px-4.5 py-3.5 align-top font-medium leading-[1.45] text-[#374151] sm:px-[18px]"
                    dangerouslySetInnerHTML={{ __html: row.good }}
                  />
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <p className="mt-6 font-poppins text-base leading-[1.62] text-[#374151] sm:text-lg">
        De bezoeker rechts belt binnen dertig seconden. De bezoeker links
        vertrekt en belt de volgende elektricien.
      </p>
    </section>
  );
}

export function AuditSection() {
  return (
    <section id="test" className="scroll-mt-[88px] pt-14 sm:pt-24">
      <h2 className="mb-5 w-full font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
        Zo test je je eigen elektricienwebsite op mobiel
      </h2>
      <p className="font-poppins text-base leading-[1.62] text-[#374151] sm:text-lg">
        Je hebt geen ontwikkelaar nodig om de meest voorkomende problemen te
        vinden. Loop deze controle op je eigen telefoon door — het liefst op 4G
        in plaats van wifi.
      </p>

      <AuditTool />

      <p className="mt-6 font-poppins text-base leading-[1.62] text-[#374151] sm:text-lg">
        Zak je voor meer dan twee van deze controles, dan kost je mobiele site
        je klanten — geruisloos, elke week opnieuw.
      </p>
    </section>
  );
}

export function LayersSection() {
  const openLeadForm = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-lead-form"));
    }
  };
  const layers = [
    {
      label: "Laag 1",
      title: "De website zelf",
      body: "Past zich aan elk scherm aan, laadt snel en heeft op elk scherm een duidelijke vervolgstap. Dit is de voordeur.",
      icon: (
        <>
          <rect x="3" y="4" width="18" height="14" rx="2" />
          <path d="M3 8h18M8 21h8" />
        </>
      ),
      dark: false,
    },
    {
      label: "Laag 2",
      title: "Het aanvraag- en boekingssysteem",
      body: "Een kort formulier of een WhatsApp-knop waarmee de klant je binnen dertig seconden bereikt. Geen accounts, geen inloggen, geen drempels.",
      icon: (
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z" />
      ),
      dark: false,
    },
    {
      label: "Laag 3",
      title: "De plek waar alles samenkomt",
      body: "Als de aanvraag binnenkomt, moet hij ergens geordend landen. De Growth Rocket Hub houdt elke aanvraag, boeking en klantgegeven op één plek bij, zodat er niets tussendoor glipt terwijl jij op een klus staat.",
      icon: (
        <>
          <rect x="3" y="3" width="8" height="8" rx="1.5" />
          <rect x="13" y="3" width="8" height="8" rx="1.5" />
          <rect x="3" y="13" width="8" height="8" rx="1.5" />
          <rect x="13" y="13" width="8" height="8" rx="1.5" />
        </>
      ),
      dark: true,
    },
  ];
  return (
    <section id="lagen" className="scroll-mt-[88px] pt-14 sm:pt-24">
      <h2 className="mb-5 w-full font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
        Hoe een mobielklare elektricienwebsite er in de praktijk uitziet
      </h2>
      <p className="mb-7 font-poppins text-base leading-[1.62] text-[#374151] sm:text-lg">
        Een werkende opzet voor een vakmanssite bestaat uit drie lagen — en alle
        drie moeten ze op een telefoon werken.
      </p>

      <div className="flex flex-wrap items-stretch gap-3.5">
        {layers.map((layer, i) => (
          <div key={layer.label} className="contents">
            {layer.dark && (
              <div aria-hidden="true" className="h-0 basis-full" />
            )}
            <div
              className="min-w-[min(100%,240px)] flex-[1_1_240px] rounded-2xl border p-[22px]"
              style={
                layer.dark
                  ? {
                      borderColor: "#6F4CF5",
                      background: "#0E0A1C",
                      color: "#fff",
                    }
                  : { borderColor: "#E6E8EF", background: "#fff" }
              }
            >
              <div className="mb-3 flex items-center gap-2.5">
                <span
                  className="flex size-10 items-center justify-center rounded-[11px]"
                  style={
                    layer.dark
                      ? {
                          background: "rgba(255,255,255,0.12)",
                          color: "#C5B7FB",
                        }
                      : { background: "#F4F1FE", color: "#6F4CF5" }
                  }
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {layer.icon}
                  </svg>
                </span>
                <span
                  className="font-poppins text-xs font-bold"
                  style={
                    layer.dark
                      ? { color: "rgba(255,255,255,0.5)" }
                      : { color: "#9AA1AC" }
                  }
                  dangerouslySetInnerHTML={{ __html: layer.label }}
                />
              </div>
              <h3
                className="mb-2 font-poppins text-lg font-bold"
                style={{ color: layer.dark ? "#fff" : "#111827" }}
                dangerouslySetInnerHTML={{ __html: layer.title }}
              />
              <p
                className="m-0 font-poppins text-[15px] leading-[1.55]"
                style={{
                  color: layer.dark ? "rgba(255,255,255,0.82)" : "#4B5563",
                }}
                dangerouslySetInnerHTML={{ __html: layer.body }}
              />
            </div>
            {i < layers.length - 1 && (
              <div
                aria-hidden="true"
                className="flex flex-none items-center justify-center text-[#C5B7FB]"
              >
                <ArrowRight size={26} />
              </div>
            )}
          </div>
        ))}
      </div>

      <p className="mt-6 font-poppins text-base leading-[1.62] text-[#374151] sm:text-lg">
        Je hoeft die drie lagen niet zelf te bouwen. Een volledig ontzorgde
        dienst regelt de website, de aanvraagroute en het beheer in samenhang —
        zodat de mobiele ervaring klopt van de eerste tik tot het opvolgende
        telefoontje.
      </p>

      <div className="mt-6.5 flex flex-wrap items-center justify-between gap-3.5 rounded-2xl border border-[#E6E0FB] bg-[#FBFAFF] px-6 py-5.5">
        <p className="m-0 max-w-[520px] text-pretty font-poppins text-base font-medium text-[#3B2E63]">
          Benieuwd hoe die drie lagen er samen uitzien?
        </p>
        <Button
          onClick={openLeadForm}
          variant="primary"
          arrow="right"
          className="flex-none"
        >
          Bekijk hoe het werkt
        </Button>
      </div>
    </section>
  );
}

export function ClosingSection() {
  return (
    <section id="samenvatting" className="scroll-mt-[88px] pt-14 sm:pt-24">
      <h2 className="mb-[22px] w-full  font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
        Kort samengevat
      </h2>
      <p className="mb-5 font-poppins text-base leading-[1.62] text-[#374151] sm:text-lg">
        Een mobielvriendelijke elektricienwebsite gaat niet over modern ogen.
        Hij gaat erover dat je in één tik te bellen bent, in één oogopslag te
        lezen en in drie seconden te vertrouwen. Het meeste werk zit in drempels
        weghalen — niet in functies toevoegen.
      </p>

      <blockquote className="my-8 border-none p-0">
        <p className="text-balance font-poppins text-[22px] font-bold leading-[1.28] tracking-[-0.01em] text-[#111827] sm:text-[32px]">
          &ldquo;In één tik te bellen, in één oogopslag te lezen en in drie
          seconden te vertrouwen.&rdquo;
        </p>
        <div
          aria-hidden="true"
          className="mt-4 h-[5px] w-14 rounded-full bg-[#FDE68A]"
        />
      </blockquote>

      <p className="mb-5 font-poppins text-base leading-[1.62] text-[#374151] sm:text-lg">
        Doorloop de test hierboven en repareer de twee of drie dingen die het
        zwaarst wegen — zie{" "}
        <InlineLink href="/nl/blog/mobiele-website-voor-elektriciens">
          de acht reparatiestappen voor je mobiele site
        </InlineLink>{" "}
        voor de bredere mobiele gids. Is je huidige site niet eenvoudig te
        repareren, dan is opnieuw beginnen met een mobiel-eerst gebouwde site
        meestal sneller dan een oude oplappen.
      </p>
      <p className="font-poppins text-base leading-[1.62] text-[#374151] sm:text-lg">
        Growth Rocket helpt elektriciens daar precies bij: een mobiel-eerst
        gebouwde website, het aanvraag- en boekingssysteem en de Growth Rocket
        Hub in één beheerd geheel. In plaats van te schakelen tussen losse
        aanbieders krijg je een website die aanvragen oplevert, prettig werkt op
        de telefoon van je klant en volledig wordt beheerd — zodat jouw tijd
        naar je bedrijf gaat.
      </p>
    </section>
  );
}

export function FinalCtaSection() {
  const openLeadForm = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-lead-form"));
    }
  };
  return (
    <section className="pt-12 sm:pt-[72px]">
      <div className="relative overflow-hidden rounded-[22px] border border-[#E6E0FB] bg-[#F4F1FE] p-6 sm:p-10">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-[60px] -bottom-[90px] size-[280px] rounded-full opacity-40 blur-[80px]"
          style={{ background: "#C5B7FB" }}
        />
        <div className="relative max-w-[640px]">
          <h2 className="mb-3 font-poppins text-xl font-bold leading-[1.3] tracking-[-0.01em] text-[#111827] sm:text-[26px]">
            Liever een mobielklare website die voor je wordt gebouwd én beheerd?
          </h2>
          <p className="mb-5.5 font-poppins text-base leading-[1.58] text-[#4B5563]">
            Growth Rocket brengt de drie lagen samen: een mobiel-eerst gebouwde
            website, het aanvraag- en boekingssysteem en de Growth Rocket Hub —
            als één beheerd geheel.
          </p>
          <Button
            onClick={openLeadForm}
            variant="primary"
            arrow="right"
            size="lg"
          >
            Bekijk hoe het werkt
          </Button>
        </div>
      </div>
    </section>
  );
}

export function MoreForElectriciansSection() {
  return (
    <section id="meer" className="scroll-mt-[88px] pt-14 sm:pt-24">
      <h2 className="mb-5 text-balance font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
        Meer voor elektriciens
      </h2>
      <p className="mb-7 max-w-[720px] font-poppins text-base leading-[1.62] text-[#374151] sm:text-lg">
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
                label:
                  "Mobiele website voor elektriciens: waarom het zwaarder telt",
                href: "/nl/blog/mobiele-website-voor-elektriciens",
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
