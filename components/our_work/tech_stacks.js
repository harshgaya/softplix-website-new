import {
  Smartphone,
  LayoutGrid,
  Server,
  Cloud,
  Database,
  Brain,
  GitBranch,
  ShieldCheck,
} from "lucide-react";

const tools = [
  {
    icon: Smartphone,
    title: "Flutter",
    desc: "Cross-platform mobile apps with native performance.",
  },
  {
    icon: LayoutGrid,
    title: "React",
    desc: "Modern frontends and rich web experiences.",
  },
  {
    icon: Server,
    title: "Node.js & Python",
    desc: "APIs, microservices, and AI-powered backends.",
  },
  {
    icon: Cloud,
    title: "AWS & Cloudflare",
    desc: "Cloud hosting, edge delivery, and reliability.",
  },
  {
    icon: Database,
    title: "MongoDB & SQL",
    desc: "Relational and document data at scale.",
  },
  {
    icon: Brain,
    title: "AI & ML",
    desc: "Personalization, predictions, and automation.",
  },
  {
    icon: GitBranch,
    title: "CI/CD",
    desc: "Automated testing, deployments, and releases.",
  },
  {
    icon: ShieldCheck,
    title: "Security & observability",
    desc: "Monitoring, logging, and secure-by-design practices.",
  },
];

export default function TechnologiesTools() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            Technologies & tools
          </h2>
          <p className="mt-2 text-gray-600 text-sm md:text-base">
            We use a modern, battle-tested stack to ship robust, scalable
            products.
          </p>
        </div>

        {/* Grid */}
        <div className="relative">
          {/* Glow */}
          <div className="absolute inset-0 -z-10 rounded-[40px] bg-indigo-500/20 blur-3xl" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tools.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="rounded-[28px] bg-white px-6 py-6 shadow-[0_30px_90px_rgba(0,0,0,0.25)]"
                >
                  {/* Icon with rounded background */}
                  <div className="mb-4">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-indigo-500">
                      <Icon size={20} className="text-white" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>

                  {/* Description */}
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
