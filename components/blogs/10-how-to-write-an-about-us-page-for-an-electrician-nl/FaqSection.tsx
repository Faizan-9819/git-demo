import InlineLink from "./InlineLink";

const FAQS = [
  {
    q: "Hoe lang hoort de over-ons-pagina van een elektricien te zijn?",
    a: (
      <>
        Mik op 400 tot 700 woorden lopende tekst, plus teamfoto&rsquo;s en een
        certificeringenblok. Lang genoeg om de zes te dekken, kort genoeg dat
        niets wordt overgeslagen.
      </>
    ),
  },
  {
    q: "Moet ik prijzen op de over-ons-pagina zetten?",
    a: "Geen volledige prijzen, maar één zin over hoe je met prijzen omgaat helpt wel. Iets als “je krijgt een vaste offerte vóór we beginnen” beantwoordt de meest voorkomende klantzorg zonder je aan bedragen vast te leggen.",
  },
  {
    q: "Heb ik een professionele fotograaf nodig?",
    a: "Voor team- en oprichtersfoto's is dat het mooist — of in elk geval iemand met een goede camera en daglicht. Telefoonfoto's werken prima als ze goed belicht zijn en het gezicht duidelijk tonen. Stockfoto's laat je helemaal achterwege.",
  },
  {
    q: "Wat als ik alleen werk?",
    a: "De over-ons-pagina van een zzp'er is vaak juist stérker dan een teampagina, omdat de klant precies weet wie er voor de deur staat. Open met je naam, je foto, je ervaringsjaren en het soort werk waar je je op richt.",
  },
  {
    q: "Moet ik klantreviews op de over-ons-pagina zetten?",
    a: "Een klein aantal (twee of drie) werkt goed onderaan de pagina. Volledige reviewsecties horen op een aparte pagina of de homepage, zodat de over-ons-pagina over jou en je team blijft gaan.",
  },
  {
    q: "Hoe vaak moet ik de over-ons-pagina bijwerken?",
    a: "Loop hem één keer per jaar na. Vernieuw teamfoto's bij personeelswisselingen, voeg nieuwe certificeringen toe zodra je ze haalt, en fris de oprichtersnoot op als je focus is verschoven.",
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
