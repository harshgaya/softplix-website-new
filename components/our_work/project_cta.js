"use client";

export default function ProjectCTA() {
  return (
    <section className="py-16 px-4">
      <div
        className="
          max-w-6xl mx-auto
          rounded-[32px]
          bg-gradient-to-r from-[#0b1224] via-[#1a2354] to-[#2e328a]
          px-6 py-10 md:px-12 md:py-12
          shadow-[0_50px_150px_rgba(0,0,0,0.6)]
        "
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Left Content */}
          <div className="max-w-xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-3">
              Have a project in mind? Let’s build it together.
            </h2>

            <p className="text-indigo-200/80 mb-6">
              Share your idea, roadmap, or existing product and we&apos;ll show
              you how Softplix can help design, develop, and scale it.
            </p>

            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-1.5 rounded-full text-xs text-indigo-200 bg-white/10">
                Discovery call in days
              </span>
              <span className="px-4 py-1.5 rounded-full text-xs text-indigo-200 bg-white/10">
                Tailored proposal
              </span>
            </div>
          </div>

          {/* Right CTA */}
          <div className="flex items-center gap-4">
            <button
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

            <p className="text-sm text-indigo-200/80">
              Or email us at{" "}
              <span className="text-indigo-300">hello@softplix.studio</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
