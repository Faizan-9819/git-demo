import type { BlogContent, BlogTocEntry } from "@/app/lib/blog-content-types";
import HeroSection from "@/components/blogs/electrician-website-checklist/HeroSection";
import WhySection from "@/components/blogs/electrician-website-checklist/WhySection";
import PagesSection from "@/components/blogs/electrician-website-checklist/PagesSection";
import SystemSection from "@/components/blogs/electrician-website-checklist/SystemSection";
import MidCtaSection from "@/components/blogs/electrician-website-checklist/MidCtaSection";
import FaqSection from "@/components/blogs/electrician-website-cost/FaqSection";
import MoreForElectriciansSection from "@/components/blogs/electrician-website-cost/MoreForElectriciansSection";
import faq from "./faq";
import images from "@/content/blogs/electrician-website-checklist/images";
import {
  TrustIcon,
  ServicesIcon,
  ContactIcon,
} from "@/components/blogs/electrician-website-checklist/whyIcons";

const NL_SLUG = "website-checklist-elektriciens";

const toc: BlogTocEntry[] = [
  { id: "why", label: "Waarom deze checklist" },
  { id: "pages", label: "De 10 pagina's" },
  { id: "system", label: "Alles geregeld in 7 dagen" },
  { id: "faq", label: "Veelgestelde vragen" },
  { id: "more", label: "Meer voor elektriciens" },
];

