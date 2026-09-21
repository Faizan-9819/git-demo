"use client";

import type { ReactNode } from "react";
import { Plus } from "lucide-react";
import ArrowIcon from "../../ui/ArrowIcon";
import { RevealGroup, RevealItem } from "../../../features/FeatureReveal";
import { FEATURE_ICON_PATHS, type FeatureIconName } from "../featureIcons";
import { useLanguage } from "../../../i18n/LanguageProvider";
import type { Translation } from "../../../i18n/config";

/* `h-full` is what keeps the two cards the same height now that each one sits
   inside a RevealItem: the grid stretches that wrapper, not the <article>, so
   without it the Hub card would shrink to its own five rows. When the article
   was the grid item, `stretch` did this for free. */
const CARD_SHELL =
  "flex h-full min-w-0 flex-col rounded-[13px] px-[18px] pt-6 text-white " +
  "2xs:px-[23px] 2xs:pt-7 md:px-[25px] lg:px-[34px] lg:pt-[35px]";

type FeatureItem = { label: Translation; icon: FeatureIconName };

/**
 * Shared attributes of the feature-row icons, copied from the source markup.
 * The marks themselves live in `../featureIcons` so this card and the pricing
 * page's `OfferCards.tsx` list the same inclusions with the same glyphs; only
 * the size differs (23px here, 19px in the narrower pricing card).
 */
function FeatureIcon({ name }: { name: FeatureIconName }) {
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
      {FEATURE_ICON_PATHS[name]}
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
      className="h-6 w-6 2xs:h-7 2xs:w-7 md:h-[29px] md:w-[29px] lg:h-8 lg:w-8"
    >
      {children}
    </svg>
  );
}

/* Both lists match the pricing page's `OfferCards.tsx` row for row, so the two
   folds promise the same package. If a row is added here, add it there too —
   and mind WEBSITE_ROWS below. */
const WEBSITE_FEATURES: FeatureItem[] = [
  {
    label: {
      en: "8–10 pages, built for your business",
      nl: "8–10 pagina's, gebouwd voor jouw bedrijf",
    },
    icon: "pages",
  },
  {
    label: {
      en: "Mobile-friendly & SEO-ready",
      nl: "Mobielvriendelijk & SEO-klaar",
    },
    icon: "mobileSeo",
  },
  {
    label: {
      en: "30-second business video",
      nl: "Bedrijfsvideo van 30 seconden",
    },
    icon: "video",
  },
  {
    label: {
      en: "Enquiry & contact forms",
      nl: "Aanvraag- en contactformulieren",
    },
    icon: "forms",
  },
  {
    label: { en: "Your own domain name", nl: "Je eigen domeinnaam" },
    icon: "domain",
  },
  {
    label: { en: "Hosting & SSL included", nl: "Hosting & SSL inbegrepen" },
    icon: "hosting",
  },
  {
    label: { en: "Maintenance & updates", nl: "Onderhoud & updates" },
    icon: "maintenance",
  },
];

