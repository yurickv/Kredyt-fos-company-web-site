import Link from "next/link";
import { CheckMarkIcon } from "../icons/creditPage/checkMarkIcon";
import { ArrowIcon } from "../icons/depositPage/arrowIcon";
import { SuccessIcon } from "../icons/depositPage/successIcon";

interface Terms {
  title: string;
  creditSum: string;
  creditTermine: string;
  creditInterest: string;
  creditRealInterest: string;
  creditPurpose: string[];
}

interface Props {
  term: Terms;
}

export const InfoCardCredit: React.FC<Props> = ({ term }) => {
  const {
    title,
    creditSum,
    creditTermine,
    creditInterest,
    creditRealInterest,
    creditPurpose,
  } = term;
  return (
    <div className="rounded-md ring-2 ring-primary_200 overflow-hidden flex flex-col max-w-full md:max-w-[499px] xl:max-w-full grow">
      <div className="bg-primary_100 flex flex-col justify-between items-start py-6 px-2 md:px-4 lg:px-6 min-w-[300px]">
        <h3 className="text-[32px] font-bold text-primary_400">{title}</h3>
        <Link
          className="flex gap-3 group items-center mt-2"
          href="#documentCredit"
        >
          <button
            type="button"
            className="relative bg-gradient_1 inline-block text-transparent bg-clip-text text-[18px] font-bold"
          >
            Дізнатись більше
            <span
              className="absolute z-20 top-0 left-0 inset-0 bg-gradient_2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 focus:opacity-100 
          text-transparent bg-clip-text text-[18px] font-bold"
            >
              Дізнатись більше
            </span>
          </button>
          <div className="rotate-[55deg] group-hover:rotate-0 transition-all duration-300 w-2.5 h-2.5">
            <ArrowIcon />
          </div>
        </Link>
      </div>
      <div className="flex flex-col">
        <div className="py-6 px-2 md:px-4 lg:px-6 min-w-[240px] lg:min-w-[349px]">
          <ul className="text-netural_300 flex flex-col gap-2 md:gap-4">
            <li
              className="flex flex-col min-[430px]:flex-row gap-1 justify-between"
              key="creditSum"
            >
              <span className="w-[130px]">Сума кредиту</span>
              <span className="text-[18px] text-primary_400 font-semibold md:w-[240px] text-end">
                {creditSum}
              </span>
            </li>
            <li
              className="flex flex-col min-[420px]:flex-row gap-1 justify-between"
              key="creditTermine"
            >
              <span className="w-[240px]">Строк кредитування, міс.</span>
              <span className="text-[18px] text-primary_400 font-semibold md:w-[240px] text-end">
                {creditTermine}
              </span>
            </li>
            <li
              className="flex flex-row gap-1 justify-between"
              key="creditInterest"
            >
              <span className="w-[240px]">Процентна ставка, % річних</span>{" "}
              <span className="text-[18px] text-primary_400 font-semibold md:w-[240px] text-end">
                {creditInterest}
              </span>
            </li>
            <li
              className="flex flex-row gap-1 justify-between"
              key="creditRealInterest"
            >
              <span className="w-[240px]">
                Максимальна реальна процентна ставка, % річних
              </span>
              <span className="text-[18px] text-primary_400 font-semibold md:w-[240px] text-end">
                {creditRealInterest}
              </span>
            </li>
            <li className="flex gap-1 justify-between" key="termFour">
              Дострокове погашення{" "}
              <div className="flex gap-2 items-center">
                <SuccessIcon />
                <span className="text-[18px] text-primary_700">
                  Без штрафів
                </span>
              </div>
            </li>
          </ul>
        </div>
        <div className="w-full py-6 px-2 md:px-4 lg:px-6 border-t-2 border-primary_100 flex flex-col justify-between">
          <div className="">
            <p className="text-netural_300">Цілі кредиту:</p>
            <ul>
              {creditPurpose.map((item) => (
                <li key={item} className="lg:text-[18px] text-primary_700 pb-2">
                  <div className="flex gap-2 items-center">
                    <CheckMarkIcon />
                    {item}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
