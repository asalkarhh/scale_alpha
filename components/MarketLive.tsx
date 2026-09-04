"use client";

import React, { useEffect, useRef, useState, useMemo, useCallback } from "react";
import { RefreshCw, Clock, LineChart, CandlestickChart } from "lucide-react";

type ChartMode = "overview" | "candlestick";

const overviewTabsConfig = [
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
    title: "Global Markets",
    originalTitle: "Global",
    symbols: [
      { s: "FOREXCOM:SPXUSD", d: "S&P 500" },
      { s: "FOREXCOM:NSXUSD", d: "NASDAQ 100" },
      { s: "FOREXCOM:DJI", d: "Dow Jones" },
    ],
  },
  {
    title: "Currencies",
    originalTitle: "Forex",
    symbols: [
      { s: "FX_IDC:USDINR", d: "USD / INR" },
      { s: "FX_IDC:EURINR", d: "EUR / INR" },
      { s: "FX_IDC:GBPINR", d: "GBP / INR" },
    ],
  },
  {
    title: "Commodities",
    originalTitle: "Commodities",
    symbols: [
      { s: "TVC:GOLD", d: "Gold" },
      { s: "TVC:SILVER", d: "Silver" },
      { s: "TVC:USOIL", d: "Crude Oil" },
    ],
  },
];

const candleQuickSymbols = [
  { symbol: "NSE:NIFTY", label: "NIFTY 50" },
  { symbol: "BSE:SENSEX", label: "SENSEX" },
  { symbol: "NSE:BANKNIFTY", label: "BANK NIFTY" },
  { symbol: "FOREXCOM:SPXUSD", label: "S&P 500 (US)" },
  { symbol: "FOREXCOM:NSXUSD", label: "NASDAQ (US)" },
  { symbol: "TVC:GOLD", label: "Gold (XAU/USD)" },
  { symbol: "FX_IDC:USDINR", label: "USD / INR" },
];

const staticTickerTapeConfig = {
  colorTheme: "dark",
  displayMode: "adaptive",
  locale: "en",
  isTransparent: true,
  symbols: [
    { proName: "BSE:SENSEX", title: "SENSEX" },
    { proName: "NSE:NIFTY", title: "NIFTY 50" },
    { proName: "NSE:BANKNIFTY", title: "BANK NIFTY" },
    { proName: "FOREXCOM:SPXUSD", title: "S&P 500" },
    { proName: "FOREXCOM:NSXUSD", title: "NASDAQ" },
    { proName: "FX_IDC:USDINR", title: "USD/INR" },
    { proName: "TVC:GOLD", title: "Gold" },
    { proName: "TVC:SILVER", title: "Silver" },
    { proName: "TVC:USOIL", title: "Crude Oil" },
  ],
};

// Isolated Live Running Clock (1-second updates)
function LiveClock() {
  const [timeString, setTimeString] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeString(
        now.toLocaleTimeString("en-IN", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        }),
      );
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="inline-flex items-center gap-1.5 rounded-lg border border-emerald-500/25 bg-emerald-950/60 px-2.5 py-1 font-mono text-xs font-semibold text-emerald-300 shadow-sm backdrop-blur-md">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
      </span>
      <Clock className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
      <span suppressHydrationWarning className="tabular-nums tracking-wide">
        {timeString ? `${timeString} IST` : "Live IST"}
      </span>
    </div>
  );
}

// Line Overview Chart Component
function OverviewWidget({
  height = 460,
  refreshKey,
}: {
  height?: number;
  refreshKey?: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  const config = useMemo(
    () => ({
      colorTheme: "dark",
      dateRange: "12M",
      showChart: true,
      locale: "en",
      width: "100%",
      height: height,
      showSymbolLogo: true,
      showFloatingTooltip: true,
      tabs: overviewTabsConfig,
    }),
    [height],
  );

  const configString = useMemo(() => JSON.stringify(config), [config]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.innerHTML = "";

    const widgetDiv = document.createElement("div");
    widgetDiv.className = "tradingview-widget-container__widget";
    widgetDiv.style.height = `${height}px`;
    widgetDiv.style.width = "100%";

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = configString;

    container.appendChild(widgetDiv);
    container.appendChild(script);

    return () => {
      if (container) {
        container.innerHTML = "";
      }
    };
  }, [configString, height, refreshKey]);

  return (
    <div
      ref={containerRef}
      className="tradingview-widget-container w-full"
      style={{ minHeight: `${height}px` }}
    />
  );
}

