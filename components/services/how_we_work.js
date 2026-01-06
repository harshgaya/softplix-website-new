"use client";

const steps = [
  {
    id: 1,
    title: "DISCOVER",
    heading: "Requirement Analysis",
    desc: "We analyze your goals, users, constraints, and success metrics to define a clear scope.",
  },
  {
    id: 2,
    title: "DESIGN & BUILD",
    heading: "Design & Development",
    desc: "Our design and engineering teams collaborate to craft the architecture, UX, and implementation.",
  },
  {
    id: 3,
    title: "VALIDATE",
    heading: "Testing & Quality Assurance",
    desc: "Automated and manual testing ensure reliability, performance, and security.",
  },
  {
    id: 4,
    title: "LAUNCH & GROW",
    heading: "Deployment & Support",
    desc: "We handle deployment, monitoring, and continuous improvements post-launch.",
  },
];

export default function HowWeWork() {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-10">
      <div className="text-center pb-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
          Why choose our services
        </h2>
        <p className="mt-3 max-w-2xl mx-auto text-gray-600">
          Future-ready engineering, thoughtful design, and a partner mindset in
          every engagement.
        </p>
      </div>

      <div className="relative rounded-3xl border border-white/40 shadow-[0_40px_120px_rgba(0,0,0,0.15)] backdrop-blur-xl px-6 py-10 md:px-12 md:py-14">
        {/* Top Line */}
        {/* <div className="absolute top-12 left-10 right-10 h-[2px] bg-indigo-200 hidden md:block" /> */}

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {steps.map((step) => (
            <div key={step.id} className="relative text-center md:text-left">
              {/* Number Circle */}
              <div className="relative z-10 mx-auto md:mx-0 w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-semibold shadow-lg">
                {step.id}
              </div>

              {/* Content */}
              <div className="mt-6">
                <p className="text-xs font-semibold tracking-widest text-indigo-600">
                  {step.title}
                </p>

                <h3 className="mt-2 text-lg font-semibold text-gray-900">
                  {step.heading}
                </h3>

                <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
