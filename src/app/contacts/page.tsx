import Accordion from "@/components/contacts-page/accordion";
import { SectionMap } from "@/components/main-page/sectionMap";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Контакти кредитної спілки Кредит-ФОС та її філій",
  description:
    "Адреса, номер телефону, графік роботи кредитної спілки Кредит-ФОС та всіх філій.  Філії знаходяться в Тернопільській області: в смт. Козова, м. Збараж, м. Скалат, смт.Вишнівець, смт. Підволочиськ",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      "max-snippet": -1,
    },
  },
};

const Contacts = () => {
  return (
    <main>
      <section className="bg-transparent min-h-[300px] py-16 md:py-[100px] lg:py-[120px]">
        <div className="fixed -top-[1px] -z-10 bg-[url('/Main-screen-1.webp')] bg-center bg-cover w-full h-[490px]"></div>
        <div className="div-container">
          <h1 className="text-primary_400  font-extrabold text-[32px] md:text-[40px]">
            Кредит ФОС - ваш партнер у фінансах
          </h1>
        </div>
      </section>
      <section className="bg-netural_100">
        <div className="div-container text-primary_200 flex gap-2 pt-4">
          <Link
            href="/"
            className="text-netural_300 hover:text-primary_200 transition-colors duration-300"
          >
            Домашня
          </Link>
          <span>&#8250;</span>
          <p>Контакти</p>
        </div>
      </section>
      <section className="pt-6 pb-[50px] bg-netural_100">
        <div className="div-container">
          <h2 className="title">Контакти</h2>
          <Accordion />
        </div>
      </section>
      <SectionMap />
    </main>
  );
};
export default Contacts;