// Candlestick Chart Component
function CandlestickWidget({
  symbol = "NSE:NIFTY",
  height = 480,
  refreshKey,
}: {
  symbol?: string;
  height?: number;
  refreshKey?: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  const candleConfig = useMemo(
    () => ({
      autosize: false,
      width: "100%",
      height: height,
      symbol: symbol,
      interval: "D",
      timezone: "Asia/Kolkata",
      theme: "dark",
      style: "1", // 1 = Japanese Candlesticks
      locale: "en",
      enable_publishing: false,
      allow_symbol_change: true,
      calendar: false,
      support_host: "https://www.tradingview.com",
      hide_top_toolbar: false,
      hide_side_toolbar: false,
      details: true,
      hotlist: false,
    }),
    [symbol, height],
  );

  const configString = useMemo(() => JSON.stringify(candleConfig), [candleConfig]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.innerHTML = "";

    const widgetDiv = document.createElement("div");
    widgetDiv.className = "tradingview-widget-container__widget";
    widgetDiv.style.height = `${height}px`;
    widgetDiv.style.width = "100%";

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = configString;

    container.appendChild(widgetDiv);
    container.appendChild(script);

    return () => {
      if (container) {
        container.innerHTML = "";
      }
    };
  }, [configString, height, refreshKey]);

  return (
    <div
      ref={containerRef}
      className="tradingview-widget-container w-full"
      style={{ minHeight: `${height}px` }}
    />
  );
}

// Ticker Tape Component
function TickerTapeWidget({
  config,
  height = 72,
  refreshKey,
}: {
  config: Record<string, unknown>;
  height?: number;
  refreshKey?: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const configString = useMemo(() => JSON.stringify(config), [config]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.innerHTML = "";

    const widgetDiv = document.createElement("div");
    widgetDiv.className = "tradingview-widget-container__widget";
    widgetDiv.style.height = `${height}px`;
    widgetDiv.style.width = "100%";

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = configString;

    container.appendChild(widgetDiv);
    container.appendChild(script);

    return () => {
      if (container) {
        container.innerHTML = "";
      }
    };
  }, [configString, height, refreshKey]);

  return (
    <div
      ref={containerRef}
      className="tradingview-widget-container w-full"
      style={{ minHeight: `${height}px` }}
    />
  );
}

