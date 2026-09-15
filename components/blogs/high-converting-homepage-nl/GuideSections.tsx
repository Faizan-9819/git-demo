import type { ReactNode } from "react";
import { Check, Code, Search, ShieldCheck, X, Zap } from "lucide-react";
import BlogCtaSection from "@/components/blogs/shared/BlogCtaSection";
import BlogFAQ, { type BlogFaqItem } from "@/components/blogs/shared/BlogFAQ";
import CostComparisonTable, {
  type ComparisonRow,
} from "@/components/blogs/shared/CostComparisonTable";
import MoreLinksAccordion from "@/components/blogs/shared/MoreLinksAccordion";
import Flag from "@/components/blogs/shared/ReviewFlag";

type Category = "Duidelijkheid" | "Vertrouwen" | "Actie";
type Tip = { lead: ReactNode; rest: ReactNode; dotColor?: string };
type Element = {
  number: string;
  category: Category;
  answers: string;
  title: string;
  what: string;
  why: string;
  good: ReactNode;
  bad: ReactNode;
  specificsLabel?: string;
  tips: Tip[];
  note: ReactNode;
};

const categoryStyles: Record<Category, { pill: string; dot: string }> = {
  Duidelijkheid: {
    pill: "border-[#E4DCFB] bg-[#F4F1FE] text-[#6F4CF5]",
    dot: "#6F4CF5",
  },
  Vertrouwen: {
    pill: "border-[#C6EBD8] bg-[#ECFAF3] text-[#16875A]",
    dot: "#16875A",
  },
  Actie: {
    pill: "border-[#F3E0BC] bg-[#FDF6EA] text-[#C77A0A]",
    dot: "#C77A0A",
  },
};

const SERVICES = [
  "Groepenkast vervangen",
  "Laadpaal installeren",
  "Nieuwe stopcontacten",
  "LED-verlichting",
  "Zonnepanelen aansluiten",
  "Storingen oplossen",
];

