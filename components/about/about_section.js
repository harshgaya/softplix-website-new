import Image from "next/image";

export default function WhoWeAre() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div className="text-left">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            Who we are
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-gray-600">
            Softplix is a global software development agency focused on building
            custom apps, websites, and cloud-native systems that help startups
            and enterprises grow through technology.
          </p>

          <p className="mt-3 max-w-2xl mx-auto text-gray-600">
            We partner with forward-thinking teams to design, build, and scale
            digital products that feel fast, intuitive, and reliable. From
            concept to launch, we combine strategic thinking, sharp UI/UX, and
            robust engineering to deliver software that actually moves the
            needle for your business.
          </p>

          <p className="mt-3 max-w-2xl mx-auto text-gray-600">
            Our teams work across time zones and industries, collaborating
            closely with founders, product leaders, and CTOs to transform
            complex ideas into elegant, maintainable solutions.
          </p>
        </div>

        {/* RIGHT IMAGE CARD */}
        <div className="relative">
          {/* Glow */}
          <div className="absolute inset-0 -z-10 rounded-[28px] bg-indigo-500/20 blur-3xl" />

          <div className="overflow-hidden rounded-[20px]">
            <Image
              src="/about/who_we.png" // replace with your image
              alt="Team collaboration"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
