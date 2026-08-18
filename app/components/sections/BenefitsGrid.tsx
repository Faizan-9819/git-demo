import Reveal from "../Reveal";

type Small = {
  icon: string;
  eyebrow: string;
  eyebrowColor: string;
  title: React.ReactNode;
  body: string;
  bg: string;
};

const SMALL: Small[] = [
  {
    icon: "💰",
    eyebrow: "Fixed pricing",
    eyebrowColor: "var(--color-amber-500)",
    title: (
      <>
        One price. One year. No
        <br />
        surprises.
      </>
    ),
    body: "Pay once, use all year. No hidden fees, no monthly bills.",
    bg: "#efe7fb",
  },
  {
    icon: "🛡️",
    eyebrow: "Security built in",
    eyebrowColor: "var(--color-violet-42)",
    title: (
      <>
        Secure, compliant,
        <br />
        European.
      </>
    ),
    body: "EU hosting, SSL, GDPR — sorted from day one.",
    bg: "#faf7ff",
  },
  {
    icon: "⚡",
    eyebrow: "Go live fast",
    eyebrowColor: "#b44c1a",
    title: (
      <>
        Online in 7 days —
        <br />
        guaranteed.
      </>
    ),
    body: "Pick a template, send your details, go live. It's that simple.",
    bg: "#fdecfc",
  },
  {
    icon: "📱",
    eyebrow: "No tech needed",
    eyebrowColor: "var(--color-emerald-700)",
    title: "No software to learn.",
    body: "Everything managed by our team. Zero setup on your side.",
    bg: "#f4eefe",
  },
];

function SmallCard({ s, delay }: { s: Small; delay: number }) {
  return (
    <Reveal
      delay={delay}
      className="relative rounded-[18px] overflow-hidden p-[28px] min-h-[233px] transition-transform duration-500 hover:-translate-y-1"
    >
      <div
        className="absolute inset-0 rounded-[18px] pointer-events-none"
        aria-hidden
        style={{ background: s.bg }}
      />
      <div className="relative flex flex-col">
        <span className="inline-flex items-center justify-center size-[34px] rounded-[10px] bg-white/60 text-[18px] leading-[27px]">
          {s.icon}
        </span>
        <span
          className="pt-[12px] font-sans font-bold uppercase text-[10px] leading-[15px] tracking-[2px]"
          style={{ color: s.eyebrowColor }}
        >
          {s.eyebrow}
        </span>
        <h3 className="pt-[12px] font-bricolage font-extrabold text-[22px] leading-[25.3px] tracking-[-0.6px] text-[var(--color-haiti)]">
          {s.title}
        </h3>
        <p className="pt-[10px] font-sans text-[13px] leading-[20.8px] text-[var(--color-slate-600)]">
          {s.body}
        </p>
      </div>
    </Reveal>
  );
}

function FlagshipCard() {
  return (
    <Reveal className="relative rounded-[18px] overflow-hidden p-[28px] min-h-[480px] flex flex-col justify-between transition-transform duration-500 hover:-translate-y-1">
      <div
        className="absolute inset-0 rounded-[18px] pointer-events-none"
        aria-hidden
        style={{
          background:
            "linear-gradient(160deg, var(--color-violet-42) 0%, var(--color-violet-23) 100%)",
        }}
      />
      {/* Gradient blur decoration */}
      <div
        aria-hidden
        className="absolute bottom-[-140px] right-[-140px] w-[390px] h-[390px] rotate-[127deg] pointer-events-none"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(254,229,102,0.35) 0%, rgba(254,229,102,0) 70%)",
          filter: "blur(20px)",
        }}
      />
      <div className="relative flex flex-col gap-[20px]">
        <span className="font-sans font-bold uppercase text-[10px] leading-[15px] tracking-[2px] text-[var(--color-amber-200)]">
          Flagship value
        </span>
        <h3 className="font-bricolage font-extrabold text-[clamp(22px,2.4vw,30px)] leading-[1.15] tracking-[-1px] text-white">
          Everything done for you.
          <br />
          Nothing left to figure out.
        </h3>
        <p className="font-sans text-[14px] leading-[22.4px] text-white/75">
          From build to hosting, updates to enquiry management — every piece
          handled by our team. You focus on your business. We handle the rest.
        </p>
      </div>
      <div className="relative pt-[16px]">
        <div className="flex items-end gap-[6px]">
          <span className="font-bricolage font-extrabold text-[56px] leading-[56px] tracking-[-2.5px] text-white">
            7
          </span>
          <span className="pb-[8px] font-bricolage font-extrabold text-[24px] leading-[24px] tracking-[-2.5px] text-[var(--color-amber-200)]">
            days
          </span>
        </div>
        <p className="pt-[4px] font-sans text-[14px] leading-[22.4px] text-white/75">
          From sign-up to fully live.
        </p>
      </div>
    </Reveal>
  );
}

export default function BenefitsGrid() {
  return (
    <section id="benefits" className="relative bg-white py-[104px]">
      <div className="md:max-w-[1400px] md:mx-auto fix flex flex-col items-center lg:gap-[56px] gap-[28px]">
        <div className="flex flex-col items-center max-w-[640px] w-full">
          <Reveal>
            <span className="font-sans font-bold uppercase text-[11px] leading-[16.5px] tracking-[2.5px] text-[var(--color-violet-42)]">
              Why small businesses choose us
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="pt-[14px] text-center font-bricolage font-extrabold text-[clamp(32px,5vw,44px)] leading-[46.2px] tracking-[-1.8px] text-[var(--color-haiti)]">
              <span className="block">Simple, not complicated.</span>
              <span className="block text-[var(--color-violet-42)]">
                Managed, not manual.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="pt-[10px] text-center font-sans text-[16px] leading-[25.6px] text-[var(--color-slate-500)]">
              Six reasons businesses trust Growth Rocket to run the digital side
              of their operation.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[14px] w-full lg:[grid-template-columns:1.3fr_1fr_1fr]">
          <div className="lg:row-span-2">
            <FlagshipCard />
          </div>
          {SMALL.map((s, i) => (
            <SmallCard key={s.eyebrow} s={s} delay={0.05 + i * 0.05} />
          ))}
        </div>
      </div>
    </section>
  );
}
