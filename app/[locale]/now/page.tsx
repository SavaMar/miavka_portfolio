"use client";
import React from "react";
import { useTranslations, useLocale } from "next-intl";
import {
  BookOpenText,
  Headphones,
  Sprout,
  Clock,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";

const NowPage = () => {
  const t = useTranslations("nowPage");
  const locale = useLocale();

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100">
      <div className="mx-auto max-w-none px-4 py-8 sm:px-6 sm:py-12">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <Link
            href={`/${locale}`}
            className="mb-4 inline-flex items-center gap-2 text-sm text-my-color-light transition-colors hover:text-my-color sm:mb-6 sm:text-base"
          >
            <ArrowLeft className="size-4" />
            <span>{t("backButton")}</span>
          </Link>

          <div className="mb-4 flex flex-col gap-3 sm:mb-6 sm:flex-row sm:items-center sm:justify-between">
            <h1 className="bg-gradient-to-r from-[#e95a4f] to-[#ff7a6f] bg-clip-text text-2xl font-bold text-transparent sm:text-3xl md:text-4xl">
              {t("title")}
            </h1>
            <div className="flex items-center gap-2 rounded-full border border-neutral-200 bg-white/60 px-3 py-1.5 text-xs text-neutral-600 backdrop-blur-sm sm:px-4 sm:py-2 sm:text-sm">
              <span className="size-1.5 animate-pulse rounded-full bg-green-500 sm:size-2"></span>
              <span>{t("lastUpdated")}</span>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-neutral-100 bg-white shadow-xl sm:rounded-3xl">
            <div className="bg-gradient-to-r from-[#252424] to-[#2a2a2a] p-4 text-white sm:p-6 md:p-8">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#e95a4f] to-[#ff7a6f] sm:size-10 sm:rounded-xl md:size-12">
                  <Clock className="size-4 sm:size-5 md:size-6" />
                </div>
                <div>
                  <h2 className="mb-2 text-lg font-bold sm:mb-3 sm:text-xl md:text-2xl">
                    {t("sectionTitle")}
                  </h2>
                  <p className="text-sm leading-relaxed text-neutral-200 sm:text-base md:text-lg">
                    {t.rich("description", {
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
          </div>
        </div>

        {/* Current Activities */}
        <div className="space-y-4 sm:space-y-6">
          {/* Life - First */}
          <div className="overflow-hidden rounded-2xl border border-neutral-100 bg-white shadow-xl sm:rounded-3xl">
            <div className="p-4 sm:p-6 md:p-8">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-green-500 sm:size-10 sm:rounded-xl md:size-12">
                  <Sprout className="size-4 text-white sm:size-5 md:size-6" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="mb-3 text-lg font-bold text-gray-900 sm:mb-4 sm:text-xl md:text-2xl">
                    {t("activities.life.title")}
                  </h3>
                  <p className="mb-3 text-sm leading-relaxed text-gray-700 sm:mb-4 sm:text-base md:text-lg">
                    {t("activities.life.content")}
                  </p>
                  <div className="rounded-lg border border-green-100 bg-green-50 p-3 sm:rounded-xl sm:p-4">
                    <h4 className="mb-2 text-sm font-semibold text-green-900 sm:text-base">
                      {t("projects.title")}
                    </h4>
                    <ul className="space-y-1.5 text-xs text-green-800 sm:space-y-2 sm:text-sm md:text-base">
                      <li>
                        • <strong>{t("projects.project1.name")}:</strong>{" "}
                        {t("projects.project1.description")}
                      </li>
                      <li>
                        • <strong>{t("projects.project2.name")}:</strong>{" "}
                        {t("projects.project2.description")}
                      </li>
                      <li>
                        • <strong>{t("projects.project3.name")}:</strong>{" "}
                        {t("projects.project3.description")}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Reading - Second */}
          <div className="overflow-hidden rounded-2xl border border-neutral-100 bg-white shadow-xl sm:rounded-3xl">
            <div className="p-4 sm:p-6 md:p-8">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-blue-500 sm:size-10 sm:rounded-xl md:size-12">
                  <BookOpenText className="size-4 text-white sm:size-5 md:size-6" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="mb-3 text-lg font-bold text-gray-900 sm:mb-4 sm:text-xl md:text-2xl">
                    {t("activities.reading.title")}
                  </h3>
                  <p className="mb-3 text-sm leading-relaxed text-gray-700 sm:mb-4 sm:text-base md:text-lg">
                    {t.rich("activities.reading.content", {
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
                  <div className="rounded-lg border border-blue-100 bg-blue-50 p-3 sm:rounded-xl sm:p-4">
                    <h4 className="mb-2 text-sm font-semibold text-blue-900 sm:text-base">
                      {t("readingList.title")}
                    </h4>
                    <ul className="space-y-1.5 text-xs text-blue-800 sm:space-y-2 sm:text-sm md:text-base">
                      <li>• {t("readingList.book1")}</li>
                      <li>• {t("readingList.book2")}</li>
                      <li>• {t("readingList.book3")}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Listening - Third */}
          <div className="overflow-hidden rounded-2xl border border-neutral-100 bg-white shadow-xl sm:rounded-3xl">
            <div className="p-4 sm:p-6 md:p-8">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-purple-500 sm:size-10 sm:rounded-xl md:size-12">
                  <Headphones className="size-4 text-white sm:size-5 md:size-6" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="mb-3 text-lg font-bold text-gray-900 sm:mb-4 sm:text-xl md:text-2xl">
                    {t("activities.listening.title")}
                  </h3>
                  <p className="mb-3 text-sm leading-relaxed text-gray-700 sm:mb-4 sm:text-base md:text-lg">
                    {t("activities.listening.content")}
                  </p>
                  <div className="rounded-lg border border-purple-100 bg-purple-50 p-3 sm:rounded-xl sm:p-4">
                    <h4 className="mb-2 text-sm font-semibold text-purple-900 sm:text-base">
                      {t("podcasts.title")}
                    </h4>
                    <ul className="space-y-1.5 text-xs text-purple-800 sm:space-y-2 sm:text-sm md:text-base">
                      <li>• {t("podcasts.podcast1")}</li>
                      <li>• {t("podcasts.podcast2")}</li>
                      <li>• {t("podcasts.podcast3")}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center sm:mt-12">
          <p className="text-xs text-gray-600 sm:text-sm md:text-base">
            {t("footer.text")}{" "}
            <a
              href="https://sive.rs/nowff"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#e95a4f] underline hover:text-[#ff7a6f]"
            >
              {t("footer.link")}
            </a>
            . {t("lastUpdated")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NowPage;
