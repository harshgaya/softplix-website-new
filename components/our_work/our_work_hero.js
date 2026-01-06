import Image from "next/image";
import PageHero from "../services/page_hero";

export default function OurWorkHero() {
  return (
    <section className="py-10 px-4">
      <PageHero
        text1={" Selected work from the Softplix studio"}
        text2={"Our Work"}
        text3={
          "Explore the projects we’ve built for clients across the world—  from product MVPs to full-scale platforms."
        }
        text4={" Mobile, web, cloud & AI"}
        text5={" Startup & enterprise teams"}
        img={"/our_work/our_work_hero.png"}
      />
    </section>
  );
}
