"use client";

import { useState } from "react";
import { Monitor, Tablet, Smartphone } from "lucide-react";

const DEVICES = [
  { id: "desktop", label: "Desktop", icon: Monitor, width: "100%" },
  { id: "tablet", label: "Tablet", icon: Tablet, width: "768px" },
  { id: "mobile", label: "Mobile", icon: Smartphone, width: "390px" },
] as const;

type DeviceId = (typeof DEVICES)[number]["id"];

export default function TemplateLivePreview({
  href,
  title,
}: {
  href: string;
  title: string;
}) {
  const [device, setDevice] = useState<DeviceId>("desktop");
  const activeWidth = DEVICES.find((d) => d.id === device)?.width ?? "100%";

  return (
    <div>
      <div className=" mt-[50px] lg:mt-[80px] mb-[28px] flex flex-col items-center gap-[10px]">
        <p className="font-poppins text-sm font-semibold uppercase tracking-[2px] text-[var(--color-violet-42)]">
          Try it out
        </p>
        <div className="flex items-center gap-[6px] rounded-[999px] border border-[var(--color-slate-200)] bg-white p-[4px]">
          {DEVICES.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              type="button"
              onClick={() => setDevice(id)}
              aria-label={label}
              aria-pressed={device === id}
              className={
                "flex items-center justify-center rounded-[999px] p-[8px] transition-colors " +
                (device === id
                  ? "bg-[var(--color-violet-42)] text-white"
                  : "text-[var(--color-dolphin)] hover:bg-[var(--color-violet-98)]")
              }
            >
              <Icon size={16} strokeWidth={2} aria-hidden />
            </button>
          ))}
        </div>
      </div>

      <div
        className="mx-auto overflow-hidden rounded-lg! border border-[var(--color-slate-200)] bg-[#212122] p-[10px] shadow-sm transition-[max-width] duration-300 ease-in-out"
        style={{ width: "100%", maxWidth: activeWidth }}
      >
        <div className="flex shrink-0 items-center gap-[6px] bg-[#444444]! px-[10px] py-[6px] rounded-t-lg!">
          <span className="h-[7px] w-[7px] rounded-full bg-[#ff5f57]" />
          <span className="h-[7px] w-[7px] rounded-full bg-[#febc2e]" />
          <span className="h-[7px] w-[7px] rounded-full bg-[#28c840]" />
        </div>
        <iframe
          src={href}
          title={`${title} live preview`}
          loading="lazy"
          className="h-[84vh] w-full border-0 rounded-b-lg! bg-white"
        />
      </div>
    </div>
  );
}
