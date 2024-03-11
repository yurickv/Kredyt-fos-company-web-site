import { getCreditPercent } from "@/helpers/calculationCreditSum";
import { Modal } from "./modalShedule";
import { useState } from "react";

interface FormData {
  credits: string;
  creditDuration: number;
  creditSum: number;
}

interface Props {
  formData: FormData;
}

export const CalcCreditResult: React.FC<Props> = ({ formData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { credits, creditDuration, creditSum } = formData;

  let persent = 0;
  persent = getCreditPercent(credits);

  const annuityCoof =
    (persent * (1 + persent) ** creditDuration) /
    ((1 - persent) ** creditDuration - 1);

  const payment = (creditSum * annuityCoof * -1).toFixed(2);
  const allPaidSum = (parseFloat(payment) * creditDuration).toFixed(2);
  const paidInterest = (parseFloat(allPaidSum) - creditSum).toFixed(2);
  const AveragePersentRate = (
    (parseFloat(paidInterest) / parseFloat(allPaidSum)) *
    100
  ).toFixed(2);

  return (
    <>
      <div className="bg-netural_100 rounded-md px-4 md:px-6 py-6">
        <div className="bg-primary_100 rounded-md border-l-4 border-l-primary_300 p-4">
          <p className="text-primary_700 text-[18px] font-bold">
            Орієнтовний щомісячний платіж
          </p>
          <p className="text-primary_400 text-[32px] md:text-[40px] font-bold mt-3">
            {payment.replace(".", ",")} &#8372;
          </p>
        </div>
        <ul className="mt-[34px] md:mt-[17px] flex flex-col gap-[34px] md:flex-row justify-between">
          <li key="accrued" className="flex justify-between gap-4 md:flex-col">
            <div>
              <p className="text-primary_700">Сума процентів</p>
              <div className="w-[50px] h-1 rounded-full bg-primary_300 mt-2 md:mt-4"></div>
            </div>
            <p className="text-primary_400 text-[20px] md:text-[32px] font-bold">
              {paidInterest.replace(".", ",")}
            </p>
          </li>
          <li key="taxes" className="flex justify-between gap-4 md:flex-col">
            <div>
              <p className="text-primary_700">Загальна сума виплат</p>
              <div className="w-[50px] h-1 rounded-full bg-primary_300 mt-2 md:mt-4"></div>
            </div>
            <p className="text-primary_400 text-[20px] md:text-[32px] font-bold">
              {allPaidSum.replace(".", ",")}
            </p>
          </li>
          <li key="profit" className="flex justify-between gap-4 md:flex-col">
            <div>
              <p className="text-primary_700">Середньорічна % ставка</p>
              <div className="w-[50px] h-1 rounded-full bg-primary_300 mt-2 md:mt-4"></div>
            </div>
            <p className="text-primary_400 text-[20px] md:text-[32px] font-bold">
              {AveragePersentRate.replace(".", ",")}%
            </p>
          </li>
        </ul>
        <button
          onClick={() => setIsModalOpen(true)}
          className="text-primary_300 mt-4"
        >
          Переглянути детальний графік розрахунків
        </button>
        <p className="text-netural_300 mt-[34px] md:mt-[17px]">
          Калькулятор розраховує приблизну суму. Для точного розрахунку
          надішліть заявку
        </p>

        <button
          type="submit"
          className="text-netural_100 text-lg font-extrabold leading-4 relative overflow-hidden 
      bg-gradient_1 rounded-md px-[34px] py-5 text-mainTitleBlack text-center block w-full mt-[34px] md:mt-[17px]"
        >
          Надіслати заявку
          <span
            className="absolute inset-0 flex items-center justify-center text-lg font-extrabold leading-4 text-netural_100
      bg-gradient_2 opacity-0 hover:opacity-100 transition-opacity duration-300 z-10 focus:opacity-100"
          >
            Надіслати заявку
          </span>
        </button>
      </div>
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <h3 className="text-[32px] font-bold text-primary_400 mt-8">
            {credits}
          </h3>
          <div className="w-[50px] h-1 rounded-full bg-primary_300 mt-2 md:mt-4"></div>
        </Modal>
      )}
    </>
  );
};
