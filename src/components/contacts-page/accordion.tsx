"use client";
import { contactsData } from "@/const/contactsData";
import React, { useState } from "react";
import { PointerIcon } from "../icons/contactsPage/pointerIcon";
import Link from "next/link";
import { MapPointerIcon } from "../icons/contactsPage/mapPointerIcon";

const Accordion: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full mx-auto mt-6">
      {contactsData.map((data, index) => (
        <div key={index} className="mb-4">
          <button
            className={`flex justify-between w-full text-[16px] md:text-[20px] font-bold text-primary_400
            text-left p-6 bg-netural_200 hover:bg-primary_100 transition-colors duration-300 ${
              activeIndex === index ? "rounded-t-md" : "rounded-md"
            }`}
            onClick={() => toggleAccordion(index)}
          >
            {data.adress}
            <div
              className={`${
                activeIndex === index ? "" : "rotate-180"
              } transition-transform duration-300`}
            >
              <PointerIcon />
            </div>
          </button>
          <div
            className={`overflow-hidden transition-max-height duration-300 bg-netural_200 rounded-b-md px-6 ${
              activeIndex === index ? "max-h-[700px]" : "max-h-0"
            }`}
          >
            <Link
              href={data.linkAdress}
              target="_blank"
              rel="noopener noreferrer"
              className="max-w-[250px] flex gap-2 items-center text-[18px] font-semibold text-primary_300 hover:text-primary_200 transition-colors duration-300 py-1"
            >
              <MapPointerIcon /> Показати на мапі
            </Link>

            <h3 className="text-[16px] md:text-[18px] text-primary_700 mt-6">
              Повне найменування:{" "}
              <span className="text-primary_400 font-bold">{data.title}</span>
            </h3>
            <p className="text-[16px] md:text-[18px] text-primary_700 mt-2">
              Код ЄДРПОУ:{" "}
              <span className="text-primary_400 font-bold">
                {data.kodStateReg}
              </span>
            </p>
            <div className="flex flex-col lg:flex-row gap-[300px] pb-6">
              <div>
                <h3 className="mt-6 text-[16px] md:text-[18px] text-primary_700">
                  Контакти для звернення клієнтів:
                </h3>
                <ul className="mt-2">
                  {data.phone.map((item, index) => (
                    <li key={index} className="mt-2 text-primary_400 font-bold">
                      <Link
                        href={`tel:${item}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-main transition-colors duration-300"
                      >
                        {item}
                      </Link>{" "}
                    </li>
                  ))}
                  <li key="email" className="mt-2 text-primary_400 font-bold">
                    {data.email}
                  </li>
                </ul>
                <p className="text-[16px] md:text-[18px] text-primary_700 mt-6">
                  Керівник:{" "}
                  <span className="text-primary_400 font-bold">{data.ceo}</span>
                </p>
              </div>
              <div>
                <h3 className="mt-6 text-[16px] md:text-[18px] text-primary_700">
                  Графік роботи:
                </h3>
                <ul>
                  <li className="text-[16px] md:text-[18px] text-primary_700 mt-6">
                    Пон-П'ятн:{" "}
                    <span className="text-primary_400 font-bold">
                      {data.workTime[0]}
                    </span>
                  </li>
                  <li className="text-[16px] md:text-[18px] text-primary_700 mt-6">
                    Субота:{" "}
                    <span className="text-primary_400 font-bold">
                      {data.workTime[1]}
                    </span>
                  </li>
                  <li className="text-[16px] md:text-[18px] text-primary_700 mt-6">
                    Неділя:{" "}
                    <span className="text-primary_400 font-bold">Вихідний</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
