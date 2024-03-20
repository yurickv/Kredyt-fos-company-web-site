import { SuccessIcon } from "../icons/depositPage/successIcon";

export const SectionOpportunities = () => {
  return (
    <section className="bg-netural_100 py-[50px]" id="documentCredit">
      <div className="div-container flex flex-col gap-6">
        <h2 className="title">Ви можете отримати кредит, якщо Ви:</h2>
        <ul className="md:text-[18px] text-primary_700 flex flex-col gap-6 md:grid md:grid-cols-2">
          <li className="flex gap-2 md:w-[277px] lg:w-[442px]">
            <div className="w-6">
              <SuccessIcon />
            </div>
            дієздатна фізична особа
          </li>
          <li className="flex gap-2 md:w-[277px] lg:w-[442px]">
            <div className="w-6">
              <SuccessIcon />
            </div>
            маєте постійне джерело доходу
          </li>
          <li className="flex gap-2 md:w-[277px] lg:w-[442px]">
            <div className="w-6">
              <SuccessIcon />
            </div>
            зареєстровані у Тернополі або Тернопільській області
          </li>

          <li className="flex gap-2 md:w-[277px] lg:w-[442px]">
            <div className="w-6">
              <SuccessIcon />
            </div>
            маєте вік від 21 до 70* років (*вік позичальника на момент закриття
            кредиту не повинен перевищувати 70 років)
          </li>
        </ul>
      </div>
    </section>
  );
};
