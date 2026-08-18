// import type { Translation } from "../i18n/config";

// export type FaqAnswer = {
//   paragraphs: Translation[];
//   bullets?: Translation[];
// };

// export type FaqEntry = {
//   question: Translation;
//   answer: FaqAnswer;
// };

// export const FAQS: FaqEntry[] = [
//   {
//     question: {
//       en: "What is Growth Rocket?",
//       nl: "Wat is Growth Rocket?",
//     },
//     answer: {
//       paragraphs: [
//         {
//           en: "Growth Rocket is a simple, managed website solution for small businesses.",
//           nl: "Growth Rocket is een eenvoudige, beheerde website-oplossing voor kleine bedrijven.",
//         },
//         {
//           en: "We build your website, host it, and maintain it — and help you capture enquiries and bookings, all managed in one place.",
//           nl: "Wij maken je website, hosten deze en onderhouden alles — en helpen je om aanvragen en boekingen te ontvangen, allemaal beheerd op één plek.",
//         },
//       ],
//     },
//   },
//   {
//     question: {
//       en: "Do I really need a website if I already have a Google Business profile?",
//       nl: "Heb ik een website nodig als ik al een Google Bedrijfsprofiel heb?",
//     },
//     answer: {
//       paragraphs: [
//         {
//           en: "A Google Business profile helps people find you. A website helps them understand your services and contact you with confidence.",
//           nl: "Een Google Bedrijfsprofiel helpt mensen je te vinden. Een website helpt klanten je diensten te begrijpen en contact met je op te nemen met vertrouwen.",
//         },
//         {
//           en: "Both work best together — one drives visibility, the other builds trust and helps convert enquiries.",
//           nl: "Beide werken het beste samen — de één zorgt voor zichtbaarheid, de ander voor vertrouwen en aanvragen.",
//         },
//       ],
//     },
//   },
//   {
//     question: {
//       en: "What do I get with Growth Rocket?",
//       nl: "Wat krijg ik met Growth Rocket?",
//     },
//     answer: {
//       paragraphs: [{ en: "You get:", nl: "Je krijgt:" }],
//       bullets: [
//   { en: "A professional website", nl: "Een professionele website" },
//   { en: "Hosting and security", nl: "Hosting en beveiliging" },
//   { en: "Enquiry and booking setup", nl: "Een systeem voor aanvragen en boekingen" },
//   { en: "Ongoing updates and support", nl: "Doorlopende updates en ondersteuning" },
//   { en: "A simple system (Growth Rocket Hub) to manage everything in one place", nl: "Eén overzichtelijke plek om alles te beheren" },
// ],
//     },
//   },
//   {
//     question: {
//   en: "How long does it take to get my website live?",
//   nl: "Hoe snel staat mijn website online?",
// },
// answer: {
//   paragraphs: [
//     {
//       en: "Most websites are ready within a few days once we receive your details.",
//       nl: "De meeste websites staan binnen enkele dagen online zodra we je gegevens hebben ontvangen.",
//     },
//     {
//       en: "We handle everything, so you don’t need to manage the process yourself.",
//       nl: "Wij regelen alles, dus je hoeft zelf niets technisch te doen.",
//     },
//   ],
// },
//   },
//   {
//     question: {
//   en: "Do I need to manage the website myself?",
//   nl: "Moet ik mijn website zelf beheren?",
// },
// answer: {
//   paragraphs: [
//     { en: "No.", nl: "Nee." },
//     {
//       en: "We handle setup, updates, and maintenance for you. If you need changes, you can simply request them.",
//       nl: "Wij verzorgen de installatie, updates en het onderhoud. Als je iets wilt aanpassen, kun je dat eenvoudig aan ons doorgeven.",
//     },
//   ],
// },
//   },
//   {
//     question: {
//   en: "Will this help me get more customers?",
//   nl: "Helpt dit mij om meer klanten te krijgen?",
// },
// answer: {
//   paragraphs: [
//     {
//       en: "Growth Rocket makes it easier for customers to find your business, understand your services, and contact you.",
//       nl: "Growth Rocket maakt het makkelijker voor klanten om je bedrijf te vinden, je diensten te begrijpen en contact met je op te nemen.",
//     },
//     {
//       en: "The actual results depend on your location, demand, and how your business operates.",
//       nl: "Het resultaat hangt af van je locatie, vraag in de markt en hoe je bedrijf werkt.",
//     },
//   ],
// },
//   },
//   {
//     question: {
//       en: "How do enquiries and bookings work?",
//       nl: "How do enquiries and bookings work?",
//     },
//     answer: {
//       paragraphs: [
//         {
//           en: "Your website includes simple ways for customers to contact you — such as forms, calls, or messaging.",
//           nl: "Your website includes simple ways for customers to contact you — such as forms, calls, or messaging.",
//         },
//         {
//           en: "All enquiries are organised in one place so you can track and respond easily.",
//           nl: "All enquiries are organised in one place so you can track and respond easily.",
//         },
//       ],
//     },
//   },
//   {
//     question: {
//       en: "What is the Growth Rocket Hub?",
//       nl: "What is the Growth Rocket Hub?",
//     },
//     answer: {
//       paragraphs: [
//         {
//           en: "Growth Rocket Hub is your dashboard where you can view enquiries, manage your business details, and keep everything organised in one place.",
//           nl: "Growth Rocket Hub is your dashboard where you can view enquiries, manage your business details, and keep everything organised in one place.",
//         },
//       ],
//     },
//   },
//   {
//     question: {
//       en: "How much does it cost?",
//       nl: "How much does it cost?",
//     },
//     answer: {
//       paragraphs: [
//         {
//           en: "Growth Rocket is offered at a **fixed yearly price**.",
//           nl: "Growth Rocket is offered at a **fixed yearly price**.",
//         },
//         {
//           en: "This includes your website, hosting, and ongoing support — with no hidden charges.",
//           nl: "This includes your website, hosting, and ongoing support — with no hidden charges.",
//         },
//       ],
//     },
//   },
//   {
//     question: {
//       en: "Will my price change after the first year?",
//       nl: "Will my price change after the first year?",
//     },
//     answer: {
//       paragraphs: [
//         { en: "No.", nl: "No." },
//         {
//           en: "As long as you continue with the same plan, **your renewal price remains the same as what you paid initially**.",
//           nl: "As long as you continue with the same plan, **your renewal price remains the same as what you paid initially**.",
//         },
//       ],
//     },
//   },
//   {
//     question: {
//       en: "Is there a long-term contract?",
//       nl: "Is there a long-term contract?",
//     },
//     answer: {
//       paragraphs: [
//         {
//           en: "We offer yearly plans.",
//           nl: "We offer yearly plans.",
//         },
//         {
//           en: "If you’re looking for longer-term options, our team can guide you through **multi-year plans** as well.",
//           nl: "If you’re looking for longer-term options, our team can guide you through **multi-year plans** as well.",
//         },
//       ],
//     },
//   },
//   {
//     question: {
//       en: "Can I choose a design or template?",
//       nl: "Can I choose a design or template?",
//     },
//     answer: {
//       paragraphs: [
//         { en: "Yes.", nl: "Yes." },
//         {
//           en: "We have a range of professional layouts for different industries. Based on your business, we’ll suggest suitable options for you to choose from.",
//           nl: "We have a range of professional layouts for different industries. Based on your business, we’ll suggest suitable options for you to choose from.",
//         },
//       ],
//     },
//   },
//   {
//     question: {
//       en: "What if I don’t see a template for my industry?",
//       nl: "What if I don’t see a template for my industry?",
//     },
//     answer: {
//       paragraphs: [
//         {
//           en: "That’s not a problem.",
//           nl: "That’s not a problem.",
//         },
//         {
//           en: "We’ve worked across many industries and can adapt existing layouts to fit your business.",
//           nl: "We’ve worked across many industries and can adapt existing layouts to fit your business.",
//         },
//       ],
//     },
//   },
//   {
//     question: {
//       en: "Is there a refund policy?",
//       nl: "Is there a refund policy?",
//     },
//     answer: {
//       paragraphs: [
//         {
//           en: "Since the service is set up on a **yearly basis**, there are **no mid-term refunds**.",
//           nl: "Since the service is set up on a **yearly basis**, there are **no mid-term refunds**.",
//         },
//         {
//           en: "You can choose not to continue from the next year.",
//           nl: "You can choose not to continue from the next year.",
//         },
//       ],
//     },
//   },
//   {
//     question: {
//       en: "How do I get started?",
//       nl: "How do I get started?",
//     },
//     answer: {
//       paragraphs: [
//         {
//           en: "You can fill out a quick form or reach out on WhatsApp.",
//           nl: "You can fill out a quick form or reach out on WhatsApp.",
//         },
//         {
//           en: "We’ll guide you through the next steps and can even show you a preview of your website.",
//           nl: "We’ll guide you through the next steps and can even show you a preview of your website.",
//         },
//       ],
//     },
//   },
// ];

