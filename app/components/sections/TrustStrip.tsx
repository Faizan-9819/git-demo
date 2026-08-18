import Reveal from "../Reveal";

const LOGOS = ["BLOOM&CO", "Nordvolt", "CLINICA", "Kraft.", "HELIOS", "Maison"];

export default function TrustStrip() {
  return (
    <section className="bg-white border-b border-[var(--color-slate-200)]">
      <div className="md:max-w-[1400px] md:mx-auto fix flex flex-col gap-[20px] pt-[28px] pb-[29px]">
        <Reveal>
          <p className="text-center font-sans font-semibold uppercase text-[11px] leading-[16.5px] tracking-[2px] text-[var(--color-slate-500)]">
            Trusted by 600+ small businesses across Europe
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <ul className="flex flex-wrap items-center justify-center gap-x-[48px] gap-y-[12px] opacity-65">
            {LOGOS.map((name) => (
              <li
                key={name}
                className="font-bricolage font-bold text-[17px] leading-[25.5px] tracking-[-0.3px] text-[var(--color-slate-500)]"
              >
                {name}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
