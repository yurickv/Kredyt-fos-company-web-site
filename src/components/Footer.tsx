"use client";

import { useState } from "react";

import Link from "next/link";
import { LogoIcon } from "./icons/LogoIcon";
import { PhoneIcon } from "./icons/PhoneIcon";
import { routeLink } from "@/const/routeLink";
import { LogoIconMobile } from "./icons/LogoIconMobile";
import { LogoIconTablet } from "./icons/LogoIconTablet";
import { ModalWindow } from "./modalWindow";

const Footer: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = async () => {
    setIsModalOpen(true);
  };

  return (
    <footer className="pt-[50px] pb-6 px-4 md:px-[78px] lg:px-[120px] md:pt-[100px] md:pb-[50px] bg-gradient_section">
      <div className="flex flex-col gap-14 lg:flex-row max-w-[844px] lg:max-w-[1296px] lg:justify-between mx-auto">
        {" "}
        <div className="flex gap-14 md:gap-[65px] lg:gap-[86px] items-start max-[543px]:justify-between max-[743px]:justify-center">
          <div className="flex flex-col xl:flex-row items-center gap-14">
            {" "}
            <Link className="" href="/">
              <div className="hidden lg:block">
                <LogoIcon />
              </div>
              <div className="hidden md:block lg:hidden">
                <LogoIconTablet />
              </div>
              <div className="md:hidden">
                <LogoIconMobile />
              </div>
            </Link>
            <div>
              {" "}
              <a
                href="tel:+38(067)3501977"
                className="flex gap-2.5 items-center text-primary_400 group hover:text-primary_300 pb-2
                transition-all duration-300 text-base md:text-lg font-bold"
                target="_blank"
                rel="noopener noreferrer"
              >
                <PhoneIcon />
                067 350-19-77
              </a>
              <a
                href="tel:+38(067)3501977"
                className="flex gap-2.5 items-center text-primary_400 group hover:text-primary_300 pb-2 mt-2 lg:mt-4
                transition-all duration-300 text-base md:text-lg font-bold"
                target="_blank"
                rel="noopener noreferrer"
              >
                <PhoneIcon />
                067 350-19-77
              </a>
            </div>
          </div>
          <nav className="flex flex-col md:grid grid-cols-2 grid-rows-3 gap-x-[66px] lg:gap-x-[86px] gap-y-2 lg:gap-y-4">
            {routeLink.map(({ link, descr }) => (
              <Link
                key={link}
                className="transition-colors duration-300
           pb-2 text-primary_400 text-base md:text-lg font-normal md:font-semibold hover:text-primary_300 focus:text-primary_300"
                href={link}
              >
                {descr}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-col gap-6 items-end">
          <h3 className="text-[16px] md:text-[20px] font-bold text-primary_400">
            Залишились запитання?
          </h3>
          <p className="text-[16px] md:text-[18px] text-primary_400">
            Задай просто зараз
          </p>
          <button
            type="button"
            onClick={handleClick}
            className="text-netural_100 text-lg font-extrabold leading-4 relative overflow-hidden 
      bg-gradient_1 rounded-md px-[34px] py-5 text-mainTitleBlack text-center block md:min-w-[250px] md:w-[250px] w-full"
          >
            Задати запитання
            <span
              className="absolute inset-0 flex items-center justify-center text-lg font-extrabold leading-4 text-netural_100
      bg-gradient_2 opacity-0 hover:opacity-100 transition-opacity duration-300 z-10 focus:opacity-100"
            >
              Задати запитання
            </span>
          </button>
        </div>
      </div>
      <p className="text-base text-primary_400 md:text-lg md:font-semibold mt-14 text-center">
        © Кредитна спілка “Кредит-ФОС”, 2024
      </p>
      {isModalOpen && (
        <ModalWindow
          formData={{}}
          title="Задати запитання"
          textButton="Відправити"
          style="yes"
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </footer>
  );
};
export default Footer;
