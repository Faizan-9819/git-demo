"use client";

import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { useEffect, useState } from "react";
import {
  COOKIE_CONSENT_EVENT,
  COOKIE_CONSENT_NAME,
  type ConsentPrefs,
  type ConsentValue,
} from "./CookieConsent";

type StoredConsent = { consent: ConsentValue; prefs: ConsentPrefs };

const DEFAULT_PREFS: ConsentPrefs = { analytics: false, marketing: false, functional: false };

const GADS_CONVERSION = "AW-18192680995/lhYiCM_hqLQcEKOQ-eJD";

function readStoredConsent(): StoredConsent {
  if (typeof document === "undefined") return { consent: "pending", prefs: DEFAULT_PREFS };
  try {
    const raw = localStorage.getItem(COOKIE_CONSENT_NAME);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed.consent === "granted" || parsed.consent === "denied") {
        return { consent: parsed.consent, prefs: parsed.prefs ?? DEFAULT_PREFS };
      }
    }
    // Fallback: check the plain cookie value (legacy or SSR-set)
    const match = document.cookie.match(new RegExp(`(?:^|; )${COOKIE_CONSENT_NAME}=([^;]+)`));
    if (match) {
      const v = decodeURIComponent(match[1]);
      if (v === "granted") return { consent: "granted", prefs: { analytics: true, marketing: true, functional: true } };
      if (v === "denied") return { consent: "denied", prefs: DEFAULT_PREFS };
    }
  } catch {}
  return { consent: "pending", prefs: DEFAULT_PREFS };
}

export default function Analytics({
  gtmId,
  gaId,
}: {
  gtmId: string;
  gaId: string;
}) {
  const [prefs, setPrefs] = useState<ConsentPrefs>(DEFAULT_PREFS);
  const [resolved, setResolved] = useState(false);

  useEffect(() => {
    const { prefs: stored } = readStoredConsent();
    setPrefs(stored);
    setResolved(true); // gate GA4 until client-side consent is read

    const handler = (event: Event) => {
      const detail = (event as CustomEvent<{ consent?: ConsentValue; prefs?: ConsentPrefs }>).detail;
      if (detail?.prefs) {
        setPrefs(detail.prefs);
      } else if (detail?.consent === "granted") {
        setPrefs({ analytics: true, marketing: true, functional: true });
      } else if (detail?.consent === "denied") {
        setPrefs(DEFAULT_PREFS);
      }
    };

    window.addEventListener(COOKIE_CONSENT_EVENT, handler);
    return () => window.removeEventListener(COOKIE_CONSENT_EVENT, handler);
  }, []);

  return (
    <>
      {/* GTM loads unconditionally — required for Google verification */}
      <GoogleTagManager gtmId={gtmId} />
      {/* GA4 only loads after analytics consent */}
      {resolved && prefs.analytics && <GoogleAnalytics gaId={gaId} />}
    </>
  );
}

/** Call this after a successful lead form submission to fire the Google Ads conversion event. */
export function fireLeadConversion() {
  if (typeof window === "undefined") return;
  const w = window as typeof window & { gtag?: (...args: unknown[]) => void };
  if (typeof w.gtag === "function") {
    w.gtag("event", "conversion", {
      send_to: GADS_CONVERSION,
      value: 1.0,
      currency: "INR",
    });
  }
}
