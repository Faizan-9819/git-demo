"use client";

import images from "@/content/blogs/11-how-growth-rocket-gets-your-electrician-website-live-in-7-days/images";

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
          Most electricians expect a new website to take anywhere from 6 to 12
          weeks.
        </p>
        <p className="mt-6 font-sans text-[19px] leading-[31px] text-[#1F2937]">
          There are discovery meetings, design revisions, content approvals,
          development handoffs, testing, and weeks of waiting between each
          stage. While the website project slowly moves forward, you&rsquo;re
          still running your business, answering customer calls, and trying to
          fit another project into an already busy schedule.
        </p>

        <p className="mt-9 font-sans text-2xl font-semibold leading-[1.33] tracking-[-0.2px] text-[#1F2937] sm:mt-11 sm:text-[30px] sm:leading-[40px] sm:tracking-[-0.3px]">
          Growth Rocket works differently.
        </p>
        <p className="mt-6 font-sans text-[19px] leading-[31px] text-[#1F2937]">
          We get your electrician website live in 7 days — not because we rush
          the work, but because we&rsquo;ve built a complete system that removes
          the delays traditional website projects create.
        </p>
        <p className="mt-6 font-sans text-[19px] leading-[31px] text-[#1F2937]">
          Instead of starting from scratch every time, we&rsquo;ve standardised
          the parts that don&rsquo;t need reinventing while keeping everything
          that matters to your business personal. Once you&rsquo;ve shared the
          information we need, our team writes the content, prepares your
          images, builds your website, connects your enquiry system, tests
          everything, and launches it — while you continue focusing on your
          customers.
        </p>
        <p className="mt-6 font-sans text-[19px] leading-[31px] text-[#1F2937]">
          The result isn&rsquo;t simply a website that launches faster.
          It&rsquo;s a professional online system that&rsquo;s ready to generate
          enquiries from day one and continues supporting your business long
          after launch.
        </p>
        <p className="mt-6 font-sans text-[19px] leading-[31px] text-[#1F2937]">
          In this guide, we&rsquo;ll show you exactly how the process works,
          what happens during each day, and why a productised system can deliver
          in one week when traditional agency projects often take months.
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

      <h2 className="mt-24 w-full text-balance font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
        Why a 7-day launch is a system, not a promise
      </h2>
      <div className="w-full">
        <p className="mt-7 font-sans text-[19px] leading-[31px] text-[#1F2937]">
          If you&rsquo;ve ever worked with a traditional web agency,
          you&rsquo;ve probably experienced why projects take so long.
        </p>
        <p className="mt-6 font-sans text-[19px] leading-[31px] text-[#1F2937]">
          Every website starts with a blank canvas. A new design has to be
          created. Content has to be written from scratch. Designers wait for
          copywriters. Developers wait for designers. Feedback creates more
          revisions, which create more waiting. Before long, a project that
          looked simple on paper has stretched into two or three months.
        </p>
        <p className="mt-6 font-sans text-[19px] leading-[31px] text-[#1F2937]">
          That&rsquo;s not because agencies are doing anything wrong. It&rsquo;s
          simply how custom projects work.
        </p>
        <p className="mt-6 font-sans text-[19px] leading-[31px] text-[#1F2937]">
          Growth Rocket approaches the problem differently. Instead of
          rebuilding the same foundations for every customer, we&rsquo;ve
          created a proven system specifically for small service businesses like
          electricians. The structure has already been tested. The layouts are
          designed to convert visitors into enquiries. Mobile optimisation,
          contact forms, technical SEO, hosting, maintenance, and launch are
          already part of the platform.
        </p>
        <p className="mt-6 font-sans text-[19px] leading-[31px] text-[#1F2937]">
          This is what lets our specialists work{" "}
          <strong className="font-semibold">in parallel</strong> instead of
          waiting for one another.
        </p>
      </div>

      {/* WORKFLOW DIAGRAM: sequential vs parallel */}
      <figure className="mt-14 overflow-hidden rounded-2xl border border-[#E6E8EF]">
        <div className="grid md:grid-cols-2">
          <div className="border-b border-[#EEF0F4] p-6 sm:p-8 md:border-b-0 md:border-r">
            <div className="font-sans text-[11px] font-semibold uppercase tracking-[1.1px] text-[#9AA1AC]">
              Traditional agency
            </div>
            <div className="mt-1.5 font-sans text-sm text-[#6B7280]">
              Each stage waits for the last
            </div>
            <div className="relative mt-6 pl-6">
              <div className="absolute bottom-1.5 left-[5px] top-1.5 w-px bg-[#E1E4EC]" />
              <div className="flex flex-col gap-4">
                {["Discovery", "Design", "Copy", "Development", "Testing"].map(
                  (step) => (
                    <div key={step} className="relative">
                      <div className="absolute -left-6 top-1 size-2.5 rounded-full border border-[#C3C8D2] bg-white" />
                      <div className="font-sans text-[15px] font-medium text-[#4B5563]">
                        {step}
                      </div>
                    </div>
                  ),
                )}
                <div className="relative">
                  <div className="absolute -left-6 top-1 size-2.5 rounded-full border border-[#C3C8D2] bg-white" />
                  <div className="font-sans text-[15px] font-semibold text-[#4B5563]">
                    Launch{" "}
                    <span className="font-normal text-[#9AA1AC]">
                      — weeks later
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
              Everything runs at once
            </div>
            <div className="mt-6 flex items-stretch gap-3.5">
              <div className="flex flex-1 flex-col gap-2">
                {[
                  "Content",
                  "Design",
                  "Development",
                  "SEO Readiness",
                  "Image prep",
                  "Testing",
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
                    Day 7
                  </div>
                  <div className="mt-0.5 font-sans text-[15px] font-bold">
                    Launch
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </figure>

      <div className="w-full">
        <p className="mt-11 font-sans text-[19px] leading-[31px] text-[#1F2937]">
          While content is being written, the website framework is already being
          prepared. While images are being optimised, technical configurations
          are already underway. Instead of handing work from one department to
          another, multiple parts of the project move forward together.
        </p>
        <p className="mt-6 font-sans text-[19px] leading-[31px] text-[#1F2937]">
          The result is a faster process without compromising quality. More
          importantly, it creates a simpler experience for you. You&rsquo;re not
          expected to coordinate designers, developers, writers, or technical
          specialists. You&rsquo;re simply providing the information about your
          business.
        </p>
        <p className="mt-6 font-sans text-[19px] leading-[31px] text-[#1F2937]">
          That&rsquo;s why seven days isn&rsquo;t a marketing promise.
          It&rsquo;s the natural outcome of a system designed to remove
          unnecessary delays.
        </p>
      </div>
    </section>
  );
}

