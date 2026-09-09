export interface NewsItem {
  title: string;
  text: string;
  route: string;
  foto: string;
}

// Новини відображаються у порядку масиву: перша — найновіша.
export const newsItems: NewsItem[] = [
  {
    title: "Застосовано захід впливу - письмове застереження",
    text: "Застосовано застереження, ознайомитись тут",
    route: "/about-us/official-notice-of-the-credit-union",
    foto: "/news-foto/nbu-letter-new.webp",
  },
  {
    title: "Запрошення на загальні збори 2026",
    text: 'Шановні члени кредитної спілки "Кредит-ФОС" запрошуємо вас на річні загальні збори кредитної спілки, які відбудуться 30 червня 2026 року в м.Тернопіль.',
    route: "/about-us/general-meetings-of-members-26",
    foto: "/newsFoto6.webp",
  },
  {
    title: "Запрошення на загальні збори",
    text: "26 червня 2025 року відбудуться загальні збори членів. Буде розлянуто підсумки роботи за 2024рік, затвердженння нових внутрішніх нормативних документів спілки.",
    route: "/about-us/general-meetings-of-members-25",
    foto: "/newsFoto5.webp",
  },
  {
    title: "Нам 25 років!",
    text: "2024 року кредитній спілці Кредит-ФОС виповнилось 25 років від початку роботи",
    route: "/about-us/anniversary-of-the-credit-union",
    foto: "/newsFoto.webp",
  },
  {
    title: "Кредитний реєстр НБУ",
    text: "Кредитна спілка «Кредит-ФОС» повідомляє про подання та отримання інформації з Кредитного реєстру Національного банку України відповідно до чинного законодавства.",
    route: "/about-us/credit-reestr-NBU",
    foto: "/news-foto/credit reestr.webp",
  },
  {
    title: "Запрошення на загальні збори",
    text: "25 червня 2024р. року відбудуться загальні збори членів. Буде розлянуто підсумки роботи за 2023рік, затвердженння нових внутрішніх нормативних документів спілки.",
    route: "/about-us/general-meetings-of-members",
    foto: "/newsFoto2.webp",
  },
  {
    title: "Відкриття філії в смт.Козова",
    text: "15 лютого 2023 року відкрили філію в смт.Козова і готові приймати клієнтів",
    route: "/about-us/opening-branch-in-kozova",
    foto: "/newsFoto3.webp",
  },
  {
    title: "Відкриття філії в м.Збараж",
    text: "15 лютого 2022 року відкрили філію в смт.Козова і готові приймати клієнтів",
    route: "/about-us/opening-branch-in-zbarazh",
    foto: "/newsFoto4.webp",
  },
  {
    title: "Гранд для учасників спілки",
    text: "Допомога від Всесвітньої фундації кредитних спілок, проекту КЕП за надану підтримку - 'Обладнання для агровиробників'",
    route: "/about-us/grand-for-union-members",
    foto: "/newsFoto1.webp",
  },
];
