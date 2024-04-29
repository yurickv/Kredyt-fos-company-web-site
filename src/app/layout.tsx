import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  weight: ["400", "600", "700", "800"],
  display: "swap",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Кредитна спілка Кредит-ФОС",
  description:
    "Кредити готівкою в м.Тернопіль та Тернопільській області, депозити для громадян, кредитний і депозитний калькулятори, швидкий розгляд заявки, онлайн подання заявки на кредит.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ua">
      <body className={montserrat.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
