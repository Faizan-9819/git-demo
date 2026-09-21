import type { ReactNode } from "react";

/**
 * The feature-row icons shared by the two places that list what the package
 * includes: `home2/Solution.tsx` and `pricing/OfferCards.tsx`.
 *
 * Only the path geometry lives here, not a finished `<svg>`. The two folds draw
 * the same marks at different sizes — 23px in the Solution card, 19px in the
 * narrower pricing card — so each one wraps these in its own `<svg>` with its
 * own dimensions and keeps the shared stroke attributes.
 *
 * This module carries no `"use client"` directive on purpose: `Solution.tsx` is
 * a client component and `OfferCards.tsx` is a server one, and a directive here
 * would bind the icons to one side of that boundary.
 *
 * All paths are drawn on the same 24×24 grid with a 1.65 stroke, no fill, and
 * round caps and joins — the attributes the source markup used.
 */
export type FeatureIconName =
  | "pages"
  | "mobileSeo"
  | "video"
  | "forms"
  | "domain"
  | "hosting"
  | "maintenance"
  | "leads"
  | "booking"
  | "customers"
  | "quotes"
  | "invoices"
  | "support";

export const FEATURE_ICON_PATHS: Record<FeatureIconName, ReactNode> = {
  /* A page in front of a second one — "8–10 pages". */
  pages: (
    <>
      <rect x="6" y="3" width="14" height="16" rx="2" />
      <path d="M3 7v12a3 3 0 0 0 3 3h10M10 8h6M10 12h6" />
    </>
  ),

  /* A handset with a magnifier on its screen: the two halves of
     "Mobile-friendly & SEO-ready" in one mark. */
  mobileSeo: (
    <>
      <rect x="5" y="2" width="14" height="20" rx="3" />
      <path d="M10 5h4" />
      <circle cx="12" cy="11.5" r="2.75" />
      <path d="m14.1 13.6 1.9 1.9" />
    </>
  ),

  /* A camera body with its lens barrel — the 30-second business video. */
  video: (
    <>
      <rect x="2" y="5" width="14" height="14" rx="3" />
      <path d="m16 10 5-3v10l-5-3" />
    </>
  ),

  forms: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M7 8h10M7 12h5M14 16h3M7 16h2" />
    </>
  ),

  domain: (
    <>
      <circle cx="12" cy="12" r="9" />
      <ellipse cx="12" cy="12" rx="4" ry="9" />
      <path d="M3 12h18" />
    </>
  ),

  hosting: (
    <>
      <path d="m12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6l8-3Z" />
      <path d="m8 12 3 3 5-6" />
    </>
  ),

  maintenance: (
    <path d="M20 8a8 8 0 0 0-14-3L3 8m0-5v5h5M4 16a8 8 0 0 0 14 3l3-3m0 5v-5h-5" />
  ),

  leads: (
    <>
      <path d="m5 4-3 9v7h20v-7l-3-9H5Z" />
      <path d="M2 13h6l2 3h4l2-3h6M12 3v7m-3-3 3 3 3-3" />
    </>
  ),

  booking: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="3" />
      <path d="M7 2v6M17 2v6M3 11h18m-13 5 2 2 4-4" />
    </>
  ),

  customers: (
    <>
      <circle cx="9" cy="7" r="3" />
      <path d="M3 21v-3a6 6 0 0 1 12 0v3M16 4a3 3 0 0 1 0 6m2 4a5 5 0 0 1 3 4v3" />
    </>
  ),

  quotes: <path d="M14 2H5v20h14V7l-5-5Zm0 0v5h5M8 12h8M8 16h5" />,

  invoices: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M16 7h-5a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h5M6 10h8M6 14h7" />
    </>
  ),

  /* A headset — "Help & support requests". */
  support: (
    <>
      <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
      <rect x="2" y="13" width="4.5" height="6" rx="2" />
      <rect x="17.5" y="13" width="4.5" height="6" rx="2" />
      <path d="M20 19a3 3 0 0 1-3 3h-2.5" />
    </>
  ),
};
