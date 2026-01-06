"use client";

import PageCTO from "./page_cto";

export default function CTASection() {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 pb-10">
      <PageCTO
        text1={"Ready to build your next project?"}
        text2={
          " Partner with Softplix to design, build, and scale world-class software tailored to your business."
        }
        text3={" Response in under 24 hours"}
        text4={" No obligations • Just a conversation"}
      />
    </section>
  );
}
