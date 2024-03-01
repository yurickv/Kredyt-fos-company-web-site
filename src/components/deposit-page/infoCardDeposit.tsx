import { ArrowIcon } from "../icons/depositPage/arrowIcon";
import { FailureIcon } from "../icons/depositPage/failureIcon";
import { SuccessIcon } from "../icons/depositPage/successIcon";

interface Terms {
  title: string;
  termOne: boolean;
  termTwo: boolean;
  termThree: boolean;
  termFour: boolean;
  termine: [];
  rate: [];
}

interface Props {
  term: Terms;
}

export const InfoCardDeposit: React.FC<Props> = ({ term }) => {
  const { title, termOne, termTwo, termThree, termFour, termine, rate } = term;
  return (
    <div className="rounded-md ring-2 ring-primary_200 overflow-hidden flex flex-col lg:flex-row">
      <div className="bg-primary_100 flex flex-col justify-between items-start py-6 px-2 md:px-4 lg:px-6">
        <h3 className="text-[32px] font-bold text-primary_400">{title}</h3>
        <div className="flex gap-3 group items-center mt-2">
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
        </div>
      </div>
      <div className="flex flex-col md:flex-row py-6 px-2 md:px-4 lg:px-6">
        <div>
          <ul className="text-netural_300 flex flex-col gap-4">
            <li className="flex flex-col gap-1" key="termOne">
              Поповнення{" "}
              <div className="flex gap-2 items-center">
                {termOne}
                <FailureIcon />
                <span className="text-[18px] text-primary_700">
                  Не передбачено
                </span>
              </div>
            </li>
            <li className="flex flex-col gap-1" key="termTwo">
              Виплата процентів{" "}
              <div className="flex gap-2 items-center">
                <SuccessIcon />
                <span className="text-[18px] text-primary_700">
                  Не передбачено
                </span>
              </div>
            </li>
            <li className="flex flex-col gap-1" key="termThree">
              Часткове зняття суми вкладу{" "}
              <div className="flex gap-2 items-center">
                <FailureIcon />
                <span className="text-[18px] text-primary_700">
                  Не передбачено
                </span>
              </div>
            </li>
            <li className="flex flex-col gap-1" key="termFour">
              Дострокове розірвання{" "}
              <div className="flex gap-2 items-center">
                <FailureIcon />
                <span className="text-[18px] text-primary_700">
                  Не передбачено
                </span>
              </div>
            </li>
          </ul>
        </div>
        <div></div>
      </div>
    </div>
  );
};
