import {
  calculateIRR,
  generatePayments,
  getCreditPercent,
} from "@/helpers/calculationCreditSum";
import { Modal } from "./modalShedule";
import { useState } from "react";

interface FormData {
  credits: string;
  creditDuration: number;
  creditSum: number;
  dateInput: string;
}

interface Props {
  formData: FormData;
}

export const CalcCreditResult: React.FC<Props> = ({ formData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { credits, creditDuration, creditSum } = formData;

  let persent = 0;
  persent = getCreditPercent(credits);

  const payment = (
    (creditSum * persent * (1 + persent) ** creditDuration) /
    ((1 + persent) ** creditDuration - 1)
  ).toFixed(2);

  const allPaidSum = (parseFloat(payment) * creditDuration).toFixed(2);
  const paidInterest = (parseFloat(allPaidSum) - creditSum).toFixed(2);

  const masivPays = generatePayments(
    parseFloat(payment),
    creditDuration,
    creditSum
  );

  const persentMonth = calculateIRR(masivPays);
  const AveragePersentRate = (((1 + persentMonth) ** 12 - 1) * 100).toFixed(2);

  const onHandleSchedule = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setIsModalOpen(true);
  };
  return (
    <>
      <div className="">
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
            <p className="text-primary_400 text-[20px] min-[800px]:text-[32px] min-[1280px]:text-[28px] min-[1380px]:text-[32px] font-bold">
              {paidInterest.replace(".", ",")}
            </p>
          </li>
          <li key="taxes" className="flex justify-between gap-4 md:flex-col">
            <div>
              <p className="text-primary_700">Загальна сума виплат</p>
              <div className="w-[50px] h-1 rounded-full bg-primary_300 mt-2 md:mt-4"></div>
            </div>
            <p className="text-primary_400 text-[20px] min-[800px]:text-[32px] min-[1280px]:text-[28px] min-[1380px]:text-[32px] font-bold">
              {allPaidSum.replace(".", ",")}
            </p>
          </li>
          <li key="profit" className="flex justify-between gap-4 md:flex-col">
            <div>
              <p className="text-primary_700">Реальна річна % ставка</p>
              <div className="w-[50px] h-1 rounded-full bg-primary_300 mt-2 md:mt-4"></div>
            </div>
            <p className="text-primary_400 text-[20px] min-[800px]:text-[32px] min-[1280px]:text-[28px] min-[1380px]:text-[32px] font-bold">
              {AveragePersentRate.replace(".", ",")}%
            </p>
          </li>
        </ul>
        <button onClick={onHandleSchedule} className="text-primary_300 mt-4">
          Переглянути детальний графік розрахунків
        </button>
        <p className="text-netural_300 mt-[34px] md:mt-[17px]">
          Калькулятор розраховує приблизну суму. Для точного розрахунку
          надішліть заявку
        </p>
      </div>
      {isModalOpen && (
        <Modal
          formData={formData}
          payment={parseFloat(payment)}
          persent={persent}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
};
