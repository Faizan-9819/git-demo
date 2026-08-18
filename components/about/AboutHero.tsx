// "use client";

// import Reveal from "@/app/components/Reveal";
// import { heroStats } from "./data";

// function EcosystemVisual() {
//   return (
//     <Reveal
//       delay={0.12}
//       y={32}
//       className="relative min-h-[360px] rounded-[22px]  p-[18px] shadow-[0_24px_80px_-40px_rgba(91,33,182,0.45)] sm:min-h-[430px]"
//     >
//       <div
//         className="absolute inset-0 rounded-[22px]"
//         style={{ background: "var(--grad-hero-frame)" }}
//         aria-hidden
//       />
//       {/* <div className="absolute inset-[18px] overflow-hidden rounded-[16px]  shadow-[0_18px_60px_-38px_rgba(46,16,101,0.45)]">
//         <div
//           className="absolute inset-0 opacity-70"
//           style={{
//             backgroundImage:
//               "linear-gradient(to right, rgba(148,163,184,.16) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,.16) 1px, transparent 1px)",
//             backgroundSize: "54px 54px",
//           }}
//           aria-hidden
//         />
//         <svg
//           className="absolute inset-0 h-full w-full"
//           viewBox="0 0 520 520"
//           preserveAspectRatio="none"
//           aria-hidden
//         >
//           <path
//             d="M170 112C236 132 284 202 382 220"
//             fill="none"
//             stroke="var(--color-violet-58)"
//             strokeDasharray="4 9"
//             strokeLinecap="round"
//             strokeWidth="1.3"
//             opacity=".45"
//           />
//           <path
//             d="M382 220C328 286 262 352 214 412"
//             fill="none"
//             stroke="var(--color-violet-58)"
//             strokeDasharray="4 9"
//             strokeLinecap="round"
//             strokeWidth="1.3"
//             opacity=".45"
//           />
//           <path
//             d="M170 112C148 238 180 342 214 412"
//             fill="none"
//             stroke="var(--color-violet-58)"
//             strokeDasharray="4 9"
//             strokeLinecap="round"
//             strokeWidth="1.3"
//             opacity=".45"
//           />
//         </svg>

//         <div className="absolute left-[7%] top-[8%] w-[190px] rounded-[12px] border border-[var(--color-violet-92)] bg-white p-[14px] shadow-[0_18px_40px_-28px_rgba(10,5,22,.45)]">
//           <span className="font-poppins text-[11px] font-semibold uppercase tracking-[2px] text-[var(--color-violet-42)]">
//             Website
//           </span>
//           <h3 className="mt-[6px] font-poppins text-[18px] font-semibold leading-[1.25] text-[var(--color-haiti)]">
//             Always online
//           </h3>
//           <div className="mt-[12px] flex flex-col gap-[6px]">
//             <span className="h-[7px] w-4/5 rounded-full bg-[var(--color-violet-42)]" />
//             <span className="h-[7px] w-3/5 rounded-full bg-[var(--color-slate-200)]" />
//             <span className="h-[7px] w-2/5 rounded-full bg-[var(--color-slate-200)]" />
//           </div>
//           <span className="mt-[12px] inline-flex items-center gap-[6px] rounded-full bg-[var(--color-green-50)] px-[9px] py-[5px] font-sans text-[11px] font-semibold text-[var(--color-green-800)]">
//             <span className="size-[6px] rounded-full bg-[var(--color-green-600)]" />
//             Live
//           </span>
//         </div>

