import { PointerIcon } from "../icons/contactsPage/pointerIcon";
import { PdfIcon } from "../icons/depositPage/pdfIcon";
import { Tick } from "../icons/Tick";

export const InfoClientText = () => {
  return (
    <div className="text-primary_700">
      <h3 className="text-primary_400 text-[32px] font-bold py-4">
        Інформація клієнту
      </h3>
      <p className="">
        На виконання вимог ст. 12 Закону України «Про фінансові послуги та
        державне регулювання ринків фінансових послуг» від 12.07.2001р №2664-ІІІ
        (із змінами)КРЕДИТНА СПІЛКА «Кредит-ФОС» до укладання договору з
        клієнтом надає наступну інформацію:
      </p>
      <h3 className="text-[16px] md:text-[18px] lg:text-[20px] text-primary_700 font-bold mt-4">
        1. ОСОБА, ЯКА НАДАЄ ФІНАНСОВІ ПОСЛУГИ
      </h3>
      <ul className="text-[16px]">
        <li key="1.1">
          <details className="open:p-4 pt-2 px-4 group open:bg-white open:ring-1 open:ring-black/5 open:shadow-lg rounded-md open">
            <summary className="flex justify-between cursor-pointer select-none">
              <h4 className="underline">
                1.1 Найменування, місцезнаходження, контактний телефон і адреса
                електронної пошти особи, яка надає фінансові послуги:
              </h4>
              <div className="transition-transform transform duration-300 w-6 h-6">
                <PointerIcon />
              </div>
            </summary>
            <p className="mt-2 lg:leading-8">
              <strong>Найменування:</strong> КРЕДИТНА СПІЛКА «Кредит-ФОС»
              <br />
              <strong>Місцезнаходження:</strong> 46025, м. Тернопіль вул. Франка
              20 прим.10.
              <br /> <strong>Контактний телефон:</strong> 0673501977 <br />
              <strong>Адреса електронної пошти:</strong> kredit.fos@gmail.com
              <br />
              <strong>
                Адреса, за якою приймаються скарги споживачів фінансових послуг:
              </strong>{" "}
              46025, м. Тернопіль вул. Франка 20 прим.10.
            </p>
          </details>
        </li>
        <li key="1.2">
          <details className="open:p-4 pt-2 px-4 group open:bg-white open:ring-1 open:ring-black/5 open:shadow-lg rounded-md open">
            <summary className="flex justify-between cursor-pointer select-none gap-1">
              <h4 className="underline">
                1.2 Найменування особи, яка надає посередницькі послуги (за
                наявності)
              </h4>
              <div className="transition-transform transform duration-300 w-6 h-6">
                <PointerIcon />
              </div>
            </summary>
            <p className="mt-2 lg:leading-8">
              Особи, які надають посередницькі послуги - відсутні
            </p>
          </details>
        </li>
        <li key="1.3">
          <details className="open:p-4 pt-2 px-4 group open:bg-white open:ring-1 open:ring-black/5 open:shadow-lg rounded-md open">
            <summary className="flex justify-between cursor-pointer select-none gap-1">
              <h4 className="underline">
                1.3 Відомості про державну реєстрацію особи, яка надає фінансові
                послуги
              </h4>
              <div className="transition-transform transform duration-300 w-6 h-6">
                <PointerIcon />
              </div>
            </summary>
            <p className="mt-2 lg:leading-8">
              <strong>Дата державної реєстрації:</strong> 13.05.2004
              <br />
              <strong>Дата запису:</strong> 13.05.2004
              <br />
              <strong>Номер запису:</strong> 16461200000002612
              <br />
              <strong>Код ЄДРПОУ:</strong> 25694430
              <br />
            </p>
          </details>
        </li>
        <li key="1.4">
          <details className="open:p-4 pt-2 px-4 group open:bg-white open:ring-1 open:ring-black/5 open:shadow-lg rounded-md open">
            <summary className="flex justify-between cursor-pointer select-none gap-1">
              <h4 className="underline">
                1.4 Інформація щодо включення фінансової установи до
                відповідного державного реєстру фінансових установ:{" "}
              </h4>
              <div className="transition-transform transform duration-300 w-6 h-6">
                <PointerIcon />
              </div>
            </summary>
            <p className="mt-2 lg:leading-8">
              Включена до ДРФУ на підставі рішення Держфінпослуг від 13.05.2004
              №557 <br /> Серія та номер Свідоцтва КС № 176 <br />
              Дата видачі свідоцтва 13.05.2004
            </p>
          </details>
        </li>
        <li key="1.5">
          <details className="open:p-4 pt-2 px-4 group open:bg-white open:ring-1 open:ring-black/5 open:shadow-lg rounded-md open">
            <summary className="flex justify-between cursor-pointer select-none gap-1">
              <h4 className="underline">
                1.5 Інформація щодо наявності в особи, яка надає фінансові
                послуги, права на надання відповідної фінансової послуги
              </h4>
              <div className="transition-transform transform duration-300 w-6 h-6">
                <PointerIcon />
              </div>
            </summary>
            <p className="mt-2">
              <strong>
                Надання коштів у позику, в тому числі і на умовах фінансового
                кредиту:
              </strong>{" "}
              <br />
              Ліцензія на провадження господарської діяльності з надання
              фінансових послуг, а саме на надання коштів у позику, в тому числі
              і на умовах фінансового кредиту актуалізована ( розпорядження
              Національної комісії, що здійснює державне регулювання у сфері
              ринків фінансових послуг від 27 квітня 2017 року № 1374).
              <br /> Строк дії – безстрокова. <br /> Статус - чинна.
              <br />
              <strong>
                {" "}
                Залучення фінансових активів із зобовязаннями щодо наступного їх
                повернення:
              </strong>
              <br />
              Ліцензія на провадження господарської діяльності з надання
              фінансових послуг, а саме на залучення фінансових активів із
              зобов’язанням щодо наступного їх повернення актуалізована(
              розпорядження Національної комісії, що здійснює державне
              регулювання у сфері ринків фінансових послуг від 26 січня 2017
              року № 162).
              <br />
              Строк дії -безстрокова. <br />
              Статус - чинна.
            </p>
          </details>
        </li>
        <li key="1.6">
          <details className="open:p-4 pt-2 px-4 group open:bg-white open:ring-1 open:ring-black/5 open:shadow-lg rounded-md open">
            <summary className="flex justify-between cursor-pointer select-none gap-1">
              <h4 className="underline">
                1.6 Контактна інформація органу, який здійснює державне
                регулювання щодо діяльності КС у сфері фінансових послуг:
              </h4>
              <div className="transition-transform transform duration-300 w-6 h-6">
                <PointerIcon />
              </div>
            </summary>
            <p className="mt-2 lg:leading-8">
              <strong>Національний Банк України (НБУ) місцезнаходження:</strong>{" "}
              Україна, 01601, місто Київ, вулиця Інституцька, будинок 9, Зручна{" "}
              <a
                href="https://bank.gov.ua/ua/consumer-protection/citizens-appeals"
                className="underline"
              >
                {" "}
                онлайн-форма{" "}
              </a>
              на вебсайті НБУ;
              <br />
              <strong>Для електронного звернення:</strong>{" "}
              <a href="mailto:nbu@bank.gov.ua" className="underline">
                nbu@bank.gov.ua
              </a>
              заповніть і надішліть{" "}
              <a
                href="https://bank.gov.ua/admin_uploads/article/form_electronic_appeal_citizen.docx"
                className="underline"
              >
                форму
              </a>{" "}
              та за потреби додайте супровідні матеріали. Але розмір вкладення –
              не більше 10 МБ;
              <br /> <strong>Для листування:</strong> вул. Інститутська, 9, м.
              Київ, 01601 <br />
            </p>
          </details>
        </li>
      </ul>
      <h3 className="text-[16px] md:text-[18px] lg:text-[20px] text-primary_700 font-bold mt-4">
        2. ФІНАНСОВА ПОСЛУГА
      </h3>
      <details className="open:p-4 pt-2 px-4 group open:bg-white open:ring-1 open:ring-black/5 open:shadow-lg rounded-md open text-[16px]">
        <summary className="flex justify-between cursor-pointer select-none gap-1">
          <h4 className="underline">
            2.1 Загальна сума зборів, платежів та інших витрат, які повинен
            сплатити клієнт, включно з податками, або якщо конкретний розмір не
            може бути визначений - порядок визначення таких витрат:
          </h4>
          <div className="transition-transform transform duration-300 w-6 h-6">
            <PointerIcon />
          </div>
        </summary>
        <div className="mt-2">
          <strong>
            {" "}
            Залучення фінансових активів із зобовязаннями щодо наступного їх
            повернення:
          </strong>{" "}
          <br />
          <p className="indent-4">
            {" "}
            В результаті залучення внеску (вкладу) члена кредитної спілки на
            депозитний рахунок (далі - вклад(внесок) податки і збори за рахунок
            фізичної особи не сплачуються на підставі пункту 165.1.29 ст.165
            Податкового кодексу України (далі-ПКУ).
          </p>
          <p className="indent-4">
            При отримані фізичною особою процентів від кредитної спілки за
            договором про залучення внеску (вкладу) на депозитний рахунок у
            кредитній спілці:
          </p>
          <p className="indent-4">
            {" "}
            1) такий дохід оподатковуються за ставкою 18 %, відповідно до
            п.170.4 ст.170 ПКУ. Кредитна спілка, як податковий агент у строки,
            визначені ПКУ для місячного податкового періоду, до бюджету сплачує
            загальну суму податку, нарахованого за ставкою, визначеною п.167.1
            ст.167 ПК, тобто 18%, із загальної суми процентів, нарахованих за
            податковий місяць на суму вкладу членів кредитної спілки.
          </p>{" "}
          <p className="indent-4">
            {" "}
            2) з такого доходу стягується військовий збір у розмірі 1,5 %
            відповідно до пп1.2., п.16-1 підрозділу 10 розділу ХХ ПКУ.
            Нарахування, утримання та сплата збору до бюджету здійснюється у
            порядку, встановленому ст.168 ПК.
          </p>{" "}
          <p className="indent-4">
            У разі перерахування вкладником внеску (вкладу) на депозитний
            рахунок на банківський рахунок кредитної спілки, може сплачуватись
            на користь банку комісія за розрахунково-касове обслуговування
            банку, у якому відкритий рахунок КС згідно тарифів що визначаються в
            порядку передбаченому законодавством та правилами надання послуг
            розміщеними на вебсайті банку.
          </p>
          <p className="indent-4">
            Інші збори, платежі та інших витрати, які повинен сплатити клієнт
            відсутні
          </p>
          <strong>
            {" "}
            Надання коштів у позику, в тому числі і на умовах фінансового
            кредиту:
          </strong>
          <br />
          <p className="indent-4">
            {" "}
            В результаті отримання кредиту податки і збори за рахунок фізичної
            особи не сплачуються на підставі пункту 165.1.29 ст.165 ПКУ, за
            умови виконання умов договору.
          </p>
          <p className="indent-4">
            При наданні коштів у позику, в тому числі і на умовах фінансового
            кредиту загальна сума зборів, платежів та інших витрат, які повинен
            сплатити клієнт, включно з податками складатиметься:{" "}
          </p>
          <p className="indent-4">
            {" "}
            1) процентів за користування кредитом нарахованих в порядку
            передбаченому договором.
          </p>{" "}
          <p className="indent-4">
            {" "}
            2) розмір наданого кредиту вказаного у договорі.
          </p>{" "}
          <p className="indent-4">
            {" "}
            3) інші витрати на супровідні послуги, які підлягають сплаті на
            користь третіх осіб згідно з вимогами законодавства України
            відповідно до тарифів що визначаються в порядку передбаченому такими
            третіми особами на підставі договорів із позичальником або
            законодавства (платежі за надання банківських послуг)
          </p>
        </div>
      </details>
      <h3 className="text-[16px] md:text-[18px] lg:text-[20px] text-primary_700 font-bold mt-4">
        3. ДОГОВІР ПРО НАДАННЯ ФІНАНСОВИХ ПОСЛУГ
      </h3>
      <h4 className="text-[16px] md:text-[18px] lg:text-[20px] text-primary_700 font-bold mt-2 indent-4">
        3.1 Надання коштів у позику, в тому числі і на умовах фінансового
        кредиту
      </h4>
      <ul>
        <li key="3.1.1">
          {" "}
          <details className="open:p-4 pt-2 px-4 group open:bg-white open:ring-1 open:ring-black/5 open:shadow-lg rounded-md open">
            <summary className="flex justify-between cursor-pointer select-none gap-1">
              <h4 className="underline">
                {" "}
                3.1.1 Наявність у клієнта права на відмову від договору про
                надання фінансових послуг. Строк, протягом якого клієнтом може
                бути використано право на відмову від договору, а також інші
                умови використання права на відмову від договору:
              </h4>
              <div className="transition-transform transform duration-300 w-6 h-6">
                <PointerIcon />
              </div>
            </summary>
            <div className="mt-2">
              <strong>Щодо споживчих кредитів</strong>
              <p className="indent-4">
                Позичальник має право протягом 14 календарних днів з дня
                укладення Договору відмовитися від Договору про споживчий кредит
                без пояснення причин, у тому числі в разі отримання ним грошових
                коштів.
              </p>
              <p className="indent-4">
                Про намір відмовитися від Договору Позичальник повідомляє
                Кредитодавця у письмовій формі до закінчення строку – 14
                календарних днів з дня укладання Договору.
              </p>
              <p className="indent-4">
                Якщо Позичальник подає повідомлення не особисто, воно має бути
                засвідчене нотаріально або подане і підписане представником за
                наявності довіреності на вчинення таких дій.
              </p>
              <p className="indent-4">
                Протягом семи календарних днів з дати подання письмового
                повідомлення про відмову від Договору Позичальник зобов’язаний
                повернути Кредитодавцю грошові кошти, одержані згідно з
                Договором, та сплатити проценти за період з дня одержання коштів
                до дня їх повернення за ставкою, встановленою Договором.
              </p>
              <p className="indent-4">
                Відмова від Договору є підставою для припинення договорів щодо
                супровідних послуг, що були визначені як обов’язкові для
                отримання кредиту, укладених Позичальником.
              </p>
              <p className="indent-4">
                {" "}
                Кредитодавець (якщо йому сплачувались платежі за договорами щодо
                супровідних послуг) зобов’язаний повернути Позичальнику кошти,
                сплачені ним за такі супровідних послуги, не пізніш як протягом
                14 календарних днів з дня подання письмового повідомлення про
                відмову від Договору, якщо такі послуги не були фактично надані
                до дня відмови Позичальника від Договору у порядку, визначеному
                законодавством.
              </p>
              <p className="indent-4">
                Право на відмову від Договору не застосовується щодо: 1)
                договорів про споживчий кредит, виконання зобов’язань за якими
                забезпечено шляхом укладення нотаріально посвідчених договорів
                (правочинів); 2) споживчих кредитів, наданих на придбання робіт
                (послуг), виконання яких відбулося до закінчення строку відмови
                від Договору (протягом 14 календарних днів з дня укладення
                Договору)
              </p>
              <strong>Для кредитних договорів не споживчих</strong>
              <p className="indent-4">
                Для такого виду фінансової послуги договором та законодавством
                не передбачено право на відмову від договору.
              </p>
            </div>
          </details>
        </li>
        <li key="3.1.2">
          <details className="open:p-4 pt-2 px-4 group open:bg-white open:ring-1 open:ring-black/5 open:shadow-lg rounded-md open">
            <summary className="flex justify-between cursor-pointer select-none">
              <h4 className="underline">
                {" "}
                3.1.2 Мінімальний строк дії договору (якщо застосовується):
              </h4>
              <div className="transition-transform transform duration-300 w-6 h-6">
                <PointerIcon />
              </div>
            </summary>
            <div className="mt-2">
              <p className="indent-4">
                Мінімальний строк дії договору не застосовується.
              </p>
            </div>
          </details>
        </li>
        <li key="3.1.3"></li>
        <li key="3.1.4"></li>
        <li key="3.1.5"></li>
      </ul>
      <a href="#" className="flex gap-2 mt-6 cursor-pointer">
        <PdfIcon /> Структура власності
      </a>
    </div>
  );
};
