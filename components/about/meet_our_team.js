import Image from "next/image";

const team = [
  {
    name: "Akula Akash(NITian)",
    role: "Founder",
    desc: "Leads architecture and technical strategy for complex platforms.",
    img: "/about/akash.png",
  },
  {
    name: "Harsh Kumar(NITian)",
    role: "CTO & Head of Product Design",
    desc: "Owns product discovery, UX flows, and design systems.",
    img: "/about/harsh.jpg",
  },
  {
    name: "Ravinder Banothu(NIT Rourkela)",
    role: "Engineering Lead",
    desc: "Guides delivery teams across web, mobile, and cloud.",
    img: "/about/ravindra.jpeg",
  },
];

const stats = [
  {
    label: "PROJECTS DELIVERED",
    value: "50+",
    desc: "From MVPs to enterprise platforms.",
  },
  {
    label: "SKILLED DEVELOPERS",
    value: "20+",
    desc: "Cross-functional, senior-heavy teams.",
  },
  {
    label: "YEARS COMBINED EXPERIENCE",
    value: "10+",
    desc: "Deep experience across industries.",
  },
  {
    label: "GLOBAL CLIENTS",
    value: "Worldwide",
    desc: "Startups & enterprises across regions.",
  },
];

export default function MeetOurTeam() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            Meet our team
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-gray-600">
            A tight-knit group of designers, engineers, and product experts.
          </p>
        </div>

        {/* Team Cards */}
        <div className="relative mb-12">
          {/* Glow */}
          <div className="absolute inset-0 -z-10 rounded-[40px] bg-indigo-500/20 blur-3xl" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {team.map((member, idx) => (
              <div
                key={idx}
                className="rounded-[28px] bg-white px-6 py-6 shadow-[0_30px_90px_rgba(0,0,0,0.25)]"
              >
                {/* Avatar */}
                <div className="mb-4">
                  <Image
                    src={member.img}
                    alt={member.name}
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                  />
                </div>

                {/* Name */}
                <h3 className="font-semibold text-gray-900">{member.name}</h3>

                {/* Role */}
                <p className="text-sm text-gray-500 mt-1">{member.role}</p>

                {/* Description */}
                <p className="text-sm text-gray-600 mt-4 leading-relaxed">
                  {member.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="rounded-[32px] bg-indigo-100/80 px-6 py-8 md:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((item, idx) => (
              <div
                key={idx}
                className="rounded-[24px] bg-white px-5 py-4 shadow-sm"
              >
                <p className="text-xs tracking-wider text-gray-500 mb-2">
                  {item.label}
                </p>
                <p className="text-xl font-semibold text-gray-900 mb-1">
                  {item.value}
                </p>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
