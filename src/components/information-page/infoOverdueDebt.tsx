import { CheckMarkIcon } from "../icons/creditPage/checkMarkIcon";
import { PdfIcon } from "../icons/depositPage/pdfIcon";

export const InfoOverdueDebt = () => {
  return (
    <div className="text-primary_700">
      <h3 className="text-primary_400 text-[32px] font-bold pt-4">
        Інформація щодо врегулювання простроченої заборгованості
      </h3>
      <ul>
        <li className="flex gap-2 mt-4">
          {" "}
          <div className="w-6 h-6">
            <CheckMarkIcon />
          </div>
          Кредитна спілка не залучає колекторські компанії для врегулювання
          заборгованості членів кредитної спілки;
        </li>
        <li className="flex gap-2 mt-4">
          <div className="w-6 h-6">
            <CheckMarkIcon />
          </div>
          Кредитна спілка не здійснює відступлення права вимоги за договором про
          споживчий кредит новому кредитодавцю;
        </li>
        <li className="flex gap-2 mt-4">
          <div className="w-6 h-6">
            <CheckMarkIcon />
          </div>
          Кредитна спілка розпочинає діяльність із врегулювання простроченої
          заборгованості на наступний день після порушення споживачем
          погодженого графіку платежів, який є додатком до договору про
          споживчий кредит;
        </li>
        <li className="flex gap-2 mt-4">
          <div className="w-6 h-6">
            <CheckMarkIcon />
          </div>
          <div className="">
            <a
              href="#"
              className="gap-2 cursor-pointer text-primary_400 inline-block pr-2"
            >
              Порядок взаємодії{" "}
              <div className="w-4 h-4 inline-block">
                <PdfIcon />
              </div>{" "}
            </a>{" "}
            із споживачем фінансових послуг при врегулюванні простроченої
            заборгованості (вимоги щодо етичної поведінки);
          </div>
        </li>
        <li className="flex gap-2 mt-4">
          <div className="w-6 h-6">
            <CheckMarkIcon />
          </div>
          <div className="">
            <a
              href="#"
              className="gap-2 cursor-pointer text-primary_400 inline-block pr-2"
            >
              Порядок повідомлення{" "}
              <div className="w-4 h-4 inline-block">
                <PdfIcon />
              </div>{" "}
            </a>{" "}
            кредитодавця, про те, що інтереси споживача фінансових послуг при
            врегулюванні простроченої заборгованості представляє його
            уповноважений представник;
          </div>
        </li>
        <li className="flex gap-2 mt-4">
          <div className="w-6 h-6">
            <CheckMarkIcon />
          </div>
          Порядок і спосіб погашення простроченої заборгованості -
          заборгованість погашається готівкою в касі кредитної спілки або
          безготівково на рахунок кредитної спілки UA
          803223130000026506000000200 у порядку, що визначений відповідним
          договором про споживчий кредит.
        </li>
      </ul>
    </div>
  );
};
