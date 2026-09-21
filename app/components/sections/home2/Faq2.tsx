// "use client";
// import { useState } from "react";
// import { Mail, Plus } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";
// import Reveal from "../../Reveal";
// import Button from "../../ui/Button";
// import EyebrowLabel from "../../ui/EyebrowLabel";
// import { useLanguage } from "../../../i18n/LanguageProvider";
// import { localizedHref } from "../../../i18n/locale-href";
// import type { Translation } from "../../../i18n/config";

// const ITEMS: { q: Translation; a: Translation }[] = [
//   {
//     q: {
//       en: "Is Growth Rocket only for startups?",
//       nl: "Is Growth Rocket alleen voor starters?",
//     },
//     a: {
//       en: "No. Growth Rocket is for entrepreneurs just starting out and for existing small businesses that want to look more professional online and simplify their requests, clients and admin.",
//       nl: "Nee. Growth Rocket is er voor startende ondernemers én voor bestaande kleine bedrijven die professioneler online willen staan en hun aanvragen, klanten en administratie eenvoudiger willen regelen.",
//     },
//   },
//   {
//     q: {
//       en: "Is my website really built for me?",
//       nl: "Wordt mijn website echt voor mij gemaakt?",
//     },
//     a: {
//       en: "Yes. Growth Rocket is not a do-it-yourself website builder. We build your website for you and keep it up to date.",
//       nl: "Ja. Growth Rocket is geen doe-het-zelf websitebouwer. Wij maken je website voor je en houden hem bij.",
//     },
//   },
//   {
//     q: {
//       en: "Can Growth Rocket replace my existing website?",
//       nl: "Kan Growth Rocket mijn bestaande website vervangen?",
//     },
//     a: {
//       en: "It can. We'll look at your current website together and carry the content over to your new Growth Rocket website.",
//       nl: "Dat kan. We bekijken samen je huidige website en nemen de inhoud mee naar je nieuwe Growth Rocket website. [Proces nog aan te vullen met de daadwerkelijke werkwijze.]",
//     },
//   },
//   {
//     q: {
//       en: "Can I use my existing domain name?",
//       nl: "Kan ik mijn bestaande domeinnaam gebruiken?",
//     },
//     a: {
//       en: "Yes, your existing domain name can come with you.",
//       nl: "Ja, je bestaande domeinnaam kan mee. [Domeinproces nog aan te vullen.]",
//     },
//   },
//   {
//     q: {
//       en: "Are hosting and maintenance included?",
//       nl: "Zijn hosting en onderhoud inbegrepen?",
//     },
//     a: {
//       en: "Yes. Hosting, SSL, maintenance, updates and technical support are all included in your subscription.",
//       nl: "Ja. Hosting, SSL, onderhoud, updates en technische ondersteuning zitten bij je abonnement in.",
//     },
//   },
//   {
//     q: {
//       en: "Can customers book an appointment through my website?",
//       nl: "Kunnen klanten via mijn website een afspraak maken?",
//     },
//     a: {
//       en: "Yes. Customers can send a request or book an appointment directly; everything lands in your Growth Rocket Hub.",
//       nl: "Ja. Klanten kunnen een aanvraag doen of direct een afspraak inplannen; alles komt binnen in je Growth Rocket Hub.",
//     },
//   },
//   {
//     q: {
//       en: "Can I manage my clients in Growth Rocket?",
//       nl: "Kan ik mijn klanten in Growth Rocket beheren?",
//     },
//     a: {
//       en: "Yes. You keep your client details, contacts and leads organized in one place.",
//       nl: "Ja. Je houdt je klantgegevens, contacten en leads overzichtelijk bij op één plek.",
//     },
//   },
//   {
//     q: {
//       en: "Can I create quotes and send invoices?",
//       nl: "Kan ik offertes maken en facturen versturen?",
//     },
//     a: {
//       en: "Yes. You create quotes and send invoices from the same client details, without a separate program.",
//       nl: "Ja. Je maakt offertes en verstuurt facturen vanuit dezelfde klantgegevens, zonder los programma.",
//     },
//   },
//   {
//     q: { en: "What does Growth Rocket cost?", nl: "Wat kost Growth Rocket?" },
//     a: {
//       en: "Growth Rocket starts from €69 per month. Our pricing page shows exactly what's included.",
//       nl: "Growth Rocket start vanaf €69 per maand. Op de prijzenpagina zie je precies wat er inbegrepen is.",
//     },
//   },
//   {
//     q: { en: "How quickly can I get started?", nl: "Hoe snel kan ik starten?" },
//     a: {
//       en: "Get in touch and we'll walk you through the actual turnaround time for your business.",
//       nl: "[Doorlooptijd nog aan te vullen met de werkelijke opleveringstermijn.]",
//     },
//   },
//   {
//     q: { en: "Do I get support?", nl: "Krijg ik ondersteuning?" },
//     a: {
//       en: "Yes. You can reach out to us with any questions about your website and your Growth Rocket Hub.",
//       nl: "Ja. Je kunt bij ons terecht met vragen over je website en je Growth Rocket Hub. [Supportkanalen en tijden nog aan te vullen.]",
//     },
//   },
// ];

