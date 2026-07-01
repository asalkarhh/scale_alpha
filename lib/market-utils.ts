export type MarketStatus = "LIVE" | "CLOSED" | "HOLIDAY";

export function getMarketState(): { status: MarketStatus; message: string } {
  const now = new Date();
  const options = { timeZone: "Asia/Kolkata", hour12: false };
  const formatter = new Intl.DateTimeFormat("en-US", {
    ...options,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    weekday: "short",
  });

  const parts = formatter.formatToParts(now);
  const dt: Record<string, string> = {};
  parts.forEach((p) => (dt[p.type] = p.value));

  const dateStr = `${dt.year}-${dt.month}-${dt.day}`;
  const timeNum = parseInt(dt.hour) * 100 + parseInt(dt.minute); // e.g., 915 = 9:15 AM

  // Prominent 2026 Indian Stock Market Holidays
  const holidays = [
    "2026-01-26", // Republic Day
    "2026-03-03", // Holi
    "2026-03-20", // Ramzan Id
    "2026-04-03", // Mahavir Jayanti
    "2026-04-10", // Good Friday
    "2026-04-14", // Dr. Baba Saheb Ambedkar Jayanti
    "2026-05-01", // Maharashtra Day
    "2026-08-15", // Independence Day
    "2026-09-07", // Ganesh Chaturthi
    "2026-10-02", // Gandhi Jayanti
    "2026-10-21", // Dussehra
    "2026-11-08", // Diwali
    "2026-11-24", // Gurunanak Jayanti
    "2026-12-25", // Christmas
  ];

  if (holidays.includes(dateStr)) {
    return { status: "HOLIDAY", message: "Trading resumes on next market day" };
  }

  if (dt.weekday === "Sat" || dt.weekday === "Sun" || timeNum < 915 || timeNum >= 1530) {
    return { status: "CLOSED", message: "Market Closed" };
  }

  return { status: "LIVE", message: "Market is Open" };
}