import React from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { getNowPageData } from "../../../lib/markdownUtils";

interface NowPageProps {
  params: {
    locale: string;
  };
}

// Common header content constants
const HEADER_CONTENT = {
  en: {
    backButton: " Back to home",
    lastUpdatedLabel: "Last updated: ",
    description:
      "This is a now page, inspired by Derek Sivers. It's a snapshot of what I'm currently focused on.",
    footer: "This page is inspired by the",
  },
  ua: {
    backButton: " Назад на головну",
    lastUpdatedLabel: "Останнє оновлення: ",
    description:
      'Це сторінка "зараз", натхненна Дереком Сайверсом. Це знімок того, на чому я зараз зосереджена.',
    footer: "Ця сторінка натхненна",
  },
};

const NowPage = async ({ params }: NowPageProps) => {
  const { locale } = params;
  const nowData = await getNowPageData(locale);
  const headerContent =
    HEADER_CONTENT[locale as keyof typeof HEADER_CONTENT] || HEADER_CONTENT.en;

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12">
        {/* Header */}
        <div className="mb-12">
          <Link
            href={`/${locale}`}
            className="mb-6 inline-flex items-center gap-2 text-sm text-neutral-600 transition-colors hover:text-neutral-900"
          >
            <ArrowLeft className="size-4" />
            <span>{headerContent.backButton}</span>
          </Link>

          {/* Header Content */}
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <h1 className="text-3xl font-bold text-neutral-900 sm:text-4xl md:text-5xl">
              {nowData.title}
            </h1>
            <div className="flex items-center gap-2 text-xs text-neutral-500 sm:text-sm">
              <span className="size-1.5 rounded-full bg-green-500"></span>
              <span className="font-medium text-green-700">
                {headerContent.lastUpdatedLabel}
                {nowData.lastUpdated}
              </span>
            </div>
          </div>

          <p className="text-sm leading-relaxed text-neutral-600 sm:text-base">
            {headerContent.description}
          </p>

          {/* Markdown Content */}
          <div
            className="markdown-content mt-10"
            dangerouslySetInnerHTML={{ __html: nowData.contentHtml }}
          />

          {/* Footer */}
          <div className="mt-16 border-t border-neutral-200 pt-8 text-center">
            <p className="text-xs text-neutral-500 sm:text-sm">
              {headerContent.footer}{" "}
              <a
                href="https://sive.rs/nowff"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-700 underline decoration-neutral-300 underline-offset-1 hover:text-neutral-900"
              >
                now page movement
              </a>
              . {headerContent.lastUpdatedLabel}
              {nowData.lastUpdated}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NowPage;