//         <div className="absolute right-[6%] top-[30%] w-[215px] rounded-[12px] border border-[var(--color-violet-92)] bg-white p-[14px] shadow-[0_18px_40px_-28px_rgba(10,5,22,.45)]">
//           <span className="font-poppins text-[11px] font-semibold uppercase tracking-[2px] text-[var(--color-violet-42)]">
//             Booking
//           </span>
//           <h3 className="mt-[6px] font-poppins text-[18px] font-semibold leading-[1.25] text-[var(--color-haiti)]">
//             Next available
//           </h3>
//           <div className="mt-[12px] flex flex-wrap gap-[6px]">
//             {["Mon 9:00", "Mon 11:30", "Tue 14:00"].map((slot, index) => (
//               <span
//                 key={slot}
//                 className={`rounded-[8px] px-[8px] py-[5px] font-sans text-[11px] font-semibold ${
//                   index === 2
//                     ? "bg-[var(--color-amber-100)] text-[var(--color-amber-800)]"
//                     : "bg-[var(--color-violet-98)] text-[var(--color-violet-42)]"
//                 }`}
//               >
//                 {slot}
//               </span>
//             ))}
//           </div>
//           <div className="mt-[12px] grid grid-cols-7 gap-[4px]">
//             {Array.from({ length: 7 }).map((_, index) => (
//               <span
//                 key={index}
//                 className={`h-[18px] rounded-[5px] ${
//                   index % 3 === 1
//                     ? "bg-[var(--color-violet-58)]"
//                     : "bg-[var(--color-violet-98)]"
//                 }`}
//               />
//             ))}
//           </div>
//         </div>

//         <div className="absolute bottom-[7%] left-[16%] w-[260px] rounded-[12px] border border-[var(--color-violet-92)] bg-white p-[14px] shadow-[0_18px_40px_-28px_rgba(10,5,22,.45)]">
//           <span className="font-poppins text-[11px] font-semibold uppercase tracking-[2px] text-[var(--color-violet-42)]">
//             Hub
//           </span>
//           <h3 className="mt-[6px] font-poppins text-[18px] font-semibold leading-[1.25] text-[var(--color-haiti)]">
//             Today at a glance
//           </h3>
//           <div className="mt-[12px] grid grid-cols-3 gap-[8px]">
//             {[
//               ["7", "Enquiries", "bg-[var(--color-violet-98)]"],
//               ["4", "Bookings", "bg-[var(--color-amber-100)]"],
//               ["2", "Pending", "bg-[var(--color-blue-100)]"],
//             ].map(([value, label, bg]) => (
//               <div key={label} className={`${bg} rounded-[8px] p-[8px]`}>
//                 <div className="font-poppins text-[18px] font-bold leading-none text-[var(--color-haiti)]">
//                   {value}
//                 </div>
//                 <div className="mt-[3px] font-sans text-[10px] text-[var(--color-dolphin)]">
//                   {label}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div> */}
//       <div>
//         <video src="/about/video/herogif.mp4" loop muted></video>
//       </div>
//     </Reveal>
//   );
// }

// export default function AboutHero() {
//   return (
//     <section
//       className="relative overflow-hidden"
//       style={{
//         background:
//           "linear-gradient(to bottom, #ffffff 0%, var(--color-violet-98) 100%)",
//       }}
//     >
//       <div
//         aria-hidden
//         className="pointer-events-none absolute -left-[140px] top-[40px] h-[390px] w-[390px] rotate-[37deg] opacity-70"
//         style={{
//           background:
//             "radial-gradient(50% 50% at 50% 50%, rgba(254,215,170,0.6) 0%, rgba(254,215,170,0) 70%)",
//         }}
//       />
//       <div
//         aria-hidden
//         className="pointer-events-none absolute -right-[170px] top-[120px] h-[470px] w-[520px] opacity-80"
//         style={{
//           background:
//             "radial-gradient(50% 50% at 50% 50%, rgba(124,58,237,0.38) 0%, rgba(124,58,237,0) 70%)",
//         }}
//       />

