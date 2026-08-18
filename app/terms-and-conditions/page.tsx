import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "../components/JsonLd";
import { buildPageSchema } from "../lib/seo";
import { CONTACT_INFO, phoneHref } from "@/app/lib/contact";

export const metadata: Metadata = {
  title: "Terms and Conditions — Growth Rocket",
  description:
    "Read the Growth Rocket Terms and Conditions that govern the use of our Website-as-a-Service platform.",
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

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen bg-white">
      <JsonLd
        data={buildPageSchema(
          "/terms-and-conditions",
          "Terms and Conditions - Growth Rocket",
          "Read the Growth Rocket Terms and Conditions that govern the use of our Website-as-a-Service platform.",
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
          <h1 className="font-poppins font-bold text-[clamp(32px,6vw,52px)] leading-[1.1] tracking-[-1.5px] text-white">
            Terms and Conditions
          </h1>
        </div>
      </section>

      {/* Content */}
      <div className="md:max-w-[1400px] md:mx-auto fix py-[72px]">
        <div className="mx-auto max-w-[780px] flex flex-col gap-10">
          {/* Preamble */}
          <section className="flex flex-col gap-3 font-poppins text-[15px] leading-[1.75] text-[var(--color-dolphin)]">
            <p>
              <span className="font-semibold text-[var(--color-haiti)]">
                Last updated: {LAST_UPDATED}
              </span>
            </p>
            <p>
              These Terms and Conditions (&quot;Terms&quot;) govern the use of
              Growth Rocket services, operated by Parashift (&quot;we&quot;,
              &quot;us&quot;, &quot;our&quot;).
            </p>
            <p>
              By signing up, you agree to these Terms. Please read them
              carefully.
            </p>
            <p>
              These Terms apply to business customers only. Growth Rocket is a
              B2B service and is not intended for consumers.
            </p>
          </section>

          <Section title="1. About Growth Rocket">
            <p>
              Growth Rocket is a Website-as-a-Service (WaaS) platform. We
              provide:
            </p>
            <Ul
              items={[
                "Website design and development",
                "Hosting and domain management",
                "Maintenance and content updates",
                "Backend tools to manage enquiries and bookings",
              ]}
            />
            <p>
              The exact scope of your subscription depends on the plan you
              choose.
            </p>
          </Section>

          <Section title="2. Eligibility">
            <p>To use Growth Rocket, you must:</p>
            <Ul
              items={[
                "Represent a registered business",
                "Be authorised to enter into agreements on behalf of that business",
                "Provide accurate and current information",
              ]}
            />
            <p>We reserve the right to refuse service at our discretion.</p>
          </Section>

          <Section title="3. Subscription and Pricing">
            <p className="font-semibold text-[var(--color-haiti)]">Plans</p>
            <p>
              We offer fixed annual subscription plans. Plan details and prices
              are published on our website.
            </p>
            <p className="font-semibold text-[var(--color-haiti)]">
              Annual billing
            </p>
            <p>
              All subscriptions are billed yearly. We do not offer monthly
              billing.
            </p>
            <p className="font-semibold text-[var(--color-haiti)]">Renewal</p>
            <p>
              Subscriptions renew automatically each year at the same price,
              unless cancelled before the renewal date.
            </p>
            <p className="font-semibold text-[var(--color-haiti)]">
              No refunds
            </p>
            <p>
              Because we commit to infrastructure and resources for the full
              year, we do not offer refunds for unused time.
            </p>
            <p className="font-semibold text-[var(--color-haiti)]">
              Price changes
            </p>
            <p>
              We may update pricing for new customers or future renewals.
              Existing customers will be notified at least 30 days before any
              change applies to them.
            </p>
          </Section>

          <Section title="4. Setup and Delivery">
            <p>
              We aim to deliver your website within approximately 7 working days
              after we receive all required information from you. Delivery times
              depend on:
            </p>
            <Ul
              items={[
                "Speed of content and feedback from your side",
                "Complexity of requirements",
                "Availability of third-party services (e.g. domain providers)",
              ]}
            />
            <p>
              We are not liable for delays caused by missing information or
              third-party issues.
            </p>
          </Section>

          <Section title="5. Your Responsibilities">
            <p>You agree to:</p>
            <Ul
              items={[
                "Provide accurate business information",
                "Supply content (text, images, logos) you have the right to use",
                "Respond to requests for input within reasonable time",
                "Use the service in line with applicable laws",
              ]}
            />
            <p>
              You are responsible for the legality of any content you provide to
              us.
            </p>
          </Section>

          <Section title="6. Acceptable Use">
            <p>You may not use Growth Rocket for:</p>
            <Ul
              items={[
                "Illegal activities",
                "Misleading or fraudulent content",
                "Adult, hateful, or harmful content",
                "Spam or unsolicited marketing",
                "Activity that infringes third-party rights",
                "Anything that could damage our systems or reputation",
              ]}
            />
            <p>
              We may suspend or terminate service if these rules are broken.
            </p>
          </Section>

          <Section title="7. Intellectual Property">
            <p className="font-semibold text-[var(--color-haiti)]">
              Your content
            </p>
            <p>
              You keep ownership of all content you provide to us. You grant us
              a licence to use it only as needed to deliver the service.
            </p>
            <p className="font-semibold text-[var(--color-haiti)]">
              Our platform
            </p>
            <p>
              We retain all rights to our platform, code, design templates, and
              tools. You receive a licence to use the website we build for you
              for the duration of your subscription.
            </p>
            <p className="font-semibold text-[var(--color-haiti)]">
              After cancellation
            </p>
            <p>
              If you cancel, you may export your content. We do not transfer
              ownership of platform code, templates, or backend systems.
            </p>
          </Section>

          <Section title="8. Hosting and Availability">
            <p>
              We aim to keep your website online at all times. We do not
              guarantee uninterrupted service. Downtime may occur due to:
            </p>
            <Ul
              items={[
                "Maintenance",
                "Third-party provider issues",
                "Force majeure events",
              ]}
            />
            <p>We work to resolve issues quickly when they arise.</p>
          </Section>

          <Section title="9. Data Protection">
            <p>
              We process personal data in line with our{" "}
              <Link
                href="/privacy-policy"
                className="text-[var(--color-violet-42)] underline hover:text-[var(--color-violet-58)] transition-colors"
              >
                Privacy Policy
              </Link>{" "}
              and applicable data protection laws. If you collect personal data
              through your website, you are the data controller. We act as a
              data processor on your behalf. A separate Data Processing
              Agreement is available on request.
            </p>
          </Section>

          <Section title="10. Confidentiality">
            <p>
              Both parties agree to keep non-public business information
              confidential. This applies during and after the contract period.
            </p>
          </Section>

          <Section title="11. Liability">
            <p>To the extent permitted by law:</p>
            <Ul
              items={[
                "We are not liable for indirect, incidental, or consequential damages",
                "Our total liability is limited to the amount you paid us in the 12 months before the claim",
                "We are not liable for lost profits, lost data, or business interruption",
              ]}
            />
            <p>
              Nothing in these Terms limits liability for fraud or for matters
              that cannot be excluded under applicable law.
            </p>
          </Section>

          <Section title="12. Cancellation">
            <p>
              You can cancel your subscription at any time before the next
              renewal date. To cancel:
            </p>
            <Ul
              items={[
                "Contact us by email",
                "Provide your business details",
                "We will confirm cancellation in writing",
              ]}
            />
            <p>
              After cancellation, your service continues until the end of the
              paid period. The website is then taken offline.
            </p>
          </Section>

          <Section title="13. Termination by Us">
            <p>We may suspend or end your service if:</p>
            <Ul
              items={[
                "You break these Terms",
                "You fail to pay invoices",
                "You misuse the service",
                "We are required to do so by law",
              ]}
            />
            <p>We will give reasonable notice when possible.</p>
          </Section>

          <Section title="14. Changes to These Terms">
            <p>
              We may update these Terms from time to time. When we do, we update
              the &quot;Last updated&quot; date and notify you of significant
              changes. Continued use of the service means you accept the updated
              Terms.
            </p>
          </Section>

          <Section title="15. Governing Law and Jurisdiction">
            <p>
              These Terms are governed by the laws of the Netherlands. Any
              disputes will be handled by the courts of&nbsp;&apos;s-Gravenhage
              (The Hague), Netherlands.
            </p>
          </Section>

          <Section title="16. Contact">
            <p>For questions about these Terms, contact us:</p>
            <ul className="list-none flex flex-col gap-1.5 pl-0">
              <li className="flex gap-2">
                <span className="font-semibold text-[var(--color-haiti)] min-w-[80px]">
                  Company:
                </span>
                <span>Parashift Technologies B.V.</span>
              </li>
              <li className="flex gap-2">
                <span className="font-semibold text-[var(--color-haiti)] min-w-[80px]">
                  Address:
                </span>
                <span>
                  World Trade Center, Prinses Margrietplantsoen 33, 2595
                  AM&nbsp;&apos;s-Gravenhage, Netherlands
                </span>
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
        </div>
      </div>
    </main>
  );
}