const INTAKE_ITEMS = [
  "Your business name",
  "KvK number",
  "A brief company intro",
  "Service area",
  [
    "Your services ",
    <span key="s" className="text-[#9AA1AC]">
      (groepenkast, laadpaal…)
    </span>,
  ],
  [
    "5–10 project photos ",
    <span key="p" className="text-[#9AA1AC]">
      (phone is fine)
    </span>,
  ],
  [
    "Your logo ",
    <span key="l" className="text-[#9AA1AC]">
      (if you have one)
    </span>,
  ],
  "Phone number",
  "Email address",
  "Opening hours",
];

export function IntakeSection() {
  return (
    <section id="intake" className="scroll-mt-24">
      <h2 className="mt-24 w-full text-balance font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
        What Growth Rocket needs before Day 1
      </h2>
      <p className="mt-7 w-full font-sans text-[19px] leading-[31px] text-[#1F2937]">
        The entire process starts with one simple onboarding. To keep your
        website on track for launch within seven days, we&rsquo;ll ask you for a
        few practical details before work begins:
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
            That&rsquo;s all.
          </span>
          <span className="font-sans text-[15px] text-[#6B7280]">
            No lengthy questionnaires, no briefing documents, no weeks of
            planning meetings.
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
    label: "Your intake",
    icon: (
      <>
        <rect x="6" y="3" width="12" height="18" rx="2" />
        <line x1="9" y1="9" x2="15" y2="9" />
        <line x1="9" y1="13" x2="14" y2="13" />
      </>
    ),
  },
  {
    label: "Growth Rocket team",
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
    label: "Website build",
    icon: (
      <>
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <line x1="3" y1="8" x2="21" y2="8" />
      </>
    ),
  },
  {
    label: "Launch",
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
      <h2 className="mt-24 w-full text-balance font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
        Once your intake is complete, Growth Rocket takes over
      </h2>
      <div className="w-full">
        <p className="mt-7 font-sans text-[19px] leading-[31px] text-[#1F2937]">
          This is where our process differs most from a traditional website
          project.
        </p>
        <p className="mt-6 font-sans text-[19px] leading-[31px] text-[#1F2937]">
          With many agencies, the work doesn&rsquo;t really begin after the
          first meeting — it begins <em>for you</em>. You&rsquo;re asked to
          coordinate feedback, chase content, review multiple design concepts,
          answer new questions every week, and keep the project moving while
          juggling your day-to-day business.
        </p>
      </div>

      <PullQuote>
        You stop managing the website project. Growth Rocket starts managing it.
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
          Once you&rsquo;ve completed your onboarding, our team takes ownership
          of the project. We write your content, prepare and optimise your
          photos, build every page, connect your contact forms, configure your
          technical settings, test everything across desktop and mobile, and
          prepare your website for launch.
        </p>
        <p className="mt-6 font-sans text-[19px] leading-[31px] text-[#1F2937]">
          Rather than involving you in every small decision, we focus on
          delivering meaningful progress behind the scenes. We&rsquo;ll come
          back to you when there&rsquo;s something important to review — not
          every time another task is completed.
        </p>
        <p className="mt-6 font-sans text-[19px] leading-[31px] text-[#1F2937]">
          That means you don&rsquo;t have to manage another project. Less
          waiting. Less back and forth. Less project management for you — and
          more time spent doing the work that actually grows your business.
        </p>
      </div>
    </section>
  );
}

