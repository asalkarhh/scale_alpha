"use client";

import { useEffect, useEffectEvent, useState } from "react";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

import { marketQuotes } from "@/lib/site-data";

type Quote = (typeof marketQuotes)[number];

function formatMarketValue(quote: Quote) {
  if (quote.symbol === "USDINR") {
    return quote.price.toFixed(2);
  }

  if (quote.unit === "₹") {
    return `₹${Math.round(quote.price).toLocaleString("en-IN")}`;
  }

  return quote.price.toLocaleString("en-IN", { maximumFractionDigits: 1 });
}

export function MarketLive() {
  const [quotes, setQuotes] = useState(marketQuotes);

  const tickQuotes = useEffectEvent(() => {
    setQuotes((current) =>
      current.map((quote) => {
        const drift = quote.symbol === "USDINR" ? 0.03 : quote.price * 0.00018;
        const direction = Math.random() > 0.45 ? 1 : -1;
        const nextPrice = quote.price + drift * direction;
        const nextChange = quote.change + (Math.random() * 0.12 - 0.05);

        return {
          ...quote,
          price: Number(nextPrice.toFixed(quote.symbol === "USDINR" ? 2 : 1)),
          change: Number(nextChange.toFixed(2)),
        };
      }),
    );
  });

  useEffect(() => {
    const interval = window.setInterval(() => {
      tickQuotes();
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

  const tickerItems = quotes.flatMap((quote) => [
    `${quote.label} ${formatMarketValue(quote)}`,
    `${quote.change >= 0 ? "+" : ""}${quote.change.toFixed(2)}%`,
  ]);

  return (
    <div className="space-y-6">
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {quotes.map((quote) => {
          const positive = quote.change >= 0;
          return (
            <div
              key={quote.symbol}
              className="rounded-[28px] border border-white/10 bg-white/6 p-5 text-white shadow-[0_18px_60px_rgba(2,6,23,0.25)] backdrop-blur-2xl"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-sky-100/70">
                    {quote.symbol}
                  </p>
                  <h3 className="mt-3 text-lg font-semibold">{quote.label}</h3>
                </div>
                <span
                  className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold ${
                    positive
                      ? "bg-emerald-400/12 text-emerald-200"
                      : "bg-rose-400/12 text-rose-200"
                  }`}
                >
                  {positive ? (
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  ) : (
                    <ArrowDownRight className="h-3.5 w-3.5" />
                  )}
                  {quote.change >= 0 ? "+" : ""}
                  {quote.change.toFixed(2)}%
                </span>
              </div>
              <p className="mt-8 text-3xl font-semibold">{formatMarketValue(quote)}</p>
              <p className="mt-2 text-sm text-slate-300">
                Live-style UI preview for future market data API integration.
              </p>
            </div>
          );
        })}
      </div>

      <div className="overflow-hidden rounded-full border border-white/10 bg-white/5 px-0 py-3 backdrop-blur-xl">
        <div className="ticker-track flex min-w-max items-center gap-10 px-6 text-sm font-medium text-slate-200">
          {[...tickerItems, ...tickerItems].map((item, index) => (
            <span key={`${item}-${index}`} className="whitespace-nowrap">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
