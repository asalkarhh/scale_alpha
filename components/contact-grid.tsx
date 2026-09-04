"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
  User,
} from "lucide-react";

import { siteConfig } from "@/lib/site-data";

export function ContactGrid() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    goal: "Mutual Funds & SIP Planning",
    timeline: "3 to 5 Years",
    budget: "₹15,000 - ₹50,000 / month",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate frontend form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      phone: "",
      email: "",
      city: "",
      goal: "Mutual Funds & SIP Planning",
      timeline: "3 to 5 Years",
      budget: "₹15,000 - ₹50,000 / month",
      message: "",
    });
    setIsSubmitted(false);
  };

  return (
    <div className="grid gap-8 lg:grid-cols-12 items-start">
      
      {/* ========================================================================= */}
      {/* LEFT COLUMN: Client Data Form (7 cols) */}
      {/* ========================================================================= */}
      <div className="lg:col-span-7">
        <div className="rounded-[32px] border border-slate-200/80 bg-white p-6 sm:p-8 shadow-[0_15px_45px_rgba(15,23,42,0.06)]">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-5">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-emerald-800">
                <Sparkles className="h-3 w-3 text-emerald-600" />
                Direct Inquiry Form
              </span>
              <h3 className="mt-2.5 text-xl font-bold tracking-tight text-slate-950 sm:text-2xl">
                Request a Consultation
              </h3>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-slate-500">
              <Clock className="h-3.5 w-3.5 text-emerald-600" />
              <span>Response within 24h</span>
            </div>
          </div>

          {isSubmitted ? (
            <div className="py-8 text-center animate-in fade-in zoom-in-95 duration-200">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                <CheckCircle2 className="h-9 w-9" />
              </div>
              <h4 className="mt-4 text-2xl font-bold text-slate-950">
                Thank You, {formData.name || "Investor"}!
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 max-w-md mx-auto">
                Your details have been received. Kaushal Balte will review your requirements and reach out to you directly on <strong>{formData.phone || "your contact number"}</strong>.
              </p>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <a
                  href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                    `Hi Kaushal, I submitted my inquiry on Scale Alpha. Name: ${formData.name}, Goal: ${formData.goal}.`,
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-emerald-900 px-5 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-emerald-800 transition-colors sm:text-sm"
                >
                  <MessageCircle className="h-4 w-4 text-emerald-300" />
                  <span>Connect on WhatsApp Now</span>
                </a>
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-4 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors sm:text-sm"
                >
                  Submit Another Inquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} autoComplete="off" className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-semibold text-slate-700">
                    Full Name <span className="text-emerald-700">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    autoComplete="off"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="mt-1.5 w-full rounded-2xl border border-slate-200 bg-slate-50/60 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:border-emerald-600 focus:bg-white focus:ring-1 focus:ring-emerald-600 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700">
                    Phone / WhatsApp Number <span className="text-emerald-700">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    autoComplete="off"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="10-digit mobile number"
                    className="mt-1.5 w-full rounded-2xl border border-slate-200 bg-slate-50/60 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:border-emerald-600 focus:bg-white focus:ring-1 focus:ring-emerald-600 transition-all"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-semibold text-slate-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    autoComplete="off"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@domain.com (optional)"
                    className="mt-1.5 w-full rounded-2xl border border-slate-200 bg-slate-50/60 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:border-emerald-600 focus:bg-white focus:ring-1 focus:ring-emerald-600 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700">
                    City / Location
                  </label>
                  <input
                    type="text"
                    name="city"
                    autoComplete="off"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="e.g. Mumbai, Navi Mumbai, Pune"
                    className="mt-1.5 w-full rounded-2xl border border-slate-200 bg-slate-50/60 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:border-emerald-600 focus:bg-white focus:ring-1 focus:ring-emerald-600 transition-all"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-semibold text-slate-700">
                    Primary Service / Goal
                  </label>
                  <select
                    name="goal"
                    value={formData.goal}
                    onChange={handleChange}
                    className="mt-1.5 w-full rounded-2xl border border-slate-200 bg-slate-50/60 px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-emerald-600 focus:bg-white focus:ring-1 focus:ring-emerald-600 transition-all cursor-pointer"
                  >
                    <option value="Mutual Funds & SIP Planning">Mutual Funds &amp; SIP Planning</option>
                    <option value="Portfolio Health Check & Review">Portfolio Health Check &amp; Review</option>
                    <option value="Retirement Corpus Planning">Retirement Corpus Planning</option>
                    <option value="Child Education & Future Goals">Child Education &amp; Future Goals</option>
                    <option value="Tax-Saving Strategies (ELSS/NPS)">Tax-Saving Strategies (ELSS / NPS)</option>
                    <option value="Insurance & Protection Gap Analysis">Insurance &amp; Protection Review</option>
                    <option value="Direct Consultation with Kaushal">Direct 1-on-1 Consultation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700">
                    Expected Investment / Monthly SIP
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="mt-1.5 w-full rounded-2xl border border-slate-200 bg-slate-50/60 px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-emerald-600 focus:bg-white focus:ring-1 focus:ring-emerald-600 transition-all cursor-pointer"
                  >
                    <option value="₹5,000 - ₹15,000 / month">₹5,000 - ₹15,000 / month</option>
                    <option value="₹15,000 - ₹50,000 / month">₹15,000 - ₹50,000 / month</option>
                    <option value="₹50,000 - ₹1,00,000 / month">₹50,000 - ₹1,00,000 / month</option>
                    <option value="₹1,00,000+ / month">₹1,00,000+ / month</option>
                    <option value="Lumpsum Investment">Lumpsum Investment</option>
                    <option value="Portfolio Review Only">Portfolio Review Only</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700">
                  Your Message or Queries (Optional)
                </label>
                <textarea
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Share any specific requirements, current investments, or preferred time for a callback..."
                  className="mt-1.5 w-full rounded-2xl border border-slate-200 bg-slate-50/60 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:border-emerald-600 focus:bg-white focus:ring-1 focus:ring-emerald-600 transition-all resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-emerald-900 py-3 text-sm font-bold text-white shadow-sm hover:bg-emerald-800 disabled:opacity-75 transition-all"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      <span>Sending Details...</span>
                    </div>
                  ) : (
                    <>
                      <span>Submit Inquiry &amp; Request Callback</span>
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </button>
              </div>

              <p className="text-center text-[11px] text-slate-500">
                🔒 Your personal information is kept strictly confidential and only used for planning recommendations.
              </p>
            </form>
          )}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* RIGHT COLUMN: Resized & Compact Contact Cards (5 cols) */}
      {/* ========================================================================= */}
      <div className="lg:col-span-5 space-y-4">
        
        {/* WhatsApp Card */}
        <Link
          href={`https://wa.me/${siteConfig.whatsappNumber}`}
          target="_blank"
          rel="noreferrer"
          className="group flex items-start gap-4 rounded-3xl border border-emerald-200/80 bg-gradient-to-br from-emerald-50/70 via-white to-white p-5 shadow-sm hover:border-emerald-400 hover:shadow-md transition-all"
        >
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-xs group-hover:scale-105 transition-transform">
            <MessageCircle className="h-5 w-5" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800">
                Instant Chat
              </span>
              <ArrowRight className="h-3.5 w-3.5 text-emerald-600 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
            </div>
            <h4 className="mt-0.5 text-base font-bold text-slate-950">WhatsApp Consultation</h4>
            <p className="mt-1 text-xs text-slate-600 leading-relaxed">
              Start a quick conversation, share goals, or request an instant portfolio health check.
            </p>
          </div>
        </Link>

        {/* Email Desk Card */}
        <Link
          href={`mailto:${siteConfig.contactEmail}`}
          className="group flex items-start gap-4 rounded-3xl border border-slate-200/80 bg-white p-5 shadow-sm hover:border-emerald-300 hover:shadow-md transition-all"
        >
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-xs group-hover:scale-105 transition-transform">
            <Mail className="h-5 w-5" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                Official Desk
              </span>
              <ArrowRight className="h-3.5 w-3.5 text-slate-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
            </div>
            <h4 className="mt-0.5 text-base font-bold text-slate-950">Email Planning Desk</h4>
            <p className="mt-1 text-xs text-slate-600 leading-relaxed truncate">
              {siteConfig.contactEmail}
            </p>
          </div>
        </Link>

        {/* Phone & Direct Advisory */}
        <div className="flex items-start gap-4 rounded-3xl border border-slate-200/80 bg-white p-5 shadow-sm">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700 border border-emerald-100 shadow-xs">
            <Phone className="h-5 w-5" />
          </div>
          <div className="min-w-0 flex-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
              Planning Line
            </span>
            <h4 className="mt-0.5 text-base font-bold text-slate-950">
              +91 {siteConfig.whatsappNumber.slice(2, 7)} {siteConfig.whatsappNumber.slice(7)}
            </h4>
            <p className="mt-1 text-xs text-slate-600">
              Mon – Sat: 9:30 AM to 7:00 PM IST
            </p>
          </div>
        </div>

        {/* Office Address Card */}
        <div className="flex items-start gap-4 rounded-3xl border border-slate-200/80 bg-white p-5 shadow-sm">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-slate-100 text-slate-700 shadow-xs">
            <MapPin className="h-5 w-5" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                Distribution Office
              </span>
              <span className="rounded-md bg-emerald-50 px-2 py-0.5 text-[10px] font-bold text-emerald-800 border border-emerald-100">
                ARN-269246
              </span>
            </div>
            <h4 className="mt-0.5 text-base font-bold text-slate-950">
              {siteConfig.officeLabel}
            </h4>
            <p className="mt-1 text-xs text-slate-600 leading-relaxed">
              {siteConfig.officeAddress}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