const elements: Element[] = [
  {
    number: "01",
    category: "Duidelijkheid",
    answers: "doe jij wat ik nodig heb?",
    title: "Een heldere kopregel met dienst, plaats en specialisatie",
    what: "De eerste regel die een bezoeker ziet — boven de vouw — die in één oogopslag drie dingen bevestigt: wat je doet, waar je het doet en waarom je geloofwaardig bent.",
    why: 'Bezoekers komen binnen na een zoekopdracht als "elektricien Utrecht". Bevestigt je kopregel die match niet binnen twee seconden, dan drukken ze op terug en klikken ze op het volgende Google-resultaat.',
    good: (
      <div className="rounded-[10px] border border-[#C6EBD8] bg-white p-4">
        <p className="font-poppins text-lg font-bold leading-[1.25] tracking-[-0.3px] text-[#1F2937]">
          Elektricien in Utrecht en omgeving
        </p>
        <p className="mt-1.5 font-poppins text-[13.5px] leading-5 text-[#6B7280]">
          Groepenkasten, laadpalen en storingen — vakwerk door gecertificeerde
          monteurs.
        </p>
        <span className="mt-2.5 inline-block rounded-md border border-[#F3E0BC] bg-[#FDF6EA] px-2.5 py-1 font-poppins text-xs font-semibold text-[#C77A0A]">
          Binnen 2 uur bij spoed
        </span>
      </div>
    ),
    bad: (
      <div className="rounded-[10px] border border-[#F3D2D2] bg-white p-4">
        <p className="font-poppins text-lg font-bold leading-[1.3] tracking-[-0.3px] text-[#9AA1AC]">
          &quot;Welkom op onze website — al sinds 2008 uw partner in
          elektrotechnische totaaloplossingen.&quot;
        </p>
        <p className="mt-2.5 font-poppins text-[12.5px] leading-[19px] text-[#B0B4BC]">
          Geen plaats, geen dienst, geen reden om te blijven.
          &quot;Totaaloplossingen&quot; is marketingruis.
        </p>
      </div>
    ),
    tips: [
      {
        lead: "Schrijf in het Nederlands.",
        rest: "Lokaal zoeken gebeurt in het Nederlands, ook bij expats.",
      },
      {
        lead: <>vertrouwenswoorden die een lezer het snelst herkent.</>,
        rest: "alleen als deze claim actueel en controleerbaar is. Noem de relevante erkenning of het certificaat en de instantie die deze heeft afgegeven.",
      },
      {
        lead: "Noem je regio, niet alleen je stad.",
        rest: '"Utrecht en omgeving" vangt de omliggende dorpen.',
      },
      {
        lead: "Open met je best renderende diensten,",
        rest: 'niet met "alle elektrotechnische werkzaamheden".',
      },
    ],
    note: "Maak de belangrijkste dienst en plaats duidelijk in de H1 en zorg dat de belangrijkste contactmogelijkheid direct zichtbaar is op mobiel. Gebruik voor de laadprestaties de gepubliceerde Core Web Vitals-richtlijn van Google: een Largest Contentful Paint (LCP) van maximaal 2,5 seconden bij het 75e percentiel. Een doel van 1,5 seconde kan als strengere interne norm worden gebruikt, maar is niet de algemene drempelwaarde van Google",
  },
  {
    number: "02",
    category: "Actie",
    answers: "hoe bereik ik je nú?",
    title: "Een klikbare belknop boven de vouw — meescrollend op mobiel",
    what: "Een zichtbaar telefoonnummer bovenaan dat op mobiel direct de telefoon-app opent — herhaald als vaste knop die in beeld blijft tijdens het scrollen.",
    why: "Bij urgente problemen wil een bezoeker nú bellen, geen formulier invullen. Veruit het meeste bezoek aan lokale dienstverleners komt via de telefoon — en dat telefoontje verlies je zodra het nummer onderin de voettekst staat.",
    good: (
      <div className="rounded-[10px] border border-[#C6EBD8] bg-white p-4">
        <span className="inline-flex items-center gap-2 rounded-[9px] bg-[#16875A] px-4 py-2.5 font-poppins text-sm font-bold text-white">
          📞 Bel direct: 030-123 4567
        </span>
        <p className="mt-2 font-poppins text-xs text-[#6B7280]">
          Ma–vr 08:00–18:00 · Spoed 24/7
        </p>
        <div className="mt-3 flex gap-1.5 border-t border-dashed border-[#C6EBD8] pt-3">
          <span className="flex-1 rounded-md bg-[#16875A] py-1.5 text-center font-poppins text-[11px] font-bold text-white">
            Bellen
          </span>
          <span className="flex-1 rounded-md bg-[#25D366] py-1.5 text-center font-poppins text-[11px] font-bold text-white">
            WhatsApp
          </span>
          <span className="flex-1 rounded-md border border-[#E4DCFB] bg-[#F4F1FE] py-1.5 text-center font-poppins text-[11px] font-bold text-[#6F4CF5]">
            Offerte
          </span>
        </div>
        <p className="mt-1.5 text-center font-poppins text-[11px] text-[#9AA1AC]">
          ↑ meescrollende balk op mobiel
        </p>
      </div>
    ),
    bad: (
      <div className="flex min-h-[118px] flex-col justify-end rounded-[10px] border border-[#F3D2D2] bg-white p-4">
        <p className="border-t border-[#EEF0F4] pt-2.5 font-poppins text-[11px] text-[#B0B4BC]">
          © 2026 · Algemene voorwaarden · Privacy ·{" "}
          <span className="text-[#C4C8D0]">tel. 030 123 4567</span>
        </p>
        <p className="mt-2.5 font-poppins text-[12.5px] leading-[19px] text-[#B0B4BC]">
          Grijs, klein, in de voettekst — en als afbeelding, dus niet
          aanklikbaar.
        </p>
      </div>
    ),
    tips: [
      {
        lead: "Noteer op de Nederlandse manier:",
        rest: "030-xxx xxxx of 06-xxxxxxxx, met spaties.",
        dotColor: "#6F4CF5",
      },
      {
        lead: "Kies waar mogelijk een vast nummer.",
        rest: "Een netnummer straalt een echt lokaal bedrijf uit.",
        dotColor: "#6F4CF5",
      },
      {
        lead: "Zet openingstijden bij het nummer.",
        rest: '"Ma–vr 08:00–18:00 · Spoed 24/7" haalt de twijfel weg.',
        dotColor: "#6F4CF5",
      },
      {
        lead: "Herhaal de knop.",
        rest: "Eén keer bovenaan, één keer in de meescrollende balk.",
        dotColor: "#6F4CF5",
      },
    ],
    note: (
      <>
        Gebruik{" "}
        <code className="rounded bg-[#EFEDF7] px-1.5 py-0.5 font-mono text-[12.5px]">
          &lt;a href=&quot;tel:+31301234567&quot;&gt;
        </code>
        . Vermijd nummers in afbeeldingen. Let erop dat de vaste onderbalk het
        contactformulier niet afdekt zodra dat in beeld scrolt.
      </>
    ),
  },
  {
    number: "03",
    category: "Vertrouwen",
    answers: "kan ik je vertrouwen?",
    title:
      "Vertrouwenssignalen — KVK, Techniek Nederland, certificeringen en echte reviews",
    what: "Kleine visuele bevestigingen dat je een echt, ingeschreven en gecertificeerd Nederlands bedrijf bent — hoog op de pagina, niet weggestopt in de voettekst.",
    why: "Onbetrouwbare elektriciens kunnen misbruik maken van urgente situaties door onduidelijke prijzen te hanteren, slecht werk te leveren of onjuiste bedrijfsgegevens te gebruiken. Controleerbare bedrijfsinformatie, echte reviews en actuele lidmaatschappen helpen bezoekers te beoordelen met wie zij te maken hebben; generieke awardplaatjes bieden die zekerheid niet.",
    good: (
      <div className="flex flex-wrap items-center gap-1.5 rounded-[10px] border border-[#C6EBD8] bg-white p-4">
        <span className="rounded-md border border-[#E4E8EC] bg-[#F6F8FA] px-2.5 py-1.5 font-poppins text-xs font-semibold text-[#1F2937]">
          KVK 12345678
        </span>
        <span className="rounded-md border border-[#E4E8EC] bg-[#F6F8FA] px-2.5 py-1.5 font-poppins text-xs font-semibold text-[#1F2937]">
          <Flag>Erkend</Flag> lid Techniek Nederland
        </span>
        <span className="rounded-md border border-[#E4E8EC] bg-[#F6F8FA] px-2.5 py-1.5 font-poppins text-xs font-semibold text-[#1F2937]">
          NEN 1010 gecertificeerd
        </span>
        <span className="rounded-md border border-[#F3E0BC] bg-[#FDF6EA] px-2.5 py-1.5 font-poppins text-xs font-bold text-[#C77A0A]">
          ★ 4,8 uit 127 Google-reviews
        </span>
      </div>
    ),
    bad: (
      <div className="flex flex-wrap items-center gap-1.5 rounded-[10px] border border-[#F3D2D2] bg-white p-4">
        <span className="rounded-md border border-dashed border-[#D8DCE2] bg-[#F4F5F7] px-2.5 py-1.5 font-poppins text-xs font-bold text-[#B0B4BC]">
          🏆 Nº 1 in service
        </span>
        <span className="rounded-md border border-dashed border-[#D8DCE2] bg-[#F4F5F7] px-2.5 py-1.5 font-poppins text-xs font-bold text-[#B0B4BC]">
          ★★★★★ Klanten zijn dol op ons
        </span>
        <span className="rounded-md border border-dashed border-[#D8DCE2] bg-[#F4F5F7] px-2.5 py-1.5 font-poppins text-xs font-bold text-[#B0B4BC]">
          Award 2019
        </span>
        <p className="mt-1 w-full font-poppins text-[12.5px] leading-[19px] text-[#B0B4BC]">
          Geen bron, geen uitgevende instantie, niets te controleren.
        </p>
      </div>
    ),
    specificsLabel: "Voor de Nederlandse markt — de volgorde die telt",
    tips: [
      {
        lead: "Het KVK-nummer is niet onderhandelbaar.",
        rest: "Het sterkste Nederlandse vertrouwenssignaal dat er is.",
      },
      {
        lead: "Techniek Nederland weegt zwaar",
        rest: "bij huiseigenaren die eerst onderzoek doen.",
      },
      {
        lead: "Certificeringen die tellen:",
        rest: "NEN 1010, Sterkin, STEK — met de echte logo's.",
      },
      {
        lead: "Reviews met aantal én bron.",
        rest: '"4,8 uit 127" leest als gevestigd; "4,9 uit 6" als net begonnen.',
      },
    ],
    note: 'Haal Google-reviews live op, zodat het aantal meebeweegt. Een hard ingetypte "4,9 sterren" die twee jaar niet verandert, leest als nep zodra de bezoeker je echte profiel opent.',
  },
  {
    number: "04",
    category: "Actie",
    answers: "hoe bereik ik je nú?",
    title: "Een prominente spoedvermelding",
    what: "Een duidelijk, visueel afwijkend signaal dat vertelt of je spoedklussen aanneemt — en hoe snel je dan komt.",
    why: "Waarom dit telefoontjes kan opleveren. Een urgente zoekopdracht kan wijzen op een directe behoefte. Geef duidelijk aan of je spoedklussen aanneemt, tijdens welke uren, binnen welk werkgebied en hoe de klant contact moet opnemen. Ga er niet van uit dat iedere spoedklant akkoord gaat met een hoger tarief; maak de toepasselijke prijs bekend voordat de afspraak wordt bevestigd.",
    good: (
      <div className="rounded-[10px] bg-[linear-gradient(100deg,#E8582E,#D9412B)] p-4 text-white">
        <p className="font-poppins text-base font-bold leading-[1.35]">
          ⚡ Spoed? Wij staan binnen 2 uur bij u in Utrecht en omgeving.
        </p>
        <span className="mt-2.5 inline-block rounded-[7px] border border-white/35 bg-white/[0.16] px-3 py-1.5 font-poppins text-[13px] font-bold">
          Bel 030-123 4567 — 24/7
        </span>
      </div>
    ),
    bad: (
      <div className="min-h-24 rounded-[10px] border border-[#F3D2D2] bg-white p-4">
        <p className="font-poppins text-xs leading-[1.7] text-[#B0B4BC]">
          …onze diensten omvatten installatie, onderhoud,{" "}
          <span className="bg-[#FBEFEF] text-[#CC8888]">
            en wij doen ook spoedklussen
          </span>
          , verlichting, en meer…
        </p>
        <p className="mt-2.5 font-poppins text-[12.5px] leading-[19px] text-[#B0B4BC]">
          Weggestopt in een alinea. Geen reactietijd, geen direct nummer, geen
          werkgebied.
        </p>
      </div>
    ),
    tips: [
      {
        lead: "Wees concreet:",
        rest: '"binnen 2 uur" of "dezelfde dag". "Snelle service" werkt niet.',
      },
      {
        lead: "Benoem het werkgebied.",
        rest: '"Utrecht e.o., tot 30 km" haalt het gokken weg.',
      },
      {
        lead: "Wees eerlijk over 24/7.",
        rest: "Een gemiste spoedoproep levert een negatieve review op.",
      },
      {
        lead: "Wees open over het spoedtarief.",
        rest: "Transparantie over spoedtarieven. Gebruik het actuele tarief van de elektricien en geen algemeen voorbeeldtarief. Vermeld voor consumenten de btw en alle onvermijdelijke kosten. Leg ook de minimumafname, voorrijkosten, spoedtoeslag, materiaalkosten en berekening van extra werktijd uit. Alleen als voorbeeld van de opmaak: “Spoedwerk: €[actueel bedrag] per uur incl. btw; minimaal [actuele duur]; voorrijkosten €[actueel bedrag] incl. btw; materialen [berekeningswijze].”",
      },
    ],
    note: 'Een tijdbewuste banner — "Momenteel bereikbaar voor spoed" binnen openingstijden, "Buiten openingstijden — bel voor spoed" daarbuiten — tilt het aantal aanvragen buiten kantooruren merkbaar op. Zo\'n dertig regels code; hoort standaard in een goede opzet.',
  },
  {
    number: "05",
    category: "Duidelijkheid",
    answers: "doe jij mijn klus?",
    title: "Een dienstenlijst in klantentaal, niet in vakjargon",
    what: "Een scanbaar blok met de zes tot acht belangrijkste dingen die je doet — in de woorden die je klanten zelf zoeken, niet de termen die je met collega's gebruikt.",
    why: 'Huiseigenaren kennen het verschil niet tussen "verdeelinrichting" en "groepenkast". Gebruikt je dienstenblok vaktaal, dan kan de bezoeker niet bevestigen dat jij zíjn klus doet — en vertrekt hij.',
    good: (
      <div>
        <div className="grid grid-cols-2 gap-1.5">
          {SERVICES.map((service) => (
            <span
              key={service}
              className="rounded-lg border border-[#C6EBD8] bg-white px-2.5 py-2.5 font-poppins text-[12.5px] font-semibold text-[#1F2937]"
            >
              {service}
            </span>
          ))}
        </div>
        <p className="mt-2 font-poppins text-[11px] text-[#7C9A8A]">
          Elke kaart linkt naar een eigen dienstpagina.
        </p>
      </div>
    ),
    bad: (
      <div className="flex min-h-[150px] flex-col justify-center rounded-[10px] border border-[#F3D2D2] bg-white p-4">
        <p className="font-poppins text-sm italic leading-[23px] text-[#B0B4BC]">
          &quot;Wij verzorgen alle elektrotechnische werkzaamheden voor
          particulier en zakelijk, zowel nieuwbouw als renovatie.&quot;
        </p>
        <p className="mt-3 font-poppins text-[12.5px] leading-[19px] text-[#B0B4BC]">
          Technisch volledig, praktisch nutteloos. Verplaats je stopcontacten?
          Installeer je laadpalen? De bezoeker weet het niet.
        </p>
      </div>
    ),
    tips: [
      {
        lead: "Gebruik echte zoekfrases:",
        rest: '"groepenkast vervangen", "laadpaal installeren", "stroomstoring oplossen".',
      },
      {
        lead: "Scheid particulier en zakelijk",
        rest: "als je beide bedient — mensen filteren zichzelf.",
      },
      {
        lead: "Zet erop waar je omzet vandaan komt,",
        rest: "niet alles wat je kúnt. Dertig diensten kost vertrouwen.",
      },
      {
        lead: "Neem de groeiende diensten op:",
        rest: "laadpalen, thuisbatterijen, warmtepomp-elektra.",
      },
    ],
    note: 'Elke dienst hoort te linken naar een eigen dienstpagina — geen anker op dezelfde pagina. Eigen pagina\'s laten je vinden op dienstspecifieke zoekopdrachten ("laadpaal installeren Utrecht").',
  },
  {
    number: "06",
    category: "Vertrouwen",
    answers: "kan ik je vertrouwen?",
    title: "Echte foto's van je team, je bus en afgerond werk",
    what: "Authentieke foto's van jou, je team, je bus met logo en echte voor-en-na-foto's van afgeronde klussen. Geen stockfoto's, geen AI-beelden.",
    why: "Generieke stockbeelden vertellen een bezoeker weinig over het bedrijf dat straks bij hem thuis komt. Echte foto’s — zelfs eenvoudige smartphonefoto’s — geven een concreter beeld van het bedrijf en het uitgevoerde werk.",
    good: (
      <div>
        <div className="grid grid-cols-2 gap-2">
          <div
            className="relative h-[88px] overflow-hidden rounded-[9px] bg-[linear-gradient(135deg,#DDE6DF,#C6D6CC)]"
            style={{
              backgroundImage:
                "url('/blogimages/en/7-elements-of-a-high-converting-electrician-homepage/Left-1280-1.webp')",
            }}
          >
            <span className="absolute inset-x-0 bottom-0 bg-[#14121A]/55 px-1.5 py-1 font-poppins text-[10px] font-semibold text-white">
              Martijn, eigenaar · bestickerde bus
            </span>
          </div>
          {/*  */}
          <div
            className="relative h-[88px] overflow-hidden rounded-[9px] bg-[linear-gradient(135deg,#DDE6DF,#C6D6CC)]"
            style={{
              backgroundImage:
                "url('/blogimages/en/7-elements-of-a-high-converting-electrician-homepage/Left-1280-2.webp')",
            }}
          >
            {/*  */}
            <span className="absolute inset-x-0 bottom-0 bg-[#14121A]/55 px-1.5 py-1 font-poppins text-[10px] font-semibold text-white">
              Voor → na: Lombok, Utrecht
            </span>
          </div>
        </div>
        <p className="mt-2 font-poppins text-[11px] text-[#7C9A8A]">
          Voornamen zichtbaar, buurt genoemd, echte klus.
        </p>
      </div>
    ),
    bad: (
      <div>
        <div
          className="flex h-[88px] items-center justify-center rounded-[9px] bg-[repeating-linear-gradient(45deg,#F0F1F3,#F0F1F3_10px,#E8E9EC_10px,#E8E9EC_20px)]"
          style={{
            backgroundImage:
              "url('/blogimages/en/7-elements-of-a-high-converting-electrician-homepage/Right.webp')",
          }}
        >
          <span className="font-poppins text-[11px] font-semibold text-[#B0B4BC]">
            📷 Stockfoto · oranje overall + klembord
          </span>
        </div>
        <p className="mt-2.5 font-poppins text-[12.5px] leading-[19px] text-[#B0B4BC]">
          Of een AI-elektricien met nét verkeerde vingers. Huiseigenaren
          verbinden het aan nepbedrijven.
        </p>
      </div>
    ),
    tips: [
      {
        lead: "Laat de bus zien.",
        rest: "Een bestickerde bus bevestigt dat het bedrijf fysiek bestaat.",
      },
      {
        lead: "Laat het team zien, met naam.",
        rest: "Voornamen bouwen meer vertrouwen dan anonieme groepsfoto's.",
      },
      {
        lead: "Laat ook de rommel zien.",
        rest: "Een chaotische oude kast naast een strakke nieuwe bewíjst de verandering.",
      },
      {
        lead: "Vermijd dronebeelden en overproductie.",
        rest: "Telefoonfoto's bij daglicht winnen van studiowerk.",
      },
    ],
    note: "Lever foto's aan als WebP op 80% kwaliteit, op de juiste afmetingen. Een JPEG van 4 MB duwt de mobiele laadtijd voorbij de 3 seconden. Richtlijn: ±1600 px breed voor de openingsfoto, max. 300 KB per foto.",
  },
  {
    number: "07",
    category: "Actie",
    answers: "hoe bereik ik je, op mijn manier?",
    title:
      "Een drempelloos contactformulier — met WhatsApp als volwaardig alternatief",
    what: "Een kort formulier dat alleen vraagt wat nodig is om te reageren, met daarnaast een zichtbare WhatsApp-knop voor wie liever een berichtje stuurt.",
    why: "Elk extra veld kost inzendingen. En een flink deel van je klanten — vooral 25 tot 45 jaar — vult simpelweg geen formulier in, maar stuurt wél een WhatsApp-bericht met twee duimtikken. Zonder knop laat je een meetbaar deel van je aanvragen liggen.",
    good: (
      <div className="rounded-[10px] border border-[#C6EBD8] bg-white p-4">
        <div className="flex flex-col gap-1.5">
          <span className="rounded-md border border-[#E4E8EC] bg-[#F6F8FA] px-2.5 py-2 font-poppins text-[11px] text-[#9AA1AC]">
            Naam
          </span>
          <span className="rounded-md border border-[#E4E8EC] bg-[#F6F8FA] px-2.5 py-2 font-poppins text-[11px] text-[#9AA1AC]">
            Telefoon
          </span>
          <span className="rounded-md border border-[#E4E8EC] bg-[#F6F8FA] px-2.5 py-2 font-poppins text-[11px] text-[#9AA1AC]">
            Postcode
          </span>
          <span className="rounded-md border border-[#E4E8EC] bg-[#F6F8FA] px-2.5 pb-5 pt-2 font-poppins text-[11px] text-[#9AA1AC]">
            Waar kunnen we mee helpen?
          </span>
        </div>
        <div className="mt-2.5 flex gap-1.5">
          <span className="flex-1 rounded-md bg-[#6F4CF5] py-2 text-center font-poppins text-xs font-bold text-white">
            Verstuur
          </span>
          <span className="flex-1 rounded-md bg-[#25D366] py-2 text-center font-poppins text-xs font-bold text-white">
            💬 WhatsApp
          </span>
        </div>
        <p className="mt-2 font-poppins text-[11px] text-[#7C9A8A]">
          &quot;Reactie binnen 2 uur op werkdagen. Geen verplichtingen.&quot;
        </p>
      </div>
    ),
    bad: (
      <div className="rounded-[10px] border border-[#F3D2D2] bg-white p-4">
        <div className="flex flex-col gap-1.5">
          <span className="rounded-md bg-[#F4F5F7] px-2 py-1.5 font-poppins text-[10px] text-[#B0B4BC]">
            Naam · Volledig adres · E-mail · Telefoon
          </span>
          <span className="rounded-md bg-[#F4F5F7] px-2 py-1.5 font-poppins text-[10px] text-[#B0B4BC]">
            Afspraakdatum · Koop/huur · Bouwjaar
          </span>
          <span className="rounded-md bg-[#F4F5F7] px-2 py-1.5 font-poppins text-[10px] text-[#B0B4BC]">
            Vorige elektricien · Reden overstap
          </span>
          <span className="rounded-md bg-[#F4F5F7] px-2 py-1.5 font-poppins text-[10px] text-[#B0B4BC]">
            ☐ Nieuwsbrief ☐ Voorwaarden · reCAPTCHA
          </span>
        </div>
        <p className="mt-2.5 font-poppins text-[12.5px] leading-[19px] text-[#B0B4BC]">
          12 velden. De meeste bezoekers haken af vóór veld vier. En nergens
          WhatsApp.
        </p>
      </div>
    ),
    tips: [
      {
        lead: "WhatsApp is een hoofdkanaal,",
        rest: "geen extraatje. Vanaf mobiel overtreft het regelmatig de formulieren.",
      },
      {
        lead: "Gebruik wa.me-links",
        rest: 'met een voorgevuld bericht ("Hallo, ik heb een vraag over…").',
      },
      {
        lead: "Vraag een postcode, geen volledig adres.",
        rest: "Genoeg om het werkgebied te beoordelen.",
      },
      {
        lead: "Sla marketingvinkjes over",
        rest: "op het eerste formulier. Bied ze later in de antwoordmail.",
      },
    ],
    note: "Kies een honeypot in plaats van reCAPTCHA — die laatste kost bij lokale dienstverleners meetbaar aanvragen. En laat inzendingen landen op één plek waar een drukke elektricien ze ook echt ziet — bij Growth Rocket komen telefoon, WhatsApp en formulier samen in de Growth Rocket Hub in plaats van verspreid over inbox, telefoon en notitieblok.",
  },
];

