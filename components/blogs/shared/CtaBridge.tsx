"use client";

import Button from "@/app/components/ui/Button";

type CtaBridgeProps = {
  eyebrow: string;
  body: string;
  /** No longer used — the primary button always opens the lead form. Kept optional so existing call sites don't need to change. */
  primaryHref?: string;
  primaryLabel: string;
  /** No longer used — the secondary link always opens the lead form. Kept optional so existing call sites don't need to change. */
  secondaryHref?: string;
  secondaryLabel?: string;
};

export default function CtaBridge({ eyebrow, body, primaryLabel, secondaryLabel }: CtaBridgeProps) {
  const openLeadForm = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-lead-form"));
    }
  };

  return (
    <div className="mt-14 rounded-2xl border border-[var(--color-violet-92)] bg-[var(--color-blog-panel)] p-6 sm:p-9 lg:p-10">
      <div
        className="font-poppins text-[11px] font-semibold uppercase tracking-[1.1px] text-[var(--color-dolphin)]"
        dangerouslySetInnerHTML={{ __html: eyebrow }}
      />
      <p
        className="mt-3.5 max-w-[600px] font-poppins text-lg leading-7 text-[var(--color-haiti)]"
        dangerouslySetInnerHTML={{ __html: body }}
      />
      <div className="mt-6 flex flex-wrap items-center gap-5">
        <Button onClick={openLeadForm} variant="primary" arrow="up-right">
          <span dangerouslySetInnerHTML={{ __html: primaryLabel }} />
        </Button>
        {secondaryLabel && (
          <button
            type="button"
            onClick={openLeadForm}
            className="border-b-[1.5px] border-[var(--color-violet-76)] pb-0.5 font-poppins text-sm font-semibold text-[var(--color-haiti)] no-underline"
            dangerouslySetInnerHTML={{ __html: secondaryLabel }}
          />
        )}
      </div>
    </div>
  );
}
