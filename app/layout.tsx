import type { Metadata } from "next";
import {
  Inter,
  Plus_Jakarta_Sans,
  Bricolage_Grotesque,
  Poppins,
} from "next/font/google";
import Script from "next/script";
import "./globals.css";
import "lenis/dist/lenis.css";
import Analytics from "./components/Analytics";
import CookieConsent from "./components/CookieConsent";
import JsonLd from "./components/JsonLd";
import LenisProvider from "./components/LenisProvider";
import StickyActions from "./components/StickyActions";
import Navbar from "./components/Navbar";
import SiteFooter from "./components/SiteFooter";
import { LanguageProvider } from "./i18n/LanguageProvider";
import { DEFAULT_LOCALE } from "./i18n/config";
import {
  buildOrganizationSchema,
  buildWebsiteSchema,
  SITE_URL,
} from "./lib/seo";

const GTM_ID = "GTM-NRP9SSXD";
const GA_ID = "G-12W07KV2LM";
const GADS_ID = "AW-18192680995";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  icons: { icon: "/favicon.ico" },
  title: "Professional Websites for Small Businesses | Growth Rocket",
  description:
    "A professional website for your small business — built, hosted and managed for you. Fixed yearly price, live in 7 days. See how it works.",
  alternates: {
    canonical: "/",
    languages: {
      en: `${SITE_URL}/`,
      nl: `${SITE_URL}/nl/`,
    },
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Growth Rocket",
    title: "Professional Websites for Small Businesses | Growth Rocket",
    description:
      "A professional website for your small business — built, hosted and managed for you. Fixed yearly price, live in 7 days. See how it works.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Websites for Small Businesses | Growth Rocket",
    description:
      "A professional website for your small business — built, hosted and managed for you. Fixed yearly price, live in 7 days. See how it works.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialLocale = DEFAULT_LOCALE;

  return (
    <html
      lang="en"
      className={`${inter.variable} ${jakarta.variable} ${bricolage.variable} ${poppins.variable} suppressHydrationWarning`}
    >
      <body className="antialiased" suppressHydrationWarning>
        {/* GTM noscript fallback — must be first in body for Google verification */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* Google Ads base tag — unconditional so Google can verify it */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GADS_ID}`}
          strategy="afterInteractive"
        />
        <Script id="gads-base" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GADS_ID}');
        `}</Script>
        <JsonLd data={buildWebsiteSchema()} />
        <JsonLd data={buildOrganizationSchema()} />
        <LanguageProvider initialLocale={initialLocale}>
          <LenisProvider>
            <Navbar />
            {children}
            <SiteFooter />
            <StickyActions />
            <CookieConsent />
          </LenisProvider>
        </LanguageProvider>
        <Analytics gtmId={GTM_ID} gaId={GA_ID} />
      </body>
    </html>
  );
}
