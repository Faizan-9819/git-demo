const FAQS = [
  {
    q: "Wat is de goedkoopste manier om een elektricienwebsite te maken?",
    a: "Zelf bouwen met Wix of Squarespace is op papier het goedkoopst — zo'n €150 tot €400 in het eerste jaar. De echte kostenpost is je tijd. Waardeer je je uren op zelfs maar €30, dan komt één bouwweekend al snel in de buurt van een ontzorgd jaarabonnement.",
  },
  {
    q: "Is een freelancer beter dan een ontzorgde websitedienst?",
    a: "Een freelancer past beter als je een volledig eigen ontwerp wilt en de site helemaal in eigendom wilt hebben. Een ontzorgde dienst past beter als je de site gebouwd, gehost, bijgewerkt en onderhouden wilt hebben voor één vast bedrag — zonder losse facturen na te jagen.",
  },
  {
    q: "Hoe lang duurt het om een elektricien website te maken?",
    a: "Zelf bouwen: 2 weken tot 3 maanden of langer. Freelancer: gemiddeld 4 tot 8 weken. Volledig ontzorgd: meestal 5 tot 10 dagen, omdat de aanbieder op beproefde structuren bouwt.",
  },
  {
    q: "Levert een website mij echt meer klussen op?",
    a: "Een website alleen niet. Een website die is gekoppeld aan je Google Bedrijfsprofiel, met echte reviews, een helder dienstenaanbod en een eenvoudige manier om contact op te nemen, meestal wel. Welk model je kiest, weegt minder zwaar dan of die drie onderdelen goed staan.",
  },
  {
    q: "Kan ik mijn website later meenemen naar een andere aanbieder?",
    a: "Bij zelfbouw- en freelancersites meestal wel — de bestanden en het domein zijn van jou. Bij ontzorgde diensten verschilt het. Vraag vóór je tekent of je je teksten kunt exporteren en je domein kunt behouden als je vertrekt.",
  },
  {
    q: "Heb ik een boekingssysteem nodig, of is een contactformulier genoeg?",
    a: "Voor de meeste kleine elektriciens is een eenvoudig aanvraagformulier genoeg om te beginnen. Een boekingssysteem wordt waardevol zodra je regelmatig belafspraken, offertes of bezoeken inplant — en wilt stoppen met eindeloos over en weer bellen.",
  },
];

export default function FaqSection() {
  return (
    <section id="faq" className="scroll-mt-24">
      <h2 className="mt-24 max-w-[720px] text-balance font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
        Veelgestelde vragen
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
