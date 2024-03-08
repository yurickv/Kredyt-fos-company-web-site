import Link from "next/link";
import { ArrowIcon } from "../icons/depositPage/arrowIcon";
import { FailureIcon } from "../icons/depositPage/failureIcon";
import { SuccessIcon } from "../icons/depositPage/successIcon";

interface Terms {
  title: string;
  termOne: boolean;
  termTwo: boolean;
  termThree: boolean;
  termFour: boolean;
  termine: number[] | string[];
  rate: number[];
}

interface Props {
  term: Terms;
}

export const InfoCardDeposit: React.FC<Props> = ({ term }) => {
  const { title, termOne, termTwo, termThree, termFour, termine, rate } = term;
  return (
    <div className="rounded-md ring-2 ring-primary_200 overflow-hidden flex flex-col lg:flex-row max-w-[844px] lg:max-w-full">
      <div className="bg-primary_100 flex flex-col justify-between items-start py-6 px-2 md:px-4 lg:px-6 lg:w-[330px] min-w-[300px]">
        <h3 className="text-[32px] font-bold text-primary_400">{title}</h3>
        <Link
          className="flex gap-3 group items-center mt-2"
          href="#documentsDeposit"
        >
          <div className="relative bg-gradient_1 inline-block text-transparent bg-clip-text text-[18px] font-bold">
            Дізнатись більше
            <span
              className="absolute z-20 top-0 left-0 inset-0 bg-gradient_2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 focus:opacity-100 
          text-transparent bg-clip-text text-[18px] font-bold"
            >
              Дізнатись більше
            </span>
          </div>
          <div className="rotate-[55deg] group-hover:rotate-0 transition-all duration-300 w-2.5 h-2.5">
            <ArrowIcon />
          </div>
        </Link>
      </div>
      <div className="flex flex-col md:flex-row md:gap-4">
        <div className="py-6 px-2 md:px-4 lg:px-6 min-w-[240px] lg:min-w-[349px]">
          <ul className="text-netural_300 flex flex-col gap-4">
            <li className="flex flex-col gap-1" key="termOne">
              Поповнення{" "}
              {termOne && (
                <div className="flex gap-2 items-center">
                  <SuccessIcon />
                  <span className="text-[18px] text-primary_700">
                    Є можливість
                  </span>
                </div>
              )}
              {!termOne && (
                <div className="flex gap-2 items-center">
                  <FailureIcon />
                  <span className="text-[18px] text-primary_700">
                    Не передбачено
                  </span>
                </div>
              )}
            </li>
            <li className="flex flex-col gap-1" key="termTwo">
              Виплата процентів{" "}
              {termTwo && (
                <div className="flex gap-2 items-center">
                  <SuccessIcon />
                  <span className="text-[18px] text-primary_700">
                    Щомісячно
                  </span>
                </div>
              )}
              {!termTwo && (
                <div className="flex gap-2 items-center">
                  <FailureIcon />
                  <span className="text-[18px] text-primary_700">
                    Не передбачено
                  </span>
                </div>
              )}
            </li>
            <li className="flex flex-col gap-1" key="termThree">
              Часткове зняття суми вкладу{" "}
              {termThree && (
                <div className="flex gap-2 items-center">
                  <SuccessIcon />
                  <span className="text-[18px] text-primary_700">
                    Є можливість
                  </span>
                </div>
              )}
              {!termThree && (
                <div className="flex gap-2 items-center">
                  <FailureIcon />
                  <span className="text-[18px] text-primary_700">
                    Не передбачено
                  </span>
                </div>
              )}
            </li>
            <li className="flex flex-col gap-1" key="termFour">
              Дострокове розірвання{" "}
              {termFour && (
                <div className="flex gap-2 items-center">
                  <SuccessIcon />
                  <span className="text-[18px] text-primary_700">
                    Є можливість
                  </span>
                </div>
              )}
              {!termFour && (
                <div className="flex gap-2 items-center">
                  <FailureIcon />
                  <span className="text-[18px] text-primary_700">
                    Не передбачено
                  </span>
                </div>
              )}
            </li>
          </ul>
        </div>
        <div className="w-full py-6 px-2 md:px-4 lg:px-6 border-t-2 md:border-t-0 md:border-l-2 border-primary_200 flex flex-col justify-between">
          <div className="grid grid-cols-2 max-w-[387px] lg:min-w-[387px] gap-2">
            <p className="text-netural_300">Термін</p>
            <p className="text-netural_300">Cтавка</p>
            <ul>
              {termine.map((item) => (
                <li key={item} className="lg:text-[18px] text-primary_700 pb-2">
                  {item} місяців
                </li>
              ))}
            </ul>
            <ul>
              {rate.map((item) => (
                <li key={item} className="lg:text-[18px] text-primary_700 pb-2">
                  {item} % річних
                </li>
              ))}
            </ul>
          </div>
          <div className="flex lg:flex-col justify-between max-w-[352px] lg:min-w-[387px] pt-4">
            <p className="text-netural_300">
              Мінімальна сума <br />
              <span className="text-[18px] text-primary_700 font-bold">
                1000грн.
              </span>
            </p>
            <p className="text-netural_300">
              Максимальна сума <br />
              <span className="text-[18px] text-primary_700 font-bold">
                150 000грн.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
