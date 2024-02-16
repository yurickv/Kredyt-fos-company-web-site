"use client";

import { HeroSlider } from "@/components/main-page/heroSection";
import { SectionAdvantage } from "@/components/main-page/sectionAdvantage/sectionAdvantage";
import { NewsSlider } from "@/components/main-page/sectionNews";
import { SectionServices } from "@/components/main-page/sectionServices/sectionServices";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <HeroSlider />
      <SectionServices />
      <SectionAdvantage />
      {/* <div>
        <NewsSlider />
      </div> */}
    </main>
  );
}