export default function MarketLive() {
  const [chartMode, setChartMode] = useState<ChartMode>("overview");
  const [selectedCandleSymbol, setSelectedCandleSymbol] = useState("NSE:NIFTY");
  const [refreshKey, setRefreshKey] = useState(0);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = useCallback(() => {
    setIsRefreshing(true);
    setRefreshKey((prev) => prev + 1);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 600);
  }, []);

  // Compute Indian Market Open/Closed Status
  const marketStatus = useMemo(() => {
    const now = new Date();
    const indiaTime = new Date(
      now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" }),
    );
    const day = indiaTime.getDay();
    const hour = indiaTime.getHours();
    const minute = indiaTime.getMinutes();
    const currentMinutes = hour * 60 + minute;
    const isWeekday = day >= 1 && day <= 5;

    const isRegular =
      isWeekday &&
      currentMinutes >= 9 * 60 + 15 &&
      currentMinutes <= 15 * 60 + 30;

    return {
      isOpen: isRegular,
    };
  }, [refreshKey]);

  const statusColor = marketStatus.isOpen ? "#34d399" : "#fb7185";
  const statusBackground = marketStatus.isOpen
    ? "rgba(16, 185, 129, 0.2)"
    : "rgba(244, 63, 94, 0.22)";
  const statusBorder = marketStatus.isOpen
    ? "rgba(52, 211, 153, 0.28)"
    : "rgba(251, 113, 133, 0.3)";

  return (
    <div className="space-y-4">
      {/* Clean Header Bar */}
      <div className="relative z-20 flex flex-col gap-3.5 rounded-2xl border border-white/10 bg-slate-950/70 p-4 backdrop-blur-2xl sm:p-5">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          {/* Left Column: Title & Market Status */}
          <div className="space-y-1.5">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="relative flex h-2.5 w-2.5">
                <span
                  className={`absolute inline-flex h-full w-full rounded-full opacity-75 ${
                    marketStatus.isOpen ? "animate-ping" : ""
                  }`}
                  style={{ backgroundColor: statusColor }}
                ></span>

                <span
                  className="relative inline-flex h-2.5 w-2.5 rounded-full"
                  style={{
                    backgroundColor: statusColor,
                    boxShadow: `0 0 10px ${statusColor}`,
                  }}
                ></span>
              </span>

              <h3 className="text-base sm:text-lg font-bold text-white">
                Real-Time Market Hub
              </h3>

              <span
                className="rounded-full border px-2.5 py-0.5 text-[10px] sm:text-[11px] font-bold tracking-wider"
                style={{
                  color: statusColor,
                  backgroundColor: statusBackground,
                  borderColor: statusBorder,
                }}
              >
                {marketStatus.isOpen ? "INDIAN MARKET LIVE" : "INDIAN MARKET CLOSED"}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 text-xs text-slate-400">
              <span>Live Multi-Asset &amp; Technical Analysis</span>
              <span className="text-slate-600">•</span>
              <LiveClock />
            </div>
          </div>

          {/* Right Column: Chart Mode Toggle & Refresh Button */}
          <div className="flex flex-wrap items-center gap-2.5 self-start md:self-auto">
            {/* Chart Mode Toggle */}
            <div className="inline-flex items-center rounded-xl border border-white/15 bg-white/5 p-1">
              <button
                type="button"
                onClick={() => setChartMode("overview")}
                className={`flex items-center gap-2 rounded-lg px-3.5 py-1.5 text-xs font-bold transition-all ${
                  chartMode === "overview"
                    ? "bg-emerald-600 text-white shadow-md"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <LineChart className="h-4 w-4" />
                <span>Line Chart Overview</span>
              </button>

              <button
                type="button"
                onClick={() => setChartMode("candlestick")}
                className={`flex items-center gap-2 rounded-lg px-3.5 py-1.5 text-xs font-bold transition-all ${
                  chartMode === "candlestick"
                    ? "bg-emerald-600 text-white shadow-md"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <CandlestickChart className="h-4 w-4" />
                <span>Candlestick Chart</span>
              </button>
            </div>

            {/* Refresh Button */}
            <button
              type="button"
              onClick={handleRefresh}
              disabled={isRefreshing}
              className="inline-flex items-center gap-1.5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-2 text-xs font-semibold text-emerald-300 transition-all hover:bg-emerald-500/20 hover:text-white hover:shadow-[0_0_15px_rgba(16,185,129,0.2)] disabled:opacity-50"
              title="Refresh Market Data"
            >
              <RefreshCw
                className={`h-3.5 w-3.5 transition-transform duration-500 ${
                  isRefreshing ? "animate-spin text-white" : ""
                }`}
              />
              <span>{isRefreshing ? "Refreshing..." : "Refresh"}</span>
            </button>
          </div>
        </div>

        {/* Candlestick Quick Symbol Selector (when in Candlestick mode) */}
        {chartMode === "candlestick" && (
          <div className="flex flex-wrap items-center gap-1.5 border-t border-white/10 pt-2.5">
            <span className="text-[11px] font-semibold text-slate-400 mr-1">
              Select Candle Asset:
            </span>
            {candleQuickSymbols.map((item) => {
              const isSelected = selectedCandleSymbol === item.symbol;
              return (
                <button
                  key={item.symbol}
                  type="button"
                  onClick={() => setSelectedCandleSymbol(item.symbol)}
                  className={`rounded-lg px-2.5 py-1 text-xs font-medium transition-all ${
                    isSelected
                      ? "bg-emerald-500/25 text-emerald-300 border border-emerald-500/40 font-semibold shadow-sm"
                      : "bg-white/5 text-slate-300 border border-white/10 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Main Chart Area */}
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-950/50 p-2 shadow-xl backdrop-blur-2xl min-h-[460px]">
        {chartMode === "overview" ? (
          <OverviewWidget
            key={`overview-${refreshKey}`}
            height={460}
            refreshKey={refreshKey}
          />
        ) : (
          <CandlestickWidget
            key={`candle-${selectedCandleSymbol}-${refreshKey}`}
            symbol={selectedCandleSymbol}
            height={480}
            refreshKey={refreshKey}
          />
        )}
      </div>

      {/* Ticker Tape Widget */}
      <div className="overflow-hidden rounded-xl border border-white/10 bg-slate-950/50 backdrop-blur-xl min-h-[72px]">
        <TickerTapeWidget
          key={`ticker-${refreshKey}`}
          config={staticTickerTapeConfig}
          height={72}
          refreshKey={refreshKey}
        />
      </div>

      <p className="text-[10px] text-slate-500 text-center">
        Real-time market feeds &amp; technical candlestick analytics. Data provided for reference purposes.
      </p>
    </div>
  );
}
