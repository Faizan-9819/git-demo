import type { BlogContent, BlogTocEntry } from "@/app/lib/blog-content-types";
import HeroSection from "@/components/blogs/electrician-website-cost/HeroSection";
import {
  DiyIcon,
  FreelancerIcon,
  DoneForYouIcon,
} from "@/components/blogs/electrician-website-cost/priceIcons";
import QuickAnswerSection from "@/components/blogs/electrician-website-cost/QuickAnswerSection";
import OptionSection from "@/components/blogs/electrician-website-cost/OptionSection";
import ComparisonSection from "@/components/blogs/electrician-website-cost/ComparisonSection";
import DecideSection from "@/components/blogs/electrician-website-cost/DecideSection";
import FaqSection from "@/components/blogs/electrician-website-cost/FaqSection";
import FinalThoughtSection from "@/components/blogs/electrician-website-cost/FinalThoughtSection";
import MoreForElectriciansSection from "@/components/blogs/electrician-website-cost/MoreForElectriciansSection";
import BlogImageBlock from "@/components/blogs/shared/BlogImageBlock";
import faq from "./faq";
import images from "@/content/blogs/electrician-website-cost-netherlands/images";

const NL_SLUG = "kosten-website-voor-elektricien-in-nederland";

const toc: BlogTocEntry[] = [
  { id: "quick-answer", label: "Het korte antwoord" },
  { id: "option-1", label: "Doe-het-zelf" },
  { id: "option-2", label: "Freelancer of bureau" },
  { id: "option-3", label: "Volledig ontzorgd" },
  { id: "comparison", label: "De drie modellen" },
  { id: "decide", label: "Beslissen in een minuut" },
  { id: "faq", label: "Veelgestelde vragen" },
  { id: "more", label: "Meer voor elektriciens" },
];

