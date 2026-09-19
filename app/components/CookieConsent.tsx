"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { lenisStop, lenisStart } from "./LenisProvider";
import { useLanguage } from "../i18n/LanguageProvider";

export const COOKIE_CONSENT_NAME = "gr_cookie_consent";
export const COOKIE_CONSENT_EVENT = "gr-cookie-consent-changed";
export const OPEN_COOKIE_PREFERENCES_EVENT = "gr-open-cookie-preferences";
export type ConsentValue = "granted" | "denied" | "pending";
export type ConsentPrefs = {
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
};

export function openCookiePreferences() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent(OPEN_COOKIE_PREFERENCES_EVENT));
}

const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

type Prefs = ConsentPrefs;

const DEFAULT_PREFS: Prefs = {
  analytics: false,
  marketing: false,
  functional: false,
};
const ALL_ON: Prefs = { analytics: true, marketing: true, functional: true };

function readStored(): { consent: ConsentValue; prefs: Prefs } {
  if (typeof document === "undefined")
    return { consent: "pending", prefs: DEFAULT_PREFS };
  try {
    const raw = localStorage.getItem(COOKIE_CONSENT_NAME);
    if (raw) {
      // Handle both new JSON format and legacy plain string format
      try {
        const parsed = JSON.parse(raw);
        return {
          consent: parsed.consent ?? "pending",
          prefs: parsed.prefs ?? DEFAULT_PREFS,
        };
      } catch {
        // Legacy: value was "granted" or "denied" plain string
        const legacy = raw.trim().replace(/"/g, "");
        if (legacy === "granted" || legacy === "denied") {
          return {
            consent: legacy,
            prefs: legacy === "granted" ? ALL_ON : DEFAULT_PREFS,
          };
        }
      }
    }
    // Also check the cookie directly as fallback
    const cookieMatch = document.cookie.match(
      new RegExp(`(?:^|; )${COOKIE_CONSENT_NAME}=([^;]+)`),
    );
    if (cookieMatch) {
      const v = decodeURIComponent(cookieMatch[1]);
      if (v === "granted" || v === "denied") {
        return { consent: v, prefs: v === "granted" ? ALL_ON : DEFAULT_PREFS };
      }
    }
  } catch {}
  return { consent: "pending", prefs: DEFAULT_PREFS };
}

function writeStored(consent: "granted" | "denied", prefs: Prefs) {
  const payload = JSON.stringify({ consent, prefs, timestamp: Date.now() });
  localStorage.setItem(COOKIE_CONSENT_NAME, payload);
  document.cookie = `${COOKIE_CONSENT_NAME}=${consent}; path=/; max-age=${COOKIE_MAX_AGE}; SameSite=Lax`;
}

function clearTrackingCookies() {
  if (typeof document === "undefined") return;
  const all = document.cookie.split(";").map((c) => c.trim().split("=")[0]);
  const host = window.location.hostname;
  const domains = [
    host,
    ...host
      .split(".")
      .slice(1)
      .map((_, i, a) => a.slice(i).join(".")),
  ];
  for (const name of all) {
    if (/^(_ga|_gat|_gid|_gcl|_dc_gtm)/.test(name)) {
      for (const d of domains) {
        document.cookie = `${name}=; path=/; domain=${d}; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
        document.cookie = `${name}=; path=/; domain=.${d}; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
      }
      document.cookie = `${name}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
    }
  }
}

function broadcast(consent: ConsentValue, prefs: Prefs) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(
    new CustomEvent(COOKIE_CONSENT_EVENT, { detail: { consent, prefs } }),
  );
}

// ── Toggle ────────────────────────────────────────────────────────────────────
function Toggle({
  checked,
  onChange,
  disabled,
  id,
}: {
  checked: boolean;
  onChange?: (v: boolean) => void;
  disabled?: boolean;
  id: string;
}) {
  return (
    <button
      role="switch"
      aria-checked={checked}
      aria-label={id}
      id={id}
      disabled={disabled}
      onClick={() => onChange?.(!checked)}
      className="relative flex-shrink-0 w-[44px] h-[24px] rounded-full transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-violet-42)] disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
      style={{
        background: checked ? "var(--grad-brand)" : "var(--color-slate-200)",
      }}
    >
      <span
        className="absolute top-[3px] left-[3px] w-[18px] h-[18px] rounded-full bg-white shadow-sm transition-transform duration-200"
        style={{ transform: checked ? "translateX(20px)" : "translateX(0)" }}
      />
    </button>
  );
}

// ── Category row ─────────────────────────────────────────────────────────────
function CategoryRow({
  label,
  description,
  checked,
  onChange,
  disabled,
  id,
  alwaysOnLabel = "Always on",
}: {
  label: string;
  description: string;
  checked: boolean;
  onChange?: (v: boolean) => void;
  disabled?: boolean;
  id: string;
  alwaysOnLabel?: string;
}) {
  return (
    <div className="flex items-start justify-between gap-4 py-4 border-b border-[var(--color-slate-200)] last:border-b-0">
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-0.5">
          <label
            htmlFor={id}
            className="text-[14px] font-semibold text-[var(--color-haiti)] cursor-pointer"
          >
            {label}
          </label>
          {disabled && (
            <span className="text-[10px] font-semibold uppercase tracking-wide text-[var(--color-violet-42)] bg-[var(--color-violet-98)] px-2 py-0.5 rounded-full">
              {alwaysOnLabel}
            </span>
          )}
        </div>
        {/* <p className="text-[13px] text-[var(--color-dolphin)] leading-[1.5]">
          {description}
        </p> */}
      </div>
      <Toggle
        id={id}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
    </div>
  );
}

// ── Preferences Panel ─────────────────────────────────────────────────────────
function PreferencesPanel({
  prefs,
  onPrefsChange,
  onSave,
  onAcceptAll,
  onClose,
}: {
  prefs: Prefs;
  onPrefsChange: (p: Prefs) => void;
  onSave: () => void;
  onAcceptAll: () => void;
  onClose: () => void;
}) {
  const { t } = useLanguage();
  const set = (key: keyof Prefs) => (v: boolean) =>
    onPrefsChange({ ...prefs, [key]: v });

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={t({ en: "Cookie preferences", nl: "Cookievoorkeuren" })}
      className="fixed inset-0 z-[1600] flex items-end sm:items-center justify-center p-0 sm:p-4"
    >
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"
        onClick={onClose}
      />

      {/* Panel */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 40, opacity: 0 }}
        transition={{ type: "spring", duration: 0.45, bounce: 0.2 }}
        className="relative w-full sm:max-w-[520px] bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90dvh]"
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-3 px-6 pt-6 pb-4 border-b border-[var(--color-slate-200)]">
          <div>
            <h2 className="text-[18px] font-bold text-[var(--color-haiti)] leading-tight">
              {t({ en: "Cookie preferences", nl: "Cookievoorkeuren" })}
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label={t({
              en: "Close preferences",
              nl: "Voorkeuren sluiten",
            })}
            className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full hover:bg-[var(--color-violet-98)] text-[var(--color-dolphin)] hover:text-[var(--color-haiti)] transition-colors cursor-pointer"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M1 1l12 12M13 1L1 13"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* Categories */}
        <div className="flex-1 overflow-y-auto px-6 overscroll-contain">
          <CategoryRow
            id="essential"
            label={t({ en: "Essential", nl: "Essentieel" })}
            description=""
            checked={true}
            disabled={true}
            alwaysOnLabel={t({ en: "Always on", nl: "Altijd aan" })}
          />
          <CategoryRow
            id="analytics"
            label={t({ en: "Analytics", nl: "Analytics" })}
            description=""
            checked={prefs.analytics}
            onChange={set("analytics")}
          />
          <CategoryRow
            id="marketing"
            label={t({ en: "Marketing", nl: "Marketing" })}
            description=""
            checked={prefs.marketing}
            onChange={set("marketing")}
          />
          <CategoryRow
            id="functional"
            label={t({ en: "Functional", nl: "Functioneel" })}
            description=""
            checked={prefs.functional}
            onChange={set("functional")}
          />
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-[var(--color-slate-200)] flex flex-col sm:flex-row gap-2">
          <button
            onClick={onAcceptAll}
            className="btn btn--secondary btn--sm flex-1"
          >
            {t({ en: "Accept all", nl: "Alles accepteren" })}
          </button>
          <button onClick={onSave} className="btn btn--primary btn--sm flex-1">
            {t({ en: "Save preferences", nl: "Voorkeuren opslaan" })}
          </button>
        </div>
      </motion.div>
    </div>
  );
}

// ── Cookie icon ───────────────────────────────────────────────────────────────
function CookieIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-4.5 w-4.5"
      aria-hidden
    >
      <circle
        cx="12"
        cy="12"
        r="9.25"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="9" cy="9.2" r="1.15" fill="currentColor" />
      <circle cx="15" cy="11" r="1.05" fill="currentColor" />
      <circle cx="10.4" cy="15" r="1.15" fill="currentColor" />
      <circle cx="14.6" cy="15.6" r="0.9" fill="currentColor" />
    </svg>
  );
}

// ── Main component ────────────────────────────────────────────────────────────
export default function CookieConsent() {
  const { t } = useLanguage();
  const [bannerOpen, setBannerOpen] = useState(false);
  const [panelOpen, setPanelOpen] = useState(false);
  const [prefs, setPrefs] = useState<Prefs>(DEFAULT_PREFS);
  const barRef = useRef<HTMLDivElement | null>(null);
  const [barHeight, setBarHeight] = useState(0);

  useEffect(() => {
    const { consent, prefs: stored } = readStored();
    if (consent === "pending") {
      setBannerOpen(true);
    } else {
      setPrefs(stored);
    }
  }, []);

  // Lock scroll whenever the panel is open (same pattern as form modals)
  useEffect(() => {
    if (panelOpen) {
      lenisStop();
      return () => lenisStart();
    }
  }, [panelOpen]);

  // Keep the WhatsApp FAB clear of the full-width consent bar
  useEffect(() => {
    if (!bannerOpen) {
      setBarHeight(0);
      return;
    }
    const el = barRef.current;
    if (!el) return;
    const measure = () => setBarHeight(el.offsetHeight);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [bannerOpen]);

  // Allow other parts of the app (e.g. the footer "Cookie settings" link) to open the panel
  useEffect(() => {
    const handler = () => {
      setBannerOpen(false);
      setPanelOpen(true);
    };
    window.addEventListener(OPEN_COOKIE_PREFERENCES_EVENT, handler);
    return () =>
      window.removeEventListener(OPEN_COOKIE_PREFERENCES_EVENT, handler);
  }, []);

  function commit(consent: "granted" | "denied", p: Prefs) {
    writeStored(consent, p);
    if (consent === "denied") clearTrackingCookies();
    broadcast(consent, p);
    setBannerOpen(false);
    setPanelOpen(false);
    setPrefs(p);
  }

  const acceptAll = () => commit("granted", ALL_ON);
  const rejectAll = () => commit("denied", DEFAULT_PREFS);
  const savePrefs = () =>
    commit(
      prefs.analytics || prefs.marketing || prefs.functional
        ? "granted"
        : "denied",
      prefs,
    );

  const openPanel = () => {
    setBannerOpen(false);
    setPanelOpen(true);
  };

  return (
    <>
      {/* Banner — full-width bottom strip: icon · title · description · actions */}
      <AnimatePresence>
        {bannerOpen && (
          <motion.div
            ref={barRef}
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.18 }}
            role="dialog"
            aria-live="polite"
            aria-label="Cookie consent"
            // Sits above the 52px mobile sticky bar; flush to the bottom on desktop.
            className="fixed inset-x-0 bottom-[52px] z-[1500] lg:bottom-0"
          >
            <div className="border-t border-[var(--color-slate-200)] bg-white shadow-[0_-10px_34px_rgba(10,5,22,0.10)]">
              <div className="flex w-full flex-col gap-3 px-4 py-3.5 sm:px-6 sm:py-4 lg:flex-row lg:items-center lg:gap-6 lg:px-8">
                {/* Icon + title + description */}
                <div className="flex min-w-0 items-start gap-3 lg:items-center">
                  <span className="mt-0.5 grid h-8 w-8 flex-shrink-0 place-items-center rounded-full bg-[var(--color-violet-98)] text-[var(--color-violet-42)] lg:mt-0">
                    <CookieIcon />
                  </span>
                  <p className="min-w-0 text-[13px] leading-[1.6] text-[var(--color-dolphin)]">
                    <span className="font-bold text-[var(--color-haiti)]">
                      {t({
                        en: "We use cookies",
                        nl: "Wij gebruiken cookies",
                      })}
                    </span>
                    <span
                      className="mx-1.5 hidden text-[var(--color-slate-300)] sm:inline"
                      aria-hidden
                    >
                      —
                    </span>
                    <span className="block sm:inline">
                      {t({
                        en: "We use cookies to make this website work properly and to understand how it's used. You can accept all, reject non-essential, or choose which ones to allow.",
                        nl: "We gebruiken cookies om deze website goed te laten werken en om te begrijpen hoe deze wordt gebruikt. Je kunt alle cookies accepteren, niet-essentiële cookies weigeren of zelf kiezen welke cookies je toestaat.",
                      })}{" "}
                      <Link
                        href={t({
                          en: "/cookie-policy",
                          nl: "/nl/cookie-policy",
                        })}
                        className="underline text-[var(--color-violet-42)] hover:text-[var(--color-violet-58)] font-medium"
                      >
                        {t({ en: "Cookie Policy", nl: "Cookiebeleid" })}
                      </Link>
                      {" · "}
                      <Link
                        href={t({
                          en: "/privacy-policy",
                          nl: "/nl/privacy-policy",
                        })}
                        className="underline text-[var(--color-violet-42)] hover:text-[var(--color-violet-58)] font-medium"
                      >
                        {t({ en: "Privacy Policy", nl: "Privacybeleid" })}
                      </Link>
                    </span>
                  </p>
                </div>

                {/* Actions */}
                <div className="flex flex-shrink-0 flex-col gap-2 sm:flex-row sm:items-center lg:ml-auto">
                  <div className="flex gap-2">
                    <button
                      onClick={rejectAll}
                      className="btn btn--secondary btn--sm flex-1 sm:flex-none"
                      style={{ whiteSpace: "normal" }}
                    >
                      {t({
                        en: "Reject non-essential",
                        nl: "Niet-essentiële cookies weigeren",
                      })}
                    </button>
                    <button
                      onClick={openPanel}
                      className="btn btn--secondary btn--sm flex-1 sm:flex-none"
                      style={{ whiteSpace: "normal" }}
                    >
                      {t({ en: "Manage preferences", nl: "Voorkeuren beheren" })}
                    </button>
                  </div>
                  <button
                    onClick={acceptAll}
                    className="btn btn--primary btn--sm w-full sm:w-auto"
                  >
                    {t({ en: "Accept all", nl: "Alles accepteren" })}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Preferences Panel */}
      <AnimatePresence>
        {panelOpen && (
          <PreferencesPanel
            prefs={prefs}
            onPrefsChange={setPrefs}
            onSave={savePrefs}
            onAcceptAll={acceptAll}
            onClose={() => setPanelOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* WhatsApp FAB — always visible */}
      <a
        href="https://wa.me/31857444176"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        style={{ "--cc-bar-h": `${barHeight}px` } as CSSProperties}
        className="fixed z-[1400] bottom-[calc(52px+12px+var(--cc-bar-h,0px))] right-4 lg:bottom-[calc(24px+var(--cc-bar-h,0px))] top-auto sm:right-6 group w-12 h-12 rounded-full flex items-center justify-center shadow-lg border border-[var(--color-mist)] bg-white transition-[bottom,transform] duration-300 hover:scale-110 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-violet-42)]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="w-6 h-6 text-[var(--color-violet-42)] fill-[var(--color-violet-42)]"
          aria-hidden
        >
          <path d="M16 2C8.268 2 2 8.268 2 16c0 2.52.664 4.882 1.822 6.928L2 30l7.302-1.79A13.9 13.9 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2Zm0 25.4a11.47 11.47 0 0 1-5.852-1.606l-.42-.25-4.332 1.064 1.094-4.21-.273-.432A11.384 11.384 0 0 1 4.6 16C4.6 9.7 9.7 4.6 16 4.6S27.4 9.7 27.4 16 22.3 27.4 16 27.4Zm6.26-8.48c-.342-.172-2.024-1-2.338-1.112-.314-.114-.542-.172-.77.172-.228.342-.884 1.112-1.082 1.342-.2.228-.4.258-.742.086-.342-.172-1.444-.532-2.75-1.696-1.016-.906-1.702-2.026-1.902-2.368-.2-.342-.022-.526.15-.698.156-.154.342-.4.514-.6.17-.2.228-.342.342-.57.114-.228.056-.428-.028-.6-.086-.172-.77-1.856-1.056-2.542-.278-.668-.56-.578-.77-.588l-.656-.012c-.228 0-.6.086-.914.428s-1.2 1.172-1.2 2.856 1.228 3.312 1.4 3.542c.17.228 2.416 3.688 5.854 5.172.818.354 1.456.566 1.954.724.82.262 1.568.226 2.158.138.658-.1 2.024-.828 2.31-1.626.284-.8.284-1.484.2-1.626-.086-.142-.314-.228-.656-.4Z" />
        </svg>
        <span className="pointer-events-none absolute right-full mr-2 whitespace-nowrap rounded-lg bg-[var(--color-haiti)] px-3 py-1.5 text-[12px] font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity duration-150 shadow-md">
          WhatsApp
        </span>
      </a>
    </>
  );
}
