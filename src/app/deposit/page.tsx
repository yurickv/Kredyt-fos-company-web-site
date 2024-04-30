import { SectionDepositCalc } from "@/components/deposit-page/sectionDepositCalc";
import { SectionDocuments } from "@/components/deposit-page/sectionDocuments";
import { SectionInfo } from "@/components/deposit-page/sectionInfo";
import { SectionInfoCard } from "@/components/deposit-page/sectionInfoCard";
import { SectionConsultForm } from "@/components/main-page/sectionConsult/sectionConsult";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Депозити в кредитній спілці Кредит-ФОС",
  description:
    "Види депозитів кредитної спілки Кредит-ФОС: строковий, для накопичення, на вимогу. Внести депозит можна в м.Тернопіль, вул.Франка 20 або у філіях в Тернопільській області: в смт. Козова, м. Збараж, м. Скалат, смт.Вишнівець, смт. Підволочиськ. Просте онлайн подання заявки на депозит, перелік документів для оформлення депозиту. Онлайн депозитний калькулятор",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      "max-snippet": -1,
    },
  },
};

const Deposit = () => {
  return (
    <main>
      <section className="bg-transparent min-h-[448px] py-16 md:py-[100px] lg:py-[153px]">
        <div className="fixed -top-[1px] -z-10 bg-[url('/Main-screen1.webp')] bg-center bg-cover w-full h-[630px]"></div>
        <div className="div-container">
          <h1 className="text-primary_400 text-[40px] md:text-[64px] font-extrabold">
            Разом будуємо майбутнє
          </h1>
          <div className="text-primary_400  font-extrabold flex gap-2 mt-6 text-[32px] md:text-[40px]">
            <p>Кредит ФОС - ваш партнер у фінансах</p>
          </div>
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
          <p>Депозити</p>
        </div>
      </section>
      <SectionDepositCalc />
      <SectionInfoCard />
      <SectionInfo />
      <SectionConsultForm />
      <SectionDocuments />
    </main>
  );
};
export default Deposit;
