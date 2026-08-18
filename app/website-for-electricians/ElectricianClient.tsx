"use client";

import Evolution from "../components/sections/Evolution";
import FeatureGrid from "../components/sections/FeatureGrid";
import Pricing from "../components/sections/Pricing";
// import TradesShowcase from "../components/sections/TradesShowcase";
import CTA from "../components/sections/CTA";
import FAQ from "../components/sections/FAQ";
// import FloatingBlobs from "../components/FloatingBlobs"; // disabled: causes scroll lag
import JsonLd from "../components/JsonLd";
import { buildFaqJsonLd } from "../lib/faqs";
import { buildPageSchema } from "../lib/seo";
import CTA2 from "../components/sections/CTA2";
import ElectricalUse from "../components/sections/ELectricalUse";
import EGridCards from "../components/sections/EGridCards";
import EBlogSec from "../components/sections/EBlogSec";
import type { BlogPost } from "../lib/blog-posts";
import ElectricHero from "../components/sections/ElectricHero";
import PillarSec from "./PillarSec";
import BrandProofSec from "./BrandProofSec";
import LocaleMeta from "../components/LocaleMeta";

type Props = {
  posts: BlogPost[];
};

const electricianEvolutionCards = {
  eyebrow: { en: "Why businesses switch", nl: "Waarom bedrijven overstappen" },
  mainTitle: [
    { en: "Stop running your business", nl: "Stop met je hele bedrijf runnen" },
    { en: "from your phone.", nl: "vanaf je telefoon." },
  ] as const,
  description: {
    en: "Most electricians lose jobs not because of skill but because of missed communication.",
    nl: "De meeste elektriciens verliezen opdrachten niet door gebrek aan vakmanschap, maar door gemiste communicatie.",
  },
  beforeCard: {
    label: { en: "Before", nl: "Voorheen" },
    title: {
      en: "Most electricians live with chaos:",
      nl: "Voor veel elektriciens ziet de dagelijkse chaos er zo uit:",
    },
    items: [
      {
        en: "Missed calls while on-site",
        nl: "Gemiste oproepen terwijl je op locatie werkt",
      },
      {
        en: "WhatsApp messages getting buried",
        nl: "WhatsApp-berichten die ondergesneeuwd raken",
      },
      {
        en: "No clear system to track enquiries",
        nl: "Geen duidelijk systeem om aanvragen bij te houden",
      },
      {
        en: "Endless back-and-forth to schedule jobs",
        nl: "Eindeloos heen-en-weer berichten om afspraken in te plannen",
      },
      {
        en: "Outdated or no website",
        nl: "Een verouderde website — of helemaal geen website",
      },
    ],
  },
  afterCard: {
    label: { en: "With Growth Rocket", nl: "Met Growth Rocket" },
    title: {
      en: "One organised system for everything",
      nl: "Één overzichtelijk systeem voor alles",
    },
    items: [
      {
        en: "Every enquiry captured with the right details",
        nl: "Elke aanvraag wordt netjes opgeslagen met de juiste gegevens",
      },
      {
        en: "Clear dashboard — no confusion",
        nl: "Een duidelijk dashboard zonder verwarring",
      },
      {
        en: "One dashboard — see exactly what needs action",
        nl: "Eén dashboard waarop je direct ziet wat aandacht nodig heeft",
      },
      {
        en: "Professional website, always maintained",
        nl: "Een professionele website die altijd onderhouden wordt",
      },
      {
        en: "You focus on work — we handle the system",
        nl: "Jij focust op het werk — wij regelen het systeem",
      },
    ],
  },
};

