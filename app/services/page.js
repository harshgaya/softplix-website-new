import MissionVision from "@/components/about/mission";
import CTASection from "@/components/services/contact_box";
import HowWeWork from "@/components/services/how_we_work";
import ServicesHeader from "@/components/services/services_header";
import WhatWeCanBuild from "@/components/services/what_we_can_build";
import WhyChooseUs from "@/components/services/why_us";

export default function Services() {
  return (
    <div className="text-black bg-gradient-to-b from-indigo-100 via-indigo-50 to-white">
      <ServicesHeader />
      <WhatWeCanBuild />
      <WhyChooseUs />
      <HowWeWork />
      <CTASection />
    </div>
  );
}
