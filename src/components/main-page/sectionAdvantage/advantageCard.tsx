import Link from "next/link";

interface AdvantageCardProps {
  title: string;
  text: string;
  route: string;
}

export const AdvantageCard = ({ title, text, route }: AdvantageCardProps) => {
  return (
    <>
      <h3 className="py-4 text-primary_400 text-[16px] md:text-[20px] font-bold md:font-extrabold">
        {title}
      </h3>
      <p className="font-normal text-[16px] md:text-[18px] text-primary_700 pb-2 md:min-h-[104px] xl:min-h-[116px]">
        {text}
      </p>
      <Link
        aria-label={route}
        href={route}
        className="text-primary_300 hover:text-primary_200 font-extrabold py-2 pr-2 transition-colors duration-300 text-[18px]"
      >
        Більше
      </Link>
    </>
  );
};
