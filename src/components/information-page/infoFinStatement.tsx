import { PdfIcon } from "../icons/depositPage/pdfIcon";
import { infoFinStatement } from "@/const/infoFinStatement";
import Link from "next/link";
import React, { useState } from "react";

export const InfoFinStatement = () => {
  const [activeTitle, setActiveTitle] = useState(0);

  const toggleInfo = (index: number) => {
    setActiveTitle(index);
  };
  return (
    <div className='text-primary_700'>
      <h3 className='text-primary_400 text-[32px] font-bold py-4'>
        Фінансова звітність
      </h3>
      <ul className='text-primary_400 text-[18px] font-bold flex gap-4 flex-wrap'>
        {infoFinStatement.map((item, index) => (
          <li
            onClick={() => toggleInfo(index)}
            key={index}
            className='p-4 hover:bg-primary_100 transition-colors duration-300'
          >
            <h2>{item.year}</h2>
            {index === activeTitle && (
              <div className='w-[40px] h-1 rounded-full bg-primary_300 mt-2 md:mt-4'></div>
            )}
          </li>
        ))}
      </ul>
      <div>
        {infoFinStatement.map((item, index) => (
          <ul
            key={index}
            className={` ${activeTitle === index ? "block" : "hidden"}`}
          >
            <li className='border-b border-primary_200 py-4'>
              <Link
                href={item.finStatement}
                target='_blank'
                rel='noopener noreferrer'
                className='flex gap-2 items-center text-[18px] font-semibold text-primary_300 hover:text-primary_400 transition-colors duration-300'
              >
                <div className='w-6 h-6'>
                  <PdfIcon />
                </div>{" "}
                Фінансова звітність за {item.year} рік
              </Link>
            </li>
            <li>
              <Link
                href={item.auditStatement}
                target='_blank'
                rel='noopener noreferrer'
                className='py-4 flex gap-2 items-center text-[18px] font-semibold text-primary_300 hover:text-primary_400 transition-colors duration-300'
              >
                <div className='w-6 h-6'>
                  <PdfIcon />
                </div>
                Звіт незалежного аудитора за {item.year} рік
              </Link>
            </li>
            {item.assuranceReport && (
              <li>
                <Link
                  href={item.assuranceReport}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='py-4 flex gap-2 items-center text-[18px] font-semibold text-primary_300 hover:text-primary_400 transition-colors duration-300'
                >
                  <div className='w-6 h-6'>
                    <PdfIcon />
                  </div>
                  Звіт з надання впевненості за {item.year} рік
                </Link>
              </li>
            )}
          </ul>
        ))}
      </div>
    </div>
  );
};
