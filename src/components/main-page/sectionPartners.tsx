import Image from "next/image";

export const SectionPartners = () => {
  return (
    <section className="max-w-[1536px] mx-auto">
      <div className="py-[50px] md:pt-[100px] px-4 md:px-[78px] lg:px-[120px]">
        <h2 className="title">Наші партнери</h2>
        <ul className="flex flex-col md:flex-row gap-6 mt-6">
          <li className="flex gap-4 items-center w-[328px] lg:w-[381px]">
            <div className="relative w-[70px] md:w-[90px] h-[70px] md:h-[90px]">
              <Image src="/vaks.webp" fill alt="Logo of VAKU" />
            </div>
            <p>Всеукраїнська Асоціація Кредитних Спілок</p>
          </li>
          <li className="flex gap-4 items-center w-[328px] lg:w-[381px]">
            <div className="relative w-[70px] md:w-[90px] h-[70px] md:h-[90px]">
              <Image src="/logo_vaks 1.webp" fill alt="Logo of VAKU" />
            </div>
            <p>Всеукраїнська Асоціація Кредитних Спілок</p>
          </li>
        </ul>
      </div>
    </section>
  );
};
