"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ChartColumnIncreasing,
  CircleCheckBig,
  ShieldCheck,
  WalletCards,
} from "lucide-react";

export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[620px]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden rounded-[32px] border border-white/12 bg-[linear-gradient(160deg,rgba(7,19,39,0.95)_0%,rgba(12,35,70,0.88)_55%,rgba(7,15,29,0.98)_100%)] p-4 shadow-[0_35px_120px_rgba(2,6,23,0.55)] backdrop-blur-2xl"
      >
        <div className="absolute inset-x-10 top-0 h-40 rounded-full bg-sky-400/15 blur-3xl" />
        <div className="absolute -bottom-16 right-4 h-40 w-40 rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="relative grid gap-4 lg:grid-cols-[1.25fr_0.85fr]">
          <div className="rounded-[28px] border border-white/10 bg-white/6 p-5 backdrop-blur-xl">
            <div className="mb-6 flex items-start justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.26em] text-sky-100/70">
                  Planning dashboard
                </p>
                <h3 className="mt-3 text-xl font-semibold text-white">
                  Goal-linked growth plan
                </h3>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-200">
                <CircleCheckBig className="h-3.5 w-3.5" />
                Verified roadmap
              </span>
            </div>
            <div className="rounded-[24px] border border-white/8 bg-slate-950/55 p-4">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-400">
                    Net worth projection
                  </p>
                  <p className="mt-2 text-3xl font-semibold text-white">
                    ₹3.84 Cr
                  </p>
                </div>
                <div className="rounded-2xl border border-white/8 bg-white/5 p-3 text-emerald-300">
                  <ChartColumnIncreasing className="h-7 w-7" />
                </div>
              </div>
              <div className="grid grid-cols-12 items-end gap-2">
                {[32, 40, 44, 51, 58, 69, 75, 82, 91, 104, 112, 126].map(
                  (height, index) => (
                    <motion.span
                      key={height}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height, opacity: 1 }}
                      transition={{
                        delay: 0.15 + index * 0.06,
                        duration: 0.7,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="rounded-full bg-[linear-gradient(180deg,rgba(77,212,163,0.95)_0%,rgba(31,94,255,0.65)_100%)]"
                    />
                  ),
                )}
              </div>
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {[
                {
                  label: "Equity allocation",
                  value: "68%",
                  icon: ArrowUpRight,
                },
                { label: "Protection cover", value: "Adequate", icon: ShieldCheck },
                { label: "Liquidity runway", value: "9 months", icon: WalletCards },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-[20px] border border-white/8 bg-white/5 p-4"
                >
                  <item.icon className="h-4 w-4 text-sky-300" />
                  <p className="mt-3 text-sm text-slate-300">{item.label}</p>
                  <p className="mt-1 text-base font-semibold text-white">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-4">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="rounded-[28px] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0.04)_100%)] p-5 backdrop-blur-xl"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-sky-100/70">
                Monthly momentum
              </p>
              <p className="mt-3 text-3xl font-semibold text-white">+14.6%</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Planning-led allocation with disciplined SIPs, tax-aware rebalancing,
                and downside-conscious planning.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.35, duration: 0.8 }}
              className="rounded-[28px] border border-white/12 bg-white/6 p-5 backdrop-blur-xl"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-sky-100/70">
                Planning pillars
              </p>
              <div className="mt-5 space-y-3">
                {[
                  "Mutual fund allocation",
                  "Protection gap review",
                  "Goal timeline mapping",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center justify-between rounded-2xl border border-white/8 bg-slate-950/45 px-4 py-3 text-sm text-slate-200"
                  >
                    <span>{item}</span>
                    <ArrowUpRight className="h-4 w-4 text-emerald-300" />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