const HUB_FEATURES: FeatureItem[] = [
  {
    label: {
      en: "Lead & enquiry management",
      nl: "Beheer van leads & aanvragen",
    },
    icon: "leads",
  },
  {
    label: { en: "Online appointment booking", nl: "Online afsprakensysteem" },
    icon: "booking",
  },
  {
    label: {
      en: "Customer & contact records",
      nl: "Klant- en contactgegevens",
    },
    icon: "customers",
  },
  {
    label: { en: "Create & send quotes", nl: "Offertes maken & versturen" },
    icon: "quotes",
  },
  {
    label: { en: "Create & send invoices", nl: "Facturen maken & versturen" },
    icon: "invoices",
  },
  {
    label: { en: "Help & support requests", nl: "Hulp- en supportverzoeken" },
    icon: "support",
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
        <div className="flex items-center justify-between gap-[13px] md:gap-3 lg:gap-5">
          <h3
            id={id}
            className="m-0 font-bricolage text-[28px] font-semibold leading-[1.14] tracking-[-0.035em] 2xs:text-[31px] md:text-[30px] lg:text-[33px]"
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
            className={`grid h-[39px] w-[39px] flex-shrink-0 place-items-center rounded-[13px] 2xs:h-12 2xs:w-12 md:h-[49px] md:w-[49px] lg:h-[52px] lg:w-[52px] ${headerIconClass}`}
          >
            {headerIcon}
          </span>
        </div>

        <p
          className={`mt-[15px] mb-[22px] font-sans text-[16px] leading-[1.7] md:mb-[23px] md:min-h-[54px] lg:min-h-0 ${taglineClass}`}
        >
          {t(tagline)}
        </p>
      </header>

      {/* The list is deliberately not `flex-1`. The two cards are grid siblings,
          so the shorter one (the Hub, six rows against the website's seven) is
          stretched to its neighbour's height; letting the list absorb that
          difference pushed its foot note to the card's bottom edge, away from
          the last row. Without it the rows and the note keep the same rhythm in
          both cards and the slack falls below the note instead.

          The row count is a literal because Tailwind resolves arbitrary values
          at build time — it has to track WEBSITE_FEATURES.length by hand. */}
      <ul
        className={
          "m-0 list-none p-0 " +
          (evenRows ? "md:grid md:grid-rows-[repeat(7,1fr)]" : "")
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
              <FeatureIcon name={item.icon} />
            </span>
            <h4 className="m-0 font-bricolage text-[18px] font-medium leading-[1.18] tracking-[-0.02em] 2xs:text-[21px] lg:text-[18px]">
              {t(item.label)}
            </h4>
          </li>
        ))}
      </ul>

      <p className="m-0 flex items-center gap-[10px] border-t border-white/25 pt-[17px] pb-[19px] font-sans text-[13px] font-medium text-[#e4fa65] md:gap-[13px] lg:text-[14px]">
        <span
          aria-hidden="true"
          className="text-[23px] leading-none md:text-[27px]"
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
      className="rounded-[13px] bg-[#e4fa65] pt-14 pb-14 text-[#0a0516] md:pt-20 md:pb-16"
    >
      <div className="fix">
        {/* The `.eyebrow` ("01 / THE COMPLETE PICTURE") is display:none in the
            source, so it is left out rather than rendered and hidden. */}
        <RevealGroup className="mb-[44px] grid grid-cols-1 items-end gap-[21px] md:grid-cols-[2fr_1fr] md:gap-[30px] lg:grid-cols-[1.9fr_1fr] lg:gap-[55px]">
          <RevealItem>
            <h2
              id="offer-heading"
              className="m-0 font-bricolage text-[clamp(35px,9.7vw,52px)] font-semibold leading-[1.07] tracking-[-0.045em] md:text-[clamp(40px,4.6vw,65px)]"
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
          </RevealItem>

          <RevealItem
            as="p"
            className="m-0 font-sans text-[16px] leading-[1.6] text-[#625a70] md:mb-[5px] md:ml-auto md:max-w-[340px]"
          >
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
          </RevealItem>
        </RevealGroup>

        {/* Two tall cards and the badge between them — `amount: 0.1` so the
            pair plays when its top edge is in rather than a fifth of a fold
            that is most of a screen tall. */}
        <RevealGroup
          amount={0.1}
          className="relative grid grid-cols-1 gap-0 md:grid-cols-2 md:gap-6"
        >
          <RevealItem className="min-w-0">
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
          </RevealItem>

          {/* The `+` that joins the two cards. From 761px up it is absolutely
              centred on the column gap in *both* axes — the source pins it near
              the top (`top:46/51px`), which is the one place this port departs
              from the HTML. Below 761px it folds back into the flow so it
              straddles the two stacked cards.

              It reveals with the cards rather than sitting there waiting for
              them: a `+` floating alone on the lime is what you would see for
              the length of the stagger otherwise. The centring translate is
              safe on a motion element — Tailwind v4 compiles it to the
              `translate` property, which composes with the `transform` the
              reveal writes instead of overwriting it. */}
          <RevealItem className="relative z-[1] mx-auto my-[-8px] w-max md:absolute md:top-1/2 md:left-1/2 md:mx-0 md:my-0 md:-translate-x-1/2 md:-translate-y-1/2">
            <span
              aria-hidden="true"
              className="grid h-[74px] w-[74px] place-items-center rounded-full border-[6px] border-[#e4fa65] bg-[#0a0516] text-[#e4fa65] md:h-[68px] md:w-[68px] lg:h-[76px] lg:w-[76px]"
            >
              <Plus size={38} strokeWidth={2.5} />
            </span>
          </RevealItem>

          <RevealItem className="min-w-0">
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
          </RevealItem>
        </RevealGroup>

        {/* Package summary bar. Its eyebrow ("TWO PARTS. ONE COMPLETE
            PACKAGE.") is hidden by the same global rule as the one above. */}
        <RevealGroup className="block pt-[30px] md:flex md:items-start md:justify-between md:gap-[25px] md:pt-9 lg:items-center">
          <RevealItem className="flex items-center gap-[13px] md:gap-5">
            <span
              aria-hidden="true"
              className="flex-shrink-0 text-[39px] leading-none text-[#5b2dce] md:text-[57px]"
            >
              ✳
            </span>
            <h3 className="m-0 font-bricolage text-[27px] font-semibold leading-[1.12] tracking-[-0.035em] md:text-[26px] lg:text-[29px]">
              {t({
                en: "Your website + your business hub.",
                nl: "Jouw website + jouw bedrijfshub.",
              })}
            </h3>
          </RevealItem>

          <RevealItem className="mt-[25px] flex flex-wrap items-start justify-between gap-[18px] md:mt-0 md:flex-col md:flex-nowrap md:items-end md:justify-start md:gap-[14px] lg:flex-row lg:items-center lg:gap-6">
            <p className="m-0 font-sans text-[14px] leading-[1.3] whitespace-nowrap">
              <div>{t({ en: "From ", nl: "Vanaf " })}</div>
              <strong className="font-bricolage text-[28px] font-semibold tracking-[-0.05em] md:text-[42px]">
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
              className="arrow-cta inline-flex min-h-[51px] items-center justify-center gap-2 rounded-full border border-transparent bg-[#0a0516] px-3 py-1 lg:px-[17px] lg:py-[13px] font-sans text-[12px] font-semibold leading-[1.35] whitespace-nowrap text-[#e4fa65] md:min-h-[52px] md:gap-2 md:px-5 md:py-[14px] md:text-[15px]"
            >
              {t({ en: "Explore the package", nl: "Bekijk het pakket" })}
              <ArrowIcon direction="up-right" size={18} />
            </a>
          </RevealItem>
        </RevealGroup>
      </div>
    </section>
  );
}
