import FeaturedCaseStudy from "@/components/our_work/case_study";
import ProjectCTA from "@/components/our_work/our_project";
import OurWorkHero from "@/components/our_work/our_work_hero";
import FeaturedProjects from "@/components/our_work/our_works";
import TechnologiesTools from "@/components/our_work/tech_stacks";
import Testimonials from "@/components/our_work/testimonial";

export default function OurWork() {
  return (
    <div className="text-black bg-gradient-to-b from-indigo-100 via-indigo-50 to-white">
      <OurWorkHero />
      <FeaturedProjects />
      {/* <FeaturedCaseStudy /> */}
      <TechnologiesTools />
      <Testimonials />
      <ProjectCTA />
    </div>
  );
}
