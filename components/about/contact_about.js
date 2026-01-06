"use client";

import PageCTO from "../services/page_cto";

export default function FinalCTA() {
  return (
    <section className="py-16 px-4">
      <PageCTO
        text1={"Want to work with a team that delivers results?"}
        text2={
          "  Tell us about your product, and we&apos;ll share how Softplix can help design, build, and scale it with confidence."
        }
        text3={"Quick discovery call"}
        text4={" No obligation to proceed"}
      />
    </section>
  );
}
