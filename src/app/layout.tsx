import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
