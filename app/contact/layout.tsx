import type { ReactNode } from "react";

export default function ContactLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <style>{`.gr-sticky-actions { display: none !important; }`}</style>
      {children}
    </>
  );
}
