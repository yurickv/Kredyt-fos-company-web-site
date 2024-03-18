"use client";
import Link from "next/link";
import { MapPointerIcon } from "../icons/contactsPage/mapPointerIcon";
import { PointerIcon } from "../icons/contactsPage/pointerIcon";
import { SuccessIcon } from "../icons/depositPage/successIcon";

export const SectionPaidCredit = () => {
  const handleClick = () => {
    alert("Ця можливість поки що в розробці, скористайтесь іншими");
  };

  return (
    <section className="bg-netural_100 py-[50px]" id="paidCredit">
      <div className="div-container">
        <h2 className="title">Як сплатити кредит:</h2>
        <div className="flex flex-col lg:flex-row justify-between">
          <div>
            <div className="mt-6">
              <div className="text-primary_400 flex gap-2">
                <div className="w-6">
                  <MapPointerIcon />
                </div>
                <h3 className="text-[16px] md:text-[18px] font-bold text-primary_700">
                  Готівкою у відділеннях Кредит-ФОС
                </h3>
              </div>
              <p className="text-primary_700 py-4">
                Оберіть відділення та завітайте у зручний для Вас час
              </p>
              <Link
                href="/contacts"
                className="text-[18px] font-bold text-primary_300 hover:text-primary_200 transition-colors duration-200 flex gap-2 group"
              >
                Обрати відділеня
                <div
                  className={`transition-transform duration-200 rotate-90 group-hover:scale-125 w-6`}
                >
                  <PointerIcon />
                </div>
              </Link>
            </div>
            <div className="mt-6">
              <div className="text-primary_400 flex gap-2">
                <div className="w-6">
                  <SuccessIcon />
                </div>
                <h3 className="text-[16px] md:text-[18px] font-bold text-primary_700">
                  Безготівково через сервіс онлайн платежів iPay.ua
                </h3>
              </div>
              <p className="text-primary_700 py-4">
                Онлайн платежі та перекази за 1 хвилину
              </p>
              <button
                type="button"
                onClick={handleClick}
                className="text-[18px] font-bold text-primary_300 hover:text-primary_200 transition-colors duration-200 flex gap-2 group"
              >
                Здійснити платіж
                <div
                  className={`transition-transform duration-200 rotate-90 group-hover:scale-125 w-6`}
                >
                  <PointerIcon />
                </div>
              </button>
            </div>
          </div>

          <div className="mt-6 max-w-[500px]">
            <div className="text-primary_400 flex gap-2">
              <div className="w-6">
                <MapPointerIcon />
              </div>

              <h3 className="text-[16px] md:text-[18px] font-bold text-primary_700">
                Через відділення банків або мобільні додатки банків за
                реквізитами:
              </h3>
            </div>
            <ul className="text-primary_700 py-4">
              <li>Банк: УКРЕКСІМБАНК",</li>
              <li>ЄДУПОУ 25694430</li>
              <li>Одержувач: Кредит-ФОС</li>
              <li>Код одержувача:4444444</li>
              <li>IBAN:UA803223130000026506000000200</li>
              <li>
                Призначення платежу: Платіж за кредитним договором №__, від __
                р., позичальник ПІП, тел. ____.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
