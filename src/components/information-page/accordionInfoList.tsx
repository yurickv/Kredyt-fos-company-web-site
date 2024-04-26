"use client";

import React, { useState } from "react";
import { PointerIcon } from "../icons/contactsPage/pointerIcon";
import { DocumentArchive } from "@/components/information-page/documentArchive";
import { FinService } from "@/components/information-page/finService";
import { InfoClientText } from "@/components/information-page/infoClient";
import { InfoFinStatement } from "@/components/information-page/infoFinStatement";
import { InfoOverdueDebt } from "@/components/information-page/infoOverdueDebt";
import { InfoProtectionConsumer } from "@/components/information-page/infoProtectionCosumer";
import { InfoManagment } from "@/components/information-page/management";
import { infoListTitle } from "@/const/infoPageList";

const AccordionInfoList: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const infoComponents = [
    <InfoClientText />,
    <FinService />,
    <InfoFinStatement />,
    <InfoManagment />,
    <InfoOverdueDebt />,
    <InfoProtectionConsumer />,
    <DocumentArchive />,
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full mx-auto mt-6">
      <h3 className="text-primary_400 text-[32px] font-bold py-4">
        Фінансова звітність
      </h3>
      {infoListTitle.map((data, index) => (
        <div key={index} className="mb-4">
          <button
            className={`flex justify-between items-center w-full text-[16px] md:text-[20px] font-bold text-primary_400
            text-left px-4 py-6 bg-primary_100 hover:bg-primary_200 transition-colors duration-300 ${
              activeIndex === index ? "rounded-t-md" : "rounded-md"
            }`}
            onClick={() => toggleAccordion(index)}
          >
            <div className="flex gap-4 items-center">
              <div className="min-w-1 w-1 min-h-[50px] h-[50px] rounded-full bg-primary_300"></div>
              {data}
            </div>

            <div
              className={`${
                activeIndex === index ? "" : "rotate-180"
              } transition-transform duration-300`}
            >
              <PointerIcon />
            </div>
          </button>
          <div
            className={`overflow-hidden transition-max-height duration-300 bg-netural_200 rounded-b-md px-6  ${
              activeIndex === index ? "max-h-[1700px] pb-6" : "max-h-0"
            }`}
          >
            {activeIndex !== null && infoComponents[activeIndex]}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AccordionInfoList;
