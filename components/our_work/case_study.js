import Image from "next/image";

export default function FeaturedCaseStudy() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-14">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            Featured case study
          </h2>
          <p className="mt-2 text-gray-600 text-sm md:text-base">
            A closer look at how we partner with clients to ship complex,
            high-impact platforms.
          </p>
        </div>

        {/* Case study card */}
        <div className="relative">
          {/* Glow */}
          <div className="absolute inset-0 -z-10 rounded-[40px] bg-indigo-500/20 blur-3xl" />

          <div className="rounded-[36px] bg-slate-100 px-6 py-6 md:px-8 md:py-8 shadow-[0_40px_120px_rgba(0,0,0,0.25)]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Left image */}
              <div className="rounded-[24px] overflow-hidden bg-black">
                <Image
                  src="/case-study/finpay.png" // replace with your image
                  alt="FinPay case study"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>

              {/* Right content */}
              <div>
                <p className="text-xs font-semibold tracking-wider text-indigo-500 mb-3">
                  CASE STUDY
                </p>

                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                  FinPay – Launching a secure mobile wallet at scale
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  Softplix helped a fast-growing fintech startup design, build,
                  and launch a compliant wallet experience with seamless
                  onboarding, instant transactions, and real-time risk
                  monitoring.
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-600 text-xs font-medium">
                    Fintech
                  </span>
                  <span className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-600 text-xs font-medium">
                    Mobile & backend
                  </span>
                  <span className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-600 text-xs font-medium">
                    KYC & compliance
                  </span>
                </div>

                {/* Details */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                  <div>
                    <p className="text-sm font-semibold text-gray-900 mb-1">
                      Tech stack
                    </p>
                    <p className="text-sm text-gray-600">
                      Flutter, Node.js, PostgreSQL, Redis, AWS
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-gray-900 mb-1">
                      Challenges
                    </p>
                    <p className="text-sm text-gray-600">
                      Strict compliance, peak load performance, and
                      latency-sensitive payment flows.
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-gray-900 mb-1">
                      Solution
                    </p>
                    <p className="text-sm text-gray-600">
                      End-to-end architecture with hardened APIs, observability,
                      and battle-tested flows.
                    </p>
                  </div>
                </div>

                {/* Metrics */}
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 rounded-full bg-white text-sm font-medium text-gray-900 shadow-sm">
                    99.95% uptime
                  </span>
                  <span className="px-4 py-2 rounded-full bg-white text-sm font-medium text-gray-900 shadow-sm">
                    200k+ users in 12 months
                  </span>
                  <span className="px-4 py-2 rounded-full bg-white text-sm font-medium text-gray-900 shadow-sm">
                    40% faster onboarding
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
