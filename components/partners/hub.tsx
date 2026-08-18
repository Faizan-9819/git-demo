import Reveal from "@/app/components/Reveal";
import {
  hubFeatures,
  hubMetrics,
  hubEnquiries,
} from "@/app/partner-network/data";

const metricColors = [
  "bg-[var(--color-violet-98)]",
  "bg-amber-50",
  "bg-slate-50",
  "bg-orange-50",
];
const sparkColors = [
  "var(--color-violet-75)",
  "var(--color-amber-300)",
  "var(--color-slate-300)",
  "var(--color-amber-500)",
];
const sparkHeights = [10, 14, 8, 16, 12, 18, 14];

function HubMockup() {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl shadow-2xl p-6">
      {/* Topbar */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
        <div className="flex items-center gap-2.5">
          <span
            className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
            style={{
              background:
                "linear-gradient(135deg, var(--color-violet-42), var(--color-violet-58))",
            }}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="m22 2-7 20-4-9-9-4Z" />
              <path d="M22 2 11 13" />
            </svg>
          </span>
          <span className="font-poppins font-semibold text-[14px] text-[var(--color-haiti)]">
            Hub · Bridge Café
          </span>
        </div>
        <div className="flex gap-1.5">
          {["bg-red-300", "bg-yellow-300", "bg-green-300"].map((c, i) => (
            <span key={i} className={`w-2.5 h-2.5 rounded-full ${c}`} />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-[140px_1fr] gap-6">
        {/* Sidebar */}
        <nav className="flex flex-col gap-1">
          {[
            { label: "Overview", active: true },
            { label: "Enquiries", active: false },
            { label: "Bookings", active: false },
            { label: "Customers", active: false },
            { label: "Analytics", active: false },
            { label: "Settings", active: false },
          ].map((item) => (
            <div
              key={item.label}
              className={`flex items-center gap-2 px-2.5 py-2 rounded-lg text-[13px] ${item.active ? "bg-[var(--color-violet-98)] text-[var(--color-violet-42)] font-semibold" : "text-[var(--color-dolphin)]"}`}
            >
              {item.label}
            </div>
          ))}
        </nav>

        {/* Main */}
        <div>
          <div className="grid grid-cols-2 gap-3 mb-5">
            {hubMetrics.map((m, i) => (
              <div
                key={m.label}
                className={`p-4 border border-transparent rounded-xl ${metricColors[i]}`}
              >
                <div className="text-[12px] text-[var(--color-dolphin)]">
                  {m.label}
                </div>
                <div className="font-poppins text-[28px] font-bold text-[var(--color-haiti)] my-1">
                  {m.value}
                </div>
                <div className="text-[11px] font-semibold text-[var(--color-green-600)]">
                  {m.delta}
                </div>
                <div className="flex gap-0.5 items-end h-4 mt-1.5">
                  {sparkHeights.map((h, j) => (
                    <span
                      key={j}
                      className="w-1.5 rounded-sm"
                      style={{ height: h, background: sparkColors[i] }}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="border border-slate-200 rounded-xl p-3.5">
            <div className="flex justify-between items-center mb-3">
              <div className="text-[13px] font-semibold text-[var(--color-haiti)]">
                Today's enquiries
              </div>
              <div className="text-[11px] text-[var(--color-dolphin)]">
                3 unread
              </div>
            </div>
            {hubEnquiries.map((e, i) => (
              <div
                key={e.name}
                className={`flex items-center gap-2.5 py-2.5 ${i < hubEnquiries.length - 1 ? "border-b border-slate-100" : ""}`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full shrink-0 ${e.isNew ? "bg-[var(--color-violet-42)]" : "bg-transparent"}`}
                />
                <div className="flex-1 min-w-0">
                  <div className="text-[13px] font-semibold text-[var(--color-haiti)]">
                    {e.name}
                  </div>
                  <div className="text-[12px] text-[var(--color-dolphin)] truncate">
                    {e.topic}
                  </div>
                </div>
                <div className="text-[11px] text-[var(--color-slate-500)]">
                  {e.time}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hub() {
  return (
    <section id="hub" className="py-[60px] lg:py-[100px] bg-[#F6F3FF]">
      <div className="md:max-w-[1400px] md:mx-auto fix">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-14 items-center">
          <Reveal>
            <div>
              <span className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.14em] text-[var(--color-violet-42)] ">
                The Hub
              </span>
              <h2 className="font-poppins font-bold text-[clamp(32px,5vw,44px)] leading-[1.2] tracking-[-1px] text-[var(--color-haiti)] mt-4">
                More than just a website.
              </h2>
              <p className="mt-4 font-poppins text-[16px] leading-[1.4] tracking-[0.16px] text-[var(--color-dolphin)]">
                The Growth Rocket Hub is a simple business dashboard — a cleaner
                workflow instead of managing everything manually.
              </p>
              <ul className="mt-7 flex flex-col gap-3.5">
                {hubFeatures.map(([title, sub]) => (
                  <li key={title} className="flex gap-3.5">
                    <span className="w-8 h-8 rounded-[9px] flex items-center justify-center shrink-0 bg-white text-[var(--color-violet-42)]">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <div>
                      <div className="font-semibold text-[15px] text-[var(--color-haiti)]">
                        {title}
                      </div>
                      <div className="text-[14px] text-[var(--color-dolphin)]">
                        {sub}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal className="lg:block hidden" delay={0.1}>
            <HubMockup />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
