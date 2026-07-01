import { NextResponse } from "next/server";
import * as yahooFinance from "yahoo-finance2";

export const dynamic = "force-dynamic"; // Ensures live data fetching

const TICKERS = [
  { symbol: "^NSEI", label: "NIFTY 50" },
  { symbol: "^BSESN", label: "SENSEX" },
  { symbol: "^CRSMID", label: "NIFTY MIDCAP 100" },
  { symbol: "^CNXSC", label: "NIFTY SMALLCAP 100" },
  { symbol: "^NSEBANK", label: "BANK NIFTY" },
  { symbol: "GC=F", label: "GOLD" },
  { symbol: "INR=X", label: "USD / INR" },
];

export async function GET() {
  try {
    // Fetch all basic quotes in one highly-optimized request
    const symbols = TICKERS.map((t) => t.symbol);
    const quotes = await yahooFinance.quote(symbols);

    // Fetch 1-day interval sparkline charts concurrently
    const results = await Promise.all(
      TICKERS.map(async (t) => {
        const quote = quotes.find((q) => q.symbol === t.symbol);
        if (!quote) return { ...t, error: true };

        let sparkline: number[] = [];
        try {
          const chart = await yahooFinance.chart(t.symbol, { interval: "5m", range: "1d" });
          sparkline = chart.quotes.map((q) => q.close).filter((val): val is number => val !== null && val !== undefined);
        } catch (err) {
          // Fail silently for sparkline to preserve the main quote
        }

        return {
          symbol: t.symbol,
          label: t.label,
          price: quote.regularMarketPrice ?? 0,
          change: quote.regularMarketChange ?? 0,
          changePercent: quote.regularMarketChangePercent ?? 0,
          sparkline,
        };
      })
    );

    return NextResponse.json(results);
  } catch (error) {
    console.error("Market API Error:", error);
    return NextResponse.json({ error: "Failed to fetch market data" }, { status: 500 });
  }
}