//       <div className="fix relative grid gap-[44px]   py-[60px] lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:py-[86px]">
//         <div>
//           <Reveal>
//             <span className="btn-chip inline-flex items-center gap-2 rounded-[40px] border-2 border-gray-100 bg-white p-2">
//               <span className="chip-badge inline-flex items-center justify-center rounded-[10px] px-5 pb-1 pt-1.5">
//                 ABOUT
//               </span>
//               Built by an operations-first team
//             </span>
//           </Reveal>
//           <Reveal delay={0.05}>
//             <h1 className="mt-[18px] max-w-[610px] font-poppins text-[40px] font-bold leading-[1.08] tracking-[-1.2px] text-[var(--color-haiti)] sm:text-[clamp(46px,6vw,64px)] sm:tracking-[-2px]">
//               Built by a digital and technology company that{" "}
//               <span className="text-grad-brand">understands business.</span>
//             </h1>
//           </Reveal>
//           <Reveal delay={0.1}>
//             <p className="mt-[18px] max-w-[560px] font-poppins text-[16px] leading-[1.6] tracking-[0.16px] text-[var(--color-dolphin)]">
//               Growth Rocket is a product initiative by{" "}
//               <strong className="font-semibold text-[var(--color-haiti)]">
//                 Parashift Technologies
//               </strong>
//               , shaped by 15+ years of working closely with businesses of all
//               sizes across Europe, the Middle East and Asia, shaped into one
//               simple, managed system.
//             </p>
//           </Reveal>
//           <Reveal delay={0.15}>
//             <dl className="mt-[28px] grid max-w-[440px] grid-cols-3 gap-[25px]">
//               {heroStats.map((stat) => (
//                 <div key={stat.label}>
//                   <dt className="font-poppins text-[22px] font-bold leading-none text-[var(--color-haiti)]">
//                     {stat.value}
//                   </dt>
//                   <dd className="mt-[7px] font-jakarta text-[16px] leading-[1.35] text-[var(--color-dolphin)]">
//                     {stat.label}
//                   </dd>
//                 </div>
//               ))}
//             </dl>
//           </Reveal>
//         </div>

//         <EcosystemVisual />
//       </div>
//     </section>
//   );
// }
"use client";

import Reveal from "@/app/components/Reveal";
import { heroStats } from "./data";

function EcosystemVisual() {
  return (
    <Reveal
      delay={0.12}
      y={32}
      className="hidden md:block w-full flex items-start justify-end "
    >
      <video
        src="/about/video/herogif.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="flex h-[300px] lg:h-[530px] border border-violet-100 overflow-hidden w-auto object-cover rounded-[22px]"
      />
    </Reveal>
  );
}

export default function AboutHero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(to bottom, #ffffff 0%, var(--color-violet-98) 100%)",
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-[140px] top-[40px] h-[390px] w-[390px] rotate-[37deg] opacity-70"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(254,215,170,0.6) 0%, rgba(254,215,170,0) 70%)",
        }}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute -right-[170px] top-[120px] h-[470px] w-[520px] opacity-80"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(124,58,237,0.38) 0%, rgba(124,58,237,0) 70%)",
        }}
      />

      <div className="md:max-w-[1400px] md:mx-auto fix relative grid gap-[24px] py-[60px] lg:grid-cols-[1.5fr_1.08fr] lg:items-center lg:py-[86px]">
        <div className="">
          <Reveal>
            <span className="btn-chip inline-flex items-center gap-2 rounded-[40px] border-2 border-gray-100 bg-white p-2">
              <span className="chip-badge inline-flex items-center justify-center rounded-[10px] px-5 pb-1 pt-1.5">
                ABOUT
              </span>
              Built by an operations-first team
            </span>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="mt-[18px] max-w-[800px] font-poppins text-[40px] font-bold leading-[1.08] tracking-[-1.2px] text-[var(--color-haiti)] sm:text-[clamp(46px,6vw,56px)] sm:tracking-[-2px]">
              Built by a digital and technology company that{" "}
              <span className="text-grad-brand">understands business.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-[18px] max-w-[760px] font-poppins text-[16px] leading-[1.6] tracking-[0.16px] text-[var(--color-dolphin)]">
              Growth Rocket is a product initiative by{" "}
              <strong className="font-semibold text-[var(--color-haiti)]">
                Parashift Technologies
              </strong>
              , shaped by 15+ years of working closely with businesses of all
              sizes across Europe, the Middle East and Asia, shaped into one
              simple, managed system.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <dl className="mt-[28px] grid max-w-[540px] grid-cols-3 gap-[60px]">
              {heroStats.map((stat) => (
                <div key={stat.label}>
                  <dt className="font-poppins text-[26px] font-bold leading-none text-[var(--color-haiti)]">
                    {stat.value}
                  </dt>

                  <dd className="mt-[7px] font-jakarta text-[16px] leading-[1.35] text-[var(--color-dolphin)]">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <EcosystemVisual />
      </div>
    </section>
  );
}
