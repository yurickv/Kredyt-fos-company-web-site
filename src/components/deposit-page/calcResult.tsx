import { resultPersent } from "@/helpers/calculationDepositSum";

interface FormData {
  deposits: string;
  duration: number;
  targetSum: number;
}

interface Props {
  formData: FormData;
}

export const CalcResult: React.FC<Props> = ({ formData }) => {
  const { deposits, duration, targetSum } = formData;
  const persent = resultPersent(deposits, duration, targetSum);

  const accruedCash = (targetSum * persent).toFixed(2);
  const taxes = (parseFloat(accruedCash) * 0.195).toFixed(2);
  const profit = (parseFloat(accruedCash) - parseFloat(taxes)).toFixed(2);
  const finalPaiment = (targetSum + parseFloat(profit))
    .toFixed(2)
    .replace(".", ",");
  return (
    <div className="bg-netural_100 rounded-md px-4 md:px-6 py-6">
      <div className="bg-primary_100 rounded-md border-l-4 border-l-primary_300 p-4">
        <p className="text-primary_700 text-[18px] font-bold">До виплати</p>
        <p className="text-primary_400 text-[32px] md:text-[40px] font-bold mt-3">
          {200 > targetSum || targetSum > 50000 ? "..." : finalPaiment}
        </p>
      </div>
      <ul className="mt-[34px] md:mt-[17px] flex flex-col gap-[34px] md:flex-row justify-between">
        <li key="accrued" className="flex justify-between gap-4 md:flex-col">
          <div>
            <p className="text-primary_700">Нараховано %</p>
            <div className="w-[50px] h-1 rounded-full bg-primary_300 mt-2 md:mt-4"></div>
          </div>
          <p className="text-primary_400 text-[20px] md:text-[32px] font-bold">
            {accruedCash.replace(".", ",")}
          </p>
        </li>
        <li key="taxes" className="flex justify-between gap-4 md:flex-col">
          <div>
            <p className="text-primary_700">Податки</p>
            <div className="w-[50px] h-1 rounded-full bg-primary_300 mt-2 md:mt-4"></div>
          </div>
          <p className="text-primary_400 text-[20px] md:text-[32px] font-bold">
            {taxes.replace(".", ",")}
          </p>
        </li>
        <li key="profit" className="flex justify-between gap-4 md:flex-col">
          <div>
            <p className="text-primary_700">Прибуток</p>
            <div className="w-[50px] h-1 rounded-full bg-primary_300 mt-2 md:mt-4"></div>
          </div>
          <p className="text-primary_400 text-[20px] md:text-[32px] font-bold">
            {profit.replace(".", ",")}
          </p>
        </li>
      </ul>
      <p className="text-netural_300 mt-[34px] md:mt-[17px]">
        Калькулятор розраховує приблизну суму. Для точного розрахунку надішліть
        заявку
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
  );
};
