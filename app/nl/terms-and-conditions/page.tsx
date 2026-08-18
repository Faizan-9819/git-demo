import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "../../components/JsonLd";
import { buildPageSchema } from "../../lib/seo";
import { CONTACT_INFO, phoneHref } from "@/app/lib/contact";

export const metadata: Metadata = {
  title: "Algemene Voorwaarden — Growth Rocket",
  description:
    "Lees de algemene voorwaarden van Growth Rocket die het gebruik van ons Website-as-a-Service platform regelen.",
  alternates: {
    canonical: "https://www.getgrowthrocket.com/nl/terms-and-conditions",
    languages: {
      en: "https://www.getgrowthrocket.com/terms-and-conditions",
      nl: "https://www.getgrowthrocket.com/nl/terms-and-conditions",
    },
  },
};

const LAST_UPDATED = "06/05/2026";

type SectionProps = {
  title: string;
  children: React.ReactNode;
};

function Section({ title, children }: SectionProps) {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="font-poppins font-bold text-[22px] leading-[1.25] tracking-[-0.3px] text-[var(--color-haiti)] pt-2">
        {title}
      </h2>
      <div className="flex flex-col gap-3 font-poppins text-[15px] leading-[1.75] text-[var(--color-dolphin)]">
        {children}
      </div>
    </section>
  );
}

