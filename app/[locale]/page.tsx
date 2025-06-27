"use client";
import React, { useState } from "react";
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
import { useTranslations } from "next-intl";

const breakpointColumnsObj = {
  default: 5,
  1100: 3,
  700: 2,
  500: 1,
};
const imagesCount = 10; // Total number of images
const baseUrl = "https://filedn.com/lPmOLyYLDG0bQGSveFAL3WB/home";

// Generate URLs for the images
const imageUrls = Array.from(
  { length: imagesCount },
  (_, index) => `${baseUrl}/${String(index + 1).padStart(2, "0")}.jpg`
);

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const t = useTranslations("home");

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
              <h2 className="bg-gradient-to-r from-[#e95a4f] to-[#ff7a6f] bg-clip-text text-2xl font-bold text-transparent sm:text-3xl">
                {t("nowPage.title")}
              </h2>
              <div className="flex items-center gap-2 rounded-full border border-neutral-200 bg-white/60 px-3 py-1.5 text-xs text-neutral-600 backdrop-blur-sm sm:px-4 sm:py-2 sm:text-sm">
                <span className="size-1.5 animate-pulse rounded-full bg-green-500 sm:size-2"></span>
                <span>{t("nowPage.lastUpdated")}</span>
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
                <div className="space-y-3 sm:space-y-4 md:space-y-6">
                  {/* Reading */}
                  <div className="flex items-start gap-3 rounded-xl border border-blue-100 bg-gradient-to-r from-blue-50 to-indigo-50 p-3 sm:gap-4 sm:rounded-2xl sm:p-4">
                    <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-blue-500 sm:size-10">
                      <BookOpenText className="size-4 text-white sm:size-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="mb-1 text-sm font-semibold text-gray-900 sm:text-base md:text-lg">
                        {t("nowPage.activities.reading.title")}
                      </h4>
                      <p className="text-xs text-gray-700 sm:text-sm md:text-base">
                        {t.rich("nowPage.activities.reading.content", {
                          viewAllBooks: (chunks) => (
                            <Link
                              href="/books"
                              className="font-medium text-blue-600 underline decoration-1 underline-offset-2 transition-colors hover:text-blue-800"
                            >
                              {chunks}
                            </Link>
                          ),
                        })}
                      </p>
                    </div>
                  </div>

                  {/* Listening */}
                  <div className="flex items-start gap-3 rounded-xl border border-purple-100 bg-gradient-to-r from-purple-50 to-pink-50 p-3 sm:gap-4 sm:rounded-2xl sm:p-4">
                    <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-purple-500 sm:size-10">
                      <Headphones className="size-4 text-white sm:size-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="mb-1 text-sm font-semibold text-gray-900 sm:text-base md:text-lg">
                        {t("nowPage.activities.listening.title")}
                      </h4>
                      <p className="text-xs text-gray-700 sm:text-sm md:text-base">
                        {t("nowPage.activities.listening.content")}
                      </p>
                    </div>
                  </div>

                  {/* Life */}
                  <div className="flex items-start gap-3 rounded-xl border border-green-100 bg-gradient-to-r from-green-50 to-emerald-50 p-3 sm:gap-4 sm:rounded-2xl sm:p-4">
                    <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-green-500 sm:size-10">
                      <Sprout className="size-4 text-white sm:size-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="mb-1 text-sm font-semibold text-gray-900 sm:text-base md:text-lg">
                        {t("nowPage.activities.life.title")}
                      </h4>
                      <p className="text-xs text-gray-700 sm:text-sm md:text-base">
                        {t("nowPage.activities.life.content")}
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="mt-6 border-t border-gray-100 pt-4 sm:mt-8 sm:pt-6">
                  <Link
                    href="/now"
                    className="group inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-[#e95a4f] to-[#ff7a6f] px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:rounded-2xl sm:px-8 sm:py-4 sm:text-base"
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

        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex gap-4 rounded-lg p-2"
          columnClassName="flex flex-col gap-4"
        >
          {imageUrls.map((url, index) => (
            <Image
              key={index}
              src={url}
              alt={`Self Portrait ${index + 1}`}
              className={`h-auto w-full rounded-lg object-cover ${isLoaded ? "image-loaded" : "image-blur"}`}
              width={500}
              height={300}
              onLoad={() => setIsLoaded(true)}
              loading="lazy"
            />
          ))}
        </Masonry>

        {/* Go Up Button - Mobile Only */}
        <div className="mt-8 flex justify-center md:hidden">
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 rounded-full border border-gray-200 bg-white/80 px-4 py-3 text-sm font-medium text-gray-700 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl"
          >
            <ArrowUp className="size-4" />
            <span>{t("goUp") || "Go Up"}</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
