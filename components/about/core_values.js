import {
  Sparkles,
  ShieldCheck,
  MessageSquare,
  Smile,
  RefreshCw,
  Handshake,
} from "lucide-react";

const values = [
  {
    icon: Sparkles,
    title: "Innovation",
    desc: "We explore modern stacks, tools, and patterns to keep your products ahead of the curve.",
  },
  {
    icon: ShieldCheck,
    title: "Quality",
    desc: "From UX to infrastructure, we sweat the details to deliver robust, maintainable systems.",
  },
  {
    icon: MessageSquare,
    title: "Transparency",
    desc: "Clear communication, visible progress, and no surprises throughout the engagement.",
  },
  {
    icon: Smile,
    title: "Customer-first",
    desc: "We align with your goals, users, and constraints to build what truly matters.",
  },
  {
    icon: RefreshCw,
    title: "Continuous improvement",
    desc: "We iterate on processes, code, and design to get better with every project.",
  },
  {
    icon: Handshake,
    title: "Long-term partnerships",
    desc: "We look beyond the launch, supporting you as products scale and evolve.",
  },
];

export default function CoreValues() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            Core values
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-gray-600">
            A culture built on curiosity, quality, and long-term partnerships.
          </p>
        </div>

        {/* Grid Wrapper */}
        <div className="relative">
          {/* Glow */}
          <div className="absolute inset-0 -z-10 rounded-[40px] bg-indigo-500/20 blur-3xl" />

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="rounded-[28px] bg-white px-6 py-6 shadow-[0_30px_90px_rgba(0,0,0,0.25)]"
                >
                  {/* Icon */}
                  <div className="mb-4">
                    <div className=" flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-indigo-600">
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
