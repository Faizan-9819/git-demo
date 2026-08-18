"use client";

import { useEffect, useRef, useState } from "react";
import SummarizeWithAI from "./SummarizeWithAI";

type Heading = { id: string; text: string; level: number };

export default function TableOfContents({ headings }: { headings: Heading[] }) {
  const [activeId, setActiveId] = useState<string>("");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "0px 0px -70% 0px", threshold: 0 },
    );

    headings.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, [headings]);

  return (
    <aside className="hidden lg:flex flex-col gap-5 sticky top-[90px] self-start max-h-[calc(100vh-110px)]">
      {headings.length > 0 && (
        <div className="flex min-h-0 flex-col rounded-2xl bg-white p-6 shadow-sm">
          <p className="font-poppins text-[13px] font-semibold uppercase tracking-[1.5px] text-[var(--color-violet-42)]">
            Table of Contents
          </p>
          <nav
            className="toc-scroll mt-2 min-h-0 flex-1 overflow-y-auto pr-2"
            data-lenis-prevent
          >
            <ul className="space-y-0">
              {headings.map(({ id, text, level }) => (
                <li
                  key={id}
                  style={{
                    paddingLeft:
                      level === 3 ? "12px" : level === 4 ? "20px" : "0px",
                  }}
                >
                  <a
                    href={`#${id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById(id)
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className={[
                      "block py-1 font-poppins text-[14px] leading-relaxed transition-colors",
                      activeId === id
                        ? "font-semibold text-[var(--color-violet-42)]"
                        : "text-[var(--color-dolphin)] hover:text-[var(--color-violet-42)]",
                    ].join(" ")}
                    dangerouslySetInnerHTML={{ __html: text }}
                  />
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}

      <SummarizeWithAI />

      <style jsx global>{`
        .toc-scroll::-webkit-scrollbar {
          width: 5px;
        }
        .toc-scroll::-webkit-scrollbar-track {
          background: transparent;
        }
        .toc-scroll::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #5b219f 0%, #922698 100%);
          border-radius: 999px;
        }
        .toc-scroll::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #7c3aed 0%, #a21caf 100%);
        }
        .toc-scroll {
          scrollbar-width: thin;
          scrollbar-color: #7c2ba0 transparent;
        }
      `}</style>
    </aside>
  );
}
