"use client";
import Reveal from "@/app/components/Reveal";
import Button from "@/app/components/ui/Button";

const enquiries = [
  {
    initial: "EM",
    name: "Emma Mitchell",
    sub: "Booking for Saturday lunch · 4 people",
    status: "New",
    statusClass: "bg-[var(--color-violet-98)] text-[var(--color-violet-42)]",
    avatarBg: "bg-[var(--color-violet-98)]",
    avatarText: "text-[var(--color-violet-42)]",
  },
  {
    initial: "TJ",
    name: "Tom Jenkins",
    sub: "Asking about catering quote",
    status: "Booked",
    statusClass: "bg-green-100 text-green-800",
    avatarBg: "bg-green-100",
    avatarText: "text-green-800",
  },
  {
    initial: "SR",
    name: "Sophia Reyes",
    sub: "Follow up after callback request",
    status: "Replied",
    statusClass: "bg-amber-100 text-amber-800",
    avatarBg: "bg-amber-100",
    avatarText: "text-amber-800",
  },
];

function HeroDashboard() {
  return (
    <div className="relative">
      <div className="absolute -top-5 -right-2 z-10 flex items-center gap-2.5 bg-white border border-slate-200 rounded-2xl px-3.5 py-2.5 shadow-lg">
        <span className="w-2 h-2 rounded-full bg-[var(--color-green-600)] shadow-[0_0_0_4px_rgba(34,160,107,0.15)]" />
        <div>
          <div className="text-xs font-semibold text-[var(--color-haiti)]">
            New enquiry
          </div>
          <div className="text-[11px] text-[var(--color-dolphin)]">
            Just now · Bridge Café
          </div>
        </div>
      </div>
      <div className="absolute -bottom-5 -left-4 z-10 flex items-center gap-2.5 bg-[var(--color-haiti)] text-white rounded-2xl px-4 py-3 shadow-xl">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--color-amber-300)"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
          <polyline points="16 7 22 7 22 13" />
        </svg>
        <div>
          <div className="text-xs font-semibold">+24% reply rate</div>
          <div className="text-[11px] text-white/60">vs last month</div>
        </div>
      </div>
      <div className="bg-white border border-slate-200 rounded-2xl shadow-2xl p-5 overflow-hidden">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="font-poppins font-semibold text-[15px] text-[var(--color-haiti)]">
              Growth Rocket Hub
            </div>
            <div className="text-xs text-[var(--color-dolphin)]">
              app.growthrocket.io · Bridge Café
            </div>
          </div>
          <div className="flex gap-0.5 bg-slate-100 p-0.5 rounded-lg">
            {["Today", "Week", "Month"].map((t, i) => (
              <button
                key={t}
                className={`px-3 py-1.5 text-xs font-medium rounded-md ${i === 0 ? "bg-white text-[var(--color-haiti)] shadow-sm" : "text-[var(--color-dolphin)]"}`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2.5 mb-4">
          {[
            {
              label: "Enquiries",
              value: "14",
              delta: "+5 today",
              bg: "bg-slate-50",
            },
            {
              label: "Bookings",
              value: "7",
              delta: "+2 today",
              bg: "bg-[var(--color-violet-98)]",
            },
            {
              label: "Reply time",
              value: "12m",
              delta: "↓ 38%",
              bg: "bg-amber-50",
            },
          ].map((s) => (
            <div key={s.label} className={`${s.bg} rounded-xl p-3.5`}>
              <div className="text-[11px] font-semibold uppercase tracking-wide text-[var(--color-dolphin)]">
                {s.label}
              </div>
              <div className="font-poppins text-[22px] font-bold text-[var(--color-haiti)] mt-1.5">
                {s.value}
              </div>
              <div className="text-[11px] font-semibold text-[var(--color-green-600)]">
                {s.delta}
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center mb-2.5">
          <div className="text-[13px] font-semibold text-[var(--color-haiti)]">
            Recent enquiries
          </div>
          <div className="text-xs text-[var(--color-dolphin)]">View all</div>
        </div>
        <div className="flex flex-col gap-2.5">
          {enquiries.map((e) => (
            <div
              key={e.name}
              className="flex items-center gap-3 p-3 border border-slate-200 rounded-xl bg-white hover:border-[var(--color-violet-92)] transition-colors"
            >
              <span
                className={`w-9 h-9 rounded-full flex items-center justify-center font-semibold text-[13px] shrink-0 ${e.avatarBg} ${e.avatarText}`}
              >
                {e.initial}
              </span>
              <div className="flex-1 min-w-0">
                <div className="text-[13px] font-semibold text-[var(--color-haiti)]">
                  {e.name}
                </div>
                <div className="text-xs text-[var(--color-dolphin)] truncate">
                  {e.sub}
                </div>
              </div>
              <span
                className={`text-[11px] font-semibold px-2.5 py-1 rounded-full shrink-0 ${e.statusClass}`}
              >
                {e.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function PartnersHero() {
  const openLeadForm = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-lead-form"));
    }
  };
  const openBookingForm = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-booking-form"));
    }
  };

  return (
    <section className="relative pt-[30px] pb-[60px] lg:pt-[50px] lg:pb-[100px] overflow-hidden bg-white">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-32 w-[520px] h-[520px] rounded-full opacity-40"
        style={{
          background:
            "radial-gradient(closest-side, rgba(124,58,237,0.45), transparent 80%)",
          filter: "blur(60px)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-36 -right-40 w-[400px] h-[400px] rounded-full opacity-40"
        style={{
          background:
            "radial-gradient(closest-side, rgba(251,146,60,0.4), transparent 80%)",
          filter: "blur(60px)",
        }}
      />

      <div className="md:max-w-[1400px] md:mx-auto fix relative z-10">
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-6 items-center ">
          <Reveal>
            <div className="flex flex-col">
              <div className="inline-flex w-fit flex-row-reverse items-center gap-2.5 bg-white border border-slate-200 rounded-full p-2 text-[13px] font-medium text-[var(--color-dolphin)] shadow-sm mb-7">
                <span>Partner Network now open</span>
                <span className="bg-[var(--color-violet-42)] text-white text-[11px] font-semibold px-2 py-1 rounded-full tracking-wide">
                  NEW
                </span>
              </div>
              <h1 className="font-poppins font-bold text-[clamp(32px,5vw,56px)] leading-[1.1] tracking-tight text-[var(--color-haiti)]">
                Help small businesses grow online{" "}
                <span className="relative text-grad-brand">
                  — and build recurring income
                  <span
                    aria-hidden
                    className="absolute inset-x-0 -bottom-0.5 h-2.5 bg-amber-200 -z-10 rounded opacity-55"
                  />
                </span>{" "}
                while doing it.
              </h1>
              <p className="mt-5 font-poppins text-[18px] text-[var(--color-dolphin)] max-w-[520px] leading-relaxed">
                Growth Rocket helps small businesses establish a professional
                online presence through managed websites and enquiry systems.
                Refer the businesses in your network and earn recurring
                commissions.
              </p>
              <div className="flex flex-wrap gap-3 mt-8">
                <Button onClick={openLeadForm} arrow="up-right" size="lg">
                  Become a Partner
                </Button>
                <Button
                  variant="secondary"
                  arrow="right"
                  size="lg"
                  onClick={openBookingForm}
                >
                  View Partner Deck
                </Button>
              </div>
              <div className="flex flex-wrap gap-6 mt-7 text-[13px] text-[var(--color-dolphin)]">
                {[
                  "No upfront cost",
                  "Recurring commissions",
                  "No technical work",
                ].map((item) => (
                  <span key={item} className="flex items-center gap-2">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--color-violet-42)"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {item}
                  </span>
                ))}
              </div>
              <p className="mt-4 font-poppins text-[14px] leading-[1.5] text-[var(--color-dolphin)]">
                Built for consultants, freelancers, students, agencies,
                community builders and business connectors.
              </p>
            </div>
          </Reveal>
          <Reveal className="lg:block hidden" delay={0.1}>
            <HeroDashboard />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
