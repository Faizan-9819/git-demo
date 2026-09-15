// function CheckCircleIcon() {
//   return (
//     <svg
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       aria-hidden
//       className="relative z-10 flex-none text-[var(--color-violet-42)]"
//     >
//       <circle cx="12" cy="12" r="10"></circle>
//       <polyline points="8 12 11 15 16 9"></polyline>
//     </svg>
//   );
// }

// export default function StartklaarSection() {
//   const readyItems = [
//     {
//       title: "Ready",
//       subtitle: " to be discovered",
//       description: "Found when customers search for you.",
//     },
//     {
//       title: "Ready",
//       subtitle: " to earn trust",
//       description: "Credible before the first enquiry.",
//     },
//     {
//       title: "Ready",
//       subtitle: " to receive",
//       description: "Every enquiry lands in one place.",
//     },
//     {
//       title: "Ready",
//       subtitle: " to deliver",
//       description: "Appointments confirmed, nothing forgotten.",
//     },
//     {
//       title: "Ready",
//       subtitle: " to grow",
//       description: "Built to grow without breaking.",
//     },
//   ];

//   return (
//     <section id="startklaar" className="scroll-mt-24 pt-14">
//       <h2 className="text-balance font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
//         The StartKlaar philosophy: five kinds of ready
//       </h2>

//       <p className="mt-7  font-poppins text-[16.5px] leading-[26px] text-[var(--color-dolphin)]">
//         Strip away the noise, and being ready for that first customer comes down
//         to five things — none of which are really about technology. We call it
//         being{" "}
//         <strong className="font-semibold text-[var(--color-haiti)]">
//           startklaar
//         </strong>
//         :
//       </p>

//       <div className="mt-8 ">
//         <div className="relative flex flex-col gap-0 rounded-2xl border border-[var(--color-violet-92)] bg-[var(--color-blog-panel)] p-6 sm:p-7">
//           {/* Vertical timeline line - centered on icons, from first icon bottom to last icon top */}
//           <div
//             className="absolute left-[43px] top-[33px] bottom-[6px] w-[2px] bg-[var(--color-violet-92)]"
//             aria-hidden="true"
//           />

