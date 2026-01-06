"use client";

import ContactCta from "@/components/contact/contact_cta";
import { ArrowLeft, Mail, ShieldCheck, BarChart3, Layers } from "lucide-react";

export default function CaseStudyDetail() {
  return (
    <section className="px-4 py-16 bg-gradient-to-b from-indigo-100 via-indigo-50 to-white">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* ================= HERO ================= */}
        <div className="rounded-[32px] bg-gradient-to-r from-[#0b1224] via-[#1b2356] to-[#2f3491] p-8 md:p-12 shadow-lg">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="text-indigo-300 text-sm mb-2">
                Portfolio / Case Study
              </p>

              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-green-400" />
                <span className="text-xs text-indigo-200">
                  Live in production
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl font-semibold text-white mb-4">
                Happy Tokens – Mobile Wallet App
              </h1>

              <p className="text-indigo-200/80 max-w-2xl">
                Designed and implemented a scalable rewards system for payments,
                cashback, and merchant offers.
              </p>
            </div>
          </div>
        </div>

        {/* ================= STATS ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { label: "Monthly revenue", value: "25Lakh" },
            { label: "Transaction success", value: "99.3%" },
            { label: "Crash-free sessions", value: "99.8%" },
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-[20px] bg-white p-6 shadow-sm border border-gray-100"
            >
              <p className="text-sm text-gray-500 mb-2">{item.label}</p>
              <p className="text-2xl font-semibold text-gray-900">
                {item.value}
              </p>
            </div>
          ))}
        </div>

        {/* ================= OVERVIEW ================= */}
        <div className="rounded-[24px] bg-white p-8 shadow-sm border border-gray-100">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-full bg-indigo-500 flex items-center justify-center">
              <Layers size={18} className="text-white" />
            </div>
            <h2 className="text-lg font-semibold text-gray-900">
              Project overview
            </h2>
          </div>

          <p className="text-gray-600 leading-relaxed max-w-4xl">
            Happy Tokens partnered with Softplix to design and build a
            next-generation mobile wallet for emerging markets. The goal was a
            single app for daily payments, peer-to-peer transfers, and utilities
            — without compromising security or user experience.
          </p>
        </div>

        {/* ================= CHALLENGES & SOLUTIONS ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Challenges */}
          <div className="rounded-[24px] bg-white p-8 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-full bg-indigo-500 flex items-center justify-center">
                <ShieldCheck size={18} className="text-white" />
              </div>
              <h3 className="font-semibold text-gray-900">Challenges</h3>
            </div>

            <ul className="space-y-3 text-gray-600 text-sm">
              <li>Fragmented payment experiences across apps</li>
              <li>Strict KYC & compliance during onboarding</li>
              <li>Real-time fraud detection without UX friction</li>
            </ul>
          </div>

          {/* Solutions */}
          <div className="rounded-[24px] bg-white p-8 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-full bg-indigo-500 flex items-center justify-center">
                <BarChart3 size={18} className="text-white" />
              </div>
              <h3 className="font-semibold text-gray-900">Solutions</h3>
            </div>

            <ul className="space-y-3 text-gray-600 text-sm">
              <li>Unified payment journeys</li>
              <li>Progressive onboarding with background checks</li>
              <li>Real-time fraud & anomaly detection engine</li>
            </ul>
          </div>
        </div>

        {/* ================= RESULTS ================= */}
        <div className="rounded-[24px] bg-white p-8 shadow-sm border border-gray-100">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-full bg-indigo-500 flex items-center justify-center">
              <BarChart3 size={18} className="text-white" />
            </div>
            <h3 className="font-semibold text-gray-900">Results & impact</h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "+52% onboarding completion",
              "+36% monthly users",
              "-41% chargebacks",
              "99.8% crash-free",
            ].map((r, i) => (
              <div
                key={i}
                className="rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-700 text-center"
              >
                {r}
              </div>
            ))}
          </div>
        </div>
        <ContactCta />
      </div>
    </section>
  );
}
