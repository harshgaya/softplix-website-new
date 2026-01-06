import { CheckCircle, Users, Layers, LifeBuoy } from "lucide-react";

const reasons = [
  {
    icon: CheckCircle,
    title: "Reliable delivery",
    desc: "Structured processes and clear milestones keep projects on track.",
  },
  {
    icon: Users,
    title: "Experienced engineers",
    desc: "Senior talent across backend, frontend, mobile, and cloud.",
  },
  {
    icon: Layers,
    title: "Scalable solutions",
    desc: "Built for growth, observability, and long-term maintainability.",
  },
  {
    icon: LifeBuoy,
    title: "Long-term support",
    desc: "Post-launch enhancements, monitoring, and technical guidance.",
  },
];

export default function WhyChooseSoftplix() {
  return (
    <section className="py-16 px-4">
      <div
        className="
          max-w-6xl mx-auto
          rounded-[32px]
          bg-gradient-to-r from-[#0b1224] via-[#121a3a] to-[#2b2f7f]
          px-6 py-10 md:px-12 md:py-12
          shadow-[0_50px_150px_rgba(0,0,0,0.6)]
        "
      >
        {/* Heading */}
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-3">
            Why choose Softplix
          </h2>
          <p className="text-indigo-200/80 max-w-2xl">
            A reliable partner with experienced engineers, scalable solutions,
            and long-term support built in.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="
                  rounded-[20px]
                  bg-white/5
                  backdrop-blur-xl
                  px-5 py-6
                  border border-white/10
                "
              >
                <div className="mb-4">
                  <Icon size={22} className="text-indigo-400" />
                </div>

                <h3 className="text-white font-medium mb-2">{item.title}</h3>

                <p className="text-sm text-indigo-200/70 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
