import Link from "next/link";
import { PointerIcon } from "../icons/contactsPage/pointerIcon";
import { PdfIcon } from "../icons/depositPage/pdfIcon";
import { Tick } from "../icons/Tick";

export const InfoClientText = () => {
  return (
    <div className="text-primary_700">
      <h2 className="text-primary_400 text-[32px] font-bold py-4">
        Інформація клієнту
      </h2>
      <p className="">
        На виконання вимог ч. 2 ст. 7 Закону України “Про фінансові послуги та
        фінансові компанії” від 14.12.2021р. № 1953-IX кредитна спілка
        «Кредит-ФОС» до укладання договору з клієнтом надає наступну інформацію:
        <a
          href="https://drive.google.com/file/d/1Wc-1Itx3Lk5QL6RmgxI5doGdMYq9cHts/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-2 mt-6 cursor-pointer"
        >
          <PdfIcon /> Інформація для споживача
        </a>
      </p>
      <ul>
        <li key="1">
          <h3 className="text-[16px] md:text-[18px] lg:text-[20px] text-primary_700 font-bold mt-4">
            1. ОСОБА, ЯКА НАДАЄ ФІНАНСОВІ ПОСЛУГИ
          </h3>
          <ul className="text-[16px]">
            <li key="1.1">
              <details className="open:p-4 pt-2 px-4 group open:bg-white open:ring-1 open:ring-black/5 open:shadow-lg rounded-md open">
                <summary className="flex justify-between cursor-pointer select-none">
                  <h4 className="">
                    <b>1.1</b> Найменування, місцезнаходження, контактний
                    телефон і адреса електронної пошти особи, яка надає
                    фінансові послуги:
                  </h4>
                  <div className="transition-transform transform duration-300 w-6 h-6">
                    <PointerIcon />
                  </div>
                </summary>
                <p className="mt-2 lg:leading-8">
                  <strong>Найменування:</strong> КРЕДИТНА СПІЛКА «Кредит-ФОС»
                  <br />
                  <strong>Місцезнаходження:</strong> 46025, м. Тернопіль вул.
                  Франка 20 прим.10.
                  <br /> <strong>Контактний телефон:</strong> 0673501977 <br />
                  <strong>Адреса електронної пошти:</strong>{" "}
                  kredit.fos@gmail.com
                  <br />
                  <strong>
                    Адреса, за якою приймаються скарги споживачів фінансових
                    послуг:
                  </strong>{" "}
                  46025, м. Тернопіль вул. Франка 20 прим.10.
                </p>
              </details>
            </li>
            <li key="1.2">
              <details className="open:p-4 pt-2 px-4 group open:bg-white open:ring-1 open:ring-black/5 open:shadow-lg rounded-md open">
                <summary className="flex justify-between cursor-pointer select-none gap-1">
                  <h4 className="">
                    <b>1.2</b> Найменування особи, яка надає посередницькі
                    послуги (за наявності)
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
                  <h4 className="">
                    <b>1.3</b> Відомості про державну реєстрацію особи, яка
                    надає фінансові послуги
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
                  <h4 className="">
                    <b>1.4</b> Інформація щодо включення фінансової установи до
                    відповідного державного реєстру фінансових установ:{" "}
                  </h4>
                  <div className="transition-transform transform duration-300 w-6 h-6">
                    <PointerIcon />
                  </div>
                </summary>
                <p className="mt-2 lg:leading-8">
                  Включена до ДРФУ на підставі рішення Держфінпослуг від
                  13.05.2004 №557 <br /> Серія та номер Свідоцтва КС № 176{" "}
                  <br />
                  Дата видачі свідоцтва 13.05.2004
                </p>
              </details>
            </li>
            <li key="1.5">
              <details className="open:p-4 pt-2 px-4 group open:bg-white open:ring-1 open:ring-black/5 open:shadow-lg rounded-md open">
                <summary className="flex justify-between cursor-pointer select-none gap-1">
                  <h4 className="">
                    <b>1.5</b> Інформація щодо наявності в особи, яка надає
                    фінансові послуги, права на надання відповідної фінансової
                    послуги
                  </h4>
                  <div className="transition-transform transform duration-300 w-6 h-6">
                    <PointerIcon />
                  </div>
                </summary>
                <p className="mt-2">
                  <strong>
                    Надання коштів у позику, в тому числі і на умовах
                    фінансового кредиту:
                  </strong>{" "}
                  <br />
                  Ліцензія на провадження господарської діяльності з надання
                  фінансових послуг, а саме на надання коштів у позику, в тому
                  числі і на умовах фінансового кредиту актуалізована (
                  розпорядження Національної комісії, що здійснює державне
                  регулювання у сфері ринків фінансових послуг від 27 квітня
                  2017 року № 1374).
                  <br /> Строк дії – безстрокова. <br /> Статус - чинна.
                  <br />
                  <strong>
                    {" "}
                    Залучення фінансових активів із зобовязаннями щодо
                    наступного їх повернення:
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
                  <h4 className="">
                    <b>1.6</b> Контактна інформація органу, який здійснює
                    державне регулювання щодо діяльності КС у сфері фінансових
                    послуг:
                  </h4>
                  <div className="transition-transform transform duration-300 w-6 h-6">
                    <PointerIcon />
                  </div>
                </summary>
                <p className="mt-2 lg:leading-8">
                  <strong>
                    Національний Банк України (НБУ) місцезнаходження:
                  </strong>{" "}
                  Україна, 01601, місто Київ, вулиця Інституцька, будинок 9,
                  Зручна{" "}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://bank.gov.ua/ua/consumer-protection/citizens-appeals"
                    className="underline"
                  >
                    {" "}
                    онлайн-форма{" "}
                  </a>
                  на вебсайті НБУ;
                  <br />
                  <strong>Для електронного звернення:</strong>{" "}
                  <a
                    href="mailto:nbu@bank.gov.ua"
                    className="underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    nbu@bank.gov.ua
                  </a>
                  заповніть і надішліть{" "}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://bank.gov.ua/admin_uploads/article/form_electronic_appeal_citizen.docx"
                    className="underline"
                  >
                    форму
                  </a>{" "}
                  та за потреби додайте супровідні матеріали. Але розмір
                  вкладення – не більше 10 МБ;
                  <br /> <strong>Для листування:</strong> вул. Інститутська, 9,
                  м. Київ, 01601 <br />
                </p>
              </details>
            </li>
          </ul>
        </li>
        <li key="2">
          {" "}
          <h3 className="text-[16px] md:text-[18px] lg:text-[20px] text-primary_700 font-bold mt-4">
            2. ФІНАНСОВА ПОСЛУГА
          </h3>
          <details className="open:p-4 pt-2 px-4 group open:bg-white open:ring-1 open:ring-black/5 open:shadow-lg rounded-md open text-[16px]">
            <summary className="flex justify-between cursor-pointer select-none gap-1">
              <h4 className="">
                <b>2.1</b> Загальна сума зборів, платежів та інших витрат, які
                повинен сплатити клієнт, включно з податками, або якщо
                конкретний розмір не може бути визначений - порядок визначення
                таких витрат:
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
                депозитний рахунок (далі - вклад(внесок) податки і збори за
                рахунок фізичної особи не сплачуються на підставі пункту
                165.1.29 ст.165 Податкового кодексу України (далі-ПКУ).
              </p>
              <p className="indent-4">
                При отримані фізичною особою процентів від кредитної спілки за
                договором про залучення внеску (вкладу) на депозитний рахунок у
                кредитній спілці:
              </p>
              <p className="indent-4">
                {" "}
                1) такий дохід оподатковуються за ставкою 18 %, відповідно до
                п.170.4 ст.170 ПКУ. Кредитна спілка, як податковий агент у
                строки, визначені ПКУ для місячного податкового періоду, до
                бюджету сплачує загальну суму податку, нарахованого за ставкою,
                визначеною п.167.1 ст.167 ПК, тобто 18%, із загальної суми
                процентів, нарахованих за податковий місяць на суму вкладу
                членів кредитної спілки.
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
                рахунок на банківський рахунок кредитної спілки, може
                сплачуватись на користь банку комісія за розрахунково-касове
                обслуговування банку, у якому відкритий рахунок КС згідно
                тарифів що визначаються в порядку передбаченому законодавством
                та правилами надання послуг розміщеними на вебсайті банку.
              </p>
              <p className="indent-4">
                Інші збори, платежі та інших витрати, які повинен сплатити
                клієнт відсутні
              </p>
              <strong>
                {" "}
                Надання коштів у позику, в тому числі і на умовах фінансового
                кредиту:
              </strong>
              <br />
              <p className="indent-4">
                {" "}
                В результаті отримання кредиту податки і збори за рахунок
                фізичної особи не сплачуються на підставі пункту 165.1.29 ст.165
                ПКУ, за умови виконання умов договору.
              </p>
              <p className="indent-4">
                При наданні коштів у позику, в тому числі і на умовах
                фінансового кредиту загальна сума зборів, платежів та інших
                витрат, які повинен сплатити клієнт, включно з податками
                складатиметься:{" "}
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
                відповідно до тарифів що визначаються в порядку передбаченому
                такими третіми особами на підставі договорів із позичальником
                або законодавства (платежі за надання банківських послуг)
              </p>
            </div>
          </details>
        </li>
        <li key="3">
          {" "}
          <h3 className="text-[16px] md:text-[18px] lg:text-[20px] text-primary_700 font-bold mt-4">
            3. ДОГОВІР ПРО НАДАННЯ ФІНАНСОВИХ ПОСЛУГ
          </h3>
          <ul>
            <li>
              <h4 className="text-[16px] md:text-[18px] lg:text-[20px] text-primary_700 font-bold mt-2 indent-4">
                3.1 Надання коштів у позику, в тому числі і на умовах
                фінансового кредиту
              </h4>
              <ul>
                <li key="3.1.1">
                  {" "}
                  <details className="open:p-4 pt-2 px-4 group open:bg-white open:ring-1 open:ring-black/5 open:shadow-lg rounded-md open">
                    <summary className="flex justify-between cursor-pointer select-none gap-1">
                      <h4 className="">
                        {" "}
                        <b>3.1.1</b> Наявність у клієнта права на відмову від
                        договору про надання фінансових послуг. Строк, протягом
                        якого клієнтом може бути використано право на відмову
                        від договору, а також інші умови використання права на
                        відмову від договору:
                      </h4>
                      <div className="transition-transform transform duration-300 w-6 h-6">
                        <PointerIcon />
                      </div>
                    </summary>
                    <div className="mt-2">
                      <strong>Щодо споживчих кредитів</strong>
                      <p className="indent-4">
                        Позичальник має право протягом 14 календарних днів з дня
                        укладення Договору відмовитися від Договору про
                        споживчий кредит без пояснення причин, у тому числі в
                        разі отримання ним грошових коштів.
                      </p>
                      <p className="indent-4">
                        Про намір відмовитися від Договору Позичальник
                        повідомляє Кредитодавця у письмовій формі до закінчення
                        строку – 14 календарних днів з дня укладання Договору.
                      </p>
                      <p className="indent-4">
                        Якщо Позичальник подає повідомлення не особисто, воно
                        має бути засвідчене нотаріально або подане і підписане
                        представником за наявності довіреності на вчинення таких
                        дій.
                      </p>
                      <p className="indent-4">
                        Протягом семи календарних днів з дати подання письмового
                        повідомлення про відмову від Договору Позичальник
                        зобов’язаний повернути Кредитодавцю грошові кошти,
                        одержані згідно з Договором, та сплатити проценти за
                        період з дня одержання коштів до дня їх повернення за
                        ставкою, встановленою Договором.
                      </p>
                      <p className="indent-4">
                        Відмова від Договору є підставою для припинення
                        договорів щодо супровідних послуг, що були визначені як
                        обов’язкові для отримання кредиту, укладених
                        Позичальником.
                      </p>
                      <p className="indent-4">
                        {" "}
                        Кредитодавець (якщо йому сплачувались платежі за
                        договорами щодо супровідних послуг) зобов’язаний
                        повернути Позичальнику кошти, сплачені ним за такі
                        супровідних послуги, не пізніш як протягом 14
                        календарних днів з дня подання письмового повідомлення
                        про відмову від Договору, якщо такі послуги не були
                        фактично надані до дня відмови Позичальника від Договору
                        у порядку, визначеному законодавством.
                      </p>
                      <p className="indent-4">
                        Право на відмову від Договору не застосовується щодо: 1)
                        договорів про споживчий кредит, виконання зобов’язань за
                        якими забезпечено шляхом укладення нотаріально
                        посвідчених договорів (правочинів); 2) споживчих
                        кредитів, наданих на придбання робіт (послуг), виконання
                        яких відбулося до закінчення строку відмови від Договору
                        (протягом 14 календарних днів з дня укладення Договору)
                      </p>
                      <strong>Для кредитних договорів не споживчих</strong>
                      <p className="indent-4">
                        Для такого виду фінансової послуги договором та
                        законодавством не передбачено право на відмову від
                        договору.
                      </p>
                    </div>
                  </details>
                </li>
                <li key="3.1.2">
                  <details className="open:p-4 pt-2 px-4 group open:bg-white open:ring-1 open:ring-black/5 open:shadow-lg rounded-md open">
                    <summary className="flex justify-between cursor-pointer select-none">
                      <h4 className="">
                        {" "}
                        <b>3.1.2</b> Мінімальний строк дії договору (якщо
                        застосовується):
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
                <li key="3.1.3">
                  {" "}
                  <details className="open:p-4 pt-2 px-4 group open:bg-white open:ring-1 open:ring-black/5 open:shadow-lg rounded-md open">
                    <summary className="flex justify-between cursor-pointer select-none gap-1">
                      <h4 className="">
                        {" "}
                        <b>3.1.3</b> Наявність у клієнта права розірвати чи
                        припинити договір, права дострокового виконання
                        договору, а також наслідки таких дій
                      </h4>
                      <div className="transition-transform transform duration-300 w-6 h-6">
                        <PointerIcon />
                      </div>
                    </summary>
                    <div className="mt-2">
                      <strong>Щодо споживчих кредитів</strong>
                      <p className="indent-4">
                        Позичальник має право в будь-який час повністю або
                        частково достроково повернути споживчий кредит, у тому
                        числі шляхом збільшення суми періодичних платежів.
                      </p>
                      <p className="indent-4">
                        Якщо Позичальник скористався правом повернення кредиту
                        шляхом збільшення суми періодичних платежів,
                        Кредитодавець зобов’язаний здійснити відповідне
                        коригування зобов’язань Позичальника у бік їх зменшення
                        та на вимогу Позичальника надати йому новий графік
                        платежів. Договором про споживчий кредит може
                        встановлюватися порядок дострокового
                        поверненняспоживчого кредиту.
                      </p>
                      <p className="indent-4">
                        Позичальник у разі дострокового повернення споживчого
                        кредиту сплачує Кредитодавцю проценти за користування
                        кредитом та вартість усіх послуг, пов’язаних з
                        обслуговуванням та погашенням кредиту (за наявності), за
                        період фактичного користування кредитом.
                      </p>
                      <p className="indent-4">
                        Кредитодавцю забороняється відмовляти споживачу в
                        прийняті платежу у разі дострокового повернення
                        споживчого кредиту. Кредитодавцю забороняється
                        встановлювати споживачу будь-яку плату, пов’язану з
                        достроковим поверненням споживчого кредиту.
                      </p>

                      <strong>Для кредитних договорів не споживчих</strong>
                      <p className="indent-4">
                        Позичальник має право достроково розірвати цей Договір
                        лише за умови дострокового повернення кредиту та сплати
                        процентів за фактичний строк користування кредитом в
                        день розірвання Договору.
                      </p>
                    </div>
                  </details>
                </li>
                <li key="3.1.4">
                  <details className="open:p-4 pt-2 px-4 group open:bg-white open:ring-1 open:ring-black/5 open:shadow-lg rounded-md open">
                    <summary className="flex justify-between cursor-pointer select-none gap-1">
                      <h4 className="">
                        {" "}
                        <b>3.1.4</b> Порядок внесення змін та доповнень до
                        Договору
                      </h4>
                      <div className="transition-transform transform duration-300 w-6 h-6">
                        <PointerIcon />
                      </div>
                    </summary>
                    <div className="mt-2">
                      <strong>Щодо споживчих кредитів</strong>
                      <p className="indent-4">
                        Внесення змін до цього Договору оформлюється шляхом
                        підписання Сторонами додаткових договорів (угод) . Всі
                        зміни, доповнення та додатки до цього Договору,
                        підписані обома Сторонами є його складовою і невід’ємною
                        частиною.
                      </p>
                      <p className="indent-4">
                        Будь-які пропозиції Кредитодавця про зміну умов
                        Договору, визначених частиною першою статті 12 Закону
                        України «Про споживче кредитування» та інших істотних
                        умов, здійснюються шляхом направлення Кредитодавцем
                        Позичальнику повідомлення в такий спосіб, що дає змогу
                        встановити дату відправлення повідомлення.
                      </p>
                      <p className="indent-4">
                        Пропозиції про зміну істотних умов Договору, надаються у
                        наступний спосіб та строки:
                      </p>
                      <ul>
                        <li className="indent-4">
                          1) Пропозиція про зміну істотних умов Договору
                          (повідомлення) надсилається іншій Стороні листом у
                          спосіб, що дає змогу встановити дату відправлення або
                          вручається під особистий підпис Позичальнику чи
                          представнику Кредитодавця із відміткою про дату
                          відправлення та отримання.
                        </li>
                        <li className="indent-4">
                          {" "}
                          2) Сторона Договору зобов’язана надати письмову
                          відповідь протягом 10 робочих днів з дня отримання
                          листа чи вручення пропозиції під особистий підпис;
                        </li>
                        <li className="indent-4">
                          {" "}
                          3) Якщо Сторона Договору не погодилась із змінами або
                          не надала відповідь у строк 10 робочих днів,
                          пропозиція вважаються не прийнятою;
                        </li>
                        <li className="indent-4">
                          {" "}
                          4) Якщо Сторона договору погодилась із пропозицією,
                          додатковий договір укладається за місцезнаходженням
                          Кредитодавця , в письмовій формі, протягом 5 робочих
                          днів з дня надання письмової відповіді.
                        </li>
                      </ul>
                      <strong>Для кредитних договорів не споживчих</strong>
                      <p className="indent-4">
                        Внесення змін до Договору оформлюється шляхом підписання
                        Сторонами додаткових договорів (угод). Всі зміни,
                        доповнення та додатки до цього Договору, підписані обома
                        Сторонами є його складовою і невід’ємною частиною.
                        Пропозиції про зміну істотних умов Договору, надаються у
                        наступному порядку та строки:
                      </p>
                      <ul>
                        <li className="indent-4">
                          1) Пропозиція про зміну істотних умов Договору
                          (повідомлення) надсилається іншій Стороні листом у
                          спосіб, що дає змогу встановити дату відправлення або
                          вручається під особистий підпис Позичальнику чи
                          представнику Кредитодавця із відміткою про дату
                          відправлення та отримання.
                        </li>
                        <li className="indent-4">
                          {" "}
                          2) Сторона Договору зобов’язана надати письмову
                          відповідь протягом _5-ти_ робочих днів з дня отримання
                          листа чи вручення пропозиції під особистий підпис;
                        </li>
                        <li className="indent-4">
                          {" "}
                          3) Якщо Сторона Договору не погодилась із змінами або
                          не надала відповідь у строк 5 робочих днів, пропозиція
                          вважаються не прийнятою;
                        </li>
                        <li className="indent-4">
                          {" "}
                          4) Якщо Сторона Договору погодилась із пропозицією,
                          додатковий договір укладається за місцезнаходженням
                          Кредитодавця (відокремлених підрозділів Кредитодавця),
                          в письмовій формі, протягом _5-ти_ днів з дня надання
                          письмової відповіді.
                        </li>
                      </ul>
                    </div>
                  </details>
                </li>
                <li key="3.1.5">
                  {" "}
                  <details className="open:p-4 pt-2 px-4 group open:bg-white open:ring-1 open:ring-black/5 open:shadow-lg rounded-md open">
                    <summary className="flex justify-between cursor-pointer select-none">
                      <h4 className="">
                        {" "}
                        <b>3.1.5</b> Неможливість збільшення фіксованої
                        процентної ставки за Договором без письмової згоди
                        споживача фінансової послуги;
                      </h4>
                      <div className="transition-transform transform duration-300 w-6 h-6">
                        <PointerIcon />
                      </div>
                    </summary>
                    <div className="mt-2">
                      <p className="indent-4">
                        Тип процентної ставки – фіксована, не може бути
                        збільшена без письмової згоди Позичальника
                      </p>
                    </div>
                  </details>
                </li>
              </ul>
            </li>
            <li>
              {" "}
              <h4 className="text-[16px] md:text-[18px] lg:text-[20px] text-primary_700 font-bold mt-2 indent-4">
                3.2 Залучення фінансових активів із зобовязанням щодо наступного
                їх повернення
              </h4>
              <ul>
                <li key="3.2.1">
                  {" "}
                  <details className="open:p-4 pt-2 px-4 group open:bg-white open:ring-1 open:ring-black/5 open:shadow-lg rounded-md open">
                    <summary className="flex justify-between cursor-pointer select-none gap-1">
                      <h4 className="">
                        {" "}
                        <b>3.2.1</b> Наявність у клієнта права на відмову від
                        договору про надання фінансових послуг. Строк, протягом
                        якого клієнтом може бути використано право на відмову
                        від договору, а також інші умови використання права на
                        відмову від договору:
                      </h4>
                      <div className="transition-transform transform duration-300 w-6 h-6">
                        <PointerIcon />
                      </div>
                    </summary>
                    <div className="mt-2">
                      <p className="indent-4">
                        Для такого виду фінансової послуги договором та
                        законодавством не передбачено право на відмову від
                        договору.
                      </p>
                    </div>
                  </details>
                </li>
                <li key="3.2.2">
                  <details className="open:p-4 pt-2 px-4 group open:bg-white open:ring-1 open:ring-black/5 open:shadow-lg rounded-md open">
                    <summary className="flex justify-between cursor-pointer select-none">
                      <h4 className="">
                        {" "}
                        <b>3.2.2</b> Мінімальний строк дії договору (якщо
                        застосовується):
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
                <li key="3.2.3">
                  {" "}
                  <details className="open:p-4 pt-2 px-4 group open:bg-white open:ring-1 open:ring-black/5 open:shadow-lg rounded-md open">
                    <summary className="flex justify-between cursor-pointer select-none gap-1">
                      <h4 className="">
                        {" "}
                        <b>3.2.3</b> Наявність у клієнта права розірвати чи
                        припинити договір, права дострокового виконання
                        договору, а також наслідки таких дій
                      </h4>
                      <div className="transition-transform transform duration-300 w-6 h-6">
                        <PointerIcon />
                      </div>
                    </summary>
                    <div className="mt-2">
                      <p className="indent-4">
                        Вкладник має право достроково в односторонньому порядку
                        розірвати договір з дотриманням таких правил:
                      </p>
                      <ul>
                        <li className="indent-4">
                          1) Вкладник зобов’язаний повідомити Спілку про свій
                          намір достроково розірвати цей Договір не пізніше, ніж
                          за 10 (десять) робочих днів до запланованої дати
                          розірвання цього Договору;
                        </li>
                        <li className="indent-4">
                          2) за результатами перерахунку процентів, згідно
                          підпункту 4.1.1. цього Договору, Вкладник зобов’язаний
                          повернути Спілці надмірно отримані проценти.
                          Повернення надмірно отриманих процентів може
                          здійснюватись:* шляхом їх внесення до каси Спілки; *
                          шляхом їх внесення на поточний рахунок Спілки у
                          банку;*шляхом їх відрахування з грошових коштів за
                          Вкладом, які б мали бути повернуті Вкладнику, згідно
                          умов цього Договору;
                        </li>
                        <li className="indent-4">
                          3) спілка зобов’язана повернути Вкладнику всі належні
                          йому грошові кошти відповідно до умов цього Договору
                          упродовж 10 (десяти) робочих днів з дати вказаної
                          Вкладником як запланованої дати розірвання цього
                          Договору;
                        </li>
                        <li className="indent-4">
                          4) днем припинення нарахування процентів за Вкладом є
                          запланована дата розірвання цього Договору вказана
                          Вкладником в повідомленні про дострокове розірвання
                          цього Договору.
                        </li>
                      </ul>
                    </div>
                  </details>
                </li>
                <li key="3.2.4">
                  <details className="open:p-4 pt-2 px-4 group open:bg-white open:ring-1 open:ring-black/5 open:shadow-lg rounded-md open">
                    <summary className="flex justify-between cursor-pointer select-none gap-1">
                      <h4 className="">
                        {" "}
                        <b>3.2.4</b> Порядок внесення змін та доповнень до
                        Договору
                      </h4>
                      <div className="transition-transform transform duration-300 w-6 h-6">
                        <PointerIcon />
                      </div>
                    </summary>
                    <div className="mt-2">
                      <p className="indent-4">
                        Будь-які зміни і доповнення до Договору дійсні за умови,
                        якщо вони вчинені в письмовій формі і підписані
                        сторонами, шляхом укладання додаткового договору.
                      </p>
                    </div>
                  </details>
                </li>
                <li key="3.2.5">
                  {" "}
                  <details className="open:p-4 pt-2 px-4 group open:bg-white open:ring-1 open:ring-black/5 open:shadow-lg rounded-md open">
                    <summary className="flex justify-between cursor-pointer select-none">
                      <h4 className="">
                        {" "}
                        <b>3.2.5</b> Неможливість збільшення фіксованої
                        процентної ставки за Договором без письмової згоди
                        споживача фінансової послуги;
                      </h4>
                      <div className="transition-transform transform duration-300 w-6 h-6">
                        <PointerIcon />
                      </div>
                    </summary>
                    <div className="mt-2">
                      <p className="indent-4">
                        Тип процентної ставки – фіксована, не може бути
                        збільшена.
                      </p>
                    </div>
                  </details>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li key="4">
          {" "}
          <h3 className="text-[16px] md:text-[18px] lg:text-[20px] text-primary_700 font-bold mt-4">
            4. МЕХАНІЗМИ ЗАХИСТУ ПРАВ СПОЖИВАЧІВ ФІНАНСОВИХ ПОСЛУГ
          </h3>
          <ul>
            <li key="4.1">
              {" "}
              <details className="open:p-4 pt-2 px-4 group open:bg-white open:ring-1 open:ring-black/5 open:shadow-lg rounded-md open">
                <summary className="flex justify-between cursor-pointer select-none">
                  <h4 className="">
                    <b>4.1</b> Можливість та порядок позасудового розгляду скарг
                    споживачів фінансових послуг
                  </h4>
                  <div className="transition-transform transform duration-300 w-6 h-6">
                    <PointerIcon />
                  </div>
                </summary>
                <div className="mt-2">
                  <p className="indent-4">
                    1. Скарги споживача фінансових послуг кредитною спілкою в
                    позасудовому порядку розглядаються в порядку передбаченому
                    ЗУ «Про звернення громадян» за місцезнаходженням кредитної
                    спілки.
                  </p>
                  <p className="indent-4">
                    2. Споживач фінансових послуг може звернутися із скаргою для
                    позасудового розгляду згідно законодавства до:
                  </p>
                  <ul>
                    <li>
                      <p className="indent-4">
                        1) Національний Банк України (НБУ)
                        <br /> Адреса: Україна, 01601, місто Київ, вул.
                        Інститутська, будинок 9, Зручна{" "}
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline"
                          href="https://bank.gov.ua/ua/consumer-protection/citizens-appeals"
                        >
                          онлайн-форма
                        </a>{" "}
                        на вебсайті НБУ;
                        <br /> Для електронного звернення:{" "}
                        <a className="underline" href="mailto:nbu@bank.gov.ua">
                          nbu@bank.gov.ua
                        </a>{" "}
                        (заповніть і надішліть{" "}
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline"
                          href="https://bank.gov.ua/admin_uploads/article/form_electronic_appeal_citizen.docx"
                        >
                          форму
                        </a>{" "}
                        та за потреби додайте супровідні матеріали. Але розмір
                        вкладення – не більше 10 МБ); <br />
                        Для листування: вул. Інститутська, 9, м. Київ, 01601;
                        <br />
                        Для подання письмових звернень громадян: вул.
                        Інститутська, 11-б, м. Київ, 01601; Телефон: 0 800 505
                        240; Пн-Чт 9:00 – 18:00, Пт 9:00 – 16:45; <br />
                        Запис на особистий прийом: через{" "}
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline"
                          href="https://bank.gov.ua/ua/consumer-protection/personal-reception"
                        >
                          онлайн-форму
                        </a>{" "}
                        або за тел. 0 800 505 240; <br />
                        Громадська приймальня: вул. Інститутська, 12, кімн. 24
                      </p>
                    </li>
                    <li>
                      <p className="indent-4">
                        2) Державна служба України з питань безпечності харчових
                        продуктів та захисту споживачів (Держпродспоживслужба){" "}
                        <br />
                        Адреса: 01001, м.Київ, вул. Б. Грінченка, 1,
                        <br />
                        Приймальня{" "}
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline"
                          href="tel:380442791270"
                        >
                          (044) 279 12 70
                        </a>
                        <br />
                        Цілодобова Гаряча лінія (Call-центр){" "}
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline"
                          href="tel:380443647780"
                        >
                          (044) 364 77 80
                        </a>
                        <br />
                        Електронна пошта{" "}
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline"
                          href="mailto:info@dpss.gov.ua"
                        >
                          info@dpss.gov.ua{" "}
                        </a>
                        <br /> Департамент захисту споживачів, тел.: 528-63-16;
                        528-92-42
                      </p>
                    </li>
                    <li>
                      <p className="indent-4">
                        3) Управління Держпродспоживслужби в м. Тернополі
                        <br />
                        Адреса: 46020, м. Тернопіль, вул. Текстильна,6; Тел.:
                        (0352) 520145; e-mail: tern.misto@dpss-te.gov.ua
                      </p>
                    </li>
                    <li>
                      <p className="indent-4">
                        4) Тернопільська міська рада
                        <br /> Адреса: м. Тернопіль, вул. Листопадова, 5 <br />
                        Відділ звернень 0800300352
                      </p>
                    </li>
                  </ul>
                </div>
              </details>
            </li>
            <li key="4.2">
              <details className="open:p-4 pt-2 px-4 group open:bg-white open:ring-1 open:ring-black/5 open:shadow-lg rounded-md open">
                <summary className="flex justify-between cursor-pointer select-none">
                  <h4 className="">
                    <b>4.2</b> Наявність гарантійних фондів чи компенсаційних
                    схем, що застосовуються відповідно до законодавства
                  </h4>
                  <div className="transition-transform transform duration-300 w-6 h-6">
                    <PointerIcon />
                  </div>
                </summary>
                <div className="mt-2">
                  <p className="indent-4">
                    Законодавством не передбачено наявність у кредитної спілки
                    гарантійних фондів чи компенсаційних схем при наданні
                    фінансових послуг.
                  </p>
                </div>
              </details>
            </li>
          </ul>
        </li>
      </ul>
      <p>
        Інша інформація про кредитну спілку, яка підлягає оприлюдненню
        відповідно до законодавства України.{" "}
      </p>
      <p className="indent-4">
        Відомості про про режим робочого часу та відокремлені підрозділи
        фінансової установи:{" "}
        <Link href="/contacts" className="underline hover:text-primary_300">
          тут
        </Link>
      </p>{" "}
      <p className="indent-4">
        Відомості про порушення провадження у справі про банкрутство,
        застосування процедури санації кредитної спілки: Стосовно Спілки не
        порушено провадження у справі про банкрутство, не застосовані процедури
        санації.
      </p>{" "}
      <p className="indent-4">
        Відомості про прийняття рішення про ліквідацію спілки: Спілка не
        перебуває на даний момент в стадії ліквідації.
      </p>{" "}
      <a
        href="https://drive.google.com/file/d/1O64b89Stz8nqlOnK7vPvz7t_4hXQxjja/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="flex gap-2 mt-6 cursor-pointer"
      >
        <PdfIcon /> Структура власності
      </a>
    </div>
  );
};
