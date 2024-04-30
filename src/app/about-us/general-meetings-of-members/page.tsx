import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Загальні збори членів Кредит-ФОС",
  description:
    "Результати, прийняті рішення на загальних зборах членів кредитної спілки Кредит-ФОС",
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
          <p>Новини: Загальні збори членів спілки</p>
        </div>
      </section>
      <section className="pt-6 pb-[50px] bg-netural_100 text-[16px] md:text-[18px] text-primary_700">
        <div className="div-container flex flex-col gap-6">
          <h2 className="title">
            Загальні збори членів Кредитної спілки "Кредит-ФОС"
          </h2>
          <p>
            У зв'язку з ювілейним роком своєї діяльності Кредитна спілка
            "Кредит-ФОС" організувала та успішно провела загальні збори своїх
            членів. Це подія, яка відображає важливість співпраці та
            взаєморозуміння між керівництвом спілки та її членами.
          </p>
          <div className="rounded-md overflow-hidden mx-auto">
            <Image
              src="/newsFoto2.webp"
              alt="news in Kredit Union"
              width={1000}
              height={638}
            />
          </div>
          <p>
            Загальні збори, які відбулися в офісі Кредитної спілки, зібрали
            більше сотні учасників - це як досвідчені вкладники, які вже давно
            користуються послугами спілки, так і нові члени, що тільки починають
            свій шлях у світі фінансів.
          </p>
          <p>
            На зборах було обговорено різні аспекти діяльності спілки, включаючи
            фінансові звіти, стратегічні напрями розвитку та плани на майбутнє.
            Учасники мали можливість висловити свої думки, запитання та
            пропозиції, що стосуються роботи Кредитної спілки.
          </p>
          <p>
            Одним із ключових моментів зборів було обрання нового складу
            правління спілки. Це стало важливим кроком у забезпеченні
            продовження стабільності та розвитку установи.
          </p>
          <p>
            Після завершення офіційної частини зборів учасники мали можливість
            спілкуватися, обмінюватися думками та досвідом, а також
            насолоджуватися ювілейним святковим заходом, підготовленим
            спеціально до цієї важливої події.
          </p>{" "}
          <p>
            Загальні збори членів Кредитної спілки "Кредит-ФОС" стали ще одним
            підтвердженням того, що спільність і взаємодія між керівництвом та
            членами є ключовими складовими успіху у сучасному фінансовому світі.
          </p>
        </div>
      </section>
    </main>
  );
};
export default GeneralMitings;
