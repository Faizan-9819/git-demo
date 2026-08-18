// "use client";

// import { useEffect, useState } from "react";
// import Reveal from "@/app/components/Reveal";
// import { principles } from "./data";

// function PrincipleIcon({ src }: { src: string }) {
//   const [svgMarkup, setSvgMarkup] = useState<string | null>(null);

//   useEffect(() => {
//     let isActive = true;

//     fetch(src)
//       .then((response) => {
//         if (!response.ok) throw new Error(`Unable to load icon: ${src}`);
//         return response.text();
//       })
//       .then((markup) => {
//         if (isActive) setSvgMarkup(markup);
//       })
//       .catch(() => {
//         if (isActive) setSvgMarkup(null);
//       });

//     return () => {
//       isActive = false;
//     };
//   }, [src]);

//   if (svgMarkup) {
//     return (
//       <span
//         aria-hidden="true"
//         className="block size-[22px] [&_svg]:block [&_svg]:size-full"
//         dangerouslySetInnerHTML={{ __html: svgMarkup }}
//       />
//     );
//   }

//   return (
//     // eslint-disable-next-line @next/next/no-img-element
//     <img src={src} alt="" aria-hidden="true" className="block size-[22px]" />
//   );
// }

// export default function AboutEurope() {
//   return (
//     <section className="relative bg-[#F5F3FF] py-[60px] lg:py-[100px]">
//       <div className="md:max-w-[1400px] md:mx-auto fix">
//         <div className="grid gap-[28px] lg:grid-cols-[0.95fr_1.05fr] mt-[18px] lg:items-end lg:gap-[72px]">
//           <div>
//             <Reveal>
//               <span className="font-poppins text-[14px] font-semibold uppercase leading-[19.5px] tracking-[2px] text-[var(--color-violet-42)]">
//                 Designed for the European market
//               </span>
//             </Reveal>
//             <Reveal delay={0.05}>
//               <h2 className="pt-1 max-w-[320px] font-poppins text-[clamp(32px,4vw,44px)] font-bold leading-[1.12] tracking-[-1px] text-[var(--color-haiti)]">
//                 A European-first approach, starting in the Netherlands.
//               </h2>
//             </Reveal>
//           </div>
//           <Reveal delay={0.08}>
//             <p className="max-w-[600px]   font-poppins text-[16px] leading-[1.75] text-[var(--color-dolphin)]">
//               Growth Rocket is being developed with the European market in mind
//               — starting in the Netherlands and gradually expanding toward other
//               regions, including German-speaking markets. Our communication,
//               design direction and product approach are intentionally built
//               around four ideas.
//             </p>
//           </Reveal>
//         </div>

//         <div className="mt-[42px] grid gap-[14px] sm:grid-cols-2 lg:grid-cols-4">
//           {principles.map((principle, index) => (
//             <Reveal
//               as="article"
//               key={principle.title}
//               delay={index * 0.04}
//               className="group rounded-[16px] border border-[var(--color-slate-200)] bg-white p-[22px] transition-all duration-300 hover:-translate-y-[2px] hover:border-[var(--color-violet-92)] hover:shadow-[0_14px_40px_-18px_rgba(91,33,182,0.18)]"
//             >
//               <span className="font-poppins text-[11px] font-semibold uppercase tracking-[2px] text-[var(--color-violet-42)]">
//                 {principle.number}
//               </span>
//               <span className="mt-[18px] flex size-[44px] items-center justify-center rounded-[12px] border border-[var(--color-amber-50)] bg-[var(--color-violet-98)] text-[var(--color-violet-42)]">
//                 <PrincipleIcon src={principle.icon} />
//               </span>
//               <h3 className="mt-[18px] font-poppins text-[18px] font-semibold leading-[1.35] tracking-[-0.3px] text-[var(--color-haiti)]">
//                 {principle.title}
//               </h3>
//               <p className="mt-[9px] font-poppins text-[14px] leading-[1.6] text-[var(--color-slate-500)]">
//                 {principle.body}
//               </p>
//             </Reveal>
//           ))}
//         </div>

//         <Reveal delay={0.1}>
//           <div className="mt-[18px] grid overflow-hidden rounded-[16px] border border-[var(--color-slate-200)] bg-white shadow-[0_18px_60px_-44px_rgba(91,33,182,.35)] lg:grid-cols-[1.2fr_0.8fr]">
//             <div className="p-[24px] sm:p-[32px]">
//               <span className="font-poppins text-[11px] font-semibold uppercase tracking-[2px] text-[var(--color-violet-42)]">
//                 From Amsterdam, expanding across Europe
//               </span>
//               <h3 className="mt-[12px] font-poppins text-[24px] font-semibold leading-[1.2] tracking-[-0.5px] text-[var(--color-haiti)]">
//                 Built where the businesses are.
//               </h3>
//               <p className="mt-[12px] max-w-[620px] font-poppins text-[14px] leading-[1.7] text-[var(--color-dolphin)]">
//                 We start close to the businesses we serve: local language, local
//                 hours and local context. Then we grow outward, one market at a
//                 time, instead of pretending to be everywhere at once.
//               </p>
//               <div className="mt-[18px] flex flex-wrap gap-[8px]">
//                 {[
//                   "Netherlands live",
//                   "Belgium 2026",
//                   "Germany 2026",
//                   "Austria planned",
//                 ].map((region) => (
//                   <span
//                     key={region}
//                     className="inline-flex items-center gap-[6px] rounded-full border border-[var(--color-slate-200)] bg-white px-[10px] py-[6px] font-jakarta text-[12px] text-[var(--color-dolphin)]"
//                   >
//                     <span className="size-[7px] rounded-full bg-[var(--color-violet-42)]" />
//                     {region}
//                   </span>
//                 ))}
//               </div>
//             </div>
//             <div className="relative min-h-[220px] ">
//               {/* eslint-disable-next-line @next/next/no-img-element */}
//               <img
//                 src="/about/icon/built.svg"
//                 alt=""
//                 aria-hidden="true"
//                 className="absolute inset-0 h-full w-full object-contain opacity-70"
//               />
//             </div>
//           </div>
//         </Reveal>
//       </div>
//     </section>
//   );
// }
"use client";

