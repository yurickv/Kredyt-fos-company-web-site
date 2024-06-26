import Image from "next/image";
import Link from "next/link";

interface newsCardProps {
  title: string;
  text: string;
  foto: string;
  route: string;
}

export const NewsCard = ({ title, text, foto, route }: newsCardProps) => {
  return (
    <Link href={route} className="flex flex-col group h-full">
      <div className="relative w-full h-[206px] min-h-[206px] rounded-md overflow-hidden">
        <Image
          src={foto}
          sizes="(max-width: 768px) 100vw, (min-width: 1280px) 50vw,  33vw"
          fill
          style={{
            objectFit: "cover",
          }}
          alt="news in Kredit Union"
        />
      </div>
      <div className="">
        <h2 className="text-primary_400 text-[16px] md:text-[20px] font-bold py-4">
          {title}
        </h2>
        <div className="w-[50px] h-1 rounded-full bg-primary_100 group-hover:bg-primary_300 transition-all duration-300"></div>
        <p className="text-primary_700 text-[16px] pt-4">{text}</p>
      </div>
    </Link>
  );
};
