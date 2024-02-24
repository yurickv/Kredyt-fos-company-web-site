import { ConsultForm } from "./formConsult";

export const SectionConsultForm = () => {
  return (
    <section className="py-[50px] px-4 md:px-[78px] lg:px-[120px] md:py-[100px] bg-gradient_section mx-auto">
      <div className="flex flex-col lg:flex-row gap-6 lg:justify-between lg:gap-[50px] md:max-w-[724px] lg:max-w-[1296px] lg:mx-auto">
        <div className="lg:max-w-[502px]">
          <h2 className="title">Замовте безкоштовну консультацію</h2>
          <div className="w-[50px] h-1 rounded-full bg-primary_300 my-6 hidden lg:block"></div>
          <p className="text-[16px] md:text-[18px] text-primary_700 mt-4">
            Наш менеджер зв’яжеться з вами і відповість на всі запитання
          </p>
        </div>
        <ConsultForm />
      </div>
    </section>
  );
};
