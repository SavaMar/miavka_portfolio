import React from "react";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import {
  Montserrat,
  Short_Stack,
  Montserrat_Alternates,
} from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/components/shared/GoogleAnalytics";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

const montserratA = Montserrat_Alternates({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat-alternates",
});

const shortStack = Short_Stack({
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
      <GoogleAnalytics />
      <Analytics />
      <body
        className={`${shortStack.variable} ${montserrat.variable} ${montserratA.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
