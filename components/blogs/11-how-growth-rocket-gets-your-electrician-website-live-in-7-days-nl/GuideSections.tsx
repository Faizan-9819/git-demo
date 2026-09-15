"use client";

import images from "@/content/nl/blogs/11-elektricienwebsite-laten-maken/images";

function CheckIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mt-0.5 flex-none text-[#6F4CF5]"
    >
      <polyline points="4 12.5 9.5 18 20 6" />
    </svg>
  );
}

function ArrowIcon({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="flex-none rotate-90 text-[#C3C8D2] sm:rotate-0"
    >
      <line x1="4" y1="12" x2="18" y2="12" />
      <polyline points="13 7 18 12 13 17" />
    </svg>
  );
}

function PullQuote({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-13 max-w-[820px]">
      <div className="mb-7 h-0.5 w-12 bg-[#6F4CF5]" />
      <p className="text-balance font-sans text-[26px] font-semibold leading-[1.375] tracking-[-0.4px] text-[#1F2937] sm:text-[32px] sm:leading-[44px]">
        {children}
      </p>
    </div>
  );
}

export function OpeningSection() {
  return (
    <section id="opening" className="scroll-mt-24">
      <div className="w-full">
        <p className="font-sans text-[19px] leading-[31px] text-[#1F2937]">
          De meeste elektriciens die een website willen laten maken, rekenen op
          6 tot 12 weken.
        </p>
        <p className="mt-6 font-sans text-[19px] leading-[31px] text-[#1F2937]">
          Er zijn kennismakingsgesprekken, ontwerprondes, tekstakkoorden,
          technische overdrachten, testfases &mdash; en tussen elke stap zit
          wachttijd. Terwijl het websiteproject langzaam vooruitschuift, run jij
          gewoon je bedrijf, beantwoord je klanten en probeer je er nóg een
          project bij te persen in een agenda die al vol zat.
        </p>
        <p className="mt-9 font-sans text-2xl font-semibold leading-[1.33] tracking-[-0.2px] text-[#1F2937] sm:mt-11 sm:text-[30px] sm:leading-[40px] sm:tracking-[-0.3px]">
          Growth Rocket werkt anders.
        </p>
        <p className="mt-6 font-sans text-[19px] leading-[31px] text-[#1F2937]">
          Je elektricienwebsite staat binnen 7 dagen online &mdash; niet omdat
          er gehaast wordt, maar omdat het hele systeem is gebouwd om de
          vertragingen weg te nemen die een traditioneel websiteproject zelf
          veroorzaakt.
        </p>
        <p className="mt-6 font-sans text-[19px] leading-[31px] text-[#1F2937]">
          In plaats van elke keer bij nul te beginnen, is alles wat geen
          heruitvinding nodig heeft al gestandaardiseerd &mdash; terwijl alles
          wat jouw bedrijf persoonlijk maakt, persoonlijk blijft. Zodra jij de
          benodigde informatie hebt aangeleverd, schrijft het team je teksten,
          bereidt het je foto&rsquo;s voor, bouwt het je website, sluit het je
          aanvraagsysteem aan, test het alles en zet het de site live &mdash;
          terwijl jij bij je klanten blijft.
        </p>
        <p className="mt-6 font-sans text-[19px] leading-[31px] text-[#1F2937]">
          Het resultaat is niet simpelweg een website die sneller lanceert. Het
          is een professioneel online systeem dat vanaf dag één klaar is om
          aanvragen op te leveren, en dat je bedrijf ook ná de lancering blijft
          ondersteunen.
        </p>
        <p className="mt-6 font-sans text-[19px] leading-[31px] text-[#1F2937]">
          In deze gids zie je precies hoe het proces werkt, wat er op elke dag
          gebeurt, en waarom een uitgewerkt systeem in één week kan leveren waar
          een klassiek bureauproject maanden voor nodig heeft.
        </p>
      </div>
    </section>
  );
}

