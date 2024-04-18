import { PdfIcon } from "../icons/depositPage/pdfIcon";

export const SectionInfo = () => {
  return (
    <section className="bg-netural_100 py-[50px]" id="documentsDeposit">
      <div className="div-container">
        <h2 className="title">Інформація для кієнтів</h2>
        <ul className="mt-6">
          <li className="flex gap-2 mt-6 cursor-pointer">
            <div className="w-6 h-6">
              <PdfIcon />
            </div>{" "}
            <span>Процентні ставки на внески, на депозитні рахунки</span>
          </li>
          <li className="flex gap-2 mt-6 cursor-pointer">
            <div className="w-6 h-6">
              <PdfIcon />
            </div>{" "}
            <span>Примірний договір</span>
          </li>
          <li className="flex gap-2 mt-6 cursor-pointer">
            <div className="w-6 h-6">
              <PdfIcon />
            </div>{" "}
            <span>Правила надання фінансових послуг</span>
          </li>
        </ul>
      </div>
    </section>
  );
};
