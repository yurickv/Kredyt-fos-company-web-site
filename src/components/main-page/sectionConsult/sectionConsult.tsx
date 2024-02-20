import { ConsultForm } from "./formConsult";

export const SectionConsultForm = () => {
  return (
    <section className="py-[50px] px-4 md:px-[78px] lg:px-[120px] md:py-[100px] bg-gradient_section flex flex-col lg:flex-row gap-6 lg:gap-[50px]">
      <div>
        <h2 className="title">Замовте безкоштовну консультацію</h2>
        <div className="w-[50px] h-1 rounded-full bg-primary_300 my-6 hidden lg:block"></div>
        <p className="text-[16px] md:text-[18px] text-primary_700">
          Наш менеджер зв’яжеться з вами і відповість на всі запитання
        </p>
      </div>
      <div>
        <ConsultForm />
      </div>
    </section>
  );
};
