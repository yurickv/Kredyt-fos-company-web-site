import Image from "next/image";
import { ValuesFourIcon } from "@/components/icons/about-usPage/ValuesFourIcon";
import { ValuesOneIcon } from "@/components/icons/about-usPage/ValuesOneIcon";
import { ValuesThreeIcon } from "@/components/icons/about-usPage/ValuesThreeIcon";
import { ValuesTwoIcon } from "@/components/icons/about-usPage/ValuesTwoIcon";

export const ValuesEmploeesSection = () => {
  return (
    <>
      <section className="pt-6 pb-[50px] bg-netural_100 text-primary_700">
        <div className="div-container flex flex-col gap-6">
          <h2 className="title">Наші цінності</h2>
          <ul className="text-[16px] md:text-[18px] text-primary_700 flex flex-col gap-6 md:grid md:grid-cols-2 lg:flex lg:flex-row">
            <li className="md:w-[277px] lg:w-[442px]">
              <div className="w-[60px] mb-4">
                <ValuesOneIcon />
              </div>
              <h3 className="font-bold my-4">Довіра</h3>
              Ми віримо в відкритість і довіру, створюючи міцні зв'язки з нашими
              клієнтами та співпрацівниками.
            </li>
            <li className="md:w-[277px] lg:w-[442px]">
              <div className="w-[60px] mb-4">
                <ValuesTwoIcon />
              </div>
              <h3 className="font-bold my-4">Інновація</h3>
              Ми постійно шукаємо нові та кращі способи задоволення потреб наших
              клієнтів та розвитку нашої спільноти.
            </li>
            <li className="md:w-[277px] lg:w-[442px]">
              <div className="w-[60px] mb-4">
                <ValuesThreeIcon />
              </div>
              <h3 className="font-bold my-4">Соціальна відповідальність</h3>
              Ми прагнемо до покращення якості життя у наших спільнотах,
              допомагаючи їм розвиватися та процвітати.
            </li>
            <li className="md:w-[277px] lg:w-[442px]">
              <div className="w-[60px] mb-4">
                <ValuesFourIcon />
              </div>
              <h3 className="font-bold my-4">Взаємодопомога</h3>
              Ми віримо в силу співпраці та взаємопідтримки, що дозволяє нам
              разом досягати більш великих успіхів і досягати спільних цілей.
            </li>
          </ul>
        </div>
      </section>
      <section className="pt-6 pb-[50px] bg-netural_100 text-primary_700">
        <div className="div-container flex flex-col gap-6 text-[16px] md:text-[18px] text-primary_700">
          <h2 className="title">Наші працівники</h2>
          <p className="">
            Найкраща команда експертів, котра готова надати кваліфіковану
            підтримку та консультації у всіх фінансових питаннях.
          </p>
          <ul className="flex flex-col items-center gap-6 md:grid md:grid-cols-2 lg:flex lg:flex-row">
            <li className="md:w-[277px] lg:w-[442px]">
              <Image
                width={282}
                height={340}
                src="/Tetyana.png"
                alt="Ceo foto"
              />
              <h3 className="font-bold mt-4 mb-2">Гора Тетяна Леонідівна</h3>
              Керівник кредитної спілки
            </li>
            <li className="md:w-[277px] lg:w-[442px]">
              <Image
                width={282}
                height={340}
                src="/Tetyana.png"
                alt="Ceo foto"
              />
              <h3 className="font-bold mt-4 mb-2">Гора Тетяна Леонідівна</h3>
              Керівник кредитної спілки
            </li>
            <li className="md:w-[277px] lg:w-[442px]">
              <Image
                width={282}
                height={340}
                src="/Tetyana.png"
                alt="Ceo foto"
              />
              <h3 className="font-bold mt-4 mb-2">Гора Тетяна Леонідівна</h3>
              Керівник кредитної спілки
            </li>
            <li className="md:w-[277px] lg:w-[442px]">
              <Image
                width={282}
                height={340}
                src="/Tetyana.png"
                alt="Ceo foto"
              />
              <h3 className="font-bold mt-4 mb-2">Гора Тетяна Леонідівна</h3>
              Керівник кредитної спілки
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};
