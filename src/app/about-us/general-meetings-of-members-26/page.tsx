import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Загальні збори членів Кредит-ФОС 2026",
  description:
    "Запрошення на річні загальні збори членів кредитної спілки Кредит-ФОС, які відбудуться 30 червня 2026 року",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      "max-snippet": -1,
    },
  },
};

const GeneralMitings = () => {
  return (
    <main>
      <section className='bg-transparent min-h-[300px] py-16 md:py-[100px] lg:py-[120px]'>
        <div className="fixed -top-[1px] -z-10 bg-[url('/Main-screen-1.webp')] bg-center bg-cover w-full h-[490px]"></div>
        <div className='div-container'>
          <h1 className='text-primary_400  font-extrabold text-[32px] md:text-[40px]'>
            Кредит ФОС - ваш партнер у фінансах
          </h1>
        </div>
      </section>
      <section className='bg-netural_100'>
        <div className='div-container text-primary_200 flex gap-2 pt-4'>
          <Link
            href='/'
            className='text-netural_300 hover:text-primary_200 transition-colors duration-300'
          >
            Домашня
          </Link>
          <span>&#8250;</span>
          <Link
            href='/about-us'
            className='text-netural_300 hover:text-primary_200 transition-colors duration-300'
          >
            Про нас
          </Link>

          <span>&#8250;</span>
          <p>Новини: Загальні збори членів спілки</p>
        </div>
      </section>
      <section className='pt-6 pb-[50px] bg-netural_100 text-[16px] md:text-[18px] text-primary_700'>
        <div className='div-container flex flex-col gap-6'>
          <h2 className='title'>
            Загальні збори членів Кредитної спілки "Кредит-ФОС"
          </h2>
          <p>
            Шановні члени кредитної спілки "Кредит-ФОС" запрошуємо вас на річні
            загальні збори кредитної спілки, які відбудуться 30 червня 2026
            року. Місце проведення - м.Тернопіль, вул. Франка 20, прим. 10.
            Початок реєстрації о 10:00, закінчення реєстрації о 10:50. Початок
            зборів об 11:00. Детальніше{" "}
            <Link
              href='https://docs.google.com/document/d/1iGFKvW192HNSYplvjA6lKkNipGpslADb/edit?usp=sharing&ouid=105532657333642908737&rtpof=true&sd=true'
              className='text-primary_400 hover:text-primary_300 underline font-bold'
            >
              дивіться тут
            </Link>
          </p>
          <div className='rounded-md overflow-hidden mx-auto'>
            <Image
              src='/newsFoto6.webp'
              alt='news in Kredit Union'
              width={1000}
              height={638}
            />
          </div>
        </div>
      </section>
    </main>
  );
};
export default GeneralMitings;
