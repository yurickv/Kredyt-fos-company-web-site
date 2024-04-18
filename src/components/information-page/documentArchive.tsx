import { PdfIcon } from "../icons/depositPage/pdfIcon";

export const DocumentArchive = () => {
  return (
    <div className="text-primary_700">
      <h3 className="text-primary_400 text-[32px] font-bold py-4">
        Архів документів
      </h3>

      <ul>
        <li className="border-b border-primary_100 pb-4">
          <a href="#" className="flex gap-3 mt-6 cursor-pointer">
            <div className="w-5 h-5">
              <PdfIcon />
            </div>{" "}
            <span className="md:text-lg">Вид і назва документу</span>
          </a>
        </li>
        <li className="border-b border-primary_100 pb-4">
          <a href="#" className="flex gap-3 mt-6 cursor-pointer">
            <div className="w-5 h-5">
              <PdfIcon />
            </div>{" "}
            <span className="md:text-lg">Вид і назва документу</span>
          </a>
        </li>
        <li className="border-b border-primary_100 pb-4">
          <a href="#" className="flex gap-3 mt-6 cursor-pointer">
            <div className="w-5 h-5">
              <PdfIcon />
            </div>{" "}
            <span className="md:text-lg">Вид і назва документу</span>
          </a>
        </li>
      </ul>
    </div>
  );
};
