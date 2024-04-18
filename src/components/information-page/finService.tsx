import { CheckMarkIcon } from "../icons/creditPage/checkMarkIcon";
import { PdfIcon } from "../icons/depositPage/pdfIcon";

export const FinService = () => {
  return (
    <div className="text-primary_700">
      <h3 className="text-primary_400 text-[32px] font-bold py-4">
        Фінансові послуги
      </h3>
      <ul>
        <li className="border-b border-primary_100 pb-4">
          <a href="#" className="flex gap-3 mt-6 cursor-pointer">
            <div className="w-5 h-5">
              <PdfIcon />
            </div>{" "}
            <span className="md:text-lg">
              <span className="text-primary_400 font-bold ">
                Підвиди внесків
              </span>{" "}
              (вкладів) членів кредитної спілки на депозитні рахунки та розмір
              плати (процентів) для підвидів Вкладів
            </span>
          </a>
        </li>
        <li className="border-b border-primary_100 pb-4">
          <a href="#" className="flex gap-3 mt-6 cursor-pointer">
            <div className="w-5 h-5">
              <PdfIcon />
            </div>{" "}
            <span className="md:text-lg">
              <span className="text-primary_400 font-bold ">
                Підвиди кредитів
              </span>{" "}
              та розмір плати (процентів) за підвидами кредитів, що надаються
              членам Кредитної Спілки "Кредит-ФОС"
            </span>
          </a>
        </li>
        <li className="border-b border-primary_100 pb-4">
          <a href="#" className="flex gap-3 mt-6 cursor-pointer">
            <PdfIcon />{" "}
            <span className="md:text-lg">
              <span className="text-primary_400 font-bold ">
                Положення про фінансові послуги
              </span>{" "}
              від
            </span>
          </a>
        </li>
      </ul>
      <h3 className="text-lg text-primary_400 font-bold mt-6">
        Примірні договори:
      </h3>
      <ul>
        <li>
          <a href="#" className="flex gap-2 mt-6 cursor-pointer">
            <CheckMarkIcon /> Вклад строковий класичний <PdfIcon />
          </a>
        </li>
        <li>
          <a href="#" className="flex gap-2 mt-6 cursor-pointer">
            <CheckMarkIcon />
            Вклад строковий накопичувальний <PdfIcon />
          </a>
        </li>
        <li>
          <a href="#" className="flex gap-2 mt-6 cursor-pointer">
            <CheckMarkIcon />
            Вклад на вимогу <PdfIcon />
          </a>
        </li>
        <li>
          <a href="#" className="flex gap-2 mt-6 cursor-pointer">
            <CheckMarkIcon />
            Кредитний договір <PdfIcon />
          </a>
        </li>
        <li>
          <a href="#" className="flex gap-2 mt-6 cursor-pointer">
            <CheckMarkIcon />
            Договір відновлювальної кредитної лінії <PdfIcon />
          </a>
        </li>
      </ul>
    </div>
  );
};