// function AccordionItem({
//   item,
//   isOpen,
//   onToggle,
// }: {
//   item: { q: Translation; a: Translation };
//   isOpen: boolean;
//   onToggle: () => void;
// }) {
//   const { t } = useLanguage();
//   return (
//     <div className="border-b border-[var(--color-slate-200)] px-1">
//       <button
//         type="button"
//         onClick={onToggle}
//         aria-expanded={isOpen}
//         className="flex w-full cursor-pointer items-center justify-between gap-4 py-5 text-left"
//       >
//         <span className="font-poppins text-[16px] font-semibold leading-[24px] text-[var(--color-haiti)]">
//           {t(item.q)}
//         </span>
//         <span
//           className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--color-kournikova)] text-[var(--color-haiti)] transition-transform duration-300"
//           style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
//         >
//           <Plus size={18} strokeWidth={2.5} />
//         </span>
//       </button>
//       <AnimatePresence initial={false}>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: "auto" }}
//             exit={{ opacity: 0, height: 0 }}
//             transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
//             className="overflow-hidden"
//           >
//             <p className="m-0 max-w-[620px] font-poppins pb-5 text-left font-sans text-[14px] leading-[22.4px] text-[var(--color-dolphin)]">
//               {t(item.a)}
//             </p>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

// export default function Faq2() {
//   const { t, locale } = useLanguage();
//   const [open, setOpen] = useState(0);

//   return (
//     <section
//       id="faq"
//       className="relative rounded-[28px] bg-white fix-wide py-[50px] lg:py-28 grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 lg:gap-14"
//     >
//       <div className="lg:sticky lg:top-30 flex flex-col gap-4 max-w-90">
//         <EyebrowLabel align="left">FAQ</EyebrowLabel>
//         <h2 className="m-0 font-poppins font-bold text-[clamp(26px,2.8vw,36px)] leading-[1.15] tracking-[-1px] text-[var(--color-haiti)]">
//           {t({ en: "Frequently asked questions", nl: "Veelgestelde vragen" })}
//         </h2>
//         <p className="m-0 text-[15px] leading-[24px] font-poppins text-[var(--color-dolphin)]">
//           {t({
//             en: "Don't see your question? We're happy to talk through what Growth Rocket can do for your business.",
//             nl: "Staat je vraag er niet bij? We denken graag even mee over wat Growth Rocket voor jouw bedrijf kan betekenen.",
//           })}
//         </p>
//         <Button
//           href={localizedHref("/contact", locale)}
//           variant="secondary"
//           size="md"
//           className="self-start mt-2 flex! flex-row! text-[13px]! gap-1 font-poppins! text-[#5b21b6]! py-[10px]! px-[18px]!  "
//         >
//           <span className="flex items-center">
//             <Mail size={16} className="mr-1" />
//             {t({ en: "Get in touch", nl: "Neem contact op" })}
//           </span>
//         </Button>
//       </div>