const blog: BlogContent = {
  slug: "electrician-website-checklist",
  localizedSlug: NL_SLUG,
  language: "nl",
  title:
    "De website-checklist voor elektriciens: 10 pagina's die niet mogen ontbreken",
  excerpt:
    "De meeste elektricienwebsites missen juist de pagina's waar klanten naar zoeken voordat ze bellen. Deze checklist behandelt de tien pagina's die je site nodig heeft — en de fout die je bij elke pagina vermijdt.",
  heroImage: images.pagesIntro.src,
  author: { name: "Growth Rocket" },
  tags: ["Contractor Websites", "Business Growth"],
  category: "Contractor Websites",
  readingTime: "07 Mins",
  published: "2026-07-08",
  toc,
  faq,
  hero: {
    component: HeroSection,
    props: {
      eyebrowGuide: "Checklist",
      eyebrowPill: "Gemaakt voor elektriciens",
      title:
        "De website-checklist voor elektriciens: 10 pagina's die niet mogen ontbreken",
      subtitle:
        "De meeste elektricienwebsites missen juist de pagina's waar klanten naar zoeken voordat ze bellen. Deze checklist behandelt de tien pagina's die je site nodig heeft — en de fout die je bij elke pagina vermijdt.",
      ctaLabel: "Download de complete checklist (PDF)",
      ctaHref:
        "https://growthrocket.eu/resources/website-checklist-elektriciens-pdf/",
      secondaryLabel: "Bekijk de 10 pagina's",
      secondaryHref: "#pages",
      metaDate: "8 juli 2026",
      metaReadTime: "7 min leestijd",
      previewEyebrow: "De 10 pagina's",
      previewItems: [
        { label: "Homepage", checked: true },
        { label: "Diensten", checked: true },
        { label: "Werkgebied", checked: true },
        { label: "Over ons", checked: false },
        { label: "Reviews", checked: false },
        { label: "Contact", checked: false },
        { label: "Offerte", checked: false },
        { label: "FAQ", checked: false },
        { label: "Spoed & storingen", checked: false },
        { label: "Vacatures", checked: false },
      ],
      previewFootnote:
        "3 van 10 aanwezig — zo scoort de gemiddelde elektriciensite",
    },
  },
  sections: [
    {
      component: WhySection,
      props: {
        isFirst: true,
        heading: "Waarom deze checklist ertoe doet",
        lead: "Een elektricienwebsite heeft één taak: een potentiële klant helpen beslissen om te bellen of een offerte aan te vragen. Ontbrekende pagina's zaaien twijfel. Dunne pagina's verspillen bezoekers. En een site die als folder is gebouwd, levert zelden werk op.",
        body: "De checklist hieronder is gebaseerd op waar Nederlandse huiseigenaren en bedrijven werkelijk op letten wanneer ze online een elektricien kiezen: geloofwaardigheid, een helder dienstenaanbod en een eenvoudige manier om contact op te nemen.",
        cards: [
          {
            title: "Geloofwaardigheid",
            body: "Bewijs dat je een echt, bevoegd bedrijf bent.",
            icon: TrustIcon,
          },
          {
            title: "Helder aanbod",
            body: "Diensten in de woorden van de klant.",
            icon: ServicesIcon,
          },
          {
            title: "Makkelijk contact",
            body: "Bellen, WhatsApp of een offerte — in één tik.",
            icon: ContactIcon,
          },
        ],
        outro:
          "Laten we bij het begin beginnen — de pagina die iedereen als eerste ziet.",
      },
    },
    {
      component: PagesSection,
      props: {
        heading: "De 10 onmisbare pagina's van een elektricienwebsite",
        lead: "Elke pagina hieronder krijgt een korte uitleg, een lijst met wat erop hoort en de veelgemaakte fout die je erbij vermijdt.",
        image: { src: images.pagesIntro.src, alt: images.pagesIntro.alt },
        transitionAfterIndex: 4,
        transitionText:
          "Daarmee staat het vertrouwen. Nu moet contact opnemen moeiteloos worden.",
        pages: [
          {
            num: "01",
            eyebrow: "Pagina 1",
            title: "Homepage",
            intro:
              "Binnen vijf seconden duidelijk maken wie je bent, wat je doet en in welk gebied je werkt.",
            includeLabel: "Wat erop hoort",
            include: [
              'Een heldere kopregel (bijvoorbeeld: "Erkend elektricien voor Amsterdam en omgeving")',
              "Een korte samenvatting van je belangrijkste diensten",
              "Een telefoonnummer en contactknop in de bovenste navigatie",
              "Twee of drie vertrouwenssignalen (jaren ervaring, certificeringen, aantal reviews)",
              "Eén duidelijke call-to-action (vraag een offerte aan, bel direct of maak een afspraak)",
            ],
            mistakeLabel: "Veelgemaakte fout",
            mistake:
              "Vage slogans in plaats van gewoon zeggen wat je doet en waar. Een bezoeker mag nooit hoeven scrollen om te ontdekken in welke regio je werkt.",
          },
          {
            num: "02",
            eyebrow: "Pagina 2",
            title: "Dienstenpagina",
            intro:
              "Al je diensten op een rij zetten, zodat de klant zijn probleem aan jouw werk kan koppelen.",
            includeLabel: "Wat erop hoort",
            include: [
              "Een volledige lijst van je diensten (installatie, bedrading vernieuwen, groepenkast vervangen, keuringen, verlichting, enzovoort)",
              "Een korte omschrijving per dienst",
              'Waar mogelijk een prijsindicatie (vanaf-prijzen, uurtarief of "offerte op aanvraag")',
              "Per dienst een knop om een offerte aan te vragen",
            ],
            mistakeLabel: "Veelgemaakte fout",
            mistake:
              "Eén lange lap tekst in plaats van een overzichtelijke lijst. Klanten scannen — ze lezen niet.",
          },
          {
            num: "03",
            eyebrow: "Pagina 3",
            title: "Werkgebied- of stadspagina's",
            intro:
              "Lokaal vindbaar worden en de klant laten zien dat je in zijn woonplaats werkt.",
            includeLabel: "Wat erop hoort",
            include: [
              "Een eigen pagina per stad of regio waar je werkt",
              'Een korte inleiding waarin de plaats wordt genoemd (bijvoorbeeld: "Elektricien in Utrecht")',
              "De diensten die je daar levert",
              "Lokale referenties of afgeronde projecten, als je die hebt",
            ],
            mistakeLabel: "Veelgemaakte fout",
            mistake:
              "Dezelfde tekst kopiëren naar elke stadspagina. Google ziet dat als dubbele content — en die wordt zelden gevonden.",
          },
          {
            num: "04",
            eyebrow: "Pagina 4",
            title: "Over-ons-pagina",
            intro:
              "Vertrouwen opbouwen. Klanten willen weten wie er straks bij hen over de vloer komt.",
            includeLabel: "Wat erop hoort",
            include: [
              "Het verhaal van je bedrijf en hoe lang je al bestaat",
              "Echte foto's van jou en je team (geen stockbeelden)",
              "Certificeringen, erkenningen en lidmaatschappen (bijvoorbeeld Techniek Nederland)",
              "Je KVK-nummer en btw-nummer, voor de geloofwaardigheid",
            ],
            mistakeLabel: "Veelgemaakte fout",
            mistake:
              "Schrijven in generieke marketingtaal. Een eenvoudige, eerlijke pagina werkt beter dan een gladde bedrijfstekst.",
          },
          {
            num: "05",
            eyebrow: "Pagina 5",
            title: "Reviewpagina",
            intro: "Echt bewijs laten zien dat klanten je werk vertrouwen.",
            includeLabel: "Wat erop hoort",
            include: [
              "Echte reviews van eerdere klanten",
              "Sterrenbeoordelingen, als je die op Google hebt",
              "Een mix van particuliere en zakelijke reviews, waar van toepassing",
              "Een link naar je Google Bedrijfsprofiel",
            ],
            mistakeLabel: "Veelgemaakte fout",
            mistake:
              "Verzonnen aanbevelingen zonder naam of woonplaats. Klanten prikken daar snel doorheen — en dan ben je het vertrouwen juist kwijt.",
          },
          {
            num: "06",
            eyebrow: "Pagina 6",
            title: "Contactpagina",
            intro:
              "Het een klant zo makkelijk mogelijk maken om je te bereiken.",
            includeLabel: "Wat erop hoort",
            include: [
              "Een telefoonnummer (klikbaar op mobiel)",
              "Een e-mailadres",
              "Een WhatsApp-knop (in Nederland een heel gebruikelijk klantkanaal)",
              "Een kort contactformulier",
              "Openingstijden",
              "Je adres of een kaart van je werkgebied",
            ],
            mistakeLabel: "Veelgemaakte fout",
            mistake:
              "De contactpagina verstoppen achter meerdere klikken, of alleen een formulier aanbieden. Een deel van je klanten wil gewoon meteen bellen.",
          },
          {
            num: "07",
            eyebrow: "Pagina 7",
            title: "Offertepagina",
            intro:
              "Gestructureerde informatie ophalen bij klanten die klaar zijn om ja te zeggen.",
            includeLabel: "Wat erop hoort",
            include: [
              "Een eenvoudig formulier met de kernvragen (soort klus, locatie, gewenste planning)",
              "De mogelijkheid om een foto van het probleem mee te sturen (bijvoorbeeld van de groepenkast)",
              "Een duidelijke vermelding van hoe snel je reageert",
              "Een bedankbericht na het versturen",
            ],
            mistakeLabel: "Veelgemaakte fout",
            mistake:
              "Te veel vragen stellen. Lange formulieren kosten aanvragen — vraag alleen wat je echt nodig hebt.",
          },
          {
            num: "08",
            eyebrow: "Pagina 8",
            title: "FAQ-pagina",
            intro:
              "De vragen beantwoorden waar klanten op zoeken vóórdat ze bellen.",
            includeLabel: "Wat erop hoort",
            include: [
              "8 tot 12 vragen over prijzen, doorlooptijd, garanties, certificeringen en veelvoorkomende klussen",
              "Korte, directe antwoorden van 2 tot 4 zinnen",
              "Links naar de bijbehorende dienstenpagina's",
            ],
            mistakeLabel: "Veelgemaakte fout",
            mistake:
              "Generieke vragen die niemand stelt. Gebruik de vragen die klanten je werkelijk aan de telefoon stellen.",
          },
          {
            num: "09",
            eyebrow: "Pagina 9",
            title: "Spoed- en storingspagina",
            intro:
              "De bezoekers opvangen met de hoogste urgentie — stroomuitval, een groepenkast die eruit klapt, haperende bedrading.",
            includeLabel: "Wat erop hoort",
            include: [
              "Een duidelijke vermelding dat je spoedklussen aanneemt",
              'Je reactietijd (bijvoorbeeld: "binnen 2 uur ter plaatse in de Randstad")',
              "Een prominent telefoonnummer en een WhatsApp-knop",
              "Een prijsindicatie voor spoedservice",
            ],
            mistakeLabel: "Veelgemaakte fout",
            mistake:
              "Deze pagina helemaal niet hebben. Zoekopdrachten bij storingen hebben van alle elektricien-zoekwoorden de hoogste koopintentie.",
          },
          {
            num: "10",
            eyebrow: "Pagina 10",
            title: "Vacature- of leerplekpagina",
            intro:
              "Nieuwe monteurs en leerlingen aantrekken — voor veel Nederlandse installatiebedrijven het grootste knelpunt.",
            includeLabel: "Wat erop hoort",
            include: [
              "Openstaande functies (monteurs, leerlingen, BBL-leerplekken)",
              "Een korte beschrijving van hoe het is om bij jou te werken",
              "Een lage drempel om te reageren (formulier, e-mail of WhatsApp)",
              "De arbeidsvoorwaarden en opleidingsmogelijkheden",
            ],
            mistakeLabel: "Veelgemaakte fout",
            mistake:
              "De vacaturepagina behandelen als sluitpost. In een krappe arbeidsmarkt kan deze pagina net zo waardevol zijn als je dienstenpagina.",
          },
        ],
        outro:
          "Tien pagina's, elk met eigen inhoud, eigen doel en eigen onderhoud. Dat roept een praktische vraag op: wie gaat dat allemaal bouwen en bijhouden?",
      },
    },
    {
      component: SystemSection,
      props: {
        heading: "Hoe Growth Rocket alle tien pagina's voor je regelt",
        paragraphs: [
          "Deze pagina's zelf opzetten kost weken. De meeste elektriciens hebben die tijd niet, en de meeste bureaus rekenen duizenden euro's voor een eenmalige bouw.",
          "Bij een Growth Rocket-website zitten alle tien de pagina's standaard in de opzet — een compleet online business systeem, gebouwd voor vakmensen. De inhoud wordt afgestemd op jouw bedrijf, je certificeringen en je werkgebied, en je staat binnen 7 dagen online. Het aanvraagformulier is direct verbonden met de Growth Rocket Hub, zodat elke aanvraag, offerteaanvraag en spoedmelding overzichtelijk op één plek binnenkomt.",
        ],
        nodeLabels: [
          "Je website (10 pagina's)",
          "Aanvraag of boeking",
          "Growth Rocket Hub",
        ],
        outro:
          "Updates worden daarna voor je geregeld — geen technisch gedoe. Eén ding regelt het systeem niet: de bewijslast. Echte reviews, echte foto's en echte projecten komen uit jouw praktijk — de website geeft ze alleen de plek die ze verdienen.",
      },
    },
    {
      component: MidCtaSection,
      props: {
        heading:
          "Liever een complete elektricienwebsite die voor je wordt gebouwd én beheerd?",
        body: "Bekijk hoe het 7-daagse proces werkt — van intake tot lancering, dag voor dag uitgelegd.",
        features: [
          "Alle 10 pagina's standaard in de opzet",
          "Teksten die voor je geschreven worden",
          "Aanvraagformulier verbonden met de Hub",
          "Binnen 7 dagen online",
          "Hosting, updates en onderhoud geregeld",
          "Eén vaste prijs per jaar, geen verrassingen",
        ],
        ctaLabel: "Bekijk hoe het werkt",
        ctaHref: "/nl/blog/11-elektricienwebsite-laten-maken",
      },
    },
    {
      component: FaqSection,
      props: { heading: "Veelgestelde vragen", items: faq },
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
