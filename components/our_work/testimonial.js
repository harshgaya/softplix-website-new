import Image from "next/image";

const testimonials = [
  {
    quote:
      "Softplix felt like an extension of our own product team. They shipped fast, communicated clearly, and cared deeply about the outcome.",
    name: "Don MCcrea (USA)",
    role: "Founder, Your Business Legacy",
    img: "/our_work/don.jpg",
  },
  {
    quote:
      "From UX flows to infrastructure, everything was designed with scale in mind. We launched on time and onboarded thousands of users smoothly.",
    name: "Dinesh Poojary (India)",
    role: "Co-founder Happy Tokens",
    img: "/clients/daniel.jpg",
  },
  {
    quote:
      "Their engineering team handled complex healthcare requirements without slowing down delivery. We’d happily work with Softplix again.",
    name: "Sri Chinnamatur (USA)",
    role: "Founder, BridgrAI",
    img: "/clients/emily.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            What our clients say
          </h2>
          <p className="mt-2 text-gray-600 text-sm md:text-base">
            Teams across industries trust Softplix to design, build, and grow
            their products.
          </p>
        </div>

        {/* Cards */}
        <div className="relative">
          {/* Glow */}
          <div className="absolute inset-0 -z-10 rounded-[40px] bg-indigo-500/20 blur-3xl" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((item, idx) => (
              <div
                key={idx}
                className="rounded-[28px] bg-white px-6 py-6 shadow-[0_30px_90px_rgba(0,0,0,0.25)]"
              >
                {/* Quote */}
                <p className="text-gray-700 leading-relaxed mb-6">
                  “{item.quote}”
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <Image
                    src={item.img}
                    alt={item.name}
                    width={40}
                    height={40}
                    className="rounded-full object-cover"
                  />

                  <div>
                    <p className="text-sm font-semibold text-gray-900">
                      {item.name}
                    </p>
                    <p className="text-xs text-gray-500">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
