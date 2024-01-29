import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const montserrat = Montserrat({
  weight: ["600", "700", "800"],
  display: "swap",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Кредитна спілка Кредит-ФОС",
  description: "Кредити, депозити для громадян",
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
      </body>
    </html>
  );
}
