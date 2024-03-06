import { DocumentIcon } from "../icons/depositPage/documentIcon";
import { PdfIcon } from "../icons/depositPage/pdfIcon";

export const SectionInfo = () => {
  return (
    <section className="bg-netural_100 py-[50px]">
      <div className="div-container">
        <h2 className="title">Інформація для кієнтів</h2>
        <ul className="mt-6">
          <li className="flex gap-2 mt-6 cursor-pointer">
            <PdfIcon />{" "}
            <span>Процентні ставки на внески, на депозитні рахунки</span>
          </li>
          <li className="flex gap-2 mt-6 cursor-pointer">
            <PdfIcon /> <span>Примірний договір</span>
          </li>
          <li className="flex gap-2 mt-6 cursor-pointer">
            {" "}
            <PdfIcon />
            <span>Правила надання фінансових послуг</span>
          </li>
        </ul>
      </div>
    </section>
  );
};
