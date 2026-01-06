import PageHero from "./page_hero";

export default function ServicesHeader() {
  return (
    <section className="py-20 px-4">
      <PageHero
        text1={"Premium software services crafted for ambitious teams"}
        text2={" Our Services"}
        text3={"Powerful solutions crafted to accelerate your business growth."}
        text4={"End-to-end product delivery"}
        text5={"Cloud-native & scalable"}
        img={"/about/about_hero.png"}
      />
    </section>
  );
}
