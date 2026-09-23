"use client";

import { usePathname } from "next/navigation";
import Footer2 from "./sections/home2/Footer2";

/**
 * Routes that take the footer from here but not its contact fold — the legal
 * boilerplate, which has no business closing on a sales pitch; /contact, which
 * is already the page that CTA points at; /about, which ends on `AboutClosing`
 * (about.css paints `.about-closing` lime, the same lime the contact fold uses)
 * so the two would read as one fold that repeated itself; and the /designs
 * index, which ends on `DesignsCta` — lime again, and already a "start with
 * Growth Rocket" pitch of its own. Everything else gets it.
 *
 * This list exists because a page rendered into the layout's footer slot has no
 * way to pass `showContactCta` down; routes that mount {@link Footer2} directly
 * (home2) pass the prop instead.
 */
const NO_CONTACT_CTA = new Set([
  "/about",
  "/contact",
  "/designs",
  "/privacy-policy",
  "/imprint",
  "/cookie-policy",
  "/terms-and-conditions",
]);

/**
 * Prefixes whose pages opt out the same way. `/designs/<slug>` is a dynamic
 * route, so it cannot be listed above by name: each design page ends on
 * `DesignClose`, which dentalcare.css paints lime (`.dc-close{background:
 * var(--dc-green)}`) — the same lime as the contact fold, so the two would read
 * as one fold that repeated itself, exactly as on /about.
 */
const NO_CONTACT_CTA_PREFIXES = ["/designs/"];

/**
 * The root layout's footer slot.
 *
 * home2 ships {@link Footer2} itself as the last fold inside HomeShell, so this
 * stands down there rather than printing a second copy underneath. Everywhere
 * else it supplies what HomeShell would have: the 14px page gutter and the
 * shared content rail, so the footer card sits inset from the viewport edge the
 * way it does on home2 instead of running full-bleed with its radius pinned to
 * the corners. Footer2 brings its own loop strip and contact fold along either
 * way.
 */
export default function SiteFooter() {
  const pathname = usePathname() || "/";
  if (pathname === "/home2" || pathname === "/nl/home2") return null;

  // The NL routes are the same pages behind a locale prefix, so they match on
  // the unprefixed path rather than being listed twice.
  const route = pathname.startsWith("/nl/")
    ? pathname.slice(3)
    : pathname === "/nl"
      ? "/"
      : pathname;

  const hideContactCta =
    NO_CONTACT_CTA.has(route) ||
    NO_CONTACT_CTA_PREFIXES.some((prefix) => route.startsWith(prefix));

  return (
    <div className="bg-white px-3.5 pb-3.5">
      <div className="mx-auto max-w-473">
        <Footer2 showContactCta={!hideContactCta} />
      </div>
    </div>
  );
}