export function SystemSection() {
  return (
    <section id="system" className="scroll-mt-24">
      {/* Preview Image */}
      <div className="mt-22 overflow-hidden rounded-[24px] border border-[#E5E7EB] shadow-lg">
        <img
          src="/blogimages/en/11-how-growth-rocket-gets-your-electrician-website-live-in-7-days/spotlight img.png"
          alt="Example electrician homepage"
        />
      </div>

      <h2 className="mt-24 w-full  text-balance font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
        Waarom 7 dagen een systeem is, geen belofte
      </h2>
      <div className="w-full">
        <p className="mt-7 font-sans text-[19px] leading-[31px] text-[#1F2937]">
          Heb je ooit met een traditioneel webbureau gewerkt, dan heb je
          waarschijnlijk zelf ervaren waarom projecten zo lang duren.
        </p>
        <p className="mt-6 font-sans text-[19px] leading-[31px] text-[#1F2937]">
          Elke website begint er op een leeg canvas. Er moet een nieuw ontwerp
          komen. Teksten worden vanaf nul geschreven. Ontwerpers wachten op
          tekstschrijvers, ontwikkelaars wachten op ontwerpers, en elke
          feedbackronde levert nieuwe revisies op &mdash; die weer nieuw wachten
          opleveren. Voor je het weet is een project dat op papier eenvoudig
          leek, uitgerekt tot twee of drie maanden.
        </p>
        <p className="mt-6 font-sans text-[19px] leading-[31px] text-[#1F2937]">
          Dat is geen onwil van bureaus. Zo werkt maatwerk nu eenmaal.
        </p>
        <p className="mt-6 font-sans text-[19px] leading-[31px] text-[#1F2937]">
          Growth Rocket pakt het probleem anders aan. In plaats van voor elke
          klant hetzelfde fundament opnieuw te bouwen, is er een beproefd
          systeem ontwikkeld, specifiek voor kleine dienstverlenende bedrijven
          zoals elektriciens. De sitestructuur is al getest. De
          pagina-indelingen zijn gebouwd om bezoekers om te zetten in aanvragen.
          Werking op mobiel, contactformulieren, technische vindbaarheid,
          hosting, onderhoud en het lanceerproces zitten al in het platform.
        </p>
        <p className="mt-6 font-sans text-[19px] leading-[31px] text-[#1F2937]">
          Daardoor kunnen de specialisten{" "}
          <strong className="font-semibold">naast elkaar</strong> werken in
          plaats van op elkaar te wachten.
        </p>
      </div>

      {/* WORKFLOW DIAGRAM: sequential vs parallel */}
      <figure className="mt-14 overflow-hidden rounded-2xl border border-[#E6E8EF]">
        <div className="grid md:grid-cols-2">
          <div className="border-b border-[#EEF0F4] p-6 sm:p-8 md:border-b-0 md:border-r">
            <div className="font-sans text-[11px] font-semibold uppercase tracking-[1.1px] text-[#9AA1AC]">
              Traditioneel bureau
            </div>
            <div className="mt-1.5 font-sans text-sm text-[#6B7280]">
              Elke fase wacht op de vorige
            </div>
            <div className="relative mt-6 pl-6">
              <div className="absolute bottom-1.5 left-[5px] top-1.5 w-px bg-[#E1E4EC]" />
              <div className="flex flex-col gap-4">
                {[
                  "Kennismaking",
                  "Ontwerp",
                  "Teksten",
                  "Ontwikkeling",
                  "Testen",
                ].map((step) => (
                  <div key={step} className="relative">
                    <div className="absolute -left-6 top-1 size-2.5 rounded-full border border-[#C3C8D2] bg-white" />
                    <div className="font-sans text-[15px] font-medium text-[#4B5563]">
                      {step}
                    </div>
                  </div>
                ))}
                <div className="relative">
                  <div className="absolute -left-6 top-1 size-2.5 rounded-full border border-[#C3C8D2] bg-white" />
                  <div className="font-sans text-[15px] font-semibold text-[#4B5563]">
                    Live{" "}
                    <span className="font-normal text-[#9AA1AC]">
                      — weken later
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#F4F1FE] p-6 sm:p-8">
            <div className="font-sans text-[11px] font-semibold uppercase tracking-[1.1px] text-[#6F4CF5]">
              Growth Rocket
            </div>
            <div className="mt-1.5 font-sans text-sm text-[#6B7280]">
              Alles loopt tegelijk
            </div>
            <div className="mt-6 flex items-stretch gap-3.5">
              <div className="flex flex-1 flex-col gap-2">
                {[
                  "Tekst",
                  "Ontwerp",
                  "Bouw",
                  "Vindbaarheid",
                  "Foto's",
                  "Testen",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-lg border border-[#E4DCFB] bg-white px-3 py-2 font-sans text-sm font-medium text-[#1F2937]"
                  >
                    {item}
                  </div>
                ))}
              </div>
              <div className="flex flex-none items-center text-[#6F4CF5]">
                <ArrowIcon size={26} />
              </div>
              <div className="flex flex-none items-center">
                <div className="rounded-[10px] bg-[#6F4CF5] px-3.5 py-3 text-center text-white shadow-[0_6px_18px_rgba(111,76,245,0.25)]">
                  <div className="font-sans text-[11px] font-semibold uppercase tracking-[0.5px] opacity-85">
                    Dag 7
                  </div>
                  <div className="mt-0.5 font-sans text-[15px] font-bold">
                    Live
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </figure>

      <div className="w-full">
        <p className="mt-11 font-sans text-[19px] leading-[31px] text-[#1F2937]">
          Terwijl de teksten worden geschreven, staat het raamwerk van de
          website al klaar. Terwijl de foto&rsquo;s worden verkleind en
          voorbereid, loopt de technische inrichting al. In plaats van werk van
          afdeling naar afdeling door te schuiven, bewegen meerdere onderdelen
          van het project tegelijk vooruit.
        </p>
        <p className="mt-6 font-sans text-[19px] leading-[31px] text-[#1F2937]">
          Het resultaat is een sneller proces zonder kwaliteitsverlies &mdash;
          en belangrijker: een eenvoudiger ervaring voor jou. Je hoeft geen
          ontwerpers, ontwikkelaars, tekstschrijvers of technici op elkaar af te
          stemmen. Jij levert de informatie over je bedrijf aan; Growth Rocket
          neemt de verantwoordelijkheid om daar een professionele, lanceerklare
          website van te maken.
        </p>
        <p className="mt-6 font-sans text-[19px] leading-[31px] text-[#1F2937]">
          Daarom is zeven dagen geen marketingbelofte. Het is de logische
          uitkomst van een systeem dat is ontworpen om onnodige vertraging weg
          te nemen.
        </p>
      </div>
    </section>
  );
}

const INTAKE_ITEMS = [
  "Je bedrijfsnaam, KVK-nummer en werkgebied",
  [
    "Een lijst van je diensten ",
    <span key="d" className="text-[#9AA1AC]">
      (groepenkast, laadpaal, verlichting)
    </span>,
  ],
  [
    "5 tot 10 foto&rsquo;s van afgeronde klussen ",
    <span key="f" className="text-[#9AA1AC]">
      (telefoonfoto&rsquo;s zijn prima)
    </span>,
  ],
  [
    "Je logo, als je er een hebt ",
    <span key="l" className="text-[#9AA1AC]">
      (geen probleem als dat niet zo is)
    </span>,
  ],
  "Het telefoonnummer en e-mailadres waarop klanten je moeten bereiken",
  "Je openingstijden",
];

