import Image from "next/image";
import PageHero from "../services/page_hero";

export default function ContactHero() {
  return (
    <section className="py-10 px-4">
      <PageHero
        text1={"Let’s build something exceptional together"}
        text2={"Contact Us"}
        text3={
          "We’d love to hear from you. Share a brief about your idea, product, or roadmap and we’ll get back within one business day."
        }
        text4={"Product strategy & discovery"}
        text5={" Design, development & scale"}
        img={"/contact/contact_hero_2.png"}
      />
    </section>
  );
}
