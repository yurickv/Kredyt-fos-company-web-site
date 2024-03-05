import { SectionDepositCalc } from "@/components/deposit-page/sectionDepositCalc";
import { SectionDocuments } from "@/components/deposit-page/sectionDocuments";
import { SectionInfoCard } from "@/components/deposit-page/sectionInfoCard";
import { SectionConsultForm } from "@/components/main-page/sectionConsult/sectionConsult";

import Link from "next/link";

const Deposit = () => {
  return (
    <main>
      <section className="bg-transparent h-[300px] pt-20 pb-10 md:py-[100px]">
        <div className="fixed -top-[1px] -z-10 bg-[url('/Main-screen1.webp')] bg-center bg-cover w-full h-[500px]"></div>
        <div className="div-container">
          <h1 className="text-primary_400 text-[40px] md:text-[64px] font-extrabold">
            Депозити
          </h1>
          <div className="text-primary_400  font-extrabold flex gap-2 mt-6 mx">
            <Link
              href="/"
              className="hover:text-primary_300 transition-colors duration-300"
            >
              Домашня
            </Link>
            <span>&#8250;</span>
            <p>Депозити</p>
          </div>
        </div>
      </section>
      <SectionDepositCalc />
      <SectionInfoCard />
      <SectionConsultForm />
      <SectionDocuments />
    </main>
  );
};
export default Deposit;
