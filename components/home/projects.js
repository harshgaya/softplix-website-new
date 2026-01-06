"use client";

import Image from "next/image";
import TechItem from "./tech-item";

const PROJECTS = [
  {
    title: "Dakhani Swarajya",
    link: "https://dakhaniswarajya.com/",
    description:
      "Dakhani Swarajya is a top Mumbai-based daily newspaper, known for credible journalism and read by more than 2,00,000 active readers every day.",
    image: "/home/projects/dakhni-3.png",
    tags: [
      {
        name: "Flutter",
        icon: "/home/projects/tech/flutter.png",
      },
      {
        name: "Node Js",
        icon: "/home/projects/tech/nodejs.png",
      },
      {
        name: "Python",
        icon: "/home/projects/tech/python.png",
      },
      {
        name: "Secure API",
        icon: "/home/projects/tech/secure.png",
      },
    ],
  },
  {
    title: "Happy Tokens",
    link: "https://happytokens.in/",
    description:
      "A merchant payments and cashback app that helps businesses boost revenue by 25%+, improve customer retention, and track transactions in real time.",
    image: "/home/projects/happy-token.png",
    tags: [
      {
        name: "Flutter",
        icon: "/home/projects/tech/flutter.png",
      },
      {
        name: "Node Js",
        icon: "/home/projects/tech/nodejs.png",
      },
      {
        name: "Secure API",
        icon: "/home/projects/tech/secure.png",
      },
      {
        name: "Python",
        icon: "/home/projects/tech/python.png",
      },
      {
        name: "SQL",
        icon: "/home/projects/tech/postgre.png",
      },
    ],
  },
  {
    title: "BridgrAI",
    link: "https://getbridgr.com/",
    description:
      "Bridgr addresses the $2.6 trillion global funding gap through AI-powered microfinance, connecting underserved entrepreneurs with impact-focused investors and mentors.",

    image: "/home/projects/bridgr.png",
    tags: [
      {
        name: "Flutter",
        icon: "/home/projects/tech/flutter.png",
      },
      {
        name: "Node Js",
        icon: "/home/projects/tech/nodejs.png",
      },
      {
        name: "Secure API",
        icon: "/home/projects/tech/secure.png",
      },
      {
        name: "Python",
        icon: "/home/projects/tech/python.png",
      },
      {
        name: "SQL",
        icon: "/home/projects/tech/postgre.png",
      },
    ],
  },
];

export default function Projects() {
  return (
    <section className=" text-black pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            Our Successful Projects
          </h2>
          <p className="mt-2 text-gray-600 text-sm md:text-base">
            A glimpse into the products we have crafted for startups and
            enterprises worldwide.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ title, description, image, tags, link }) {
  return (
    <div className="group">
      {/* Image */}
      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-3">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain transition-transform duration-300 group-hover:scale-[1.03]"
          priority
        />
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-[#111827] mb-2">{title}</h3>

      {/* Description */}
      <p className="text-gray-600 text-[15px] mb-4 leading-relaxed">
        {description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <TechItem name={tag.name} icon={tag.icon} key={tag.name} />
        ))}
      </div>

      {/* Link */}
      <a
        href={link}
        className="text-sm text-[#111827] hover:text-gray-500 transition flex items-center gap-1"
      >
        View Project <span>→</span>
      </a>
    </div>
  );
}
