"use client";
import EcwidStore from "@/components/shared/EcwidStore";
import React from "react";
import { useLocale } from "next-intl";

// Translation constants
const TRANSLATIONS = {
  en: {
    title: "Done with love",
    subtitle: "Sometimes I make things.",
  },
  ua: {
    title: "Зроблено з любов'ю",
    subtitle: "Іноді я роблю вякі штучкі.",
  },
};

const ShopPage = () => {
  const locale = useLocale();
  const translations =
    TRANSLATIONS[locale as keyof typeof TRANSLATIONS] || TRANSLATIONS.en;

  return (
    <section>
      <section className="hero-bg flex w-full flex-col px-20 pr-10 sm:flex-row sm:items-center lg:h-60">
        <div className="sm:ml-5 xl:ml-10">
          <p className="mb-5 font-namu text-5xl font-extrabold text-my-color sm:text-6xl md:text-6xl lg:text-8xl">
            {translations.title}
          </p>
          <p className="not-white fw-300 text-lg">{translations.subtitle}</p>
        </div>
      </section>
      <div className="mb-24 p-10">
        <div className="w-full rounded-lg bg-slate-300 p-5">
          <EcwidStore />
        </div>
      </div>
    </section>
  );
};

export default ShopPage;
