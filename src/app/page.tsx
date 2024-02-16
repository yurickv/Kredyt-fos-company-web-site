"use client";

import { HeroSlider } from "@/components/main-page/heroSection";
import { NewsSlider } from "@/components/main-page/sectionNews";
import { SectionServices } from "@/components/main-page/sectionServices";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <HeroSlider />
      <SectionServices />
      {/* <div>
        <NewsSlider />
      </div> */}
    </main>
  );
}
