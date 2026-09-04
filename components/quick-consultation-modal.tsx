"use client";

import React, { useState } from "react";
import { CheckCircle2, MessageSquare, PhoneCall, ShieldCheck } from "lucide-react";
import { DialogModal } from "@/components/ui/dialog-modal";
import { siteConfig } from "@/lib/site-data";

type QuickConsultationModalProps = {
  isOpen: boolean;
  onClose: () => void;
  defaultGoal?: string;
};

export function QuickConsultationModal({
  isOpen,
  onClose,
  defaultGoal = "Mutual Funds & SIP",
}: QuickConsultationModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [goal, setGoal] = useState(defaultGoal);
  const [message, setMessage] = useState("");

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi Kaushal, I would like to schedule a consultation regarding ${goal}.${
      name ? ` My name is ${name}.` : ""
    }${phone ? ` Phone: ${phone}.` : ""}${message ? ` Note: ${message}` : ""}`;
    const url = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
    onClose();
  };

  return (
    <DialogModal
      isOpen={isOpen}
      onClose={onClose}
      title="Request a Financial Consultation"
      subtitle="AMFI-Registered MFD • ARN-269246"
      maxWidth="lg"
    >
      <form onSubmit={handleWhatsAppSubmit} className="space-y-4 text-left">
        <p className="text-xs sm:text-sm text-slate-600">
          Connect directly with <strong>Kaushal Balte</strong> to discuss your goals, asset allocation, or portfolio review.
        </p>

        <div className="space-y-3">
          <div>
            <label className="block text-xs font-semibold text-slate-700">
              Your Name
            </label>
            <input
              type="text"
              placeholder="e.g. Rahul Sharma"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 w-full rounded-xl border border-slate-200 px-3.5 py-2 text-sm focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700">
              Mobile Number / WhatsApp
            </label>
            <input
              type="tel"
              placeholder="e.g. 9876543210"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="mt-1 w-full rounded-xl border border-slate-200 px-3.5 py-2 text-sm focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700">
              Primary Financial Goal
            </label>
            <select
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              className="mt-1 w-full rounded-xl border border-slate-200 px-3.5 py-2 text-sm focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600 bg-white"
            >
              <option value="Mutual Funds & SIP">Mutual Funds &amp; SIP Planning</option>
              <option value="Retirement Planning">Retirement Corpus Planning</option>
              <option value="Child Education / Marriage">Child Education / Long-term Goal</option>
              <option value="Existing Portfolio Review">Existing Portfolio Review &amp; Health Check</option>
              <option value="Insurance Cover Review">Term &amp; Health Insurance Planning</option>
              <option value="Tax-Saving (ELSS/NPS)">Tax-Saving Strategies (ELSS / NPS)</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700">
              Any specific queries? (Optional)
            </label>
            <textarea
              rows={2}
              placeholder="e.g., Looking to start a monthly SIP or review current mutual funds..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mt-1 w-full rounded-xl border border-slate-200 px-3.5 py-2 text-sm focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600"
            />
          </div>
        </div>

        <div className="rounded-xl bg-emerald-50/70 p-3 border border-emerald-100 flex items-start gap-2.5">
          <ShieldCheck className="h-4 w-4 text-emerald-700 shrink-0 mt-0.5" />
          <p className="text-[11px] text-slate-600 leading-tight">
            <strong>Confidential &amp; Unbiased:</strong> We do not provide false guarantees. Recommendations are grounded in objective risk profiling and asset allocation.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-2 pt-2">
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 rounded-xl bg-emerald-900 px-4 py-2.5 text-xs sm:text-sm font-bold text-white shadow-sm hover:bg-emerald-800 transition-colors"
          >
            <MessageSquare className="h-4 w-4" />
            <span>Connect on WhatsApp</span>
          </button>
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto rounded-xl border border-slate-200 px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-600 hover:bg-slate-50 transition-colors"
          >
            Cancel
          </button>
        </div>
      </form>
    </DialogModal>
  );
}
