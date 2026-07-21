"use client";

import { useState } from "react";
import { ShieldCheck, Sparkles } from "lucide-react";

import { ScrollReveal } from "@/components/scroll-reveal";

const insuranceOptions = [
  { label: "No cover", value: 0 },
  { label: "Basic cover", value: 50 },
  { label: "Adequate cover", value: 90 },
];

const goalOptions = [
  { label: "Not defined", value: 35 },
  { label: "Partially defined", value: 65 },
  { label: "Clearly defined", value: 95 },
];

export function FinancialHealthScore() {
  const [inputs, setInputs] = useState({
    age: 32,
    salary: 1800000,
    savings: 650000,
    investments: 900000,
    goals: 65,
    insuranceStatus: 50,
  });

  const monthlyIncome = inputs.salary / 12;
  const emergencyMonths = inputs.savings / Math.max(monthlyIncome, 1);
  const savingsScore = Math.min(100, (emergencyMonths / 6) * 100);
  const investmentScore = Math.min(100, (inputs.investments / inputs.salary) * 60);
  const insuranceScore = inputs.insuranceStatus;
  const goalsScore = inputs.goals;
  const ageBonus = inputs.age <= 35 ? 82 : inputs.age <= 45 ? 74 : 68;
  const score = Math.round(
    savingsScore * 0.28 +
      investmentScore * 0.22 +
      insuranceScore * 0.2 +
      goalsScore * 0.2 +
      ageBonus * 0.1,
  );

  const recommendations = [
    savingsScore < 75
      ? "Increase your emergency reserve toward at least 6 months of expenses."
      : "Your emergency reserve is in a healthy range for stability.",
    insuranceScore < 75
      ? "Review term and health cover so goals are protected from disruption."
      : "Protection planning looks reasonably aligned to the current profile.",
    investmentScore < 70
      ? "Raise long-term investment intensity so wealth creation keeps pace with income."
      : "Investment participation is supporting long-term growth well.",
  ];

  return (
    <div className="grid gap-6 xl:grid-cols-[0.92fr_1.08fr]">
      <ScrollReveal className="rounded-[32px] border border-white/10 bg-slate-950 p-6 text-white shadow-[0_30px_100px_rgba(2,6,23,0.42)]">
        <div className="flex items-center gap-3">
          <span className="rounded-2xl bg-white/8 p-3 text-sky-200">
            <ShieldCheck className="h-6 w-6" />
          </span>
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-sky-100/70">
              Interactive checkup
            </p>
            <h3 className="mt-2 text-2xl font-semibold">Financial Health Score</h3>
          </div>
        </div>

        <div className="mt-6 space-y-5">
          {[
            {
              key: "age",
              label: "Age",
              min: 24,
              max: 60,
              step: 1,
              value: inputs.age,
              suffix: " yrs",
            },
            {
              key: "salary",
              label: "Annual salary",
              min: 400000,
              max: 10000000,
              step: 100000,
              value: inputs.salary,
              prefix: "₹",
            },
            {
              key: "savings",
              label: "Savings",
              min: 0,
              max: 5000000,
              step: 50000,
              value: inputs.savings,
              prefix: "₹",
            },
            {
              key: "investments",
              label: "Investments",
              min: 0,
              max: 10000000,
              step: 100000,
              value: inputs.investments,
              prefix: "₹",
            },
          ].map((field) => (
            <div key={field.key}>
              <div className="mb-3 flex items-center justify-between gap-4">
                <label
                  htmlFor={field.key}
                  className="text-sm font-medium text-slate-200"
                >
                  {field.label}
                </label>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-semibold text-white">
                  {field.prefix
                    ? `₹${Number(field.value).toLocaleString("en-IN")}`
                    : `${field.value}${field.suffix ?? ""}`}
                </span>
              </div>
              <input
                id={field.key}
                type="range"
                min={field.min}
                max={field.max}
                step={field.step}
                value={field.value}
                onChange={(event) =>
                  setInputs((current) => ({
                    ...current,
                    [field.key]: Number(event.target.value),
                  }))
                }
                className="fin-slider"
              />
            </div>
          ))}

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="space-y-2 text-sm font-medium text-slate-200">
              <span>Goals clarity</span>
              <select
                className="w-full rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-sm text-white outline-none"
                value={inputs.goals}
                onChange={(event) =>
                  setInputs((current) => ({
                    ...current,
                    goals: Number(event.target.value),
                  }))
                }
              >
                {goalOptions.map((option) => (
                  <option key={option.label} value={option.value} className="text-slate-900">
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
            <label className="space-y-2 text-sm font-medium text-slate-200">
              <span>Insurance status</span>
              <select
                className="w-full rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-sm text-white outline-none"
                value={inputs.insuranceStatus}
                onChange={(event) =>
                  setInputs((current) => ({
                    ...current,
                    insuranceStatus: Number(event.target.value),
                  }))
                }
              >
                {insuranceOptions.map((option) => (
                  <option key={option.label} value={option.value} className="text-slate-900">
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal className="rounded-[32px] border border-slate-200/70 bg-white p-6 shadow-[0_18px_60px_rgba(15,23,42,0.08)]">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="flex flex-col items-center justify-center rounded-[28px] border border-slate-200/70 bg-slate-50/80 p-6 text-center">
            <div
              className="score-ring flex h-48 w-48 items-center justify-center rounded-full"
              style={{
                background: `conic-gradient(#1f5eff 0 ${score * 3.6}deg, #e2e8f0 ${score * 3.6}deg 360deg)`,
              }}
            >
              <div className="flex h-36 w-36 flex-col items-center justify-center rounded-full bg-white shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
                <p className="text-xs uppercase tracking-[0.22em] text-slate-500">
                  Score
                </p>
                <p className="mt-2 text-5xl font-semibold text-slate-950">{score}</p>
              </div>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-7 text-slate-600">
              A directional signal based on reserves, investing intensity, goal clarity,
              and insurance readiness.
            </p>
            <p className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-xs leading-6 text-amber-900">
              Results are illustrative and for educational purposes only. They do
              not guarantee outcomes or constitute personalized advice.
            </p>
          </div>

          <div>
            <div className="rounded-[28px] border border-slate-200/70 bg-[linear-gradient(135deg,rgba(31,94,255,0.06)_0%,rgba(77,212,163,0.1)_100%)] p-5">
              <div className="flex items-center gap-3">
                <Sparkles className="h-5 w-5 text-sky-700" />
                <p className="text-lg font-semibold text-slate-950">
                  Personalized recommendations
                </p>
              </div>
              <div className="mt-5 space-y-3">
                {recommendations.map((recommendation) => (
                  <div
                    key={recommendation}
                    className="rounded-2xl border border-white/70 bg-white/85 px-4 py-4 text-sm leading-7 text-slate-700 shadow-[0_12px_30px_rgba(15,23,42,0.05)]"
                  >
                    {recommendation}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {[
                {
                  label: "Emergency reserve",
                  value: `${emergencyMonths.toFixed(1)} months`,
                },
                {
                  label: "Investment intensity",
                  value: `${Math.round((inputs.investments / inputs.salary) * 100)}%`,
                },
                {
                  label: "Planning readiness",
                  value: score >= 80 ? "Strong" : score >= 65 ? "Improving" : "Needs work",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-[24px] border border-slate-200/70 bg-white p-5 shadow-[0_12px_30px_rgba(15,23,42,0.06)]"
                >
                  <p className="text-xs uppercase tracking-[0.22em] text-slate-500">
                    {item.label}
                  </p>
                  <p className="mt-3 text-xl font-semibold text-slate-950">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            <a
              href="/contact"
              className="mt-6 inline-flex rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
            >
              Get Personalized Financial Plan
            </a>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}

