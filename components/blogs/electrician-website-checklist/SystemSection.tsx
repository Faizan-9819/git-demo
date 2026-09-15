import SystemFlow from "./SystemFlow";

const WebsiteIcon = (
  <>
    <rect x="3" y="4" width="18" height="14" rx="2" />
    <line x1="3" y1="8" x2="21" y2="8" />
    <circle cx="6" cy="6" r="0.6" fill="currentColor" />
  </>
);

const EnquiryIcon = (
  <>
    <path d="M4 5h16v11H8l-4 4z" />
    <line x1="8" y1="9" x2="16" y2="9" />
    <line x1="8" y1="12" x2="13" y2="12" />
  </>
);

const HubIcon = (
  <>
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" />
  </>
);

export type SystemSectionProps = {
  heading: string;
  paragraphs: string[];
  nodeLabels: [string, string, string];
  outro: string;
};

export default function SystemSection({
  heading,
  paragraphs,
  nodeLabels,
  outro,
}: SystemSectionProps) {
  return (
    <section id="system" className="scroll-mt-24">
      <h2
        className="mt-12 w-full font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]"
        dangerouslySetInnerHTML={{ __html: heading }}
      />
      <div className="w-full">
        {paragraphs.map((p, i) => (
          <p
            key={i}
            className={
              (i === 0 ? "mt-7" : "mt-5") +
              " font-poppins text-[19px] leading-[31px] text-[var(--color-haiti)]"
            }
            dangerouslySetInnerHTML={{ __html: p }}
          />
        ))}
      </div>

      <SystemFlow
        nodes={[
          { label: nodeLabels[0], icon: WebsiteIcon },
          { label: nodeLabels[1], icon: EnquiryIcon },
          { label: nodeLabels[2], icon: HubIcon, emphasis: true },
        ]}
      />

      <p
        className="mt-8 w-full font-poppins text-[16.5px] leading-[26px] text-[var(--color-dolphin)]"
        dangerouslySetInnerHTML={{ __html: outro }}
      />
    </section>
  );
}
