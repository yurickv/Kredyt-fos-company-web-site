import { AboutUsSection } from "@/components/about-usPage/aboutSections";
import AchievementsSection from "@/components/about-usPage/achievementsSection";
import { PublicInfoSection } from "@/components/about-usPage/publicInfoSection";
import { ValuesEmploeesSection } from "@/components/about-usPage/valuesEmploeesSection";
import NewsSliderWrapper from "@/components/main-page/sectionNews/NewsSliderWrapper";
import { Metadata } from "next";

import Link from "next/link";

export const metadata: Metadata = {
  title: "Нормативні документи кредитної спілки Кредит-ФОС",
  description:
    "Опис структури керівництва кредитної спілки, новини, цінності та досягнення.",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      "max-snippet": -1,
    },
  },
};

const AboutUs = () => {
  return (
    <main>
      <section className='bg-transparent min-h-[300px] py-16 md:py-[100px] lg:py-[120px]'>
        <div className="fixed -top-[1px] -z-10 bg-[url('/Main-screen-1.webp')] bg-center bg-cover w-full h-[490px]"></div>
        <div className='div-container'>
          <h1 className='text-primary_400  font-extrabold text-[32px] md:text-[40px]'>
            Кредит ФОС - ваш партнер у фінансах
          </h1>
        </div>
      </section>
      <section className='bg-netural_100'>
        <div className='div-container text-primary_200 flex gap-2 pt-4'>
          <Link
            href='/'
            className='text-netural_300 hover:text-primary_200 transition-colors duration-300'
          >
            Домашня
          </Link>
          <span>&#8250;</span>
          <p>Про нас</p>
        </div>
      </section>
      <AboutUsSection />
      <NewsSliderWrapper />
      {/* <ValuesEmploeesSection /> */}
      <AchievementsSection />
      <PublicInfoSection />
    </main>
  );
};
export default AboutUs;
