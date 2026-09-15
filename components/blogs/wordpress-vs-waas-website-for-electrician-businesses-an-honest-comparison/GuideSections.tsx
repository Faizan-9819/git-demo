"use client";

import type { ReactNode } from "react";
import InlineLink from "./InlineLink";

function CheckIcon({ color = "#6F4CF5" }: { color?: string }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mt-0.5 flex-none"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#9AA1AC"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mt-0.5 flex-none"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M15 9l-6 6M9 9l6 6" />
    </svg>
  );
}

export function IntroSection() {
  return (
    <p className="m-0 font-sans text-base leading-[26px] text-[#374151] sm:text-[19px] sm:leading-[31px]">
      This guide is an honest WordPress vs WaaS website comparison for
      electricians, looking at upfront cost, ongoing cost, time investment,
      security, flexibility, and SEO ceiling. No winner is declared. Instead, we
      lay out which option fits which kind of electrician, and give you a{" "}
      <InlineLink href="#decision">simple decision framework</InlineLink> at the
      end.
    </p>
  );
}

const SHORT_ANSWER_ROWS = [
  {
    label: "Flexibility",
    body: (
      <>
        <strong className="font-semibold text-[#1F2937]">
          WordPress wins on flexibility and long-term ownership.
        </strong>{" "}
        If you have technical skills (or a trusted developer) and want full
        control, it&rsquo;s the most powerful option.
      </>
    ),
  },
  {
    label: "Speed",
    body: (
      <>
        <strong className="font-semibold text-[#1F2937]">
          WaaS wins on time-to-value and predictability.
        </strong>{" "}
        For non-technical electricians who want a working website fast — without
        managing hosting, plugins, or security — a done-for-you subscription
        removes the work.
      </>
    ),
  },
  {
    label: "SEO",
    body: (
      <>
        <strong className="font-semibold text-[#1F2937]">
          Both can rank well on Google.
        </strong>{" "}
        The SEO ceiling is set more by your content and local presence than by
        the platform.
      </>
    ),
  },
  {
    label: "Total cost",
    body: (
      <>
        <strong className="font-semibold text-[#1F2937]">
          The real cost difference is your time, not the licence fee.
        </strong>{" "}
        WordPress looks cheaper on paper. Once you add a developer, plugins,
        hosting, and maintenance, the gap narrows or reverses.
      </>
    ),
  },
  {
    label: "Management",
    body: (
      <>
        <strong className="font-semibold text-[#1F2937]">
          Pick based on who manages the site.
        </strong>{" "}
        If that&rsquo;s you (or someone you pay), WordPress fits. If you want it
        handled, WaaS fits.
      </>
    ),
  },
];

