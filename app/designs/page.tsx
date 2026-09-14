import type { Metadata } from "next";
import TemplatesPageClient from "./TemplatesPageClient";

export const metadata: Metadata = {
  title: "Lorem Ipsum Templates | Growth Rocket",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
  alternates: {
    canonical: "https://www.getgrowthrocket.com/designs",
  },
};

export default function TemplatesPage() {
  return (
    <main className="bg-[var(--bg)] text-[var(--fg)]">
      <div className="w-full bg-[#F2EEFC]">
        <section className="fix pt-[64px] pb-[44px]  md:pt-[86px] md:pb-[56px]">
          {/* <h1 className="mx-auto mb-4 font-inter text-[30px] sm:text-[40px] lg:text-[56px] font-bold tracking-[-1px] lg:tracking-[-2px] leading-tight text-[var(--color-haiti)]">
          Customizable HTML{" "}
          <span className="text-grad-brand">
            website templates for every need
          </span>
        </h1> */}
          <h1 className="mx-auto mb-4 font-inter text-[30px] sm:text-[40px] lg:text-[56px] font-bold tracking-[-1px] lg:tracking-[-2px] leading-tight text-[var(--color-haiti)]">
            Choose Your Design:
            <span className="text-grad-brand"> Go Live.</span>
          </h1>
          <p className="mt-[18px] max-w-[760px]  font-poppins text-[17px] font-normal leading-[26px] text-[rgb(107,101,128)]">
            Pick a professional design, customize it, and go live instantly—{" "}
            simple and hassle-free.
          </p>
        </section>
      </div>

      <TemplatesPageClient />
    </main>
  );
}