export function IntroSection() {
  const sources = [
    "Patronen van homepages die structureel aanvragen opleveren — telefoontjes, WhatsApp-berichten en formulieren samen, niet alleen bezoekers.",
    'Zoekgedrag van Nederlandse huiseigenaren — "elektricien Utrecht", "stroomstoring spoed", "groepenkast vervangen kosten" — en waarom ze op het ene resultaat klikken en niet op het andere.',
    "Gebruiksvriendelijkheidscontrole — veelvoorkomende punten waarop onduidelijke informatie of moeilijk vindbare contactmogelijkheden het voor bezoekers lastiger kunnen maken om actie te ondernemen.",
  ];

  return (
    <section id="intro" className="scroll-mt-24">
      <p className="mt-19 w-full font-poppins text-[19px] leading-[31px] text-[#1F2937]">
        Een homepage die aanvragen oplevert, doet zeven specifieke dingen. Mis
        er één, en het aantal aanvragen daalt. Mis er drie, en de site wordt een
        digitaal visitekaartje waar niemand iets mee doet.
      </p>
      <p className="mt-5 w-full font-poppins text-[16.5px] leading-[26px] text-[#4B5563]">
        Deze gids is opgebouwd uit patronen op werkende Nederlandse
        elektriciensites — waaronder de sites die wij bij Growth Rocket bouwen.
        Elk element krijgt een goed voorbeeld, een fout voorbeeld en de
        Nederlandse marktcontext die algemene webdesign-adviezen overslaan.
      </p>
      <div className="mt-[34px] w-full rounded-2xl border border-[#EEF0F4] bg-[#FBFBFD] p-6 sm:p-8">
        <p className="font-poppins text-[11px] font-semibold uppercase tracking-[1.1px] text-[#9AA1AC]">
          Hoe deze zeven zijn gekozen
        </p>
        <div className="mt-[18px] flex flex-col gap-4">
          {sources.map((source, index) => (
            <div key={source} className="flex items-start gap-3.5">
              <span className="flex size-[26px] flex-none items-center justify-center rounded-lg border border-[#E4DCFB] bg-[#F4F1FE] font-poppins text-[13px] font-bold text-[#6F4CF5]">
                {index + 1}
              </span>
              <p
                className="mt-px font-poppins text-[15.5px] leading-6 text-[#4B5563]"
                dangerouslySetInnerHTML={{ __html: source }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExampleHeader({ good }: { good: boolean }) {
  return (
    <div
      className={`mb-3.5 flex items-center gap-2 font-poppins text-xs font-bold uppercase tracking-[.7px] ${good ? "text-[#16875A]" : "text-[#D64545]"}`}
    >
      {good ? (
        <Check className="size-[17px]" strokeWidth={2.4} />
      ) : (
        <X className="size-[17px]" strokeWidth={2.4} />
      )}
      {good ? "Levert aanvragen op" : "Levert niets op"}
    </div>
  );
}

function ExampleBox({
  good,
  children,
}: {
  good: boolean;
  children: ReactNode;
}) {
  return (
    <div
      className={`rounded-[14px] border p-[18px] ${good ? "border-[#C6EBD8] bg-[#ECFAF3]" : "border-[#F3D2D2] bg-[#FDF2F2]"}`}
    >
      <ExampleHeader good={good} />
      {children}
    </div>
  );
}

function Tips({
  items,
  label = "Voor de Nederlandse markt",
  dotColor,
}: {
  items: Tip[];
  label?: string;
  dotColor: string;
}) {
  return (
    <div className="mt-[22px]">
      <p
        className="font-poppins text-[11px] font-semibold uppercase tracking-[1px] text-[#9AA1AC]"
        dangerouslySetInnerHTML={{ __html: label }}
      />
      <div className="mt-3.5 grid max-w-[720px] gap-x-9 gap-y-2.5 min-[1081px]:grid-cols-2">
        {items.map((tip) => (
          <div key={tip.lead} className="flex items-start gap-2.5">
            <span
              className="mt-px flex-none"
              style={{ color: tip.dotColor ?? dotColor }}
            >
              ·
            </span>
            <span className="font-poppins text-[15px] leading-[23px] text-[#4B5563]">
              <strong className="font-[650] text-[#1F2937]">{tip.lead}</strong>{" "}
              {tip.rest}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function TechnicalNote({ children }: { children: ReactNode }) {
  return (
    <div className="mt-5 flex max-w-[720px] items-start gap-3 rounded-[10px] border border-[#EEF0F4] bg-[#FBFBFD] px-4 py-3.5">
      <Code className="mt-0.5 size-[17px] flex-none text-[#9AA1AC]" />
      <p className="font-poppins text-sm leading-[22px] text-[#6B7280]">
        <strong className="font-[650] text-[#1F2937]">
          Technische notitie.{" "}
        </strong>
        {children}
      </p>
    </div>
  );
}

function ElementCard({ item }: { item: Element }) {
  const cat = categoryStyles[item.category];
  return (
    <div className="rounded-[18px] border border-[#EEF0F4] bg-white p-[34px_36px] transition-colors hover:border-[#C9CDD6]">
      <div className="flex flex-col items-start gap-3 sm:flex-row sm:gap-6">
        <span
          className="font-poppins text-[46px] font-light leading-[0.82] text-[#C5B7FB] [font-variant-numeric:tabular-nums] sm:text-[60px]"
          dangerouslySetInnerHTML={{ __html: item.number }}
        />
        <div>
          <div className="flex flex-wrap items-center gap-2.5">
            <span
              className={`rounded-full border px-2.5 py-1 font-poppins text-[11px] font-bold uppercase tracking-[.9px] ${cat.pill}`}
            >
              {item.category}
            </span>
            <span className="font-poppins text-xs font-semibold text-[#9AA1AC]">
              Beantwoordt: &quot;
              <span dangerouslySetInnerHTML={{ __html: item.answers }} />
              &quot;
            </span>
          </div>
          <h3
            className="mt-3.5 font-poppins text-[23px] font-[650] leading-[1.3] tracking-[-.3px] text-[#1F2937]"
            dangerouslySetInnerHTML={{ __html: item.title }}
          />
        </div>
      </div>
      <p className="mt-5 max-w-[700px] font-poppins text-[16.5px] leading-[26px] text-[#4B5563]">
        <strong className="font-[650] text-[#1F2937]">Wat het is. </strong>
        <span dangerouslySetInnerHTML={{ __html: item.what }} />
      </p>
      <p className="mt-3.5 max-w-[700px] font-poppins text-[16.5px] leading-[26px] text-[#4B5563]">
        <strong className="font-[650] text-[#1F2937]">
          Waarom het aanvragen oplevert.{" "}
        </strong>
        <span dangerouslySetInnerHTML={{ __html: item.why }} />
      </p>
      <div className="mt-6 grid gap-4 min-[1081px]:grid-cols-2">
        <ExampleBox good>{item.good}</ExampleBox>
        <ExampleBox good={false}>{item.bad}</ExampleBox>
      </div>
      <Tips items={item.tips} label={item.specificsLabel} dotColor={cat.dot} />
      <TechnicalNote>{item.note}</TechnicalNote>
    </div>
  );
}

export function FrameworkSection() {
  const cards = [
    {
      key: "Duidelijkheid" as const,
      question: "Doe jij wat ik nodig heb, waar ik woon?",
      elementLabels: ["Element 1", "Element 5"],
      Icon: Search,
      accent: "#6F4CF5",
      cardBorder: "#C5B7FB",
      pillBorder: "#E4DCFB",
      wash: "#F4F1FE",
    },
    {
      key: "Vertrouwen" as const,
      question: "Kan ik jou mijn huis toevertrouwen?",
      elementLabels: ["Element 3", "Element 6"],
      Icon: ShieldCheck,
      accent: "#16875A",
      cardBorder: "#C6EBD8",
      pillBorder: "#C6EBD8",
      wash: "#ECFAF3",
    },
    {
      key: "Actie" as const,
      question: "Hoe bereik ik je nú, op de manier die ik wil?",
      elementLabels: ["Element 2", "Element 4", "Element 7"],
      Icon: Zap,
      accent: "#C77A0A",
      cardBorder: "#F3E0BC",
      pillBorder: "#F3E0BC",
      wash: "#FDF6EA",
    },
  ];
  return (
    <section id="framework" className="scroll-mt-24">
      <p className="font-poppins w-full text-[13px] font-semibold uppercase tracking-[1.1px] text-[var(--color-violet-42)]">
        Het raamwerk
      </p>
      <h2 className="mt-3 w-full font-poppins text-[26px] font-bold leading-[1.25] text-[var(--color-haiti)] sm:text-[30px]">
        De drie vragen die elke bezoeker in vijftien seconden stelt
      </h2>
      <p className="mt-4 w-full font-poppins text-[17px] leading-7 text-[#6B7280]">
        Een bezoeker voert razendsnel drie controles uit in zijn hoofd. Elk van
        de zeven elementen bestaat om één van die vragen binnen seconden te
        beantwoorden. Ontwerpkeuzes die deze drie vragen niet dienen, zijn
        versiering.
      </p>
      <div className="mt-8 grid gap-4 min-[1081px]:grid-cols-3">
        {cards.map(
          ({
            key,
            question,
            elementLabels,
            Icon,
            accent,
            cardBorder,
            pillBorder,
            wash,
          }) => (
            <div
              key={key}
              className="rounded-2xl border p-7"
              style={{ borderColor: cardBorder, background: wash }}
            >
              <div className="flex items-center gap-2">
                <Icon className="size-5" style={{ color: accent }} />
                <p
                  className="font-poppins text-xs font-bold uppercase tracking-[.8px]"
                  style={{ color: accent }}
                >
                  {key}
                </p>
              </div>
              <p className="mt-4 font-poppins text-lg font-bold leading-7 text-[#1F2937]">
                &quot;
                <span dangerouslySetInnerHTML={{ __html: question }} />
                &quot;
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-1.5">
                {elementLabels.map((label) => (
                  <span
                    key={label}
                    className="rounded-md border bg-white px-2.5 py-1 font-poppins text-[11px] font-bold"
                    style={{ borderColor: pillBorder, color: accent }}
                    dangerouslySetInnerHTML={{ __html: label }}
                  />
                ))}
              </div>
            </div>
          ),
        )}
      </div>
    </section>
  );
}

export function ElementsSection() {
  return (
    <section id="elements" className="scroll-mt-24">
      {/* Preview Image */}
      <div className="mt-14 overflow-hidden rounded-[24px] border border-[#E5E7EB] shadow-lg">
        <img
          src="/blogimages/en/7-elements-of-a-high-converting-electrician-homepage/blog_5-1.webp"
          alt="Example electrician homepage"
        />
      </div>
      <h2 className="mt-22 w-full font-poppins text-[26px] font-bold leading-[1.25] text-[var(--color-violet-42)] sm:text-[30px]">
        De 7 elementen
      </h2>
      <p className="mt-5  font-poppins text-[16.5px] leading-[26px] text-[#4B5563]">
        Elk element krijgt een goed en een fout voorbeeld — zoals ze op een
        echte homepage verschijnen — plus de tips die specifiek voor de
        Nederlandse markt gelden.
      </p>
      <div className="mt-10 space-y-7">
        {elements.slice(0, 4).map((item) => (
          <ElementCard key={item.number} item={item} />
        ))}
        <div className="rounded-xl border border-[#E4DCFB] bg-[#F4F1FE] px-6 py-4.5">
          <p className="font-poppins text-base leading-6 text-[#1F2937]">
            Daarmee zijn &quot;doe jij wat ik nodig heb&quot; en &quot;kan ik je
            vertrouwen&quot; beantwoord. Blijft over:{" "}
            <strong className="font-[650]">
              hoe de bezoeker in actie komt.
            </strong>
          </p>
        </div>
        {elements.slice(4).map((item) => (
          <ElementCard key={item.number} item={item} />
        ))}
      </div>
    </section>
  );
}

const comparisonRows: ComparisonRow[] = [
  {
    label: "Kopregel",
    values: [
      <span key="kopregel-high">
        <Flag>Erkende</Flag> elektricien + plaats + top-3 diensten + reactietijd
      </span>,
      '"Welkom op onze website — uw partner in totaaloplossingen"',
    ],
  },
  {
    label: "Belknop",
    values: [
      "Meescrollend, aanklikbaar, tel-link, met openingstijden",
      "Grijs nummer in de voettekst, niet aanklikbaar",
    ],
  },
  {
    label: "Vertrouwenssignalen",
    values: [
      "KVK, Techniek Nederland, NEN 1010, live Google-reviewaantal",
      'Geen, of generieke "award"-plaatjes',
    ],
  },
  {
    label: "Spoedvermelding",
    values: [
      "Gekleurde banner, concrete reactietijd, werkgebied, 24/7-status",
      "Geen vermelding, of weggestopt op een subpagina",
    ],
  },
  {
    label: "Diensten",
    values: [
      "6–8 kaarten in klantentaal, elk met eigen dienstpagina",
      '"Alle elektrotechnische werkzaamheden" in één alinea',
    ],
  },
  {
    label: "Foto's",
    values: [
      "Echte eigenaar + bus + voor-en-na-klussen + voornamen",
      "Stockfoto's of AI-beelden",
    ],
  },
  {
    label: "Contactformulier",
    values: [
      "4 velden, WhatsApp-knop, 2-uursbelofte, postcode i.p.v. adres",
      "10+ velden, volledig adres, geen WhatsApp, geen reactietijd",
    ],
    emphasize: true,
  },
];

export function ComparisonSection() {
  return (
    <section id="comparison" className="scroll-mt-24">
      <h2 className="mt-20 w-full font-poppins text-[26px] font-bold leading-[1.25] text-[var(--color-violet-42)] sm:text-[30px]">
        Naast elkaar: wat wél en wat niet werkt
      </h2>
      <p className="mt-4 font-poppins text-[16px] leading-[26px] text-[#4B5563]">
        Dezelfde zeven elementen, in één oogopslag — de homepage die aanvragen
        oplevert tegenover de homepage die dat niet doet.
      </p>
      <CostComparisonTable
        labelColumnWidth="auto"
        labelColumnHeader="Element"
        wrapCells
        columns={[
          {
            label: (
              <>
                <Check className="size-[15px]" strokeWidth={2.6} />
                Levert aanvragen op
              </>
            ),
            tone: "good",
            width: "1fr",
          },
          {
            label: (
              <>
                <X className="size-[15px]" strokeWidth={2.6} />
                Levert geen aanvragen op
              </>
            ),
            tone: "bad",
            width: "1fr",
          },
        ]}
        rows={comparisonRows}
      />
    </section>
  );
}

export function RebuildPatternsSection() {
  const cards = [
    {
      emoji: "💬",
      tag: "Grootste sprong",
      title: "Voeg een zichtbare WhatsApp-knop toe",
      body: "Vangt de bezoekers op die nooit zouden bellen of een formulier invullen, maar wél een berichtje tikken.",
      bg: "#E7FBF0",
      border: "#C6EBD8",
    },
    {
      emoji: "📷",
      tag: "Meeste vertrouwen",
      title: "Vervang stockfoto's door echte teamfoto's",
      body: "Tilt de inzendingen op zonder verdere wijzigingen, omdat het vertrouwen over de hele pagina stijgt.",
      bg: "#F4F1FE",
      border: "#E4DCFB",
    },
    {
      emoji: "✂️",
      tag: "Makkelijkste",
      title: "Breng het formulier terug naar vier velden",
      body: "Van negen of meer velden naar vier — meestal de makkelijkste ingreep, en een van de betrouwbaarste.",
      bg: "#FDF6EA",
      border: "#F3E0BC",
    },
  ];
  return (
    <section id="patterns" className="scroll-mt-24">
      <h2 className="mt-20 w-full font-poppins text-[26px] font-bold leading-[1.25] text-[var(--color-violet-42)] sm:text-[30px]">
        De drie ingrepen die bij een herbouw het vaakst het verschil maken
      </h2>
      <p className="mt-4 font-poppins text-[16px] leading-[26px] text-[#4B5563]">
        Als Nederlandse elektriciens hun homepage opnieuw opzetten en het aantal
        aanvragen merkbaar stijgt, staan vrijwel altijd deze drie op de lijst.
        Kun je deze week maar drie dingen veranderen — begin hier.
      </p>
      <div className="mt-8 grid gap-4 min-[1081px]:grid-cols-3">
        {cards.map((card) => (
          <div
            key={card.title}
            className="rounded-2xl border border-[#EEF0F4] bg-white p-6"
          >
            <div className="flex items-center justify-between">
              <span
                className="flex size-[38px] items-center justify-center rounded-[10px] border text-lg"
                style={{ background: card.bg, borderColor: card.border }}
                dangerouslySetInnerHTML={{ __html: card.emoji }}
              />
              <span
                className="font-poppins text-[11px] font-bold uppercase tracking-[.7px] text-[#9AA1AC]"
                dangerouslySetInnerHTML={{ __html: card.tag }}
              />
            </div>
            <h3
              className="mt-4 font-poppins text-lg font-[650] leading-[1.3] tracking-[-0.2px] text-[#1F2937]"
              dangerouslySetInnerHTML={{ __html: card.title }}
            />
            <p
              className="mt-2.5 font-poppins text-[14.5px] leading-[22px] text-[#6B7280]"
              dangerouslySetInnerHTML={{ __html: card.body }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export function GoogleBusinessSection() {
  const items = [
    "Echte foto's — dezelfde als op de homepage; consistentie telt",
    "Kloppende openingstijden, inclusief spoedtijden",
    "Werkgebied ingesteld op stad plus omliggende regio",
    "Een dienstenlijst die overeenkomt met de homepage",
    "Minimaal 30 echte reviews, actief gevraagd aan klanten",
    "Regelmatige berichten — zelfs één per maand tilt de vindbaarheid op",
  ];
  return (
    <section id="google" className="scroll-mt-24">
      <div className="mt-24 rounded-[20px] border border-[#EEF0F4] bg-[#FBFBFD] p-7 sm:p-11">
        <div className="flex items-center gap-3">
          <span className="font-poppins text-[40px] font-light leading-[0.8] text-[#C5B7FB] sm:text-[44px]">
            +1
          </span>
          <div>
            <p className="font-poppins text-[11px] font-semibold uppercase tracking-[1.1px] text-[#9AA1AC]">
              Het element dat niet in de lijst staat
            </p>
            <h2 className="mt-1.5 font-poppins text-2xl font-bold leading-[1.25] tracking-[-0.3px] text-[var(--color-haiti)] sm:text-[26px]">
              Je Google Bedrijfsprofiel
            </h2>
          </div>
        </div>
        <p className="mt-5 max-w-[700px] font-poppins text-base leading-[27px] text-[#4B5563] sm:text-[17px]">
          Strikt genomen geen homepage-element — maar het staat in de
          zoekresultaten náást je homepage en bepaalt of iemand die ooit
          bereikt. Een homepage met alle zeven elementen en een dood profiel
          verliest het van een homepage met vijf elementen en een actief
          profiel.
        </p>
        <div className="mt-6 grid max-w-[760px] gap-x-10 gap-y-3 min-[1081px]:grid-cols-2">
          {items.map((item) => (
            <div key={item} className="flex items-start gap-3">
              <Check
                className="mt-0.5 size-[18px] flex-none text-[#6F4CF5]"
                strokeWidth={2.2}
              />
              <span
                className="font-poppins text-[15.5px] leading-[23px] text-[#1F2937]"
                dangerouslySetInnerHTML={{ __html: item }}
              />
            </div>
          ))}
        </div>
        <p className="mt-6 max-w-[700px] font-poppins text-[15.5px] leading-6 text-[#6B7280]">
          Je homepage en je Google Bedrijfsprofiel zijn samen één ingang voor de
          klant, geen twee losse projecten — de reden waarom Growth Rocket het
          profiel samen met de website inricht in plaats van als apart traject.
        </p>
      </div>
    </section>
  );
}

export function FaqAndCta({ faq }: { faq: BlogFaqItem[] }) {
  return (
    <>
      <section id="faq" className="scroll-mt-24">
        <h2 className="mt-20 w-full font-poppins text-[26px] font-bold leading-[1.25] text-[var(--color-violet-42)] sm:text-[30px]">
          Veelgestelde vragen
        </h2>
        <BlogFAQ items={faq} />
      </section>
      <section id="final-word" className="scroll-mt-24">
        <h2 className="mt-20 w-full font-poppins text-[26px] font-bold leading-[1.25] text-[var(--color-violet-42)] sm:text-[30px]">
          Tot slot
        </h2>
        <p className="mt-6 font-poppins text-[19px] leading-[31px] text-[#1F2937]">
          Een homepage die aanvragen oplevert, draait niet om ontwerpvernuft of
          een websitebudget met zes cijfers. Hij draait om het beantwoorden van
          drie onbewuste bezoekersvragen in de eerste vijftien seconden: doen ze
          wat ik nodig heb, waar ik woon? Kan ik ze vertrouwen? Hoe bereik ik ze
          nú?
        </p>
        <p className="mt-5 font-poppins text-[16px] leading-[26px] text-[#4B5563]">
          De zeven elementen bestaan om die drie vragen snel te beantwoorden, in
          de Nederlandse context waarin jouw klanten zoeken. Slaat je huidige
          homepage er twee of drie over, dan is het toevoegen meestal een dag
          werk met meetbaar resultaat — geen complete herbouw.
        </p>
      </section>
      <BlogCtaSection
        heading="Liever een elektricienwebsite met alle zeven elementen, gebouwd en beheerd voor je?"
        body="In het Nederlands, met werkende WhatsApp, echte foto's, KVK en Techniek Nederland in de vertrouwensstrook — en elke aanvraag op één plek in plaats van verspreid over e-mail, telefoon en notitieblok."
        features={[
          "Alle zeven elementen, standaard ingebouwd",
          "Meescrollende bel- en WhatsApp-knoppen",
          "Vertrouwensstrook met KVK en certificeringen",
          "Elke aanvraag op één plek in de Growth Rocket Hub",
        ]}
        ctaLabel="Bekijk hoe het werkt"
      />
    </>
  );
}

export function MoreForElectriciansSection() {
  return (
    <section id="more" className="scroll-mt-24">
      <h2 className="mt-20 font-poppins text-[26px] font-bold leading-[1.25] text-[var(--color-violet-42)] sm:text-[30px]">
        Meer voor elektriciens
      </h2>
      <p className="mt-3.5 max-w-[720px] font-poppins text-[16.5px] leading-[26px] text-[#6B7280]">
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
