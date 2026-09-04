"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Eye,
  EyeOff,
  HelpCircle,
  KeyRound,
  Laptop,
  Lock,
  MessageCircle,
  Phone,
  ShieldCheck,
  Smartphone,
  Sparkles,
  UserCheck,
} from "lucide-react";

import { siteConfig } from "@/lib/site-data";

export function ClientDeskLogin() {
  const [loginMethod, setLoginMethod] = useState<"password" | "otp">("password");
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [otpSent, setOtpSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setShowDemoModal(true);
    }, 1200);
  };

  const handleSendOtp = () => {
    if (!identifier) return;
    setOtpSent(true);
  };

  return (
    <div className="w-full">
      <div className="grid items-center gap-8 lg:grid-cols-12 max-w-6xl mx-auto">
        
        {/* ========================================================================= */}
        {/* LEFT COLUMN: Showcase Login Card */}
        {/* ========================================================================= */}
        <div className="lg:col-span-6">
          <div className="relative overflow-hidden rounded-[28px] border border-emerald-100 bg-white p-6 shadow-[0_15px_45px_rgba(6,78,59,0.08)] sm:p-8">
            
            {/* Top Security & Branding Badge */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div className="flex items-center gap-2.5">
                <Image
                  src="/logo.png"
                  alt="Scale Alpha Logo"
                  width={40}
                  height={56}
                  sizes="40px"
                  className="h-10 w-auto object-contain"
                />
                <div>
                  <h3 className="text-base font-bold text-emerald-950">Scale Alpha</h3>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-emerald-700">
                    Client Portal
                  </p>
                </div>
              </div>
              <div className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-bold text-emerald-800 border border-emerald-100">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
                <span>ARN-269246</span>
              </div>
            </div>

            {/* Login Mode Switcher */}
            <div className="mt-6 flex rounded-xl border border-emerald-100 bg-slate-50 p-1">
              <button
                type="button"
                onClick={() => setLoginMethod("password")}
                className={`flex-1 rounded-lg py-2 text-xs font-bold transition-all ${
                  loginMethod === "password"
                    ? "bg-white text-emerald-950 shadow-sm"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                Password Login
              </button>
              <button
                type="button"
                onClick={() => setLoginMethod("otp")}
                className={`flex-1 rounded-lg py-2 text-xs font-bold transition-all ${
                  loginMethod === "otp"
                    ? "bg-white text-emerald-950 shadow-sm"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                Mobile OTP Login
              </button>
            </div>

            {/* Showcase Notice Banner */}
            <div className="mt-4 flex items-start gap-2 rounded-xl border border-emerald-100 bg-emerald-50/70 p-2.5 text-[11px] text-emerald-900">
              <Sparkles className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600" />
              <span>
                <strong>Showcase Portal:</strong> Enter your PAN or Mobile to test the investor interface preview.
              </span>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} autoComplete="off" className="mt-5 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700">
                  {loginMethod === "password" ? "Client ID / PAN" : "Registered Mobile Number / PAN"}
                </label>
                <div className="relative mt-1.5">
                  <input
                    type="text"
                    name="client_identifier"
                    autoComplete="off"
                    required
                    placeholder={
                      loginMethod === "password"
                        ? "Enter Client ID or PAN"
                        : "Enter 10-digit Mobile Number"
                    }
                    value={identifier}
                    onChange={(e) => setIdentifier(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs text-slate-900 placeholder:text-slate-400 focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600 sm:text-sm"
                  />
                  <UserCheck className="absolute right-3.5 top-3 h-4 w-4 text-slate-400" />
                </div>
              </div>

              {loginMethod === "password" ? (
                <div>
                  <div className="flex items-center justify-between">
                    <label className="block text-xs font-semibold text-slate-700">
                      Password / PIN
                    </label>
                    <button
                      type="button"
                      onClick={() => setShowDemoModal(true)}
                      className="text-[11px] font-semibold text-emerald-700 hover:text-emerald-900"
                    >
                      Forgot Password?
                    </button>
                  </div>
                  <div className="relative mt-1.5">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="client_pin_code"
                      autoComplete="new-password"
                      required
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs text-slate-900 placeholder:text-slate-400 focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600 sm:text-sm"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3.5 top-3 text-slate-400 hover:text-slate-600"
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="flex items-center justify-between">
                    <label className="block text-xs font-semibold text-slate-700">
                      One-Time Password (OTP)
                    </label>
                    <button
                      type="button"
                      onClick={handleSendOtp}
                      className="text-[11px] font-bold text-emerald-700 hover:text-emerald-900"
                    >
                      {otpSent ? "Resend OTP" : "Send OTP"}
                    </button>
                  </div>
                  <div className="relative mt-1.5">
                    <input
                      type="text"
                      name="client_otp_code"
                      autoComplete="one-time-code"
                      maxLength={6}
                      placeholder={otpSent ? "Enter 6-digit OTP" : "Click 'Send OTP' first"}
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs text-slate-900 placeholder:text-slate-400 focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600 sm:text-sm"
                    />
                    <KeyRound className="absolute right-3.5 top-3 h-4 w-4 text-slate-400" />
                  </div>
                </div>
              )}

              <div className="flex items-center justify-between pt-1">
                <label className="flex items-center gap-2 text-xs text-slate-600 cursor-pointer">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="h-3.5 w-3.5 rounded border-slate-300 text-emerald-700 focus:ring-emerald-600"
                  />
                  <span>Remember this browser</span>
                </label>
                <div className="flex items-center gap-1 text-[11px] text-slate-400">
                  <Lock className="h-3 w-3 text-emerald-600" />
                  <span>256-Bit SSL</span>
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="mt-2 flex w-full items-center justify-center gap-2 rounded-full bg-emerald-900 py-3 text-xs font-bold text-white shadow-md hover:bg-emerald-800 transition-all disabled:opacity-75 sm:text-sm"
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    <span>Verifying Credentials...</span>
                  </div>
                ) : (
                  <>
                    <span>Sign In to Client Portal</span>
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* RIGHT COLUMN: What's Inside Client Desk */}
        {/* ========================================================================= */}
        <div className="lg:col-span-6 space-y-6">
          <div className="space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700">
              Investor Features
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-emerald-950 sm:text-3xl">
              Consolidated Wealth Dashboard for Your Entire Family
            </h2>
            <p className="text-xs leading-relaxed text-slate-600 sm:text-sm">
              One secure digital login to monitor your mutual fund portfolios, capital gains reports, asset allocation, and upcoming SIP mandates.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {[
              {
                icon: Laptop,
                title: "Consolidated Family View",
                desc: "Combine folios across spouse, children, and parents in a single dashboard.",
              },
              {
                icon: ShieldCheck,
                title: "Tax-Ready Statements",
                desc: "Instant download of STCG & LTCG capital gains reports for easy ITR filing.",
              },
              {
                icon: Smartphone,
                title: "Anytime Mobile Access",
                desc: "Check portfolio valuation and transaction status 24/7 on web & mobile.",
              },
              {
                icon: UserCheck,
                title: "Direct Advisor Support",
                desc: "Direct advisory review and assistance from Kaushal Balte (AMFI ARN-269246).",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-emerald-100 bg-white p-4 shadow-sm"
              >
                <div className="flex items-center gap-2 text-emerald-800">
                  <feature.icon className="h-4 w-4 text-emerald-700" />
                  <h4 className="text-xs font-bold text-emerald-950">{feature.title}</h4>
                </div>
                <p className="mt-1 text-[11px] text-slate-600 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Quick Help Card */}
          <div className="rounded-2xl border border-emerald-100 bg-emerald-50/70 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <HelpCircle className="h-4 w-4 text-emerald-700" />
                <p className="text-xs font-bold text-emerald-950">
                  Need Help Logging In?
                </p>
              </div>
              <span className="text-[10px] text-slate-500">Kharghar, Navi Mumbai</span>
            </div>
            <p className="mt-1 text-xs text-slate-600">
              Contact our client desk directly for credential reset or portfolio mapping:
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                  "Hi Kaushal, I need assistance with my Scale Alpha Client Desk login.",
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-emerald-900 px-3.5 py-1.5 text-xs font-bold text-white hover:bg-emerald-800 transition-colors"
              >
                <MessageCircle className="h-3.5 w-3.5" />
                <span>WhatsApp Desk</span>
              </a>
              <a
                href={`tel:+${siteConfig.whatsappNumber}`}
                className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-white px-3.5 py-1.5 text-xs font-bold text-emerald-950 hover:bg-emerald-50 transition-colors"
              >
                <Phone className="h-3.5 w-3.5 text-emerald-700" />
                <span>+91 94033 95768</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* Showcase Modal / Demo Feedback */}
      {/* ========================================================================= */}
      {showDemoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-md rounded-3xl border border-emerald-100 bg-white p-6 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-800">
              <Sparkles className="h-6 w-6" />
            </div>

            <div className="mt-4 text-center">
              <h3 className="text-lg font-bold text-emerald-950">
                Showcase Login Portal
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                This is a demonstration showcase portal for <strong>Scale Alpha</strong> clients.
              </p>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                Live portfolio authentication connects directly with AMFI / RTA registrar folios (CAMS &amp; KFintech). To activate your active client folio access or reset your PIN, please contact Kaushal Balte directly.
              </p>
            </div>

            <div className="mt-5 space-y-2">
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                  "Hi Kaushal, I would like to activate/access my Client Desk account.",
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-emerald-900 py-2.5 text-xs font-bold text-white hover:bg-emerald-800 transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Connect with Kaushal Balte</span>
              </a>
              <button
                type="button"
                onClick={() => setShowDemoModal(false)}
                className="w-full rounded-full border border-slate-200 bg-white py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
              >
                Back to Showcase Login
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
