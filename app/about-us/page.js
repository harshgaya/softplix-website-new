import AboutHero from "@/components/about/about_hero";
import WhoWeAre from "@/components/about/about_section";
import FinalCTA from "@/components/about/contact_about";
import CTASectionAbout from "@/components/about/contact_about";
import CoreValues from "@/components/about/core_values";
import MeetOurTeam from "@/components/about/meet_our_team";
import MissionVision from "@/components/about/mission";
import WhyChooseSoftplix from "@/components/about/why_softplix";

export default function AboutUs() {
  return (
    <div className="text-black bg-gradient-to-b from-indigo-100 via-indigo-50 to-white">
      <AboutHero />
      <WhoWeAre />
      <MissionVision />
      <CoreValues />
      <MeetOurTeam />
      <WhyChooseSoftplix />
      <FinalCTA />
    </div>
  );
}
