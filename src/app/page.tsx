"use client";

import { HeroSlider } from "@/components/main-page/heroSection";
import { SectionAdvantage } from "@/components/main-page/sectionAdvantage/sectionAdvantage";
import { SectionMilitary } from "@/components/main-page/sectionMilitary";
import { NewsSlider } from "@/components/main-page/sectionNews";
import { SectionServices } from "@/components/main-page/sectionServices/sectionServices";

export default function Home() {
  return (
    <main className="">
      <HeroSlider />
      <SectionServices />
      <SectionAdvantage />
      <SectionMilitary />
      {/* <div>
        <NewsSlider />
      </div> */}
    </main>
  );
}
