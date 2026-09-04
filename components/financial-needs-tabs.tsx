"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Baby,
  CheckCircle2,
  Home,
  MessageSquare,
  Palmtree,
  Sparkles,
  TrendingUp,
} from "lucide-react";

import { financialNeeds } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { QuickConsultationModal } from "@/components/quick-consultation-modal";

const goalIcons: Record<string, typeof Palmtree> = {
  retirement: Palmtree,
  wealth: TrendingUp,
  home: Home,
  child: Baby,
};

export function FinancialNeedsTabs() {
  const [activeTab, setActiveTab] = useState<string>("retirement");
  const [isConsultOpen, setIsConsultOpen] = useState(false);

  const selectedNeed =
    financialNeeds.find((n) => n.id === activeTab) || financialNeeds[0];
  const IconComponent = goalIcons[selectedNeed.id] || Sparkles;

  return (
    <div className="w-full">
      {/* Compact Goal Switcher */}
      <div className="flex flex-col items-center">
        <p className="text-center text-[11px] font-bold uppercase tracking-[0.18em] text-emerald-800">
          Select Your Priority Goal
        </p>
        <div className="mt-2.5 flex w-full max-w-2xl flex-wrap items-center justify-center gap-1 rounded-2xl border border-emerald-100 bg-white/90 p-1.5 shadow-sm backdrop-blur-xl sm:rounded-full">
          {financialNeeds.map((need) => {
            const TabIcon = goalIcons[need.id] || Sparkles;
            const isActive = activeTab === need.id;

            return (
              <button
                key={need.id}
                type="button"
                onClick={() => setActiveTab(need.id)}
                className={cn(
                  "group relative flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all duration-150 sm:rounded-full",
                  isActive
                    ? "bg-emerald-900 text-white shadow-sm"
                    : "text-slate-600 hover:bg-emerald-50 hover:text-emerald-950",
                )}
              >
                <TabIcon
                  className={cn(
                    "h-3.5 w-3.5 transition-transform duration-150 group-hover:scale-110",
                    isActive ? "text-emerald-300" : "text-emerald-700",
                  )}
                />
                <span>{need.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Goal Summary Card */}
      <div className="mt-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedNeed.id}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="rounded-2xl border border-emerald-100 bg-white p-4.5 shadow-sm sm:p-5"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <div className="rounded-lg bg-emerald-50 p-1.5 text-emerald-800 border border-emerald-100">
                    <IconComponent className="h-4 w-4" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                    {selectedNeed.subtitle}
                  </span>
                </div>

                <h3 className="text-base font-bold text-emerald-950 sm:text-xl">
                  {selectedNeed.tagline}
                </h3>

                {/* Pointwise Quick Benefits */}
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 pt-1 text-xs text-slate-700">
                  {selectedNeed.keyBenefits.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-1.5">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-2 sm:flex-col sm:items-end sm:shrink-0">
                <Link
                  href={selectedNeed.ctaHref}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-900 px-4 py-2 text-xs font-bold text-white shadow-sm hover:bg-emerald-800 transition-colors"
                >
                  <span>{selectedNeed.ctaLabel}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <button
                  type="button"
                  onClick={() => setIsConsultOpen(true)}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-800 hover:text-emerald-950 transition-colors"
                >
                  <MessageSquare className="h-3 w-3 text-emerald-600" />
                  <span>Discuss Roadmap</span>
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <QuickConsultationModal
        isOpen={isConsultOpen}
        onClose={() => setIsConsultOpen(false)}
        defaultGoal={selectedNeed.title}
      />
    </div>
  );
}
