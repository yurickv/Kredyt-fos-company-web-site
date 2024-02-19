import { SecondButton } from "../SecondButton";

interface HeroTextProps {
  title: string;
  text: string;
  textButton: string;
  route: string;
}

export const HeroText = ({ title, text, textButton, route }: HeroTextProps) => {
  return (
    <div className="relative z-10 py-[66px] md:py-[61px] lg:py-[54px]  lg:pr-[280px]">
      <h2 className="text-primary_400 text-[40px] md:text-[64px] font-extrabold max-w-[301px] md:max-w-[700px]">
        {title}
      </h2>
      <p className="text-primary_700 font-semibold pt-7 pb-[178px] md:pt-4 md:pb-8">
        {text}
      </p>
      <SecondButton route={route} text={textButton} />
    </div>
  );
};
