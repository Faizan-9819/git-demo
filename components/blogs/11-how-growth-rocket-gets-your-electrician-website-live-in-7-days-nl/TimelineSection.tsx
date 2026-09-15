type DayCard = {
  num: string;
  label: string;
  endLabel: string;
  title: string;
  body: string;
  youDo: string[];
  weDo: string[];
  end: string;
  shaded?: boolean;
  highlight?: boolean;
};

const DAYS: DayCard[] = [
  {
    num: "01",
    label: "Dag 1",
    endLabel: "dag 1",
    title: "Intake en projectvoorbereiding",
    body: "Het begint met een kort intakegesprek van ongeveer 30 minuten. We bespreken je diensten, je werkgebied, het soort elektrawerk waarvan je méér wilt aantrekken, en beantwoorden je vragen voordat het project start. Met die informatie wordt het hele project intern voorbereid, zodat elk teamlid meteen aan de slag kan.",
    youDo: [
      "Je bedrijfsinformatie delen",
      "Je foto's opsturen",
      "Je contactgegevens bevestigen",
      "Vertellen welke diensten je aanbiedt",
    ],
    weDo: [
      "Projectinrichting",
      "Domeincontrole",
      "Websiteplanning en inrichting van de beproefde opzet",
      "Interne productiebriefing",
    ],
    end: "je project is volledig voorbereid, zodat tekst, ontwerp en techniek samen vooruit kunnen.",
  },
  {
    num: "02",
    label: "Dag 2",
    endLabel: "dag 2",
    title: "Teksten en voorbereiding",
    body: "In plaats van jou websiteteksten te laten schrijven, schrijven wij ze voor je. Op basis van je intake ontstaan heldere, praktische teksten voor je homepage, dienstenpagina's, over-ons-pagina en contactpagina. Tegelijk worden je foto's geordend, bijgesneden en klaargemaakt voor de website. Achter de schermen wordt ook het technische fundament ingericht dat een soepele lancering mogelijk maakt: de paginastructuur, de basale vindbaarheid en de snelheidsinstellingen.",
    youDo: ["Niets — tenzij je de geselecteerde foto's wilt bekijken."],
    weDo: [
      "Teksten schrijven",
      "Foto's voorbereiden",
      "Basale vindbaarheid en paginaplanning",
      "Teksten en beelden samenbrengen",
    ],
    end: "je website heeft al een stevig fundament — nog vóór de bouw begint.",
    shaded: true,
  },
  {
    num: "3–4",
    label: "Dag 3–4",
    endLabel: "dag 4",
    title: "Bouwen en alles aansluiten",
    body: "Hier komt je website tot leven. Het team bouwt elke pagina met je goedgekeurde inhoud, stemt de indeling af op computer, tablet en telefoon, en zorgt dat bezoekers moeiteloos vinden wat ze zoeken. Ook de onderdelen waarmee je bedrijf vanaf dag één op aanvragen kan reageren, worden aangesloten: je contactformulieren worden ingericht, Google Maps wordt gekoppeld aan je Google Bedrijfsprofiel, en elke aanvraag wordt klaargezet om binnen te komen in je Growth Rocket-omgeving — zodat klantverzoeken niet verdwijnen tussen e-mails, gemiste oproepen en losse berichtenapps.",
    youDo: [
      "Niets. Terwijl jij bij je klanten bent, beheert Growth Rocket de volledige bouw achter de schermen.",
    ],
    weDo: [
      "Websitebouw en optimalisatie voor mobiel",
      "Boekingen ingericht (als je dat wilt)",
      "Aanvraagformulieren ingericht en koppeling met Google Maps",
      "Technische tests en interne kwaliteitscontrole",
    ],
    end: "je website is niet alleen ontworpen — hij is volledig aangesloten en bijna klaar om live te gaan.",
  },
  {
    num: "05",
    label: "Dag 5",
    endLabel: "dag 5",
    title: "Controle",
    body: "Je ontvangt een privélink naar je afgeronde website. Dit is geen ronde langs eindeloze ontwerpconcepten — de opzet is al door vele projecten heen verfijnd. Deze controle draait om één ding: klopt het beeld van jouw bedrijf. Loop je diensten na, controleer je werkgebied, bevestig je contactgegevens en kijk of de foto's je werk goed weergeven. Moet er iets anders, stuur dan één duidelijke lijst met wijzigingen.",
    youDo: ["Je website bekijken", "Correcties of aanvullingen noteren"],
    weDo: [
      "Volledige kwaliteitscontrole en links testen",
      "Contactformulieren testen",
      "Technische controle en laatste inhoudscheck",
    ],
    end: "één duidelijke lijst met wijzigingen is alles wat nodig is om de wijzigingsronde in te gaan.",
    shaded: true,
  },
  {
    num: "06",
    label: "Dag 6",
    endLabel: "dag 6",
    title: "Wijzigingen en eindcontrole",
    body: "Je feedback wordt verwerkt in één gerichte wijzigingsronde. In plaats van het hele project te heropenen, worden de details verfijnd die er het meest toe doen: diensteninformatie bijwerken, foto's vervangen, contactgegevens corrigeren en controleren dat alles precies klopt vóór de lancering. Tegelijk volgt nog een volledige technische controle op computer en telefoon.",
    youDo: ["De eindversie bekijken en je akkoord geven."],
    weDo: [
      "Wijzigingen doorvoeren en laatste tekstcontrole",
      "Tests op alle apparaten en snelheidscontroles",
      "Lanceervoorbereiding",
    ],
    end: "alles klopt precies zoals het moet — klaar voor de lancering.",
  },
  {
    num: "07",
    label: "Dag 7 · Live",
    endLabel: "dag 7",
    title: "Lancering",
    body: "De lanceerdag is meer dan op een publiceerknop drukken. Je website gaat live op je eigen domein, elk contactformulier wordt getest met echte inzendingen, en alle koppelingen worden gecontroleerd zodat klanten je zonder haperingen kunnen bereiken. We nemen ook met je door hoe aanvragen binnenkomen, zodat je precies weet wat er gebeurt zodra iemand via je website contact opneemt.",
    youDo: ["Zien hoe je site live gaat en hoe aanvragen bij je binnenkomen."],
    weDo: [
      "Live op je eigen domein",
      "Testen met echte inzendingen",
      "Koppelingen controleren en uitleg over aanvragen",
    ],
    end: "een complete online aanwezigheid die klaar is om aanvragen aan te trekken, je bedrijf professioneel te presenteren en je groei vanaf de eerste dag te ondersteunen.",
    highlight: true,
  },
];

function CheckIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="4 12.5 9.5 18 20 6" />
    </svg>
  );
}

function DotList({ items, accent }: { items: string[]; accent?: boolean }) {
  return (
    <div className="flex flex-col gap-2.5">
      {items.map((item) => (
        <div key={item} className="flex items-start gap-2.5">
          <span
            className={
              "mt-[9px] size-[5px] flex-none rounded-full " +
              (accent ? "bg-[#6F4CF5]" : "bg-[#C3C8D2]")
            }
          />
          <span className="font-sans text-[15px] leading-[23px] text-[#1F2937]">
            {item}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function TimelineSection() {
  return (
    <section id="timeline" className="scroll-mt-24">
      <h2 className="mt-24 w-full text-balance font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
        De 7 dagen, dag voor dag
      </h2>
      <p className="mt-7 w-full font-sans text-[19px] leading-[31px] text-[#1F2937]">
        Nu alles klaarstaat, ziet de route van intake naar lancering er zo uit.
        Elke dag heeft één duidelijk doel, en omdat elk onderdeel van het proces
        al op elkaar aansluit, kan het team aan meerdere taken tegelijk werken
        in plaats van fase na fase af te wachten. Jouw rol blijft het hele
        project eenvoudig: je levert vooraf de informatie aan, bekijkt de
        website zodra hij klaar is, en geeft vóór de lancering je akkoord. Alles
        daartussen wordt geregeld.
      </p>

      <div className="mt-9 flex flex-col gap-5">
        {DAYS.map((day) => (
          <div
            key={day.num}
            className={
              "rounded-2xl border p-6 sm:p-8 lg:p-9 " +
              (day.highlight
                ? "border-[#6F4CF5] bg-[#F4F1FE]"
                : day.shaded
                  ? "border-[#E6E8EF] bg-[#F8F9FC]"
                  : "border-[#E6E8EF] bg-white")
            }
          >
            <div className="flex items-start gap-4 sm:gap-6">
              <div className="flex-none font-sans text-[32px] font-light leading-[0.85] text-[#C5B7FB] tabular-nums sm:text-[44px] lg:text-[56px]">
                {day.num}
              </div>
              <div className="flex-1 pt-1">
                <div className="font-sans text-[11px] font-semibold uppercase tracking-[1.1px] text-[#9AA1AC]">
                  {day.label}
                </div>
                <div className="mt-1 font-sans text-[20px] font-bold tracking-[-0.2px] text-[#1F2937] sm:text-[22px]">
                  {day.title}
                </div>
                <p className="mt-3 max-w-[640px] font-sans text-[15.5px] leading-[26px] text-[#4B5563] sm:text-[16.5px]">
                  {day.body}
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-7 sm:grid-cols-2 sm:pl-[68px] lg:pl-[80px]">
              <div>
                <div className="mb-3 font-sans text-[11px] font-semibold uppercase tracking-[0.8px] text-[#9AA1AC]">
                  Wat jij doet
                </div>
                <DotList items={day.youDo} />
              </div>
              <div>
                <div className="mb-3 font-sans text-[11px] font-semibold uppercase tracking-[0.8px] text-[#6F4CF5]">
                  Wat Growth Rocket doet
                </div>
                <DotList items={day.weDo} accent />
              </div>
            </div>

            <div
              className={
                "mt-6 flex items-start gap-2.5 rounded-[10px] px-4.5 py-3.5 sm:ml-[68px] lg:ml-[80px] " +
                (day.highlight || day.shaded
                  ? "border border-[#EEF0F4] bg-white"
                  : "bg-[#F8F9FC]")
              }
            >
              <span className="mt-0.5 flex-none text-[#6F4CF5]">
                <CheckIcon />
              </span>
              <span className="font-sans text-[14.5px] leading-[22px] text-[#4B5563]">
                <strong className="font-semibold text-[#1F2937]">
                  Aan het einde van {day.endLabel}:
                </strong>{" "}
                {day.end}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
