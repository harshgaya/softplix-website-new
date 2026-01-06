"use client";

import PageCTO from "../services/page_cto";

export default function ContactCta() {
  return (
    <section className="py-16 px-4">
      <PageCTO
        text1={"Looking to start your next project?"}
        text2={
          "Share your idea, brief, or existing product and we&apos;ll outline  how Softplix can help design, engineer, and scale it."
        }
        text3={"Quick discovery call"}
        text4={" No obligation to proceed"}
      />
    </section>
  );
}
