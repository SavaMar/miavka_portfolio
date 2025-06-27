"use client";

import { useLocale } from "next-intl";
import Link from "next/link";
import { Globe, Check } from "lucide-react";

export default function LanguageSwitcher() {
  const locale = useLocale();

  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "ua", name: "Українська", flag: "🇺🇦" },
  ];

  const currentLanguage = languages.find((l) => l.code === locale);

  return (
    <div className="group relative">
      <button className="flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/20 group-hover:shadow-lg">
        <Globe className="size-4" />
        <span className="text-sm font-medium">{currentLanguage?.flag}</span>
        <span className="hidden text-sm font-medium sm:block">
          {currentLanguage?.name}
        </span>
        <svg
          className="size-4 transition-transform group-hover:rotate-180"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      <div className="invisible absolute right-0 top-full z-50 mt-2 w-48 rounded-xl border border-gray-100 bg-white opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:opacity-100">
        <div className="py-2">
          {languages.map((lang) => (
            <Link
              key={lang.code}
              href={`/${lang.code}`}
              className={`flex w-full items-center gap-3 px-4 py-3 text-left transition-colors hover:bg-gray-50 ${
                locale === lang.code
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-700"
              }`}
            >
              <span className="text-lg">{lang.flag}</span>
              <span className="flex-1 font-medium">{lang.name}</span>
              {locale === lang.code && (
                <Check className="size-4 text-blue-600" />
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
