"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { MessageCircle } from "lucide-react";

import { siteConfig } from "@/lib/site-data";

export function FloatingWhatsApp() {
  const [bottomOffset, setBottomOffset] = useState(20);

  useEffect(() => {
    const footerBottomBar = document.getElementById("footer-bottom-bar");

    if (!footerBottomBar) {
      return;
    }

    const updatePosition = () => {
      const dividerTop = footerBottomBar.getBoundingClientRect().top;

      setBottomOffset(Math.max(20, window.innerHeight - dividerTop + 16));
    };

    updatePosition();
    window.addEventListener("scroll", updatePosition, { passive: true });
    window.addEventListener("resize", updatePosition);

    return () => {
      window.removeEventListener("scroll", updatePosition);
      window.removeEventListener("resize", updatePosition);
    };
  }, []);

  return (
    <Link
      href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
        "Hi Scale Alpha, I would like to book a financial consultation.",
      )}`}
      target="_blank"
      rel="noreferrer"
      className="fixed right-5 z-50 inline-flex items-center gap-3 rounded-full bg-[linear-gradient(135deg,#0f172a_0%,#128c7e_100%)] px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_50px_rgba(18,140,126,0.4)] transition-transform duration-300 hover:-translate-y-1"
      style={{ bottom: bottomOffset }}
    >
      <span className="absolute -left-1 -top-1 flex h-4 w-4">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-75" />
        <span className="relative inline-flex h-4 w-4 rounded-full bg-emerald-400" />
      </span>
      <MessageCircle className="h-5 w-5" />
      WhatsApp
    </Link>
  );
}

