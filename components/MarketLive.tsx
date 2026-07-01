"use client";

import { useEffect, useRef } from "react";

const marketOverviewConfig = {
  colorTheme: "dark",
  dateRange: "12M",
  showChart: true,
  locale: "en",
  width: "100%",
  height: 400,
  showSymbolLogo: true,
  showFloatingTooltip: true,
  tabs: [
    {
      title: "Indian Indices",
      originalTitle: "Indices",
      symbols: [
        { s: "BSE:SENSEX", d: "BSE SENSEX" },
        { s: "NSE:NIFTY", d: "NIFTY 50" },
        { s: "NSE:BANKNIFTY", d: "NIFTY BANK" },
      ],
    },
    {
      title: "Currencies",
      originalTitle: "Forex",
      symbols: [{ s: "FX_IDC:USDINR", d: "USD / INR" }],
    },
  ],
};

const tickerTapeConfig = {
  colorTheme: "dark",
  displayMode: "adaptive",
  locale: "en",
  isTransparent: true,
  symbols: [
    { proName: "BSE:SENSEX", title: "SENSEX" },
    { proName: "NSE:NIFTY", title: "NIFTY 50" },
    { proName: "NSE:BANKNIFTY", title: "BANK NIFTY" },
    { proName: "NSE:FINNIFTY", title: "FINNIFTY" },
    { proName: "FX_IDC:USDINR", title: "USD/INR" },
    { proName: "NSE:RELIANCE", title: "Reliance" },
    { proName: "TVC:GOLD", title: "Gold" },
    { proName: "TVC:SILVER", title: "Silver" },
    { proName: "TVC:USOIL", title: "Crude Oil" },
    { proName: "NSE:HDFCBANK", title: "HDFC Bank" },
    { proName: "NSE:TCS", title: "TCS" },
  ],
};

function TradingViewWidget({
  scriptUrl,
  config,
  className,
}: {
  scriptUrl: string;
  config: Record<string, unknown>;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    container.replaceChildren();

    const widget = document.createElement("div");
    widget.className = "tradingview-widget-container__widget h-full w-full";

    const script = document.createElement("script");
    script.src = scriptUrl;
    script.type = "text/javascript";
    script.async = true;
    script.textContent = JSON.stringify(config);

    container.append(widget, script);

    return () => {
      container.replaceChildren();
    };
  }, [config, scriptUrl]);

  return (
    <div
      ref={containerRef}
      className={`tradingview-widget-container ${className ?? ""}`}
    />
  );
}

