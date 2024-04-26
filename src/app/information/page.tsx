"use client";
import AccordionInfoList from "@/components/information-page/accordionInfoList";
import { DocumentArchive } from "@/components/information-page/documentArchive";
import { FinService } from "@/components/information-page/finService";
import { InfoClientText } from "@/components/information-page/infoClient";
import { InfoFinStatement } from "@/components/information-page/infoFinStatement";
import { InfoOverdueDebt } from "@/components/information-page/infoOverdueDebt";
import { InfoProtectionConsumer } from "@/components/information-page/infoProtectionCosumer";
import { InfoManagment } from "@/components/information-page/management";
import { infoListTitle } from "@/const/infoPageList";
import Link from "next/link";
import React, { useState } from "react";

const Infomation = () => {
  const [activeTitle, setActiveTitle] = useState(0);

  const infoComponents = [
    <InfoClientText />,
    <FinService />,
    <InfoFinStatement />,
    <InfoManagment />,
    <InfoOverdueDebt />,
    <InfoProtectionConsumer />,
    <DocumentArchive />,
  ];

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

          <div className="lg:flex gap-6 hidden">
            {" "}
            <aside className="overflow-hidden min-w-[355px] w-[355px] max-h-[582px] rounded-md border-primary_300 border-2 mt-6">
              <ul className="text-primary_400 text-[18px] font-bold">
                {infoListTitle.map((item, index) => (
                  <li
                    onClick={() => toggleInfo(index)}
                    key={index}
                    className={`p-6 hover:bg-primary_100 transition-colors duration-300 ${
                      index === activeTitle &&
                      "bg-primary_400 !text-netural_100 hover:!text-primary_400"
                    }`}
                  >
                    <h2>{item}</h2>
                  </li>
                ))}
              </ul>
            </aside>
            {infoComponents[activeTitle]}
          </div>
          <div className="lg:hidden">
            <AccordionInfoList />
          </div>
        </div>
      </section>
    </main>
  );
};
export default Infomation;
