"use client";

import { useEffect, useRef, useState } from "react";

type Tab = { label: string; anchor: string };

export default function TemplatePagePreviewNav({ tabs }: { tabs: Tab[] }) {
  const [activeAnchor, setActiveAnchor] = useState(tabs[0]?.anchor ?? "");
  const observerRef = useRef<IntersectionObserver | null>(null);
  const intersectingRef = useRef<Set<string>>(new Set());

  useEffect(() => {
    intersectingRef.current = new Set();

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const anchor = entry.target.id.replace("template-", "");
          if (entry.isIntersecting) {
            intersectingRef.current.add(anchor);
          } else {
            intersectingRef.current.delete(anchor);
          }
        });

        // Multiple compact preview blocks can be inside the active zone at
        // once — the correct "current" section is the furthest one scrolled
        // to, i.e. the last intersecting tab in document order.
        for (let i = tabs.length - 1; i >= 0; i--) {
          if (intersectingRef.current.has(tabs[i].anchor)) {
            setActiveAnchor(tabs[i].anchor);
            break;
          }
        }
      },
      { rootMargin: "0px 0px -70% 0px", threshold: 0 },
    );

    tabs.forEach(({ anchor }) => {
      const el = document.getElementById(`template-${anchor}`);
      if (el) observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, [tabs]);

  return (
    <nav className="hidden lg:sticky lg:top-[120px] lg:flex lg:flex-col lg:gap-1">
      {tabs.map((tab) => {
        const isActive = activeAnchor === tab.anchor;
        return (
          <a
            key={tab.anchor}
            href={`#template-${tab.anchor}`}
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById(`template-${tab.anchor}`)
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className={
              "rounded-lg px-3 py-2 font-poppins text-[14px] transition-colors " +
              (isActive
                ? "bg-[var(--color-violet-98)] font-semibold text-[var(--color-violet-42)]"
                : "text-[var(--color-dolphin)] hover:bg-[var(--color-violet-98)] hover:text-[var(--color-violet-42)]")
            }
          >
            {tab.label}
          </a>
        );
      })}
    </nav>
  );
}
