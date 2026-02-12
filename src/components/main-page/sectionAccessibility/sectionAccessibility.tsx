const branches = [
  {
    name: "Підволочиська філія кредитної спілки «Кредит-ФОС»",
    address: "Селище Підволочиськ, вул. Шептицького, 3",
    phone: "098 2307081",
    schedule: "Працюємо з 9 -17 год",
    dayOff: "Вихідні — субота, неділя",
  },
  {
    name: "Збаразька філія кредитної спілки «Кредит-ФОС»",
    address: "м. Збараж, вул. Володимира Великого, 1/6",
    phone: "098 2307029",
    schedule: "Працюємо з 9 -17 год",
    dayOff: "Вихідні — субота, неділя",
  },
  {
    name: "Козівська філія кредитної спілки «Кредит-ФОС»",
    address: "Селище Козова вул. Соборна 6, (вхід з торця – лівого боку)",
    phone: "098 7490090",
    schedule: "Працюємо з 9 -16 год",
    dayOff: "Вихідні — субота, неділя",
  },
];

export const SectionAccessibility = () => {
  return (
    <section id="accessibility" className="pt-10 lg:pt-[50px] pb-16 md:pb-[138px] lg:pb-[124px] max-w-[1536px] mx-auto bg-netural_100">
      <div className="px-4 md:px-[78px] lg:px-[120px]">
        <h2 className="title">Філії без бар&#39;єрів</h2>
        <p className="text-[16px] md:text-[18px] text-primary_700 mt-3 max-w-[900px]">
          Перелік відокремлених підрозділів, що є фізично та інформаційно
          доступними клієнтам із числа людей із інвалідністю та інших
          маломобільних груп населення
        </p>
        <ul className="flex flex-col gap-6 md:grid md:grid-cols-2 xl:grid-cols-3 md:gap-x-4 md:gap-y-6 mt-6">
          {branches.map((branch) => (
            <li
              key={branch.name}
              className="rounded-2xl border border-primary_200 bg-primary_100 p-6 flex flex-col gap-3 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-primary_400 text-[16px] md:text-[18px] font-bold leading-snug">
                {branch.name}
              </h3>
              <div className="flex flex-col gap-2 text-[15px] md:text-[16px] text-primary_700">
                <p className="flex items-start gap-2">
                  <span className="font-semibold shrink-0">Адреса:</span>
                  <span>{branch.address}</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="font-semibold shrink-0">Телефон:</span>
                  <a
                    href={`tel:+380${branch.phone.replace(/\s/g, "").slice(1)}`}
                    className="text-primary_300 hover:text-primary_200 transition-colors duration-300 font-semibold"
                  >
                    {branch.phone}
                  </a>
                </p>
                <p className="flex items-start gap-2">
                  <span className="font-semibold shrink-0">Графік:</span>
                  <span>
                    {branch.schedule}
                    <br />
                    {branch.dayOff}
                  </span>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
