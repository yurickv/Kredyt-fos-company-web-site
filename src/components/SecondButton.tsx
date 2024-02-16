import Link from "next/link";

type ButtonProps = {
  route: string;
  text: string;
  style?: string;
};

export const SecondButton = ({ route, text, style }: ButtonProps) => {
  return (
    <div className="rounded-lg overflow-hidden  inline-block">
      <Link
        href={route}
        className="gradient-button py-3 px-[31px] text-lg font-bold"
      >
        {text}
      </Link>
    </div>
  );
};
