"use client";

import Button from "../../components/ui/Button";

export default function TemplateHeroCTAs({
  href,
  price,
}: {
  href: string;
  price: string;
}) {
  return (
    <div className="mt-[24px] flex flex-wrap items-center justify-end gap-[12px]">
      <Button
        onClick={() => window.dispatchEvent(new CustomEvent("open-lead-form"))}
        arrow="up-right"
      >
        Start With This Template
      </Button>
      <Button
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        variant="secondary"
        arrow="up-right"
      >
        Preview design
      </Button>
    </div>
  );
}
