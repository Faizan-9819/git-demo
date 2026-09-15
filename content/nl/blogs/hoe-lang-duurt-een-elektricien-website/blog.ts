import type { BlogContent, BlogTocEntry } from "@/app/lib/blog-content-types";
import HeroSection from "@/components/blogs/electrician-website-build-timeline/HeroSection";
import SummaryCardsSection from "@/components/blogs/electrician-website-build-timeline/SummaryCardsSection";
import BeforeYouStartSection from "@/components/blogs/electrician-website-build-timeline/BeforeYouStartSection";
import SixPhasesSection from "@/components/blogs/electrician-website-build-timeline/SixPhasesSection";
import RoutesComparisonSection from "@/components/blogs/electrician-website-build-timeline/RoutesComparisonSection";
import WhySevenDaysSection from "@/components/blogs/electrician-website-build-timeline/WhySevenDaysSection";
import FinalWordSection from "@/components/blogs/electrician-website-build-timeline/FinalWordSection";
import FinalCtaSection from "@/components/blogs/electrician-website-build-timeline/FinalCtaSection";
import FaqSection from "@/components/blogs/electrician-website-cost/FaqSection";
import MoreForElectriciansSection from "@/components/blogs/electrician-website-cost/MoreForElectriciansSection";
import BlogImageBlock from "@/components/blogs/shared/BlogImageBlock";
import faq from "./faq";
import { getFeaturedImage } from "@/content/blogs/electrician-website-build-timeline/images";

const NL_SLUG = "hoe-lang-duurt-een-elektricien-website";

const toc: BlogTocEntry[] = [
  { id: "before-you-start", label: "Voor je begint" },
  { id: "six-phases", label: "De 6 fases" },
  { id: "routes-comparison", label: "Routes naast elkaar" },
  { id: "why-7-days", label: "Waarom 7 dagen kan" },
  { id: "faq", label: "Veelgestelde vragen" },
  { id: "more", label: "Meer voor elektriciens" },
];

