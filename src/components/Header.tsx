"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone } from "./icons/Phone";
import { Button } from "./Button";
import { usePathname } from "next/navigation";
import { routeLink } from "@/const/routeLink";

const Header: React.FC = () => {
  const params = usePathname();

  return (
    <header>
      <div className="px-[120px] py-[14px] flex items-center justify-between bg-slate-100">
        <div className="flex items-center">
          <Link
            className="float-left relative h-[75px] w-[200px] mr-[76px]"
            href="/"
          >
            {" "}
            <Image
              src="/Kredyt-FOS.webp"
              alt="Logo company"
              fill
              priority
              style={{
                objectFit: "cover",
              }}
            />
          </Link>
          <div>
            {" "}
            <a
              href="tel:+38(067)3501977"
              className="flex gap-3 items-center max-w-[300px]
                group hover:text-main font-poppins rounded-lg p-2
               hover:bg-orange-100 transition-all duration-300
                dark:hover:bg-hoverBlack 
                "
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="">
                <Phone />
              </span>
              <div
              //   className="text-mainText dark:text-mainTextBlack group-hover:text-main
              //   dark:group-hover:text-mainTitle font-poppins"
              >
                <span className="hidden min-[450px]:inline-block">+38</span> 097
                067-350-19-77
              </div>
            </a>{" "}
          </div>
        </div>
        <Button route="/" text="Сплатити кредит" />
      </div>
      <nav className="px-[120px] py-[14px] flex justify-between">
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