export function IntakeSection() {
  return (
    <section id="intake" className="scroll-mt-24">
      <h2 className="mt-24 max-w-[720px] text-balance font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
        Wat Growth Rocket nodig heeft vóór dag 1
      </h2>
      <p className="mt-7 w-full font-sans text-[19px] leading-[31px] text-[#1F2937]">
        Het hele proces begint met één eenvoudige intake. Om je website op koers
        te houden voor een lancering binnen zeven dagen, vragen we vooraf een
        paar praktische dingen van je:
      </p>

      <div className="mt-10 rounded-2xl border border-[#E6E8EF] bg-white p-6 shadow-[0_1px_3px_rgba(16,24,40,0.04)] sm:p-8 lg:p-11">
        <div className="grid gap-5 sm:grid-cols-2 sm:gap-x-12">
          {INTAKE_ITEMS.map((item, i) => (
            <div key={i} className="flex items-start gap-3.5">
              <CheckIcon size={20} />
              <span className="font-sans text-[17px] leading-[26px] text-[#1F2937]">
                {item}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap items-baseline gap-3 border-t border-[#EEF0F4] pt-6">
          <span className="font-sans text-2xl font-bold tracking-[-0.3px] text-[#1F2937]">
            Dat is alles.
          </span>
          <span className="font-sans text-[15px] text-[#6B7280]">
            Geen ellenlange vragenlijsten, geen ingewikkelde briefingdocumenten,
            geen weken aan planningsoverleg.
          </span>
        </div>
      </div>
    </section>
  );
}

const OWNERSHIP_STEPS: {
  label: string;
  icon: React.ReactNode;
  emphasis?: boolean;
}[] = [
  {
    label: "Jouw intake",
    icon: (
      <>
        <rect x="6" y="3" width="12" height="18" rx="2" />
        <line x1="9" y1="9" x2="15" y2="9" />
        <line x1="9" y1="13" x2="14" y2="13" />
      </>
    ),
  },
  {
    label: "Growth Rocket-team",
    icon: (
      <>
        <circle cx="9" cy="8" r="3" />
        <path d="M3 20c0-3.3 2.7-5 6-5s6 1.7 6 5" />
        <circle cx="17.5" cy="9" r="2.3" />
        <path d="M15.5 20c0-2.8 1.5-4.3 4-4.3 1 0 1.8.2 2.5.7" />
      </>
    ),
  },
  {
    label: "Websitebouw",
    icon: (
      <>
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <line x1="3" y1="8" x2="21" y2="8" />
      </>
    ),
  },
  {
    label: "Live",
    emphasis: true,
    icon: (
      <>
        <path d="M12 3c3 1.5 4.5 4.5 4.5 8 0 2-1 4-2 5H9.5c-1-1-2-3-2-5C7.5 7.5 9 4.5 12 3z" />
        <circle cx="12" cy="9.5" r="1.6" />
        <path d="M9.5 16l-1.5 3M14.5 16l1.5 3" />
      </>
    ),
  },
];

export function OwnershipSection() {
  return (
    <section id="ownership" className="scroll-mt-24">
      <h2 className="mt-24 max-w-[720px] text-balance font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
        Na de intake neemt Growth Rocket het over
      </h2>
      <div className="w-full">
        <p className="mt-7 font-sans text-[19px] leading-[31px] text-[#1F2937]">
          Hier verschilt het proces het meest van een traditioneel
          websiteproject.
        </p>
        <p className="mt-6 font-sans text-[19px] leading-[31px] text-[#1F2937]">
          Bij veel bureaus begint het werk na het eerste gesprek niet echt
          &mdash; het begint <em>voor jóú</em>. Je wordt gevraagd feedback te
          coördineren, teksten na te jagen, meerdere ontwerpconcepten te
          beoordelen, elke week nieuwe vragen te beantwoorden en het project op
          gang te houden naast je dagelijkse werk.
        </p>
      </div>

      <PullQuote>
        Jij hoeft geen tweede project te managen. Growth Rocket beheert je
        website van planning tot lancering.
      </PullQuote>

      <div className="rounded-2xl border border-[#E6E8EF] bg-[#F8F9FC] p-7 sm:p-8">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          {OWNERSHIP_STEPS.map((step, i) => (
            <div key={step.label} className="contents">
              <div className="flex flex-1 flex-col items-center gap-3 text-center">
                <div
                  className={
                    "flex size-13 items-center justify-center rounded-[13px] border " +
                    (step.emphasis
                      ? "border-[#6F4CF5] bg-[#6F4CF5] text-white shadow-[0_6px_18px_rgba(111,76,245,0.25)]"
                      : "border-[#E1E4EC] bg-white text-[#1F2937]")
                  }
                >
                  <svg
                    width="23"
                    height="23"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {step.icon}
                  </svg>
                </div>
                <div className="font-sans text-[15px] font-semibold text-[#1F2937]">
                  {step.label}
                </div>
              </div>
              {i < OWNERSHIP_STEPS.length - 1 && <ArrowIcon />}
            </div>
          ))}
        </div>
      </div>

      <div className="w-full">
        <p className="mt-11 font-sans text-[19px] leading-[31px] text-[#1F2937]">
          Growth Rocket is gebouwd om die last weg te nemen. Zodra je intake
          compleet is, neemt het team het eigenaarschap van het project over. De
          websiteteksten worden geschreven op basis van jouw informatie. Je
          foto&rsquo;s worden voorbereid en verkleind. Elke pagina wordt
          gebouwd, de contactformulieren worden aangesloten, de technische
          instellingen worden ingericht, alles wordt getest op computer én
          telefoon, en de site wordt klaargezet voor lancering.
        </p>
        <p className="mt-6 font-sans text-[19px] leading-[31px] text-[#1F2937]">
          In plaats van jou bij elke kleine beslissing te betrekken, wordt er
          achter de schermen doorgewerkt. Je hoort van ons wanneer er iets
          belangrijks te beoordelen valt &mdash; niet elke keer dat er een taak
          af is. Zo hoef jij geen tweede project te managen: jij blijft je
          klanten bedienen terwijl Growth Rocket je website van planning tot
          lancering beheert.
        </p>
        <p className="mt-6 font-sans text-[19px] leading-[31px] text-[#1F2937]">
          Het is een van de grootste redenen waarom leveren in zeven dagen lukt.
          Minder wachten. Minder heen-en-weer. Minder projectmanagement voor jou
          &mdash; en meer tijd voor het werk waar je bedrijf echt van groeit.
        </p>
      </div>
    </section>
  );
}

const CMP_ROWS = [
  {
    label: "Projectplanning",
    them: "Meerdere overleggen",
    us: "Eén eenvoudige intake",
  },
  {
    label: "Teksten",
    them: "Aparte projectfase",
    us: "Inbegrepen vanaf dag 2",
  },
  {
    label: "Ontwerp",
    them: "Meerdere concepten en revisierondes",
    us: "Beproefde opzet, afgestemd op jouw bedrijf",
  },
  {
    label: "Ontwikkeling",
    them: "Start na ontwerp-akkoord",
    us: "Loopt parallel aan de teksten",
  },
  {
    label: "Testen",
    them: "Laatste projectfase",
    us: "Doorlopend tijdens de bouw",
  },
  { label: "Lancering", them: "Weken later", us: "Dag 7", usBold: true },
  {
    label: "Werklast klant",
    them: "Jij managet het project",
    us: "Growth Rocket draagt de verantwoordelijkheid",
  },
];

export function ComparisonSection() {
  return (
    <section id="comparison" className="scroll-mt-24">
      <h2 className="mt-24 w-full text-balance font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
        Waarom een traditioneel bureau 6 tot 12 weken nodig heeft
      </h2>
      <p className="mt-7 w-full font-sans text-[19px] leading-[31px] text-[#1F2937]">
        Het verschil tussen een traditioneel bureau en Growth Rocket is niet
        simpelweg snelheid &mdash; het is hoe het werk georganiseerd is.
      </p>
      <p className="mt-7 w-full font-sans text-[19px] leading-[31px] text-[#1F2937]">
        {" "}
        Een klassiek websiteproject wordt behandeld als een creatief
        maatwerkproject, waarin elke fase pas kan beginnen als de vorige af is.
        Ontwerp wacht op kennismaking. Ontwikkeling wacht op ontwerp. Teksten
        wachten op akkoorden. Testen wacht op ontwikkeling. En elke revisie
        levert een nieuwe ronde e-mails, overleggen en vertraging op. Zo rekt
        een project op tot zes, acht of zelfs twaalf weken — niet omdat het werk
        zelf zo lang duurt, maar omdat elke fase nieuw wachten introduceert.
      </p>

      <p className="mt-7 w-full font-sans text-[19px] leading-[31px] text-[#1F2937]">
        Growth Rocket haalt die wachttijden weg. Het beproefde raamwerk voor
        dienstverlenende bedrijven staat er al, dus tekstschrijvers, ontwerpers
        en ontwikkelaars werken vanaf het begin naast elkaar in plaats van op
        elkaar te wachten.
      </p>

      <div className="mt-11 overflow-hidden rounded-2xl border border-[#E6E8EF]">
        <div className="overflow-x-auto">
          <div className="grid min-w-[560px] grid-cols-[1.1fr_1.4fr_1.4fr]">
            <div className="border-b border-[#EEF0F4] bg-[#FBFBFD] px-6 py-4.5" />
            <div className="border-b border-l border-[#EEF0F4] bg-[#FBFBFD] px-6 py-4.5 font-sans text-xs font-semibold uppercase tracking-[1px] text-[#9AA1AC]">
              Traditioneel bureau
            </div>
            <div className="border-b border-l border-[#EEF0F4] bg-[#F4F1FE] px-6 py-4.5 font-sans text-xs font-semibold uppercase tracking-[1px] text-[#6F4CF5]">
              Growth Rocket
            </div>

            {CMP_ROWS.map((row) => (
              <div key={row.label} className="contents">
                <div className="flex items-center border-b border-[#EEF0F4] bg-[#FBFBFD] px-6 py-5 font-sans text-sm font-semibold text-[#1F2937]">
                  {row.label}
                </div>
                <div className="flex items-center border-b border-l border-[#EEF0F4] px-6 py-5 font-sans text-[15.5px] leading-[23px] text-[#6B7280]">
                  {row.them}
                </div>
                <div
                  className={
                    "flex items-center border-b border-l border-[#EEF0F4] bg-[#FAF8FE] px-6 py-5 font-sans text-[15.5px] leading-[23px] text-[#1F2937] " +
                    (row.usBold ? "font-bold" : "font-medium")
                  }
                >
                  {row.us}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <PullQuote>
        Het grootste verschil zit niet in de doorlooptijd, maar in wie het werk
        draagt.
      </PullQuote>

      <div className="w-full">
        <p className="font-sans text-[19px] leading-[31px] text-[#1F2937]">
          Bij een traditioneel bureau manage jij het project vaak naast je
          bedrijf. Bij Growth Rocket doorloop je één intake, en daarna draagt
          het team de verantwoordelijkheid om alles vooruit te bewegen.
        </p>
      </div>
    </section>
  );
}

const GET_CARDS = [
  {
    tag: "Aanwezigheid",
    title: "Een professionele website",
    body: "Gebouwd om je diensten helder te presenteren, vertrouwen op te bouwen bij potentiële klanten en contact opnemen makkelijk te maken. Elke pagina is mobielvriendelijk, professioneel geschreven en zo opgebouwd dat bezoekers snel vinden wat ze zoeken.",
    icon: (
      <>
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <line x1="3" y1="8" x2="21" y2="8" />
      </>
    ),
  },
  {
    tag: "Aanvragen",
    title: "Een betere manier om aanvragen op te vangen",
    body: "Elke aanvraag telt. Daarom zijn je contactformulieren, je boekingen en je contactopties al aangesloten vóórdat je website live gaat. Of iemand nu een afspraak wil maken, een offerte wil aanvragen of een vraag wil stellen — je website is er vanaf dag één klaar voor.",
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
    title: "Eén plek om overzicht te houden",
    body: "In plaats van aanvragen die verspreid binnenkomen via e-mails, formulieren en berichtenapps, brengt de Growth Rocket Hub je klantaanvragen samen op één plek. Terwijl je bedrijf groeit, weet je altijd waar nieuwe aanvragen vandaan komen en kun je reageren zonder tussen losse tools te springen.",
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
    tag: "Ondersteuning",
    title: "Doorlopende ondersteuning na de lancering",
    body: "De meeste websiteprojecten eindigen zodra de site live staat. Growth Rocket niet. Hosting, onderhoud, updates en ondersteuning blijven onderdeel van de dienst — volledig ontzorgd, zodat jij je niet hoeft af te vragen wie de site draaiend houdt of wie je belt voor een kleine aanpassing.",
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

const ECO_NODES = [
  "Website",
  "Aanvragen",
  "Growth Rocket Hub",
  "Doorlopende ondersteuning",
];

export function WhatYouGetSection() {
  return (
    <section id="whatyouget" className="scroll-mt-24">
      <h2 className="mt-24 w-full text-balance font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
        Wat je in die 7 dagen werkelijk krijgt
      </h2>
      <p className="mt-7 w-full font-sans text-[19px] leading-[31px] text-[#1F2937]">
        Een lancering in zeven dagen draait niet om de snelst mogelijke website.
        Het draait erom dat je bedrijf alles krijgt wat het nodig heeft voor een
        professionele online aanwezigheid &mdash; zonder maanden
        projectmanagement. Op de lanceerdag ontvang je dan ook veel meer dan een
        verzameling webpagina&rsquo;s.
      </p>

      <div className="mt-11 grid gap-5 sm:grid-cols-2">
        {GET_CARDS.map((card) => (
          <div
            key={card.title}
            className="rounded-2xl border border-[#E6E8EF] p-6 transition-colors hover:border-[#C5B7FB] sm:p-8"
          >
            <div className="flex items-center justify-between">
              <div className="flex size-11 items-center justify-center rounded-[11px] bg-[#F4F1FE] text-[#6F4CF5]">
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {card.icon}
                </svg>
              </div>
              <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.8px] text-[#9AA1AC]">
                {card.tag}
              </span>
            </div>
            <div className="mt-5 font-sans text-[19px] font-bold text-[#1F2937]">
              {card.title}
            </div>
            <p className="mt-2.5 font-sans text-[15.5px] leading-[25px] text-[#6B7280]">
              {card.body}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-9 rounded-2xl border border-[#E6E8EF] bg-[#F8F9FC] p-7 sm:p-8">
        <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
          {ECO_NODES.map((node, i) => (
            <div key={node} className="contents">
              <div
                className={
                  "flex-1 rounded-[10px] border px-3 py-3.5 text-center font-sans text-sm font-semibold " +
                  (node === "Growth Rocket Hub"
                    ? "border-[#6F4CF5] bg-[#6F4CF5] text-white shadow-[0_6px_16px_rgba(111,76,245,0.22)]"
                    : "border-[#E1E4EC] bg-white text-[#1F2937]")
                }
              >
                {node}
              </div>
              {i < ECO_NODES.length - 1 && <ArrowIcon size={22} />}
            </div>
          ))}
        </div>
      </div>

      <div className="w-full">
        <p className="mt-10 font-sans text-[19px] leading-[31px] text-[#1F2937]">
          Dat is wat het 7-daagse systeem anders maakt. Het gaat niet simpelweg
          om sneller websites bouwen &mdash; het gaat erom elektriciens een
          compleet online business systeem te geven dat hun bedrijf vanaf de
          allereerste dag ondersteunt.
        </p>
      </div>
    </section>
  );
}

const IDEAL = [
  "Bedrijven met één of meerdere lokale werkgebieden",
  "Startende bedrijven die snel professioneel online willen staan",
  "Gevestigde installatiebedrijven die een verouderde website vervangen",
  "Bedrijven die website, aanvraagbeheer en ondersteuning bij één partij willen",
  "Eigenaren die hun tijd liever aan klanten besteden dan aan nóg een digitaal project",
];

const NOT_FOR = [
  "Maatwerk-webshops",
  "Complexe boekingsplatforms met voorraadbeheer",
  "Op maat gebouwde webapplicaties",
  "Grootschalige bedrijfswebsites",
  "Bedrijven die volledig eigen functionaliteit vanaf de grond nodig hebben",
];

export function FitSection() {
  return (
    <section id="fit" className="scroll-mt-24">
      <h2 className="mt-24 w-full text-balance font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
        Waar dit systeem wél en niet voor is gebouwd
      </h2>
      <p className="mt-7 w-full font-sans text-[19px] leading-[31px] text-[#1F2937]">
        Een websitelancering in 7 dagen is niet voor elk bedrijf de juiste
        oplossing &mdash; en dat is bewust.
      </p>
      <p className="mt-6 w-full font-sans text-[19px] leading-[31px] text-[#1F2937]">
        Growth Rocket is gebouwd voor dienstverlenende bedrijven die een
        professionele online aanwezigheid willen zonder maanden aan een
        websiteproject kwijt te zijn. Wil je aanvragen aantrekken, je diensten
        professioneel presenteren en de techniek uit handen geven, dan is dit
        systeem daar precies voor gemaakt.
      </p>

      <div className="mt-11 grid gap-5 sm:grid-cols-2">
        <div className="rounded-2xl border border-[#E4DCFB] bg-[#F4F1FE] p-6 sm:p-8">
          <div className="font-sans text-xs font-semibold uppercase tracking-[1px] text-[#6F4CF5]">
            Ideale match
          </div>
          <div className="mt-5 flex flex-col gap-4">
            {IDEAL.map((item) => (
              <div key={item} className="flex items-start gap-3.5">
                <CheckIcon />
                <span className="font-sans text-base leading-6 text-[#1F2937]">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-2xl border border-[#E6E8EF] bg-[#FBFBFD] p-6 sm:p-8">
          <div className="font-sans text-xs font-semibold uppercase tracking-[1px] text-[#9AA1AC]">
            Niet voor gebouwd
          </div>
          <div className="mt-5 flex flex-col gap-4">
            {NOT_FOR.map((item) => (
              <div key={item} className="flex items-start gap-3.5">
                <span className="mt-2.5 h-px w-3 flex-none rounded-full bg-[#C3C8D2]" />
                <span className="font-sans text-base leading-6 text-[#6B7280]">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full">
        <p className="mt-8 font-sans text-[19px] leading-[31px] text-[#1F2937]">
          Die projecten verdienen een ander proces en een andere doorlooptijd.
          In plaats van alles voor iedereen te beloven, is dit systeem gericht
          op één ding: goed werken voor dienstverlenende bedrijven. Door die
          focus is het proces eenvoudiger, de ervaring prettiger en de website
          op dag één klaar om zijn werk te doen.
        </p>
      </div>
    </section>
  );
}

export function WhySection() {
  const openLeadForm = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-lead-form"));
    }
  };
  return (
    <section id="why" className="scroll-mt-24">
      <h2 className="mt-24 w-full text-balance font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
        Waarom dit voor elektriciens telt
      </h2>
      <div className="w-full">
        <p className="mt-7 font-sans text-xl font-medium leading-[1.42] tracking-[-0.15px] text-[#1F2937] sm:text-2xl sm:leading-[34px] sm:tracking-[-0.2px]">
          Als elektricien is je website niet het werk. Je klanten zijn dat.
        </p>
        <p className="mt-6 font-sans text-[19px] leading-[31px] text-[#1F2937]">
          De meeste ondernemers worden niet wakker met zin in een webproject. Ze
          willen een professionele online aanwezigheid waarmee klanten ze kunnen
          vinden, hun diensten begrijpen en contact opnemen zonder omwegen.
        </p>
      </div>

      <figure className="mt-11">
        <div
          className="relative w-full overflow-hidden rounded-2xl bg-[#F1F2F6]"
          style={{ aspectRatio: "3/2" }}
        >
          <img
            src="/blogimages/en/11-how-growth-rocket-gets-your-electrician-website-live-in-7-days/Recommended_ a real,.png"
            alt={images.electricianPhoto.alt}
            className="size-full object-cover"
          />
        </div>
        <figcaption className="mt-3.5 font-sans text-[13px] leading-5 text-[#9AA1AC]">
          {images.electricianPhoto.caption}
        </figcaption>
      </figure>

      <div className="w-full">
        <p className="mt-10 font-sans text-[19px] leading-[31px] text-[#1F2937]">
          Precies daarvoor is Growth Rocket gebouwd: in plaats van zelf
          ontwerpers, ontwikkelaars, hostingpartijen en supportbedrijven te
          coördineren, werk je met één team dat het hele proces beheert &mdash;
          van intake en lancering tot doorlopende updates en onderhoud. Zodra je
          website live gaat, is hij al voorbereid om klantaanvragen te
          ontvangen, je diensten professioneel te presenteren en je dagelijkse
          werk te ondersteunen.
        </p>
        <p className="mt-6 font-sans text-[19px] leading-[31px] text-[#1F2937]">
          En anders dan bij een traditioneel websiteproject eindigt de
          samenwerking niet op de lanceerdag: je website blijft gehost,
          onderhouden en ondersteund door hetzelfde team dat hem bouwde &mdash;
          één aanspreekpunt, ook als je bedrijf verandert. Zoek je een snellere
          manier om een website te lanceren, dan zul je de zeven dagen
          waarderen. Zoek je een eenvoudigere manier om je online aanwezigheid
          te beheren, dan waardeer je vooral alles wat erna komt.
        </p>
      </div>

      <div className="mt-13 rounded-2xl border border-[#E6E8EF] bg-[#F8F9FC] p-7 sm:p-10">
        <div className="font-sans text-[11px] font-semibold uppercase tracking-[1.1px] text-[#9AA1AC]">
          Zie hoe het werkt voor elektriciens
        </div>
        <p className="mt-3.5 max-w-[600px] font-sans text-lg leading-7 text-[#1F2937]">
          Wil je zien hoe dit complete beheerde systeem er specifiek voor
          installatiebedrijven uitziet &mdash; je professionele website, het
          aanvraagbeheer, de doorlopende ondersteuning en de Growth Rocket Hub
          &mdash; bekijk dan de pagina Website voor Elektriciens. Daar zie je
          hoe alle onderdelen samenwerken, zodat elektriciens minder tijd kwijt
          zijn aan techniek en meer aan hun bedrijf.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-4.5">
          <button
            type="button"
            onClick={openLeadForm}
            className="inline-flex cursor-pointer items-center rounded-[10px] border-0 bg-[#6F4CF5] px-5.5 py-3 font-sans text-[15px] font-semibold text-white"
          >
            Bekijk Website voor Elektriciens →
          </button>
          <button
            type="button"
            onClick={() =>
              document
                .getElementById("final-cta")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="cursor-pointer border-0 border-b-[1.5px] border-[#C5B7FB] bg-transparent pb-0.5 font-sans text-sm font-semibold text-[#1F2937]"
          >
            Bekijk wat inbegrepen is
          </button>
        </div>
      </div>
    </section>
  );
}

export function ClosingSection() {
  return (
    <section id="closing" className="scroll-mt-24">
      <div className="w-full">
        <h2 className="mt-28 text-balance font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
          Een betere manier om je bedrijf online te krijgen
        </h2>
        <p className="mt-7 font-sans text-[19px] leading-[31px] text-[#1F2937]">
          Een website laten maken hoort geen tweede baan te worden. Voor de
          meeste elektriciens is de uitdaging niet het vínden van een webbouwer
          &mdash; het is de tijd vinden om overleggen te plannen, eindeloze
          revisies te beoordelen en een project te managen naast het gewone
          werk. Precies dat probleem lost Growth Rocket op.
        </p>
        <p className="mt-6 font-sans text-[19px] leading-[31px] text-[#1F2937]">
          De zeven dagen draaien niet om snelheid omwille van de snelheid. Ze
          draaien om het weghalen van de onnodige vertragingen van een
          traditioneel websiteproject, vervangen door een beproefd systeem dat
          is gebouwd rond hoe kleine dienstverlenende bedrijven werkelijk
          werken.
        </p>
        <p className="mt-6 font-sans text-[19px] leading-[31px] text-[#1F2937]">
          Vanaf het moment dat je intake compleet is, neemt Growth Rocket het
          eigenaarschap over: teksten, foto&rsquo;s, bouw, aanvraagsysteem,
          tests en lancering &mdash; terwijl jij bij je bedrijf blijft. En als
          je website live gaat, stopt het daar niet. Je site blijft gehost,
          onderhouden en ondersteund door hetzelfde team dat hem bouwde. Je
          aanvragen blijven overzichtelijk in de Growth Rocket Hub, updates
          worden voor je geregeld en je online aanwezigheid groeit met je
          bedrijf mee.
        </p>
      </div>

      <div className="my-13 max-w-[820px]">
        <div className="mb-7 h-0.5 w-12 bg-[#6F4CF5]" />
        <p className="text-balance font-sans text-[28px] font-semibold leading-[1.33] tracking-[-0.5px] text-[#1F2937] sm:text-[36px] sm:leading-[48px]">
          Je investeert niet simpelweg in een website &mdash; je investeert in
          een compleet online business systeem.
        </p>
      </div>

      <div className="w-full">
        <p className="font-sans text-[19px] leading-[31px] text-[#1F2937]">
          Heb je een nieuwe website steeds uitgesteld omdat je dacht dat het
          maanden aan overleggen en projectmanagement zou kosten: dat hoeft
          niet. Met het juiste systeem is zeven dagen genoeg.
        </p>
      </div>
    </section>
  );
}

const FINAL_FEATURES = [
  "Professionele website",
  "Teksten die voor je geschreven worden",
  "Mobielvriendelijk ontwerp",
  "Boekingen aangesloten",
  "Aanvraagformulieren aangesloten",
  "Growth Rocket Hub gekoppeld",
  "Hosting, onderhoud en doorlopende ondersteuning",
];

export function FinalCtaSection() {
  const openLeadForm = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-lead-form"));
    }
  };
  return (
    <section id="final-cta" className="scroll-mt-24">
      <div className="mt-24 rounded-[20px] border border-[#E6E8EF] bg-[#FBFBFD] p-7 sm:p-[52px_48px]">
        <h2 className="max-w-[560px] text-balance font-sans text-[26px] font-bold leading-[1.25] tracking-[-0.4px] text-[#1F2937] sm:text-[32px] sm:leading-[1.25]">
          Klaar om je elektricienwebsite te lanceren?
        </h2>
        <p className="mt-4.5 max-w-[600px] font-sans text-lg leading-7 text-[#6B7280]">
          Of je nu een nieuw installatiebedrijf start of een verouderde website
          vervangt: Growth Rocket geeft je alles wat je nodig hebt om online te
          gaan &mdash; zonder de gebruikelijke vertragingen, technisch gedoe of
          eindeloos heen-en-weer.
        </p>
        <div className="mt-8.5 grid max-w-[760px] grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-[14px_40px]">
          {FINAL_FEATURES.map((item) => (
            <div key={item} className="flex items-start gap-3">
              <CheckIcon />
              <span className="font-sans text-base leading-6 text-[#1F2937]">
                {item}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-col items-start gap-4.5">
          <div className="flex flex-wrap items-center gap-5">
            <button
              type="button"
              onClick={openLeadForm}
              className="cursor-pointer rounded-[11px] border-0 bg-[#6F4CF5] px-7.5 py-4 font-sans text-base font-semibold text-white"
            >
              Begin je 7-daagse intake →
            </button>
            <span className="font-sans text-sm text-[#9AA1AC]">
              Alles geleverd via één gestroomlijnd proces.
            </span>
          </div>
          <button
            type="button"
            onClick={openLeadForm}
            className="cursor-pointer rounded-[11px] border-0 px-7.5 py-4 font-sans text-base font-semibold text-white shadow-[0_8px_22px_rgba(163,59,214,0.28)]"
            style={{
              background:
                "linear-gradient(100deg,#6F4CF5 0%,#A63BD6 52%,#D6389E 100%)",
            }}
          >
            Bekijk onze professionele elektricien-websiteontwerpen →
          </button>
        </div>
      </div>
    </section>
  );
}

type MoreLink = { label: string; href: string };
type MoreGroup = { heading: string; links: MoreLink[] };

const MORE_GROUPS: MoreGroup[] = [
  {
    heading: "Kosten & keuzes",
    links: [
      {
        label: "Wat kost een website voor een elektricien?",
        href: "/nl/blog/kosten-website-voor-elektricien-in-nederland",
      },
      {
        label: "WordPress of een website-abonnement?",
        href: "/nl/blog/wordpress-of-een-website-abonnement-de-eerlijke-vergelijking-voor-elektriciens",
      },
      {
        label: "Zelf maken of laten maken: wat past bij jou?",
        href: "/nl/blog/3-website-zelf-maken-of-laten-maken-de-eerlijke-vergelijking-voor-elektriciens",
      },
    ],
  },
  {
    heading: "Bouw & proces",
    links: [
      {
        label: "Hoe lang duurt het om een elektricien website te maken?",
        href: "/nl/blog/hoe-lang-duurt-een-elektricien-website",
      },
      {
        label: "Mobiele website voor elektriciens: waarom het zwaarder telt",
        href: "/nl/blog/mobiele-website-voor-elektriciens",
      },
      {
        label: "Test je elektricienwebsite in 7 stappen op mobiel",
        href: "/nl/blog/mobielvriendelijke-elektricien-website-de-praktische-gids-om-het-goed-te-doen",
      },
    ],
  },
  {
    heading: "Pagina's & SEO",
    links: [
      {
        label: "De website-checklist: 10 pagina's die niet mogen ontbreken",
        href: "/nl/blog/website-checklist-elektriciens",
      },
      {
        label: "De 7 elementen van een homepage die aanvragen oplevert",
        href: "/nl/blog/de-7-elementen-van-een-elektricien-homepage-die-aanvragen-oplevert",
      },
      {
        label: "Zo schrijf je een over-ons-pagina die vertrouwen wekt",
        href: "/nl/blog/10-zo-schrijf-je-een-over-ons-pagina-voor-een-elektricien",
      },
      {
        label: "8 voorbeelden van elektricienwebsites die klanten opleveren",
        href: "/nl/blog/8-voorbeelden-van-elektricienwebsites-die-klanten-opleveren",
      },
    ],
  },
];

export function MoreForElectriciansSection() {
  return (
    <section id="meer" className="mt-24 scroll-mt-24">
      <h2 className="max-w-[720px] text-balance font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
        Meer voor elektriciens
      </h2>
      <p className="mt-3.5 max-w-[720px] font-sans text-[16.5px] leading-[1.58] text-[#6B7280]">
        Alles wat je helpt om online meer aanvragen binnen te halen — van kosten
        en keuzes tot de bouw en de losse pagina&apos;s.
      </p>
      <div className="mt-7 max-w-[820px] overflow-hidden rounded-[14px] border border-[#E6E8EF] bg-[#F8F9FC]">
        <details className="group">
          <summary className="flex min-h-[60px] cursor-pointer list-none items-center justify-between gap-6 px-7 py-6">
            <span className="font-sans text-lg font-semibold text-[#1F2937]">
              Bekijk alle artikelen voor elektriciens
            </span>
            <span
              aria-hidden="true"
              className="flex-none font-sans text-[22px] font-normal leading-none text-[#9AA1AC] transition-transform duration-200 group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <div className="flex flex-col gap-7 px-7 pb-7">
            {MORE_GROUPS.map((group) => (
              <div key={group.heading}>
                <div className="mb-3 font-sans text-[11px] font-semibold uppercase tracking-[1px] text-[#9AA1AC]">
                  {group.heading}
                </div>
                <div className="flex flex-col gap-2.5">
                  {group.links.map((link) => (
                    <div
                      key={link.href}
                      className="flex items-baseline gap-2.5"
                    >
                      <span className="flex-none font-sans text-[15px] text-[#6F4CF5]">
                        →
                      </span>
                      <a
                        href={link.href}
                        className="font-sans text-[15.5px] leading-[1.55] text-[#1F2937] no-underline"
                      >
                        {link.label}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </details>
      </div>
    </section>
  );
}
