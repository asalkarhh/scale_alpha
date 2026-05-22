"use client";

import { startTransition, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { RotateCcw } from "lucide-react";

import {
  calculatorDefinitions,
  calculatorQuickFacts,
  formatCompactCurrency,
  formatFieldValue,
} from "@/lib/calculators";

type CalculatorSuiteProps = {
  compact?: boolean;
};

const initialState = Object.fromEntries(
  calculatorDefinitions.map((definition) => [definition.key, definition.defaultValues]),
) as Record<string, Record<string, number>>;

export function CalculatorSuite({ compact = false }: CalculatorSuiteProps) {
  const [activeKey, setActiveKey] = useState(calculatorDefinitions[0].key);
  const [valuesByCalculator, setValuesByCalculator] =
    useState<Record<string, Record<string, number>>>(initialState);
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  const definition =
    calculatorDefinitions.find((item) => item.key === activeKey) ??
    calculatorDefinitions[0];
  const values = valuesByCalculator[definition.key];
  const result = definition.compute(values);
  const comparisonKey = Object.keys(result.chartData[0] ?? {}).find(
    (item) => item !== "period" && item !== result.chartKey,
  );

  function updateField(fieldKey: string, nextValue: number) {
    setValuesByCalculator((current) => ({
      ...current,
      [definition.key]: {
        ...current[definition.key],
        [fieldKey]: nextValue,
      },
    }));
  }

  return (
    <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
      <div className="overflow-hidden rounded-[32px] border border-white/10 bg-slate-950 p-5 text-white shadow-[0_28px_100px_rgba(2,6,23,0.38)] sm:p-6">
        <div className="flex flex-wrap gap-2">
          {calculatorDefinitions.map((item) => (
            <button
              key={item.key}
              type="button"
              onClick={() =>
                startTransition(() => {
                  setActiveKey(item.key);
                })
              }
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                item.key === definition.key
                  ? "border-sky-300/45 bg-sky-400/12 text-white shadow-[0_12px_30px_rgba(53,196,255,0.15)]"
                  : "border-white/10 bg-white/5 text-slate-300 hover:border-white/18 hover:text-white"
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        <div className="mt-6">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-sky-100/70">
                Interactive planning tool
              </p>
              <h3 className="mt-3 text-2xl font-semibold">{definition.title}</h3>
              <p className="mt-2 max-w-xl text-sm leading-7 text-slate-300">
                {definition.summary}
              </p>
            </div>
            <button
              type="button"
              onClick={() =>
                setValuesByCalculator((current) => ({
                  ...current,
                  [definition.key]: definition.defaultValues,
                }))
              }
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-100 transition-colors hover:bg-white/10"
            >
              <RotateCcw className="h-4 w-4" />
              Reset
            </button>
          </div>

          <div className="mt-6 space-y-6">
            {definition.fields.map((field) => (
              <div key={field.key}>
                <div className="mb-3 flex items-center justify-between gap-4">
                  <label
                    htmlFor={`${definition.key}-${field.key}`}
                    className="text-sm font-medium text-slate-200"
                  >
                    {field.label}
                  </label>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-semibold text-white">
                    {formatFieldValue(
                      values[field.key],
                      field.prefix,
                      field.suffix,
                    )}
                  </span>
                </div>
                <input
                  id={`${definition.key}-${field.key}`}
                  type="range"
                  min={field.min}
                  max={field.max}
                  step={field.step}
                  value={values[field.key]}
                  onChange={(event) =>
                    updateField(field.key, Number(event.target.value))
                  }
                  className="fin-slider"
                />
                <div className="mt-2 flex justify-between text-xs text-slate-500">
                  <span>{formatFieldValue(field.min, field.prefix, field.suffix)}</span>
                  <span>{formatFieldValue(field.max, field.prefix, field.suffix)}</span>
                </div>
              </div>
            ))}
          </div>

          {!compact ? (
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {calculatorQuickFacts.map((fact) => (
                <div
                  key={fact}
                  className="rounded-[20px] border border-white/10 bg-white/5 p-4 text-sm leading-7 text-slate-300"
                >
                  {fact}
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>

      <div className="rounded-[32px] border border-slate-200/70 bg-white p-5 shadow-[0_18px_60px_rgba(15,23,42,0.08)] sm:p-6">
        <div className="grid gap-4 md:grid-cols-3">
          {result.highlights.map((highlight) => (
            <div
              key={highlight.label}
              className="rounded-[24px] border border-slate-200/70 bg-slate-50/80 p-5"
            >
              <p className="text-xs uppercase tracking-[0.22em] text-slate-500">
                {highlight.label}
              </p>
              <p className="mt-3 text-2xl font-semibold text-slate-950">
                {highlight.value}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-[28px] border border-slate-100 bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_100%)] p-4 sm:p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-slate-500">
                Visual projection
              </p>
              <h4 className="mt-2 text-xl font-semibold text-slate-950">
                {result.chartLabel}
              </h4>
            </div>
            <div className="rounded-full border border-sky-100 bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-700">
              {formatCompactCurrency(
                Number(
                  result.chartData[result.chartData.length - 1]?.[result.chartKey] ?? 0,
                ),
              )}
            </div>
          </div>

          <div className="mt-6 h-[320px] min-w-0">
            {mounted ? (
              <ResponsiveContainer width="100%" height="100%" minWidth={0}>
                {definition.key === "insurance" ? (
                  <BarChart data={result.chartData}>
                    <CartesianGrid stroke="#e2e8f0" strokeDasharray="3 3" />
                    <XAxis
                      dataKey="period"
                      tick={{ fill: "#64748b", fontSize: 12 }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <YAxis
                      tickFormatter={(value: number) => formatCompactCurrency(value)}
                      tick={{ fill: "#64748b", fontSize: 12 }}
                      axisLine={false}
                      tickLine={false}
                      width={72}
                    />
                    <Tooltip
                      formatter={(value) => [
                        formatCompactCurrency(Number(value ?? 0)),
                        "Value",
                      ]}
                      contentStyle={{
                        borderRadius: 18,
                        borderColor: "#dbeafe",
                        boxShadow: "0 20px 50px rgba(15, 23, 42, 0.12)",
                      }}
                    />
                    <Bar
                      dataKey={result.chartKey}
                      fill="url(#barGradient)"
                      radius={[12, 12, 0, 0]}
                    />
                    <defs>
                      <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#1f5eff" />
                        <stop offset="100%" stopColor="#4dd4a3" />
                      </linearGradient>
                    </defs>
                  </BarChart>
                ) : (
                  <AreaChart data={result.chartData}>
                    <defs>
                      <linearGradient id="areaPrimary" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#1f5eff" stopOpacity={0.45} />
                        <stop offset="100%" stopColor="#1f5eff" stopOpacity={0.02} />
                      </linearGradient>
                      <linearGradient id="lineAccent" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#4dd4a3" stopOpacity={0.35} />
                        <stop offset="100%" stopColor="#4dd4a3" stopOpacity={0.02} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid stroke="#e2e8f0" strokeDasharray="3 3" />
                    <XAxis
                      dataKey="period"
                      tick={{ fill: "#64748b", fontSize: 12 }}
                      axisLine={false}
                      tickLine={false}
                      minTickGap={16}
                    />
                    <YAxis
                      tickFormatter={(value: number) => formatCompactCurrency(value)}
                      tick={{ fill: "#64748b", fontSize: 12 }}
                      axisLine={false}
                      tickLine={false}
                      width={74}
                    />
                    <Tooltip
                      formatter={(value, name) => [
                        formatCompactCurrency(Number(value ?? 0)),
                        String(name),
                      ]}
                      contentStyle={{
                        borderRadius: 18,
                        borderColor: "#dbeafe",
                        boxShadow: "0 20px 50px rgba(15, 23, 42, 0.12)",
                      }}
                    />
                    {comparisonKey ? (
                      <Area
                        dataKey={comparisonKey}
                        stroke="#4dd4a3"
                        fill="url(#lineAccent)"
                        strokeWidth={2}
                      />
                    ) : null}
                    <Area
                      dataKey={result.chartKey}
                      stroke="#1f5eff"
                      fill="url(#areaPrimary)"
                      strokeWidth={3}
                    />
                    {comparisonKey ? (
                      <Line
                        dataKey={comparisonKey}
                        stroke="#4dd4a3"
                        strokeWidth={2}
                        dot={false}
                      />
                    ) : null}
                  </AreaChart>
                )}
              </ResponsiveContainer>
            ) : (
              <div className="flex h-full items-end gap-3 rounded-[24px] bg-[linear-gradient(180deg,#eff6ff_0%,#ffffff_100%)] p-6">
                {[44, 78, 60, 92, 120, 160, 132, 188].map((height) => (
                  <span
                    key={height}
                    className="flex-1 rounded-full bg-[linear-gradient(180deg,rgba(31,94,255,0.35)_0%,rgba(77,212,163,0.2)_100%)]"
                    style={{ height }}
                  />
                ))}
              </div>
            )}
          </div>
          <p className="mt-4 text-sm leading-7 text-slate-600">{result.footnote}</p>
        </div>

        <div className="mt-6 flex flex-col gap-3 rounded-[28px] border border-slate-200/70 bg-slate-50/80 p-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-slate-950">
              Want a personalized recommendation around this number?
            </p>
            <p className="mt-1 text-sm text-slate-600">
              We can turn this estimate into a real advisory action plan with
              allocation, risk, and implementation guidance.
            </p>
          </div>
          <Link
            href="/#portfolio-review"
            className="inline-flex items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
          >
            Get a review
          </Link>
        </div>
      </div>
    </div>
  );
}
