// import type { Metadata } from "next";
// import Link from "next/link";
// import JsonLd from "../components/JsonLd";
// import { buildPageSchema } from "../lib/seo";
// import { CONTACT_INFO, phoneHref } from "@/app/lib/contact";

// export const metadata: Metadata = {
//   title: "Privacy Policy — Growth Rocket",
//   description:
//     "Read the Growth Rocket privacy policy to understand how we collect, use, and protect your personal data.",
// };

// const LAST_UPDATED = "02/05/2026";
// const KVK_NUMBER = "KvK Number - 42002389";
// const VAT_NUMBER = "VAT Number - NL869232186B01";

// type SectionProps = {
//   title: string;
//   children: React.ReactNode;
// };

// function Section({ title, children }: SectionProps) {
//   return (
//     <section className="flex flex-col gap-4">
//       <h2 className="font-poppins font-bold text-[22px] leading-[1.25] tracking-[-0.3px] text-[var(--color-haiti)] pt-2">
//         {title}
//       </h2>
//       <div className="flex flex-col gap-3 font-poppins text-[15px] leading-[1.75] text-[var(--color-dolphin)]">
//         {children}
//       </div>
//     </section>
//   );
// }

// function Ul({ items }: { items: string[] }) {
//   return (
//     <ul className="list-disc pl-5 flex flex-col gap-1.5">
//       {items.map((item) => (
//         <li key={item}>{item}</li>
//       ))}
//     </ul>
//   );
// }

// export default function PrivacyPolicyPage() {
//   return (
//     <main className="min-h-screen bg-white">
//       <JsonLd
//         data={buildPageSchema(
//           "/privacy-policy",
//           "Privacy Policy - Growth Rocket",
//           "Read the Growth Rocket privacy policy to understand how we collect, use, and protect your personal data.",
//         )}
//       />
//       {/* Hero */}
//       <section
//         className="relative overflow-hidden pt-[72px] pb-[56px]"
//         style={{
//           background:
//             "linear-gradient(174deg, var(--color-violet-42) 0%, var(--color-violet-23) 100%)",
//         }}
//       >
//         <div
//           aria-hidden
//           className="pointer-events-none absolute -top-[145px] -left-[143px] w-[390px] h-[393px] rotate-[52deg] -scale-y-100"
//           style={{
//             background:
//               "radial-gradient(50% 50% at 50% 50%, rgba(254,229,102,0.22) 0%, rgba(254,229,102,0) 70%)",
//             filter: "blur(10px)",
//           }}
//         />
//         <div
//           aria-hidden
//           className="pointer-events-none absolute -bottom-[120px] -right-[60px] w-[390px] h-[393px] rotate-[127deg]"
//           style={{
//             background:
//               "radial-gradient(50% 50% at 50% 50%, rgba(254,229,102,0.25) 0%, rgba(254,229,102,0) 70%)",
//             filter: "blur(12px)",
//           }}
//         />
//         <div className="md:max-w-[1400px] md:mx-auto fix relative flex flex-col items-center gap-3 text-center">
//           {/* <p className="font-poppins font-semibold uppercase text-[11px] tracking-[2.5px] text-white/60">
//             Growth Rocket
//           </p> */}
//           <h1 className="font-poppins font-bold text-[clamp(32px,6vw,52px)] leading-[1.1] tracking-[-1.5px] text-white">
//             Privacy Policy — Growth Rocket
//           </h1>
//           {/* <p className="font-poppins text-[14px] text-white/60 mt-1">
//             Last updated: {LAST_UPDATED}
//           </p> */}
//         </div>
//       </section>

//       {/* Content */}
//       <div className="md:max-w-[1400px] md:mx-auto fix py-[72px]">
//         <div className="mx-auto max-w-[780px] flex flex-col gap-10">
//           <Section title="1. Introduction">
//             <p>
//               Growth Rocket (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;)
//               provides managed website and enquiry/booking solutions for small
//               businesses.
//             </p>
//             <p>This Privacy Policy explains:</p>
//             <Ul
//               items={[
//                 "What personal data we collect",
//                 "How we use it",
//                 "How we store and protect it",
//                 "Your rights under applicable data protection laws (including GDPR/AVG)",
//               ]}
//             />
//             <p>By using our website or services, you agree to this policy.</p>
//           </Section>

