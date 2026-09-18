"use client";

import type { ReactNode } from "react";
import { Plus } from "lucide-react";
import ArrowIcon from "../../ui/ArrowIcon";
import { useLanguage } from "../../../i18n/LanguageProvider";
import type { Translation } from "../../../i18n/config";

const CARD_SHELL =
  "flex min-w-0 flex-col rounded-[13px] px-[18px] pt-6 text-white " +
  "min-[361px]:px-[23px] min-[361px]:pt-7 min-[761px]:px-[25px] min-[1101px]:px-[34px] min-[1101px]:pt-[35px]";

type FeatureItem = { label: Translation; icon: ReactNode };

/** Shared attributes of the feature-row icons, copied from the source markup. */
function FeatureIcon({ children }: { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.65}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-[23px] w-[23px]"
    >
      {children}
    </svg>
  );
}

/** The rotated card-header icon. Same SVG attributes, four size steps. */
function BigIcon({ children }: { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.65}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-6 w-6 min-[361px]:h-7 min-[361px]:w-7 min-[761px]:h-[29px] min-[761px]:w-[29px] min-[1101px]:h-8 min-[1101px]:w-8"
    >
      {children}
    </svg>
  );
}

const WEBSITE_FEATURES: FeatureItem[] = [
  {
    label: {
      en: "8–10 pages, built for your business",
      nl: "8–10 pagina's, gebouwd voor jouw bedrijf",
    },
    icon: (
      <FeatureIcon>
        <rect x="6" y="3" width="14" height="16" rx="2" />
        <path d="M3 7v12a3 3 0 0 0 3 3h10M10 8h6M10 12h6" />
      </FeatureIcon>
    ),
  },
  {
    label: {
      en: "A mobile-friendly website",
      nl: "Een mobielvriendelijke website",
    },
    icon: (
      <FeatureIcon>
        <rect x="6" y="2" width="12" height="20" rx="3" />
        <path d="M10 5h4M11 18h2" />
      </FeatureIcon>
    ),
  },
  {
    label: {
      en: "Enquiry & contact forms",
      nl: "Aanvraag- en contactformulieren",
    },
    icon: (
      <FeatureIcon>
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M7 8h10M7 12h5M14 16h3M7 16h2" />
      </FeatureIcon>
    ),
  },
  {
    label: { en: "Your own domain name", nl: "Je eigen domeinnaam" },
    icon: (
      <FeatureIcon>
        <circle cx="12" cy="12" r="9" />
        <ellipse cx="12" cy="12" rx="4" ry="9" />
        <path d="M3 12h18" />
      </FeatureIcon>
    ),
  },
  {
    label: { en: "Hosting & SSL included", nl: "Hosting & SSL inbegrepen" },
    icon: (
      <FeatureIcon>
        <path d="m12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6l8-3Z" />
        <path d="m8 12 3 3 5-6" />
      </FeatureIcon>
    ),
  },
  {
    label: { en: "Maintenance & updates", nl: "Onderhoud & updates" },
    icon: (
      <FeatureIcon>
        <path d="M20 8a8 8 0 0 0-14-3L3 8m0-5v5h5M4 16a8 8 0 0 0 14 3l3-3m0 5v-5h-5" />
      </FeatureIcon>
    ),
  },
];

