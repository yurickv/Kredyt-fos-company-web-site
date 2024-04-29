import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Кредит-ФОС: 25 років успішної роботи на фінансовому ринку",
  description:
    "У 2024 році Кредитна спілка Кредит-ФОС святкує свою чвертьстолітню переможну подорож на фінансовому ринку України. Протягом цих 25 років компанія стала не лише впізнаваним брендом, але й символом надійності та відданості своїм клієнтам.",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      "max-snippet": -1,
    },
  },
};

const Anniversary = () => {
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
            href="/"
            className="text-netural_300 hover:text-primary_200 transition-colors duration-300"
          >
            Про нас
          </Link>

          <span>&#8250;</span>
          <p>Новини: 25 років кредитній спілці</p>
        </div>
      </section>
      <section className="pt-6 pb-[50px] bg-netural_100 text-[16px] md:text-[18px] text-primary_700">
        <div className="div-container flex flex-col gap-6">
          <h2 className="title">
            Кредит-ФОС: 25 років успішної роботи на фінансовому ринку
          </h2>
          <p>
            У 2024 році Кредитна спілка "Кредит-ФОС" святкує свою чвертьстолітню
            переможну подорож на фінансовому ринку України. Протягом цих 25
            років компанія стала не лише впізнаваним брендом, але й символом
            надійності та відданості своїм клієнтам.
          </p>
          <div className="rounded-md overflow-hidden mx-auto">
            <Image
              src="/newsFoto.webp"
              alt="news in Kredit Union"
              width={626}
              height={626}
            />
          </div>
          <p>
            Заснована у 1999 році, "Кредит-ФОС" здобула довіру мільйонів
            клієнтів завдяки високоякісним фінансовим послугам, прозорому
            управлінню та інноваційному підходу до розвитку. Усі ці роки спілка
            прагнула задовольняти потреби своїх членів, надаючи широкий спектр
            кредитних продуктів, відповідально ставлячись до фінансових ризиків
            та завжди дотримуючись високих стандартів обслуговування.
          </p>
          <p>
            У своєму ювілейному році "Кредит-ФОС" продовжує розширювати свою
            географію і відкривати філії по Тернопільській області,
            впроваджувати нові технології та зберігати віру в майбутнє. Це свято
            - не лише досягнення однієї компанії, а й свідоцтво про довготривалі
            стосунки з клієнтами та партнерами, які є невід'ємною частиною
            історії "Кредит-ФОС
          </p>
          <p>
            Наш розвиток - результат довіри та співпраці кожного члена кредитної
            спілки "Кредит-ФОС".Дякуємо всій нашій спільноті, усім працівникам
            та членам наглядових органів, які працювали в той чи інший час.
            коротко чи довго - усі ви допомогли дійти до сьогодні.
          </p>
        </div>
      </section>
    </main>
  );
};
export default Anniversary;