//           <Section title="2. Who We Are">
//             <p>Growth Rocket is operated by:</p>
//             <ul className="list-none flex flex-col gap-1.5 pl-0">
//               <li className="font-semibold text-[var(--color-haiti)]">
//                 Parashift Technologies B.V.
//               </li>
//               <li>World Trade Center</li>
//               <li>Prinses Margrietplantsoen 33</li>
//               <li>2595 AM &apos;s-Gravenhage, Netherlands</li>
//               <li>{KVK_NUMBER}</li>
//               <li>{VAT_NUMBER}</li>
//               {CONTACT_INFO.emails.map((email) => (
//                 <li key={email} className="flex gap-2">
//                   <span className="font-semibold text-[var(--color-haiti)]">
//                     Email:
//                   </span>
//                   <a
//                     href={`mailto:${email}`}
//                     className="text-[var(--color-violet-42)] underline hover:text-[var(--color-violet-58)] transition-colors"
//                   >
//                     {email}
//                   </a>
//                 </li>
//               ))}
//               <li className="flex gap-2">
//                 <span className="font-semibold text-[var(--color-haiti)]">
//                   Phone:
//                 </span>
//                 <a
//                   href={phoneHref(CONTACT_INFO.phone)}
//                   className="text-[var(--color-violet-42)] underline hover:text-[var(--color-violet-58)] transition-colors"
//                 >
//                   {CONTACT_INFO.phone}
//                 </a>
//               </li>
//             </ul>
//           </Section>

//           <Section title="3. What Data We Collect">
//             <p>We collect only the data necessary to provide our services.</p>
//             <p className="font-semibold text-[var(--color-haiti)]">
//               🔹 Information you provide directly:
//             </p>
//             <Ul
//               items={[
//                 "Name",
//                 "Phone number",
//                 "Email address",
//                 "Business name",
//                 "Industry / type of work",
//                 "Messages or enquiry details",
//               ]}
//             />
//             <p className="font-semibold text-[var(--color-haiti)]">
//               🔹 Information collected automatically:
//             </p>
//             <Ul
//               items={[
//                 "IP address",
//                 "Browser type and device",
//                 "Pages visited and interaction data",
//               ]}
//             />
//           </Section>

//           <Section title="4. How We Use Your Data">
//             <p>We use your data to:</p>
//             <Ul
//               items={[
//                 "Respond to enquiries and contact requests",
//                 "Provide and manage Growth Rocket services",
//                 "Set up and maintain your website",
//                 "Manage enquiries and bookings through the Hub",
//                 "Provide support and updates",
//                 "Improve our website and services",
//               ]}
//             />
//             <p>We do not sell your personal data.</p>
//           </Section>

//           <Section title="5. Legal Basis for Processing (GDPR)">
//             <p>We process your data based on:</p>
//             <ul className="list-disc pl-5 flex flex-col gap-1.5">
//               <li>
//                 <span className="font-semibold text-[var(--color-haiti)]">
//                   Consent
//                 </span>{" "}
//                 — when you submit forms or contact us
//               </li>
//               <li>
//                 <span className="font-semibold text-[var(--color-haiti)]">
//                   Contract
//                 </span>{" "}
//                 — to provide services you request
//               </li>
//               <li>
//                 <span className="font-semibold text-[var(--color-haiti)]">
//                   Legitimate interest
//                 </span>{" "}
//                 — to improve and operate our services
//               </li>
//             </ul>
//           </Section>

//           <Section title="6. How We Store and Protect Data">
//             <p>
//               We take appropriate technical and organisational measures to
//               protect your data.
//             </p>
//             <Ul
//               items={[
//                 "Data is stored securely on servers located in the European Union (where applicable)",
//                 "Access is restricted to authorised personnel",
//                 "Data is protected using standard security practices",
//               ]}
//             />
//           </Section>

//           <Section title="7. Data Sharing">
//             <p>We only share data when necessary to provide our services.</p>
//             <p>This may include:</p>
//             <Ul
//               items={[
//                 "Hosting providers",
//                 "Analytics tools",
//                 "Support and communication tools",
//               ]}
//             />
//             <p>
//               All third-party providers are selected to meet GDPR/AVG compliance
//               standards.
//             </p>
//           </Section>

//           <Section title="8. Cookies and Tracking">
//             <p>We may use cookies to:</p>
//             <Ul
//               items={[
//                 "Understand how our website is used",
//                 "Improve performance and user experience",
//               ]}
//             />
//             <p>
//               For more details, please refer to our{" "}
//               <Link
//                 href="/cookie-policy"
//                 className="text-[var(--color-violet-42)] underline hover:text-[var(--color-violet-58)] transition-colors"
//               >
//                 Cookie Policy
//               </Link>
//               .
//             </p>
//           </Section>

//           <Section title="9. Data Retention">
//             <p>We retain personal data only as long as necessary:</p>
//             <Ul
//               items={[
//                 "For enquiries: until the request is resolved",
//                 "For clients: for the duration of the service and reasonable retention thereafter",
//                 "For legal or administrative purposes, where required",
//               ]}
//             />
//           </Section>

