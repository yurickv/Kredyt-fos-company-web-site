import { PdfIcon } from "../icons/depositPage/pdfIcon";

export const InfoClientText = () => {
  return (
    <div className="text-primary_700">
      <h3 className="text-primary_400 text-[32px] font-bold py-4">
        Інформація клієнту
      </h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae aut
        repellendus, molestias cumque tempore ipsam ab quos dolor impedit
        nostrum quia hic fuga neque. Ad sunt animi necessitatibus. Commodi,
        amet?
      </p>
      <p className="mt-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae aut
        repellendus, molestias cumque tempore ipsam ab quos dolor impedit
        nostrum quia hic fuga neque. Ad sunt animi necessitatibus. Commodi,
        amet?
      </p>
      <a href="#" className="flex gap-2 mt-6 cursor-pointer">
        <PdfIcon /> Структура власності
      </a>
    </div>
  );
};
