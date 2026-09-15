import type { BlogFaqItem } from "@/app/lib/blog-content-types";
import Flag from "@/components/blogs/mobile-website-for-electricians-nl/Flag";
import InlineLink from "@/components/blogs/mobile-website-for-electricians-nl/InlineLink";

const faq: BlogFaqItem[] = [
  {
    question: "Wat kost een mobielvriendelijke website voor een elektricien in Nederland?",
    answer:
      "De prijzen lopen sterk uiteen. Doe-het-zelf-sitebouwers zoals Siteklik beginnen rond de €10–€15 per maand, maar vragen jouw tijd en missen vaak lokale vindbaarheid. Bureaus rekenen €1.500 tot €5.000 vooraf plus maandelijkse kosten — voor de meeste kleine bedrijven te veel van het goede. Volledig ontzorgde diensten zitten ertussenin: één vaste prijs per jaar, met alles opgezet en onderhouden.",
    answerNode: (
      <>
        De prijzen lopen sterk uiteen. Doe-het-zelf-sitebouwers zoals Siteklik beginnen rond de{" "}
        <Flag>€10–€15 per maand</Flag>, maar vragen jouw tijd en missen vaak lokale vindbaarheid. Bureaus rekenen{" "}
        <Flag>€1.500 tot €5.000</Flag> vooraf plus maandelijkse kosten — voor de meeste kleine bedrijven te veel van
        het goede. Volledig ontzorgde diensten zitten ertussenin: één vaste prijs per jaar, met alles opgezet en
        onderhouden.
      </>
    ),
  },
  {
    question: "Heb ik een aparte mobiele site nodig?",
    answer:
      "Nee. Eén website die zich automatisch aanpast aan elk scherm — telefoon, tablet, computer. Aparte mobiele sites zijn verouderd, slechter voor je vindbaarheid en dubbel onderhoudswerk.",
  },
  {
    question: "Hoe lang duurt het om mijn huidige site mobielvriendelijk te maken?",
    answer:
      "Kleine ingrepen — een belknop, grotere letters, pop-ups verwijderen — kosten een paar uur. Een oude site volledig opnieuw opzetten duurt doorgaans ongeveer een week; Growth Rocket levert een nieuwe, mobielklare elektriciensite binnen 7 dagen online op.",
    answerNode: (
      <>
        Kleine ingrepen — een belknop, grotere letters, pop-ups verwijderen — kosten een paar uur. Een oude site
        volledig opnieuw opzetten duurt doorgaans ongeveer een week; Growth Rocket levert een nieuwe, mobielklare
        elektriciensite <InlineLink href="/blog/electrician-7-day-launch">binnen 7 dagen online</InlineLink> op.
      </>
    ),
  },
  {
    question: "Wat is het allerbelangrijkste mobiele onderdeel voor een elektricien?",
    answer:
      "Een zichtbare belknop in de kop. Niets anders komt in de buurt. De meeste spoedbezoekers lezen niet — ze tikken.",
  },
  {
    question: "Word ik met een betere mobiele site hoger gevonden op Google?",
    answer:
      "Ja. Google beoordeelt je site op de mobiele versie (“mobile-first indexering”). Een snelle, strakke mobiele site met een duidelijk werkgebied wordt in de lokale resultaten doorgaans beter gevonden dan een trage, desktopgerichte site.",
  },
  {
    question: "Helpt WhatsApp echt voor een elektriciensbedrijf?",
    answer:
      "Voor Nederlandse klanten wel. Niet-urgente aanvragen — een offerte voor een nieuwe groepenkast, een vraag over een laadpaal, foto's van het probleem — komen steeds vaker via WhatsApp binnen dan via telefoon of e-mail. Het verlaagt de drempel en levert jou voorgesorteerde aanvragen mét foto op.",
  },
];

export default faq;
