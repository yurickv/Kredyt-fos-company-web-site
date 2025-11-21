import { PdfIcon } from '../icons/depositPage/pdfIcon';

export const DocumentArchive = () => {
  return (
    <div className="text-primary_700">
      <h3 className="text-primary_400 text-[32px] font-bold py-4">
        Архів документів
      </h3>

      <ul>
        <li className="border-b border-primary_100 pb-4">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://drive.google.com/file/d/1LxgvijOOov7GY4nxcAAAaoOFabz5Diy8/view?usp=drive_link"
            className="flex gap-3 mt-6 cursor-pointer"
          >
            <div className="w-6 h-6">
              <PdfIcon />
            </div>{' '}
            <span className="md:text-lg">
              Кредитний продукт «Споживчий» 2024
            </span>
          </a>
        </li>
        <li className="border-b border-primary_100 pb-4">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://drive.google.com/file/d/1-n7uaNbO86RtR6SRGvsr4E2k_Mg9NeCu/view?usp=drive_link"
            className="flex gap-3 mt-6 cursor-pointer"
          >
            <div className="w-6 h-6">
              <PdfIcon />
            </div>{' '}
            <span className="md:text-lg">
              Істотні характеристики послуги з надання споживчого кредиту
            </span>
          </a>
        </li>
        <li className="border-b border-primary_100 pb-4">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://drive.google.com/file/d/1EGOUOmRO-ZVlwC2pcV7mr84w8pB7PbTB/view?usp=drive_link"
            className="flex gap-3 mt-6 cursor-pointer"
          >
            <div className="w-6 h-6">
              <PdfIcon />
            </div>{' '}
            <span className="md:text-lg">
              Істотні характеристики послуги з надання мікрокредиту
            </span>
          </a>
        </li>
        <li className="border-b border-primary_100 pb-4">
          <a href="#" className="flex gap-3 mt-6 cursor-pointer">
            <div className="w-6 h-6">
              <PdfIcon />
            </div>{' '}
            <span className="md:text-lg">
              Положення про фінансові послуги 19.06.2017
            </span>
          </a>
        </li>
        <li className="border-b border-primary_100 pb-4">
          <a href="#" className="flex gap-3 mt-6 cursor-pointer">
            <div className="w-6 h-6">
              <PdfIcon />
            </div>{' '}
            <span className="md:text-lg">
              Положення про фінансові послуги 17.01.2020
            </span>
          </a>
        </li>
        <li className="border-b border-primary_100 pb-4">
          <a href="#" className="flex gap-3 mt-6 cursor-pointer">
            <div className="w-6 h-6">
              <PdfIcon />
            </div>{' '}
            <span className="md:text-lg">Примірні договори 28.05.2020</span>
          </a>
        </li>
        <li className="border-b border-primary_100 pb-4">
          <a href="#" className="flex gap-3 mt-6 cursor-pointer">
            <div className="w-6 h-6">
              <PdfIcon />
            </div>{' '}
            <span className="md:text-lg">
              Підвиди кредитів та розмір відсотків 28.12.20
            </span>
          </a>
        </li>{' '}
        <li className="border-b border-primary_100 pb-4">
          <a href="#" className="flex gap-3 mt-6 cursor-pointer">
            <div className="w-6 h-6">
              <PdfIcon />
            </div>{' '}
            <span className="md:text-lg">
              Підвиди депозитів та розмір відсотків 28.12.20
            </span>
          </a>
        </li>{' '}
        <li className="border-b border-primary_100 pb-4">
          <a href="#" className="flex gap-3 mt-6 cursor-pointer">
            <div className="w-6 h-6">
              <PdfIcon />
            </div>{' '}
            <span className="md:text-lg">
              Положення про фінансові послуги 28.05.2020
            </span>
          </a>
        </li>
        <li className="border-b border-primary_100 pb-4">
          <a href="#" className="flex gap-3 mt-6 cursor-pointer">
            <div className="w-6 h-6">
              <PdfIcon />
            </div>{' '}
            <span className="md:text-lg">
              Зміни до Положення про фінансові послуги від 28.05.2020 №1
            </span>
          </a>
        </li>{' '}
        <li className="border-b border-primary_100 pb-4">
          <a href="#" className="flex gap-3 mt-6 cursor-pointer">
            <div className="w-6 h-6">
              <PdfIcon />
            </div>{' '}
            <span className="md:text-lg">
              Зміни до Положення про фінансові послуги від 28.05.2020 №2
            </span>
          </a>
        </li>{' '}
        <li className="border-b border-primary_100 pb-4">
          <a href="#" className="flex gap-3 mt-6 cursor-pointer">
            <div className="w-6 h-6">
              <PdfIcon />
            </div>{' '}
            <span className="md:text-lg">Примірні договори</span>
          </a>
        </li>
      </ul>
    </div>
  );
};