const blog: BlogContent = {
  slug: "electrician-website-cost-netherlands",
  localizedSlug: NL_SLUG,
  language: "nl",
  title: "Wat Kost Een Website Voor Een Elektricien In Nederland?",
  excerpt:
    "De ene aanbieder rekent €50 per maand. De andere vraagt €2.500 vooraf. Een derde biedt een jaarplan van minder dan €1.000 — hier lees je waarom, en wat elk model je echt oplevert.",
  heroImage: images.optionsIntro.src,
  author: { name: "Growth Rocket" },
  tags: ["Contractor Websites", "Business Growth"],
  category: "Contractor Websites",
  readingTime: "08 Mins",
  published: "2026-07-08",
  toc,
  faq,
  hero: {
    component: HeroSection,
    props: {
      eyebrowGuide: "Gids",
      eyebrowPill: "Gemaakt voor elektriciens",
      title: "Wat kost een website voor een elektricien in Nederland?",
      subtitle:
        "De ene aanbieder rekent €50 per maand. De andere vraagt €2.500 vooraf. Een derde biedt een jaarplan van minder dan €1.000. De verklaring is eenvoudig: je vergelijkt geen gelijke diensten.",
      ctaLabel: "Vergelijk de drie modellen",
      ctaHref: "#comparison",
      secondaryLabel: "Naar het korte antwoord",
      secondaryHref: "#quick-answer",
      metaDate: "8 juli 2026",
      metaReadTime: "8 min leestijd",
      priceEyebrow: "De drie prijsranges",
      priceItems: [
        { label: "Doe-het-zelf", price: "€10–€25 per maand", icon: DiyIcon },
        {
          label: "Freelancer of bureau",
          price: "€1.000–€3.000 vooraf",
          icon: FreelancerIcon,
        },
        {
          label: "Volledig ontzorgd",
          price: "€690 per jaar + €290 eenmalige onboarding, alles inbegrepen",
          icon: DoneForYouIcon,
        },
      ],
      priceFootnote:
        "De juiste keuze hangt af van je tijd, je handigheid en wat de website moet doen.",
    },
  },
  sections: [
    {
      component: QuickAnswerSection,
      props: {
        intro: [
          "Heb je een elektrotechnisch bedrijf en zoek je een website, dan lijken de prijzen alle kanten op te gaan. De ene aanbieder rekent €50 per maand. De andere vraagt €2.500 vooraf. Een derde biedt een jaarplan van minder dan €1.000.",
          "De verklaring is eenvoudig: je vergelijkt geen gelijke diensten.",
          "Sommige aanbieders geven je gereedschap en verwachten dat je alles zelf bouwt. Andere leveren een site op maat, maar laten hosting, updates en aanpassingen daarna aan jou over. En er is een nieuwere categorie: volledig ontzorgde diensten, waarbij de website, de updates en het dagelijkse beheer samenkomen in één vaste prijs per jaar.",
          "In deze gids zetten we de drie modellen naast elkaar, zodat je precies ziet waarvoor je betaalt — en waarvoor niet.",
        ],
        calloutText:
          "Voor de duidelijkheid vooraf: Growth Rocket valt in die derde categorie. Het is een compleet online business systeem voor Nederlandse vakmensen, waarin je website, je aanvragen en je boekingen op één plek samenkomen — zonder heen-en-weer met freelancers en zonder de uren die zelf bouwen vraagt. Herken je jezelf in die richting, dan zie je onderweg vanzelf waar het past. Zo niet: de vergelijking hieronder staat op zichzelf.",
        heading:
          "Het korte antwoord: wat een website voor een elektricien kost",
        leadIn: "Op de Nederlandse markt kom je drie modellen tegen:",
        models: [
          "Doe-het-zelf websitebouwers — ongeveer €10 tot €25 per maand (jij bouwt en beheert alles zelf)",
          "Freelancer of webbureau — €1.000 tot €3.000 vooraf, plus hosting en onderhoud",
          "Volledig ontzorgd jaarabonnement — €690 per jaar, plus €290 eenmalige onboarding",
        ],
        outro:
          "Elk model past bij een ander soort bedrijf. De juiste keuze hangt af van je tijd, je technische handigheid en wat de website voor jouw bedrijf moet doen.",
      },
    },
    {
      component: BlogImageBlock,
      props: {
        src: images.optionsIntro.src,
        alt: images.optionsIntro.alt,
      },
    },
    {
      component: OptionSection,
      props: {
        id: "option-1",
        option: {
          num: "01",
          eyebrow: "Optie 1",
          title: "Doe-het-zelf websitebouwers (€10–€25 per maand)",
          intro: [
            "Met een websitebouwer kies je een sjabloon, schuif je blokken op hun plek en zet je zelf een site online.",
          ],
          includedLabel: "Wat je krijgt",
          included: [
            "Een bibliotheek met sjablonen",
            "Hosting en SSL-beveiliging",
            "Een eenvoudig domein (vaak een subdomein of een goedkope .nl)",
            "Een editor waarin je zelf sleept en schuift",
          ],
          excludedLabel: "Wat er meestal buiten valt",
          excluded: [
            "Ontwerp op maat",
            "Teksten (die schrijf je zelf)",
            "Meer dan basale SEO",
            "Doorlopende updates en reparaties",
            "Functies die specifiek zijn voor elektriciens",
          ],
          pricingLabel: "Gangbare Nederlandse prijzen",
          pricingLines: [
            "Pakketten lopen van zo'n €10 per maand aan de onderkant tot ongeveer €25 per maand voor meer pagina's en functies. Opstartkosten zijn er meestal niet.",
          ],
          chooseLabel: "Kies dit als",
          chooseText:
            "Je handig genoeg bent met techniek, een paar vrije uren hebt om zelf te bouwen en vooral een online visitekaartje zoekt. De kosten zijn laag — de kwaliteit hangt volledig af van de tijd die jij erin stopt.",
          skipLabel: "Sla dit over als",
          skipText:
            "Je geen tijd hebt om een websitebouwer onder de knie te krijgen, of als de site aanvragen moet opleveren. De meeste doe-het-zelfsites eindigen als statische folder: goede teksten schrijven en lokale vindbaarheid opzetten kost werk waar de meeste elektriciens simpelweg geen tijd voor hebben.",
        },
        outro:
          "Het tegenovergestelde model bestaat ook — alles in één keer láten bouwen.",
      },
    },
    {
      component: OptionSection,
      props: {
        id: "option-2",
        option: {
          num: "02",
          eyebrow: "Optie 2",
          title: "Freelancer of webbureau (€1.000–€3.000 vooraf)",
          intro: [
            "Een freelance webdesigner of klein bureau bouwt een site op maat voor je. Dit is de traditionele route.",
          ],
          includedLabel: "Wat je krijgt",
          included: [
            "Ontwerp op maat",
            "Een vast aantal pagina's (meestal 5 tot 10)",
            "Basale SEO-inrichting",
            "Soms: hosting voor het eerste jaar",
          ],
          excludedLabel:
            "Wat er meestal buiten valt (of apart wordt gefactureerd)",
          excluded: [
            "Hosting na het eerste jaar (zo'n €10–€20 per maand)",
            "Domeinverlenging (ongeveer €10 per jaar)",
            "Tekstwijzigingen (€50–€100 per uur)",
            "Beveiligingsupdates",
            "Nieuwe foto's, pagina's of seizoensaanpassingen",
          ],
          pricingLabel: "Gangbare Nederlandse prijzen",
          pricingLines: [
            "Kleine freelance-bouw: €1.000–€1.800 vooraf",
            "Middelgroot bureau: €2.000–€3.500 vooraf",
            "Bureaus gericht op installateurs: pakketten in abonnementsvorm vanaf zo'n €29,95–€59,95 per maand",
          ],
          extraNote:
            "Het vooraf-model oogt op de lange termijn voordelig — tot je iets wilt veranderen. De meeste elektriciens raken hun site na de lancering niet meer aan, omdat elke aanpassing geld of een telefoontje kost.",
          chooseLabel: "Kies dit als",
          chooseText:
            "Je een volledig eigen uitstraling wilt, een duidelijk beeld voor ogen hebt en er geen moeite mee hebt om hosting en updates zelf te regelen. Het werkt goed voor middelgrote bedrijven met tien of meer medewerkers en eigen ondersteuning in huis.",
          skipLabel: "Sla dit over als",
          skipText:
            "Je alleen werkt of een klein team hebt. De prijs vooraf is maar een deel van het plaatje — aanpassingskosten stapelen zich op, en de meeste eenmanszaken werken hun site uiteindelijk nooit meer bij.",
        },
        midCta: {
          text: "Nog aan het afwegen? Growth Rocket regelt je website, hosting, domein en updates voor één vaste prijs per jaar — binnen 7 dagen online.",
          label: "Bekijk hoe het werkt →",
          href: "/nl/contact",
        },
        outro: "Blijft over: het model dat het werk uit jouw handen haalt.",
      },
    },
    {
      component: OptionSection,
      props: {
        id: "option-3",
        option: {
          num: "03",
          eyebrow: "Optie 3",
          title:
            "Volledig ontzorgd websitesysteem (€690 per jaar of €69 per maand)",
          intro: [
            "Dit model is gebouwd voor ondernemers die niet met websites bezig willen zijn — maar wel een website willen die zijn werk doet.",
            "In plaats van gereedschap of een eenmalige bouw wordt alles voor je geregeld, voor één vaste prijs per jaar. De website wordt gemaakt, beheerd en doorlopend bijgewerkt — zonder dat jij naar hosting, plugins of freelancers hoeft om te kijken. Volledig ontzorgd, in de letterlijke betekenis.",
            "Hier staat Growth Rocket. Niet alleen een website. Een compleet online business systeem voor dienstverlenende bedrijven — waarin je online aanwezigheid, je binnenkomende aanvragen en je boekingen met elkaar verbonden zijn en op één plek worden beheerd.",
          ],
          includedLabel: "Wat je krijgt",
          included: [
            "Een website die voor je wordt gebouwd en gelanceerd",
            "Hosting en SSL-beveiliging, volledig beheerd",
            "Domein geregeld en onderhouden",
            "Doorlopende aanpassingen aan tekst en inhoud (geen kosten per wijziging)",
            "Aanvraag- en boekingssysteem, ingebouwd in de website",
            "De Growth Rocket Hub: één centraal dashboard waarin je al je aanvragen en afspraken volgt en beheert",
          ],
          excludedLabel: "Wat er buiten valt",
          excluded: [
            "Advertentiebudget (bijvoorbeeld Google Ads)",
            "Geavanceerde of maatwerkkoppelingen buiten de standaardinrichting",
          ],
          pricingLabel: "Gangbare Growth Rocket-prijzen",
          pricingLines: [
            "Professional: €690 per jaar of €69 per maand",
            "Plus: op maat, afhankelijk van je wensen",
          ],
          pricingNote:
            "Omgerekend is dat €57,50 per maand, één vaste jaarprijs van €690 — zonder de uren en de leercurve van zelf bouwen.",
          chooseLabel: "Wanneer dit model past",
          chooseText:
            "Kies dit als je binnen ongeveer een week een professionele website online wilt, een voorspelbare jaarprijs prettig vindt en geen tijd wilt kwijtraken aan updates of technisch gedoe. Dit past doorgaans het best bij zelfstandige elektriciens, zzp'ers en kleine teams van twee tot tien mensen die iets betrouwbaars en onderhoudsarms zoeken.",
          skipLabel: "Wanneer niet",
          skipText:
            "Heb je een sterk eigen ontwerp nodig, of diepe koppelingen met specifieke softwaresystemen, dan kan dit model beperkt voelen naast een volledige maatwerkbouw.",
        },
        outro: `Toch past niet elke wens netjes in een standaardpakket — daarvoor bestaat de maatwerkroute. <a href="https://www.getgrowthrocket.com/" target="_blank" rel="noopener noreferrer" class="text-[#5B21B6] hover:underline">Growth Rocket</a> biedt ook aangepaste configuraties voor bedrijven die meer nodig hebben: extra functionaliteit, koppelingen of een eigen inrichting. De standaardpakketten dekken de meeste situaties; complexere wensen zijn bespreekbaar zonder dat je naar een compleet ander model hoeft.`,
      },
    },
    {
      component: ComparisonSection,
      props: {
        heading: "De drie modellen naast elkaar",
        columns: [
          "Doe-het-zelfbouwer",
          "Freelancer of bureau",
          "Volledig ontzorgd (Growth Rocket)",
        ],
        rows: [
          {
            label: "Kosten vooraf",
            values: ["€0", "€1.000–€3.000", "€290 eenmalig"],
          },
          {
            label: "Doorlopende kosten",
            values: [
              "€10–€25 per maand",
              "€10–€20 per maand hosting, plus losse updates",
              "€690 per jaar (€69 per maand)",
            ],
          },
          {
            label: "Wat je krijgt",
            values: [
              [
                "Sjablonen",
                "Hosting en SSL",
                "Je bouwt en schrijft alles zelf",
              ],
              [
                "Ontwerp en bouw op maat",
                "Hosting, updates en wijzigingen apart gefactureerd",
              ],
              [
                "Professionele website",
                "Hosting, SSL, back-up en updates",
                "Growth Rocket Hub (boekingen, aanvragen, contactbeheer)",
              ],
            ],
          },
          {
            label: "Jouw tijd",
            values: [
              "Hoog — jij bouwt zelf",
              "Gemiddeld vooraf, laag daarna",
              "Zeer laag",
            ],
          },
          { label: "Updates inbegrepen", values: ["Nee", "Nee", "Ja"] },
          {
            label: "Past bij",
            values: [
              "Zzp'ers die het zelf willen doen",
              "Middelgrote bedrijven met eigen ondersteuning",
              "Zelfstandige elektriciens en kleine teams",
            ],
          },
        ],
        yearOneEyebrow:
          "Wat de meeste elektriciens in jaar één werkelijk betalen",
        yearOneLead:
          "De “goedkoopste” optie blijft zelden de goedkoopste zodra je jouw eigen uren meetelt — en de updates die meestal worden uitgesteld of overgeslagen.",
        yearOneItems: [
          "Doe-het-zelfbouwer — zo'n €120–€300 per jaar, plus 15 tot 25 uur van je eigen tijd",
          "Freelancer of bureau — €1.000–€3.000 vooraf, plus zo'n €120–€240 per jaar aan hosting en betaalde updates → doorgaans €1.500–€2.500 of meer in jaar één",
          "Volledig ontzorgd systeem (Growth Rocket) — €690 per jaar, plus €290 eenmalige onboarding",
        ],
        yearOneEmphasis:
          "Het verschil zit niet alleen in het bedrag — het zit in hoe voorspelbaar dat bedrag blijft.",
        yearOneOutro:
          'Een <a href="https://www.squarespace.com/" target="_blank" rel="noopener noreferrer" class="text-[#5B21B6] hover:underline">doe-het-zelfbouwer</a> houdt de prijs laag, maar kost jouw tijd. Een freelancerbouw begint hoog en telt daarna kleine bedragen op. Een volledig ontzorgd systeem houdt de kosten vast, zodat je precies weet wat je betaalt. Geen verrassingen.',
      },
    },
    {
      component: DecideSection,
      props: {
        heading: "Beslissen in minder dan een minuut",
        items: [
          {
            condition: "Krap budget, handig met techniek en tijd over",
            answer: "Doe-het-zelfbouwer",
          },
          {
            condition: "Eigen ontwerp nodig en iemand in huis die het beheert",
            answer: "Freelancer of webbureau",
          },
          {
            condition:
              "Alles geregeld, een vaste jaarprijs en binnen ongeveer een week online",
            answer: "Volledig ontzorgd systeem (Growth Rocket)",
          },
        ],
        outro: "Blijven er nog vragen over? De meest gestelde staan hieronder.",
      },
    },
    {
      component: FaqSection,
      props: { heading: "Veelgestelde vragen", items: faq },
    },
    {
      component: FinalThoughtSection,
      props: {
        heading: "Tot slot",
        paragraphs: [
          "De goedkoopste website is niet de site met het laagste maandbedrag — het is de site die stilletjes zijn werk doet zonder jouw tijd, jouw aandacht of eindeloze nazorg te vragen.",
          "Voor de meeste elektriciens zit de echte kostenpost niet in geld. Hij zit in de uren die je niet hebt, de updates die er nooit van komen en de aanvragen die je misschien misloopt omdat de site niet goed staat.",
          "Daarom kiezen steeds meer kleine installatiebedrijven voor een vaste prijs en een volledig ontzorgd systeem — iets dat snel online staat, bijgewerkt blijft en op de achtergrond gewoon zijn werk doet terwijl jij op de klus staat. Kies het model dat past bij hoe jouw bedrijf werkelijk draait — niet bij wat op papier het goedkoopst lijkt.",
        ],
        ctaHeading:
          "Wil je na de lancering niet meer naar je website hoeven omkijken?",
        ctaBody:
          "Growth Rocket geeft je een professionele website met ingebouwd aanvraag- en boekingssysteem — opgezet, beheerd en draaiend voor één vaste prijs per jaar. Geen technisch gedoe, binnen 7 dagen online.",
        features: [
          "Professionele website, voor je gebouwd",
          "Aanvraag- en boekingssysteem inbegrepen",
          "Alles op één plek in de Growth Rocket Hub",
          "Hosting, updates en onderhoud geregeld",
          "Binnen 7 dagen online",
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
