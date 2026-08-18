import type { Metadata } from "next";
import JsonLd from "../../components/JsonLd";
import { buildPageSchema } from "../../lib/seo";
import { CONTACT_INFO, phoneHref } from "@/app/lib/contact";

export const metadata: Metadata = {
  title: "Impressum — Growth Rocket",
  description:
    "Bedrijfsinformatie en wettelijk impressum voor Growth Rocket door Parashift Technologies B.V.",
  alternates: {
    canonical: "https://www.getgrowthrocket.com/nl/imprint",
    languages: {
      en: "https://www.getgrowthrocket.com/imprint",
      nl: "https://www.getgrowthrocket.com/nl/imprint",
    },
  },
};

const WEBSITE = "https://www.getgrowthrocket.com/";
const ADDRESS_LINES = [
  "Prinses Margrietplantsoen 33",
  "2595 AM ’s-Gravenhage, Nederland",
];
const KVK_NUMBER = "42002389";
const VAT_NUMBER = "NL869232186B01";

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

function InfoRow({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <li className="flex gap-2">
      <span className="font-semibold text-[var(--color-haiti)]">{label}:</span>
      <span>
        {href ? (
          <a
            href={href}
            className="text-[var(--color-violet-42)] underline hover:text-[var(--color-violet-58)] transition-colors"
          >
            {value}
          </a>
        ) : (
          value
        )}
      </span>
    </li>
  );
}

export default function NlImprintPage() {
  return (
    <main className="min-h-screen bg-white">
      <JsonLd
        data={buildPageSchema(
          "/nl/imprint",
          "Impressum - Growth Rocket",
          "Bedrijfsinformatie en wettelijk impressum voor Growth Rocket door Parashift Technologies B.V.",
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
            Impressum / Bedrijfsinformatie — Growth Rocket
          </h1>
        </div>
      </section>

      <div className="md:max-w-[1400px] md:mx-auto fix py-[72px]">
        <div className="mx-auto max-w-[780px] flex flex-col gap-10">
          <Section title="1. Bedrijfsgegevens">
            <p>Growth Rocket is een product beheerd door:</p>
            <ul className="list-none flex flex-col gap-1.5 pl-0">
              <InfoRow label="Bedrijf" value="Parashift Technologies B.V." />
              <li className="flex gap-2">
                <span className="font-semibold text-[var(--color-haiti)]">
                  Adres:
                </span>
                <span>
                  {ADDRESS_LINES.map((line, i) => (
                    <span key={i}>
                      {line}
                      {i < ADDRESS_LINES.length - 1 && <br />}
                    </span>
                  ))}
                </span>
              </li>
            </ul>
          </Section>

          <Section title="2. Wettelijke Registratie">
            <ul className="list-none flex flex-col gap-1.5 pl-0">
              <InfoRow label="KvK-nummer" value={KVK_NUMBER} />
              <InfoRow label="BTW-nummer" value={VAT_NUMBER} />
            </ul>
          </Section>

          <Section title="3. Contactgegevens">
            <ul className="list-none flex flex-col gap-1.5 pl-0">
              {CONTACT_INFO.emails.map((email) => (
                <InfoRow
                  key={email}
                  label="E-mail"
                  value={email}
                  href={`mailto:${email}`}
                />
              ))}
              <InfoRow
                label="Telefoon"
                value={CONTACT_INFO.phone}
                href={phoneHref(CONTACT_INFO.phone)}
              />
              <InfoRow label="Website" value={WEBSITE} href={WEBSITE} />
            </ul>
          </Section>

          <Section title="4. Bedrijfsactiviteit">
            <p>Growth Rocket biedt:</p>
            <Ul
              items={[
                "Beheerde website-ontwikkeling",
                "Hosting- en onderhoudsdiensten",
                "Aanvraag- en boekingssystemen",
                "Bedrijfsbeheertools (Growth Rocket Hub)",
              ]}
            />
          </Section>

          <Section title="5. Verantwoordelijk voor Content">
            <ul className="list-none flex flex-col gap-1.5 pl-0">
              <li className="font-semibold text-[var(--color-haiti)]">
                Parashift Technologies B.V.
              </li>
              <li>World Trade Center</li>
              <li>Prinses Margrietplantsoen 33</li>
              <li>2595 AM &apos;s-Gravenhage, Nederland</li>
            </ul>
          </Section>

          <Section title="6. Aansprakelijkheid voor Content">
            <p>
              Wij streven ernaar de informatie op deze website nauwkeurig en
              actueel te houden. Wij garanderen echter niet de volledigheid,
              nauwkeurigheid of betrouwbaarheid van de content.
            </p>
          </Section>

          <Section title="7. Aansprakelijkheid voor Links">
            <p>
              Deze website kan links bevatten naar externe websites. Wij zijn
              niet verantwoordelijk voor de content of het privacybeleid van
              websites van derden.
            </p>
          </Section>

          <Section title="8. Intellectueel Eigendom">
            <p>
              Alle content op deze website, inclusief tekst, ontwerp en
              structuur, is eigendom van of in licentie gegeven aan Parashift
              Technologies, tenzij anders vermeld. Ongeoorloofd gebruik,
              reproductie of verspreiding is niet toegestaan.
            </p>
          </Section>

          <Section title="9. Toepasselijk Recht">
            <p>
              Deze website en haar diensten worden beheerst door de
              toepasselijke wetgeving in de Europese Unie / Nederland.
            </p>
          </Section>

          <Section title="10. Contact">
            <p>Voor juridische of algemene vragen:</p>
            <ul className="list-none flex flex-col gap-1.5 pl-0">
              <li className="font-semibold text-[var(--color-haiti)]">
                Parashift Technologies B.V.
              </li>
              {CONTACT_INFO.emails.map((email) => (
                <InfoRow
                  key={email}
                  label="E-mail"
                  value={email}
                  href={`mailto:${email}`}
                />
              ))}
              <InfoRow
                label="Telefoon"
                value={CONTACT_INFO.phone}
                href={phoneHref(CONTACT_INFO.phone)}
              />
            </ul>
          </Section>
        </div>
      </div>
    </main>
  );
}
