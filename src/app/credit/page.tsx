import { SectionCreditCalc } from "@/components/credit-page/sectionCreditCalc";
import { SectionInfoCard } from "@/components/credit-page/sectionInfoCard";
import Link from "next/link";

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
    </main>
  );
};
export default Credit;
