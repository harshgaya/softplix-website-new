import { Code, Smartphone, Globe, Palette, Cloud, Cpu } from "lucide-react";

const services = [
  {
    title: "Custom Software Development",
    desc: "Tailored software products designed to match your business goals, workflows, and long-term roadmap.",
    tags: "APIs • Platforms • Internal tools",
    icon: Code,
  },
  {
    title: "Mobile App Development",
    desc: "High-performance iOS & Android apps with smooth, modern UI and secure, reliable backends.",
    tags: "Native • Cross-platform • Product-led",
    icon: Smartphone,
  },
  {
    title: "Web App Development",
    desc: "Fast, scalable, and secure web-based applications built on modern cloud-native architectures.",
    tags: "Dashboards • Portals • SaaS",
    icon: Globe,
  },
  {
    title: "UI/UX Design",
    desc: "Beautiful, user-centered designs that enhance digital experiences and increase engagement.",
    tags: "Product UX • Design systems",
    icon: Palette,
  },
  {
    title: "Cloud & DevOps Services",
    desc: "Cloud migration, automation, CI/CD, and infrastructure optimization for resilient systems.",
    tags: "Kubernetes • CI/CD • Observability",
    icon: Cloud,
  },
  {
    title: "AI & Automation Solutions",
    desc: "Smart automation tools and AI-driven apps that streamline operations and unlock new value.",
    tags: "LLMs • Workflows • Analytics",
    icon: Cpu,
  },
];

export default function WhatWeCanBuild() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="rounded-2xl border border-white/40 bg-white/90 backdrop-blur-xl
                shadow-[0_20px_60px_rgba(0,0,0,0.15)]
                p-6 transition hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(0,0,0,0.2)]"
              >
                {/* Icon */}
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-600">
                  <Icon className="h-5 w-5 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                  {item.desc}
                </p>

                {/* Tags */}
                <span className="inline-block rounded-full bg-gray-100 px-4 py-1 text-xs font-medium text-gray-700">
                  {item.tags}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
