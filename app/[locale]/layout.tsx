import React from "react";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import "../globals.css";
import Navbar from "@/components/shared/navbar/Navbar";
import Footer from "@/components/shared/Footer";

const inter = Inter({ subsets: ["latin"] });

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ua" }, { locale: "de" }];
}

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <main className="pattern-background relative min-h-screen">
            <Navbar />
            <section className="flex flex-1 flex-col max-md:pb-14">
              {children}
            </section>
            <Footer />
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
