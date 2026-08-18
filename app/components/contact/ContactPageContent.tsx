"use client";

import { motion, type Variants } from "framer-motion";
import { Globe, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import type { IconType } from "react-icons";
import {
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";
import LeadEnquiryForm from "../LeadEnquiryForm";
import Button from "../ui/Button";
import { CONTACT_INFO, phoneHref } from "../../lib/contact";

type ContactPageContentProps = {
  locale: "en" | "nl";
};

const COPY = {
  en: {
    eyebrow: "Contact",
    title: "Contact Us",
    intro: "Connect With Us",
    addressLabel: "Address",
    emailLabel: "Email",
    phoneLabel: "Phone",
    followUsLabel: "Follow us",
    bookAppointmentLabel: "Book an Appointment",
    formLabel: "Let's Connect",
  },
  nl: {
    eyebrow: "Contact",
    title: "Neem contact met ons op",
    intro: "Neem contact met ons op",
    addressLabel: "Adres",
    emailLabel: "E-mail",
    phoneLabel: "Telefoon",
    followUsLabel: "Volg ons",
    bookAppointmentLabel: "Maak een afspraak",
    formLabel: " Laten we kennismaken.",
  },
} as const;

const socialIcons: Record<string, IconType> = {
  Instagram: FaInstagram,
  LinkedIn: FaLinkedin,
  YouTube: FaYoutube,
  "X / Twitter": RiTwitterXFill,
};

const parentVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

function ContactRow({
  icon,
  label,
  children,
}: {
  icon: ReactNode;
  label: string;
  children: ReactNode;
}) {
  return (
    <motion.div
      variants={itemVariants}
      className="rounded-[18px] last:pb-0 pb-4"
    >
      <div className="min-w-0 flex flex-col gap-2">
        <h3 className="font-poppins text-[16px] text-grad-brand font-semibold leading-[19.5px] flex items-center gap-2">
          {icon}
          {label}
        </h3>
        <div className="flex flex-col gap-1 font-poppins text-[16px] leading-[1.6] text-[var(--color-dolphin)]">
          {children}
        </div>
      </div>
    </motion.div>
  );
}

export default function ContactPageContent({
  locale,
}: ContactPageContentProps) {
  const copy = COPY[locale];
  const openBookingForm = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-booking-form"));
    }
  };
  const addressLines =
    locale === "nl" ? CONTACT_INFO.addressLinesNl : CONTACT_INFO.addressLines;

  return (
    <main className="min-h-screen overflow-x-hidden bg-white">
      <section
        className="relative overflow-hidden pt-[72px] pb-[56px]"
        style={{
          background:
            "linear-gradient(174deg, var(--color-violet-42) 0%, var(--color-violet-23) 100%)",
        }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -top-[145px] -left-[143px] w-[390px] h-[393px] rotate-[52deg] -scale-y-100"
          style={{
            background:
              "radial-gradient(50% 50% at 50% 50%, rgba(254,229,102,0.22) 0%, rgba(254,229,102,0) 70%)",
            filter: "blur(10px)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-[120px] -right-[60px] w-[390px] h-[393px] rotate-[127deg]"
          style={{
            background:
              "radial-gradient(50% 50% at 50% 50%, rgba(254,229,102,0.25) 0%, rgba(254,229,102,0) 70%)",
            filter: "blur(12px)",
          }}
        />
        <div className="md:max-w-[1400px] md:mx-auto fix relative flex flex-col items-center gap-3 text-center">
          <h1 className="font-poppins font-bold text-[clamp(32px,6vw,52px)] leading-[1.1] tracking-[-1.5px] text-white">
            {copy.title}
          </h1>
        </div>
      </section>

      <section className="py-[56px] lg:py-[72px]">
        <div className="md:max-w-[1400px] md:mx-auto fix relative">
          <div className="flex flex-col gap-12 lg:gap-8 lg:flex-row lg:items-start lg:gap-[48px]">
            <motion.div
              variants={parentVariants}
              initial="hidden"
              animate="show"
              className="flex flex-1 flex-col lg:gap-6 pt-8 lg:max-w-[500px]"
            >
              <h2 className="mb-5 font-poppins font-medium text-[clamp(22px,5vw,30px)] leading-[1.2] tracking-[-1px] text-[var(--color-haiti)]">
                {copy.intro}
              </h2>
              <div className="flex flex-col gap-3">
                <ContactRow
                  icon={
                    <MapPin
                      size={18}
                      className="text-[var(--color-violet-42)] shrink-0"
                    />
                  }
                  label={copy.addressLabel}
                >
                  <address className="not-italic">
                    {addressLines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </address>
                </ContactRow>

                <ContactRow
                  icon={
                    <svg
                      viewBox="0 0 24 24"
                      className="w-[18px] h-[18px] text-[var(--color-violet-42)] shrink-0"
                      aria-hidden
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m2 7 10 7 10-7" />
                    </svg>
                  }
                  label={copy.emailLabel}
                >
                  <span className="flex flex-col gap-1">
                    <span className="flex flex-wrap items-baseline gap-1">
                      <span className="font-semibold text-[var(--color-haiti)]">
                        Sales:
                      </span>
                      <a
                        href={`mailto:${CONTACT_INFO.emails[0]}`}
                        className="break-words underline transition-colors hover:text-[var(--color-violet-58)]"
                      >
                        {CONTACT_INFO.emails[0]}
                      </a>
                    </span>
                    <span className="flex flex-wrap items-baseline gap-1">
                      <span className="font-semibold text-[var(--color-haiti)]">
                        Support:
                      </span>
                      <a
                        href={`mailto:${CONTACT_INFO.emails[1]}`}
                        className="break-words underline transition-colors hover:text-[var(--color-violet-58)]"
                      >
                        {CONTACT_INFO.emails[1]}
                      </a>
                    </span>
                  </span>
                </ContactRow>

                <ContactRow
                  icon={
                    <Phone
                      size={18}
                      className="text-[var(--color-violet-42)] shrink-0"
                    />
                  }
                  label={copy.phoneLabel}
                >
                  <div className="flex flex-col gap-1">
                    <a
                      href={`https://wa.me/${CONTACT_INFO.phone.replace(/[^\d]/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 break-words underline transition-colors hover:text-[var(--color-violet-58)]"
                    >
                      <FaWhatsapp className="w-4 h-4 text-black shrink-0" />
                      {CONTACT_INFO.phone}
                    </a>
                    <a
                      href={phoneHref(CONTACT_INFO.phone)}
                      className="flex items-center gap-2 break-words underline transition-colors hover:text-[var(--color-violet-58)]"
                    >
                      <Phone size={16} className="shrink-0" />
                      {CONTACT_INFO.phone}
                    </a>
                  </div>
                </ContactRow>

                <ContactRow
                  icon={
                    <Globe
                      size={18}
                      className="text-[var(--color-violet-42)] shrink-0"
                    />
                  }
                  label={copy.followUsLabel}
                >
                  <div className="flex items-center gap-[12px]">
                    {CONTACT_INFO.socialLinks
                      .filter((s) => s.label !== "WhatsApp")
                      .map((social) => {
                        const Icon = socialIcons[social.label];
                        if (!Icon) return null;
                        return (
                          <Link
                            key={social.label}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.label}
                            className="flex items-center justify-center rounded-xl bg-white text-black/70 transition-all duration-200 hover:scale-110 hover:text-[var(--color-violet-42)]"
                          >
                            <Icon size={20} />
                          </Link>
                        );
                      })}
                  </div>
                </ContactRow>

                <motion.div variants={itemVariants} className="pt-2">
                  <Button
                    onClick={openBookingForm}
                    arrow="up-right"
                    className="w-full sm:w-full py-3!"
                  >
                    {copy.bookAppointmentLabel}
                  </Button>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.12 }}
              className="w-full flex-1 rounded-[24px] bg-[var(--color-violet-98)] p-5 sm:p-6 lg:p-8"
            >
              <h2 className="mb-5 font-poppins font-medium text-[clamp(22px,5vw,30px)] leading-[1.2] tracking-[-1px] text-[var(--color-haiti)]">
                {copy.formLabel}
              </h2>
              <LeadEnquiryForm
                idPrefix={`contact-${locale}`}
                submitLabel={{ en: "Submit", nl: "Versturen" }}
              />
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
