import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Відкриття філії в м.Збараж",
  description: "Відкриття філії в м.Збараж",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      "max-snippet": -1,
    },
  },
};

const OpeningBranchZbarazh = () => {
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
          <p>Новини: Відкриття філії в м.Збараж</p>
        </div>
      </section>
      <section className="pt-6 pb-[50px] bg-netural_100 text-[16px] md:text-[18px] text-primary_700">
        <div className="div-container flex flex-col gap-6">
          <h2 className="title">Відкриття філії в м.Збараж</h2>
          <p>
            Радість та гордість оголосити про наше нове досягнення - відкриття
            філії у місті Збараж. Для Кредитної спілки "Кредит-ФОС" це важливий
            крок у розвитку та зміцненні відносин з нашими клієнтами у Збаражі
            та навколишніх районах.
          </p>
          <div className="rounded-md overflow-hidden mx-auto">
            <Image
              src="/newsFoto4.webp"
              alt="news in Kredit Union"
              width={1000}
              height={638}
            />
          </div>
          <p>
            Відкриття філії в місті Збараж є виразом нашого бажання бути ще
            ближче до наших клієнтів, надаючи їм зручний доступ до наших послуг
            та фінансової підтримки. У новій філії клієнти матимуть можливість
            скористатися широким спектром фінансових послуг, включаючи
            кредитування, вклади, консультації та інші фінансові рішення.
          </p>
          <p>
            Ми віримо, що відкриття філії в місті Збараж сприятиме подальшому
            розвитку економіки регіону та допоможе нам поглибити наші стосунки з
            місцевими громадами та бізнесами. Цей крок є ще одним свідченням
            нашої відданості нашим клієнтам та нашим цілям забезпечення
            фінансової стабільності та процвітання усієї спільноти.
          </p>
          <p>
            Запрошуємо всіх жителів міста Збараж та навколишніх районів
            відвідати нашу нову філію та скористатися нашими послугами. Ми
            завжди готові допомогти вам досягти ваших фінансових цілей та мрій.
          </p>
        </div>
      </section>
    </main>
  );
};
export default OpeningBranchZbarazh;
