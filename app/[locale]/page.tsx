"use client";
import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import Masonry from "react-masonry-css";
import { ArrowUp } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";

// Current activities section constants - Easy to edit and update
const CURRENT_ACTIVITIES = {
  en: {
    lastUpdated: "Last updated: 10.11.2025",
    reading: {
      title: "Reading",
      content: "Currently reading 'Chaos Theory' by Steven Strogatz.",
    },
    listening: {
      title: "Listening",
      content: "Listening to 'The Myth of Normal' by Gabor Mate.",
    },
    life: {
      title: "Life",
      content:
        "Fell obsessed with working with colorful lights and projectors for photography!",
    },
  },
  ua: {
    lastUpdated: "Останнє оновлення: 10.11.2025",
    reading: {
      title: "Читаю",
      content: "Зараз читаю «Теорія хаосу» Ствен Стріготц.",
    },
    listening: {
      title: "Слухаю",
      content: "Слухаю 'Міф про нормальність' Гáбора Мате.",
    },
    life: {
      title: "Життя",
      content:
        "Повністю закотився в роботу з кольоровим світлом та проєкторами для фотографії!",
    },
  },
};

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
};

// Generate URLs for all images 1-24, including missing ones
const generateHomeImageUrls = () => {
  const urls: string[] = [];

  // Generate URLs for all images 1-24
  for (let i = 1; i <= 24; i++) {
    urls.push(`/assets/img/for_home/${i}.jpg`);
  }

  return urls;
};

