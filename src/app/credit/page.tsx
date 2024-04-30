import { SectionCreditCalc } from "@/components/credit-page/sectionCreditCalc";
import { SectionDocumentsCredit } from "@/components/credit-page/sectionDocumentsCredit";
import { SectionInfoCard } from "@/components/credit-page/sectionInfoCard";
import { SectionLendingConditions } from "@/components/credit-page/sectionLendingConditions";
import { SectionOpportunities } from "@/components/credit-page/sectionOpportunities";
import { SectionPaidCredit } from "@/components/credit-page/sectionPaidCredit";
import { SectionPreferences } from "@/components/credit-page/sectionPreferences";
import { SectionConsultForm } from "@/components/main-page/sectionConsult/sectionConsult";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Кредити готівкою від кредитної спілки Кредит-ФОС",
  description:
    "Види кредитів кредитної спілки Кредит-ФОС: споживчий, під заставу депозиту, інноваціїний, підприємницький, для діяльності в селі, для бізнесу в селі.  Кредит готівкою на руки можна отримати в м.Тернопіль, вул.Франка 20 або у філіях в Тернопільській області: в смт. Козова, м. Збараж, м. Скалат, смт.Вишнівець, смт. Підволочиськ. Просте онлайн подання заявки на кредит, прозорі умови і перелік документів для оформлення кредиту. Онлайн кредитний калькулятор з графіком платежів. Без прихованих комісій і платежів.",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      "max-snippet": -1,
    },
  },
};

const Credit = () => {
  return (
    <main>
      <section className="bg-transparent min-h-[448px] py-16 md:py-[100px] lg:py-[153px]">
        <div className="fixed -top-[1px] -z-10 bg-[url('/Main-screen-1.webp')] bg-center bg-cover w-full h-[670px]"></div>
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
          <p>Кредити</p>
        </div>
      </section>
      <SectionCreditCalc />
      <SectionInfoCard />
      <SectionLendingConditions />
      <SectionPreferences />
      <SectionConsultForm />
      <SectionDocumentsCredit />
      <SectionOpportunities />
      <SectionPaidCredit />
    </main>
  );
};
export default Credit;
