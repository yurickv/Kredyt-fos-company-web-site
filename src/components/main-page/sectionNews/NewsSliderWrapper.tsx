"use client";

import dynamic from "next/dynamic";

// Динамічний імпорт без SSR
const NewsSliderDynamic = dynamic(() => import("./sectionNews"), {
  ssr: false,
});

export default function NewsSliderWrapper() {
  return <NewsSliderDynamic />;
}