import Reveal from "@/app/components/Reveal";
import { principles } from "./data";

function PrincipleIcon({
  src,
  background,
  color,
}: {
  src: string;
  background: string;
  color: string;
}) {
  return (
    <span
      className={`mt-[18px] flex size-[44px] items-center justify-center rounded-[12px] border border-[var(--color-slate-200)] ${background} ${color}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt="" aria-hidden="true" className="size-[22px]" />
    </span>
  );
}

export default function AboutEurope() {
  return (
    <section className="relative bg-[#F5F3FF] py-[60px] lg:py-[100px]">
      <div className="md:max-w-[1400px] md:mx-auto fix">
        <div className="mt-[18px] grid gap-[28px] lg:grid-cols-[0.95fr_1.05fr] lg:items-end lg:gap-[72px]">
          <div>
            <Reveal>
              <span className="font-poppins text-[14px] font-semibold uppercase leading-[19.5px] tracking-[2px] text-[var(--color-violet-42)]">
                Designed for the European market
              </span>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 className="max-w-[450px] pt-1 font-poppins text-[clamp(32px,4vw,44px)] font-bold leading-[1.12] tracking-[-1px] text-[var(--color-haiti)]">
                A European-first approach, starting in the Netherlands.
              </h2>
            </Reveal>
          </div>

          <Reveal delay={0.08}>
            <p className="max-w-[600px] font-poppins text-[16px] leading-[1.75] text-[var(--color-dolphin)]">
              Growth Rocket is being developed with the European market in mind
              — starting in the Netherlands and gradually expanding toward other
              regions, including German-speaking markets. Our communication,
              design direction and product approach are intentionally built
              around four ideas.
            </p>
          </Reveal>
        </div>

        <Reveal className="mt-[42px] grid gap-[14px] sm:grid-cols-2 lg:grid-cols-4 duration-100">
          {principles.map((principle, index) => (
            <div
              key={principle.title}
              className="group rounded-[16px] border border-[var(--color-slate-200)] bg-white p-[22px] transition-all duration-300 hover:-translate-y-[2px] hover:border-[var(--color-violet-92)] hover:shadow-[0_14px_40px_-18px_rgba(91,33,182,0.18)]"
            >
              <span className="font-poppins text-[11px] font-semibold uppercase tracking-[2px] text-[var(--color-violet-42)]">
                {principle.number}
              </span>

              <PrincipleIcon
                src={principle.icon}
                background={principle.background}
                color={principle.color}
              />

              <h3 className="mt-[18px] font-poppins text-[18px] font-semibold leading-[1.35] tracking-[-0.3px] text-[var(--color-haiti)]">
                {principle.title}
              </h3>

              <p className="mt-[9px] font-poppins text-[14px] leading-[1.6] text-[var(--color-slate-500)]">
                {principle.body}
              </p>
            </div>
          ))}
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-[18px] grid overflow-hidden rounded-[16px] border border-[var(--color-slate-200)] bg-white shadow-[0_18px_60px_-44px_rgba(91,33,182,.35)] lg:grid-cols-[1.2fr_0.8fr]">
            <div className="p-[24px] sm:p-[32px]">
              <span className="font-poppins text-[11px] font-semibold uppercase tracking-[2px] text-[var(--color-violet-42)]">
                From Amsterdam, expanding across Europe
              </span>

              <h3 className="mt-[12px] font-poppins text-[24px] font-semibold leading-[1.2] tracking-[-0.5px] text-[var(--color-haiti)]">
                Built where the businesses are.
              </h3>

              <p className="mt-[12px] max-w-[620px] font-poppins text-[14px] leading-[1.7] text-[var(--color-dolphin)]">
                We start close to the businesses we serve: local language, local
                hours and local context. Then we grow outward, one market at a
                time, instead of pretending to be everywhere at once.
              </p>

              <div className="mt-[18px] flex flex-wrap gap-[8px]">
                {[
                  "Netherlands live",
                  "Belgium 2026",
                  "Germany 2026",
                  "Austria planned",
                ].map((region) => (
                  <span
                    key={region}
                    className="inline-flex items-center gap-[6px] rounded-full border border-[var(--color-slate-200)] bg-white px-[10px] py-[6px] font-jakarta text-[12px] text-[var(--color-dolphin)]"
                  >
                    <span className="size-[7px] rounded-full bg-[var(--color-violet-42)]" />
                    {region}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative min-h-[220px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/about/icon/built.svg"
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-full w-full object-contain opacity-70"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
