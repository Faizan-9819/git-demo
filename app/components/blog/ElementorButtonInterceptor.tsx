"use client";

import { useEffect } from "react";

/**
 * Listens for clicks on Elementor CTA buttons inside `.blog-content` and
 * opens the lead form instead of following the link.
 *
 * The WordPress Elementor buttons typically link to a contact or demo URL.
 * We intercept those and fire the same `open-lead-form` custom event that
 * StickyActions listens to, so no extra state is needed.
 */
export default function ElementorButtonInterceptor() {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const target = e.target as HTMLElement;
      const button = target.closest<HTMLAnchorElement>(
        ".blog-content .elementor .elementor-button",
      );
      if (!button) return;
      e.preventDefault();
      e.stopPropagation();
      window.dispatchEvent(new CustomEvent("open-lead-form"));
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
