import { HeroSlider } from "@/components/main-page/heroSection";
import { SectionAccessibility } from "@/components/main-page/sectionAccessibility/sectionAccessibility";
import { SectionAdvantage } from "@/components/main-page/sectionAdvantage/sectionAdvantage";
import { SectionConsultForm } from "@/components/main-page/sectionConsult/sectionConsult";
import { SectionMap } from "@/components/main-page/sectionMap";
import { SectionMilitary } from "@/components/main-page/sectionMilitary";
import NewsSliderWrapper from "@/components/main-page/sectionNews/NewsSliderWrapper";
import { SectionPartners } from "@/components/main-page/sectionPartners";
import { SectionServices } from "@/components/main-page/sectionServices/sectionServices";

export default function Home() {
  return (
    <main className=''>
      <HeroSlider />
      <SectionServices />
      <SectionAdvantage />
      <SectionAccessibility />
      <SectionMilitary />
      <SectionPartners />
      <NewsSliderWrapper />
      <SectionConsultForm />
      <SectionMap />
    </main>
  );
}
