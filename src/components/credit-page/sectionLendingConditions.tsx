import { SuccessIcon } from "../icons/depositPage/successIcon";

export const SectionLendingConditions = () => {
  return (
    <section className="bg-netural_100 py-[50px]" id="documentCredit">
      <div className="div-container flex flex-col gap-6">
        <h2 className="title">Умови кредитування</h2>
        <ul className="md:text-[18px] text-primary_700 flex flex-col gap-6 md:grid md:grid-cols-2">
          <li className="flex gap-2 md:w-[277px] lg:w-[442px]">
            <div className="w-6">
              <SuccessIcon />
            </div>
            кредит надається виключно у національній валюті як готівкою, так і
            по перерахунку
          </li>
          <li className="flex gap-2 md:w-[277px] lg:w-[442px]">
            <div className="w-6">
              <SuccessIcon />
            </div>
            строк кредитуванння – до 2-х років (без застави), до 4-х років (із
            заставою і поручителями)
          </li>
          <li className="flex gap-2 md:w-[277px] lg:w-[442px]">
            <div className="w-6">
              <SuccessIcon />
            </div>
            при достроковому погашенні кредиту штрафні санкцій не застосовуються
          </li>

          <li className="flex gap-2 md:w-[277px] lg:w-[442px]">
            <div className="w-6">
              <SuccessIcon />
            </div>
            нарахування відсотків на залишкову суму кредиту
          </li>
        </ul>
      </div>
    </section>
  );
};
