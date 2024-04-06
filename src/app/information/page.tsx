"use client";
import { InfoClientText } from "@/components/information-page/infoClient";
import Link from "next/link";
import React, { useState } from "react";

const infoList = [
  "Інформація клієнту",
  "Фінансові послуги",
  "Фінансова звітність",
  "Органи управління",
  "Інформація щодо врегулювання простроченої заборгованості",
  "Механізм захисту прав споживачів",
  "Архів документів",
];

const Infomation = () => {
  const [activeTitle, setActiveTitle] = useState(0);

  const toggleInfo = (index: number) => {
    setActiveTitle(index);
  };

  return (
    <main>
      <section className="bg-transparent min-h-[300px] py-16 md:py-[100px] lg:py-[120px]">
        <div className="fixed -top-[1px] -z-10 bg-[url('/Main-screen-1.webp')] bg-center bg-cover w-full h-[490px]"></div>
        <div className="div-container">
          <h1 className="text-primary_400  font-extrabold text-[32px] md:text-[40px]">
            Кредит ФОС - ваш партнер у фінансах
          </h1>
        </div>
      </section>
      <section className="bg-netural_100">
        <div className="div-container text-primary_200 flex gap-2 pt-4">
          <Link
            href="/"
            className="text-netural_300 hover:text-primary_200 transition-colors duration-300"
          >
            Домашня
          </Link>
          <span>&#8250;</span>
          <p>Інформація</p>
        </div>
      </section>
      <section className="pt-[24px] pb-[50px] bg-netural_100">
        <div className="div-container">
          <h2 className="title">Інформація</h2>
          <aside className="w-[355px] rounded-md border-primary_300 border-2 mt-6">
            <ul className="text-primary_400 text-[18px] font-bold">
              {infoList.map((item, index) => (
                <li key={item} className="p-6">
                  <h2 onClick={() => toggleInfo(index)}>{item}</h2>
                  {activeTitle === index && (
                    <div className="mt-2">Information Block for {index}</div>
                  )}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>
    </main>
  );
};
export default Infomation;
