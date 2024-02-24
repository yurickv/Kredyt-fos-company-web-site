import { ServiceCard } from "./serviceCard";

export const SectionServices = () => {
  return (
    <section className="pt-20 pb-10 md:py-[100px] mx-auto max-w-[1536px]">
      <div className="mx-4 md:mx-[78px] lg:mx-[120px] flex flex-col lg:flex-row gap-6 justify-between items-center">
        <ServiceCard
          title="Депозити"
          text="Ознайомтесь з найкращими накопичувальними пропозиціями"
          foto="/family.webp"
          route="/deposit"
          styleFoto="w-[162px] h-[169px] group-hover:w-[173px] group-hover:h-[180px] md:w-[286px] md:h-[298px] md:group-hover:w-[306px] md:group-hover:h-[319px]"
        />
        <ServiceCard
          title="Кредити"
          text="Найгнучкіші умови кредитування спеціально для вас"
          foto="/girl.webp"
          route="/credit"
          styleFoto="w-[126px] h-[187px] group-hover:w-[132px] group-hover:h-[197px] md:w-[238px] md:h-[354px] md:group-hover:w-[251px] md:group-hover:h-[373px]"
        />
      </div>
    </section>
  );
};