//           <Section title="10. Your Rights (GDPR / AVG)">
//             <p>You have the right to:</p>
//             <Ul
//               items={[
//                 "Access your personal data",
//                 "Correct inaccurate data",
//                 "Request deletion of your data",
//                 "Restrict or object to processing",
//                 "Request data portability",
//               ]}
//             />
//             <p>To exercise your rights, contact us at:</p>
//             <ul className="list-none flex flex-col gap-1.5 pl-0">
//               {CONTACT_INFO.emails.map((email) => (
//                 <li key={email}>
//                   <a
//                     href={`mailto:${email}`}
//                     className="text-[var(--color-violet-42)] underline hover:text-[var(--color-violet-58)] transition-colors"
//                   >
//                     {email}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </Section>

//           <Section title="11. Third-Party Links">
//             <p>
//               Our website may contain links to external websites. We are not
//               responsible for the privacy practices of those websites.
//             </p>
//           </Section>

//           <Section title="12. Changes to This Policy">
//             <p>
//               We may update this Privacy Policy from time to time. Any updates
//               will be posted on this page.
//             </p>
//           </Section>

//           <Section title="13. Contact">
//             <p>
//               If you have questions about this Privacy Policy or your data,
//               contact us:
//             </p>
//             <ul className="list-none flex flex-col gap-1.5 pl-0">
//               <li className="flex gap-2">
//                 <span className="font-semibold text-[var(--color-haiti)] min-w-[80px]">
//                   Company:
//                 </span>
//                 <span>Parashift Technologies B.V.</span>
//               </li>
//               {CONTACT_INFO.emails.map((email) => (
//                 <li key={email} className="flex gap-2">
//                   <span className="font-semibold text-[var(--color-haiti)] min-w-[80px]">
//                     Email:
//                   </span>
//                   <a
//                     href={`mailto:${email}`}
//                     className="text-[var(--color-violet-42)] underline hover:text-[var(--color-violet-58)] transition-colors"
//                   >
//                     {email}
//                   </a>
//                 </li>
//               ))}
//               <li className="flex gap-2">
//                 <span className="font-semibold text-[var(--color-haiti)] min-w-[80px]">
//                   Phone:
//                 </span>
//                 <a
//                   href={phoneHref(CONTACT_INFO.phone)}
//                   className="text-[var(--color-violet-42)] underline hover:text-[var(--color-violet-58)] transition-colors"
//                 >
//                   {CONTACT_INFO.phone}
//                 </a>
//               </li>
//             </ul>
//           </Section>
//         </div>
//       </div>
//     </main>
//   );
// }
import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "../components/JsonLd";
import { buildPageSchema } from "../lib/seo";
import { CONTACT_INFO, phoneHref } from "@/app/lib/contact";

export const metadata: Metadata = {
  title: "Privacy Policy — Growth Rocket",
  description:
    "Read the Growth Rocket privacy policy to understand how we collect, use, and protect your personal data.",
};

