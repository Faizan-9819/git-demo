const FAQS = [
  {
    q: "Kan een website echt binnen 7 dagen live staan?",
    a: "Ja. Doordat Growth Rocket met een beproefde opzet en een gestructureerd productieproces werkt, is elke fase van het project al gepland voordat het werk begint. In plaats van alles vanaf nul te bouwen, richt het team zich op het afstemmen van het systeem op jouw bedrijf — waardoor je website binnen zeven dagen kan lanceren zodra de intake compleet is.",
  },
  {
    q: "Wat als ik geen foto's van mijn werk heb?",
    a: "Geen probleem. Telefoonfoto's zijn ruim voldoende om te starten, en heb je tijdens de intake nog geen bruikbare beelden, dan kan je website live gaan met professionele stockfoto's die we later vervangen door je eigen werk. Je website hoeft niet te wachten tot je fotoarchief compleet is.",
  },
  {
    q: "Moet ik de teksten zelf schrijven?",
    a: "Nee. De websiteteksten worden voor je geschreven op basis van de informatie uit je intake. Vóór de lancering kun je alles nalezen en wijzigingen doorgeven.",
  },
  {
    q: "Ik heb al een website en een domeinnaam. Kan ik overstappen?",
    a: "Zeker. Veel elektriciens stappen over omdat hun huidige site verouderd is, lastig bij te werken of niet meer bij hun bedrijf past. Je bestaande domeinnaam nemen we gewoon mee: je nieuwe website wordt er bij de lancering aan gekoppeld, zodat de overgang voor jou en je klanten soepel verloopt.",
  },
  {
    q: "Wat gebeurt er nadat mijn website live staat?",
    a: "De lanceerdag is het begin, niet het einde. Je website blijft gehost, onderhouden en ondersteund door Growth Rocket: verandert je bedrijf, dan veranderen je teksten, foto's en diensten gewoon mee. Je maakt ook kennis met de Growth Rocket Hub, waar je klantaanvragen overzichtelijk op één plek staan.",
  },
  {
    q: "Is de doorlooptijd van 7 dagen gegarandeerd?",
    a: "De planning gaat uit van een complete intake bij de start van het project. In de praktijk is de grootste oorzaak van vertraging niet de bouw zelf, maar het wachten op ontbrekende informatie. Zodra alles binnen is, is het productieproces erop ingericht je project zonder onnodige onderbrekingen door te laten lopen.",
  },
];

export default function FaqSection() {
  return (
    <section id="faq" className="scroll-mt-24">
      <h2 className="mt-24 text-balance font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
        Veelgestelde vragen
      </h2>
      <div className="mt-7 overflow-hidden rounded-[14px] border border-[#E6E8EF] bg-[#F8F9FC]">
        {FAQS.map((item, i) => (
          <details key={item.q} className={"group " + (i > 0 ? "border-t border-[#E6E8EF]" : "")}>
            <summary className="flex min-h-[60px] cursor-pointer list-none items-center justify-between gap-5 px-7 py-6">
              <span className="font-sans text-lg font-semibold text-[#1F2937]">{item.q}</span>
              <span
                aria-hidden="true"
                className="flex-none font-sans text-[22px] font-normal leading-none text-[#9AA1AC] transition-transform duration-200 group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="max-w-[700px] px-7 pb-6 font-sans text-base leading-[1.63] text-[#6B7280]">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