//           {readyItems.map((item, idx) => (
//             <div
//               key={idx}
//               className="relative flex items-start gap-4 py-4 first:pt-0 last:pb-0"
//             >
//               <CheckCircleIcon />
//               <div className="flex-1">
//                 <div className="font-poppins text-[16.5px] font-semibold leading-[26px] text-[var(--color-haiti)]">
//                   <span className="font-bold text-[var(--color-violet-42)]">
//                     {item.title}
//                   </span>
//                   <span>{item.subtitle}</span>
//                 </div>
//                 <p className="mt-1 font-poppins text-[15px] leading-6 text-[var(--color-dolphin)]">
//                   {item.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="mt-7 ">
//         <p className="font-poppins text-[16.5px] leading-[26px] text-[var(--color-dolphin)]">
//           <strong className="font-semibold text-[var(--color-haiti)]">
//             Ready to be discovered.
//           </strong>{" "}
//           When someone searches for what you do, you show up. A professional
//           presence, and over time the fundamentals of local visibility: a Google
//           Bedrijfsprofiel, local SEO, being findable where your customers
//           actually look.
//         </p>
//         <p className="mt-5 font-poppins text-[16.5px] leading-[26px] text-[var(--color-dolphin)]">
//           <strong className="font-semibold text-[var(--color-haiti)]">
//             Ready to earn trust.
//           </strong>{" "}
//           First impressions decide whether a stranger sends the enquiry or keeps
//           scrolling. Consistent branding, a professional look, clear information
//           — credibility isn't vanity, it's the entry ticket.
//         </p>
//         <p className="mt-5 font-poppins text-[16.5px] leading-[26px] text-[var(--color-dolphin)]">
//           <strong className="font-semibold text-[var(--color-haiti)]">
//             Ready to receive.
//           </strong>{" "}
//           When interest comes, it must land somewhere you'll see it — not
//           scatter across inboxes and DMs. Speed is a superpower for new
//           businesses: answering within an hour instead of a day can be the whole
//           difference between winning and losing a customer.
//         </p>
//         <p className="mt-5 font-poppins text-[16.5px] leading-[26px] text-[var(--color-dolphin)]">
//           <strong className="font-semibold text-[var(--color-haiti)]">
//             Ready to deliver.
//           </strong>{" "}
//           Appointments confirmed, conversations tracked, nothing forgotten.
//           Early on, every customer is a big percentage of your business — a
//           professional experience for your third customer is what produces your
//           fourth, fifth and sixth. This is where customer reviews start
//           compounding.
//         </p>
//         <p className="mt-5 font-poppins text-[16.5px] leading-[26px] text-[var(--color-dolphin)]">
//           <strong className="font-semibold text-[var(--color-haiti)]">
//             Ready to grow.
//           </strong>{" "}
//           What works for five customers shouldn't collapse at twenty-five.
//           Organised from day one means growth strengthens the business instead
//           of overwhelming it.
//         </p>
//         <p className="mt-5 font-poppins text-[16.5px] leading-[26px] text-[var(--color-dolphin)]">
//           Discovered. Trusted. Receiving. Delivering. Growing. That's what{" "}
//           <em>startklaar</em> means — not a perfect logo, not a 40-page plan,
//           but a business that's ready the moment a real customer shows up.
//         </p>
//         <p className="mt-5 font-poppins text-[16.5px] leading-[26px] text-[var(--color-dolphin)]">
//           And here's the frustrating part: none of this is conceptually
//           difficult. The difficulty has always been practical — building it
//           traditionally means assembling and managing a pile of separate tools,
//           exactly the setup swamp where first launches sink.
//         </p>
//         <p className="mt-5 font-poppins text-[16.5px] leading-[26px] text-[var(--color-dolphin)]">
//           Which raises the obvious question: what if the entire foundation came
//           as one piece?
//         </p>
//       </div>
//     </section>
//   );
// }

//
//

function CheckCircleIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className="relative z-10 flex-none bg-[var(--color-blog-panel)] text-[var(--color-violet-42)]"
    >
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="8 12 11 15 16 9"></polyline>
    </svg>
  );
}

