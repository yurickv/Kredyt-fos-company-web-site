"use client";
import { useState } from "react";

import Link from "next/link";
import { Button } from "./Button";
import { usePathname } from "next/navigation";
import { routeLink } from "@/const/routeLink";
import { LogoIcon } from "./icons/LogoIcon";
import { PhoneIcon } from "./icons/PhoneIcon";
import { LogoIconMobile } from "./icons/LogoIconMobile";
import { LogoIconTablet } from "./icons/LogoIconTablet";
import { MenuMobileIcon } from "./icons/MenuMobileIcon";
import OnCloseIcon from "./icons/creditPage/onCloseIcon";

const Header: React.FC = () => {
  const params = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const onCloseMobileMenu = () => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = isMobileMenuOpen ? "auto" : "hidden";
  };

  return (
    <header className="bg-netural_100 w-full h-[81px] lg:h-[178px]">
      <div className="w-full fixed top-0 inset-x-0 z-40 bg-netural_100">
        <div className="px-4 md:px-[78px] lg:px-[120px] max-w-[1536px] mx-auto">
          <div className="pt-6 pb-4 flex items-center justify-between">
            <div className="flex items-center gap-14">
              <Link className="" href="/" onClick={onCloseMobileMenu}>
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
              <a
                href="tel:+38(067)3501977"
                className="flex gap-2.5 items-center text-primary_400 group hover:text-primary_300 p-4
                transition-all duration-300 sr-only lg:not-sr-only text-xl font-extrabold"
                target="_blank"
                rel="noopener noreferrer"
              >
                <PhoneIcon />
                <div>+38 067 350-19-77</div>
              </a>
            </div>
            <Button
              route="credit/#paidCredit"
              text="Сплатити кредит"
              style="hidden lg:block"
            />
            <button
              type="button"
              aria-label="on open mobile navigation"
              onClick={toggleMobileMenu}
              className="text-primary_400 hover:text-primary_300 lg:sr-only"
            >
              {!isMobileMenuOpen && <MenuMobileIcon />}
              {isMobileMenuOpen && <OnCloseIcon />}
            </button>
          </div>
          <nav className="hidden lg:flex justify-between text-netural_100 ">
            {" "}
            {routeLink.map(({ link, descr }) => (
              <Link
                key={link}
                className={`px-10 py-5 text-primary_400 text-lg font-bold tracking-wide
               hover:bg-primary_100 focus:bg-primary_100 transition-colors duration-300
            ${
              params === link &&
              "bg-primary_400 !text-inherit hover:!text-primary_400 focus:!text-primary_400"
            }`}
                href={link}
              >
                {descr}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {isMobileMenuOpen && (
        <nav
          className={`bg-primary_400 text-netural_100 fixed top-[81px] z-50 w-full h-full flex flex-col gap-6 
          md:px-16 py-2 md:py-10`}
        >
          {" "}
          {routeLink.map(({ link, descr }) => (
            <Link
              key={link}
              className={`transition-all duration-300
            px-4 py-4 text-lg font-bold tracking-wide hover:text-primary_100 focus:text-primary_100
            ${params === link && "!text-primary_100"}`}
              href={link}
              onClick={toggleMobileMenu}
            >
              {descr}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};
export default Header;
