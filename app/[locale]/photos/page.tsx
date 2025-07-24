// app/photo/page.tsx
"use client";
import React from "react";
import Link from "next/link";
import { useLocale } from "next-intl";
import collections from "@/types/collections"; // Adjust the import path according to your project structure
import Image from "next/image";
import HeroSection from "@/components/shared/HeroSection";

// Translation constants
const TRANSLATIONS = {
  en: {
    title: "PHOTOS",
    description:
      "Here are my commercial photos and personal projects. I do mainly event photos and if you wanna hire me, there is a contact page for it.",
  },
  ua: {
    title: "ФОТО",
    description:
      "Ось мої комерційні фотографії та особисті проєкти. Я займаюся переважно зйомкою подій, і якщо ви хочете мене найняти, є сторінка контактів для цього.",
  },
};

const PhotosPage = () => {
  const locale = useLocale();
  const translations =
    TRANSLATIONS[locale as keyof typeof TRANSLATIONS] || TRANSLATIONS.en;

  return (
    <section>
      <HeroSection
        title={translations.title}
        description={translations.description}
      />
      <div className="mb-24 md:pb-24">
        <div className="grid w-full grid-cols-1 justify-between justify-items-stretch gap-6 p-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {collections.map((collection) => (
            <Link
              key={collection.id}
              href={`/photos/${collection.id}`}
              className="hero-bg flex flex-col items-center justify-center rounded-lg p-4 shadow-lg transition delay-75 hover:scale-110 hover:border-my-color  hover:ease-in-out"
              aria-label={`View collection ${collection.name}`}
              rel="preload"
            >
              <Image
                src={collection.photo}
                alt={collection.name}
                width={300}
                height={300}
                className="max-h-40 w-full rounded-lg object-cover"
              />
              <p className="monserrat-a py-5 text-4xl font-semibold text-my-color-light md:text-2xl">
                {collection.name}
              </p>
              <p className="mt-2 text-sm text-slate-300">{collection.text}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotosPage;
