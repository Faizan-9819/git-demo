"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLenis } from "lenis/react";
import Button from "./ui/Button";

import { useLanguage } from "../i18n/LanguageProvider";
import { localizedHref } from "../i18n/locale-href";
import type { Locale } from "../i18n/config";

const getLinks = (t: any, locale: Locale) => [
  {
    label: t({ en: "Features", nl: "Features" }),
    href: localizedHref("/#oplossing", locale),
  },
  {
    label: t({ en: "Who it's for", nl: "Voor wie" }),
    href: localizedHref("/#voorwie", locale),
  },
  {
    label: t({ en: "Examples", nl: "Voorbeelden" }),
    href: localizedHref("/#voorbeelden", locale),
  },
  {
    label: t({ en: "Pricing", nl: "Prijzen" }),
    href: localizedHref("/#prijzen", locale),
  },
  {
    label: t({ en: "About", nl: "Over ons" }),
    href: localizedHref("/about", locale),
  },
];

function openLeadForm() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("open-lead-form"));
  }
}

function Logo({ locale }: { locale: Locale }) {
  return (
    <Link
      href={localizedHref("/", locale)}
      className="flex items-center shrink-0"
      aria-label="Growth Rocket"
    >
      <img
        src="/figma/icons/logos/logoblack.svg"
        alt="Growth Rocket"
        className="h-[26px] lg:h-[32px] w-auto"
      />
    </Link>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="group relative block h-[20px] overflow-hidden font-sans text-[14px] font-medium text-[var(--color-haiti)]"
    >
      <span className="block transition-transform duration-300 ease-[cubic-bezier(.22,1,.36,1)] group-hover:-translate-y-[20px]">
        <span className="block h-[20px] leading-[20px] whitespace-nowrap">
          {label}
        </span>
        <span className="block h-[20px] leading-[20px] whitespace-nowrap text-[var(--color-violet-42)]">
          {label}
        </span>
      </span>
    </Link>
  );
}

