import { PdfIcon } from "../icons/depositPage/pdfIcon";

export const SectionLendingConditions = () => {
  return (
    <section className="bg-netural_100 py-[50px]" id="documentCredit">
      <div className="div-container flex flex-col gap-6">
        <h2 className="title">Умови кредитування</h2>
        <ul className="md:text-[18px] text-primary_700 flex flex-col gap-6 md:grid md:grid-cols-2">
          <li className="flex gap-2 md:w-[277px] lg:w-[442px]">
            <a href="#" className="flex gap-3 mt-6 cursor-pointer">
              <div className="w-6 h-6">
                <PdfIcon />
              </div>{" "}
              <span className="md:text-lg">Умови послуги</span>
            </a>
          </li>
          <li className="flex gap-2 md:w-[277px] lg:w-[442px]">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://drive.google.com/file/d/1_5gvqNeAwsVNkx5dyVh8XMp4AOlX03fW/view"
              className="flex gap-3 mt-6 cursor-pointer"
            >
              <div className="w-6 h-6">
                <PdfIcon />
              </div>{" "}
              <span className="md:text-lg">Примірний кредитний договір</span>
            </a>
          </li>
          <li className="flex gap-2 md:w-[277px] lg:w-[442px]">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://drive.google.com/file/d/1kDVkv6E6VZxQTuwtr0CWxVP2a7FcU8T4/view"
              className="flex gap-3 mt-6 cursor-pointer"
            >
              <div className="w-6 h-6">
                <PdfIcon />
              </div>{" "}
              <span className="md:text-lg">
                Примірний договір кредитної лінії
              </span>
            </a>
          </li>

          <li className="flex gap-2 md:w-[277px] lg:w-[442px]">
            <a href="#" className="flex gap-3 mt-6 cursor-pointer">
              <div className="w-6 h-6">
                <PdfIcon />
              </div>{" "}
              <span className="md:text-lg">
                Правила надання кредитних послуг
              </span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};
