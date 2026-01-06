"use client";

import PageCTO from "../services/page_cto";

export default function ProjectCTA() {
  return (
    <section className="py-16 px-4">
      <PageCTO
        text1={" Have a project in mind? Let’s build it together."}
        text2={
          "Share your idea, roadmap, or existing product and we&apos;ll show  you how Softplix can help design, develop, and scale it."
        }
        text3={"Discovery call in days"}
        text4={" Tailored proposal"}
      />
    </section>
  );
}
