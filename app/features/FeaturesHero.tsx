import Reveal from "../components/Reveal";
import SectionCard from "./SectionCard";
import { JUMP_LINKS } from "./data";

const PILL =
  "inline-flex min-h-[44px] items-center rounded-full border px-[15px] py-[10px] font-sans text-[14px] leading-none font-bold max-[600px]:text-[13px]";

export default function FeaturesHero() {
  return (
    <SectionCard className="bg-[#0a0516] mt-20 text-white max-[600px]:py-[38px] py-[clamp(52px,6vw,84px)]">
      <Reveal>
        <div className="w-full max-w-[1060px]">
          <h1 className="font-bricolage text-[clamp(39px,4.3vw,68px)] leading-[0.99] font-bold tracking-[-0.055em] max-[600px]:text-[38px]">
            Your website and business tools,{" "}
            <span className="text-[#e4fa65]">working as one.</span>
          </h1>
          <p className="mt-[24px] w-full max-w-[920px] text-[19px] leading-[1.65] text-[#c9c2d4] max-[600px]:text-[17px]">
            A{" "}
            <strong className="inline-block border-b-2 border-[#e4fa65] px-[1px] pb-[3px] leading-[1.05] font-[750] text-white">
              Professional Website
            </strong>{" "}
            to help customers find and contact you.{" "}
            <strong className="inline-block border-b-2 border-[#e4fa65] px-[1px] pb-[3px] leading-[1.05] font-[750] text-white">
              Growth Rocket Hub
            </strong>{" "}
            to manage enquiries, appointments, your Contact Book, quotes and
            invoices. Connected as one system for your business.
          </p>
          <nav
            aria-label="Feature sections"
            className="mt-[32px] flex flex-wrap items-center gap-[10px] max-[600px]:mt-[26px]"
          >
            {JUMP_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`${PILL} cursor-pointer border-white/30 text-white transition-colors duration-200 hover:border-[#e4fa65] hover:bg-[#e4fa65] hover:text-[#0a0516] focus-visible:border-[#e4fa65] focus-visible:bg-[#e4fa65] focus-visible:text-[#0a0516] focus-visible:outline-none`}
              >
                {link.label}
              </a>
            ))}
            <span className={`${PILL} border-white/[0.16] text-white/[0.56]`}>
              CMS
            </span>
          </nav>
        </div>
      </Reveal>
    </SectionCard>
  );
}
