"use client";

import { usePathname } from "next/navigation";
import Footer2 from "./sections/home2/Footer2";

/**
 * The root layout's footer slot.
 *
 * home2 ships {@link Footer2} itself as the last fold inside HomeShell, so this
 * stands down there rather than printing a second copy underneath. Everywhere
 * else it supplies what HomeShell would have: the 14px page gutter and the
 * shared content rail, so the footer card sits inset from the viewport edge the
 * way it does on home2 instead of running full-bleed with its radius pinned to
 * the corners. Footer2 brings its own loop strip along either way.
 */
export default function SiteFooter() {
  const pathname = usePathname() || "/";
  if (pathname === "/home2" || pathname === "/nl/home2") return null;

  return (
    <div className="bg-white px-3.5 pb-3.5">
      <div className="mx-auto max-w-473">
        <Footer2 />
      </div>
    </div>
  );
}