const CMP_ROWS = [
  {
    label: "Project planning",
    them: "Multiple meetings",
    us: "One simple onboarding",
  },
  {
    label: "Copywriting",
    them: "Separate project phase",
    us: "Included from Day 2",
  },
  {
    label: "Design",
    them: "Multiple concepts and revisions",
    us: "Proven framework tailored to your business",
  },
  {
    label: "Development",
    them: "Starts after design approval",
    us: "Runs alongside content preparation",
  },
  {
    label: "Testing",
    them: "Final project stage",
    us: "Continuous throughout the build",
  },
  { label: "Launch", them: "Weeks later", us: "Day 7", usBold: true },
  {
    label: "Client workload",
    them: "You manage the project",
    us: "Growth Rocket takes responsibility",
  },
];

export function ComparisonSection() {
  return (
    <section id="comparison" className="scroll-mt-24">
      <h2 className="mt-24 w-full text-balance font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
        Why traditional agencies need 6–12 weeks
      </h2>
      <p className="mt-7 w-full font-sans text-[19px] leading-[31px] text-[#1F2937]">
        The difference between a traditional agency and Growth Rocket
        isn&rsquo;t simply speed. It&rsquo;s the way the work is organised. A
        traditional website project is usually treated as a bespoke creative
        project — every stage depends on the previous one being completed before
        the next can begin. Design can&rsquo;t move until discovery is done.
        Development waits for design. Testing waits for development. Every
        revision creates another round of emails, meetings and delays.
      </p>

      <div className="mt-11 overflow-hidden rounded-2xl border border-[#E6E8EF]">
        <div className="overflow-x-auto">
          <div className="grid min-w-[560px] grid-cols-[1.1fr_1.4fr_1.4fr]">
            <div className="border-b border-[#EEF0F4] bg-[#FBFBFD] px-6 py-4.5" />
            <div className="border-b border-l border-[#EEF0F4] bg-[#FBFBFD] px-6 py-4.5 font-sans text-xs font-semibold uppercase tracking-[1px] text-[#9AA1AC]">
              Traditional agency
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
        The biggest difference isn&rsquo;t speed. It&rsquo;s who carries the
        workload.
      </PullQuote>

      <div className="w-full">
        <p className="font-sans text-[19px] leading-[31px] text-[#1F2937]">
          With a traditional agency, you&rsquo;re often managing the project
          alongside your business. With Growth Rocket, you complete one
          onboarding and our team takes responsibility for moving everything
          forward.
        </p>
      </div>
    </section>
  );
}

