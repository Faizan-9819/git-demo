import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "../../components/JsonLd";
import { buildPageSchema } from "../../lib/seo";
import { CONTACT_INFO, phoneHref } from "@/app/lib/contact";

export const metadata: Metadata = {
  title: "Cookiebeleid — Growth Rocket",
  description:
    "Ontdek hoe Growth Rocket cookies en vergelijkbare trackingtechnologieën gebruikt op onze website.",
  alternates: {
    canonical: "https://www.getgrowthrocket.com/nl/cookie-policy",
    languages: {
      en: "https://www.getgrowthrocket.com/cookie-policy",
      nl: "https://www.getgrowthrocket.com/nl/cookie-policy",
    },
  },
};

type SectionProps = { title: string; children: React.ReactNode };

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

function CookieType({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2 rounded-[14px] border border-[var(--color-slate-200)] bg-[var(--color-violet-98)] px-5 py-4">
      <p className="font-poppins font-semibold text-[15px] text-[var(--color-violet-42)]">
        {title}
      </p>
      <div className="flex flex-col gap-2 font-poppins text-[14px] leading-[1.75] text-[var(--color-dolphin)]">
        {children}
      </div>
    </div>
  );
}

export default function NlCookiePolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      <JsonLd
        data={buildPageSchema(
          "/nl/cookie-policy",
          "Cookiebeleid - Growth Rocket",
          "Ontdek hoe Growth Rocket cookies en vergelijkbare trackingtechnologieën gebruikt op onze website.",
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
            Cookiebeleid — Growth Rocket
          </h1>
        </div>
      </section>

      <div className="md:max-w-[1400px] md:mx-auto fix py-[72px]">
        <div className="mx-auto max-w-[780px] flex flex-col gap-10">
          <Section title="1. Inleiding">
            <p>
              Dit cookiebeleid legt uit hoe Growth Rocket (&quot;wij&quot;,
              &quot;ons&quot;, &quot;onze&quot;) cookies en vergelijkbare
              trackingtechnologieën gebruikt wanneer u onze website bezoekt.
            </p>
            <p>
              Door onze website te blijven gebruiken, gaat u akkoord met het
              gebruik van cookies zoals beschreven in dit beleid, tenzij u deze
              uitschakelt in uw browser of via onze cookie-instellingen.
            </p>
          </Section>

          <Section title="2. Wat Zijn Cookies">
            <p>
              Cookies zijn kleine tekstbestanden die op uw apparaat worden
              opgeslagen wanneer u een website bezoekt. Ze helpen websites
              correct te functioneren en verbeteren de gebruikerservaring.
            </p>
            <p>Cookies kunnen zijn:</p>
            <Ul
              items={[
                "Sessiecookies (worden verwijderd wanneer u uw browser sluit)",
                "Permanente cookies (worden voor een bepaalde periode opgeslagen)",
              ]}
            />
          </Section>

          <Section title="3. Waarom Wij Cookies Gebruiken">
            <p>Wij gebruiken cookies om:</p>
            <Ul
              items={[
                "Ervoor te zorgen dat de website correct functioneert",
                "De websiteprestaties en gebruikerservaring te verbeteren",
                "Te begrijpen hoe bezoekers onze website gebruiken",
                "Verkeer en gebruikspatronen te meten",
                "Marketing en advertenties te ondersteunen (indien ingeschakeld)",
              ]}
            />
          </Section>

          <Section title="4. Soorten Cookies Die Wij Gebruiken">
            <div className="flex flex-col gap-3">
              <CookieType title="Strikt Noodzakelijke Cookies">
                <p>
                  Deze cookies zijn essentieel voor de werking van de website.
                  Ze maken mogelijk:
                </p>
                <Ul
                  items={[
                    "Paginanavigatie",
                    "Veilige toegang tot formulieren en functies",
                    "Basiswebsitefunctionaliteit",
                  ]}
                />
                <p className="font-medium text-[var(--color-haiti)]">
                  U kunt deze cookies niet uitschakelen.
                </p>
              </CookieType>

              <CookieType title="Prestatie- en Analysecookies">
                <p>
                  Deze cookies helpen ons te begrijpen hoe bezoekers onze
                  website gebruiken. Wij kunnen gebruik maken van tools zoals:
                </p>
                <Ul
                  items={["Google Analytics (of vergelijkbare analysetools)"]}
                />
                <p>Ze helpen ons bij te houden:</p>
                <Ul
                  items={[
                    "Bezochte pagina's",
                    "Tijd besteed op de site",
                    "Gebruikersinteracties",
                  ]}
                />
                <p>
                  Alle gegevens worden waar mogelijk in geaggregeerde en
                  geanonimiseerde vorm gebruikt.
                </p>
              </CookieType>

              <CookieType title="Functionele Cookies">
                <p>Deze cookies bieden verbeterde functionaliteit, zoals:</p>
                <Ul
                  items={[
                    "Gebruikersvoorkeuren onthouden",
                    "Formulierinteracties verbeteren",
                  ]}
                />
              </CookieType>

              <CookieType title="Marketing- en Trackingcookies (Optioneel)">
                <p>Deze cookies kunnen worden gebruikt voor:</p>
                <Ul
                  items={[
                    "Retargeting advertenties",
                    "Campagneprestaties meten",
                    "Gebruikersgedrag op platforms begrijpen",
                  ]}
                />
                <p>Voorbeelden zijn:</p>
                <Ul
                  items={[
                    "Meta Pixel (Facebook/Instagram advertenties)",
                    "Google Ads tracking",
                  ]}
                />
                <p className="font-medium text-[var(--color-haiti)]">
                  Deze worden alleen geactiveerd met toestemming van de
                  gebruiker.
                </p>
              </CookieType>
            </div>
          </Section>

          <Section title="5. Cookies van Derden">
            <p>
              Sommige cookies kunnen worden geplaatst door externe diensten die
              wij gebruiken, waaronder:
            </p>
            <Ul
              items={[
                "Hostingproviders",
                "Analysetools",
                "Advertentieplatforms",
                "Ingesloten content (bijv. video's of externe widgets)",
              ]}
            />
            <p>
              Wij beheren deze cookies niet rechtstreeks. Raadpleeg hun
              respectievelijke privacybeleid.
            </p>
          </Section>

          <Section title="6. Cookietoestemming">
            <p>
              Wanneer u onze website voor het eerst bezoekt, ziet u een
              cookiebanner waarmee u:
            </p>
            <Ul
              items={[
                "Alle cookies kunt accepteren",
                "Niet-essentiële cookies kunt weigeren",
                "Voorkeuren kunt beheren",
              ]}
            />
            <p>U kunt uw voorkeuren op elk moment wijzigen.</p>
          </Section>

          <Section title="7. Cookies Beheren of Uitschakelen">
            <p>U kunt cookies beheren via uw browserinstellingen:</p>
            <Ul
              items={[
                "Alle cookies blokkeren",
                "Bestaande cookies verwijderen",
                "Meldingen ontvangen voordat cookies worden opgeslagen",
              ]}
            />
            <p>
              Let op: het uitschakelen van cookies kan de websitewerking
              beïnvloeden.
            </p>
          </Section>

          <Section title="8. Gegevensbescherming (AVG / GDPR)">
            <p>
              Persoonsgegevens verzameld via cookies worden verwerkt in
              overeenstemming met ons{" "}
              <Link
                href="/nl/privacy-policy"
                className="text-[var(--color-violet-42)] underline hover:text-[var(--color-violet-58)] transition-colors"
              >
                Privacybeleid
              </Link>
              . Wij zorgen voor:
            </p>
            <Ul
              items={[
                "Minimale gegevensverzameling",
                "Veilige verwerking",
                "Naleving van EU AVG / GDPR-regelgeving",
              ]}
            />
          </Section>

          <Section title="9. Updates van Dit Beleid">
            <p>
              Wij kunnen dit cookiebeleid van tijd tot tijd bijwerken vanwege:
            </p>
            <Ul
              items={[
                "Technologische veranderingen",
                "Wettelijke vereisten",
                "Updates van onze diensten",
              ]}
            />
            <p>De meest recente versie is altijd beschikbaar op deze pagina.</p>
          </Section>

          <Section title="10. Contact">
            <p>
              Heeft u vragen over dit cookiebeleid? Neem dan contact met ons op:
            </p>
            <ul className="list-none flex flex-col gap-1.5 pl-0">
              <li className="font-semibold text-[var(--color-haiti)]">
                Growth Rocket / Parashift Technologies B.V.
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
