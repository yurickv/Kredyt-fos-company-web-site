import { PhoneIcon } from "../icons/PhoneIcon";
import { Tick } from "../icons/Tick";

export const SectionMilitary = () => {
  return (
    <section className="py-[50px] px-4 md:px-[78px] lg:px-[120px] md:py-[100px] bg-[url('/background-for-mil.webp')] bg-center bg-cover">
      <div className="bg-netural_100 rounded-md px-6 py-6 md:py-10 lg:py-[50px] lg:px-[50px] max-w-[1296px] mx-auto ">
        <h2 className="title">Взаємодія із захищеною категорією населення</h2>
        <h3 className="text-[16px] md:text-[18px] lg:text-[20px] text-primary_700 font-bold pt-6">
          Захищеною категорією населення є:
        </h3>
        <ul className="text-primary_700 text-base md:text-lg">
          <li className="flex gap-2 pt-4">
            <div className="w-6" id="mil-first">
              <Tick />
            </div>
            військовослужбовці Збройних Сил України, інших утворених відповідно
            до законів України військових формувань та правоохоронних органів
            спеціального призначення, Державної спеціальної служби транспорту,
            Державної служби спеціального зв’язку та захисту інформації України,
            які проходять військову службу на території України;
          </li>
          <li className="flex gap-2 pt-4" id="mil-second">
            <div className="w-6">
              <Tick />
            </div>
            військовослужбовці, які стали особами з інвалідністю внаслідок
            захворювання, пов’язаного з проходженням військової служби, чи
            внаслідок захворювання після звільнення їх з військової служби;
          </li>
          <li className="flex gap-2 pt-4" id="mil-third">
            <div className="w-6">
              <Tick />
            </div>
            члени сімей військовослужбовців, які загинули, померли чи пропали
            безвісти;
          </li>
          <li className="flex gap-2 pt-4" id="mil-fourth">
            <div className="w-6">
              <Tick />
            </div>
            особи, які перебувають у полоні, особи, з якими втрачено зв’язок,
            особи, зниклі безвісти.
          </li>
        </ul>
        <h3 className="text-[16px] md:text-[18px] lg:text-[20px] text-primary_700 font-bold pt-4">
          Контакти для взаємодії:
        </h3>
        <div className="flex flex-col md:flex-row md:gap-6 mt-2">
          <a
            href="tel:+38(067)3501977"
            className="flex gap-2.5 items-center text-primary_400 group hover:text-primary_300 pt-4
                transition-all duration-300 text-xl font-extrabold"
            target="_blank"
            rel="noopener noreferrer"
          >
            <PhoneIcon />
            <div>+38 067 350-19-77</div>
          </a>
          <a
            href="tel:+38(067)3501977"
            className="flex gap-2.5 items-center text-primary_400 group hover:text-primary_300 pt-4
                transition-all duration-300 text-xl font-extrabold"
            target="_blank"
            rel="noopener noreferrer"
          >
            <PhoneIcon />
            <div>+38 067 350-19-77</div>
          </a>
        </div>
      </div>
    </section>
  );
};
