import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Нормативні документи кредитної спілки Кредит-ФОС",
  description:
    "Важлива інформація для клієнта, типові договори, підвиди кредитів і депозитів, фінансова звітність, органи управління, Інформація щодо врегулювання простроченої заборгованості, Механізм захисту прав споживачів, архівні документи",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      "max-snippet": -1,
    },
  },
};
export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
