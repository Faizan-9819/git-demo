import InlineLink from "./InlineLink";

const FAQS = [
  {
    q: "Is WordPress gratis voor elektriciens?",
    a: "De software is gratis, maar een bruikbare elektriciensite op WordPress niet. Reken op €500 tot €2.500 voor een freelancerbouw, plus €15 tot €30 per maand hosting, plus module- en onderhoudskosten. Het “gratis” aan WordPress is de licentie — al het andere kost geld of tijd.",
  },
  {
    q: "Hoe lang duurt het om een website voor een installatiebedrijf te lanceren?",
    a: "Een website-abonnement staat doorgaans binnen 7 dagen live. Een WordPress-bouw door een freelancer duurt meestal 2 tot 6 weken, afhankelijk van correctierondes en hoe snel jij je materiaal aanlevert.",
  },
  {
    q: "Kan ik later van een abonnement naar WordPress verhuizen?",
    a: (
      <>
        Soms — het hangt af van de aanbieder. Vraag vóór je een abonnement
        afsluit of je je inhoud kunt exporteren (teksten, foto&rsquo;s,
        aanvraaggegevens) en hoe dat proces eruitziet. Een nette exit-afspraak
        is een redelijke vraag. Twijfel je nog tussen , weeg dan ook die route
        mee.
      </>
    ),
  },
  {
    q: "Wordt WordPress beter gevonden op Google dan een website-abonnement?",
    a: "Niet vanzelf. Beide kunnen goed scoren op lokale zoekopdrachten als “elektricien [plaats]”. Wat zwaarder weegt: je Google Bedrijfsprofiel, je reviews, je lokale inhoud en de snelheid van je site — en die zijn op beide platforms haalbaar.",
  },
  {
    q: "Is een beheerde website echt goedkoper dan WordPress?",
    a: "Over drie jaar gerekend vaak wel — zodra je hosting, modules en onderhoudstijd meetelt. WordPress kan goedkoper zijn als je al het onderhoud zelf doet en je tijd werkelijk niets kost.",
  },
  {
    q: "Hoe zit het met beveiliging?",
    a: "WordPress-sites zijn een geliefd doelwit, juist omdat het platform zo veel wordt gebruikt. Modules, thema's en de kern bijgewerkt houden is essentieel, net als regelmatige back-ups. Bij een abonnement regelt de aanbieder dit als onderdeel van de dienst. Maak je je zorgen over beveiliging en wil je het niet zelf beheren, dan is dat een sterke reden om voor een abonnement te kiezen.",
  },
];
export default function FaqSection() {
  return (
    <section id="faq" className="scroll-mt-24">
      <h2 className="mt-24 max-w-[720px] text-balance font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
        Frequently asked questions
      </h2>
      <div className="mt-7 overflow-hidden rounded-[14px] border border-[#E6E8EF] bg-[#F8F9FC]">
        {FAQS.map((item, i) => (
          <details
            key={item.q}
            className={"group " + (i > 0 ? "border-t border-[#E6E8EF]" : "")}
          >
            <summary className="flex min-h-[60px] cursor-pointer list-none items-center justify-between gap-6 px-7 py-6">
              <span className="font-sans text-lg font-semibold text-[#1F2937]">
                {item.q}
              </span>
              <span
                aria-hidden="true"
                className="flex-none font-sans text-[22px] font-normal leading-none text-[#9AA1AC] transition-transform duration-200 group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="max-w-[700px] px-7 pb-6 font-sans text-base leading-[1.63] text-[#6B7280]">
              {item.a}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
