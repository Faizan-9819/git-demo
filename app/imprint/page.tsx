import type { Metadata } from "next";
import JsonLd from "../components/JsonLd";
import { buildPageSchema } from "../lib/seo";
import { CONTACT_INFO, phoneHref } from "@/app/lib/contact";

export const metadata: Metadata = {
  title: "Imprint — Growth Rocket",
  description:
    "Company information and legal imprint for Growth Rocket by Parashift Technologies B.V.",
};

const LAST_UPDATED = "02/05/2026";
const WEBSITE = "https://www.getgrowthrocket.com/";
const ADDRESS_LINES = [
  "Prinses Margrietplantsoen 33",
  "2595 AM \u2019s-Gravenhage, Netherlands",
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
      <span className="font-semibold text-[var(--color-haiti)] ">{label}:</span>
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

export default function ImprintPage() {
  return (
    <main className="min-h-screen bg-white">
      <JsonLd
        data={buildPageSchema(
          "/imprint",
          "Imprint - Growth Rocket",
          "Company information and legal imprint for Growth Rocket by Parashift Technologies B.V.",
        )}
      />
      {/* Hero */}
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
          {/* <p className="font-poppins font-semibold uppercase text-[11px] tracking-[2.5px] text-white/60">
            Growth Rocket
          </p> */}
          <h1 className="font-poppins font-bold text-[clamp(32px,6vw,52px)] leading-[1.1] tracking-[-1.5px] text-white">
            Imprint / Company Information — Growth Rocket
          </h1>
          {/* <p className="font-poppins text-[15px] text-white/75 mt-1 max-w-[480px]">
            Company Information &amp; Legal Notice
          </p> */}
          {/* <p className="font-poppins text-[13px] text-white/50 mt-1">
            Last updated: {LAST_UPDATED}
          </p> */}
        </div>
      </section>

      {/* Content */}
      <div className="md:max-w-[1400px] md:mx-auto fix py-[72px]">
        <div className="mx-auto max-w-[780px] flex flex-col gap-10">
          {/* <p className="font-poppins text-[15px] leading-[1.75] text-[var(--color-dolphin)]">
            In accordance with applicable legal requirements, the following
            information is provided about the operator of this website.
          </p> */}

          <Section title="1. Company Details">
            <p>Growth Rocket is a product operated by:</p>
            <ul className="list-none flex flex-col gap-1.5 pl-0">
              <InfoRow label="Company" value="Parashift Technologies B.V." />
              <li className="flex gap-2">
                <span className="font-semibold text-[var(--color-haiti)]">
                  Address:
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

          <Section title="2. Legal Registration">
            <ul className="list-none flex flex-col gap-1.5 pl-0">
              <InfoRow
                label="Chamber of Commerce (KvK) Number"
                value={KVK_NUMBER}
              />
              <InfoRow label="VAT Number (BTW)" value={VAT_NUMBER} />
            </ul>
          </Section>

          <Section title="3. Contact Information">
            <ul className="list-none flex flex-col gap-1.5 pl-0">
              {CONTACT_INFO.emails.map((email) => (
                <InfoRow
                  key={email}
                  label="Email"
                  value={email}
                  href={`mailto:${email}`}
                />
              ))}
              <InfoRow
                label="Phone"
                value={CONTACT_INFO.phone}
                href={phoneHref(CONTACT_INFO.phone)}
              />
              <InfoRow label="Website" value={WEBSITE} href={WEBSITE} />
            </ul>
          </Section>

          <Section title="4. Business Activity">
            <p>Growth Rocket provides:</p>
            <Ul
              items={[
                "Managed website development",
                "Hosting and maintenance services",
                "Enquiry and booking systems",
                "Business management tools (Growth Rocket Hub)",
              ]}
            />
          </Section>

          <Section title="5. Responsible for Content">
            <ul className="list-none flex flex-col gap-1.5 pl-0">
              <li className="font-semibold text-[var(--color-haiti)]">
                Parashift Technologies B.V.
              </li>
              <li>World Trade Center</li>
              <li>Prinses Margrietplantsoen 33</li>
              <li>2595 AM &apos;s-Gravenhage, Netherlands</li>
            </ul>
          </Section>

          <Section title="6. Liability for Content">
            <p>
              We aim to keep the information on this website accurate and up to
              date. However, we do not guarantee the completeness, accuracy, or
              reliability of the content.
            </p>
          </Section>

          <Section title="7. Liability for Links">
            <p>
              This website may contain links to external websites. We are not
              responsible for the content or privacy practices of third-party
              websites.
            </p>
          </Section>

          <Section title="8. Intellectual Property">
            <p>
              All content on this website, including text, design, and
              structure, is owned by or licensed to Parashift Technologies B.V.
              unless stated otherwise. Unauthorised use, reproduction, or
              distribution is not permitted.
            </p>
          </Section>

          <Section title="9. Governing Law">
            <p>
              This website and its services are governed by applicable laws in
              the European Union / Netherlands.
            </p>
          </Section>

          <Section title="10. Contact">
            <p>For any legal or general enquiries:</p>
            <ul className="list-none flex flex-col gap-1.5 pl-0">
              <li className="font-semibold text-[var(--color-haiti)]">
                Parashift Technologies B.V.
              </li>
              {CONTACT_INFO.emails.map((email) => (
                <InfoRow
                  key={email}
                  label="Email"
                  value={email}
                  href={`mailto:${email}`}
                />
              ))}
              <InfoRow
                label="Phone"
                value={CONTACT_INFO.phone}
                href={phoneHref(CONTACT_INFO.phone)}
              />
            </ul>
          </Section>

          {/* <div className="h-px w-full bg-[var(--color-slate-200)]" />

          <p className="font-poppins text-[13px] text-[var(--color-slate-500)] text-center">
            © {new Date().getFullYear()} Growth Rocket by Parashift Technologies
            · All rights reserved
          </p> */}
        </div>
      </div>
    </main>
  );
}