export default function ElectricianClient({ posts }: Props) {
  const openLeadForm = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-lead-form"));
    }
  };

  const openBookingForm = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-booking-form"));
    }
  };

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-white lg:pb-0">
      <JsonLd
        data={buildPageSchema(
          "/website-for-electricians",
          "Website for Electricians — Built & Managed for You | Growth Rocket",
          "A professional website for your electrical business. Built, hosted and managed for you — fixed yearly price, live in 7 days.",
        )}
      />
      <LocaleMeta
        title={{
          en: "Website for Electricians — Built & Managed for You | Growth Rocket",
          nl: "Website voor Elektriciens — All-in vanaf €690/jaar | Growth Rocket",
        }}
        description={{
          en: "A professional website for your electrical business. Built, hosted and managed for you — fixed yearly price, live in 7 days.",
          nl: "Een professionele website voor uw elektriciensbedrijf. Gebouwd, gehost en beheerd voor u — vaste jaarprijs, live in 7 dagen.",
        }}
      />
      <JsonLd data={buildFaqJsonLd()} />
      {/* <FloatingBlobs /> */}
      {/* <Hero onStartClick={openLeadForm} onBookClick={openBookingForm} /> */}
      <ElectricHero onStartClick={openLeadForm} onBookClick={openBookingForm} />
      <PillarSec />

      <Evolution {...electricianEvolutionCards} />
      <EGridCards />
      <ElectricalUse />
      <CTA2 />
      <FeatureGrid
        eyebrow={{ en: "What you get", nl: "Wat je krijgt" }}
        heading={{
          line1: {
            en: "Everything your electrical business needs.",
            nl: "Alles wat jouw elektrotechnisch bedrijf nodig heeft.",
          },
          line2: { en: "In one place.", nl: "Op één plek." },
        }}
        subheading={{
          en: "Nine core capabilities that come standard with every Growth Rocket plan.",
          nl: "Negen essentiële functies die standaard inbegrepen zijn bij elk Growth Rocket pakket.",
        }}
        features={[
          {
            icon: "/figma/feat-1.svg",
            title: { en: "Professional website", nl: "Professionele website" },
            desc: {
              en: "Designed, built, and deployed — a site that feels made for your business.",
              nl: "Ontworpen, gebouwd en live gezet als een website die echt past bij jouw bedrijf.",
            },
          },
          {
            icon: "/figma/feat-2.svg",
            title: { en: "Enquiry capture", nl: "Aanvraagregistratie" },
            desc: {
              en: "Capture the right details for every electrical job.",
              nl: "Verzamel direct de juiste gegevens voor elke elektrotechnische opdracht.",
            },
          },
          {
            icon: "/figma/feat-3.svg",
            title: { en: "Booking system", nl: "Boekingssysteem" },
            desc: {
              en: "Let customers pick a time — confirmed automatically, zero back-and-forth.",
              nl: "Laat klanten zelf een tijd kiezen met automatische bevestiging, zonder eindeloos heen-en-weer contact.",
            },
          },
          {
            icon: "/figma/feat-4.svg",
            title: { en: "WhatsApp connect", nl: "WhatsApp-koppeling" },
            desc: {
              en: "A one-tap chat button for urgent enquiries and quick communication.",
              nl: "Een directe chatknop voor spoedaanvragen en snelle communicatie.",
            },
          },
          {
            icon: "/figma/feat-5.svg",
            title: { en: "Growth Rocket Hub", nl: "Growth Rocket Hub" },
            desc: {
              en: "One dashboard to see every enquiry and booking at a glance.",
              nl: "Eén dashboard om alle aanvragen en boekingen in één oogopslag te zien.",
            },
          },
          {
            icon: "/figma/feat-6.svg",
            title: { en: "EU hosting + SSL", nl: "EU-hosting + SSL" },
            desc: {
              en: "Secure European hosting, GDPR-ready, fully managed.",
              nl: "Veilige Europese hosting, AVG-proof en volledig beheerd.",
            },
          },
          {
            icon: "/figma/feat-7.svg",
            title: { en: "Content updates", nl: "Contentupdates" },
            desc: {
              en: "Send us changes, we make them. No dashboard to learn, no wait.",
              nl: "Stuur je wijzigingen naar ons, wij regelen de rest. Geen ingewikkeld dashboard, geen wachttijden.",
            },
          },
          {
            icon: "/figma/feat-8.svg",
            title: { en: "Monthly maintenance", nl: "Maandelijks onderhoud" },
            desc: {
              en: "Updates, backups, security — handled for you every single month.",
              nl: "Updates, back-ups en beveiliging worden elke maand volledig voor je geregeld.",
            },
          },
          {
            icon: "/figma/feat-9.svg",
            title: { en: "Ticket support", nl: "Ticket support" },
            desc: {
              en: "Email and ticket support from people who understand your system.",
              nl: "E-mail- en ticketsupport van mensen die jouw systeem écht begrijpen.",
            },
          },
        ]}
      />
      <Pricing onStartClick={openLeadForm} />
      <BrandProofSec />

      <CTA onStartClick={openLeadForm} />
      <FAQ onBookClick={openBookingForm} />
      <EBlogSec posts={posts} />
    </main>
  );
}
