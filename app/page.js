import AboutSoftplix from "@/components/home/about_softplix";
import ContactSection from "@/components/home/contact_form";
import HeroSection from "@/components/home/hero-section";
import Services from "@/components/home/home-service";
import Projects from "@/components/home/projects";
import WhyChooseSoftplix from "@/components/home/why_choose_softplix";
import Image from "next/image";

export default function Home() {
  return (
    <div className="text-black bg-gradient-to-b from-indigo-100 via-indigo-50 to-white">
      <HeroSection />
      <Services />
      <WhyChooseSoftplix />
      <Projects />
      <AboutSoftplix />
      <div className="py-20">
        <ContactSection />
      </div>
    </div>
  );
}
