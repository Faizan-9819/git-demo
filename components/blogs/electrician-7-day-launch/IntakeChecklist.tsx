const ITEMS = [
  "Your business name",
  "KvK number",
  "A brief company intro",
  "Service area",
  "Your services (groepenkast, laadpaal…)",
  "5–10 project photos (phone is fine)",
  "Your logo (if you have one)",
  "Phone number",
  "Email address",
  "Opening hours",
];

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <polyline points="4 12.5 9.5 18 20 6" />
    </svg>
  );
}

export default function IntakeChecklist() {
  return (
    <div className="mt-10 rounded-2xl border border-[var(--color-violet-92)] bg-white p-6 shadow-[0_1px_3px_rgba(16,24,40,0.04)] sm:p-8 lg:p-11">
      <div className="grid gap-5 sm:grid-cols-2 sm:gap-x-12">
        {ITEMS.map((item) => (
          <div key={item} className="flex items-start gap-3.5">
            <span className="mt-0.5 flex-none text-[var(--color-violet-42)]">
              <CheckIcon />
            </span>
            <span
              className="font-poppins text-[17px] leading-[26px] text-[var(--color-haiti)]"
              dangerouslySetInnerHTML={{ __html: item }}
            />
          </div>
        ))}
      </div>
      <div className="mt-8 flex flex-wrap items-baseline gap-3 border-t border-[var(--color-violet-92)] pt-6">
        <span className="font-poppins text-2xl font-bold tracking-[-0.3px] text-[var(--color-haiti)]">
          That&apos;s all.
        </span>
        <span className="font-poppins text-[15px] text-[var(--color-dolphin)]">
          No lengthy questionnaires, no briefing documents, no weeks of planning meetings.
        </span>
      </div>
    </div>
  );
}
