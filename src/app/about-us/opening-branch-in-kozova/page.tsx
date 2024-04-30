import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Відкриття філії в смт.Козова",
  description: "Відкриття філії в смт.Козова",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      "max-snippet": -1,
    },
  },
};

const OpeningBranchKozova = () => {
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
          <p>Новини: Відкриття філії в смт.Козова</p>
        </div>
      </section>
      <section className="pt-6 pb-[50px] bg-netural_100 text-[16px] md:text-[18px] text-primary_700">
        <div className="div-container flex flex-col gap-6">
          <h2 className="title">Відкриття філії в смт.Козова</h2>
          <p>
            Кредитна спілка "Кредит-ФОС" продовжує свій успішний пошук нових
            можливостей для зручності своїх клієнтів та розширення свого
            географічного охоплення. У цьому контексті, з великим задоволенням і
            гордістю, ми оголошуємо про відкриття нової філії у смт. Козова.
          </p>
          <div className="rounded-md overflow-hidden mx-auto">
            <Image
              src="/newsFoto3.webp"
              alt="news in Kredit Union"
              width={1000}
              height={638}
            />
          </div>
          <p>
            Це відкриття є важливим кроком для нас, оскільки воно дозволить нам
            наблизитися до наших клієнтів в цьому регіоні, забезпечуючи їм
            легкий доступ до наших послуг та експертної підтримки. Філія в смт.
            Козова буде надавати повний спектр фінансових послуг, включаючи
            кредитування, вклади, консультації та інші фінансові рішення.
          </p>
          <p>
            Ми впевнені, що цей крок допоможе нам ще більше зміцнити наші
            взаємовідносини з місцевими жителями та бізнесами, а також сприятиме
            розвитку економічного потенціалу цього регіону. Відкриття філії в
            смт. Козова відображає нашу віру в майбутнє розвитку спільно з
            нашими клієнтами та партнерами.
          </p>
          <p>
            Запрошуємо всіх мешканців та підприємців смт. Козова завітати до
            нашої нової філії, де вони знайдуть не лише високоякісні фінансові
            послуги, але й дружній та професійний колектив, готовий допомогти в
            реалізації їх фінансових цілей та завдань.
          </p>
        </div>
      </section>
    </main>
  );
};
export default OpeningBranchKozova;
