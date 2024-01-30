"use client";

import { HeroSlider } from "@/components/main-page/heroSection";
import { NewsSlider } from "@/components/main-page/newsSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <div>
        <HeroSlider />
      </div>
      {/* <div>
        <NewsSlider />
      </div> */}
    </main>
  );
}