export default function StartklaarSection() {
  const readyItems = [
    {
      title: "Ready",
      subtitle: " to be discovered",
      description: "Found when customers search for you.",
    },
    {
      title: "Ready",
      subtitle: " to earn trust",
      description: "Credible before the first enquiry.",
    },
    {
      title: "Ready",
      subtitle: " to receive",
      description: "Every enquiry lands in one place.",
    },
    {
      title: "Ready",
      subtitle: " to deliver",
      description: "Appointments confirmed, nothing forgotten.",
    },
    {
      title: "Ready",
      subtitle: " to grow",
      description: "Built to grow without breaking.",
    },
  ];

  return (
    <section id="startklaar" className="scroll-mt-24 pt-14">
      <h2 className="text-balance font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
        The StartKlaar philosophy: five kinds of ready
      </h2>

      <p className="mt-7  font-poppins text-[16.5px] leading-[26px] text-[var(--color-dolphin)]">
        Strip away the noise, and being ready for that first customer comes down
        to five things — none of which are really about technology. We call it{" "}
        <strong className="font-semibold text-[var(--color-haiti)]">
          startklaar
        </strong>
        :
      </p>

      <div className="mt-8 ">
        <div className="relative flex flex-col gap-0 rounded-2xl border border-[var(--color-violet-92)] bg-[var(--color-blog-panel)] p-6 sm:p-7">
          {/* Vertical timeline line - centered on icons, starting at first icon bottom and ending at last icon top */}
          <div
            className="absolute left-[34px] sm:left-[40px] top-[50px] bottom-[60px] z-0 w-[2px] -translate-x-1/2 bg-[var(--color-violet-92)]"
            aria-hidden="true"
          />

          {readyItems.map((item, idx) => (
            <div
              key={idx}
              className="relative flex items-start gap-4 py-4 first:pt-0 last:pb-0"
            >
              <CheckCircleIcon />
              <div className="flex-1">
                <div className="font-poppins text-[16.5px] font-semibold leading-[26px] text-[var(--color-haiti)]">
                  <span className="font-bold text-[var(--color-violet-42)]">
                    {item.title}
                  </span>
                  <span>{item.subtitle}</span>
                </div>
                <p className="mt-1 font-poppins text-[15px] leading-6 text-[var(--color-dolphin)]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-7 ">
        <p className="font-poppins text-[16.5px] leading-[26px] text-[var(--color-dolphin)]">
          <strong className="font-semibold text-[var(--color-haiti)]">
            Ready to be discovered.
          </strong>{" "}
          When someone searches for what you do, you show up. A professional
          presence, and over time the fundamentals of local visibility: a Google
          Bedrijfsprofiel, local SEO, being findable where your customers
          actually look.
        </p>
        <p className="mt-5 font-poppins text-[16.5px] leading-[26px] text-[var(--color-dolphin)]">
          <strong className="font-semibold text-[var(--color-haiti)]">
            Ready to earn trust.
          </strong>{" "}
          First impressions decide whether a stranger sends the enquiry or keeps
          scrolling. Consistent branding, a professional look, clear information
          — credibility isn't vanity, it's the entry ticket.
        </p>
        <p className="mt-5 font-poppins text-[16.5px] leading-[26px] text-[var(--color-dolphin)]">
          <strong className="font-semibold text-[var(--color-haiti)]">
            Ready to receive.
          </strong>{" "}
          When interest comes, it must land somewhere you'll see it — not
          scatter across inboxes and DMs. Speed is a superpower for new
          businesses: answering within an hour instead of a day can be the whole
          difference between winning and losing a customer.
        </p>
        <p className="mt-5 font-poppins text-[16.5px] leading-[26px] text-[var(--color-dolphin)]">
          <strong className="font-semibold text-[var(--color-haiti)]">
            Ready to deliver.
          </strong>{" "}
          Appointments confirmed, conversations tracked, nothing forgotten.
          Early on, every customer is a big percentage of your business — a
          professional experience for your third customer is what produces your
          fourth, fifth and sixth. This is where customer reviews start
          compounding.
        </p>
        <p className="mt-5 font-poppins text-[16.5px] leading-[26px] text-[var(--color-dolphin)]">
          <strong className="font-semibold text-[var(--color-haiti)]">
            Ready to grow.
          </strong>{" "}
          What works for five customers shouldn't collapse at twenty-five.
          Organised from day one means growth strengthens the business instead
          of overwhelming it.
        </p>
        <p className="mt-5 font-poppins text-[16.5px] leading-[26px] text-[var(--color-dolphin)]">
          Discovered. Trusted. Receiving. Delivering. Growing. That's what{" "}
          <em>startklaar</em> means — not a perfect logo, not a 40-page plan,
          but a business that's ready the moment a real customer shows up.
        </p>
        <p className="mt-5 font-poppins text-[16.5px] leading-[26px] text-[var(--color-dolphin)]">
          And here's the frustrating part: none of this is conceptually
          difficult. The difficulty has always been practical — building it
          traditionally means assembling and managing a pile of separate tools,
          exactly the setup swamp where first launches sink.
        </p>
        <p className="mt-5 font-poppins text-[16.5px] leading-[26px] text-[var(--color-dolphin)]">
          Which raises the obvious question: what if the entire foundation came
          as one piece?
        </p>
      </div>
    </section>
  );
}
