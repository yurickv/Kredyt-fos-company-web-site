import { ValuesFourIcon } from "@/components/icons/about-usPage/ValuesFourIcon";
import { ValuesOneIcon } from "@/components/icons/about-usPage/ValuesOneIcon";
import { ValuesThreeIcon } from "@/components/icons/about-usPage/ValuesThreeIcon";
import { ValuesTwoIcon } from "@/components/icons/about-usPage/ValuesTwoIcon";
import Image from "next/image";
import Link from "next/link";

const AboutUs = () => {
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
          <p>Про нас</p>
        </div>
      </section>
      <section className="pt-6 pb-[50px] bg-netural_100 text-[16px] md:text-[18px] text-primary_700">
        <div className="div-container flex flex-col gap-6">
          <h2 className="title">Що таке кредитна спілка?</h2>
          <p>
            Відповідно до Закону України “Про кредитні спілки”: ” Кредитна
            спілка – це неприбуткова організація, заснована фізичними особами на
            кооперативних засадах з метою задоволення потреб її членів у
            взаємному кредитуванні та наданні фінансових послуг за рахунок
            об’єднаних грошових внесків членів кредитної спілки ”.
          </p>
          <p>
            Кредитна спілка утворюється на основі об’єднання громадян за
            професійною, територіальною чи іншою ознакою, яка зазначається в
            статуті кредитівка і є визначальною при прийнятті її нових членів.
          </p>
          <p>
            Управління кредитною спілкою здійснюється на демократичних засадах,
            що означає, що незалежно від моменту вступу чи розміру внеску, кожен
            учасник кредитівки має право одного голосу. Таким чином
            забезпечується захист інтересів усіх без винятку учасників
            кредитівки. Кредитна спілка є відкритою організацією, в якій кожному
            гарантовано вільний вхід і вихід.
          </p>
          <p>
            Найвищим органом управління кредитної спілки є загальні збори, на
            яких з числа їх учасників формують:
          </p>
          <ul className="list-inside list-image-checkmark indent-4 flex flex-col gap-6">
            <li>
              спостережну раду, яка представляє інтереси членів кредитної спілки
              в період між загальними зборами, що скликаються раз на рік
            </li>
            <li>
              ревізійну комісію, яка контролює фінансово-господарську діяльність
              кредитної спілки
            </li>
            <li>
              правління кредитної спілки, яке є виконавчим органом, що здійснює
              керівництво її поточною діяльністю
            </li>
            <li>
              кредитний комітет — орган, відповідальний за організацію кредитної
              діяльності спілки
            </li>
          </ul>
          <p>
            За рішенням загальних зборів членів кредитної спілки можуть бути
            створені й інші органи управління.
          </p>
          <p>
            Суть неприбуткової діяльності кредитної спілки полягає в тому, що
            кінцевою метою її діяльності є не отримання прибутку від наданих
            послуг, а самі послуги, що надаються членам кредитівки. Саме тому
            надання послуг відбувається на рівні, максимально наближеному до
            собівартості, яка забезпечує витрати на формування фондів та
            нарахування відсотків на внески членів кредитівки.
          </p>
        </div>
      </section>
      <section className="pt-6 pb-[50px] bg-netural_100 text-primary_700">
        <div className="div-container flex flex-col gap-6">
          <h2 className="title">Кредитна спілка Кредит-ФОС</h2>
          <div className="text-[16px] md:text-[18px]">
            <Image
              width={588}
              height={466}
              src="/contacts-foto.webp"
              alt="Picture of the credit unions staff"
              className="inline float-left mr-4 mb-4 md:mb-0 md:mr-8"
            />

            <p className="">
              Ласкаво просимо до нашої кредитної спілки – вашого надійного
              партнера у справах фінансового забезпечення та розвитку! Завдяки
              нашій багаторічній експертизі в галузі фінансів та відданості
              нашим клієнтам ми забезпечуємо широкий спектр послуг з
              кредитування та фінансового планування. Наші програми кредитування
              розроблені з урахуванням потреб різних клієнтів – від
              індивідуальних до корпоративних – та наділені гнучкістю та
              доступністю, щоб забезпечити максимальний комфорт та задоволення
              наших клієнтів. Ми пишаємося своєю відмінною репутацією як
              надійного партнера, що надає прозорі, справедливі та ефективні
              фінансові послуги.
            </p>
            <p className="mt-6">
              Наша місія – забезпечити фінансову стабільність та підтримку наших
              членів, сприяючи їхньому особистому та професійному зростанню.
              Приєднуйтеся до нашої спільноти сьогодні та дозвольте нам
              допомогти вам досягти ваших фінансових цілей!
            </p>
          </div>
        </div>
      </section>
      <section className="pt-6 pb-[50px] bg-netural_100 text-primary_700">
        <div className="div-container flex flex-col gap-6">
          <h2 className="title">Наші цінності</h2>
          <ul className="text-[16px] md:text-[18px] text-primary_700 flex flex-col gap-6 md:grid md:grid-cols-2 lg:flex lg:flex-row">
            <li className="md:w-[277px] lg:w-[442px]">
              <div className="w-[60px] mb-4">
                <ValuesOneIcon />
              </div>
              <h3 className="font-bold my-4">Довіра</h3>
              Ми віримо в відкритість і довіру, створюючи міцні зв'язки з нашими
              клієнтами та співпрацівниками.
            </li>
            <li className="md:w-[277px] lg:w-[442px]">
              <div className="w-[60px] mb-4">
                <ValuesTwoIcon />
              </div>
              <h3 className="font-bold my-4">Інновація</h3>
              Ми постійно шукаємо нові та кращі способи задоволення потреб наших
              клієнтів та розвитку нашої спільноти.
            </li>
            <li className="md:w-[277px] lg:w-[442px]">
              <div className="w-[60px] mb-4">
                <ValuesThreeIcon />
              </div>
              <h3 className="font-bold my-4">Соціальна відповідальність</h3>
              Ми прагнемо до покращення якості життя у наших спільнотах,
              допомагаючи їм розвиватися та процвітати.
            </li>
            <li className="md:w-[277px] lg:w-[442px]">
              <div className="w-[60px] mb-4">
                <ValuesFourIcon />
              </div>
              <h3 className="font-bold my-4">Взаємодопомога</h3>
              Ми віримо в силу співпраці та взаємопідтримки, що дозволяє нам
              разом досягати більш великих успіхів і досягати спільних цілей.
            </li>
          </ul>
        </div>
      </section>
      <section className="pt-6 pb-[50px] bg-netural_100 text-primary_700">
        <div className="div-container flex flex-col gap-6 text-[16px] md:text-[18px] text-primary_700">
          <h2 className="title">Наші працівники</h2>
          <p className="mt-6">
            Найкраща команда експертів, котра готова надати кваліфіковану
            підтримку та консультації у всіх фінансових питаннях.
          </p>
          <ul className="flex flex-col gap-6 md:grid md:grid-cols-2 lg:flex lg:flex-row">
            <li className="md:w-[277px] lg:w-[442px]">
              <Image
                width={282}
                height={340}
                src="/Tetyana.png"
                alt="Ceo foto"
              />
              <h3 className="font-bold mt-4 mb-2">Гора Тетяна Леонідівна</h3>
              Керівник кредитної спілки
            </li>
            <li className="md:w-[277px] lg:w-[442px]">
              <Image
                width={282}
                height={340}
                src="/Tetyana.png"
                alt="Ceo foto"
              />
              <h3 className="font-bold mt-4 mb-2">Гора Тетяна Леонідівна</h3>
              Керівник кредитної спілки
            </li>
            <li className="md:w-[277px] lg:w-[442px]">
              <Image
                width={282}
                height={340}
                src="/Tetyana.png"
                alt="Ceo foto"
              />
              <h3 className="font-bold mt-4 mb-2">Гора Тетяна Леонідівна</h3>
              Керівник кредитної спілки
            </li>
            <li className="md:w-[277px] lg:w-[442px]">
              <Image
                width={282}
                height={340}
                src="/Tetyana.png"
                alt="Ceo foto"
              />
              <h3 className="font-bold mt-4 mb-2">Гора Тетяна Леонідівна</h3>
              Керівник кредитної спілки
            </li>
          </ul>
        </div>
      </section>
      <section className="pt-6 pb-[50px] bg-gradient_section text-primary_700">
        <div className="div-container flex flex-col gap-6 text-[16px] md:text-[18px] text-primary_700">
          <h2 className="title">Наші досягнення</h2>
          <ul className="flex flex-col gap-6 md:grid md:grid-cols-2 lg:flex lg:flex-row">
            <li className="md:w-[277px] lg:w-[442px]">
              <p className="font-bold text-[32px] md:twxt-[40px]">25</p>
              <div className="w-[50px] h-1 rounded-full bg-primary_300 mt-2 md:mt-4"></div>
              Років на ринку України
            </li>
            <li className="md:w-[277px] lg:w-[442px]">
              <p className="font-bold text-[32px] md:twxt-[40px]">25</p>
              <div className="w-[50px] h-1 rounded-full bg-primary_300 mt-2 md:mt-4"></div>
              Років на ринку України
            </li>
            <li className="md:w-[277px] lg:w-[442px]">
              <p className="font-bold text-[32px] md:twxt-[40px]">25</p>
              <div className="w-[50px] h-1 rounded-full bg-primary_300 mt-2 md:mt-4"></div>
              Років на ринку України
            </li>
            <li className="md:w-[277px] lg:w-[442px]">
              <p className="font-bold text-[32px] md:twxt-[40px]">25</p>
              <div className="w-[50px] h-1 rounded-full bg-primary_300 mt-2 md:mt-4"></div>
              Років на ринку України
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};
export default AboutUs;
