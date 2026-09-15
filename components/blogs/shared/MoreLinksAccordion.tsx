"use client";

import Link from "next/link";
import BlogAccordion from "./BlogAccordion";

export type MoreLinksGroup = {
  heading: string;
  links: { label: string; href: string }[];
};

const TOGGLE_HEADER_CLASS =
  "flex w-full cursor-pointer items-center justify-between gap-5 px-6 py-5 text-left font-poppins text-lg font-semibold text-[var(--color-haiti)] sm:px-7 sm:py-6";

export default function MoreLinksAccordion({
  toggleLabel,
  groups,
}: {
  toggleLabel: string;
  groups: MoreLinksGroup[];
}) {
  return (
    <BlogAccordion
      items={[
        {
          key: toggleLabel,
          header: <span dangerouslySetInnerHTML={{ __html: toggleLabel }} />,
          headerClassName: TOGGLE_HEADER_CLASS,
          content: (
            <div className="flex flex-col gap-7 px-6 pb-6 sm:px-7 sm:pb-7">
              {groups.map((group) => (
                <div key={group.heading}>
                  <div
                    className="mb-3 font-poppins text-[11px] font-semibold uppercase tracking-[1px] text-[var(--color-dolphin)]"
                    dangerouslySetInnerHTML={{ __html: group.heading }}
                  />
                  <div className="flex flex-col gap-2.5">
                    {group.links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="flex items-baseline gap-2.5 font-poppins text-[15.5px] leading-6 text-[var(--color-haiti)] no-underline hover:text-[var(--color-violet-42)]"
                      >
                        <span className="flex-none text-[15px] text-[var(--color-violet-42)]">→</span>
                        <span dangerouslySetInnerHTML={{ __html: link.label }} />
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ),
        },
      ]}
    />
  );
}
