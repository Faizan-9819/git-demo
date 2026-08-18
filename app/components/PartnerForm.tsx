"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";
import { useLanguage } from "../i18n/LanguageProvider";
import PartnerNetworkForm from "./PartnerNetworkForm";
import { lenisStart, lenisStop } from "./LenisProvider";

interface PartnerFormProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

export default function PartnerForm({ isOpen, onClose, title }: PartnerFormProps) {
  const { t } = useLanguage();
  const heading = title ?? t({ en: "Become a Partner", nl: "Word een partner" });

  useEffect(() => {
    if (!isOpen) return;

    lenisStop();
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
      lenisStart();
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            key="partner-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-[var(--color-haiti)]/40 backdrop-blur-sm"
          />

          <div
            key="partner-modal"
            className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
              className="relative w-full max-w-[640px] bg-white lg:rounded-3xl shadow-2xl overflow-hidden pointer-events-auto flex flex-col max-h-screen lg:max-h-[95vh]"
            >
              <div className="flex w-full justify-between items-center px-6 lg:px-10 pt-6 lg:pt-6 pb-4 bg-white sticky top-0 z-10">
                <h2 className="font-poppins font-semibold text-[28px] text-[var(--color-haiti)]">
                  {heading}
                </h2>
                <button
                  type="button"
                  onClick={onClose}
                  aria-label={t({ en: "Close form", nl: "Formulier sluiten" })}
                  className="p-2 hover:bg-slate-100 rounded-full transition-colors text-[var(--color-dolphin)] cursor-pointer"
                >
                  <X size={24} />
                </button>
              </div>

              <div
                className="overflow-y-auto px-6 lg:px-10 pb-24 lg:pb-6 custom-scrollbar"
                data-lenis-prevent
              >
                <PartnerNetworkForm onClose={onClose} />
              </div>
            </motion.div>
          </div>

          <style jsx global>{`
            .custom-scrollbar::-webkit-scrollbar {
              width: 6px;
            }
            .custom-scrollbar::-webkit-scrollbar-track {
              background: transparent;
            }
            .custom-scrollbar::-webkit-scrollbar-thumb {
              background: linear-gradient(180deg, #5b219f 0%, #922698 100%);
              border-radius: 999px;
            }
            .custom-scrollbar::-webkit-scrollbar-thumb:hover {
              background: linear-gradient(180deg, #7c3aed 0%, #a21caf 100%);
            }
            .custom-scrollbar {
              scrollbar-width: thin;
              scrollbar-color: #7c2ba0 transparent;
            }
          `}</style>
        </>
      )}
    </AnimatePresence>
  );
}
