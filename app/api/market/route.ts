import yahooFinance from "yahoo-finance2";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function GET() {
  try {
    const symbols = [
      { symbol: "^NSEI", name: "NIFTY 50" },
      { symbol: "^BSESN", name: "SENSEX" },
      { symbol: "^NSEBANK", name: "BANK NIFTY" },
      { symbol: "GC=F", name: "GOLD" },
      { symbol: "INR=X", name: "USD/INR" },
    ];

    const marketData = [];

    for (const item of symbols) {
      try {
        console.log(
          "Fetching market:",
          item.symbol
        );

        const result =
          await yahooFinance.quote(
            item.symbol
          );

        marketData.push({
          name: item.name,
          price:
            result?.regularMarketPrice ?? 0,
          change:
            result?.regularMarketChange ??
            0,
          percent:
            result?.regularMarketChangePercent ??
            0,
        });
      } catch (err) {
        console.error(
          `Failed fetching ${item.symbol}`,
          err
        );

        // keep app alive
        marketData.push({
          name: item.name,
          price: 0,
          change: 0,
          percent: 0,
        });
      }
    }

    return NextResponse.json(
      marketData
    );
  } catch (error: any) {
    console.error(
      "Market API Fatal Error:",
      error
    );

    return NextResponse.json(
      {
        error:
          error?.message ||
          "Unknown error",
      },
      { status: 500 }
    );
  }
}