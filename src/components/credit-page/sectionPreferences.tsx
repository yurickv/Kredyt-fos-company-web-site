import { PreferencesFourIcon } from "../icons/creditPage/PreferencesFourIcon";
import { PreferencesOneIcon } from "../icons/creditPage/PreferencesOneIcon";
import { PreferencesThreeIcon } from "../icons/creditPage/PreferencesThreeIcon";
import { PreferencesTwoIcon } from "../icons/creditPage/PreferencesTwoIcon";

export const SectionPreferences = () => {
  return (
    <section className="bg-netural_100 py-[50px]">
      <div className="div-container flex flex-col gap-6">
        <h2 className="title">Переваги кредитування у Кредит-ФОС:</h2>
        <ul className="md:text-[18px] text-primary_700 flex flex-col gap-6 md:grid md:grid-cols-2 lg:flex lg:flex-row">
          <li className="md:w-[277px] lg:w-[442px]">
            <div className="w-[60px] mb-4">
              <PreferencesOneIcon />
            </div>
            Спрощена процедура оформлення та якісне обслуговування
          </li>
          <li className="md:w-[277px] lg:w-[442px]">
            <div className="w-[60px] mb-4">
              <PreferencesTwoIcon />
            </div>
            Відкрита методика нарахування відсотків за користування кредитом
          </li>
          <li className="md:w-[277px] lg:w-[442px]">
            <div className="w-[60px] mb-4">
              <PreferencesThreeIcon />
            </div>
            Ми функціонуємо відповідно до всіх вимог і стандартів фінансового
            регулювання.
          </li>

          <li className="md:w-[277px] lg:w-[442px]">
            <div className="w-[60px] mb-4">
              <PreferencesFourIcon />
            </div>
            Економія часу завдяки швидкому та якісному обслуговуванні
          </li>
        </ul>
      </div>
    </section>
  );
};