//       <div className="flex flex-col">
//         {ITEMS.map((item, i) => (
//           <Reveal key={item.q.en} delay={Math.min(i * 0.03, 0.2)}>
//             <AccordionItem
//               item={item}
//               isOpen={open === i}
//               onToggle={() => setOpen(i)}
//             />
//           </Reveal>
//         ))}
//       </div>
//     </section>
//   );
// }

//

//

"use client";
import { useState } from "react";
import { Mail, Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "../../Reveal";
import Button from "../../ui/Button";
import EyebrowLabel from "../../ui/EyebrowLabel";
import { useLanguage } from "../../../i18n/LanguageProvider";
import { localizedHref } from "../../../i18n/locale-href";
import type { Translation } from "../../../i18n/config";

const ITEMS: { q: Translation; a: Translation }[] = [
  {
    q: {
      en: "Is Growth Rocket only for startups?",
      nl: "Is Growth Rocket alleen voor starters?",
    },
    a: {
      en: "No. Growth Rocket is for entrepreneurs just starting out and for existing small businesses that want to look more professional online and simplify their requests, clients and admin.",
      nl: "Nee. Growth Rocket is er voor startende ondernemers én voor bestaande kleine bedrijven die professioneler online willen staan en hun aanvragen, klanten en administratie eenvoudiger willen regelen.",
    },
  },
  {
    q: {
      en: "Is my website really built for me?",
      nl: "Wordt mijn website echt voor mij gemaakt?",
    },
    a: {
      en: "Yes. Growth Rocket is not a do-it-yourself website builder. We build your website for you and keep it up to date.",
      nl: "Ja. Growth Rocket is geen doe-het-zelf websitebouwer. Wij maken je website voor je en houden hem bij.",
    },
  },
  {
    q: {
      en: "Can Growth Rocket replace my existing website?",
      nl: "Kan Growth Rocket mijn bestaande website vervangen?",
    },
    a: {
      en: "It can. We'll look at your current website together and carry the content over to your new Growth Rocket website.",
      nl: "Dat kan. We bekijken samen je huidige website en nemen de inhoud mee naar je nieuwe Growth Rocket website. [Proces nog aan te vullen met de daadwerkelijke werkwijze.]",
    },
  },
  {
    q: {
      en: "Can I use my existing domain name?",
      nl: "Kan ik mijn bestaande domeinnaam gebruiken?",
    },
    a: {
      en: "Yes, your existing domain name can come with you.",
      nl: "Ja, je bestaande domeinnaam kan mee. [Domeinproces nog aan te vullen.]",
    },
  },
  {
    q: {
      en: "Are hosting and maintenance included?",
      nl: "Zijn hosting en onderhoud inbegrepen?",
    },
    a: {
      en: "Yes. Hosting, SSL, maintenance, updates and technical support are all included in your subscription.",
      nl: "Ja. Hosting, SSL, onderhoud, updates en technische ondersteuning zitten bij je abonnement in.",
    },
  },
  {
    q: {
      en: "Can customers book an appointment through my website?",
      nl: "Kunnen klanten via mijn website een afspraak maken?",
    },
    a: {
      en: "Yes. Customers can send a request or book an appointment directly; everything lands in your Growth Rocket Hub.",
      nl: "Ja. Klanten kunnen een aanvraag doen of direct een afspraak inplannen; alles komt binnen in je Growth Rocket Hub.",
    },
  },
  {
    q: {
      en: "Can I manage my clients in Growth Rocket?",
      nl: "Kan ik mijn klanten in Growth Rocket beheren?",
    },
    a: {
      en: "Yes. You keep your client details, contacts and leads organized in one place.",
      nl: "Ja. Je houdt je klantgegevens, contacten en leads overzichtelijk bij op één plek.",
    },
  },
  {
    q: {
      en: "Can I create quotes and send invoices?",
      nl: "Kan ik offertes maken en facturen versturen?",
    },
    a: {
      en: "Yes. You create quotes and send invoices from the same client details, without a separate program.",
      nl: "Ja. Je maakt offertes en verstuurt facturen vanuit dezelfde klantgegevens, zonder los programma.",
    },
  },
  {
    q: { en: "What does Growth Rocket cost?", nl: "Wat kost Growth Rocket?" },
    a: {
      en: "Growth Rocket starts from €69 per month. Our pricing page shows exactly what's included.",
      nl: "Growth Rocket start vanaf €69 per maand. Op de prijzenpagina zie je precies wat er inbegrepen is.",
    },
  },
  {
    q: { en: "How quickly can I get started?", nl: "Hoe snel kan ik starten?" },
    a: {
      en: "Get in touch and we'll walk you through the actual turnaround time for your business.",
      nl: "[Doorlooptijd nog aan te vullen met de werkelijke opleveringstermijn.]",
    },
  },
  {
    q: { en: "Do I get support?", nl: "Krijg ik ondersteuning?" },
    a: {
      en: "Yes. You can reach out to us with any questions about your website and your Growth Rocket Hub.",
      nl: "Ja. Je kunt bij ons terecht met vragen over je website en je Growth Rocket Hub. [Supportkanalen en tijden nog aan te vullen.]",
    },
  },
];

function AccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: { q: Translation; a: Translation };
  isOpen: boolean;
  onToggle: () => void;
}) {
  const { t } = useLanguage();
  return (
    <div className="border-b border-[var(--color-slate-200)] px-1">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full cursor-pointer items-center justify-between gap-4 py-5 text-left"
      >
        <span className="font-poppins text-[16px] font-semibold leading-[24px] text-[var(--color-haiti)]">
          {t(item.q)}
        </span>
        <span
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--color-kournikova)] text-[var(--color-haiti)] transition-transform duration-300"
          style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
        >
          <Plus size={18} strokeWidth={2.5} />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="m-0 max-w-[620px] font-poppins pb-5 text-left font-sans text-[14px] leading-[22.4px] text-[var(--color-dolphin)]">
              {t(item.a)}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Faq2() {
  const { t, locale } = useLanguage();
  // `null` = every item collapsed. It has to be a distinct value from any index
  // for the second click on an open item to have somewhere to go — with a plain
  // `number` the only reachable states are "some item is open", so a click on
  // the open one was a no-op and the fold could never be fully closed.
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      // items-start is what makes the sticky column work: a grid item stretches
      // to the full row height by default, leaving sticky nothing to travel in.
      className="relative rounded-[28px] bg-white fix-wide py-[50px] lg:py-28 grid grid-cols-1 lg:grid-cols-[1fr_1fr] items-start gap-10 lg:gap-14"
    >
      {/* top-[120px] clears the fixed navbar (76px) with breathing room. */}
      <div className="flex flex-col gap-4 max-w-90 self-start lg:sticky lg:top-[120px]">
        <EyebrowLabel align="left">FAQ</EyebrowLabel>
        <h2 className="m-0 font-poppins font-bold text-[clamp(26px,2.8vw,36px)] leading-[1.15] tracking-[-1px] text-[var(--color-haiti)]">
          {t({ en: "Frequently asked questions", nl: "Veelgestelde vragen" })}
        </h2>
        <p className="m-0 text-[15px] leading-[24px] font-poppins text-[var(--color-dolphin)]">
          {t({
            en: "Don't see your question? We're happy to talk through what Growth Rocket can do for your business.",
            nl: "Staat je vraag er niet bij? We denken graag even mee over wat Growth Rocket voor jouw bedrijf kan betekenen.",
          })}
        </p>
        <Button
          href={localizedHref("/contact", locale)}
          variant="secondary"
          size="md"
          className="self-start mt-2 flex! flex-row! text-[13px]! gap-1 font-poppins! text-[#5b21b6]! py-[10px]! px-[18px]!  "
        >
          <span className="flex items-center">
            <Mail size={16} className="mr-1" />
            {t({ en: "Get in touch", nl: "Neem contact op" })}
          </span>
        </Button>
      </div>

      <div className="flex flex-col">
        {ITEMS.map((item, i) => (
          <Reveal key={item.q.en} delay={Math.min(i * 0.03, 0.2)}>
            <AccordionItem
              item={item}
              isOpen={open === i}
              onToggle={() => setOpen((cur) => (cur === i ? null : i))}
            />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
