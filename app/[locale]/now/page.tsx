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
      <div className="mx-auto max-w-none px-6 py-12">
        {/* Header */}
        <div className="mb-8">
          <Link
            href={`/${locale}`}
            className="mb-6 inline-flex items-center gap-2 text-my-color-light transition-colors hover:text-my-color"
          >
            <ArrowLeft className="size-4" />
            <span>{t("backButton")}</span>
          </Link>

          <div className="mb-6 flex items-center justify-between">
            <h1 className="bg-gradient-to-r from-[#e95a4f] to-[#ff7a6f] bg-clip-text text-4xl font-bold text-transparent">
              {t("title")}
            </h1>
            <div className="flex items-center gap-2 rounded-full border border-neutral-200 bg-white/60 px-4 py-2 text-sm text-neutral-600 backdrop-blur-sm">
              <span className="size-2 animate-pulse rounded-full bg-green-500"></span>
              <span>{t("lastUpdated")}</span>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-neutral-100 bg-white shadow-xl">
            <div className="bg-gradient-to-r from-[#252424] to-[#2a2a2a] p-8 text-white">
              <div className="flex items-start gap-4">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#e95a4f] to-[#ff7a6f]">
                  <Clock className="size-6" />
                </div>
                <div>
                  <h2 className="mb-3 text-2xl font-bold">
                    {t("sectionTitle")}
                  </h2>
                  <p className="text-lg leading-relaxed text-neutral-200">
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
        <div className="space-y-6">
          {/* Life - First */}
          <div className="overflow-hidden rounded-3xl border border-neutral-100 bg-white shadow-xl">
            <div className="p-8">
              <div className="flex items-start gap-4">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-green-500">
                  <Sprout className="size-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="mb-4 text-2xl font-bold text-gray-900">
                    {t("activities.life.title")}
                  </h3>
                  <p className="mb-4 text-lg leading-relaxed text-gray-700">
                    {t("activities.life.content")}
                  </p>
                  <div className="rounded-xl border border-green-100 bg-green-50 p-4">
                    <h4 className="mb-2 font-semibold text-green-900">
                      {t("projects.title")}
                    </h4>
                    <ul className="space-y-2 text-green-800">
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
          <div className="overflow-hidden rounded-3xl border border-neutral-100 bg-white shadow-xl">
            <div className="p-8">
              <div className="flex items-start gap-4">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-blue-500">
                  <BookOpenText className="size-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="mb-4 text-2xl font-bold text-gray-900">
                    {t("activities.reading.title")}
                  </h3>
                  <p className="mb-4 text-lg leading-relaxed text-gray-700">
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
                  <div className="rounded-xl border border-blue-100 bg-blue-50 p-4">
                    <h4 className="mb-2 font-semibold text-blue-900">
                      {t("readingList.title")}
                    </h4>
                    <ul className="space-y-2 text-blue-800">
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
          <div className="overflow-hidden rounded-3xl border border-neutral-100 bg-white shadow-xl">
            <div className="p-8">
              <div className="flex items-start gap-4">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-purple-500">
                  <Headphones className="size-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="mb-4 text-2xl font-bold text-gray-900">
                    {t("activities.listening.title")}
                  </h3>
                  <p className="mb-4 text-lg leading-relaxed text-gray-700">
                    {t("activities.listening.content")}
                  </p>
                  <div className="rounded-xl border border-purple-100 bg-purple-50 p-4">
                    <h4 className="mb-2 font-semibold text-purple-900">
                      {t("podcasts.title")}
                    </h4>
                    <ul className="space-y-2 text-purple-800">
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
        <div className="mt-12 text-center">
          <p className="text-gray-600">
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
