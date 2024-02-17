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
    <header className="container-header max-w-[1536px]">
      <div className="pt-6 pb-4 flex items-center justify-between">
        <div className="flex items-center gap-14">
          <Link className="" href="/">
            <LogoIcon />
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
        <Button route="/" text="Сплатити кредит" style="hidden lg:block" />
      </div>
      <nav className="hidden lg:flex justify-between text-netural_100 ">
        {" "}
        {routeLink.map(({ link, descr }) => (
          <Link
            key={link}
            className={`flex items-center gap-2 text-main hover:text-hover transition-all duration-300
            px-3 py-6 text-primary_400 text-lg font-bold hover:bg-primary_100 focus:bg-primary_100
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
    </header>
  );
};
export default Header;