export default function MarketLive() {
  // Convert current time to Indian Standard Time
  const now = new Date();

  const indiaTime = new Date(
    now.toLocaleString("en-US", {
      timeZone: "Asia/Kolkata",
    }),
  );

  const day = indiaTime.getDay(); // Sunday = 0
  const hour = indiaTime.getHours();
  const minute = indiaTime.getMinutes();

  const currentMinutes = hour * 60 + minute;

  const isWeekday = day >= 1 && day <= 5;

  const isPreOpen =
    isWeekday && currentMinutes >= 9 * 60 && currentMinutes < 9 * 60 + 15;

  const isRegular =
    isWeekday &&
    currentMinutes >= 9 * 60 + 15 &&
    currentMinutes <= 15 * 60 + 30;

  const isPostClose =
    isWeekday && currentMinutes > 15 * 60 + 30 && currentMinutes <= 16 * 60;

  const marketOpen = isRegular;

  const statusColor = marketOpen ? "#34d399" : "#fb7185";
  const statusBackground = marketOpen
    ? "rgba(16, 185, 129, 0.2)"
    : "rgba(244, 63, 94, 0.22)";
  const statusBorder = marketOpen
    ? "rgba(52, 211, 153, 0.28)"
    : "rgba(251, 113, 133, 0.3)";

  const formattedTime = indiaTime.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="space-y-6">
      {/* Market Status */}
      <div className="flex flex-col gap-4 rounded-[28px] border border-white/10 bg-slate-950/50 p-5 backdrop-blur-2xl md:flex-row md:items-center md:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <span
              className="relative flex h-3 w-3"
            >
              <span
                className={`absolute inline-flex h-full w-full rounded-full opacity-75 ${
                  marketOpen ? "animate-ping" : ""
                }`}
                style={{ backgroundColor: statusColor }}
              ></span>

              <span
                className="relative inline-flex h-3 w-3 rounded-full"
                style={{
                  backgroundColor: statusColor,
                  boxShadow: `0 0 12px ${statusColor}`,
                }}
              ></span>
            </span>

            <h2 className="text-xl font-semibold text-white">
              Indian Market Overview
            </h2>

            <span
              className="rounded-full border px-3 py-1 text-xs font-semibold"
              style={{
                color: statusColor,
                backgroundColor: statusBackground,
                borderColor: statusBorder,
                boxShadow: `0 0 18px ${statusBackground}`,
              }}
            >
              {marketOpen ? "LIVE" : "CLOSED"}
            </span>
          </div>

          <p className="mt-2 text-sm text-slate-400">
            Live overview of Indian indices and currency movement.
          </p>
        </div>

        <div className="ml-auto flex flex-col items-end text-right">
          <p className="text-sm text-slate-400">Market Status</p>

          <p
            className="flex items-center justify-end gap-1.5 text-lg font-semibold"
            style={{ color: statusColor }}
          >
            <span
              className="h-2 w-2 rounded-full"
              style={{
                backgroundColor: statusColor,
                boxShadow: `0 0 8px ${statusColor}`,
              }}
            />
            {marketOpen ? "Open" : "Closed"}
          </p>

          <p className="text-xs text-slate-500">{formattedTime} IST</p>

          <div className="mt-3 grid grid-cols-1 gap-2 text-xs text-slate-400 md:grid-cols-3">
            <div
              className={`rounded-xl border px-3 py-2 transition-all ${
                isPreOpen
                  ? "border-yellow-500/30 bg-yellow-500/10"
                  : "border-white/10 bg-white/5"
              }`}
            >
              <p
                className={`font-semibold ${
                  isPreOpen ? "text-yellow-300" : "text-white"
                }`}
              >
                Pre-open
              </p>

              <p>09:00 AM &ndash; 09:15 AM</p>
            </div>
            <div
              className={`rounded-xl border px-3 py-2 transition-all ${
                isRegular
                  ? "border-emerald-500/30 bg-emerald-500/10"
                  : "border-white/10 bg-white/5"
              }`}
            >
              <p
                className={`font-semibold ${
                  isRegular ? "text-emerald-300" : "text-white"
                }`}
              >
                Regular Market
              </p>

              <p>09:15 AM &ndash; 03:30 PM</p>
            </div>

            <div
              className={`rounded-xl border px-3 py-2 transition-all ${
                isPostClose
                  ? "border-blue-500/30 bg-blue-500/10"
                  : "border-white/10 bg-white/5"
              }`}
            >
              <p
                className={`font-semibold ${
                  isPostClose ? "text-blue-300" : "text-white"
                }`}
              >
                Post Close
              </p>

              <p>03:30 PM &ndash; 04:00 PM</p>
            </div>
          </div>
        </div>
      </div>
      <p className="mt-3 text-[11px] text-slate-500">
        Market timings are based on NSE &amp; BSE regular trading hours. Exchange
        holidays and special trading sessions may vary.
      </p>

      {/* TradingView Widget */}
      <div className="overflow-hidden rounded-[28px] border border-white/10 bg-slate-950/50 p-2 shadow-[0_18px_60px_rgba(2,6,23,0.25)] backdrop-blur-2xl">
        <TradingViewWidget
          scriptUrl="https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js"
          config={marketOverviewConfig}
          className="h-[400px]"
        />
      </div>

      {/* Ticker */}
      <div className="min-h-[72px] overflow-hidden rounded-full border border-white/10 bg-slate-950/50 backdrop-blur-xl">
        <TradingViewWidget
          scriptUrl="https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js"
          config={tickerTapeConfig}
          className="min-h-[72px]"
        />
      </div>
    </div>
  );
}
