import Image from "next/image";
import PageHero from "../services/page_hero";

export default function AboutHero() {
  return (
    <section className="py-10 px-4">
      <PageHero
        text1={"Premium software studio for ambitious teams"}
        text2={"About Softplix"}
        text3={
          "We build powerful, scalable, and innovative software solutions for the modern world."
        }
        text4={"Global software development agency"}
        text5={"Product, platforms"}
        img={"/about/about_hero.png"}
      />
    </section>
  );
}