const GET_CARDS = [
  {
    tag: "Presence",
    title: "A professional website",
    body: "Designed to clearly present your services, build trust, and make it easy to contact you. Every page is mobile-friendly, professionally written, and structured to help visitors find what they need.",
    icon: (
      <>
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <line x1="3" y1="8" x2="21" y2="8" />
      </>
    ),
  },
  {
    tag: "Enquiries",
    title: "A better way to capture enquiries",
    body: "Contact forms, appointment system and customer contact options are connected before launch. Whether someone wants a quote, an appointment or a question answered, your website is ready from day one.",
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
    title: "One place to stay organised",
    body: "Instead of enquiries scattered across emails, forms and messaging apps, the Growth Rocket Hub keeps customer enquiries in one place — so you always know where new work is coming from.",
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
    tag: "Support",
    title: "Ongoing support after launch",
    body: "Most website projects end at launch. Growth Rocket doesn't. Hosting, maintenance, updates and support remain part of the service — so you never have to find someone every time you need a small change.",
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
  "Enquiries",
  "Growth Rocket Hub",
  "Ongoing support",
];

export function WhatYouGetSection() {
  return (
    <section id="whatyouget" className="scroll-mt-24">
      <h2 className="mt-24 w-full text-balance font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
        What you&rsquo;re actually getting in 7 days
      </h2>
      <p className="mt-7 w-full font-sans text-[19px] leading-[31px] text-[#1F2937]">
        A seven-day launch isn&rsquo;t about delivering the fastest possible
        website. It&rsquo;s about giving your business everything it needs to
        establish a professional online presence without months of project
        management. By launch day, you&rsquo;re receiving much more than a
        collection of web pages.
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
          That&rsquo;s what makes the seven-day system different. It&rsquo;s not
          simply about building websites faster. It&rsquo;s about giving
          electricians a complete online system that&rsquo;s ready to support
          their business from the very first day.
        </p>
      </div>
    </section>
  );
}

const IDEAL = [
  "Local service businesses serving one or multiple areas",
  "New businesses needing a professional presence quickly",
  "Electrical companies replacing an outdated website",
  "Businesses wanting website, enquiry management and support under one provider",
  "Owners who'd rather serve customers than manage a digital project",
];

const NOT_FOR = [
  "Custom-built e-commerce websites",
  "Complex booking platforms with inventory management",
  "Bespoke web applications",
  "Large-scale enterprise websites",
  "Completely custom functionality from the ground up",
];

export function FitSection() {
  return (
    <section id="fit" className="scroll-mt-24">
      <h2 className="mt-24 w-full text-balance font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
        What this system is (and isn&rsquo;t) built for
      </h2>
      <p className="mt-7 w-full font-sans text-[19px] leading-[31px] text-[#1F2937]">
        A 7-day website launch isn&rsquo;t the right solution for every business
        — and that&rsquo;s intentional. Growth Rocket is designed for service
        businesses that want a professional online presence without spending
        months managing a website project. We believe in being transparent about
        where it fits, and where it doesn&rsquo;t.
      </p>

      <div className="mt-11 grid gap-5 sm:grid-cols-2">
        <div className="rounded-2xl border border-[#E4DCFB] bg-[#F4F1FE] p-6 sm:p-8">
          <div className="font-sans text-xs font-semibold uppercase tracking-[1px] text-[#6F4CF5]">
            Ideal fit
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
            Not designed for
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
          Those projects deserve a different process and a different timeline.
          By narrowing our focus, we&rsquo;ve been able to simplify the process,
          improve the experience and consistently deliver websites that are
          ready to perform from day one.
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
        Why this matters for electricians
      </h2>
      <div className="w-full">
        <p className="mt-7 font-sans text-xl font-medium leading-[1.42] tracking-[-0.15px] text-[#1F2937] sm:text-2xl sm:leading-[34px] sm:tracking-[-0.2px]">
          As an electrician, your website isn&rsquo;t the work. Your customers
          are.
        </p>
        <p className="mt-6 font-sans text-[19px] leading-[31px] text-[#1F2937]">
          Most business owners don&rsquo;t wake up wanting to manage a web
          project. They want a professional online presence that helps customers
          find them, understand their services and get in touch without
          unnecessary complications.
        </p>
      </div>

      <figure className="mt-11">
        <div
          className="relative w-full overflow-hidden rounded-2xl bg-[#F1F2F6]"
          style={{ aspectRatio: "16/9" }}
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
          Instead of coordinating designers, developers, hosting providers and
          support companies, you work with one team that manages the entire
          process — from onboarding and launch to ongoing updates and
          maintenance. When your website goes live, it&rsquo;s already prepared
          to receive enquiries, present your services professionally and support
          your day-to-day business.
        </p>
        <p className="mt-6 font-sans text-[19px] leading-[31px] text-[#1F2937]">
          And unlike a traditional website project, the relationship
          doesn&rsquo;t end on launch day. If you&rsquo;re looking for a faster
          way to launch, you&rsquo;ll appreciate the seven-day timeline. If
          you&rsquo;re looking for a simpler way to manage your online presence,
          you&rsquo;ll appreciate everything that comes after it.
        </p>
      </div>

      <div className="mt-13 rounded-2xl border border-[#E6E8EF] bg-[#F8F9FC] p-7 sm:p-10">
        <div className="font-sans text-[11px] font-semibold uppercase tracking-[1.1px] text-[#9AA1AC]">
          See how it works for electricians
        </div>
        <p className="mt-3.5 max-w-[600px] font-sans text-lg leading-7 text-[#1F2937]">
          See how this complete managed system is designed specifically for
          electrical businesses — your professional website, enquiry management,
          ongoing support and the Growth Rocket Hub, working together.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-4.5">
          <button
            type="button"
            onClick={openLeadForm}
            className="inline-flex cursor-pointer items-center rounded-[10px] border-0 bg-[#6F4CF5] px-5.5 py-3 font-sans text-[15px] font-semibold text-white"
          >
            Explore Website voor Elektriciens →
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
            See what&rsquo;s included
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
          A better way to get your business online
        </h2>
        <p className="mt-7 font-sans text-[19px] leading-[31px] text-[#1F2937]">
          Building a website shouldn&rsquo;t become another full-time project.
          For most electricians, the challenge isn&rsquo;t finding a web
          designer — it&rsquo;s finding the time to coordinate meetings, review
          endless revisions and manage a project while continuing to serve
          customers.
        </p>
        <p className="mt-6 font-sans text-[19px] leading-[31px] text-[#1F2937]">
          The seven-day timeline isn&rsquo;t about working faster for the sake
          of speed. It&rsquo;s about removing the unnecessary delays of
          traditional website projects and replacing them with a proven system
          designed around how small service businesses actually work.
        </p>
        <p className="mt-6 font-sans text-[19px] leading-[31px] text-[#1F2937]">
          From the moment you complete your onboarding, Growth Rocket takes
          ownership. We write the content, prepare your images, build the
          website, connect your enquiry system, test everything and launch it —
          while you stay focused on your business. And when your website goes
          live, that&rsquo;s not where the relationship ends.
        </p>
      </div>

      <div className="my-13 max-w-[820px]">
        <div className="mb-7 h-0.5 w-12 bg-[#6F4CF5]" />
        <p className="text-balance font-sans text-[28px] font-semibold leading-[1.33] tracking-[-0.5px] text-[#1F2937] sm:text-[36px] sm:leading-[48px]">
          You&rsquo;re not simply investing in a website. You&rsquo;re investing
          in a complete online system.
        </p>
      </div>

      <div className="w-full">
        <p className="font-sans text-[19px] leading-[31px] text-[#1F2937]">
          If you&rsquo;ve been putting off a new website because you thought it
          would take months of meetings and project management, it doesn&rsquo;t
          have to. With the right system, seven days is enough.
        </p>
      </div>
    </section>
  );
}

const FINAL_FEATURES = [
  "Professional website",
  "Written-for-you content",
  "Mobile-friendly design",
  "Appointment system connected",
  "Enquiry forms connected",
  "Growth Rocket Hub integration",
  "Hosting, maintenance & ongoing support",
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
          Ready to launch your electrician website?
        </h2>
        <p className="mt-4.5 max-w-[600px] font-sans text-lg leading-7 text-[#6B7280]">
          Whether you&rsquo;re starting a new electrical business or replacing
          an outdated website, Growth Rocket gives you everything you need to
          get online — without the usual delays, technical hassle or endless
          back-and-forth.
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
              Start your 7-day intake →
            </button>
            <span className="font-sans text-sm text-[#9AA1AC]">
              All delivered through one streamlined process.
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
            Check out our professional Electrician website designs →
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
    heading: "Costs & choices",
    links: [
      {
        label: "What does a website for an electrician cost?",
        href: "/blog/electrician-website-cost-netherlands",
      },
      {
        label: "WordPress or a website subscription?",
        href: "/blog/wordpress-vs-waas-website-for-electrician-businesses-an-honest-comparison",
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
    <section id="more" className="mt-24 scroll-mt-24">
      <h2 className="max-w-[720px] text-balance font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
        More for electricians
      </h2>
      <p className="mt-3.5 max-w-[720px] font-sans text-[16.5px] leading-[1.58] text-[#6B7280]">
        Everything that helps you win more enquiries online — from costs and
        choices to the build and the individual pages.
      </p>
      <div className="mt-7 max-w-[820px] overflow-hidden rounded-[14px] border border-[#E6E8EF] bg-[#F8F9FC]">
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
