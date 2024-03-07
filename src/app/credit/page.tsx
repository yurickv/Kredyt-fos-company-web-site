import { SectionCreditCalc } from "@/components/credit-page/sectionCreditCalc";
import Link from "next/link";

const Credit = () => {
  return (
    <main>
      <section className="bg-transparent h-[300px] pt-20 pb-10 md:py-[100px]">
        <div className="fixed -top-[1px] -z-10 bg-[url('/Main-screen1.webp')] bg-center bg-cover w-full h-[500px]"></div>
        <div className="div-container">
          <h1 className="text-primary_400 text-[40px] md:text-[64px] font-extrabold">
            Кредити
          </h1>
          <div className="text-primary_400  font-extrabold flex gap-2 mt-6 mx">
            <Link
              href="/"
              className="hover:text-primary_300 transition-colors duration-300"
            >
              Домашня
            </Link>
            <span>&#8250;</span>
            <p>Кредити</p>
          </div>
        </div>
      </section>
      <SectionCreditCalc />
    </main>
  );
};
export default Credit;
