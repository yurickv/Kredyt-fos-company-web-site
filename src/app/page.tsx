import { HeroSlider } from "@/components/main-page/heroSection";
import { SectionAdvantage } from "@/components/main-page/sectionAdvantage/sectionAdvantage";
import { SectionMilitary } from "@/components/main-page/sectionMilitary";
import NewsSlider from "@/components/main-page/sectionNews/sectionNews";
import { SectionPartners } from "@/components/main-page/sectionPartners";
import { SectionServices } from "@/components/main-page/sectionServices/sectionServices";
import dynamic from "next/dynamic";

const NewsSliderDynamic = dynamic(
  () => import("../components/main-page/sectionNews/sectionNews"),
  {
    ssr: false,
  }
);

export default function Home() {
  return (
    <main className="">
      <HeroSlider />
      <SectionServices />
      <SectionAdvantage />
      <SectionMilitary />
      <SectionPartners />
      <NewsSliderDynamic />
    </main>
  );
}
