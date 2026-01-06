"use client";

import ContactSection from "@/components/home/contact_form";
import ModalHeadlessUi from "@/components/modal/headless-ui-modal";
import {
  CheckCircle,
  Target,
  Layers,
  TrendingUp,
  Cpu,
  Users,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";

export default function BusinessEnablementPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleModalOpen() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <div className="bg-gradient-to-b from-indigo-100 via-indigo-50 to-white text-black">
      <main className="max-w-6xl mx-auto px-4 py-16 space-y-24">
        {/* ================= HERO ================= */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs tracking-widest text-gray-400 mb-3">
              BUSINESS ENABLEMENT & EXECUTION
            </p>

            <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-5">
              We Help Businesses Turn Capability Into Growth
            </h1>

            <p className="text-gray-600 mb-6 max-w-xl">
              If you have the team, technology, or capital — but lack execution
              clarity — we help you design and run the business.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {[
                "Business strategy & execution",
                "Go-to-market & operations",
                "Technology-aligned growth systems",
              ].map((item, i) => (
                <span
                  key={i}
                  className="px-4 py-2 rounded-full bg-gray-100 text-sm text-gray-700"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => handleModalOpen()}
                className="px-6 py-3 rounded-full bg-indigo-500 text-white hover:bg-indigo-600 transition"
              >
                Talk to Us
              </button>
              <button
                onClick={() => handleModalOpen()}
                className="px-6 py-3 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-50 transition"
              >
                Book a Strategy Call
              </button>
            </div>
          </div>

          {/* Execution overview */}
          <div className="rounded-3xl bg-white p-6 border border-gray-100 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center">
                <Layers size={18} className="text-white" />
              </div>
              <p className="font-semibold text-gray-900">Execution overview</p>
            </div>

            {[
              ["Strategic clarity", "+68%"],
              ["Execution reliability", "+54%"],
              ["Revenue visibility", "+47%"],
            ].map(([label, value], i) => (
              <div
                key={i}
                className="flex justify-between items-center rounded-xl bg-gray-50 px-4 py-3"
              >
                <p className="text-sm text-gray-700">{label}</p>
                <span className="text-sm font-medium text-indigo-600">
                  {value}
                </span>
              </div>
            ))}

            <p className="text-sm text-gray-600 pt-2">
              We plug into existing teams, technology, and capital — and
              organise them into a working operating system.
            </p>
          </div>
        </section>

        {/* ================= THE GAP ================= */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center">
                <CheckCircle size={18} className="text-white" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900">The Gap</h2>
            </div>

            <p className="text-gray-600 mb-6">
              Many companies have strong resources but lack clear direction.
            </p>

            <ul className="space-y-3 text-gray-600">
              {[
                "Technology without a business model",
                "Teams without execution structure",
                "Products without go-to-market clarity",
                "Growth without systems",
                "Decisions without data",
              ].map((item, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl bg-white p-6 border border-gray-100 shadow-sm">
            <p className="text-sm text-gray-500 mb-4">Operating state</p>

            <div className="space-y-3">
              <div>
                <p className="text-xs text-gray-500 mb-1">Current</p>
                <div className="h-2 rounded-full bg-orange-300" />
              </div>

              <div>
                <p className="text-xs text-gray-500 mb-1">Target</p>
                <div className="h-2 rounded-full bg-green-400" />
              </div>

              <p className="text-sm text-gray-600 pt-2">
                Our role is to convert existing resources into a clear operating
                system for growth.
              </p>
            </div>
          </div>
        </section>

        {/* ================= WHAT WE HELP YOU RUN ================= */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">
            What We Help You Run
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              ["Business Strategy & Direction", Target],
              ["Execution & Operations Setup", Layers],
              ["Go-To-Market & Growth", TrendingUp],
              ["Technology as a Business Tool", Cpu],
              ["Founder & Leadership Support", Users],
              ["Long-Term Execution Partner", ArrowRight],
            ].map(([title, Icon], i) => (
              <div
                key={i}
                className="rounded-2xl bg-white p-6 border border-gray-100 shadow-sm hover:shadow-md transition"
              >
                <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center mb-4">
                  <Icon size={18} className="text-white" />
                </div>

                <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-600">
                  Structured systems designed for repeatable execution and
                  growth.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= HOW WE ENGAGE ================= */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            How We Engage
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              "Understand current reality",
              "Identify the gaps",
              "Design the roadmap",
              "Support & scale execution",
            ].map((step, i) => (
              <div
                key={i}
                className="rounded-xl bg-white p-5 border border-gray-100 shadow-sm text-sm text-gray-700"
              >
                <span className="block text-indigo-600 font-medium mb-2">
                  {i + 1}
                </span>
                {step}
              </div>
            ))}
          </div>
        </section>

        {/* ================= WHO WE WORK WITH ================= */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Who We Work With
          </h2>

          <div className="flex flex-wrap gap-3">
            {[
              "Early-stage startups with momentum",
              "Growing businesses adding new lines",
              "Product-led technology companies",
              "Tech-heavy teams with weak execution",
              "Founders needing clarity & structure",
            ].map((item, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-full bg-gray-100 text-sm text-gray-700"
              >
                {item}
              </span>
            ))}
          </div>
          <ModalHeadlessUi isOpen={isModalOpen} onClose={closeModal}>
            <ContactSection onClose={closeModal} />
          </ModalHeadlessUi>
        </section>
      </main>
    </div>
  );
}
