"use client";
import { contactsData } from "@/const/contactsData";
import React, { useState } from "react";
import { PointerIcon } from "../icons/contactsPage/pointerIcon";

const Accordion: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-md mx-auto">
      {contactsData.map((data, index) => (
        <div key={index} className="mb-4">
          <button
            className={`flex justify-between w-full text-left px-4 py-2 bg-gray-200 hover:bg-gray-300 transition-colors duration-300 ${
              activeIndex === index ? "active" : ""
            }`}
            onClick={() => toggleAccordion(index)}
          >
            {data.adress}{" "}
            <div
              className={`${
                activeIndex === index ? "" : "rotate-180"
              } transition-transform duration-300`}
            >
              <PointerIcon />
            </div>
          </button>
          <div
            className={`overflow-hidden transition-max-height duration-300 ${
              activeIndex === index ? "max-h-96" : "max-h-0"
            }`}
          >
            <p className="p-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
