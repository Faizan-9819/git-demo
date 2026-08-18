type BlogMetaProps = {
  publishedAt: string;
  readTime: string;
  author?: string;
  variant?: "default" | "light";
};

function CalendarIcon({
  variant = "default",
}: {
  variant?: "default" | "light";
}) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className={`size-4 ${variant === "light" ? "text-white/90" : "text-[var(--color-violet-42)]"}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="4" y="5.5" width="16" height="14" rx="2.5" />
      <path d="M8 3.5v4M16 3.5v4M4 9.5h16" />
    </svg>
  );
}

function ClockIcon({ variant = "default" }: { variant?: "default" | "light" }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className={`size-4 ${variant === "light" ? "text-white/90" : "text-[var(--color-violet-42)]"}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v4.5l3 1.5" />
    </svg>
  );
}

function UserIcon({ variant = "default" }: { variant?: "default" | "light" }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className={`size-4 ${variant === "light" ? "text-white/90" : "text-[var(--color-violet-42)]"}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
    </svg>
  );
}

export default function BlogMeta({
  publishedAt,
  readTime,
  author,
  variant = "default",
}: BlogMetaProps) {
  const textColor =
    variant === "light" ? "text-white/90" : "text-[var(--color-dolphin)]";
  const dividerColor =
    variant === "light" ? "bg-white/30" : "bg-[var(--color-slate-200)]";

  return (
    <div
      className={`flex flex-wrap items-center gap-1 lg:gap-3 font-poppins text-[12px] lg:text-[14px] font-medium ${textColor}`}
    >
      {author && (
        <>
          <div className="flex items-center gap-2">
            <UserIcon variant={variant} />
            <span>{author}</span>
          </div>
          <span className={`h-5 w-px ${dividerColor}`} />
        </>
      )}
      <div className="flex items-center gap-2">
        <CalendarIcon variant={variant} />
        <span>{publishedAt}</span>
      </div>
      <span className={`h-5 w-px ${dividerColor}`} />
      <div className="flex items-center gap-2">
        <ClockIcon variant={variant} />
        <span>{readTime}</span>
      </div>
    </div>
  );
}
