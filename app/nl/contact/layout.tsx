import type { ReactNode } from "react";

export default function NlContactLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <style>{`.gr-sticky-actions { display: none !important; }`}</style>
      {children}
    </>
  );
}
