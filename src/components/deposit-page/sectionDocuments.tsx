import { SuccessIcon } from "../icons/depositPage/successIcon";

export const SectionDocuments = () => {
  return (
    <section className="bg-netural_100 py-[50px]">
      <div className="div-container">
        <h2 className="title">Перелік документів для оформлення депозиту</h2>
        <ul className="mt-6">
          <li className="flex gap-2 mt-6">
            <SuccessIcon /> <span>Паспорт</span>
          </li>
          <li className="flex gap-2 mt-6">
            <SuccessIcon />{" "}
            <span>Реєстраційний номер облікової картки платника податків</span>
          </li>
          <li className="flex gap-2 mt-6">
            {" "}
            <SuccessIcon />
            <span>Інші документи на вимогу кредитної спілки</span>
          </li>
        </ul>
      </div>
    </section>
  );
};
