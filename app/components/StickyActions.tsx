"use client";

import { useState, useEffect } from "react";
import BookingForm from "./BookingForm";
import LeadForm from "./LeadForm";
import PartnerForm from "./PartnerForm";
import { useLanguage } from "../i18n/LanguageProvider";

export default function StickyActions() {
  const { t } = useLanguage();
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isLeadOpen, setIsLeadOpen] = useState(false);
  const [isPartnerOpen, setIsPartnerOpen] = useState(false);

  const openBooking = () => {
    setIsLeadOpen(false);
    setIsPartnerOpen(false);
    setIsBookingOpen(true);
  };

  const openLead = () => {
    setIsBookingOpen(false);
    setIsPartnerOpen(false);
    setIsLeadOpen(true);
  };

  const openPartner = () => {
    setIsBookingOpen(false);
    setIsLeadOpen(false);
    setIsPartnerOpen(true);
  };

  // Listen for custom events to trigger modals from other components
  useEffect(() => {
    const handleOpenLead = () => openLead();
    const handleOpenBooking = () => openBooking();
    const handleOpenPartner = () => openPartner();

    window.addEventListener("open-lead-form", handleOpenLead);
    window.addEventListener("open-booking-form", handleOpenBooking);
    window.addEventListener("open-partner-form", handleOpenPartner);

    return () => {
      window.removeEventListener("open-lead-form", handleOpenLead);
      window.removeEventListener("open-booking-form", handleOpenBooking);
      window.removeEventListener("open-partner-form", handleOpenPartner);
    };
  }, []);

  return (
    <>
      {/* Desktop Sticky Buttons */}
      <div className="gr-sticky-actions hidden lg:flex flex-col gap-6 fixed right-0 top-1/2 -translate-y-1/2 z-[1000]">
        <button
          onClick={openBooking}
          className="text-[#fff] cursor-pointer rounded-r-[10px] px-[12px] py-[10px] shadow-lg -rotate-180 [writing-mode:vertical-rl] font-poppins font-medium text-[15px] tracking-wide transition-all hover:scale-105 "
          style={{ background: "var(--grad-brand)" }}
        >
          {t({ en: "Book an Appointment", nl: "Maak een afspraak" })}
        </button>
        <button
          onClick={openLead}
          className="text-[#fff] cursor-pointer rounded-r-[10px] px-[12px] py-[10px] shadow-lg -rotate-180 [writing-mode:vertical-rl] font-poppins font-medium text-[15px] tracking-wide transition-all  hover:scale-105 bg-[#170B33]"
        >
          {t({ en: "Start Now", nl: "Start nu" })}
        </button>
      </div>

      {/* Mobile Bottom Bar */}
      <div className="gr-sticky-actions lg:hidden fixed bottom-0 left-0 right-0 z-[1000] flex bg-white/80 backdrop-blur-md shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
        <button
          onClick={openBooking}
          className="flex-1 h-[52px] flex items-center justify-center text-white font-poppins font-semibold text-[15px] shadow-lg shadow-[var(--color-violet-42)]/20"
          style={{ background: "var(--grad-brand)" }}
        >
          {t({ en: "Book an Appointment", nl: "Maak een afspraak" })}
        </button>
        <button
          onClick={openLead}
          className="flex-1 h-[52px] flex items-center justify-center text-white font-poppins font-semibold text-[15px] bg-[#0A0516] shadow-lg"
        >
          {t({ en: "Start Now", nl: "Start nu" })}
        </button>
      </div>

      <BookingForm
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
      <LeadForm isOpen={isLeadOpen} onClose={() => setIsLeadOpen(false)} />
      <PartnerForm
        isOpen={isPartnerOpen}
        onClose={() => setIsPartnerOpen(false)}
      />
    </>
  );
}