export function ShortAnswerSection() {
  return (
    <section id="short-answer" className="mt-20 scroll-mt-[88px]">
      {/* Preview Image */}
      <div className="mt-14 overflow-hidden rounded-[24px] border border-[#E5E7EB] shadow-lg">
        <img
          src="/blogimages/en/wordpress-vs-waas-website-for-electrician-businesses-an-honest-comparison/wordpress_vs_waas_website_for_electrician_businesses_an_honest_comparison (1).webp"
          alt="Example electrician homepage"
        />
      </div>
      <h2 className=" mt-22 w-full font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
        The short answer
      </h2>
      <div className="mt-6 overflow-hidden rounded-[18px] border border-[#E6E8EF]">
        {SHORT_ANSWER_ROWS.map((row, i) => (
          <div
            key={row.label}
            className={
              "flex flex-col gap-1.5 p-5 sm:flex-row sm:items-baseline sm:gap-4 sm:p-[20px_22px]" +
              (i > 0 ? " border-t border-[#EEF0F4]" : "")
            }
          >
            <div
              className="flex-none font-sans text-[13px] font-semibold tracking-[0.3px] text-[#6F4CF5] sm:w-[118px]"
              dangerouslySetInnerHTML={{ __html: row.label }}
            />
            <p className="m-0 font-sans text-base leading-[1.55] text-[#374151] sm:text-[16.5px]">
              {row.body}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center gap-3 rounded-xl bg-[#F4F1FE] px-5 py-4">
        <CheckIcon />
        <div className="font-sans text-base font-semibold leading-[1.4] text-[#1F2937] sm:text-[17px]">
          Pick based on who&rsquo;s going to manage the site.
        </div>
      </div>
    </section>
  );
}

export function WhatEachIsSection() {
  return (
    <section id="what-each-is" className="mt-24 scroll-mt-[88px]">
      <h2 className="w-full font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
        What each option actually is
      </h2>
      <p className="mt-4.5 font-sans text-base leading-[26px] text-[#374151] sm:text-[19px] sm:leading-[31px]">
        Before comparing, it helps to be clear about what we&rsquo;re comparing.
      </p>

      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="rounded-[18px] border border-[#E6E8EF] bg-white p-6">
          <h3 className="font-sans text-lg font-bold leading-[1.37] text-[#1F2937] sm:text-[19px]">
            WordPress (self-managed or freelancer-built)
          </h3>
          <p className="mt-3 font-sans text-base leading-[1.62] text-[#374151]">
            WordPress is open-source software that powers a large share of
            websites worldwide. You either install it yourself or pay a
            freelancer to build a site on it. You own the files, the database,
            and the design. You also own the responsibility — hosting, updates,
            plugins, security, and backups are yours to manage or to outsource.
          </p>
          <div className="mt-4 font-sans text-[13px] font-semibold uppercase tracking-[0.3px] text-[#6B7280]">
            Two common paths
          </div>
          <ul className="m-0 mt-2.5 flex list-none flex-col gap-2.5 p-0">
            <li className="flex gap-2.5 font-sans text-[15.5px] leading-[1.48] text-[#374151]">
              <span
                aria-hidden="true"
                className="mt-2.5 size-1.5 flex-none rounded-full bg-[#6F4CF5]"
              />
              A €500–€2,500 freelancer build, then you manage updates yourself.
            </li>
            <li className="flex gap-2.5 font-sans text-[15.5px] leading-[1.48] text-[#374151]">
              <span
                aria-hidden="true"
                className="mt-2.5 size-1.5 flex-none rounded-full bg-[#6F4CF5]"
              />
              An ongoing arrangement with a developer or agency who maintains
              the site monthly.
            </li>
          </ul>
        </div>
        <div className="rounded-[18px] border border-[#E6E8EF] bg-white p-6">
          <h3 className="font-sans text-lg font-bold leading-[1.37] text-[#1F2937] sm:text-[19px]">
            WaaS (Website-as-a-Service)
          </h3>
          <p className="mt-3 font-sans text-base leading-[1.62] text-[#374151]">
            WaaS is a subscription model. You pay a fixed monthly or yearly fee,
            and the provider handles the build, hosting, updates, security, and
            content changes. You don&rsquo;t touch the code. You request
            changes; they apply them.
          </p>
          <p className="mt-3 font-sans text-base leading-[1.62] text-[#374151]">
            For electricians, WaaS typically means a niche-focused, productized
            website with built-in enquiry capture, a booking and appointments
            system, and the Growth Rocket Hub with contact management — plus
            hosting, SSL security, backups, and updates, like managed websites
            for electricians from Growth Rocket.
          </p>
        </div>
      </div>

      <figure className="m-0 mt-8">
        <div className="mb-3.5 font-sans text-[13px] font-semibold uppercase tracking-[0.3px] text-[#6B7280]">
          Who does what?
        </div>
        <div
          role="img"
          aria-label="WordPress vs WaaS website for electrician businesses — diagram showing who handles hosting, updates, security, and content"
          className="overflow-hidden rounded-[18px] border border-[#E6E8EF]"
        >
          <div className="overflow-x-auto">
            <table className="w-full min-w-[480px] border-collapse">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="border-b border-[#EEF0F4] bg-[#FBFBFD] px-4.5 py-3.5 text-left font-sans text-xs font-semibold uppercase tracking-[0.3px] text-[#9AA1AC]"
                  >
                    Task
                  </th>
                  <th
                    scope="col"
                    className="border-b border-l border-[#EEF0F4] bg-[#FBFBFD] px-4.5 py-3.5 text-left font-sans text-sm font-bold text-[#1F2937]"
                  >
                    WordPress
                  </th>
                  <th
                    scope="col"
                    className="border-b border-l border-[#EEF0F4] bg-[#F4F1FE] px-4.5 py-3.5 text-left font-sans text-sm font-bold text-[#6F4CF5]"
                  >
                    WaaS
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Hosting", "You or your host", "The provider"],
                  ["Updates", "You or your developer", "The provider"],
                  ["Security", "Your responsibility", "Included"],
                  ["Backups", "Your responsibility", "Included"],
                  [
                    "Content changes",
                    "You, or paid per change",
                    "Submit a request; the provider applies it",
                  ],
                ].map(([task, wp, waas], i, arr) => (
                  <tr key={task}>
                    <td
                      className={
                        "px-4.5 py-3.5 font-sans text-sm font-semibold text-[#1F2937]" +
                        (i < arr.length - 1 ? " border-b border-[#EEF0F4]" : "")
                      }
                      dangerouslySetInnerHTML={{ __html: task }}
                    />
                    <td
                      className={
                        "border-l border-[#EEF0F4] px-4.5 py-3.5 font-sans text-sm text-[#374151]" +
                        (i < arr.length - 1 ? " border-b" : "")
                      }
                      dangerouslySetInnerHTML={{ __html: wp }}
                    />
                    <td
                      className={
                        "border-l border-[#EEF0F4] bg-[#FBFAFF] px-4.5 py-3.5 font-sans text-sm text-[#374151]" +
                        (i < arr.length - 1 ? " border-b" : "")
                      }
                      dangerouslySetInnerHTML={{ __html: waas }}
                    />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <figcaption className="mt-2.5 font-sans text-[13px] text-[#9AA1AC]">
          With WordPress the management is yours; with WaaS it&rsquo;s the
          provider&rsquo;s.
        </figcaption>
      </figure>
    </section>
  );
}

type DeepDiveProps = {
  id: string;
  title: string;
  whyExists: ReactNode;
  whatYouGet: ReactNode;
  howItDiffers: ReactNode;
  fitTitle: string;
  fitItems: string[];
  poorFitTitle: string;
  poorFitItems: string[];
  tradeoffLabel: string;
  tradeoffLeft: string;
  tradeoffRight: string;
};

function DeepDiveSection({
  id,
  title,
  whyExists,
  whatYouGet,
  howItDiffers,
  fitTitle,
  fitItems,
  poorFitTitle,
  poorFitItems,
  tradeoffLabel,
  tradeoffLeft,
  tradeoffRight,
}: DeepDiveProps) {
  return (
    <section id={id} className="mt-24 scroll-mt-[88px]">
      <h2
        className="w-full font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <div className="mt-5.5 flex flex-col gap-5.5">
        <div>
          <div className="mb-1.5 font-sans text-[13px] font-semibold uppercase tracking-[0.4px] text-[#6F4CF5]">
            Why it exists
          </div>
          <p className="m-0 font-sans text-base leading-[26px] text-[#374151] sm:text-[19px] sm:leading-[31px]">
            {whyExists}
          </p>
        </div>
        <div>
          <div className="mb-1.5 font-sans text-[13px] font-semibold uppercase tracking-[0.4px] text-[#6F4CF5]">
            What you get
          </div>
          <p className="m-0 font-sans text-base leading-[26px] text-[#374151] sm:text-[19px] sm:leading-[31px]">
            {whatYouGet}
          </p>
        </div>
        <div>
          <div className="mb-1.5 font-sans text-[13px] font-semibold uppercase tracking-[0.4px] text-[#6F4CF5]">
            How it differs
          </div>
          <p className="m-0 font-sans text-base leading-[26px] text-[#374151] sm:text-[19px] sm:leading-[31px]">
            {howItDiffers}
          </p>
        </div>
      </div>

      <div className="mt-6.5 overflow-hidden rounded-[18px] border border-[#E6E8EF]">
        <div className="p-5 sm:p-[20px_22px]">
          <div
            className="mb-3 font-sans text-base font-bold text-[#1F2937]"
            dangerouslySetInnerHTML={{ __html: fitTitle }}
          />
          <ul className="m-0 flex list-none flex-col gap-2.5 p-0">
            {fitItems.map((item) => (
              <li
                key={item}
                className="flex gap-2.5 font-sans text-[15.5px] leading-[1.48] text-[#374151]"
              >
                <CheckIcon />
                <span dangerouslySetInnerHTML={{ __html: item }} />
              </li>
            ))}
          </ul>
        </div>
        <div className="border-t border-[#EEF0F4] bg-[#FBFBFD] p-5 sm:p-[20px_22px]">
          <div
            className="mb-3 font-sans text-base font-bold text-[#1F2937]"
            dangerouslySetInnerHTML={{ __html: poorFitTitle }}
          />
          <ul className="m-0 flex list-none flex-col gap-2.5 p-0">
            {poorFitItems.map((item) => (
              <li
                key={item}
                className="flex gap-2.5 font-sans text-[15.5px] leading-[1.48] text-[#374151]"
              >
                <CrossIcon />
                <span dangerouslySetInnerHTML={{ __html: item }} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-5.5 rounded-2xl border border-[#EEF0F4] bg-[#FBFBFD] p-5">
        <div
          className="mb-2.5 font-sans text-[13px] font-semibold text-[#6B7280]"
          dangerouslySetInnerHTML={{ __html: tradeoffLabel }}
        />
        <div className="flex items-center gap-3">
          <span className="flex-none font-sans text-[12.5px] text-[#9AA1AC]">
            Little
          </span>
          <div
            className="h-2 flex-1 rounded-full"
            style={{ background: "linear-gradient(90deg,#E5D5FA,#6F4CF5)" }}
          />
          <span className="flex-none font-sans text-[12.5px] text-[#9AA1AC]">
            A lot
          </span>
        </div>
        <div className="mt-2 flex justify-between font-sans text-[13px] text-[#374151]">
          <span dangerouslySetInnerHTML={{ __html: tradeoffLeft }} />
          <span dangerouslySetInnerHTML={{ __html: tradeoffRight }} />
        </div>
      </div>
    </section>
  );
}

export function WordpressDeepSection() {
  return (
    <DeepDiveSection
      id="wordpress-deep"
      title="WordPress for electricians: where it wins, where it doesn't"
      whyExists="WordPress was built as a flexible publishing platform. The philosophy is open ownership — anyone can install it, modify it, and host it anywhere. It's the default for people who want maximum control."
      whatYouGet="A blank canvas plus a massive plugin ecosystem. You (or a developer) pick a theme, add plugins for forms, SEO, security, and bookings, and assemble the website you want. There's no built-in opinion about what an electrician's site should look like."
      howItDiffers="WordPress gives you ceiling. If you ever want a custom quoting tool, a multi-language portal, a deep integration with your accounting software, or a niche plugin — WordPress can do it. The trade-off is that you (or someone you pay) must build, configure, and maintain that complexity."
      fitTitle="WordPress is the right choice if any of these are true:"
      fitItems={[
        "You're comfortable logging into a dashboard, updating plugins, and troubleshooting.",
        "You have a developer you trust and can afford a monthly retainer.",
        "You expect to add custom features over time that no off-the-shelf product offers.",
        "You want the site to be a long-term asset you fully own and can migrate freely.",
      ]}
      poorFitTitle="WordPress is a poor fit if:"
      poorFitItems={[
        "You don't want to manage updates, security patches, or hosting.",
        "You only need a clean, working website that captures enquiries — nothing more.",
        "You'd rather spend evenings with family than learning a CMS.",
      ]}
      tradeoffLabel="The trade-off: more control, more management"
      tradeoffLeft="Control over design and features"
      tradeoffRight="Management responsibility"
    />
  );
}

export function WaasDeepSection() {
  return (
    <DeepDiveSection
      id="waas-deep"
      title="WaaS for electricians: where it wins, where it doesn't"
      whyExists="The WaaS model came from a simple observation: most small business owners don't want a website project. They want a website that works. WaaS removes the project — the build, the hosting choices, the plugin updates, the security worries — and replaces it with a fixed subscription."
      whatYouGet={
        <>
          A working website built on a managed platform, with hosting, security,
          backups, and content updates included. For electrician-focused
          providers, that usually also means built-in enquiry capture, a booking
          and appointments system, the Growth Rocket Hub with contact
          management, and mobile-ready design. You ask for changes; the provider
          applies them.
        </>
      }
      howItDiffers="WaaS trades flexibility for time. You don't get unlimited customisation, but you also don't lose three weekends a year on plugin conflicts. The provider has already made the technical decisions, so the time from “I need a website” to “leads are coming in” is measured in days, not weeks."
      fitTitle="WaaS is the right choice if any of these are true:"
      fitItems={[
        "You want a professional website live within 1–2 weeks.",
        "You don't want to think about hosting, updates, or security.",
        "You'd rather pay a predictable monthly or yearly fee than juggle four invoices.",
        "You need help with content updates and don't want to log in to make them.",
      ]}
      poorFitTitle="WaaS is a poor fit if:"
      poorFitItems={[
        "You want full ownership of the codebase and the freedom to host anywhere.",
        "You have very specific, custom feature needs that go beyond what the platform offers.",
        "You already have a developer on retainer who handles everything.",
      ]}
      tradeoffLabel="The trade-off: time gained, flexibility bounded"
      tradeoffLeft="Time saved"
      tradeoffRight="Limit on customisation"
    />
  );
}

const SEO_CARDS = [
  {
    body: "For local SEO — which is what matters most for a Dutch electrician — both platforms can rank well. The factors that move the needle are platform-agnostic: your Google Business Profile, reviews, local landing pages, mobile speed, and consistent NAP details (name, address, phone number).",
    title: "Local fundamentals",
  },
  {
    body: "WordPress has more knobs to turn. With the right plugins and a developer, you can fine-tune almost anything. A good WaaS provider has already handled the technical baseline (clean code, fast hosting, SSL, mobile-first design), but you can't customise it as deeply.",
    title: "Technical SEO",
  },
  {
    body: "WordPress is more flexible if you plan to publish dozens of blog posts, location pages, and service pages. Most WaaS platforms support content but with simpler structures.",
    title: "Content scaling",
  },
];

export function SeoSection() {
  return (
    <section id="seo" className="mt-24 scroll-mt-[88px]">
      <h2 className="w-full font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
        SEO ceiling: can a managed site rank like a WordPress site?
      </h2>
      <p className="mt-4.5 font-sans text-base leading-[26px] text-[#374151] sm:text-[19px] sm:leading-[31px]">
        This is where many electricians worry. The honest answer has three
        layers.
      </p>
      <div className="mt-5.5 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {SEO_CARDS.map((card, i) => (
          <div
            key={card.title}
            className="rounded-2xl border border-[#E6E8EF] bg-white p-5"
          >
            <div className="flex size-8 items-center justify-center rounded-[9px] bg-[#F4F1FE] font-sans text-[15px] font-bold text-[#6F4CF5]">
              {i + 1}
            </div>
            <div
              className="mt-3 font-sans text-base font-bold text-[#1F2937]"
              dangerouslySetInnerHTML={{ __html: card.title }}
            />
            <p
              className="mt-2 font-sans text-sm leading-[1.5] text-[#6B7280]"
              dangerouslySetInnerHTML={{ __html: card.body }}
            />
          </div>
        ))}
      </div>
      <div className="mt-5.5 rounded-r-2xl border-l-[3px] border-[#6F4CF5] bg-[#F4F1FE] px-5.5 py-4.5">
        <p className="m-0 text-pretty font-sans text-lg font-semibold leading-[1.56] text-[#1F2937]">
          For most electricians, the platform isn&rsquo;t the bottleneck.
          Content, reviews, and local presence are. If you&rsquo;re not
          publishing or maintaining a Google Business Profile, neither WordPress
          nor WaaS will rank you.
        </p>
      </div>
    </section>
  );
}

type EdgeCase = {
  q: string;
  a: ReactNode;
  open?: boolean;
};

const EDGE_CASES: EdgeCase[] = [
  {
    q: "You already have a WordPress site that works",
    a: "Don't switch for the sake of switching. If it's secure, fast, and bringing in enquiries, the cost of moving rarely justifies the gain.",
    open: true,
  },
  {
    q: "You're switching from a marketplace like Werkspot",
    a: (
      <>
        Either option works. The win comes from owning your lead source, not the
        specific platform. If you're weighing your reliance on marketplaces,
        read{" "}
        <InlineLink href="/website-for-electricians">
          Werkspot vs your own website
        </InlineLink>
        .
      </>
    ),
  },
  {
    q: "You need recruitment as much as customer leads",
    a: "Make sure whichever option you pick supports a clean careers page. The Dutch labour shortage in trades makes this a real growth lever.",
  },
];

export function EdgeCasesSection() {
  return (
    <section id="edge-cases" className="mt-24 scroll-mt-[88px]">
      <h2 className=" w-full  font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
        Edge cases and honest caveats
      </h2>
      <p className="mt-4.5 font-sans text-base leading-[26px] text-[#374151] sm:text-[19px] sm:leading-[31px]">
        A few situations the simple framework doesn&rsquo;t fully cover. Check
        these before you switch.
      </p>
      <div className="mt-5.5 flex flex-col gap-3">
        {EDGE_CASES.map((item) => (
          <details
            key={item.q}
            className="group overflow-hidden rounded-[14px] border border-[#E6E8EF]"
            open={item.open}
          >
            <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-3.5 px-5 py-3.5 font-sans text-base font-semibold text-[#1F2937]">
              <span dangerouslySetInnerHTML={{ __html: item.q }} />
              <span
                aria-hidden="true"
                className="flex-none text-[24px] leading-none text-[#6F4CF5] transition-transform duration-150 group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <div className="px-5 pb-[18px] font-sans text-[15px] leading-[1.6] text-[#374151]">
              {item.a}
            </div>
          </details>
        ))}
        <details className="group overflow-hidden rounded-[14px] border border-[#F0D9C0] bg-[#FFFBF5]">
          <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-3.5 px-5 py-3.5 font-sans text-base font-semibold text-[#1F2937]">
            You want full ownership later
            <span
              aria-hidden="true"
              className="flex-none text-[24px] leading-none text-[#B4791F] transition-transform duration-150 group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <div className="px-5 pb-[18px] font-sans text-[15px] leading-[1.6] text-[#374151]">
            If long-term ownership matters more than short-term convenience,
            WordPress wins on that single dimension. Some WaaS providers allow
            export, others don&rsquo;t —{" "}
            <strong className="font-semibold text-[#8A5A12]">
              ask before you sign.
            </strong>
          </div>
        </details>
      </div>
    </section>
  );
}

export function VerdictSection() {
  const openLeadForm = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-lead-form"));
    }
  };
  return (
    <section id="verdict" className="mt-24 scroll-mt-[88px]">
      <h2 className="w-full font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
        The final word
      </h2>
      <p className="mt-4.5 font-sans text-base leading-[26px] text-[#374151] sm:text-[19px] sm:leading-[31px]">
        The honest comparison ends where it started: this isn&rsquo;t a
        winner-takes-all decision.
      </p>
      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="rounded-[18px] border border-[#E6E8EF] bg-white p-6">
          <h3 className="font-sans text-lg font-bold text-[#1F2937] sm:text-[19px]">
            Choose WordPress if…
          </h3>
          <p className="mt-3 font-sans text-base leading-[1.56] text-[#374151]">
            …you want flexibility, ownership, and you (or someone you trust)
            will manage it. It rewards technical comfort with long-term control.
          </p>
        </div>
        <div className="rounded-[18px] border border-[#E6E8EF] bg-[#FBFAFF] p-6">
          <h3 className="font-sans text-lg font-bold text-[#1F2937] sm:text-[19px]">
            Choose WaaS if…
          </h3>
          <p className="mt-3 font-sans text-base leading-[1.56] text-[#374151]">
            …you want a working website without becoming a part-time webmaster.
            It rewards focus on your trade with a fixed cost and no maintenance
            burden.
          </p>
        </div>
      </div>
      <p className="mt-5.5 font-sans text-base leading-[26px] text-[#374151] sm:text-[19px] sm:leading-[31px]">
        For most Dutch electricians who&rsquo;d rather spend their time on the
        job than in a CMS, WaaS wins on time-to-value. For technically inclined
        owners or larger firms with a developer relationship, WordPress wins on
        ceiling. Pick based on who&rsquo;s going to manage the site — and how
        much your evenings are worth.
      </p>

      <div
        className="mt-9 rounded-[20px] border border-[#E5D5FA] p-7 sm:p-8"
        style={{ background: "linear-gradient(160deg,#F5F3FF,#EDE7FB)" }}
      >
        <p className="m-0 text-pretty font-sans text-lg leading-[1.47] text-[#1F2937]">
          See yourself in the WaaS route?{" "}
          <button
            type="button"
            onClick={openLeadForm}
            className="cursor-pointer border-0 bg-transparent p-0 font-sans text-lg font-bold text-[#6F4CF5] underline-offset-2 hover:underline"
          >
            See how Growth Rocket builds and manages websites for electricians →
          </button>
        </p>
      </div>
    </section>
  );
}

export function DecisionFlowSection() {
  return (
    <div className="mx-auto mt-14 max-w-[1200px]">
      <div className="rounded-[18px] border border-[#E6E8EF] bg-[#FBFBFD] p-6.5">
        <div className="font-sans text-xs font-semibold uppercase tracking-[0.4px] text-[#9AA1AC]">
          Decision framework
        </div>
        <figure
          role="img"
          aria-label="Decision framework for choosing between WordPress and WaaS website for electrician businesses"
          className="m-0 mt-3.5"
        >
          <div className="flex flex-wrap items-center gap-3.5">
            <div className="min-w-[220px] flex-1 rounded-xl border border-[#E6E8EF] bg-white px-4.5 py-4 font-sans text-[14.5px] font-semibold leading-[1.45] text-[#1F2937]">
              Will you (or someone you pay) manage the site yourself?
            </div>
            <div className="flex min-w-[320px] flex-1 flex-col gap-2.5">
              <div className="flex items-center gap-3">
                <span className="flex-none rounded-md bg-[#1F2937] px-2.5 py-[3px] font-sans text-xs font-semibold text-white">
                  Yes, 3–4×
                </span>
                <span aria-hidden="true" className="text-[#9AA1AC]">
                  →
                </span>
                <div className="flex-1 rounded-[10px] border border-[#E6E8EF] bg-white px-3.5 py-3 font-sans text-sm text-[#374151]">
                  <strong className="font-semibold text-[#1F2937]">
                    WordPress is likely the best fit.
                  </strong>{" "}
                  The flexibility pays off.
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex-none rounded-md bg-[#6F4CF5] px-2.5 py-[3px] font-sans text-xs font-semibold text-white">
                  No, 0–2×
                </span>
                <span aria-hidden="true" className="text-[#9AA1AC]">
                  →
                </span>
                <div className="flex-1 rounded-[10px] border border-[#E5D5FA] bg-white px-3.5 py-3 font-sans text-sm text-[#374151]">
                  <strong className="font-semibold text-[#1F2937]">
                    WaaS is likely the best fit.
                  </strong>{" "}
                  Faster to live, less ongoing burden.
                </div>
              </div>
            </div>
          </div>
          <figcaption className="mt-3.5 font-sans text-[13px] text-[#9AA1AC]">
            Count your &ldquo;yes&rdquo; answers to the four questions in the
            decision test. This chart also works without the interactive test.
          </figcaption>
        </figure>
      </div>
    </div>
  );
}

type MoreLink = { label: string; href: string };
type MoreGroup = { heading: string; links: MoreLink[] };

const MORE_GROUPS: MoreGroup[] = [
  {
    heading: "Costs & choices",
    links: [
      {
        label: "What does a website for an electrician cost?",
        href: "/blog/electrician-website-cost-netherlands",
      },
      {
        label: "DIY vs done-for-you: which fits you?",
        href: "/blog/3-diy-vs-done-for-you-website-for-an-electrician-which-one-fits-you",
      },
    ],
  },
  {
    heading: "Build & process",
    links: [
      {
        label: "How long does it take to build an electrician website?",
        href: "/blog/electrician-website-build-timeline",
      },
      {
        label: "Mobile website for electricians: why it matters",
        href: "/blog/6-mobile-website-for-electricians",
      },
      {
        label: "Test your electrician website on mobile in 7 steps",
        href: "/blog/mobile-website-for-electricians-a-practical-guide-to-getting-it-right",
      },
      {
        label: "Online within 7 days: how it works",
        href: "/blog/11-how-growth-rocket-gets-your-electrician-website-live-in-7-days",
      },
    ],
  },
  {
    heading: "Pages & SEO",
    links: [
      {
        label: "The website checklist: 10 pages you can't skip",
        href: "/blog/electrician-website-checklist",
      },
      {
        label: "The 7 elements of a homepage that wins enquiries",
        href: "/blog/7-elements-of-a-high-converting-electrician-homepage",
      },
      {
        label: "How to write an about page that builds trust",
        href: "/blog/10-how-to-write-an-about-us-page-for-an-electrician",
      },
      {
        label: "8 examples of electrician websites",
        href: "/blog/8-electrician-website-examples-that-actually-win-customers",
      },
    ],
  },
];

export function MoreForElectriciansSection() {
  return (
    <section id="more" className="mt-24 scroll-mt-[88px]">
      <h2 className="text-balance font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
        More for electricians
      </h2>
      <p className="mt-4.5 font-sans text-base leading-[26px] text-[#374151] sm:text-[19px] sm:leading-[31px]">
        Everything that helps you win more enquiries online — from costs and
        choices to the build and the individual pages.
      </p>
      <div className="mt-7 overflow-hidden rounded-[14px] border border-[#E6E8EF] bg-[#F8F9FC]">
        <details className="group">
          <summary className="flex min-h-[60px] cursor-pointer list-none items-center justify-between gap-6 px-7 py-6">
            <span className="font-sans text-lg font-semibold text-[#1F2937]">
              Browse all articles for electricians
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
