import React from "react";
import type { Metadata } from "next";
import { Montserrat, Short_Stack } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

const short_stack = Short_Stack({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-short-stack",
});

export const metadata: Metadata = {
  title: "Miavka portfolio",
  description:
    "Creative prtofolio of Miavka. Photography. Illustration. Tattoo. Design. Art.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${short_stack.variable} ${montserrat.variable}`}>
        {children}
      </body>
    </html>
  );
}
