import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "../components/JsonLd";
import { buildPageSchema } from "../lib/seo";
import { CONTACT_INFO, phoneHref } from "@/app/lib/contact";

export const metadata: Metadata = {
  title: "Cookie Policy — Growth Rocket",
  description:
    "Learn how Growth Rocket uses cookies and similar tracking technologies on our website.",
};

const LAST_UPDATED = "02/05/2026";

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

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      <JsonLd
        data={buildPageSchema(
          "/cookie-policy",
          "Cookie Policy - Growth Rocket",
          "Learn how Growth Rocket uses cookies and similar tracking technologies on our website.",
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
            Cookie Policy — Growth Rocket
          </h1>
          {/* <p className="font-poppins text-[13px] text-white/50 mt-1">
            Last updated: {LAST_UPDATED}
          </p> */}
        </div>
      </section>

      {/* Content */}
      <div className="md:max-w-[1400px] md:mx-auto fix py-[72px]">
        <div className="mx-auto max-w-[780px] flex flex-col gap-10">
          <Section title="1. Introduction">
            <p>
              This Cookie Policy explains how Growth Rocket (&quot;we&quot;,
              &quot;us&quot;, &quot;our&quot;) uses cookies and similar tracking
              technologies when you visit our website.
            </p>
            <p>
              By continuing to use our website, you agree to the use of cookies
              as described in this policy, unless you disable them in your
              browser or via our cookie settings.
            </p>
          </Section>

          <Section title="2. What Are Cookies">
            <p>
              Cookies are small text files stored on your device when you visit
              a website. They help websites function properly and improve user
              experience.
            </p>
            <p>Cookies can be:</p>
            <Ul
              items={[
                "Session cookies (deleted when you close your browser)",
                "Persistent cookies (stored for a set period of time)",
              ]}
            />
          </Section>

          <Section title="3. Why We Use Cookies">
            <p>We use cookies to:</p>
            <Ul
              items={[
                "Ensure the website functions properly",
                "Improve website performance and user experience",
                "Understand how visitors interact with our website",
                "Measure traffic and usage patterns",
                "Support marketing and advertising (if enabled)",
              ]}
            />
          </Section>

          <Section title="4. Types of Cookies We Use">
            <div className="flex flex-col gap-3">
              <CookieType title="Strictly Necessary Cookies">
                <p>
                  These cookies are essential for the website to function. They
                  enable:
                </p>
                <Ul
                  items={[
                    "Page navigation",
                    "Secure access to forms and features",
                    "Basic website functionality",
                  ]}
                />
                <p className="font-medium text-[var(--color-haiti)]">
                  You cannot disable these cookies.
                </p>
              </CookieType>

              <CookieType title="Performance & Analytics Cookies">
                <p>
                  These cookies help us understand how visitors use our website.
                  We may use tools such as:
                </p>
                <Ul items={["Google Analytics (or similar analytics tools)"]} />
                <p>They help us track:</p>
                <Ul
                  items={[
                    "Pages visited",
                    "Time spent on site",
                    "User interactions",
                  ]}
                />
                <p>
                  All data is used in aggregated and anonymised form where
                  possible.
                </p>
              </CookieType>

              <CookieType title="Functional Cookies">
                <p>These cookies enable enhanced functionality, such as:</p>
                <Ul
                  items={[
                    "Remembering user preferences",
                    "Improving form interactions",
                  ]}
                />
              </CookieType>

              <CookieType title="Marketing & Tracking Cookies (Optional)">
                <p>These cookies may be used for:</p>
                <Ul
                  items={[
                    "Retargeting ads",
                    "Measuring campaign performance",
                    "Understanding user behaviour across platforms",
                  ]}
                />
                <p>Examples include:</p>
                <Ul
                  items={[
                    "Meta Pixel (Facebook/Instagram ads)",
                    "Google Ads tracking",
                  ]}
                />
                <p className="font-medium text-[var(--color-haiti)]">
                  These are only activated with user consent.
                </p>
              </CookieType>
            </div>
          </Section>

          <Section title="5. Third-Party Cookies">
            <p>
              Some cookies may be set by third-party services we use, including:
            </p>
            <Ul
              items={[
                "Hosting providers",
                "Analytics tools",
                "Advertising platforms",
                "Embedded content (e.g., videos or external widgets)",
              ]}
            />
            <p>
              We do not control these cookies directly. Please refer to their
              respective privacy policies.
            </p>
          </Section>

          <Section title="6. Cookie Consent">
            <p>
              When you first visit our website, you will see a cookie banner
              allowing you to:
            </p>
            <Ul
              items={[
                "Accept all cookies",
                "Reject non-essential cookies",
                "Manage preferences",
              ]}
            />
            <p>You can change your preferences at any time.</p>
          </Section>

          <Section title="7. Managing or Disabling Cookies">
            <p>You can control cookies through your browser settings:</p>
            <Ul
              items={[
                "Block all cookies",
                "Delete existing cookies",
                "Receive alerts before cookies are stored",
              ]}
            />
            <p>
              Please note: disabling cookies may affect website functionality.
            </p>
          </Section>

          <Section title="8. Data Protection (GDPR / AVG)">
            <p>
              Any personal data collected via cookies is handled in accordance
              with our{" "}
              <Link
                href="/privacy-policy"
                className="text-[var(--color-violet-42)] underline hover:text-[var(--color-violet-58)] transition-colors"
              >
                Privacy Policy
              </Link>
              . We ensure:
            </p>
            <Ul
              items={[
                "Minimal data collection",
                "Secure processing",
                "Compliance with EU GDPR / Dutch AVG regulations",
              ]}
            />
          </Section>

          <Section title="9. Updates to This Policy">
            <p>
              We may update this Cookie Policy from time to time to reflect:
            </p>
            <Ul
              items={[
                "Changes in technology",
                "Legal requirements",
                "Updates to our services",
              ]}
            />
            <p>The latest version will always be available on this page.</p>
          </Section>

          <Section title="10. Contact">
            <p>
              If you have any questions about this Cookie Policy, contact us:
            </p>
            <ul className="list-none flex flex-col gap-1.5 pl-0">
              <li className="font-semibold text-[var(--color-haiti)]">
                Growth Rocket / Parashift Technologies B.V.
              </li>
              {CONTACT_INFO.emails.map((email) => (
                <li key={email} className="flex gap-2">
                  <span className="font-semibold text-[var(--color-haiti)] min-w-[80px]">
                    Email:
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
                  Phone:
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
