import Image from "next/image";
export default function Services() {
  return (
    <section id="service" className="max-w-7xl mx-auto px-4 sm:px-6">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold text-gray-900">Our Services</h2>
        <p className="mt-2 text-gray-600">
          End-to-end product development for modern, scalable digital
          experiences.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <ServiceCard
          icon="/home/services/dev.png"
          title="Custom Software Development"
          desc="Tailor-made platforms, tools, and systems that align with your workflows and business goals."
        />

        <ServiceCard
          icon="/home/services/mobile_app.png"
          title="Mobile App Development"
          desc="Native and cross-platform apps for iOS & Android with delightful, performant user experiences."
        />

        <ServiceCard
          icon="/home/services/web_app.png"
          title="Web App Development"
          desc="Secure, fast, and responsive web applications built with modern frameworks and cloud-native stacks."
        />

        <ServiceCard
          icon="/home/services/ui_ux.png"
          title="UI/UX Design"
          desc="Human-centered interfaces that balance usability, aesthetics, and business outcomes."
        />

        <ServiceCard
          icon="/home/services/cloud.png"
          title="Cloud & DevOps"
          desc="Reliable infrastructure, CI/CD pipelines, and observability set up for scale from day one."
        />

        <ServiceCard
          icon="/home/services/ai.png"
          title="AI & Automation Solutions"
          desc="Integrate AI, workflows, and automation to streamline operations and unlock new value."
        />
      </div>
    </section>
  );
}
function ServiceCard({ icon, title, desc }) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-lg shadow-indigo-100 hover:shadow-xl transition">
      {/* Icon */}
      <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center text-sm font-semibold">
        <Image src={icon} alt={title} width={20} height={20} />
      </div>

      {/* Content */}
      <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>

      <p className="mt-2 text-sm text-gray-600 leading-relaxed">{desc}</p>
    </div>
  );
}
