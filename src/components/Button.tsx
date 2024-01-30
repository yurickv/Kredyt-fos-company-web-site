import Link from "next/link";

type ButtonProps = {
  route: string;
  text: string;
  width?: string;
};

export const Button = ({ route, text, width }: ButtonProps) => {
  return (
    <Link
      href={route}
      className={`text-netural_100 text-lg font-extrabold leading-4 relative overflow-hidden
      bg-gradient_1 rounded-md px-[34px] py-5 text-mainTitleBlack text-center block          
      ${width ? width : "w-max"}`}
    >
      {text}
      <span
        className="absolute inset-0 flex items-center justify-center text-lg font-extrabold leading-4 text-netural_100
      bg-gradient_2 opacity-0 hover:opacity-100 transition-opacity duration-300 z-10 focus:opacity-100"
      >
        {text}
      </span>
    </Link>
  );
};

// after:content-['Сплатити кредит'] after:absolute after:left-0 after:top-0 after:w-full after:h-full after:transition-all
//   after:bg-gradient_2 after:opacity-0 hover:after:opacity-100 after:rounded-md after:duration-300 after:z-10
