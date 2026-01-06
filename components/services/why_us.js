import {
  Users,
  ShieldCheck,
  Building2,
  Headphones,
  Handshake,
  Infinity,
} from "lucide-react";

const reasons = [
  {
    title: "Experienced Development Team",
    desc: "Senior engineers and designers with deep product and platform experience.",
    icon: Users,
  },
  {
    title: "High Quality & On-Time Delivery",
    desc: "Predictable execution, transparent process, and enterprise-grade quality standards.",
    icon: ShieldCheck,
  },
  {
    title: "Custom Solutions For Every Industry",
    desc: "From fintech to SaaS, we adapt to your domain, constraints, and user needs.",
    icon: Building2,
  },
  {
    title: "24/7 Project Support",
    desc: "Proactive monitoring and responsive support for mission-critical products.",
    icon: Headphones,
  },
  {
    title: "Trusted by Startups & Enterprises",
    desc: "Long-term partnerships with high-growth teams and established organizations.",
    icon: Handshake,
  },
  {
    title: "Scalable Engagement Model",
    desc: "Engage from discovery to full delivery with a team that scales with you.",
    icon: Infinity,
  },
];

export default function WhyChooseUs() {
  return (
    <section className=" mx-4 md:mx-20 py-20 rounded-[32px] bg-[#dfe3ff] px-6 md:px-16 text-center shadow-[0_40px_120px_rgba(0,0,0,0.25)]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            Why choose our services
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-gray-600">
            Future-ready engineering, thoughtful design, and a partner mindset
            in every engagement.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-start gap-4 rounded-2xl
                bg-white/90 backdrop-blur-xl
                border border-white/40
                p-6 shadow-[0_20px_60px_rgba(0,0,0,0.15)]
                transition hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(0,0,0,0.2)]"
              >
                {/* Icon */}
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-600">
                  <Icon className="h-5 w-5 text-white" />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-base font-semibold text-gray-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
