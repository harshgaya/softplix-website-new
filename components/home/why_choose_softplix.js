import { Rocket, ShieldCheck, Users, Headset } from "lucide-react";

export default function WhyChooseSoftplix() {
  const features = [
    {
      title: "Fast Delivery",
      desc: "Ship MVPs and iterations quickly without compromising on quality.",
      icon: Rocket,
      bg: "bg-indigo-100",
      iconColor: "text-indigo-600",
    },
    {
      title: "Top-Notch Quality",
      desc: "Robust architecture, clean code, and meticulous testing baked in.",
      icon: ShieldCheck,
      bg: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      title: "Experienced Developers",
      desc: "A senior team with deep experience across industries and stacks.",
      icon: Users,
      bg: "bg-yellow-100",
      iconColor: "text-yellow-600",
    },
    {
      title: "24/7 Support",
      desc: "Responsive, proactive support to keep your systems running.",
      icon: Headset,
      bg: "bg-sky-100",
      iconColor: "text-sky-600",
    },
  ];

  return (
    <section className="w-full py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Outer container */}
        <div className="rounded-3xl bg-gradient-to-b from-indigo-200/70 to-indigo-100/70 p-8 md:p-12">
          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
              Why Choose Softplix
            </h2>
            <p className="mt-2 text-gray-600 text-sm md:text-base">
              A small, focused team delivering premium software with
              enterprise-grade quality.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
                >
                  {/* Icon */}
                  <div
                    className={`w-12 h-12 flex items-center justify-center rounded-full ${item.bg} mb-4`}
                  >
                    <Icon className={`w-6 h-6 ${item.iconColor}`} />
                  </div>

                  {/* Text */}
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
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
