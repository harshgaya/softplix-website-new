import ContactCta from "@/components/contact/contact_cta";
import ContactHero from "@/components/contact/contatc_hero";
import FindUs from "@/components/contact/find_us";
import SocialConnect from "@/components/contact/social_contact";
import ContactSection from "@/components/home/contact_form";

export default function AboutUs() {
  return (
    <div className="text-black bg-gradient-to-b from-indigo-100 via-indigo-50 to-white">
      <ContactHero />
      {/* <ContactForm /> */}
      <ContactSection />
      <FindUs />
      {/* <SocialConnect /> */}
      {/* <ContactCta /> */}
    </div>
  );
}
