import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { contactCards, siteConfig } from "@/lib/site-data";

export function ContactGrid() {
  return (
    <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
      <div className="grid gap-4">
        {contactCards.map((card) => (
          <article
            key={card.title}
            className="rounded-[28px] border border-slate-200/70 bg-white p-6 shadow-[0_12px_30px_rgba(15,23,42,0.05)]"
          >
            <div className="inline-flex rounded-2xl bg-[linear-gradient(135deg,rgba(31,94,255,0.12)_0%,rgba(77,212,163,0.16)_100%)] p-3 text-slate-900">
              <card.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-5 text-xl font-semibold text-slate-950">
              {card.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              {card.description}
            </p>
          </article>
        ))}

        <div className="grid gap-4 md:grid-cols-2">
          <Link
            href={`https://wa.me/${siteConfig.whatsappNumber}`}
            target="_blank"
            rel="noreferrer"
            className="rounded-[24px] border border-slate-200/70 bg-slate-50/80 p-5 shadow-[0_12px_30px_rgba(15,23,42,0.05)]"
          >
            <MessageCircle className="h-5 w-5 text-sky-700" />
            <p className="mt-3 text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
              WhatsApp
            </p>
            <p className="mt-2 text-lg font-semibold text-slate-950">
              Consultation chat
            </p>
          </Link>
          <Link
            href={`mailto:${siteConfig.contactEmail}`}
            className="rounded-[24px] border border-slate-200/70 bg-slate-50/80 p-5 shadow-[0_12px_30px_rgba(15,23,42,0.05)]"
          >
            <Mail className="h-5 w-5 text-sky-700" />
            <p className="mt-3 text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
              Email
            </p>
            <p className="mt-2 text-lg font-semibold text-slate-950">
              {siteConfig.contactEmail}
            </p>
          </Link>
        </div>

        <div className="rounded-[28px] border border-slate-200/70 bg-slate-50/80 p-6 shadow-[0_12px_30px_rgba(15,23,42,0.05)]">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <Phone className="h-5 w-5 text-sky-700" />
              <p className="mt-3 text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
                Advisory line
              </p>
              <p className="mt-2 text-base font-semibold text-slate-950">
                +91 {siteConfig.whatsappNumber.slice(2, 7)} {siteConfig.whatsappNumber.slice(7)}
              </p>
            </div>
            <div>
              <MapPin className="h-5 w-5 text-sky-700" />
              <p className="mt-3 text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
                Office
              </p>
              <p className="mt-2 text-base font-semibold text-slate-950">
                {siteConfig.officeLabel}
              </p>
              <p className="mt-1 text-sm leading-7 text-slate-600">
                {siteConfig.officeAddress}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-hidden rounded-[32px] border border-slate-200/70 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.08)]">
        <iframe
          title="Scale Alpha office map"
          src={siteConfig.mapEmbedUrl}
          className="h-full min-h-[540px] w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}

