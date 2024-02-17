import { AdvantageCard } from "./advantageCard";
import { User } from "@/components/icons/advantageSection/User";
import { Handshake } from "@/components/icons/advantageSection/handshake";
import { Security } from "@/components/icons/advantageSection/secuity";
import { Speed } from "@/components/icons/advantageSection/speed";

export const SectionAdvantage = () => {
  return (
    <section className="pt-10 lg:pt-[50px] pb-16 md:pb-[138px] lg:pb-[124px] max-w-[1536px] mx-auto">
      <div className="px-4 md:px-[78px] lg:px-[120px]">
        <h2 className="title">Ось що робить нас унікальними:</h2>
        <ul className="flex flex-col gap-[34px] md:grid md:grid-cols-2 xl:flex xl:flex-row md:gap-x-4 md:gap-y-6 flex-wrap justify-between mt-6">
          <li className="w-[282px] h-[256px]" id="Персональний підхід">
            <User />
            <AdvantageCard
              title="Персональний підхід"
              text="Ми працюємо із кожним членом спілки індивідуально, надаючи персоналізовані фінансові рішення."
              route="/about-us"
            />
          </li>
          <li className="w-[282px] h-[256px]" id="Вигідні умови">
            <Handshake />
            <AdvantageCard
              title="Вигідні умови"
              text="Варіативні умови для наших послуг, що враховують фінансові можливості кожного члена."
              route="/credit"
            />
          </li>
          <li className="w-[282px] h-[256px]" id="Безпека та надійність">
            <Security />
            <AdvantageCard
              title="Безпека та надійність"
              text="Ми функціонуємо відповідно до всіх вимог і стандартів фінансового регулювання."
              route="/deposit"
            />
          </li>{" "}
          <li className="w-[282px] h-[256px]" id="Швидкість">
            <Speed />
            <AdvantageCard
              title="Швидкість"
              text="Економія часу завдяки швидкому та якісному обслуговуванні."
              route="/contacts"
            />
          </li>
        </ul>
      </div>
    </section>
  );
};
