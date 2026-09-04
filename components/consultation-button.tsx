"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { ArrowRight, CalendarCheck } from "lucide-react";

const QuickConsultationModal = dynamic(() =>
  import("@/components/quick-consultation-modal").then(
    (module) => module.QuickConsultationModal,
  ),
);

type ConsultationButtonProps = {
  variant: "hero" | "process" | "footer";
};

const variants = {
  hero: {
    label: "Request Consultation",
    className:
      "inline-flex items-center gap-1.5 rounded-full bg-emerald-900 px-4 py-2 text-xs font-bold text-white shadow-sm hover:bg-emerald-800 transition-colors sm:text-sm",
    icon: "calendar",
  },
  process: {
    label: "Get Started",
    className:
      "inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-white px-3.5 py-1.5 text-xs font-bold text-emerald-900 shadow-sm hover:bg-emerald-50 transition-colors shrink-0",
    icon: "arrow",
  },
  footer: {
    label: "Request Consultation",
    className:
      "inline-flex items-center justify-center gap-1.5 rounded-full bg-white px-5 py-2.5 text-xs sm:text-sm font-bold text-emerald-950 shadow-sm hover:bg-emerald-100 transition-colors",
    icon: "calendar",
  },
} as const;

export function ConsultationButton({ variant }: ConsultationButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const config = variants[variant];

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className={config.className}
      >
        {config.icon === "calendar" && <CalendarCheck className="h-4 w-4" />}
        <span>{config.label}</span>
        {config.icon === "arrow" && <ArrowRight className="h-3 w-3" />}
      </button>
      {isOpen && (
        <QuickConsultationModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
