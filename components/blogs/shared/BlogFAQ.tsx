"use client";

import type { BlogFaqItem } from "@/app/lib/blog-content-types";
import BlogAccordion from "./BlogAccordion";

export type { BlogFaqItem };

export default function BlogFAQ({ items }: { items: BlogFaqItem[] }) {
  return (
    <BlogAccordion
      items={items.map((item) => ({
        key: item.question,
        header: <span dangerouslySetInnerHTML={{ __html: item.question }} />,
        content: (
          <div className=" px-7 pb-6 font-poppins text-base leading-[26px] text-[var(--color-dolphin)]">
            {item.answerNode ?? (
              <span dangerouslySetInnerHTML={{ __html: item.answer }} />
            )}
          </div>
        ),
      }))}
    />
  );
}
