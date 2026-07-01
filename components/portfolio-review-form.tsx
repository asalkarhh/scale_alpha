"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import Link from "next/link";
import { Mail, MessageCircle, UploadCloud } from "lucide-react";

import { siteConfig } from "@/lib/site-data";

export function PortfolioReviewForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    goal: "Long-term wealth building",
    investments: "",
  });
  const [portfolioFile, setPortfolioFile] = useState<string>("");
  const [submitted, setSubmitted] = useState(false);

  function updateField(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) {
    setForm((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
  }

  function handleFile(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    setPortfolioFile(file?.name ?? "");
  }

  function buildMessage() {
    return [
      `Hi Scale Alpha, I would like a free portfolio review.`,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email}`,
      `Investment Goal: ${form.goal}`,
      `Existing Investments: ${form.investments || "Not shared yet"}`,
      `Portfolio file: ${portfolioFile || "Will share separately"}`,
    ].join("\n");
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);

    const message = buildMessage();
    const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
      message,
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }

  const mailToHref = `mailto:${siteConfig.consultationEmail}?subject=${encodeURIComponent(
    "Scale Alpha Portfolio Review Request",
  )}&body=${encodeURIComponent(buildMessage())}`;

  return (
    <div className="grid gap-6 xl:grid-cols-[0.86fr_1.14fr]">
      <div className="rounded-[32px] border border-white/10 bg-slate-950 p-6 text-white shadow-[0_30px_100px_rgba(2,6,23,0.4)]">
        <p className="text-xs uppercase tracking-[0.24em] text-sky-100/70">
          Lead capture
        </p>
        <h3 className="mt-3 text-3xl font-semibold">
          Get Free Portfolio Review
        </h3>
        <p className="mt-4 text-sm leading-7 text-slate-300">
          Share your current holdings, goals, or policy documents and receive a
          structured direction note with risk observations, potential gaps, and
          next-step recommendations.
        </p>

        <div className="mt-8 grid gap-4">
          {[
            {
              title: "Upload portfolio",
              description:
                "Attach holdings screenshots, CAS statements, or policy summaries.",
              icon: UploadCloud,
            },
            {
              title: "WhatsApp CTA",
              description:
                "Instantly continue the conversation with all form details prefilled.",
              icon: MessageCircle,
            },
            {
              title: "Email CTA",
              description:
                "Open a ready-to-send consultation email draft for detailed follow-up.",
              icon: Mail,
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-[24px] border border-white/10 bg-white/6 p-5"
            >
              <item.icon className="h-5 w-5 text-sky-200" />
              <p className="mt-3 text-lg font-semibold text-white">{item.title}</p>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <form
        suppressHydrationWarning
        onSubmit={handleSubmit}
        className="rounded-[32px] border border-slate-200/70 bg-white p-6 shadow-[0_18px_60px_rgba(15,23,42,0.08)]"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <label className="space-y-2 text-sm font-medium text-slate-700">
            <span>Name</span>
            <input
              required
              name="name"
              value={form.name}
              onChange={updateField}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-3 outline-none ring-0 transition-colors focus:border-sky-300"
              placeholder="Your name"
            />
          </label>
          <label className="space-y-2 text-sm font-medium text-slate-700">
            <span>Phone</span>
            <input
              required
              name="phone"
              value={form.phone}
              onChange={updateField}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-3 outline-none transition-colors focus:border-sky-300"
              placeholder="+91"
            />
          </label>
          <label className="space-y-2 text-sm font-medium text-slate-700">
            <span>Email</span>
            <input
              required
              type="email"
              name="email"
              value={form.email}
              onChange={updateField}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-3 outline-none transition-colors focus:border-sky-300"
              placeholder="name@example.com"
            />
          </label>
          <label className="space-y-2 text-sm font-medium text-slate-700">
            <span>Investment goal</span>
            <select
              name="goal"
              value={form.goal}
              onChange={updateField}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-3 outline-none transition-colors focus:border-sky-300"
            >
              <option>Long-term wealth building</option>
              <option>Retirement planning</option>
              <option>Tax saving</option>
              <option>Child education</option>
              <option>Insurance review</option>
            </select>
          </label>
        </div>

        <label className="mt-4 block space-y-2 text-sm font-medium text-slate-700">
          <span>Existing investments</span>
          <textarea
            name="investments"
            value={form.investments}
            onChange={updateField}
            rows={4}
            className="w-full rounded-[24px] border border-slate-200 bg-slate-50/80 px-4 py-3 outline-none transition-colors focus:border-sky-300"
            placeholder="Mutual funds, stocks, insurance policies, existing SIPs, or liabilities"
          />
        </label>

        <label className="mt-4 flex cursor-pointer flex-col items-center justify-center rounded-[28px] border border-dashed border-slate-300 bg-slate-50/80 px-6 py-8 text-center transition-colors hover:border-sky-300 hover:bg-sky-50/80">
          <UploadCloud className="h-8 w-8 text-sky-700" />
          <p className="mt-3 font-semibold text-slate-950">
            Upload portfolio snapshot
          </p>
          <p className="mt-1 text-sm text-slate-500">
            CSV, PDF, screenshot, or holding summary
          </p>
          <input type="file" className="hidden" onChange={handleFile} />
          {portfolioFile ? (
            <span className="mt-3 rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-[0_12px_24px_rgba(15,23,42,0.08)]">
              {portfolioFile}
            </span>
          ) : null}
        </label>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <button
            suppressHydrationWarning
            type="submit"
            className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,#1f5eff_0%,#35c4ff_48%,#4dd4a3_100%)] px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(36,111,255,0.24)] transition-transform duration-300 hover:-translate-y-0.5"
          >
            Submit & Open WhatsApp
          </button>
          <Link
            href={mailToHref}
            className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition-transform duration-300 hover:-translate-y-0.5"
          >
            Open Email Draft
          </Link>
        </div>

        {submitted ? (
          <div className="mt-5 rounded-[24px] border border-emerald-200 bg-emerald-50 px-4 py-4 text-sm leading-7 text-emerald-900">
            Your request is ready. WhatsApp has been opened with the submitted details,
            and the email draft CTA is available if you prefer sharing documents by mail.
          </div>
        ) : null}
      </form>
    </div>
  );
}