function LangSwitcher({ compact }: { compact: boolean }) {
  const pathname = usePathname() || "/";
  const router = useRouter();
  const { locale } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node))
        setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  function pick(next: Locale) {
    setOpen(false);
    if (next === locale) return;
    router.push(localizedHref(pathname, next));
  }

  return (
    <div ref={ref} className="relative shrink-0">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Language"
        className="flex items-center gap-[6px] rounded-full border border-[var(--color-mist)] bg-white px-[10px] py-[7px] font-sans text-[14px] font-medium text-[var(--color-haiti)] transition-colors hover:bg-[var(--color-violet-98)]"
      >
        <svg
          width={compact ? 14 : 15}
          height={compact ? 14 : 15}
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--color-violet-42)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-[width,height] duration-300"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18" />
          <path d="M12 3a15 15 0 0 1 0 18a15 15 0 0 1 0-18z" />
        </svg>
        {locale.toUpperCase()}
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--color-dolphin)"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.15 }}
            className="absolute top-[calc(100%+8px)] left-0 right-0 z-10 flex flex-col gap-[2px] rounded-[12px] border border-[var(--color-mist)] bg-white p-1 shadow-[0_12px_28px_rgba(16,24,40,0.12)]"
          >
            {(["en", "nl"] as Locale[]).map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => pick(code)}
                className="rounded-[8px] px-2 py-[7px] text-center font-sans text-[14px] font-medium text-[var(--color-haiti)] transition-colors hover:bg-[var(--color-violet-98)] hover:text-[var(--color-violet-42)]"
              >
                {code.toUpperCase()}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Navbar() {
  const { t, locale } = useLanguage();
  const LINKS = getLinks(t, locale);
  const [open, setOpen] = useState(false);
  const [compact, setCompact] = useState(false);
  const compactRef = useRef(false);

  useLenis((lenis) => {
    const y = lenis.scroll;
    const wasCompact = compactRef.current;
    const nextCompact = wasCompact ? y > 30 : y > 90;
    if (nextCompact !== wasCompact) {
      compactRef.current = nextCompact;
      setCompact(nextCompact);
    }
  });

  useEffect(() => {
    if (open) {
      const scrollY = window.scrollY;
      document.body.style.top = `-${scrollY}px`;
      document.body.classList.add("scroll-locked");
      return () => {
        document.body.classList.remove("scroll-locked");
        document.body.style.top = "";
        window.scrollTo(0, scrollY);
      };
    }
  }, [open]);

  return (
    <header className="fixed top-3 left-0 right-0 z-50 px-3.5 pointer-events-none">
      <div
        className="pointer-events-auto mx-auto flex h-[64px] items-center justify-between gap-6 rounded-full border border-[var(--color-mist)] bg-white/65 shadow-[0_2px_10px_rgba(91,33,182,0.05)] backdrop-blur-2xl backdrop-saturate-150 transition-[max-width,height,padding,box-shadow] duration-500 ease-[cubic-bezier(.22,1,.36,1)] px-6"
        style={{
          maxWidth: compact ? 980 : 1500,
          boxShadow: compact
            ? "0 10px 30px rgba(10,5,22,0.10)"
            : "0 2px 10px rgba(91,33,182,0.05)",
        }}
      >
        <Logo locale={locale} />

        <nav className="hidden lg:flex items-center gap-[28px] flex-nowrap whitespace-nowrap">
          {LINKS.map((l) => (
            <NavLink key={l.label} href={l.href} label={l.label} />
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-[12px] shrink-0">
          <LangSwitcher compact={compact} />
          <Link
            href="https://hub.getgrowthrocket.com/"
            className="overflow-hidden whitespace-nowrap font-sans text-[14px] font-medium text-[var(--color-haiti)] transition-[opacity,max-width,margin] duration-300 ease-[cubic-bezier(.22,1,.36,1)] hover:opacity-70"
            style={{
              opacity: compact ? 0 : 1,
              maxWidth: compact ? 0 : 120,
              marginRight: compact ? -12 : 0,
              pointerEvents: compact ? "none" : "auto",
            }}
          >
            {t({ en: "Sign in", nl: "Inloggen" })}
          </Link>
          <Button
            size="md"
            onClick={openLeadForm}
            className="shrink-0"
            style={{ ["--btn-radius" as any]: "999px" }}
          >
            {t({
              en: "Start with Growth Rocket",
              nl: "Start met Growth Rocket",
            })}
          </Button>
        </div>

        {/* Mobile hamburger */}
        <div className="lg:hidden flex items-center gap-[8px]">
          <button
            aria-label="Open menu"
            aria-expanded={open}
            className="inline-flex items-center justify-center w-9 h-9 rounded-full"
            onClick={() => setOpen(true)}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden
            >
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="#0A0516"
                strokeWidth="1.75"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile fullscreen drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-white pointer-events-auto"
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 flex flex-col p-6"
            >
              <div className="flex items-center justify-between h-[74px]">
                <Logo locale={locale} />
                <button
                  aria-label="Close menu"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-md"
                  onClick={() => setOpen(false)}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M6 6l12 12M18 6L6 18"
                      stroke="#0A0516"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>

              <div className="flex-1 flex flex-col justify-between pb-10 pt-6">
                <ul className="flex flex-col gap-2">
                  {LINKS.map((l, i) => (
                    <motion.li
                      key={l.label}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.08 + i * 0.04, duration: 0.35 }}
                    >
                      <Link
                        href={l.href}
                        onClick={() => setOpen(false)}
                        className="block font-jakarta font-semibold text-[28px] leading-[1.2] tracking-[-0.5px] text-[var(--color-haiti)] py-3 border-b border-black/5"
                      >
                        {l.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>

                <div className="flex flex-col gap-3 pb-12 pt-8">
                  <div className="flex items-center gap-3">
                    <LangSwitcher compact={false} />
                    <Link
                      href="https://hub.getgrowthrocket.com/"
                      onClick={() => setOpen(false)}
                      className="font-sans text-[14px] font-medium text-[var(--color-haiti)]"
                    >
                      {t({ en: "Sign in", nl: "Inloggen" })}
                    </Link>
                  </div>
                  <Button
                    onClick={() => {
                      setOpen(false);
                      openLeadForm();
                    }}
                    arrow="up-right"
                    fullWidth
                  >
                    {t({
                      en: "Start with Growth Rocket",
                      nl: "Start met Growth Rocket",
                    })}
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
