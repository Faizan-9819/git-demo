const CARDS = [
  {
    tag: "Presence",
    title: "A professional website",
    body: "Designed to clearly present your services, build trust, and make it easy to contact you. Every page is mobile-friendly, professionally written, and structured to help visitors find what they need.",
    icon: (
      <>
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <line x1="3" y1="8" x2="21" y2="8" />
      </>
    ),
  },
  {
    tag: "Enquiries",
    title: "A better way to capture enquiries",
    body: "Contact forms, appointment system and customer contact options are connected before launch. Whether someone wants a quote, an appointment or a question answered, your website is ready from day one.",
    icon: (
      <>
        <path d="M4 5h16v11H8l-4 4z" />
        <line x1="8" y1="9" x2="16" y2="9" />
        <line x1="8" y1="12" x2="13" y2="12" />
      </>
    ),
  },
  {
    tag: "Growth Rocket Hub",
    title: "One place to stay organised",
    body: "Instead of enquiries scattered across emails, forms and messaging apps, the Growth Rocket Hub keeps customer enquiries in one place — so you always know where new work is coming from.",
    icon: (
      <>
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" />
      </>
    ),
  },
  {
    tag: "Support",
    title: "Ongoing support after launch",
    body: "Most website projects end at launch. Growth Rocket doesn't. Hosting, maintenance, updates and support remain part of the service — so you never have to find someone every time you need a small change.",
    icon: (
      <>
        <path d="M4 13a8 8 0 0 1 16 0" />
        <rect x="2.5" y="13" width="4" height="6" rx="1.5" />
        <rect x="17.5" y="13" width="4" height="6" rx="1.5" />
        <path d="M20 19a4 4 0 0 1-4 3.5h-2" />
      </>
    ),
  },
];

export default function WhatYouGetCards() {
  return (
    <div className="mt-11 grid gap-5 sm:grid-cols-2">
      {CARDS.map((card) => (
        <div
          key={card.title}
          className="rounded-2xl border border-[var(--color-violet-92)] p-6 transition-colors hover:border-[var(--color-violet-76)] sm:p-8"
        >
          <div className="flex items-center justify-between">
            <div className="flex size-11 items-center justify-center rounded-[11px] bg-[var(--color-violet-98)] text-[var(--color-violet-42)]">
              <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                {card.icon}
              </svg>
            </div>
            <span
              className="font-poppins text-[11px] font-semibold uppercase tracking-[0.8px] text-[var(--color-dolphin)]"
              dangerouslySetInnerHTML={{ __html: card.tag }}
            />
          </div>
          <div
            className="mt-5 font-poppins text-[19px] font-bold text-[var(--color-haiti)]"
            dangerouslySetInnerHTML={{ __html: card.title }}
          />
          <p
            className="mt-2.5 font-poppins text-[15.5px] leading-[25px] text-[var(--color-dolphin)]"
            dangerouslySetInnerHTML={{ __html: card.body }}
          />
        </div>
      ))}
    </div>
  );
}
