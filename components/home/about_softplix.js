import Image from "next/image";

export default function AboutSoftplix() {
  return (
    <section className="w-full py-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            About Softplix
          </h2>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Softplix is a premium software studio partnering with ambitious
            teams to design, build, and scale digital products. From early-stage
            prototypes to enterprise platforms, we focus on reliability,
            performance, and craft.
          </p>

          <p className="mt-3 text-gray-600 leading-relaxed">
            We combine product thinking, engineering excellence, and thoughtful
            design to create experiences your users will love.
          </p>

          {/* STATS */}
          <div className="mt-8 flex flex-wrap gap-4">
            <StatCard title="50+ Projects" subtitle="Delivered end-to-end" />
            <StatCard title="10+ Years" subtitle="Building digital products" />
            <StatCard title="Global Clients" subtitle="Across 8+ countries" />
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          <Image
            src="/home/about_softplix.png" // replace with your image path
            alt="Softplix Team"
            width={800}
            height={500}
            className="object-cover w-full h-full grayscale"
            priority
          />

          <div className="absolute inset-0 rounded-3xl pointer-events-none ring-1 ring-white/20" />
        </div>
      </div>
    </section>
  );
}

/* ---------- Small reusable stat pill ---------- */
function StatCard({ title, subtitle }) {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl px-5 py-4 shadow-sm">
      <p className="text-sm font-semibold text-gray-900">{title}</p>
      <p className="text-xs text-gray-500 mt-1">{subtitle}</p>
    </div>
  );
}