const HUB_FEATURES: FeatureItem[] = [
  {
    label: {
      en: "Lead & enquiry management",
      nl: "Beheer van leads & aanvragen",
    },
    icon: (
      <FeatureIcon>
        <path d="m5 4-3 9v7h20v-7l-3-9H5Z" />
        <path d="M2 13h6l2 3h4l2-3h6M12 3v7m-3-3 3 3 3-3" />
      </FeatureIcon>
    ),
  },
  {
    label: { en: "Online appointment booking", nl: "Online afsprakensysteem" },
    icon: (
      <FeatureIcon>
        <rect x="3" y="5" width="18" height="16" rx="3" />
        <path d="M7 2v6M17 2v6M3 11h18m-13 5 2 2 4-4" />
      </FeatureIcon>
    ),
  },
  {
    label: {
      en: "Customer & contact records",
      nl: "Klant- en contactgegevens",
    },
    icon: (
      <FeatureIcon>
        <circle cx="9" cy="7" r="3" />
        <path d="M3 21v-3a6 6 0 0 1 12 0v3M16 4a3 3 0 0 1 0 6m2 4a5 5 0 0 1 3 4v3" />
      </FeatureIcon>
    ),
  },
  {
    label: { en: "Create & send quotes", nl: "Offertes maken & versturen" },
    icon: (
      <FeatureIcon>
        <path d="M14 2H5v20h14V7l-5-5Zm0 0v5h5M8 12h8M8 16h5" />
      </FeatureIcon>
    ),
  },
  {
    label: { en: "Create & send invoices", nl: "Facturen maken & versturen" },
    icon: (
      <FeatureIcon>
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M16 7h-5a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h5M6 10h8M6 14h7" />
      </FeatureIcon>
    ),
  },
];

function OfferCard({
  id,
  surface,
  headerIcon,
  headerIconClass,
  titlePrefix,
  titleHighlight,
  titleLine2,
  tagline,
  taglineClass,
  features,
  featureIconClass,
  evenRows,
  footNote,
}: {
  id: string;
  surface: string;
  headerIcon: ReactNode;
  headerIconClass: string;
  titlePrefix?: Translation;
  titleHighlight: Translation | string;
  titleLine2: Translation;
  tagline: Translation;
  taglineClass: string;
  features: FeatureItem[];
  featureIconClass: string;
  evenRows?: boolean;
  footNote: Translation;
}) {
  const { t } = useLanguage();

  return (
    <article className={`${CARD_SHELL} ${surface}`} aria-labelledby={id}>
      <header>
        <div className="flex items-center justify-between gap-[13px] min-[761px]:gap-3 min-[1101px]:gap-5">
          <h3
            id={id}
            className="m-0 font-bricolage text-[28px] font-semibold leading-[1.14] tracking-[-0.035em] min-[361px]:text-[31px] min-[761px]:text-[30px] min-[1101px]:text-[33px]"
          >
            {titlePrefix ? t(titlePrefix) : ""}
            <span className="text-[#e4fa65]">
              {typeof titleHighlight === "string"
                ? titleHighlight
                : t(titleHighlight)}
            </span>
            .
            <br />
            {t(titleLine2)}
          </h3>

          <span
            className={`grid h-[39px] w-[39px] flex-shrink-0 place-items-center rounded-[13px] min-[361px]:h-12 min-[361px]:w-12 min-[761px]:h-[49px] min-[761px]:w-[49px] min-[1101px]:h-[52px] min-[1101px]:w-[52px] ${headerIconClass}`}
          >
            {headerIcon}
          </span>
        </div>

        <p
          className={`mt-[15px] mb-[22px] font-sans text-[16px] leading-[1.7] min-[761px]:mb-[23px] min-[761px]:min-h-[54px] min-[1101px]:min-h-0 ${taglineClass}`}
        >
          {t(tagline)}
        </p>
      </header>

      <ul
        className={
          "m-0 flex-1 list-none p-0 " +
          (evenRows
            ? "min-[761px]:grid min-[761px]:[grid-template-rows:repeat(6,1fr)]"
            : "")
        }
      >
        {features.map((item) => (
          <li
            key={item.label.en}
            className="flex items-center gap-[15px] border-t border-[#ffffff29] py-[14px]"
          >
            <span
              className={`grid h-[38px] w-[38px] flex-shrink-0 place-items-center rounded-[13px] text-[#e4fa65] ${featureIconClass}`}
            >
              {item.icon}
            </span>
            <h4 className="m-0 font-bricolage text-[20px] font-medium leading-[1.18] tracking-[-0.02em] min-[361px]:text-[21px] min-[1101px]:text-[22px]">
              {t(item.label)}
            </h4>
          </li>
        ))}
      </ul>

      <p className="m-0 flex items-center gap-[10px] border-t border-white/25 pt-[17px] pb-[19px] font-sans text-[13px] font-medium text-[#e4fa65] min-[761px]:gap-[13px] min-[1101px]:text-[14px]">
        <span
          aria-hidden="true"
          className="text-[23px] leading-none min-[761px]:text-[27px]"
        >
          ✳
        </span>
        {t(footNote)}
      </p>
    </article>
  );
}