// function stripBold(text: string) {
//   return text.replace(/\*\*(.+?)\*\*/g, "$1");
// }

// export function answerToPlainText({ paragraphs, bullets }: FaqAnswer, locale: "en" | "nl" = "en") {
//   const lines = paragraphs.map(p => p[locale] ?? p.en);
//   if (bullets) lines.push(...bullets.map((b) => `- ${b[locale] ?? b.en}`));
//   return stripBold(lines.join(" "));
// }

// export function buildFaqJsonLd(entries: FaqEntry[] = FAQS, locale: "en" | "nl" = "en") {
//   return {
//     "@context": "https://schema.org",
//     "@type": "FAQPage",
//     mainEntity: entries.map((e) => ({
//       "@type": "Question",
//       name: e.question[locale] ?? e.question.en,
//       acceptedAnswer: {
//         "@type": "Answer",
//         text: answerToPlainText(e.answer, locale),
//       },
//     })),
//   };
// }


// ==========================================================
// ==========================================================
import type { Translation } from "../i18n/config";

export type FaqAnswer = {
  paragraphs: Translation[];
  bullets?: Translation[];
};

export type FaqEntry = {
  question: Translation;
  answer: FaqAnswer;
};

export const FAQS: FaqEntry[] = [
  {
    question: {
      en: "What is Growth Rocket for Electricians?",
      nl: "Wat is Growth Rocket voor elektriciens?",
    },
    answer: {
      paragraphs: [
        {
          en: "Growth Rocket is a managed website and enquiry system designed specifically for electricians. It helps you capture job requests, manage bookings, and present your business professionally online — without needing to manage the technical side yourself.",
          nl: "Growth Rocket is een beheerd website- en aanvraagsysteem speciaal ontwikkeld voor elektriciens. Het helpt je om klusaanvragen op te vangen, boekingen te beheren en je bedrijf professioneel online te presenteren — zonder dat je zelf de technische kant hoeft te regelen.",
        },
      ],
    },
  },
  {
    question: {
      en: "What is the Growth Rocket Hub?",
      nl: "Wat is de Growth Rocket Hub?",
    },
    answer: {
      paragraphs: [
        {
          en: "The Growth Rocket Hub is your simple business dashboard. It helps you view enquiries, manage bookings, track customer requests, and keep everything organised in one place — without switching between calls, WhatsApp messages, and emails.",
          nl: "De Growth Rocket Hub is jouw eenvoudige bedrijfsdashboard. Hier kun je aanvragen bekijken, boekingen beheren, klantverzoeken opvolgen en alles overzichtelijk op één plek houden — zonder voortdurend te schakelen tussen telefoontjes, WhatsApp-berichten en e-mails.",
        },
      ],
    },
  },
  {
    question: {
      en: "Do I really need a website if customers already call or WhatsApp me?",
      nl: "Heb ik echt een website nodig als klanten mij al bellen of WhatsAppen?",
    },
    answer: {
      paragraphs: [
        {
          en: "Yes. Most customers search online before they contact an electrician. A professional website helps people trust your business, understand your services, and contact you more easily — especially when you’re busy on-site and can’t answer immediately.",
          nl: "Ja. De meeste klanten zoeken eerst online voordat ze contact opnemen met een elektricien. Een professionele website helpt mensen jouw bedrijf te vertrouwen, je diensten beter te begrijpen en makkelijker contact op te nemen — vooral wanneer jij op locatie werkt en niet direct kunt opnemen.",
        },
      ],
    },
  },
  {
    question: {
      en: "Can customers still contact me through WhatsApp?",
      nl: "Kunnen klanten mij nog steeds via WhatsApp bereiken?",
    },
    answer: {
      paragraphs: [
        {
          en: "Absolutely. Your website can include WhatsApp contact options, enquiry forms, and booking requests — all designed to make communication easier and more organised.",
          nl: "Zeker. Je website kan WhatsApp-contact, aanvraagformulieren en boekingsmogelijkheden bevatten — allemaal ontworpen om communicatie makkelijker en overzichtelijker te maken.",
        },
      ],
    },
  },
  {
    question: {
      en: "What kind of electrical businesses is this built for?",
      nl: "Voor wat voor soort elektrotechnische bedrijven is dit bedoeld?",
    },
    answer: {
      paragraphs: [
        {
          en: "Growth Rocket works for independent electricians, emergency electricians, maintenance companies, installation specialists, and growing electrical service businesses.",
          nl: "Growth Rocket werkt voor zelfstandige elektriciens, storingsdiensten, onderhoudsbedrijven, installatiespecialisten en groeiende elektrotechnische bedrijven.",
        },
      ],
    },
  },
  {
    question: {
      en: "Can I show the areas where I work?",
      nl: "Kan ik laten zien in welke regio’s ik werk?",
    },
    answer: {
      paragraphs: [
        {
          en: "Yes. We can structure your website around your actual service areas so customers clearly understand where you operate.",
          nl: "Ja. We kunnen je website inrichten op basis van jouw werkgebieden, zodat klanten direct zien waar je actief bent.",
        },
      ],
    },
  },
  {
    question: {
      en: "What happens if I’m busy and miss a call?",
      nl: "Wat gebeurt er als ik bezig ben en een oproep mis?",
    },
    answer: {
      paragraphs: [
        {
          en: "Your website gives customers other ways to contact you — including enquiry forms and booking requests — so potential jobs are less likely to be lost.",
          nl: "Je website geeft klanten andere manieren om contact op te nemen — zoals aanvraagformulieren en boekingen — waardoor potentiële opdrachten minder snel verloren gaan.",
        },
      ],
    },
  },
  {
    question: {
      en: "How do bookings and enquiries work?",
      nl: "Hoe werken boekingen en aanvragen?",
    },
    answer: {
      paragraphs: [
        {
          en: "Customers can send job requests or request appointments through your website. All enquiries are organised in one place inside the Growth Rocket Hub.",
          nl: "Klanten kunnen via je website klusaanvragen sturen of afspraken aanvragen. Alle aanvragen worden overzichtelijk verzameld in de Growth Rocket Hub.",
        },
      ],
    },
  },
  {
    question: {
      en: "Do I need technical knowledge to use this?",
      nl: "Heb ik technische kennis nodig om dit te gebruiken?",
    },
    answer: {
      paragraphs: [
        {
          en: "No. We handle the setup, hosting, maintenance, and updates for you. You focus on your electrical work — we handle the system behind it.",
          nl: "Nee. Wij regelen de installatie, hosting, onderhoud en updates voor je. Jij focust op je elektrotechnische werk — wij regelen het systeem erachter.",
        },
      ],
    },
  },
  {
    question: {
      en: "How long does it take to get my electrician website live?",
      nl: "Hoe lang duurt het voordat mijn elektricien-website live staat?",
    },
    answer: {
      paragraphs: [
        {
          en: "Most electrician websites are ready within a few days after we receive your business details and content.",
          nl: "De meeste websites voor elektriciens staan binnen enkele dagen live nadat we je bedrijfsinformatie en content hebben ontvangen.",
        },
      ],
    },
  },
  {
    question: {
      en: "Can I update services or add new information later?",
      nl: "Kan ik later diensten aanpassen of nieuwe informatie toevoegen?",
    },
    answer: {
      paragraphs: [
        {
          en: "Yes. Simply send us the changes you want, and we’ll update the website for you.",
          nl: "Ja. Stuur ons gewoon de wijzigingen door, dan passen wij de website voor je aan.",
        },
      ],
    },
  },
  {
    question: {
      en: "How much does Growth Rocket cost?",
      nl: "Wat kost Growth Rocket?",
    },
    answer: {
      paragraphs: [
        {
          en: "Growth Rocket works with a fixed yearly price that includes your website, hosting, maintenance, and support — with no hidden charges.",
          nl: "Growth Rocket werkt met een vaste jaarlijkse prijs inclusief website, hosting, onderhoud en support — zonder verborgen kosten.",
        },
      ],
    },
  },
  {
    question: {
      en: "Is there a long-term contract?",
      nl: "Zit ik vast aan een langdurig contract?",
    },
    answer: {
      paragraphs: [
        {
          en: "We work with yearly plans. If you prefer longer-term options, our team can also guide you through multi-year plans.",
          nl: "We werken met jaarabonnementen. Als je liever een langere looptijd wilt, kunnen we je ook begeleiden bij meerjarige plannen.",
        },
      ],
    },
  },
  {
    question: {
      en: "What if I don’t have photos or content for my website yet?",
      nl: "Wat als ik nog geen foto’s of content voor mijn website heb?",
    },
    answer: {
      paragraphs: [
        {
          en: "No problem. We’ll guide you on what’s needed and help structure the website professionally with the information available.",
          nl: "Geen probleem. We begeleiden je bij wat nodig is en helpen de website professioneel op te bouwen met de informatie die beschikbaar is.",
        },
      ],
    },
  },
  {
    question: {
      en: "How do I get started?",
      nl: "Hoe kan ik starten?",
    },
    answer: {
      paragraphs: [
        {
          en: "You can contact us through WhatsApp or fill in a simple form. We’ll guide you through the next steps and help you get your system live quickly.",
          nl: "Je kunt contact opnemen via WhatsApp of een eenvoudig formulier invullen. Daarna begeleiden we je stap voor stap om je systeem snel live te krijgen.",
        },
      ],
    },
  },
];

