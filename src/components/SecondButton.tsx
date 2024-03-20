import Link from "next/link";

type ButtonProps = {
  route: string;
  text: string;
};

export const SecondButton = ({ route, text }: ButtonProps) => {
  return (
    <div className="rounded-md overflow-hidden inline-block">
      <Link
        href={route}
        className="gradient-button py-3 px-[31px] text-lg font-bold"
      >
        {text}
      </Link>
    </div>
  );
};
