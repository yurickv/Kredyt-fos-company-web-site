"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "./Button";
import { usePathname } from "next/navigation";
import { routeLink } from "@/const/routeLink";
import { LogoIcon } from "./icons/LogoIcon";
import { PhoneIcon } from "./icons/PhoneIcon";

const Header: React.FC = () => {
  const params = usePathname();

  return (
    <header className="container">
      <div className="pt-6 pb-4 flex items-center justify-between">
        <div className="flex items-center gap-14">
          <Link className="" href="/">
            <LogoIcon />
          </Link>
          <a
            href="tel:+38(067)3501977"
            className="flex gap-2.5 items-center text-primary_400 group hover:text-primary_300 p-4
                transition-all duration-300 sr-only lg:not-sr-only"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="">
              <PhoneIcon />
            </span>
            <div>+38 097 067-350-19-77</div>
          </a>
        </div>
        <Button route="/" text="Сплатити кредит" />
      </div>
      <nav className="py-[14px] flex justify-between">
        {" "}
        {routeLink.map(({ link, descr }) => (
          <Link
            key={link}
            className={`flex items-center gap-2 text-main hover:text-hover transition-colors duration-300 ${
              params === link &&
              "after:h-full after:mr-auto after:border-2 after:border-purple-200 after:rounded-sm"
            }`}
            href={link}
          >
            {descr}
          </Link>
        ))}
      </nav>
    </header>
  );
};
export default Header;