export const HOME_FAQS: FaqEntry[] = [
  {
    question: {
      en: "What is Growth Rocket?",
      nl: "Wat is Growth Rocket?",
    },
    answer: {
      paragraphs: [
        {
          en: "Growth Rocket is a simple, managed website solution for small businesses.",
          nl: "Growth Rocket is een eenvoudige, beheerde website-oplossing voor kleine bedrijven.",
        },
        {
          en: "We build your website, host it, and maintain it — and help you capture enquiries and bookings, all managed in one place.",
          nl: "Wij maken je website, hosten deze en onderhouden alles — en helpen je om aanvragen en boekingen te ontvangen, allemaal beheerd op één plek.",
        },
      ],
    },
  },
  {
    question: {
      en: "What is the Growth Rocket Hub?",
      nl: "Wat is de Growth Rocket Hub?",
    },
    answer: {
      paragraphs: [
        {
          en: "The Growth Rocket Hub is your simple business dashboard. It helps you view enquiries, manage bookings, track customer requests, and keep everything organised in one place — without switching between calls, WhatsApp messages, and emails.",
          nl: "De Growth Rocket Hub is jouw eenvoudige bedrijfsdashboard. Hier kun je aanvragen bekijken, boekingen beheren, klantverzoeken opvolgen en alles overzichtelijk op één plek houden — zonder voortdurend te schakelen tussen telefoontjes, WhatsApp-berichten en e-mails.",
        },
      ],
    },
  },
  {
    question: {
      en: "Do I really need a website if I already have a Google Business profile?",
      nl: "Heb ik een website nodig als ik al een Google Bedrijfsprofiel heb?",
    },
    answer: {
      paragraphs: [
        {
          en: "A Google Business profile helps people find you. A website helps them understand your services and contact you with confidence.",
          nl: "Een Google Bedrijfsprofiel helpt mensen je te vinden. Een website helpt klanten je diensten te begrijpen en contact met je op te nemen met vertrouwen.",
        },
        {
          en: "Both work best together — one drives visibility, the other builds trust and helps convert enquiries.",
          nl: "Beide werken het beste samen — de één zorgt voor zichtbaarheid, de ander voor vertrouwen en aanvragen.",
        },
      ],
    },
  },
  {
    question: {
      en: "What do I get with Growth Rocket?",
      nl: "Wat krijg ik met Growth Rocket?",
    },
    answer: {
      paragraphs: [{ en: "You get:", nl: "Je krijgt:" }],
      bullets: [
        { en: "A professional website", nl: "Een professionele website" },
        { en: "Hosting and security", nl: "Hosting en beveiliging" },
        { en: "Enquiry and booking setup", nl: "Een systeem voor aanvragen en boekingen" },
        { en: "Ongoing updates and support", nl: "Doorlopende updates en ondersteuning" },
        { en: "A simple system (Growth Rocket Hub) to manage everything in one place", nl: "Eén overzichtelijke plek om alles te beheren" },
      ],
    },
  },
  {
    question: {
      en: "How long does it take to get my website live?",
      nl: "Hoe snel staat mijn website online?",
    },
    answer: {
      paragraphs: [
        {
          en: "Most websites are ready within a few days once we receive your details.",
          nl: "De meeste websites staan binnen enkele dagen online zodra we je gegevens hebben ontvangen.",
        },
        {
          en: "We handle everything, so you don't need to manage the process yourself.",
          nl: "Wij regelen alles, dus je hoeft zelf niets technisch te doen.",
        },
      ],
    },
  },
  {
    question: {
      en: "Do I need to manage the website myself?",
      nl: "Moet ik mijn website zelf beheren?",
    },
    answer: {
      paragraphs: [
        { en: "No.", nl: "Nee." },
        {
          en: "We handle setup, updates, and maintenance for you. If you need changes, you can simply request them.",
          nl: "Wij verzorgen de installatie, updates en het onderhoud. Als je iets wilt aanpassen, kun je dat eenvoudig aan ons doorgeven.",
        },
      ],
    },
  },
  {
    question: {
      en: "Will this help me get more customers?",
      nl: "Helpt dit mij om meer klanten te krijgen?",
    },
    answer: {
      paragraphs: [
        {
          en: "Growth Rocket makes it easier for customers to find your business, understand your services, and contact you.",
          nl: "Growth Rocket maakt het makkelijker voor klanten om je bedrijf te vinden, je diensten te begrijpen en contact met je op te nemen.",
        },
        {
          en: "The actual results depend on your location, demand, and how your business operates.",
          nl: "Het resultaat hangt af van je locatie, vraag in de markt en hoe je bedrijf werkt.",
        },
      ],
    },
  },
  {
    question: {
      en: "How do enquiries and bookings work?",
      nl: "Hoe werken aanvragen en boekingen?",
    },
    answer: {
      paragraphs: [
        {
          en: "Your website includes simple ways for customers to contact you — such as forms, calls, or messaging.",
          nl: "Je website bevat eenvoudige manieren waarop klanten contact met je kunnen opnemen — zoals formulieren, bellen of berichten sturen.",
        },
        {
          en: "All enquiries are organised in one place so you can track and respond easily.",
          nl: "Alle aanvragen worden overzichtelijk op één plek bewaard, zodat je ze makkelijk kunt bijhouden en beantwoorden.",
        },
      ],
    },
  },
  {
    question: {
      en: "How much does it cost?",
      nl: "Wat kost het?",
    },
    answer: {
      paragraphs: [
        {
          en: "Growth Rocket is offered at a **fixed yearly price**.",
          nl: "Growth Rocket wordt aangeboden voor een **vaste jaarlijkse prijs**.",
        },
        {
          en: "This includes your website, hosting, and ongoing support — with no hidden charges.",
          nl: "Dit omvat je website, hosting en doorlopende ondersteuning — zonder verborgen kosten.",
        },
      ],
    },
  },
  {
    question: {
      en: "Is there a long-term contract?",
      nl: "Zit ik vast aan een langdurig contract?",
    },
    answer: {
      paragraphs: [
        {
          en: "We offer yearly plans.",
          nl: "We werken met jaarabonnementen.",
        },
        {
          en: "If you're looking for longer-term options, our team can guide you through **multi-year plans** as well.",
          nl: "Als je liever een langere looptijd wilt, kunnen we je ook begeleiden bij **meerjarige plannen**.",
        },
      ],
    },
  },
  {
    question: {
      en: "How do I get started?",
      nl: "Hoe kan ik starten?",
    },
    answer: {
      paragraphs: [
        {
          en: "You can fill out a quick form or reach out on WhatsApp.",
          nl: "Je kunt een kort formulier invullen of contact opnemen via WhatsApp.",
        },
        {
          en: "We'll guide you through the next steps and can even show you a preview of your website.",
          nl: "We begeleiden je bij de volgende stappen en kunnen je zelfs een voorbeeld van je website laten zien.",
        },
      ],
    },
  },
];

function stripBold(text: string) {
  return text.replace(/\*\*(.+?)\*\*/g, "$1");
}

export function answerToPlainText(
  { paragraphs, bullets }: FaqAnswer,
  locale: "en" | "nl" = "en"
) {
  const lines = paragraphs.map((p) => p[locale] ?? p.en);
  if (bullets) lines.push(...bullets.map((b) => `- ${b[locale] ?? b.en}`));
  return stripBold(lines.join(" "));
}

export function buildFaqJsonLd(
  entries: FaqEntry[] = FAQS,
  locale: "en" | "nl" = "en"
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: entries.map((e) => ({
      "@type": "Question",
      name: e.question[locale] ?? e.question.en,
      acceptedAnswer: {
        "@type": "Answer",
        text: answerToPlainText(e.answer, locale),
      },
    })),
  };
}