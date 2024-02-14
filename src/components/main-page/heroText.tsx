import { Button } from "../Button";

interface HeroTextProps {
  title: string;
  text: string;
}

export const HeroText = ({ title, text }: HeroTextProps) => {
  return (
    <div className="absolute top-[66px] left-[36px] md:top-[61px] md:left-[80px] lg:top-[54px] lg:left-[120px]">
      <h2 className="text-primary_400 text-[40px] md:text-[64px] font-extrabold">
        {title}
      </h2>
      <p className="text-primary_700 font-semibold">{text}</p>
      <Button route="/deposit" text="Дізнатись більше" style="block" />
    </div>
  );
};
