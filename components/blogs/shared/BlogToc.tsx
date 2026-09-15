"use client";

import { useEffect, useRef, useState } from "react";
import type { BlogTocEntry } from "@/app/lib/blog-content-types";

export type TocEntry = BlogTocEntry;

export default function BlogToc({ entries }: { entries: TocEntry[] }) {
  const [activeId, setActiveId] = useState("");
  const entriesRef = useRef(entries);
  entriesRef.current = entries;

  useEffect(() => {
    function updateActive() {
      const ids = entriesRef.current.map((entry) => entry.id);
      // The active heading is the last one whose top has scrolled past the
      // activation line — walking in document order picks the section
      // currently being read, not just whichever last fired an IO callback.
      const activationLine = 140;
      let current = ids[0] ?? "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= activationLine) {
          current = id;
        } else {
          break;
        }
      }
      setActiveId(current);
    }

    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive);
    return () => {
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
    };
  }, []);

  if (entries.length === 0) return null;

  return (
    <aside className="hidden lg:block lg:w-[196px] lg:flex-none">
      <nav className="sticky top-[104px] flex max-h-[calc(100vh-128px)] flex-col overflow-y-auto">
        <div className="mb-3.5 font-poppins text-[11px] font-semibold uppercase tracking-[1.2px] text-[var(--color-dolphin)]">
          In this article
        </div>
        {entries.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
            }}
            className={[
              "block border-l-2 py-1.5 pl-3.5 font-poppins text-[13px] leading-relaxed transition-colors",
              activeId === id
                ? "border-[var(--color-violet-42)] font-semibold text-[var(--color-haiti)]"
                : "border-transparent text-[var(--color-dolphin)] hover:text-[var(--color-haiti)]",
            ].join(" ")}
            dangerouslySetInnerHTML={{ __html: label }}
          />
        ))}
      </nav>
    </aside>
  );
}