const LAST_UPDATED = "02/05/2026";
const KVK_NUMBER = "KvK Number - 42002389";
const VAT_NUMBER = "VAT Number - NL869232186B01";

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

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      <JsonLd
        data={buildPageSchema(
          "/privacy-policy",
          "Privacy Policy - Growth Rocket",
          "Read the Growth Rocket privacy policy to understand how we collect, use, and protect your personal data.",
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
            Privacy Policy — Growth Rocket
          </h1>
          {/* <p className="font-poppins text-[14px] text-white/60 mt-1">
            Last updated: {LAST_UPDATED}
          </p> */}
        </div>
      </section>

      {/* Content */}
      <div className="md:max-w-[1400px] md:mx-auto fix py-[72px]">
        <div className="mx-auto max-w-[780px] flex flex-col gap-10">
          <Section title="1. Introduction">
            <p>
              Growth Rocket (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;)
              provides managed website and enquiry/booking solutions for small
              businesses.
            </p>
            <p>This Privacy Policy explains:</p>
            <Ul
              items={[
                "What personal data we collect",
                "How we use it",
                "How we store and protect it",
                "Your rights under applicable data protection laws (including GDPR/AVG)",
              ]}
            />
            <p>By using our website or services, you agree to this policy.</p>
          </Section>

          <Section title="2. Who We Are">
            <p>Growth Rocket is operated by:</p>
            <ul className="list-none flex flex-col gap-1.5 pl-0">
              <li>
                <div className="flex flex-col gap-0">
                  <span className="font-semibold text-[var(--color-haiti)]">
                    Parashift Technologies B.V.
                  </span>
                  <span>World Trade Center</span>
                  <span>Prinses Margrietplantsoen 33</span>
                  <span>2595 AM &apos;s-Gravenhage, Netherlands</span>
                  <span>{KVK_NUMBER}</span>
                  <span>{VAT_NUMBER}</span>
                </div>
              </li>
              {CONTACT_INFO.emails.map((email) => (
                <li key={email} className="flex gap-2">
                  <span className="font-semibold text-[var(--color-haiti)]">
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
                <span className="font-semibold text-[var(--color-haiti)]">
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

          <Section title="3. What Data We Collect">
            <p>We collect only the data necessary to provide our services.</p>
            <p className="font-semibold text-[var(--color-haiti)]">
              🔹 Information you provide directly:
            </p>
            <Ul
              items={[
                "Name",
                "Phone number",
                "Email address",
                "Business name",
                "Industry / type of work",
                "Messages or enquiry details",
              ]}
            />
            <p className="font-semibold text-[var(--color-haiti)]">
              🔹 Information collected automatically:
            </p>
            <Ul
              items={[
                "IP address",
                "Browser type and device",
                "Pages visited and interaction data",
              ]}
            />
          </Section>

          <Section title="4. How We Use Your Data">
            <p>We use your data to:</p>
            <Ul
              items={[
                "Respond to enquiries and contact requests",
                "Provide and manage Growth Rocket services",
                "Set up and maintain your website",
                "Manage enquiries and bookings through the Hub",
                "Provide support and updates",
                "Improve our website and services",
              ]}
            />
            <p>We do not sell your personal data.</p>
          </Section>

          <Section title="5. Legal Basis for Processing (GDPR)">
            <p>We process your data based on:</p>
            <ul className="list-disc pl-5 flex flex-col gap-1.5">
              <li>
                <span className="font-semibold text-[var(--color-haiti)]">
                  Consent
                </span>{" "}
                — when you submit forms or contact us
              </li>
              <li>
                <span className="font-semibold text-[var(--color-haiti)]">
                  Contract
                </span>{" "}
                — to provide services you request
              </li>
              <li>
                <span className="font-semibold text-[var(--color-haiti)]">
                  Legitimate interest
                </span>{" "}
                — to improve and operate our services
              </li>
            </ul>
          </Section>

          <Section title="6. How We Store and Protect Data">
            <p>
              We take appropriate technical and organisational measures to
              protect your data.
            </p>
            <Ul
              items={[
                "Data is stored securely on servers located in the European Union (where applicable)",
                "Access is restricted to authorised personnel",
                "Data is protected using standard security practices",
              ]}
            />
          </Section>

          <Section title="7. Data Sharing">
            <p>We only share data when necessary to provide our services.</p>
            <p>This may include:</p>
            <Ul
              items={[
                "Hosting providers",
                "Analytics tools",
                "Support and communication tools",
              ]}
            />
            <p>
              All third-party providers are selected to meet GDPR/AVG compliance
              standards.
            </p>
          </Section>

          <Section title="8. Cookies and Tracking">
            <p>We may use cookies to:</p>
            <Ul
              items={[
                "Understand how our website is used",
                "Improve performance and user experience",
              ]}
            />
            <p>
              For more details, please refer to our{" "}
              <Link
                href="/cookie-policy"
                className="text-[var(--color-violet-42)] underline hover:text-[var(--color-violet-58)] transition-colors"
              >
                Cookie Policy
              </Link>
              .
            </p>
          </Section>

          <Section title="9. Data Retention">
            <p>We retain personal data only as long as necessary:</p>
            <Ul
              items={[
                "For enquiries: until the request is resolved",
                "For clients: for the duration of the service and reasonable retention thereafter",
                "For legal or administrative purposes, where required",
              ]}
            />
          </Section>

          <Section title="10. Your Rights (GDPR / AVG)">
            <p>You have the right to:</p>
            <Ul
              items={[
                "Access your personal data",
                "Correct inaccurate data",
                "Request deletion of your data",
                "Restrict or object to processing",
                "Request data portability",
              ]}
            />
            <p>To exercise your rights, contact us at:</p>
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

          <Section title="11. Third-Party Links">
            <p>
              Our website may contain links to external websites. We are not
              responsible for the privacy practices of those websites.
            </p>
          </Section>

          <Section title="12. Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. Any updates
              will be posted on this page.
            </p>
          </Section>

          <Section title="13. Contact">
            <p>
              If you have questions about this Privacy Policy or your data,
              contact us:
            </p>
            <ul className="list-none flex flex-col gap-1.5 pl-0">
              <li className="flex gap-2">
                <span className="font-semibold text-[var(--color-haiti)] min-w-[80px]">
                  Company:
                </span>
                <span>Parashift Technologies B.V.</span>
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
