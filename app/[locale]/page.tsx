"use client";
import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import Masonry from "react-masonry-css";
import {
  BookOpenText,
  Headphones,
  Sprout,
  Sparkles,
  ArrowUp,
} from "lucide-react";
import { useTranslations, useLocale } from "next-intl";

// Current activities section constants - Easy to edit and update
const CURRENT_ACTIVITIES = {
  en: {
    lastUpdated: "Last updated: 22.07.2025",
    reading: {
      title: "Reading",
      content:
        '"The 5 types of wealth" by Sahil Bloom and "The E-Myth Revisited" by Michael E. Gerber. View all books I\'ve read →',
    },
    listening: {
      title: "Listening",
      content: '"Clear Thinking" Shane Parrish on Audible',
    },
    life: {
      title: "Life",
      content:
        "Working on three projects at the moment, writing code. One for Ukrainians in Switzerland, one related to JiuJitsu industry in Switzerland, and the third one is this blog",
    },
  },
  ua: {
    lastUpdated: "Останнє оновлення: 22.07.2025",
    reading: {
      title: "Читаю",
      content:
        '"Творчий Акт" Рік Рубін та «Працювати на себе. Як не прогоріти в малому бізнесі» Майкл Е. Гербер. Дивитися всі прочитані мною книги →',
    },
    listening: {
      title: "Слухаю",
      content:
        '"Ясне Мислення" Шейн Парріш на Audible. Англійською. Перекладу немає.',
    },
    life: {
      title: "Життя",
      content:
        "Працюю над трьоми проєктами наразі, пишу код. Один для нас українців у Швейцарії, другий повʼязаний із JiuJitsu індустрією покишо у межах швейцарії, а третій це цей блог",
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
              {/* Header section */}
              <div className="bg-gradient-to-r from-[#252424] to-[#2a2a2a] p-4 text-white sm:p-6 md:p-8">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#e95a4f] to-[#ff7a6f] sm:size-10 sm:rounded-xl md:size-12">
                    <Sparkles className="size-4 sm:size-5 md:size-6" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-bold sm:mb-3 sm:text-xl md:text-2xl">
                      {t("nowPage.sectionTitle")}
                    </h3>
                    <p className="text-sm leading-relaxed text-neutral-200 sm:text-base md:text-lg">
                      {t.rich("nowPage.description", {
                        derekSivers: (chunks) => (
                          <a
                            href="https://sive.rs/nowff"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold text-[#ff7a6f] underline decoration-2 underline-offset-2 transition-colors hover:text-[#e95a4f]"
                          >
                            {chunks}
                          </a>
                        ),
                      })}
                    </p>
                  </div>
                </div>
              </div>

              {/* Current activities section */}
              <div className="bg-white p-4 sm:p-6 md:p-8">
                <div className="space-y-4 sm:space-y-5 md:space-y-6">
                  {/* Reading */}
                  <div className="flex items-start gap-4 rounded-lg border border-neutral-200 bg-neutral-50 p-4 sm:gap-5 sm:rounded-xl sm:p-5">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#252424] to-[#2a2a2a] sm:size-12">
                      <BookOpenText className="size-5 text-white sm:size-6" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="mb-2 text-base font-semibold text-neutral-900 sm:text-lg md:text-xl">
                        {activities.reading.title}
                      </h4>
                      <p className="text-sm text-neutral-700 sm:text-base">
                        {activities.reading.content.includes(
                          "View all books"
                        ) ? (
                          <>
                            {activities.reading.content.replace(
                              "View all books →",
                              ""
                            )}
                            <Link
                              href="/books"
                              className="font-medium text-[#e95a4f] underline decoration-1 underline-offset-2 transition-colors hover:text-blue-500"
                            >
                              View all books →
                            </Link>
                          </>
                        ) : activities.reading.content.includes(
                            "Дивитися всі прочитані мною книги"
                          ) ? (
                          <>
                            {activities.reading.content.replace(
                              "Дивитися всі прочитані мною книги →",
                              ""
                            )}
                            <Link
                              href="/books"
                              className="font-medium text-[#e95a4f] underline decoration-1 underline-offset-2 transition-colors hover:text-blue-500"
                            >
                              Дивитися всі прочитані мною книги →
                            </Link>
                          </>
                        ) : (
                          activities.reading.content
                        )}
                      </p>
                    </div>
                  </div>

                  {/* Listening */}
                  <div className="flex items-start gap-4 rounded-lg border border-neutral-200 bg-neutral-50 p-4 sm:gap-5 sm:rounded-xl sm:p-5">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#252424] to-[#2a2a2a] sm:size-12">
                      <Headphones className="size-5 text-white sm:size-6" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="mb-2 text-base font-semibold text-neutral-900 sm:text-lg md:text-xl">
                        {activities.listening.title}
                      </h4>
                      <p className="text-sm text-neutral-700 sm:text-base">
                        {activities.listening.content}
                      </p>
                    </div>
                  </div>

                  {/* Life */}
                  <div className="flex items-start gap-4 rounded-lg border border-neutral-200 bg-neutral-50 p-4 sm:gap-5 sm:rounded-xl sm:p-5">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#252424] to-[#2a2a2a] sm:size-12">
                      <Sprout className="size-5 text-white sm:size-6" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="mb-2 text-base font-semibold text-neutral-900 sm:text-lg md:text-xl">
                        {activities.life.title}
                      </h4>
                      <p className="text-sm text-neutral-700 sm:text-base">
                        {activities.life.content}
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="mt-6 border-t border-gray-100 pt-4 sm:mt-8 sm:pt-6">
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
