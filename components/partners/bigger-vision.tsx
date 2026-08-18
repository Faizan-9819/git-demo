// "use client";
// import Reveal from "@/app/components/Reveal";
// import { visionSteps } from "@/app/partner-network/data";

// export default function BiggerVision() {
//   return (
//     <section className="relative bg-white py-[60px] lg:py-[100px]">
//       <div className="md:max-w-[1400px] md:mx-auto fix">
//         <div className="flex flex-col items-center text-center max-w-[720px] mx-auto mb-[30px] lg:mb-[56px] gap-[18px]">
//           <Reveal>
//             <span className="font-poppins text-[13px] font-semibold uppercase leading-[19.5px] tracking-[2px] text-[var(--color-violet-42)]">
//               The Bigger Vision
//             </span>
//           </Reveal>
//           <Reveal delay={0.05}>
//             <h2 className="font-poppins font-bold text-[clamp(32px,5vw,44px)] leading-[1.2] tracking-[-1px] text-[var(--color-haiti)]">
//               Building more than
//               <br />
//               <span className="text-grad-brand">just websites.</span>
//             </h2>
//           </Reveal>
//           <Reveal delay={0.1}>
//             <p className="max-w-[514px] font-poppins text-[16px] leading-[1.4] tracking-[0.16px] text-[var(--color-dolphin)]">
//               Growth Rocket is long-term digital infrastructure for small
//               businesses. The partner network is part of how this ecosystem
//               scales.
//             </p>
//           </Reveal>
//         </div>

//         <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {/* Timeline line — desktop only */}
//           <div
//             aria-hidden
//             className="hidden lg:block absolute top-[9px] left-[calc(12.5%+4px)] right-[calc(12.5%+4px)] h-px"
//             style={{
//               background:
//                 "linear-gradient(to right, transparent, var(--color-violet-92), transparent)",
//             }}
//           />

//           {visionSteps.map((step, i) => (
//             <Reveal key={step.year} delay={i * 0.07}>
//               <div className="group relative z-10 pt-[28px] cursor-default">
//                 {/* Timeline dot — transparent by default, filled on card hover */}
//                 <span
//                   className="absolute top-0 left-0 rounded-full border-2 border-[var(--color-violet-42)] transition-colors duration-300"
//                   style={{
//                     width: 18,
//                     height: 18,
//                     background: "transparent",
//                     boxShadow: "0 0 0 4px var(--color-violet-98)",
//                   }}
//                 />
//                 <span
//                   className="absolute top-0 left-0 rounded-full border-2 border-[var(--color-violet-42)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//                   style={{
//                     width: 18,
//                     height: 18,
//                     background: "var(--color-violet-42)",
//                     boxShadow: "0 0 0 4px var(--color-violet-98)",
//                   }}
//                 />
//                 <div className="font-poppins text-[13px] font-semibold uppercase tracking-[0.08em] mb-[8px] text-[var(--color-violet-42)]">
//                   {step.year}
//                 </div>
//                 <h4 className="font-poppins font-semibold text-[17px] leading-[1.3] tracking-[-0.2px] text-[var(--color-haiti)] mb-[8px]">
//                   {step.title}
//                 </h4>
//                 <p className="font-poppins text-[14px] leading-[1.6] text-[var(--color-dolphin)]">
//                   {step.body}
//                 </p>
//               </div>
//             </Reveal>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import Reveal from "@/app/components/Reveal";
import { visionSteps } from "@/app/partner-network/data";

export default function BiggerVision() {
  return (
    <section className="relative bg-white py-[60px] lg:py-[100px]">
      <div className="md:max-w-[1400px] md:mx-auto fix">
        <div className="flex flex-col items-center text-center max-w-[720px] mx-auto mb-[30px] lg:mb-[56px] gap-[18px]">
          <Reveal>
            <span className="font-poppins text-[13px] font-semibold uppercase leading-[19.5px] tracking-[2px] text-[var(--color-violet-42)]">
              The Bigger Vision
            </span>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="font-poppins font-bold text-[clamp(32px,5vw,44px)] leading-[1.2] tracking-[-1px] text-[var(--color-haiti)]">
              Building more than
              <br />
              <span className="text-grad-brand">just websites.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="max-w-[514px] font-poppins text-[16px] leading-[1.4] tracking-[0.16px]  text-[var(--color-dolphin)]">
              Growth Rocket is long-term digital infrastructure for small
              businesses. The partner network is part of how this ecosystem
              scales.
            </p>
          </Reveal>
        </div>

        <div className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {/* Mobile vertical timeline */}
          <div
            aria-hidden
            className="lg:hidden absolute top-[9px] left-[8px] bottom-[9px] w-px"
            style={{
              background:
                "linear-gradient(to bottom, transparent, var(--color-violet-92), transparent)",
            }}
          />

          <div
            aria-hidden
            className="hidden lg:block absolute top-[9px] h-px"
            style={{
              left: "0",
              right: "calc(13.5% + 1px)", // dot ke pehle khatam
              background:
                "linear-gradient(to right, transparent -35%, var(--color-violet-500) 15%, var(--color-violet-92) 85%, transparent 100%)",
            }}
          />

          {visionSteps.map((step, i) => (
            <Reveal key={step.year} delay={i * 0.07}>
              <div className="group relative flex gap-4 lg:block lg:pt-[28px] cursor-default group">
                {/* Mobile dot */}
                <div className="relative flex-shrink-0 lg:hidden">
                  <span
                    className="relative z-10 block rounded-full border-2 border-[var(--color-violet-42)] transition-colors duration-300 group-hover:bg-[var(--color-violet-42)]"
                    style={{
                      width: 18,
                      height: 18,
                      background: "white",
                      boxShadow: "0 0 0 4px var(--color-violet-98)",
                    }}
                  />
                </div>

                {/* Desktop dots */}
                <span
                  className="hidden lg:block absolute top-0 left-0 rounded-full border-2 border-[var(--color-violet-42)] transition-colors duration-300 z-40 bg-white group-hover:bg-violet-42"
                  style={{
                    width: 18,
                    height: 18,
                    // background: "white",
                    boxShadow: "0 0 0 4px var(--color-violet-98)",
                  }}
                />

                {/* <span
                  className="hidden lg:block absolute top-0 left-0 rounded-full border-2 border-[var(--color-violet-42)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    width: 18,
                    height: 18,
                    background: "var(--color-violet-42)",
                    boxShadow: "0 0 0 4px var(--color-violet-98)",
                  }}
                /> */}

                {/* Content */}
                <div className="flex-1">
                  <div className="font-poppins text-[13px] font-semibold uppercase tracking-[0.08em] mb-[8px] text-[var(--color-violet-42)]">
                    {step.year}
                  </div>

                  <h4 className="font-poppins font-semibold text-[17px] leading-[1.3] tracking-[-0.2px] text-[var(--color-haiti)] mb-[8px]">
                    {step.title}
                  </h4>

                  <p className="font-poppins text-[14px] leading-[1.6] text-[var(--color-dolphin)]">
                    {step.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
