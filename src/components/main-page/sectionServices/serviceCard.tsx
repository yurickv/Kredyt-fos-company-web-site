import Image from "next/image";
import Link from "next/link";

interface ServiceCardProps {
  title: string;
  text: string;
  foto: string;
  route: string;
  styleFoto: string;
}

export const ServiceCard = ({
  title,
  text,
  foto,
  route,
  styleFoto,
}: ServiceCardProps) => {
  return (
    <Link
      href={route}
      className="w-[332px] h-[208px] md:w-[588px] md:h-[368px] rounded-md md:bg-[url('/background-for-services.webp')] bg-[url('/mobile-background-for-services.webp')] 
      flex justify-end items-end group relative"
    >
      <div className="absolute z-10 top-[16px] md:top-[34px] left-[21px] md:left-[34px]">
        <h2 className="text-primary_400 text-[20px] md:text-[48px] font-semibold">
          {title}
        </h2>
        <p className="text-primary_700 max-w-[170px] min-h-[104px] md:max-w-[290px] pt-2 md:pt-4 ">
          {text}
        </p>
        <p className="bg-gradient_1 group-hover:bg-gradient_2 inline-block text-transparent font-bold bg-clip-text relative pt-3 md:pt-[89px]">
          Ознайомитись{" "}
          <span className="text-primary_400 group-hover:text-primary_300 transition-all duration-300">
            &#8250;
          </span>
          <span className="absolute z-20 top-9 md:top-[89px] inset-0 bg-gradient_2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 focus:opacity-100 text-transparent bg-clip-text">
            Ознайомитись
          </span>
        </p>
      </div>
      <div className={`relative ${styleFoto} transition-all duration-300`}>
        <Image src={foto} fill alt="Picture of the service offer" />
      </div>
    </Link>
  );
};
