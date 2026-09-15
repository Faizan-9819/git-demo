"use client";

import { Fragment } from "react";
import Button from "@/app/components/ui/Button";

function CheckIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#6F4CF5"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mt-0.5 flex-none"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

const OVERZICHT_ITEMS = [
  "Build it yourself if you enjoy tinkering, have spare evenings, and mainly want a simple online business card.",
  "Hire a freelancer if you have a clear brief, €1,500 to €5,000 to spend upfront, and someone in the business who can pick up updates afterwards.",
  "Choose Done-For-You if you have no time and no tech skill, and want a working website with enquiries and bookings handled for one fixed yearly fee.",
  "If you're currently paying per lead on Werkspot or Zoofy, the managed route usually pays for itself once it brings in one or two direct enquiries.",
  "There's no single best way to build an electrician website — pick the model that matches your time and tech skill, not the one that looks cheapest on day one.",
];

export function OverzichtSection() {
  return (
    <section id="overzicht" className="scroll-mt-24">
      <h2 className="mt-0 w-full text-balance font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
        At a glance: DIY vs Done-For-You
      </h2>
      <div className="mt-7 flex w-full flex-col gap-3.5 rounded-2xl border border-[#E6E8EF] bg-[#F8F9FC] p-7 sm:p-[28px_30px]">
        {OVERZICHT_ITEMS.map((item) => (
          <div key={item} className="flex items-start gap-3">
            <CheckIcon />
            <span className="font-sans text-base leading-[1.56] text-[#1F2937]">
              {item}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export function VoorWieSection() {
  return (
    <section id="voor-wie" className="scroll-mt-24">
      {/* Preview Image */}
      <div className="mt-22 overflow-hidden rounded-[24px] border border-[#E5E7EB] shadow-lg">
        <img
          src="/blogimages/en/3-diy-vs-done-for-you-website-for-an-electrician-which-one-fits-you/blog_3 (1).webp"
          alt="Example electrician homepage"
        />
      </div>
      <h2 className="mt-22 w-full text-balance font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
        Who this comparison is for
      </h2>
      <p className="mt-7 w-full text-pretty font-sans text-[16.5px] leading-[1.58] text-[#4B5563]">
        This is written for Dutch electricians running a solo business (ZZP) or
        a small team of two to ten people. If you&rsquo;re a mid-size contractor
        with an in-house marketer, your decision is different — you&rsquo;ll
        likely pick a freelancer or agency and manage it internally.
      </p>
      <p className="mt-5 w-full text-pretty font-sans text-[16.5px] leading-[1.58] text-[#4B5563]">
        For everyone else, the three routes below cover almost every realistic
        path. We&rsquo;ll start with the route most owners think of first.
      </p>
    </section>
  );
}

type RouteField = { label: string; body: string };

type RouteCardProps = {
  num: string;
  routeLabel: string;
  title: string;
  stats: { label: string; value: string }[];
  fields: RouteField[];
  chooseTitle: string;
  chooseItems: string[];
};

function RouteCard({
  num,
  routeLabel,
  title,
  stats,
  fields,
  chooseTitle,
  chooseItems,
}: RouteCardProps) {
  return (
    <div className="flex flex-col gap-6 rounded-2xl border border-[#E6E8EF] bg-white p-7 sm:flex-row sm:gap-7.5 sm:p-[32px_34px]">
      <div className="font-sans text-[62px] font-light leading-[0.85] text-[#C5B7FB] tabular-nums">
        {num}
      </div>
      <div className="min-w-0 flex-1">
        <div className="font-sans text-[11px] font-semibold uppercase tracking-[1.1px] text-[#9AA1AC]">
          {routeLabel}
        </div>
        <h3 className="mt-1.5 font-sans text-[22px] font-bold tracking-[-0.2px] text-[#1F2937]">
          {title}
        </h3>

        <div className="mt-5 flex flex-wrap border-y border-[#EEF0F4]">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={
                "py-3.5 pr-7 " + (i > 0 ? "border-l border-[#EEF0F4] pl-7" : "")
              }
            >
              <div className="font-sans text-[11px] font-semibold uppercase tracking-[1.1px] text-[#9AA1AC]">
                {stat.label}
              </div>
              <div className="mt-1 font-sans text-[15px] font-bold text-[#1F2937]">
                {stat.value}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5.5 flex max-w-[640px] flex-col gap-4.5">
          {fields.map((field) => (
            <div key={field.label}>
              <div className="mb-1 font-sans text-[11px] font-semibold uppercase tracking-[1.1px] text-[#9AA1AC]">
                {field.label}
              </div>
              <div className="font-sans text-base leading-[1.56] text-[#4B5563]">
                {field.body}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <div className="mb-3 font-sans text-[11px] font-semibold uppercase tracking-[1.1px] text-[#9AA1AC]">
            {chooseTitle}
          </div>
          <div className="flex flex-col gap-2.5">
            {chooseItems.map((item) => (
              <div key={item} className="flex items-start gap-2.5">
                <CheckIcon size={16} />
                <span className="font-sans text-[15.5px] leading-[1.48] text-[#1F2937]">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function RoutesSection() {
  return (
    <section id="routes" className="scroll-mt-24">
      <h2 className="mt-24 w-full  font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
        The three routes for an electrician website
      </h2>

      <div className="mt-9 flex flex-col gap-5">
        <RouteCard
          num="01"
          routeLabel="Route 1"
          title="DIY (Wix, WordPress, Squarespace)"
          stats={[
            { label: "Cost", value: "€150–€400 / year" },
            { label: "Time to launch", value: "Weekend – months" },
            { label: "Effort from you", value: "High" },
          ]}
          fields={[
            {
              label: "What it is",
              body: "You sign up for a website builder and put the site together yourself using templates. Wix and Squarespace are drag-and-drop; WordPress is more flexible, but also more work.",
            },
            {
              label: "Cost",
              body: "Roughly €50 to €100 per month for hosting and a template. Add a domain (€10–€15 per year) and maybe a paid theme or plugin. Total first-year cost: around €150 to €400.",
            },
            {
              label: "Time to launch",
              body: "Anywhere from a weekend to several months — depending on how perfectionist you are and how often real jobs pull you away from the screen.",
            },
            {
              label: "Quality and SEO",
              body: "The template will look fine. But the content, the structure, and the local SEO are entirely on you — and that's exactly where most DIY sites stall. Ranking for “elektricien [city]” takes proper on-page copy, a Google Business profile, and real reviews.",
            },
            {
              label: "Maintenance",
              body: "You handle the updates, the security patches, the broken plugins — and anything that breaks at 10pm on a Sunday.",
            },
            {
              label: "Risk",
              body: "The biggest risk isn't the cost. It's the six months the site sits half-finished while you're out on jobs.",
            },
          ]}
          chooseTitle="Choose DIY if…"
          chooseItems={[
            "You genuinely enjoy building things online",
            "Your main goal is a digital business card, not a source of enquiries",
            "You have a few free evenings every week",
          ]}
        />

        <RouteCard
          num="02"
          routeLabel="Route 2"
          title="Freelancer"
          stats={[
            { label: "Cost", value: "€1,500–€5,000 upfront" },
            { label: "Time to launch", value: "4–8 weeks" },
            { label: "Effort from you", value: "Medium upfront" },
          ]}
          fields={[
            {
              label: "What it is",
              body: "You hire an independent web designer or small studio to build a custom site. You own the result.",
            },
            {
              label: "Cost",
              body: "Typically €1,500 to €5,000 upfront for a small business site. Some freelancers then charge €500 to €1,000 per year for hosting and basic maintenance. Anything beyond that is billed hourly — €60 to €95 per hour is common in the Netherlands.",
            },
            {
              label: "Time to launch",
              body: "Usually 4 to 8 weeks, sometimes longer if the freelancer is juggling other clients or you're slow to send photos and copy.",
            },
            {
              label: "Quality and SEO",
              body: "Highly variable. A good freelancer who has built electrician sites before will deliver a better result than any DIY attempt. A cheap generalist mostly gives you a prettier version of a DIY site.",
            },
            {
              label: "Maintenance",
              body: "This is where most freelancer projects fall apart. After launch, every change becomes an invoice. And if the freelancer disappears, you inherit a site you can't easily change yourself.",
            },
            {
              label: "Risk",
              body: "Two things: the upfront fee is gone even if the project stalls, and for every future change you're tied to one person's availability.",
            },
          ]}
          chooseTitle="Choose a freelancer if…"
          chooseItems={[
            "You know exactly what you want and can write a clear brief",
            "The upfront fee doesn't hurt your budget",
            "Someone in the business will actually own updates and small changes after launch",
          ]}
        />

        <RouteCard
          num="03"
          routeLabel="Route 3"
          title="Done-For-You (managed subscription)"
          stats={[
            { label: "Cost", value: "€690 / year" },
            { label: "Time to launch", value: "5–10 days" },
            { label: "Effort from you", value: "Low" },
          ]}
          fields={[
            {
              label: "What it is",
              body: "You pay a fixed annual or monthly fee, and a provider builds, hosts, maintains, and updates the site for you. Growth Rocket is one example; there are others.",
            },
            {
              label: "Cost",
              body: "€690 per year (€69 per month), plus a €290 one-time onboarding fee. No separate bills for hosting, domain, or maintenance.",
            },
            {
              label: "Time to launch",
              body: "Usually 5 to 10 days. Because the provider builds on proven structures and handles the setup, you mainly supply photos, your service list, and your contact details.",
            },
            {
              label: "Quality and SEO",
              body: "Depends on the provider. A good one builds the site around real search terms (“groepenkast vervangen”, “laadpaal installeren [city]”) and sets up your Google Business profile too. A bad one gives you a nice-looking site with no local SEO.",
            },
            {
              label: "Maintenance",
              body: "Included. Updates, security, hosting, small content changes — all handled. You send an email; they update the site.",
            },
            {
              label: "Risk",
              body: "You don't own the platform. If you leave the provider, you usually leave the site behind. So pick a provider that lets you take your content and your domain with you cleanly.",
            },
          ]}
          chooseTitle="Choose Done-For-You if…"
          chooseItems={[
            "You have no time and no desire to manage a website",
            "You want a fixed yearly cost with no surprise invoices",
            "You want the site, your enquiries, and your bookings in one place — instead of spread across five separate tools",
          ]}
        />
      </div>

      <div className="mt-6 flex flex-col items-start gap-4 rounded-xl border border-[#E4DCFB] bg-[#F4F1FE] p-5.5 sm:flex-row sm:items-center sm:justify-between">
        <span className="font-sans text-base leading-[1.5] text-[#1F2937]">
          Curious what&rsquo;s actually included in a managed electrician
          website?
        </span>
        <a
          href="/blog/11-how-growth-rocket-gets-your-electrician-website-live-in-7-days"
          className="flex-none border-b-[1.5px] border-[#C5B7FB] pb-0.5 font-sans text-[15px] font-semibold text-[#6F4CF5] no-underline"
        >
          See how it works →
        </a>
      </div>
    </section>
  );
}

const ADVIES_ITEMS = [
  {
    q: "“I have no time and no tech skill”",
    a: "Go with a Done-For-You service. The time cost of DIY almost always exceeds the monthly fee of a managed site. A freelancer is possible, but you still have to manage the project — which is exactly the part you don't have time for.",
  },
  {
    q: "“I'm handy with computers and enjoy building things”",
    a: "DIY is reasonable. Use WordPress with a clean theme, or Squarespace for a simpler setup. Budget a full month of evenings — and be honest about whether you'll finish.",
  },
  {
    q: "“I want something custom and I have the budget”",
    a: "A freelancer is your best bet. Ask for three electrician sites they've built before, a fixed quote, and a clear agreement about changes after launch.",
  },
  {
    q: "“I'm currently paying for leads on Werkspot or Zoofy”",
    a: "Do the math honestly. If you pay €15 to €45 per lead and win roughly one in five, your real cost per customer is €75 to €225. A managed site at around €25/month pays for itself the moment it brings you one direct enquiry that month. And the real reason to switch isn't the price — it's that the customer relationship becomes yours, instead of rented.",
  },
  {
    q: "“I already have a website but it looks dated”",
    a: "Check three things before you rebuild: is it mobile-friendly, does it load in under 3 seconds, and do you rank for your city and service? If two of those are “no”, a rebuild makes sense — and the managed route is usually the fastest way back to a working site.",
  },
];

export function AdviesSection() {
  return (
    <section id="advies" className="scroll-mt-24">
      <h2 className="mt-24 w-full text-balance font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
        Scenario-based recommendations
      </h2>
      <p className="mt-7 w-full text-pretty font-sans text-[19px] leading-[1.63] text-[#1F2937]">
        A comparison table only gets you halfway. The real choice depends on
        your situation.
      </p>
      <div className="mt-9 flex w-full flex-col gap-4">
        {ADVIES_ITEMS.map((item) => (
          <div
            key={item.q}
            className="rounded-[14px] border border-[#E6E8EF] bg-white p-6 sm:p-[24px_28px]"
          >
            <div className="font-sans text-lg font-bold tracking-[-0.1px] text-[#1F2937]">
              {item.q}
            </div>
            <p className="mt-2.5 text-pretty font-sans text-base leading-[1.56] text-[#4B5563]">
              {item.a}
            </p>
          </div>
        ))}
      </div>
      <p className="mt-8 max-w-[720px] text-pretty font-sans text-[16.5px] leading-[1.58] text-[#4B5563]">
        There&rsquo;s one more thing most comparisons leave out.
      </p>
    </section>
  );
}

const FLOW_STEPS = [
  {
    title: "The website",
    detail: "how customers find you and decide to trust you.",
    icon: (
      <>
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <line x1="3" y1="8" x2="21" y2="8" />
        <circle cx="6" cy="6" r="0.6" fill="currentColor" />
      </>
    ),
  },
  {
    title: "The enquiry or booking system",
    detail: "how they reach you without having to call during the day.",
    icon: (
      <>
        <path d="M4 5h16v11H8l-4 4z" />
        <line x1="8" y1="9" x2="16" y2="9" />
        <line x1="8" y1="12" x2="13" y2="12" />
      </>
    ),
  },
  {
    title: "Where enquiries land",
    detail: "so nothing slips through the cracks.",
    icon: (
      <>
        <path d="M3 13l4-8h10l4 8v6H3z" />
        <path d="M3 13h5l2 3h4l2-3h5" />
      </>
    ),
  },
];

function FlowArrow() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="flex-none rotate-90 text-[#C3C8D2] sm:rotate-0"
    >
      <line x1="4" y1="12" x2="20" y2="12" />
      <polyline points="14 6 20 12 14 18" />
    </svg>
  );
}

export function SysteemSection() {
  return (
    <section id="systeem" className="scroll-mt-24">
      <h2 className="mt-24 w-full text-balance font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
        The part most comparisons skip
      </h2>
      <p className="mt-7 w-full text-pretty font-sans text-[19px] leading-[1.63] text-[#1F2937]">
        A website alone doesn&rsquo;t grow your business. What grows it is the
        system around it:
      </p>
      <div className="mt-9 rounded-2xl border border-[#E6E8EF] bg-[#F8F9FC] p-6 sm:p-[34px]">
        <div className="flex flex-col items-stretch gap-6 sm:flex-row sm:items-center sm:justify-between sm:gap-2">
          {FLOW_STEPS.map((step, i) => (
            <Fragment key={step.title}>
              {i > 0 && <FlowArrow />}
              <div className="flex flex-1 flex-col items-center gap-3 text-center">
                <div className="flex size-13 flex-none items-center justify-center rounded-[13px] border border-[#E1E4EC] bg-white text-[#1F2937]">
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
                  {step.title}
                </div>
                <div className="max-w-[220px] font-sans text-sm leading-[1.5] text-[#6B7280]">
                  {step.detail}
                </div>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
      <p className="mt-8 w-full text-pretty font-sans text-[16.5px] leading-[1.58] text-[#4B5563]">
        This is where the three routes diverge most. DIY and freelancer projects
        usually give you only the first piece. The second and third are rarely
        included. A managed service like Growth Rocket includes all three: the
        website, the enquiry form, and the Growth Rocket Hub — the dashboard
        where enquiries and bookings come together in one clear place.
      </p>
      <p className="mt-5 w-full text-pretty font-sans text-[16.5px] leading-[1.58] text-[#4B5563]">
        If you only need a digital business card, that third piece doesn&rsquo;t
        matter. If the website has to bring in work and keep track of it, it
        does.
      </p>
    </section>
  );
}

const CTA_ITEMS = [
  "A professional website, built for you",
  "Enquiry and booking system included",
  "Everything in one place in the Growth Rocket Hub",
  "Hosting, updates, and maintenance handled",
  "Online within 7 days",
  "One fixed yearly price, no surprises",
];

export function CtaSection() {
  const openLeadForm = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-lead-form"));
    }
  };
  return (
    <section id="cta" className="scroll-mt-24">
      <div className="mt-24 rounded-[20px] border border-[#E6E8EF] bg-[#FBFBFD] p-7 sm:p-[52px_48px]">
        <h2 className="max-w-[560px] text-balance font-sans text-[26px] font-bold leading-[1.25] tracking-[-0.3px] text-[#1F2937] sm:text-[32px] sm:leading-[1.25]">
          Prefer to hand off the whole system?
        </h2>
        <p className="mt-4.5 max-w-[600px] text-pretty font-sans text-lg leading-[1.56] text-[#6B7280]">
          Website, enquiries, and bookings in one place, online within 7 days.
          See how the process works — from intake to launch.
        </p>
        <div className="mt-8 grid max-w-[760px] grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-[14px_40px]">
          {CTA_ITEMS.map((item) => (
            <div key={item} className="flex items-start gap-3">
              <CheckIcon size={19} />
              <span className="font-sans text-base leading-[1.5] text-[#1F2937]">
                {item}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-9">
          <Button
            onClick={openLeadForm}
            variant="primary"
            arrow="up-right"
            size="lg"
          >
            Get a managed electrician website
          </Button>
        </div>
      </div>
    </section>
  );
}

type MeerLink = { label: string; href: string };
type MeerGroup = { heading: string; links: MeerLink[] };

const MEER_GROUPS: MeerGroup[] = [
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

export function MeerSection() {
  return (
    <section id="meer" className="scroll-mt-24">
      <h2 className="mt-24 max-w-[720px] text-balance font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
        More for electricians
      </h2>
      <p className="mt-3.5 max-w-[720px] font-sans text-[16.5px] leading-[1.58] text-[#6B7280]">
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
            {MEER_GROUPS.map((group) => (
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
