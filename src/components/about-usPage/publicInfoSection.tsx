import { PdfIcon } from "../icons/depositPage/pdfIcon";

export const PublicInfoSection = () => {
  return (
    <section className="py-[50px] bg-netural_100 text-primary_700">
      <div className="div-container ">
        <h2 className="title">Юридична інформація</h2>
        <ul>
          <li className="mt-6 text-[16px] md:text-[18px] text-primary_700">
            <h3 className="mb-2">Повна назва</h3>
            <p className="font-bold">Кредитна спілка Кредит-ФОС</p>
          </li>
          <li className="mt-6 text-[16px] md:text-[18px] text-primary_700">
            <h3 className="mb-2">Ідентифікаційний код юридичної особи</h3>
            <p className="font-bold">25694430</p>
          </li>
          <li className="mt-6 text-[16px] md:text-[18px] text-primary_700">
            <h3 className="mb-2">Місцезнаходження</h3>
            <p className="font-bold">
              46025, м. Тернопіль вул. Франка 20 прим.10
            </p>
          </li>
          <li className="mt-6 text-[16px] md:text-[18px] text-primary_700">
            <h3 className="mb-2">Дата державної реєстрації</h3>
            <p className="font-bold">02 квітня 1999 року</p>
          </li>
          <li className="mt-6 text-[16px] md:text-[18px] text-primary_700">
            <h3 className="mb-2">Відомості про державну реєстрацію в ЄДР</h3>
            <a href="#" className="flex gap-3 mt-6 cursor-pointer">
              <div className="w-5 h-5">
                <PdfIcon />
              </div>{" "}
              <span className="md:text-lg">Виписка з ЄДРПОУ</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};
