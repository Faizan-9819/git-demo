import { ChevronLeft, ChevronRight } from "lucide-react";

export default function CarouselButton({
  direction,
  disabled,
  onClick,
}: {
  direction: "prev" | "next";
  disabled: boolean;
  onClick: () => void;
}) {
  const Icon = direction === "prev" ? ChevronLeft : ChevronRight;
  const label = direction === "prev" ? "Previous" : "Next";
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className="inline-flex size-11 items-center justify-center rounded-full border border-[var(--color-violet-92)] bg-white text-[var(--color-violet-42)] transition-all hover:-translate-y-[1px] hover:border-[var(--color-violet-76)] disabled:pointer-events-none disabled:opacity-40"
    >
      <Icon size={20} strokeWidth={2.25} aria-hidden />
    </button>
  );
}
