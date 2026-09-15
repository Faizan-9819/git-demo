type DayCard = {
  num: string;
  label: string;
  title: string;
  body: string;
  youDo: string[];
  weDo: string[];
  end: string;
  shaded?: boolean;
  highlight?: boolean;
};

const DAYS: DayCard[] = [
  {
    num: "01",
    label: "Day 1",
    title: "Onboarding & Project Setup",
    body: "Fill in the short onboarding form, usually around 30 minutes. We understand your services, the areas you work in, and the type of work you'd like to attract more of — then prepare the entire project internally so every team member can begin immediately.",
    youDo: [
      "Share your business information",
      "Send your photos",
      "Confirm your contact details",
      "Tell us about your services",
    ],
    weDo: [
      "Project setup",
      "Domain review",
      "Website planning & template configuration",
      "Internal production briefing",
    ],
    end: "your project is fully prepared, so content, design and development can move forward together.",
  },
  {
    num: "02",
    label: "Day 2",
    title: "Content & Website Preparation",
    body: "Instead of asking you to write copy, we create it for you — homepage, services, about and contact. At the same time, your photos are organised, cropped and prepared, and we configure the technical foundations for a smooth launch.",
    youDo: ["Nothing — unless you'd like to review the selected images."],
    weDo: [
      "Professional copywriting",
      "Image preparation",
      "SEO fundamentals & page planning",
      "Content integration",
    ],
    end: "your website already has a solid foundation before development even begins.",
    shaded: true,
  },
  {
    num: "3–4",
    label: "Days 3–4",
    title: "Build & Connect Everything",
    body: "Your website comes to life. Every page is built with your approved content and optimised across desktop, tablet and mobile. We also connect the tools that help you respond to enquiries — so requests don't disappear between emails, missed calls and messaging apps.",
    youDo: ["Nothing. Keep working with your customers while we manage the build."],
    weDo: [
      "Website development & mobile optimisation",
      "Appointment system setup (if needed)",
      "Contact form configuration & Google Maps integration",
      "Technical testing & internal quality assurance",
    ],
    end: "your website is no longer just designed — it's fully connected and almost ready to go live.",
  },
  {
    num: "05",
    label: "Day 5",
    title: "Review",
    body: "You'll receive a private preview link. This isn't about reviewing endless design concepts — the structure is already refined. It's about making sure your business is represented accurately: your services, service areas, contact information and photos.",
    youDo: ["Review your website", "Note any corrections or updates"],
    weDo: [
      "Full quality assurance & link testing",
      "Contact form testing",
      "Technical review & final content validation",
    ],
    end: "one clear list of changes is all we need to move into revisions.",
    shaded: true,
  },
  {
    num: "06",
    label: "Day 6",
    title: "Revisions & Final Checks",
    body: "Your feedback is applied in one focused revision round. Rather than reopening the entire project, we refine the details that matter — alongside another complete technical review across desktop and mobile.",
    youDo: ["Review the final version and give us the go-ahead."],
    weDo: ["Apply revisions & final content review", "Cross-device testing & performance checks", "Launch preparation"],
    end: "everything is exactly as it should be — ready for launch.",
  },
  {
    num: "07",
    label: "Day 7 · Launch",
    title: "Launch",
    body: "Launch day is more than pressing publish. Your website goes live on your own domain, every contact form is tested with real submissions, and your integrations are verified. We also walk you through how enquiries are received.",
    youDo: ["Watch your site go live and learn how enquiries reach you."],
    weDo: ["Go live on your domain", "Real submission testing", "Integration verification & enquiry walkthrough"],
    end: "a complete online presence, ready to attract enquiries and support your growth from day one.",
    highlight: true,
  },
];

function CheckIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <polyline points="4 12.5 9.5 18 20 6" />
    </svg>
  );
}

function DotList({ items, accent }: { items: string[]; accent?: boolean }) {
  return (
    <div className="flex flex-col gap-2.5">
      {items.map((item) => (
        <div key={item} className="flex items-start gap-2.5">
          <span
            className={
              "mt-[9px] size-[5px] flex-none rounded-full " +
              (accent ? "bg-[var(--color-violet-42)]" : "bg-[var(--color-slate-300)]")
            }
          />
          <span
            className="font-poppins text-[15px] leading-[23px] text-[var(--color-haiti)]"
            dangerouslySetInnerHTML={{ __html: item }}
          />
        </div>
      ))}
    </div>
  );
}

export default function SevenDayTimeline() {
  return (
    <div className="mt-12 flex flex-col gap-5">
      {DAYS.map((day) => (
        <div
          key={day.num}
          className={
            "rounded-2xl border p-6 sm:p-8 lg:p-9 " +
            (day.highlight
              ? "border-[var(--color-violet-42)] bg-[var(--color-violet-98)]"
              : day.shaded
                ? "border-[var(--color-violet-92)] bg-[var(--color-blog-panel)]"
                : "border-[var(--color-violet-92)] bg-white")
          }
        >
          <div className="flex items-start gap-4 sm:gap-6">
            <div
              className="flex-none font-poppins text-[32px] font-light leading-[0.85] text-[var(--color-violet-76)] tabular-nums sm:text-[44px] lg:text-[56px]"
              dangerouslySetInnerHTML={{ __html: day.num }}
            />
            <div className="flex-1 pt-1">
              <div
                className="font-poppins text-[11px] font-semibold uppercase tracking-[1.1px] text-[var(--color-dolphin)]"
                dangerouslySetInnerHTML={{ __html: day.label }}
              />
              <div
                className="mt-1 font-poppins text-[20px] font-bold tracking-[-0.2px] text-[var(--color-haiti)] sm:text-[22px]"
                dangerouslySetInnerHTML={{ __html: day.title }}
              />
              <p
                className="mt-3 max-w-[640px] font-poppins text-[15.5px] leading-[26px] text-[var(--color-dolphin)] sm:text-[16.5px]"
                dangerouslySetInnerHTML={{ __html: day.body }}
              />
            </div>
          </div>

          <div className="mt-6 grid gap-7 sm:grid-cols-2 sm:pl-[68px] lg:pl-[80px]">
            <div>
              <div className="mb-3 font-poppins text-[11px] font-semibold uppercase tracking-[0.8px] text-[var(--color-dolphin)]">
                What you do
              </div>
              <DotList items={day.youDo} />
            </div>
            <div>
              <div className="mb-3 font-poppins text-[11px] font-semibold uppercase tracking-[0.8px] text-[var(--color-violet-42)]">
                What Growth Rocket does
              </div>
              <DotList items={day.weDo} accent />
            </div>
          </div>

          <div
            className={
              "mt-6 flex items-start gap-2.5 rounded-[10px] px-4.5 py-3.5 sm:ml-[68px] lg:ml-[80px] " +
              (day.highlight
                ? "border border-[var(--color-violet-92)] bg-white"
                : day.shaded
                  ? "border border-[var(--color-violet-92)] bg-white"
                  : "bg-[var(--color-blog-panel)]")
            }
          >
            <span className="mt-0.5 flex-none text-[var(--color-violet-42)]">
              <CheckIcon />
            </span>
            <span className="font-poppins text-[14.5px] leading-[22px] text-[var(--color-dolphin)]">
              <strong className="font-semibold text-[var(--color-haiti)]">
                End of <span dangerouslySetInnerHTML={{ __html: day.label.replace("· Launch", "").trim() }} />:
              </strong>{" "}
              <span dangerouslySetInnerHTML={{ __html: day.end }} />
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
