import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "../../components/JsonLd";
import { buildPageSchema } from "../../lib/seo";
import { CONTACT_INFO, phoneHref } from "@/app/lib/contact";

export const metadata: Metadata = {
  title: "Privacybeleid — Growth Rocket",
  description:
    "Lees het privacybeleid van Growth Rocket om te begrijpen hoe wij uw persoonsgegevens verzamelen, gebruiken en beschermen.",
  alternates: {
    canonical: "https://www.getgrowthrocket.com/nl/privacy-policy",
    languages: {
      en: "https://www.getgrowthrocket.com/privacy-policy",
      nl: "https://www.getgrowthrocket.com/nl/privacy-policy",
    },
  },
};

const KVK_NUMBER = "KvK-nummer - 42002389";
const VAT_NUMBER = "BTW-nummer - NL869232186B01";

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

export default function NlPrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      <JsonLd
        data={buildPageSchema(
          "/nl/privacy-policy",
          "Privacybeleid - Growth Rocket",
          "Lees het privacybeleid van Growth Rocket om te begrijpen hoe wij uw persoonsgegevens verzamelen, gebruiken en beschermen.",
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
            Privacybeleid — Growth Rocket
          </h1>
        </div>
      </section>

      <div className="md:max-w-[1400px] md:mx-auto fix py-[72px]">
        <div className="mx-auto max-w-[780px] flex flex-col gap-10">
          <Section title="1. Inleiding">
            <p>
              Growth Rocket (&quot;wij&quot;, &quot;ons&quot;, &quot;onze&quot;)
              biedt beheerde website- en aanvraag-/boekingsoplossingen voor
              kleine bedrijven.
            </p>
            <p>Dit privacybeleid legt uit:</p>
            <Ul
              items={[
                "Welke persoonsgegevens wij verzamelen",
                "Hoe wij deze gebruiken",
                "Hoe wij deze opslaan en beschermen",
                "Uw rechten onder de toepasselijke gegevensbeschermingswetgeving (inclusief AVG/GDPR)",
              ]}
            />
            <p>
              Door gebruik te maken van onze website of diensten, gaat u akkoord
              met dit beleid.
            </p>
          </Section>

          <Section title="2. Wie Wij Zijn">
            <p>Growth Rocket wordt beheerd door:</p>
            <ul className="list-none flex flex-col gap-1.5 pl-0">
              <li className="font-semibold text-[var(--color-haiti)]">
                Parashift Technologies B.V.
              </li>
              <li>World Trade Center</li>
              <li>Prinses Margrietplantsoen 33</li>
              <li>2595 AM &apos;s-Gravenhage, Nederland</li>
              <li>{KVK_NUMBER}</li>
              <li>{VAT_NUMBER}</li>
              {CONTACT_INFO.emails.map((email) => (
                <li key={email} className="flex gap-2">
                  <span className="font-semibold text-[var(--color-haiti)]">
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
                <span className="font-semibold text-[var(--color-haiti)]">
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

          <Section title="3. Welke Gegevens Wij Verzamelen">
            <p>
              Wij verzamelen alleen de gegevens die noodzakelijk zijn voor het
              leveren van onze diensten.
            </p>
            <p className="font-semibold text-[var(--color-haiti)]">
              🔹 Informatie die u rechtstreeks verstrekt:
            </p>
            <Ul
              items={[
                "Naam",
                "Telefoonnummer",
                "E-mailadres",
                "Bedrijfsnaam",
                "Branche / type werkzaamheden",
                "Berichten of aanvraaggegevens",
              ]}
            />
            <p className="font-semibold text-[var(--color-haiti)]">
              🔹 Automatisch verzamelde informatie:
            </p>
            <Ul
              items={[
                "IP-adres",
                "Browsertype en apparaat",
                "Bezochte pagina's en interactiegegevens",
              ]}
            />
          </Section>

          <Section title="4. Hoe Wij Uw Gegevens Gebruiken">
            <p>Wij gebruiken uw gegevens om:</p>
            <Ul
              items={[
                "Te reageren op aanvragen en contactverzoeken",
                "Growth Rocket-diensten te leveren en te beheren",
                "Uw website op te zetten en te onderhouden",
                "Aanvragen en boekingen via de Hub te beheren",
                "Ondersteuning en updates te bieden",
                "Onze website en diensten te verbeteren",
              ]}
            />
            <p>Wij verkopen uw persoonsgegevens niet.</p>
          </Section>

          <Section title="5. Rechtsgrond voor Verwerking (AVG)">
            <p>Wij verwerken uw gegevens op basis van:</p>
            <ul className="list-disc pl-5 flex flex-col gap-1.5">
              <li>
                <span className="font-semibold text-[var(--color-haiti)]">
                  Toestemming
                </span>{" "}
                — wanneer u formulieren invult of contact met ons opneemt
              </li>
              <li>
                <span className="font-semibold text-[var(--color-haiti)]">
                  Overeenkomst
                </span>{" "}
                — om de door u gevraagde diensten te leveren
              </li>
              <li>
                <span className="font-semibold text-[var(--color-haiti)]">
                  Gerechtvaardigd belang
                </span>{" "}
                — om onze diensten te verbeteren en te exploiteren
              </li>
            </ul>
          </Section>

          <Section title="6. Hoe Wij Gegevens Opslaan en Beschermen">
            <p>
              Wij nemen passende technische en organisatorische maatregelen om
              uw gegevens te beschermen.
            </p>
            <Ul
              items={[
                "Gegevens worden veilig opgeslagen op servers in de Europese Unie (waar van toepassing)",
                "Toegang is beperkt tot bevoegd personeel",
                "Gegevens worden beschermd met gangbare beveiligingsmaatregelen",
              ]}
            />
          </Section>

          <Section title="7. Delen van Gegevens">
            <p>
              Wij delen gegevens alleen wanneer dat noodzakelijk is voor het
              leveren van onze diensten.
            </p>
            <p>Dit kan omvatten:</p>
            <Ul
              items={[
                "Hostingproviders",
                "Analysetools",
                "Ondersteunings- en communicatietools",
              ]}
            />
            <p>
              Alle externe aanbieders worden geselecteerd om te voldoen aan de
              AVG/GDPR-nalevingsnormen.
            </p>
          </Section>

          <Section title="8. Cookies en Tracking">
            <p>Wij kunnen cookies gebruiken om:</p>
            <Ul
              items={[
                "Te begrijpen hoe onze website wordt gebruikt",
                "Prestaties en gebruikerservaring te verbeteren",
              ]}
            />
            <p>
              Raadpleeg voor meer informatie ons{" "}
              <Link
                href="/nl/cookie-policy"
                className="text-[var(--color-violet-42)] underline hover:text-[var(--color-violet-58)] transition-colors"
              >
                Cookiebeleid
              </Link>
              .
            </p>
          </Section>

          <Section title="9. Bewaartermijn">
            <p>Wij bewaren persoonsgegevens alleen zo lang als noodzakelijk:</p>
            <Ul
              items={[
                "Voor aanvragen: totdat het verzoek is afgehandeld",
                "Voor klanten: gedurende de looptijd van de dienst en een redelijke periode daarna",
                "Voor wettelijke of administratieve doeleinden, indien vereist",
              ]}
            />
          </Section>

          <Section title="10. Uw Rechten (AVG / GDPR)">
            <p>U heeft het recht om:</p>
            <Ul
              items={[
                "Uw persoonsgegevens in te zien",
                "Onjuiste gegevens te corrigeren",
                "Verwijdering van uw gegevens te verzoeken",
                "Verwerking te beperken of bezwaar te maken",
                "Gegevensoverdraagbaarheid te verzoeken",
              ]}
            />
            <p>Neem contact met ons op om uw rechten uit te oefenen:</p>
            <ul className="list-none flex flex-col gap-1.5 pl-0">
              {CONTACT_INFO.emails.map((email) => (
                <li key={email}>
                  <a
                    href={`mailto:${email}`}
                    className="text-[var(--color-violet-42)] underline hover:text-[var(--color-violet-58)] transition-colors"
                  >
                    {email}
                  </a>
                </li>
              ))}
            </ul>
          </Section>

          <Section title="11. Links naar Derden">
            <p>
              Onze website kan links bevatten naar externe websites. Wij zijn
              niet verantwoordelijk voor het privacybeleid van die websites.
            </p>
          </Section>

          <Section title="12. Wijzigingen in Dit Beleid">
            <p>
              Wij kunnen dit privacybeleid van tijd tot tijd bijwerken.
              Eventuele updates worden op deze pagina gepubliceerd.
            </p>
          </Section>

          <Section title="13. Contact">
            <p>
              Heeft u vragen over dit privacybeleid of uw gegevens? Neem dan
              contact met ons op:
            </p>
            <ul className="list-none flex flex-col gap-1.5 pl-0">
              <li className="flex gap-2">
                <span className="font-semibold text-[var(--color-haiti)] min-w-[80px]">
                  Bedrijf:
                </span>
                <span>Parashift Technologies B.V.</span>
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
