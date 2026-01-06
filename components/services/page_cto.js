"use client";

import { useState } from "react";
import ModalHeadlessUi from "../modal/headless-ui-modal";
import ContactForm from "../contact/contact_us_form";
import ContactSection from "../home/contact_form";

export default function PageCTO({ text1, text2, text3, text4 }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleModalOpen() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }
  return (
    <section className="py-16 px-4">
      <div
        className="
          max-w-6xl mx-auto
          rounded-[32px]
          bg-gradient-to-r from-[#0b1224] via-[#1a2250] to-[#2f3391]
          px-6 py-10 md:px-12 md:py-12
          shadow-[0_50px_150px_rgba(0,0,0,0.6)]
          
        "
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Left Content */}
          <div className="max-w-xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-3">
              {text1}
            </h2>

            <p className="text-indigo-200/80 mb-6">{text2}</p>

            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-1.5 rounded-full text-xs text-indigo-200 bg-white/10">
                {text3}
              </span>
              <span className="px-4 py-1.5 rounded-full text-xs text-indigo-200 bg-white/10">
                {text3}
              </span>
            </div>
          </div>

          {/* Right CTA */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => handleModalOpen()}
              className="
                px-6 py-3 rounded-full
                bg-indigo-500 hover:bg-indigo-600
                text-white font-medium
                shadow-[0_0_30px_rgba(99,102,241,0.6)]
                transition
              "
            >
              Contact Us
            </button>

            {/* <p className="text-sm text-indigo-200/80">
              Or email us at{" "}
              <span className="text-indigo-300">hello@softplix.studio</span>
            </p> */}
          </div>
        </div>
      </div>
      <ModalHeadlessUi isOpen={isModalOpen} onClose={closeModal}>
        <ContactSection onClose={closeModal} />
      </ModalHeadlessUi>
    </section>
  );
}
