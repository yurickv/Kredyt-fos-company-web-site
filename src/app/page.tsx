"use client";

import { HeroSlider } from "@/components/main-page/heroSection";
import { NewsSlider } from "@/components/main-page/newsSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <HeroSlider />
      </div>
      <div>
        <NewsSlider />
      </div>
    </main>
  );
}
