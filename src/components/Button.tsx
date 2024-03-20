import Link from "next/link";

type ButtonProps = {
  route: string;
  text: string;
  style?: string;
};

export const Button = ({ route, text, style }: ButtonProps) => {
  return (
    <Link
      href={route}
      className={`text-netural_100 text-lg font-bold leading-4 tracking-wide relative overflow-hidden
      bg-gradient_1 rounded-md px-[34px] py-5 text-mainTitleBlack text-center block          
      ${style ? style : "w-max"}`}
    >
      {text}
      <span
        className="absolute inset-0 flex items-center justify-center text-lg font-bold leading-4 tracking-wide text-netural_100
      bg-gradient_2 opacity-0 hover:opacity-100 transition-opacity duration-300 z-10 focus:opacity-100"
      >
        {text}
      </span>
    </Link>
  );
};
