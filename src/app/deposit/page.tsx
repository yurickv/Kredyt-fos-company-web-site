import { SectionAdvantage } from "@/components/main-page/sectionAdvantage/sectionAdvantage";
import { SectionMilitary } from "@/components/main-page/sectionMilitary";
import { SectionPartners } from "@/components/main-page/sectionPartners";
import { SectionDepositCalc } from "@/components/deposit-page/sectionDepositCalc";

const Deposit = () => {
  return (
    <main>
      <section className="bg-transparent h-[300px] pt-20 pb-10 md:py-[100px] mx-auto">
        <div className="fixed -top-[50px] -z-10 bg-[url('/Main-screen1.webp')] bg-center bg-cover w-full h-[500px]"></div>

        <h1 className="text-center text-primary_400 text-[40px] md:text-[64px] font-extrabold">
          Депозити
        </h1>
      </section>
      <SectionDepositCalc />
      <SectionAdvantage />
      <SectionMilitary />
      <SectionPartners />
    </main>
  );
};
export default Deposit;
