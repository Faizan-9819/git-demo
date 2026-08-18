"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Reveal from "../Reveal";
import { useLanguage } from "../../i18n/LanguageProvider";
import { localizedHref } from "../../i18n/locale-href";
import type { Translation } from "../../i18n/config";
import { Mail, Phone, MapPin } from "lucide-react";
import {
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";
import { CONTACT_INFO, phoneHref } from "@/app/lib/contact";

const TICKER_TEXT: Translation = {
  en: "Get started in 7 days",
  // nl: "Start binnen 7 dagen",
  nl: "Get started in 7 days",
};

const SOCIALS = [
  {
    label: "Instagram",
    href: CONTACT_INFO.socialLinks[0].href,
    Icon: FaInstagram,
  },
  {
    label: "LinkedIn",
    href: CONTACT_INFO.socialLinks[1].href,
    Icon: FaLinkedin,
  },
  { label: "YouTube", href: CONTACT_INFO.socialLinks[2].href, Icon: FaYoutube },
  { label: "X", href: CONTACT_INFO.socialLinks[3].href, Icon: RiTwitterXFill },
  {
    label: "WhatsApp",
    href: CONTACT_INFO.socialLinks[4].href,
    Icon: FaWhatsapp,
  },
];

type Column = {
  heading?: Translation;
  links: { label: Translation; href: string }[];
};

const LINK_COLUMNS: Column[] = [
  {
    heading: { en: "Helpful links", nl: "Helpful links" },
    links: [
      { label: { en: "Home", nl: "Home" }, href: "/" },
      {
        label: { en: "Professional website", nl: "Professionele website" },
        href: "/#oplossing",
      },
      {
        label: { en: "Growth Rocket Hub", nl: "Growth Rocket Hub" },
        href: "/#oplossing",
      },
      { label: { en: "Pricing", nl: "Prijzen" }, href: "/#prijzen" },
      { label: { en: "FAQ", nl: "FAQ" }, href: "/#faq" },
    ],
  },
  {
    links: [
      { label: { en: "Who it's for", nl: "Voor wie" }, href: "/#voorwie" },
      { label: { en: "About", nl: "Over ons" }, href: "/about" },
      {
        label: { en: "Partner Network", nl: "Partner Network" },
        href: "/partner-network",
      },
      { label: { en: "Contact", nl: "Contact" }, href: "/contact" },
      { label: { en: "Blog", nl: "Blog" }, href: "/blog" },
    ],
  },
];

function Ticker() {
  const { t } = useLanguage();
  const label = t(TICKER_TEXT);
  const items = Array.from({ length: 6 });
  return (
    <div className="overflow-hidden border-b border-[rgba(91,33,182,0.14)] py-[15px]">
      <div className="gr-ticker-track flex w-max items-center">
        {items.concat(items).map((_, i) => (
          <span
            key={i}
            className="flex items-center gap-[18px] pr-[64px] font-poppins font-semibold text-[24px] sm:text-[32px] tracking-[-0.8px] whitespace-nowrap text-[rgba(91,33,182,0.82)]"
          >
            {label}
            <span className="font-normal">↗</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function Watermark() {
  return (
    <div
      aria-hidden
      className="relative z-0 mt-[16px] h-[clamp(96px,13vw,168px)] overflow-hidden"
    >
      <svg
        viewBox="0 0 1000 132"
        role="img"
        aria-label="Growth Rocket"
        className="absolute left-[-2%] top-0 block h-auto w-[104%] overflow-visible"
      >
        <text
          x="0"
          y="104"
          textLength="1000"
          lengthAdjust="spacingAndGlyphs"
          fontFamily="Poppins, sans-serif"
          fontWeight="900"
          fontSize="132"
          fill="rgba(91,33,182,0.10)"
        >
          GROWTH ROCKET
        </text>
      </svg>
    </div>
  );
}

export default function Footer() {
  const { t, locale } = useLanguage();
  const pathname = usePathname() || "/";
  const isHome = pathname === "/" || pathname === "/nl";
  const addressLines =
    locale === "nl" ? CONTACT_INFO.addressLinesNl : CONTACT_INFO.addressLines;

  return (
    <div
      className={`px-3.5 mb-3.5  ${isHome ? "bg-[var(--color-sand)]!" : ""}`}
    >
      <footer className="relative overflow-hidden rounded-[28px] bg-[var(--color-footer-bg)] mx-auto max-w-473">
        <Ticker />

        <div className="relative z-[1] fix-wide grid grid-cols-2 md:grid-cols-4 lg:grid-cols-[1.45fr_0.8fr_0.8fr_0.8fr_1.35fr] gap-x-[24px] gap-y-[40px] pt-[56px] lg:pt-[72px] pb-[8px]">
          <Reveal className="col-span-2 lg:col-span-1 flex max-w-[340px] flex-col items-start gap-[16px]">
            <Link
              href={localizedHref("/", locale)}
              aria-label="Growth Rocket"
              className="flex items-center"
            >
              <img
                src="/figma/icons/logos/logoblack.svg"
                alt="Growth Rocket"
                className="h-[34px] w-auto"
              />
            </Link>
            <p className="max-w-[330px] font-sans text-[13px] leading-[22px] text-[#352c4a]">
              {t({
                en: "Growth Rocket brings your professional website and essential business tools together in one simple system — built for freelancers and small businesses.",
                nl: "Growth Rocket brengt je professionele website en essentiële bedrijfstools samen in één eenvoudig systeem — gemaakt voor zzp'ers en kleine bedrijven.",
              })}
            </p>
            <div className="flex items-center gap-[12px]">
              {SOCIALS.map(({ label, href, Icon }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-[var(--color-violet-42)]/70 transition-all duration-200 hover:scale-110 hover:text-[var(--color-violet-42)]"
                >
                  <Icon size={18} />
                </Link>
              ))}
            </div>
          </Reveal>

          {LINK_COLUMNS.map((col, i) => (
            <Reveal key={i} delay={0.05 + i * 0.05}>
              <div
                className="mb-[12px] font-poppins text-[15px] font-semibold leading-[22px] tracking-[-0.2px] text-[var(--color-haiti)]"
                aria-hidden={!col.heading}
              >
                {col.heading ? t(col.heading) : " "}
              </div>
              <ul className="flex flex-col gap-[2px]">
                {col.links.map((l) => (
                  <li key={l.label.en}>
                    <Link
                      href={localizedHref(l.href, locale)}
                      className="block font-sans text-[14px] leading-[26px] text-[#463c5f] transition-colors hover:text-[var(--color-violet-42)]"
                    >
                      {t(l.label)}
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}

          <Reveal delay={0.15} className="col-span-2 md:col-span-1">
            <div className="mb-[12px] font-poppins text-[15px] font-semibold leading-[22px] tracking-[-0.2px] text-[var(--color-haiti)]">
              {t({ en: "Follow us", nl: "Follow us" })}
            </div>
            <div className="flex flex-col gap-[10px]">
              {SOCIALS.map(({ label, href, Icon }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-[10px] font-sans text-[14px] text-[#463c5f] transition-colors hover:text-[var(--color-violet-42)]"
                >
                  <Icon size={16} className="text-[var(--color-violet-42)]" />
                  {label}
                </Link>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2} className="col-span-2 lg:col-span-1">
            <div className="mb-[12px] font-poppins text-[15px] font-semibold leading-[22px] tracking-[-0.2px] text-[var(--color-haiti)]">
              {t({ en: "Contact", nl: "Contact" })}
            </div>
            <div className="flex flex-col gap-[12px] font-sans text-[13px] leading-[21px] text-[#463c5f]">
              <p className="flex items-start gap-[9px] font-semibold">
                <MapPin
                  size={16}
                  className="mt-[3px] shrink-0 text-[var(--color-violet-42)]"
                  aria-hidden
                />
                <span>
                  {CONTACT_INFO.company}
                  {addressLines.map((line) => (
                    <span key={line}>
                      <br />
                      {line}
                    </span>
                  ))}
                </span>
              </p>
              <div className="flex items-start gap-[9px]">
                <Mail
                  size={16}
                  className="mt-[3px] shrink-0 text-[var(--color-violet-42)]"
                  aria-hidden
                />
                <span className="flex flex-col">
                  {CONTACT_INFO.emails.map((email) => (
                    <a
                      key={email}
                      href={`mailto:${email}`}
                      className="hover:text-[var(--color-violet-42)]"
                    >
                      {email}
                    </a>
                  ))}
                </span>
              </div>
              <div className="flex items-center gap-[9px]">
                <Phone
                  size={16}
                  className="shrink-0 text-[var(--color-violet-42)]"
                  aria-hidden
                />
                <a
                  href={phoneHref(CONTACT_INFO.phone)}
                  className="hover:text-[var(--color-violet-42)]"
                >
                  {CONTACT_INFO.phone}
                </a>
              </div>
              <span className="pl-[25px] text-[#352c4a]/55">
                {CONTACT_INFO.kvkno}
              </span>
            </div>
          </Reveal>
        </div>

        <Watermark />

        <div className="relative z-[1] fix-wide flex flex-wrap items-center justify-between gap-[18px] border-t border-[rgba(91,33,182,0.10)] py-[18px] font-sans text-[13px] text-[#352c4a]/78">
          <span>
            {t({
              en: "© 2026 Growth Rocket by",
              nl: "© 2026 Growth Rocket by",
            })}{" "}
            <a
              href="https://parashifttech.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[var(--color-violet-42)]"
            >
              Parashift Technologies
            </a>
          </span>
          <span className="flex items-center gap-[14px]">
            <Link
              href={localizedHref("/privacy-policy", locale)}
              className="text-[#352c4a] hover:text-[var(--color-violet-42)]"
            >
              {t({ en: "Privacy", nl: "Privacy" })}
            </Link>
            <span className="opacity-45">·</span>
            <Link
              href={localizedHref("/imprint", locale)}
              className="text-[#352c4a] hover:text-[var(--color-violet-42)]"
            >
              {t({ en: "Imprint", nl: "Imprint" })}
            </Link>
            <span className="opacity-45">·</span>
            <Link
              href={localizedHref("/cookie-policy", locale)}
              className="text-[#352c4a] hover:text-[var(--color-violet-42)]"
            >
              {t({ en: "Cookies", nl: "Cookies" })}
            </Link>
            <span className="opacity-45">·</span>
            <Link
              href={localizedHref("/terms-and-conditions", locale)}
              className="text-[#352c4a] hover:text-[var(--color-violet-42)]"
            >
              {t({ en: "Terms", nl: "Terms" })}
            </Link>
          </span>
        </div>
      </footer>
    </div>
  );
}