export default function Solution() {
  const { t } = useLanguage();
  //
  return (
    <section
      id="oplossing"
      aria-labelledby="offer-heading"
      className="rounded-[13px] bg-[#e4fa65] pt-14 pb-14 text-[#0a0516] min-[761px]:pt-20 min-[761px]:pb-16"
    >
      <div className="fix">
        {/* The `.eyebrow` ("01 / THE COMPLETE PICTURE") is display:none in the
            source, so it is left out rather than rendered and hidden. */}
        <div className="mb-[44px] grid grid-cols-1 items-end gap-[21px] min-[761px]:grid-cols-[2fr_1fr] min-[761px]:gap-[30px] min-[1101px]:grid-cols-[1.9fr_1fr] min-[1101px]:gap-[55px]">
          <h2
            id="offer-heading"
            className="m-0 font-bricolage text-[clamp(35px,9.7vw,52px)] font-semibold leading-[1.07] tracking-[-0.045em] min-[761px]:text-[clamp(40px,4.6vw,65px)]"
          >
            {t({ en: "Good on the outside.", nl: "Goed aan de buitenkant." })}
            <br />
            <span>
              {t({
                en: "Connected on the inside.",
                nl: "Verbonden aan de binnenkant.",
              })}
            </span>
          </h2>

          <p className="m-0 font-sans text-[16px] leading-[1.6] text-[#625a70] min-[761px]:mb-[5px] min-[761px]:ml-auto min-[761px]:max-w-[340px]">
            {t({
              en: "A professional website ",
              nl: "Een professionele website ",
            })}
            <strong className="font-semibold text-[#0a0516]">
              {t({ en: "and", nl: "en" })}
            </strong>
            {t({
              en: " the tools to run the business behind it. Here’s what comes together in your package.",
              nl: " de tools om het bedrijf erachter te runnen. Dit komt samen in jouw pakket.",
            })}
          </p>
        </div>

        <div className="relative grid grid-cols-1 gap-0 min-[761px]:grid-cols-2 min-[761px]:gap-6">
          <OfferCard
            id="website-heading"
            surface="bg-[#0a0516]"
            headerIcon={
              <BigIcon>
                <rect x="2" y="4" width="20" height="16" rx="3" />
                <path d="M2 9h20M6 6.5h.1M9 6.5h.1M7 14h10M7 17h6" />
              </BigIcon>
            }
            headerIconClass="rotate-[-7deg] bg-[#e4fa65] text-[#0a0516]"
            titlePrefix={{ en: "Your ", nl: "Jouw " }}
            titleHighlight={{ en: "Website", nl: "Website" }}
            titleLine2={{
              en: "Made for your business.",
              nl: "Gemaakt voor jouw bedrijf.",
            }}
            tagline={{
              en: "We write it. We build it. We look after it.",
              nl: "Wij schrijven het. Wij bouwen het. Wij onderhouden het.",
            }}
            taglineClass="text-[#c9c2d4]"
            features={WEBSITE_FEATURES}
            featureIconClass="bg-[#ffffff0d]"
            evenRows
            footNote={{
              en: "Built for you. Looked after for you.",
              nl: "Voor jou gebouwd. Voor jou onderhouden.",
            }}
          />

          {/* The `+` that joins the two cards. From 761px up it is absolutely
              centred on the column gap in *both* axes — the source pins it near
              the top (`top:46/51px`), which is the one place this port departs
              from the HTML. Below 761px it folds back into the flow so it
              straddles the two stacked cards. */}
          <span
            aria-hidden="true"
            className="relative z-[1] mx-auto my-[-8px] grid h-[74px] w-[74px] place-items-center rounded-full border-[6px] border-[#e4fa65] bg-[#0a0516] text-[#e4fa65] min-[761px]:absolute min-[761px]:top-1/2 min-[761px]:left-1/2 min-[761px]:mx-0 min-[761px]:my-0 min-[761px]:h-[68px] min-[761px]:w-[68px] min-[761px]:-translate-x-1/2 min-[761px]:-translate-y-1/2 min-[1101px]:h-[76px] min-[1101px]:w-[76px]"
          >
            <Plus size={38} strokeWidth={2.5} />
          </span>

          <OfferCard
            id="hub-heading"
            surface="bg-[#5b2dce]"
            headerIcon={
              <BigIcon>
                <rect x="8" y="8" width="8" height="8" rx="2" />
                <path d="M12 2v6M12 16v6M2 12h6M16 12h6M5 5l3 3m8 8 3 3M19 5l-3 3m-8 8-3 3" />
              </BigIcon>
            }
            headerIconClass="rotate-[7deg] bg-white text-[#5b2dce]"
            titleHighlight="Growth Rocket Hub"
            titleLine2={{
              en: "Your work, in one place.",
              nl: "Jouw werk, op één plek.",
            }}
            tagline={{
              en: "Manage customers, bookings, quotes and invoices.",
              nl: "Beheer klanten, boekingen, offertes en facturen.",
            }}
            taglineClass="text-white/[0.88]"
            features={HUB_FEATURES}
            featureIconClass="bg-white/[0.12]"
            footNote={{
              en: "Your everyday work. All in one place.",
              nl: "Jouw dagelijkse werk. Alles op één plek.",
            }}
          />
        </div>

        {/* Package summary bar. Its eyebrow ("TWO PARTS. ONE COMPLETE
            PACKAGE.") is hidden by the same global rule as the one above. */}
        <div className="block pt-[30px] min-[761px]:flex min-[761px]:items-start min-[761px]:justify-between min-[761px]:gap-[25px] min-[761px]:pt-9 min-[1101px]:items-center">
          <div className="flex items-center gap-[13px] min-[761px]:gap-5">
            <span
              aria-hidden="true"
              className="flex-shrink-0 text-[39px] leading-none text-[#5b2dce] min-[761px]:text-[57px]"
            >
              ✳
            </span>
            <h3 className="m-0 font-bricolage text-[27px] font-semibold leading-[1.12] tracking-[-0.035em] min-[761px]:text-[26px] min-[1101px]:text-[29px]">
              {t({
                en: "Your website + your business hub.",
                nl: "Jouw website + jouw bedrijfshub.",
              })}
            </h3>
          </div>

          <div className="mt-[25px] flex flex-wrap items-start justify-between gap-[18px] min-[761px]:mt-0 min-[761px]:flex-col min-[761px]:flex-nowrap min-[761px]:items-end min-[761px]:justify-start min-[761px]:gap-[14px] min-[1101px]:flex-row min-[1101px]:items-center min-[1101px]:gap-6">
            <p className="m-0 font-sans text-[14px] leading-[1.3] whitespace-nowrap">
              <div>{t({ en: "From ", nl: "Vanaf " })}</div>
              <strong className="font-bricolage text-[28px] font-semibold tracking-[-0.05em] min-[761px]:text-[42px]">
                €69
              </strong>
              <span>{t({ en: " / month", nl: " / maand" })}</span>
            </p>

            {/* Same CTA behaviour as every other call to action on the page
                (cf. "View full pricing" in PricingTeaser): `arrow-cta` supplies
                the hover lift and drives ArrowIcon's two-slot swap. No colour
                change on hover — the source's `#49217b` is dropped so this
                reacts like the rest. */}
            {/*  */}
            <a
              href="#pricing"
              className="arrow-cta inline-flex min-h-[51px] items-center justify-center gap-2 rounded-full border border-transparent bg-[#0a0516] px-3 py-1 lg:px-[17px] lg:py-[13px] font-sans text-[12px] font-semibold leading-[1.35] whitespace-nowrap text-[#e4fa65] min-[761px]:min-h-[52px] min-[761px]:gap-6 min-[761px]:px-5 min-[761px]:py-[14px] min-[761px]:text-[15px]"
            >
              {t({ en: "Explore the package", nl: "Bekijk het pakket" })}
              <ArrowIcon direction="up-right" size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