const blog: BlogContent = {
  slug: "electrician-website-build-timeline",
  localizedSlug: NL_SLUG,
  language: "nl",
  title:
    "Hoe lang duurt het om een elektricien website te maken? Een realistische tijdlijn",
  excerpt:
    "Het eerlijke antwoord: tussen 7 dagen en 3 maanden. Wat het verschil maakt, is niet het bouwen zelf — het is welke route je kiest en waar die route vastloopt.",
  heroImage: getFeaturedImage().src,
  author: { name: "Growth Rocket" },
  tags: ["Contractor Websites", "Business Growth"],
  category: "Contractor Websites",
  readingTime: "09 Mins",
  published: "2026-07-16",
  toc,
  faq,
  hero: {
    component: HeroSection,
    props: {
      eyebrowGuide: "Gids",
      eyebrowPill: "Gemaakt voor elektriciens",
      title:
        "Hoe lang duurt het om een elektricien website te maken? Een realistische tijdlijn",
      subtitle:
        "Het eerlijke antwoord: tussen 7 dagen en 3 maanden. Wat het verschil maakt, is niet het bouwen zelf — het is welke route je kiest en waar die route vastloopt.",
      ctaLabel: "Vergelijk de routes",
      ctaHref: "#routes-comparison",
      secondaryLabel: "Naar de tijdlijn",
      secondaryHref: "#six-phases",
      metaDate: "16 juli 2026",
      metaReadTime: "9 min leestijd",
      panelEyebrow: "Tijd tot online — de drie routes",
      tracks: [
        { label: "Zelf bouwen", time: "3 wk – 3 mnd", widthPct: 100 },
        { label: "Freelancer", time: "4 – 8 weken", widthPct: 62 },
        {
          label: "Volledig ontzorgd",
          time: "7 – 10 dagen",
          widthPct: 13,
          emphasis: true,
        },
      ],
      axisStart: "start",
      axisMid: "1 mnd",
      axisEnd: "3 mnd",
      panelFootnote:
        "Zelfde site, drie tempo's. De duur hangt vooral af van wie de teksten, foto's en opzet oppakt.",
    },
  },
  afterHero: {
    component: SummaryCardsSection,
    props: {
      cards: [
        {
          label: "Zelf bouwen",
          value: "3 wk – 3 mnd",
          description:
            "Snel te starten, maar het afmaken naast de klussen is de echte bottleneck.",
        },
        {
          label: "Freelancer",
          value: "4 – 8 weken",
          description:
            "Maatwerk, maar de doorlooptijd hangt aan feedbackrondes en één agenda.",
        },
        {
          label: "Volledig ontzorgd",
          value: "7 – 10 dagen",
          description:
            "Beproefde structuur, opzet geregeld — jij levert foto's, diensten en akkoord aan.",
          emphasis: true,
        },
      ],
    },
  },
  sections: [
    {
      component: BeforeYouStartSection,
      props: {
        isFirst: true,
        heading: "Voor je begint: wat je nodig hebt",
        intro:
          "Welke route je ook kiest, dezelfde vijf dingen bepalen het tempo. Heb je ze klaarliggen, dan schuift elke route naar de snelle kant van de tijdlijn. Ontbreken ze, dan wachten alle routes op jou.",
        items: [
          "Je diensten en werkgebied — welke klussen je doet en in welke plaatsen",
          "Foto's van echt werk — groepenkasten, laadpalen, afgeronde klussen",
          "Je contactgegevens, openingstijden en KVK-nummer",
          "Een paar reviews om mee te starten, en je Google Bedrijfsprofiel",
          "Een domeinnaam — of het besluit welke je wilt registreren",
          "Tijd om te reageren — één ronde akkoord kan dagen schelen",
        ],
        outro:
          "Met die dingen bij de hand loopt elke website langs dezelfde zes fases. Hieronder zie je ze op een rij — en hoe lang elke fase per route duurt.",
      },
    },
    {
      component: BlogImageBlock,
      props: {
        src: getFeaturedImage().src,
        alt: getFeaturedImage().alt,
      },
    },
    {
      component: SixPhasesSection,
      props: {
        heading: "De 6 fases van een elektricienwebsite",
        intro:
          "Elke website — zelfgebouwd of uitbesteed — doorloopt dezelfde volgorde. De fases veranderen niet; alleen wie ze oppakt en hoe snel dat gaat.",
        phases: [
          {
            num: "01",
            flowLabel: "Voorbereiding",
            phaseLabel: "Fase 1",
            title: "Voorbereiding & intake",
            description:
              "Doelen bepalen, je diensten en werkgebied vaststellen en een paar voorbeeldsites verzamelen. De fase die het vaakst wordt overgeslagen — en dat kost later tijd.",
            diyLabel: "Zelf",
            diy: "2 – 7 dagen",
            freelancerLabel: "Freelancer",
            freelancer: "3 – 5 dagen",
            managedLabel: "Ontzorgd",
            managed: "1 dag",
            stallsLabel: "Waar het vastloopt",
            stalls:
              "Zelf beginnen zonder plan — je bouwt iets, twijfelt, en start halverwege opnieuw.",
          },
          {
            num: "02",
            flowLabel: "Teksten & foto's",
            phaseLabel: "Fase 2",
            title: "Teksten & foto's",
            description:
              "Paginateksten schrijven, projectfoto's kiezen en reviews verzamelen. Dit is bijna altijd de traagste fase, omdat het tussen echte klussen door moet gebeuren.",
            diyLabel: "Zelf",
            diy: "1 – 4 weken",
            freelancerLabel: "Freelancer",
            freelancer: "1 – 2 weken",
            managedLabel: "Ontzorgd",
            managed: "1 – 2 dagen",
            stallsLabel: "Waar het vastloopt",
            stalls:
              "Teksten schrijven blijft liggen. Bij een ontzorgde route lever jij ruw materiaal aan en schrijven zij het uit.",
          },
          {
            num: "03",
            flowLabel: "Ontwerp",
            phaseLabel: "Fase 3",
            title: "Ontwerp",
            description:
              "De opbouw, kleuren en indeling van de pagina's. Bij een ontzorgde dienst is dit grotendeels beslist: er ligt een beproefde structuur klaar.",
            diyLabel: "Zelf",
            diy: "3 – 10 dagen",
            freelancerLabel: "Freelancer",
            freelancer: "1 – 2 weken",
            managedLabel: "Ontzorgd",
            managed: "1 – 2 dagen",
            stallsLabel: "Waar het vastloopt",
            stalls:
              "Eindeloos schuiven met een sjabloon zonder tot een keuze te komen — het perfectionisme-gat.",
          },
          {
            num: "04",
            flowLabel: "Bouw",
            phaseLabel: "Fase 4",
            title: "Bouw",
            description:
              "Pagina's opbouwen, het aanvraag- of boekingsformulier koppelen en alles mobielvriendelijk maken. Hier zit het meeste zichtbare werk.",
            diyLabel: "Zelf",
            diy: "1 – 6 weken",
            freelancerLabel: "Freelancer",
            freelancer: "2 – 3 weken",
            managedLabel: "Ontzorgd",
            managed: "2 – 3 dagen",
            stallsLabel: "Waar het vastloopt",
            stalls:
              "Bij zelf bouwen: een haperende module of plugin die op zondagavond kapotgaat en je hele weekend opeet.",
          },
          {
            num: "05",
            flowLabel: "Nakijken",
            phaseLabel: "Fase 5",
            title: "Nakijken & correcties",
            description:
              "Alles controleren, links testen en teksten laten meelezen. Eén heldere feedbackronde houdt deze fase kort.",
            diyLabel: "Zelf",
            diy: "2 – 5 dagen",
            freelancerLabel: "Freelancer",
            freelancer: "± 1 week",
            managedLabel: "Ontzorgd",
            managed: "1 dag",
            stallsLabel: "Waar het vastloopt",
            stalls:
              "Bij een freelancer rekken feedbackrondes op door volle agenda's aan beide kanten.",
          },
          {
            num: "06",
            flowLabel: "Lancering",
            phaseLabel: "Fase 6",
            title: "Lancering",
            description:
              "Live zetten, je Google Bedrijfsprofiel koppelen en de eerste aanvragen meten. Dit is het moment dat de site echt aan het werk gaat.",
            diyLabel: "Zelf",
            diy: "1 – 3 dagen",
            freelancerLabel: "Freelancer",
            freelancer: "2 – 4 dagen",
            managedLabel: "Ontzorgd",
            managed: "1 dag",
            stallsLabel: "Waar het vastloopt",
            stalls:
              "Bij zelf bouwen blijven het Google Bedrijfsprofiel en de lokale vindbaarheid vaak ongedaan — dan staat de site online, maar vindt niemand hem.",
          },
        ],
        ctaText: "Benieuwd hoe zo'n ontzorgde bouw er stap voor stap uitziet?",
        ctaLabel: "Bekijk hoe het werkt →",
        ctaHref: "/nl/contact",
      },
    },
    {
      component: RoutesComparisonSection,
      props: {
        heading: "De routes naast elkaar",
        intro:
          "Alle zes fases op een rij, per route. De onderste regel is waar het om draait: de realistische totale doorlooptijd.",
        columns: ["Zelf bouwen", "Freelancer", "Volledig ontzorgd"],
        rows: [
          {
            label: "1. Voorbereiding",
            values: ["2 – 7 dagen", "3 – 5 dagen", "1 dag"],
          },
          {
            label: "2. Teksten & foto's",
            values: ["1 – 4 weken", "1 – 2 weken", "1 – 2 dagen"],
          },
          {
            label: "3. Ontwerp",
            values: ["3 – 10 dagen", "1 – 2 weken", "1 – 2 dagen"],
          },
          {
            label: "4. Bouw",
            values: ["1 – 6 weken", "2 – 3 weken", "2 – 3 dagen"],
          },
          {
            label: "5. Nakijken",
            values: ["2 – 5 dagen", "± 1 week", "1 dag"],
          },
          {
            label: "6. Lancering",
            values: ["1 – 3 dagen", "2 – 4 dagen", "1 dag"],
          },
        ],
        totalsLabel: "Totaal (realistisch)",
        totals: ["3 wk – 3 mnd", "4 – 8 weken", "7 – 10 dagen"],
        outro:
          "De ranges lopen niet netjes op tot het totaal: fases overlappen deels en de meeste vertraging zit in wachten, niet in werken. Daarom is het totaal een realistische inschatting, geen optelsom.",
      },
    },
    {
      component: WhySevenDaysSection,
      props: {
        heading: "Waarom 7 dagen kan — en waar Growth Rocket past",
        intro:
          "De tijdlijn hierboven roept één vraag op: hoe kan de ontzorgde route zo veel sneller? Niet door harder te werken, maar doordat het meeste al klaarstaat voordat jij begint.",
        readyEyebrow: "Wat vooraf al klaar is",
        readyItems: [
          "Een beproefde paginastructuur voor elektriciens",
          "Hosting en beveiliging, ingericht en getest",
          "Een aanvraag- en boekingssysteem dat al werkt",
          "Een opzet die op mobiel net zo goed werkt als op desktop",
          'Een SEO-basis rond "elektricien [plaats]" en je diensten',
          "De Growth Rocket Hub, waar aanvragen en boekingen samenkomen",
        ],
        mattersEyebrow: "Waarom dat voor jou telt",
        mattersItems: [
          "Je hoeft geen software of ontwerp te leren",
          "Geen keuzestress over sjablonen en instellingen",
          "De site staat online voordat de klus tussen je vingers wegglipt",
          "Je aanvragen en afspraken staan op één plek, niet in je inbox",
        ],
        needsYouEyebrow: "Wat nog steeds van jou nodig is",
        needsYouItems: [
          "Je diensten en werkgebied, in je eigen woorden",
          "Foto's van echt werk — geen stockbeelden",
          "Je contactgegevens, openingstijden en een paar reviews",
          "Eén ronde akkoord op de teksten voordat de site live gaat",
        ],
        needsYouOutro:
          "Lever je dat in één keer netjes aan, dan zitten die 7 dagen ruim. Blijft het liggen, dan schuift de datum op — bij elke route.",
        caveatHeading: "Wanneer 7 dagen niet werkt",
        caveatBody:
          "Soms mag het langer duren — en dat is prima. Reken op meer tijd als je volledig maatwerk wilt, als je diensten of merk nog niet vaststaan, als je nog geen foto's of teksten hebt liggen, of als er een webshop of complexe koppeling bij komt. In die gevallen is een freelancer of een uitgebreider traject vaak een betere match dan een strak weekplan.",
      },
    },
    {
      component: FaqSection,
      props: { heading: "Veelgestelde vragen", items: faq },
    },
    {
      component: FinalWordSection,
      props: {
        heading: "Tot slot",
        paragraphs: [
          "Er is geen vaste tijd waarin een elektricienwebsite af is. Er is alleen de tijd die past bij hoeveel je zelf wilt oppakken.",
          "Bouw je graag zelf en heb je de avonden ervoor over, dan is een paar weken tot een paar maanden realistisch — mits je het ook echt afmaakt. Wil je maatwerk en heb je iemand die het project aanstuurt, dan is een freelancer een goede keuze binnen 4 tot 8 weken. En heb je vooral geen tijd, dan brengt een ontzorgde route je binnen 7 tot 10 dagen online, met de aanvragen en boekingen er meteen bij.",
          "De snelste route is dus niet de beste — de beste is de route die je daadwerkelijk afrondt. Leg je materiaal klaar, kies eerlijk hoeveel je zelf wilt doen, en de tijdlijn volgt vanzelf. Het hangt van jou af.",
        ],
      },
    },
    {
      component: FinalCtaSection,
      props: {
        heading: "Liever binnen een week online, zonder gedoe?",
        body: "Website, aanvragen en boekingen op één plek, in 7 tot 10 dagen live. Bekijk hoe het proces werkt — van intake tot lancering.",
        features: [
          "Professionele website, voor je gebouwd",
          "Aanvraag- en boekingssysteem inbegrepen",
          "Alles op één plek in de Growth Rocket Hub",
          "Hosting, updates en onderhoud geregeld",
          "Google Bedrijfsprofiel en lokale vindbaarheid ingericht",
          "Eén vaste prijs per jaar, geen verrassingen",
        ],
        ctaLabel: "Bekijk hoe het werkt",
        ctaHref: "/nl/blog/11-elektricienwebsite-laten-maken",
      },
    },
    {
      component: MoreForElectriciansSection,
      props: {
        heading: "Meer voor elektriciens",
        intro:
          "Alles wat je helpt om online meer aanvragen binnen te halen — van kosten en keuzes tot de bouw en de losse pagina's.",
        toggleLabel: "Bekijk alle artikelen voor elektriciens",
        groups: [
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
        ],
      },
    },
  ],
};

export default blog;
