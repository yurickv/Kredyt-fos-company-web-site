import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Офіційне повідомлення щодо рішення НБУ",
  description:
    "Офіційне повідомлення КС «Кредит-ФОС» щодо рішення Національного банку України: за результатами планового нагляду застосовано захід впливу у вигляді письмового застереження. Спілка працює у звичайному режимі.",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      "max-snippet": -1,
    },
  },
};

const OfficialNotice = () => {
  return (
    <main>
      <section className="bg-transparent min-h-[300px] py-16 md:py-[100px] lg:py-[120px]">
        <div className="fixed -top-[1px] -z-10 bg-[url('/Main-screen-1.webp')] bg-center bg-cover w-full h-[490px]"></div>
        <div className="div-container">
          <h1 className="text-primary_400  font-extrabold text-[32px] md:text-[40px]">
            Кредит ФОС - ваш партнер у фінансах
          </h1>
        </div>
      </section>
      <section className="bg-netural_100">
        <div className="div-container text-primary_200 flex gap-2 pt-4">
          <Link
            href="/"
            className="text-netural_300 hover:text-primary_200 transition-colors duration-300"
          >
            Домашня
          </Link>
          <span>&#8250;</span>
          <Link
            href="/about-us"
            className="text-netural_300 hover:text-primary_200 transition-colors duration-300"
          >
            Про нас
          </Link>

          <span>&#8250;</span>
          <p>Новини: Офіційне повідомлення щодо рішення НБУ</p>
        </div>
      </section>
      <section className="pt-6 pb-[50px] bg-netural_100 text-[16px] md:text-[18px] text-primary_700">
        <div className="div-container flex flex-col gap-6">
          <h2 className="title">
            Офіційне повідомлення КС «Кредит-ФОС» щодо рішення Національного
            банку України
          </h2>
          <p>
            Застосовано застереження, ознайомитись{" "}
            <Link
              href="https://drive.google.com/file/d/1cLk976YAO651BPMPYXeP3zI5YamYBWtB/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary_400 hover:text-primary_300 underline font-bold"
            >
              тут
            </Link>
          </p>
          <div className="rounded-md overflow-hidden mx-auto">
            <Image
              src="/news-foto/nbu-letter-new.webp"
              alt="news in Kredit Union"
              width={720}
              height={450}
            />
          </div>
        </div>
      </section>
    </main>
  );
};
export default OfficialNotice;