const Home = () => {
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
  const [isMobile, setIsMobile] = useState(false);

  const t = useTranslations("home");
  const locale = useLocale();
  const activities =
    CURRENT_ACTIVITIES[locale as keyof typeof CURRENT_ACTIVITIES] ||
    CURRENT_ACTIVITIES.en;

  // Generate image URLs once
  const imageUrls = generateHomeImageUrls();

  // Detect screen size only
  useEffect(() => {
    const checkScreenSize = () => {
      const mobile = window.innerWidth < 700;
      setIsMobile(mobile);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const handleImageLoad = useCallback((index: number) => {
    setLoadedImages((prev) => new Set(Array.from(prev).concat(index)));
  }, []);

  const handleImageError = useCallback((index: number) => {
    // Mark as loaded to remove loading skeleton and prevent retries
    setLoadedImages((prev) => new Set(Array.from(prev).concat(index)));
    console.warn(
      `Failed to load image ${index + 1} - marking as loaded to prevent retries`
    );
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <section className="hero-bg mb-10 flex h-80 w-full flex-wrap justify-between px-20 pr-10 pt-5">
        <div className="relative flex">
          <Image
            src={`/assets/img/avatar.png`}
            alt="hero"
            width={290}
            height={20}
            className="relative -top-8 rounded-lg opacity-50 md:mx-7 md:opacity-100"
          />
          <div className="absolute -left-6 sm:left-0 sm:ml-7 md:relative md:mt-2 lg:mt-10 xl:ml-5">
            <p className="mb-5 font-namu text-4xl font-extrabold text-my-color sm:text-6xl md:text-6xl lg:text-6xl">
              MARI MIAVKA
            </p>
            <p className="not-white fw-300 mt-10 font-namu text-lg ">
              {t("hero.subtitle")}
            </p>
          </div>
        </div>
      </section>

      <div className="mb-24 bg-gradient-to-br from-neutral-50 to-neutral-100 p-4 sm:p-6 md:p-8">
        <section className="mb-8 sm:mb-10">
          <div className="space-y-4 sm:space-y-6">
            {/* Header with title and last updated */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
              <h2 className="bg-gradient-to-r from-[#252424] to-[#2a2a2a] bg-clip-text text-2xl font-bold text-transparent sm:text-3xl">
                {t("nowPage.title")}
              </h2>
              <div className="flex items-center gap-2 rounded-full border border-neutral-200 bg-white/60 px-3 py-1.5 text-xs text-neutral-600 backdrop-blur-sm sm:px-4 sm:py-2 sm:text-sm">
                <span className="size-1.5 animate-pulse rounded-full bg-green-500 sm:size-2"></span>
                <span>{activities.lastUpdated}</span>
              </div>
            </div>

            {/* Main content card */}
            <div className="overflow-hidden rounded-2xl border border-neutral-100 bg-white shadow-xl sm:rounded-3xl">
              {/* Current activities section */}
              <div className="bg-white p-4 sm:p-6 md:p-8">
                <div className="space-y-3">
                  <p className="text-neutral-700">
                    <strong>{activities.reading.title}:</strong>{" "}
                    {activities.reading.content}
                    {locale === "ua" ? (
                      <Link
                        href="/books"
                        className="ml-1 font-medium text-blue-500 underline decoration-1 underline-offset-2 transition-colors hover:text-blue-500"
                      >
                        Прочитані мною книги
                      </Link>
                    ) : (
                      <Link
                        href="/books"
                        className="ml-1 font-medium text-blue-500 underline decoration-1 underline-offset-2 transition-colors hover:text-blue-500"
                      >
                        The books I&apos;ve read
                      </Link>
                    )}
                  </p>
                  <p className="text-neutral-700">
                    <strong>{activities.listening.title}:</strong>{" "}
                    {activities.listening.content}
                  </p>
                  <p className="text-neutral-700">
                    <strong>{activities.life.title}:</strong>{" "}
                    {activities.life.content}
                  </p>
                </div>

                {/* CTA Button */}
                <div className="mt-6 border-t border-gray-100 pt-4 sm:mt-8 sm:pt-6">
                  <div className="space-y-3">
                    <Link
                      href="/now"
                      className="group inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-[#e95a4f] to-[#ff7a6f] px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#a12d23] hover:bg-gradient-to-r hover:from-[#a12d23] hover:to-[#c34949] hover:shadow-xl sm:rounded-2xl sm:px-8 sm:py-4 sm:text-base"
                    >
                      <span>{t("nowPage.ctaButton")}</span>
                      <svg
                        className="ml-2 size-4 transition-transform group-hover:translate-x-1 sm:size-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Link>

                    {/* Telegram button - only show for Ukrainian locale */}
                    {locale === "ua" && (
                      <Link
                        href="https://t.me/mari_miavka"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-full items-center justify-center rounded-xl bg-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:shadow-xl sm:rounded-2xl sm:px-8 sm:py-4 sm:text-base"
                      >
                        <span>мій телеграм канал</span>
                        <svg
                          className="ml-2 size-4 transition-transform group-hover:translate-x-1 sm:size-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                        </svg>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* GIFs Block */}
        <div className="my-8 space-y-6 sm:space-y-8">
          {/* Single GIF on mobile, 3 columns on larger screens */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {/* GIF 44 */}
            <div className="flex justify-center">
              <div className="overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src="/assets/img/for_home/44.gif"
                  alt="Fun GIF 1"
                  width={400}
                  height={300}
                  className="h-auto w-full max-w-[300px] object-cover sm:max-w-[250px] lg:max-w-[400px]"
                  priority={false}
                  unoptimized={true}
                />
              </div>
            </div>

            {/* GIF 211 */}
            <div className="flex justify-center">
              <div className="overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src="/assets/img/for_home/211.gif"
                  alt="Fun GIF 2"
                  width={400}
                  height={300}
                  className="h-auto w-full max-w-[300px] object-cover sm:max-w-[250px] lg:max-w-[400px]"
                  priority={false}
                  unoptimized={true}
                />
              </div>
            </div>

            {/* GIF 34 - with better handling for large file */}
            <div className="flex justify-center sm:col-span-2 lg:col-span-1">
              <div className="overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src="/assets/img/for_home/34.gif"
                  alt="Fun GIF 3"
                  width={400}
                  height={300}
                  className="h-auto w-full max-w-[300px] object-cover sm:max-w-[250px] lg:max-w-[400px]"
                  priority={false}
                  unoptimized={true}
                  onError={(e) => {
                    console.warn(
                      "Failed to load 34.gif - file might be too large (7.9MB)"
                    );
                    // Hide the container if GIF fails to load
                    const target = e.target as HTMLImageElement;
                    if (target.parentElement?.parentElement) {
                      target.parentElement.parentElement.style.display = "none";
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex gap-4 rounded-lg p-2"
          columnClassName="flex flex-col gap-4"
        >
          {imageUrls.map((url, index) => {
            const isLoaded = loadedImages.has(index);

            return (
              <div key={index} className="relative overflow-hidden rounded-lg">
                {/* Loading skeleton - show until image is loaded */}
                {!isLoaded && (
                  <div className="absolute inset-0 z-10 flex items-center justify-center rounded-lg bg-gray-200">
                    <div className="flex flex-col items-center gap-2">
                      <div className="size-8 animate-spin rounded-full border-4 border-my-color border-t-transparent"></div>
                      <p className="text-xs text-gray-600">Loading...</p>
                    </div>
                  </div>
                )}

                <Image
                  src={url}
                  alt={`Self Portrait ${index + 1}`}
                  className={`h-auto w-full rounded-lg object-cover transition-all duration-300 ${
                    isLoaded ? "image-loaded" : "image-blur"
                  }`}
                  width={400}
                  height={300}
                  sizes="(max-width: 500px) 100vw, (max-width: 700px) 50vw, (max-width: 1100px) 33vw, 25vw"
                  priority={index < (isMobile ? 2 : 4)} // Priority loading based on screen size
                  onLoad={() => handleImageLoad(index)}
                  onError={() => handleImageError(index)}
                  loading={index < (isMobile ? 2 : 4) ? "eager" : "lazy"}
                  quality={80} // Slightly reduced quality for faster loading
                  unoptimized={false} // Let Next.js optimize the images
                />
              </div>
            );
          })}
        </Masonry>

        {/* Go Up Button - Mobile Only */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 flex size-12 items-center justify-center rounded-full bg-my-color text-white shadow-lg transition-all duration-300 hover:bg-my-color-dark hover:shadow-xl md:hidden"
          aria-label="Go to top"
        >
          <ArrowUp className="size-6" />
        </button>
      </div>
    </>
  );
};

export default Home;
