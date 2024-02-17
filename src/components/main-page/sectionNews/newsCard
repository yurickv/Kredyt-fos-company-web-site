import Image from "next/image";
import Link from "next/link";

interface newsCardProps {
  title: string;
  text: string;
  foto: string;
  route: string;
  styleFoto?: string;
}

export const NewsCard = ({
  title,
  text,
  foto,
  route,
  styleFoto,
}: newsCardProps) => {
  return (
    <Link
      href={route}
      className="w-[332px] h-[208px] md:w-[588px] md:h-[368px] rounded-md md:bg-[url('/background-for-services.webp')] bg-[url('/mobile-background-for-services.webp')] 
      flex justify-end items-end group relative"
    >
      <div className="relative h-[206px] rounded-md overflow-hidden">
            <Image src={foto} fill alt="news in Kredit Union" />
      </div>
      <div className="">
        <h2 className="text-primary_400 text-[16px] md:text-[20px] font-bold pt-4">
          {title}
        </h2>
        <p className="text-primary_700 text-[16px] pt-4">
          {text}
        </p>        
      </div>
      
    </Link>
  );
};