function Ul({ items }: { items: string[] }) {
  return (
    <ul className="list-disc pl-5 flex flex-col gap-1.5">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default function NlTermsAndConditionsPage() {
  return (
    <main className="min-h-screen bg-white">
      <JsonLd
        data={buildPageSchema(
          "/nl/terms-and-conditions",
          "Algemene Voorwaarden - Growth Rocket",
          "Lees de algemene voorwaarden van Growth Rocket die het gebruik van ons Website-as-a-Service platform regelen.",
        )}
      />
      <section
        className="relative overflow-hidden pt-[72px] pb-[56px]"
        style={{
          background:
            "linear-gradient(174deg, var(--color-violet-42) 0%, var(--color-violet-23) 100%)",
        }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -top-[145px] -left-[143px] w-[390px] h-[393px] rotate-[52deg] -scale-y-100"
          style={{
            background:
              "radial-gradient(50% 50% at 50% 50%, rgba(254,229,102,0.22) 0%, rgba(254,229,102,0) 70%)",
            filter: "blur(10px)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-[120px] -right-[60px] w-[390px] h-[393px] rotate-[127deg]"
          style={{
            background:
              "radial-gradient(50% 50% at 50% 50%, rgba(254,229,102,0.25) 0%, rgba(254,229,102,0) 70%)",
            filter: "blur(12px)",
          }}
        />
        <div className="md:max-w-[1400px] md:mx-auto fix relative flex flex-col items-center gap-3 text-center">
          <h1 className="font-poppins font-bold text-[clamp(32px,6vw,52px)] leading-[1.1] tracking-[-1.5px] text-white">
            Algemene Voorwaarden
          </h1>
        </div>
      </section>

      <div className="md:max-w-[1400px] md:mx-auto fix py-[72px]">
        <div className="mx-auto max-w-[780px] flex flex-col gap-10">
          <section className="flex flex-col gap-3 font-poppins text-[15px] leading-[1.75] text-[var(--color-dolphin)]">
            <p>
              <span className="font-semibold text-[var(--color-haiti)]">
                Laatst bijgewerkt: {LAST_UPDATED}
              </span>
            </p>
            <p>
              Deze Algemene Voorwaarden (&quot;Voorwaarden&quot;) regelen het
              gebruik van de diensten van Growth Rocket, beheerd door Parashift
              (&quot;wij&quot;, &quot;ons&quot;, &quot;onze&quot;).
            </p>
            <p>
              Door u aan te melden, gaat u akkoord met deze Voorwaarden. Lees ze
              zorgvuldig door.
            </p>
            <p>
              Deze Voorwaarden zijn uitsluitend van toepassing op zakelijke
              klanten. Growth Rocket is een B2B-dienst en is niet bedoeld voor
              consumenten.
            </p>
          </section>

          <Section title="1. Over Growth Rocket">
            <p>
              Growth Rocket is een Website-as-a-Service (WaaS) platform. Wij
              bieden:
            </p>
            <Ul
              items={[
                "Website-ontwerp en -ontwikkeling",
                "Hosting en domeinbeheer",
                "Onderhoud en contentupdates",
                "Backend tools voor het beheren van aanvragen en boekingen",
              ]}
            />
            <p>
              De exacte omvang van uw abonnement is afhankelijk van het gekozen
              pakket.
            </p>
          </Section>

          <Section title="2. Geschiktheid">
            <p>Om Growth Rocket te gebruiken, moet u:</p>
            <Ul
              items={[
                "Een geregistreerd bedrijf vertegenwoordigen",
                "Bevoegd zijn om overeenkomsten te sluiten namens dat bedrijf",
                "Nauwkeurige en actuele informatie verstrekken",
              ]}
            />
            <p>
              Wij behouden ons het recht voor om diensten naar eigen inzicht te
              weigeren.
            </p>
          </Section>

          <Section title="3. Abonnement en Prijzen">
            <p className="font-semibold text-[var(--color-haiti)]">Pakketten</p>
            <p>
              Wij bieden vaste jaarlijkse abonnementspakketten. Pakketgegevens
              en prijzen worden gepubliceerd op onze website.
            </p>
            <p className="font-semibold text-[var(--color-haiti)]">
              Jaarlijkse facturering
            </p>
            <p>
              Alle abonnementen worden jaarlijks gefactureerd. Wij bieden geen
              maandelijkse facturering.
            </p>
            <p className="font-semibold text-[var(--color-haiti)]">
              Verlenging
            </p>
            <p>
              Abonnementen worden jaarlijks automatisch verlengd tegen dezelfde
              prijs, tenzij voor de verlengingsdatum opgezegd.
            </p>
            <p className="font-semibold text-[var(--color-haiti)]">
              Geen restitutie
            </p>
            <p>
              Omdat wij ons voor het volledige jaar vastleggen op infrastructuur
              en middelen, bieden wij geen restitutie voor ongebruikte tijd.
            </p>
            <p className="font-semibold text-[var(--color-haiti)]">
              Prijswijzigingen
            </p>
            <p>
              Wij kunnen de prijzen voor nieuwe klanten of toekomstige
              verlengingen aanpassen. Bestaande klanten worden minimaal 30 dagen
              van tevoren op de hoogte gesteld van wijzigingen.
            </p>
          </Section>

          <Section title="4. Opzet en Levering">
            <p>
              Wij streven ernaar uw website binnen ongeveer 7 werkdagen te
              leveren na ontvangst van alle benodigde informatie. De levertijd
              is afhankelijk van:
            </p>
            <Ul
              items={[
                "Snelheid van content en feedback van uw kant",
                "Complexiteit van de vereisten",
                "Beschikbaarheid van externe diensten (bijv. domeinproviders)",
              ]}
            />
            <p>
              Wij zijn niet aansprakelijk voor vertragingen veroorzaakt door
              ontbrekende informatie of problemen bij derden.
            </p>
          </Section>

          <Section title="5. Uw Verantwoordelijkheden">
            <p>U gaat ermee akkoord om:</p>
            <Ul
              items={[
                "Nauwkeurige bedrijfsinformatie te verstrekken",
                "Content (tekst, afbeeldingen, logo's) te leveren waarvoor u rechten heeft",
                "Binnen redelijke termijn te reageren op verzoeken om input",
                "De dienst te gebruiken in overeenstemming met de toepasselijke wetgeving",
              ]}
            />
            <p>
              U bent verantwoordelijk voor de rechtmatigheid van de content die
              u aan ons verstrekt.
            </p>
          </Section>

          <Section title="6. Aanvaardbaar Gebruik">
            <p>U mag Growth Rocket niet gebruiken voor:</p>
            <Ul
              items={[
                "Illegale activiteiten",
                "Misleidende of frauduleuze content",
                "Volwassen, hatelijke of schadelijke content",
                "Spam of ongewenste marketing",
                "Activiteiten die inbreuk maken op rechten van derden",
                "Alles wat onze systemen of reputatie kan schaden",
              ]}
            />
            <p>
              Wij kunnen de dienst opschorten of beëindigen als deze regels
              worden overtreden.
            </p>
          </Section>

          <Section title="7. Intellectueel Eigendom">
            <p className="font-semibold text-[var(--color-haiti)]">
              Uw content
            </p>
            <p>
              U behoudt het eigendom van alle content die u aan ons verstrekt. U
              verleent ons een licentie om deze te gebruiken uitsluitend voor
              het leveren van de dienst.
            </p>
            <p className="font-semibold text-[var(--color-haiti)]">
              Ons platform
            </p>
            <p>
              Wij behouden alle rechten op ons platform, code, ontwerpsjablonen
              en tools. U ontvangt een licentie om de website die wij voor u
              bouwen te gebruiken gedurende de looptijd van uw abonnement.
            </p>
            <p className="font-semibold text-[var(--color-haiti)]">
              Na opzegging
            </p>
            <p>
              Als u opzegt, kunt u uw content exporteren. Wij dragen geen
              eigendom over van platformcode, sjablonen of backendsystemen.
            </p>
          </Section>

          <Section title="8. Hosting en Beschikbaarheid">
            <p>
              Wij streven ernaar uw website altijd online te houden. Wij
              garanderen geen ononderbroken dienstverlening. Uitval kan optreden
              door:
            </p>
            <Ul
              items={[
                "Onderhoud",
                "Problemen bij externe providers",
                "Overmacht",
              ]}
            />
            <p>
              Wij werken eraan problemen snel op te lossen wanneer ze zich
              voordoen.
            </p>
          </Section>

          <Section title="9. Gegevensbescherming">
            <p>
              Wij verwerken persoonsgegevens in overeenstemming met ons{" "}
              <Link
                href="/nl/privacy-policy"
                className="text-[var(--color-violet-42)] underline hover:text-[var(--color-violet-58)] transition-colors"
              >
                Privacybeleid
              </Link>{" "}
              en de toepasselijke gegevensbeschermingswetgeving. Als u
              persoonsgegevens verzamelt via uw website, bent u de
              verwerkingsverantwoordelijke. Wij treden op als verwerker namens
              u. Een afzonderlijke Verwerkersovereenkomst is op verzoek
              beschikbaar.
            </p>
          </Section>

          <Section title="10. Vertrouwelijkheid">
            <p>
              Beide partijen komen overeen niet-openbare bedrijfsinformatie
              vertrouwelijk te behandelen. Dit geldt tijdens en na de
              contractperiode.
            </p>
          </Section>

          <Section title="11. Aansprakelijkheid">
            <p>Voor zover toegestaan door de wet:</p>
            <Ul
              items={[
                "Wij zijn niet aansprakelijk voor indirecte, incidentele of gevolgschade",
                "Onze totale aansprakelijkheid is beperkt tot het bedrag dat u ons heeft betaald in de 12 maanden voorafgaand aan de claim",
                "Wij zijn niet aansprakelijk voor gederfde winst, verlies van gegevens of bedrijfsonderbreking",
              ]}
            />
            <p>
              Niets in deze Voorwaarden beperkt de aansprakelijkheid voor fraude
              of zaken die niet kunnen worden uitgesloten op grond van
              toepasselijk recht.
            </p>
          </Section>

          <Section title="12. Opzegging">
            <p>
              U kunt uw abonnement op elk moment opzeggen voor de volgende
              verlengingsdatum. Om op te zeggen:
            </p>
            <Ul
              items={[
                "Neem contact met ons op per e-mail",
                "Verstrek uw bedrijfsgegevens",
                "Wij bevestigen de opzegging schriftelijk",
              ]}
            />
            <p>
              Na opzegging loopt uw dienst door tot het einde van de betaalde
              periode. De website wordt daarna offline gehaald.
            </p>
          </Section>

          <Section title="13. Beëindiging door Ons">
            <p>Wij kunnen uw dienst opschorten of beëindigen als:</p>
            <Ul
              items={[
                "U deze Voorwaarden schendt",
                "U facturen niet betaalt",
                "U de dienst misbruikt",
                "Wij hiertoe wettelijk verplicht zijn",
              ]}
            />
            <p>Wij geven waar mogelijk een redelijke opzegtermijn.</p>
          </Section>

          <Section title="14. Wijzigingen in Deze Voorwaarden">
            <p>
              Wij kunnen deze Voorwaarden van tijd tot tijd bijwerken. Wanneer
              we dat doen, passen we de datum &quot;Laatst bijgewerkt&quot; aan
              en stellen we u op de hoogte van belangrijke wijzigingen.
              Voortgezet gebruik van de dienst betekent dat u de bijgewerkte
              Voorwaarden accepteert.
            </p>
          </Section>

          <Section title="15. Toepasselijk Recht en Jurisdictie">
            <p>
              Deze Voorwaarden worden beheerst door het recht van Nederland.
              Geschillen worden behandeld door de rechtbanken van
              &apos;s-Gravenhage (Den Haag), Nederland.
            </p>
          </Section>

          <Section title="16. Contact">
            <p>
              Voor vragen over deze Voorwaarden kunt u contact met ons opnemen:
            </p>
            <ul className="list-none flex flex-col gap-1.5 pl-0">
              <li className="flex gap-2">
                <span className="font-semibold text-[var(--color-haiti)] min-w-[80px]">
                  Bedrijf:
                </span>
                <span>Parashift Technologies B.V.</span>
              </li>
              <li className="flex gap-2">
                <span className="font-semibold text-[var(--color-haiti)] min-w-[80px]">
                  Adres:
                </span>
                <span>
                  World Trade Center, Prinses Margrietplantsoen 33, 2595
                  AM&nbsp;&apos;s-Gravenhage, Nederland
                </span>
              </li>
              {CONTACT_INFO.emails.map((email) => (
                <li key={email} className="flex gap-2">
                  <span className="font-semibold text-[var(--color-haiti)] min-w-[80px]">
                    E-mail:
                  </span>
                  <a
                    href={`mailto:${email}`}
                    className="text-[var(--color-violet-42)] underline hover:text-[var(--color-violet-58)] transition-colors"
                  >
                    {email}
                  </a>
                </li>
              ))}
              <li className="flex gap-2">
                <span className="font-semibold text-[var(--color-haiti)] min-w-[80px]">
                  Telefoon:
                </span>
                <a
                  href={phoneHref(CONTACT_INFO.phone)}
                  className="text-[var(--color-violet-42)] underline hover:text-[var(--color-violet-58)] transition-colors"
                >
                  {CONTACT_INFO.phone}
                </a>
              </li>
            </ul>
          </Section>
        </div>
      </div>
    </main>
  );
}
