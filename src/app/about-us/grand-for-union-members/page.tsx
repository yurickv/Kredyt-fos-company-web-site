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

const GrandForUnionMembers = () => {
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
          <p>Новини: Гранд для учасників спілки</p>
        </div>
      </section>
      <section className="pt-6 pb-[50px] bg-netural_100 text-[16px] md:text-[18px] text-primary_700">
        <div className="div-container flex flex-col gap-6">
          <h2 className="title">Гранд для учасників спілки</h2>
          <p>
            Гранд для учасників спілки: нові можливості завдяки проекту КЕП та
            Всесвітній фундації кредитних спілок
          </p>
          <div className="rounded-md overflow-hidden mx-auto">
            <Image
              src="/newsFoto1.webp"
              alt="news in Kredit Union"
              width={1000}
              height={638}
            />
          </div>
          <p>
            Кредитна спілка "Кредит-ФОС" продовжує віддавати перевагу своїм
            членам, надаючи їм не лише фінансову підтримку, але й активно
            допомагаючи у реалізації їхніх мрій та цілей. Саме в цьому контексті
            ми раді оголосити про гранд від Всесвітньої фундації кредитних
            спілок, що надійшов до нас за підтримки проекту КЕП (Кредитні спілки
            для ефективності та просування).
          </p>
          <p>
            Даний гранд став можливим завдяки нашим спільним зусиллям та
            партнерству з Всесвітньою фундацією кредитних спілок. Ця підтримка
            стане ключовим інструментом для розвитку наших учасників, зокрема
            агровиробників, та допоможе їм забезпечити більш ефективне та
            продуктивне ведення сільського господарства. Протягом
            жовтня-листопада 2023року підтримку отримали 18 членів нашої спілки.
          </p>
          <p>
            Основною метою цього гранту є надання фінансової підтримки для
            придбання сучасного обладнання для агровиробників. Завдяки цій
            ініціативі наші учасники матимуть можливість покращити якість своєї
            продукції, збільшити врожайність та ефективність виробництва.
          </p>
          <p>
            Ми вдячні Всесвітній фундації кредитних спілок та проекту КЕП за цю
            надзвичайно важливу підтримку. Цей гранд стане великим внеском у
            розвиток наших учасників та сприятиме створенню стійкої та
            процвітаючої громади.
          </p>
        </div>
      </section>
    </main>
  );
};
export default GrandForUnionMembers;
