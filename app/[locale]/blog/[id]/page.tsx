"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useLocale } from "next-intl";
import Link from "next/link";
import {
  ArrowLeft,
  Calendar,
  Tag,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface PageProps {
  params: {
    id: string;
  };
}

interface ArticleData {
  id: string;
  title: string;
  date: string;
  coverImage: string;
  tags: string[];
  excerpt?: string;
  contentHtml: string;
}

interface ArticleListItem {
  id: string;
  title: string;
  date: string;
}

export default function PostPage({ params }: PageProps) {
  const { id } = params;
  const locale = useLocale();
  const [postData, setPostData] = useState<ArticleData | null>(null);
  const [allArticles, setAllArticles] = useState<ArticleListItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);

        // Fetch all articles for navigation
        const articlesEndpoint =
          locale === "ua" ? "/api/articles-ua" : "/api/articles";
        const articlesResponse = await fetch(articlesEndpoint);
        if (articlesResponse.ok) {
          const articlesData = await articlesResponse.json();
          setAllArticles(articlesData);
        }

        // Use the appropriate API endpoint based on locale
        const apiEndpoint =
          locale === "ua" ? `/api/articles-ua/${id}` : `/api/articles/${id}`;

        let response = await fetch(apiEndpoint);
        let data;

        if (response.ok) {
          data = await response.json();
        } else {
          // If the article doesn't exist in the current locale, try the other locale
          const fallbackEndpoint =
            locale === "ua" ? `/api/articles/${id}` : `/api/articles-ua/${id}`;
          const fallbackResponse = await fetch(fallbackEndpoint);

          if (fallbackResponse.ok) {
            data = await fallbackResponse.json();
          } else {
            throw new Error("Article not found");
          }
        }

        setPostData(data);
      } catch (err) {
        setError(`Article not found: ${id}`);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id, locale]);

  // Find current article index and get previous/next articles
  const currentIndex = allArticles.findIndex((article) => article.id === id);
  const previousArticle =
    currentIndex > 0 ? allArticles[currentIndex - 1] : null;
  const nextArticle =
    currentIndex < allArticles.length - 1
      ? allArticles[currentIndex + 1]
      : null;

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white">
        <div className="mx-auto max-w-4xl px-4 py-8">
          <div className="animate-pulse">
            <div className="mb-4 h-12 rounded bg-gray-200"></div>
            <div className="mb-8 h-6 w-1/3 rounded bg-gray-200"></div>
            <div className="mb-8 h-64 rounded bg-gray-200"></div>
            <div className="space-y-4">
              <div className="h-4 rounded bg-gray-200"></div>
              <div className="h-4 rounded bg-gray-200"></div>
              <div className="h-4 rounded bg-gray-200"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !postData) {
    return (
      <div className="min-h-screen bg-white">
        <div className="mx-auto max-w-4xl px-4 py-8">
          <div className="text-center">
            <h1 className="mb-4 text-2xl font-bold text-red-600">
              {locale === "ua" ? "Статтю не знайдено" : "Article not found"}
            </h1>
            <p className="text-gray-600">
              {locale === "ua"
                ? "Запитана стаття не існує або була видалена."
                : "The requested article does not exist or has been removed."}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Back button */}
      <div className="border-b border-gray-100 bg-white/80 backdrop-blur-sm">
        <div className="mx-auto max-w-4xl p-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
          >
            <ArrowLeft className="size-4" />
            {locale === "ua" ? "Назад до блогу" : "Back to blog"}
          </Link>
        </div>
      </div>

      {/* Article content */}
      <div className="mx-auto max-w-4xl px-4 py-12">
        {/* Article header */}
        <header className="mb-12">
          <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
            {postData.title}
          </h1>

          {/* Meta information */}
          <div className="mb-8 flex flex-wrap items-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Calendar className="size-4" />
              <span>{postData.date}</span>
            </div>

            {postData.tags && postData.tags.length > 0 && (
              <div className="flex items-center gap-2">
                <Tag className="size-4" />
                <div className="flex flex-wrap gap-2">
                  {postData.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Excerpt */}
          {postData.excerpt && (
            <p className="mb-8 text-xl leading-relaxed text-gray-600">
              {postData.excerpt}
            </p>
          )}
        </header>

        {/* Cover image */}
        {postData.coverImage && (
          <div className="mb-12 overflow-hidden rounded-2xl shadow-lg">
            <Image
              src={postData.coverImage}
              width={800}
              height={400}
              alt={postData.title}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
        )}

        {/* Article content */}
        <article className="prose prose-lg prose-headings:scroll-m-20 prose-headings:font-bold prose-headings:tracking-tight prose-h1:text-3xl prose-h1:font-extrabold prose-h1:lg:text-4xl prose-h2:text-2xl prose-h2:font-semibold prose-h2:lg:text-3xl prose-h3:text-xl prose-h3:font-semibold prose-h3:lg:text-2xl prose-p:leading-7 prose-p:[&:not(:first-child)]:mt-6 prose-blockquote:mt-6 prose-blockquote:border-l-2 prose-blockquote:pl-6 prose-blockquote:italic prose-ul:my-6 prose-ul:ml-6 prose-ul:list-disc prose-ol:my-6 prose-ol:ml-6 prose-ol:list-decimal prose-li:my-2 prose-code:relative prose-code:rounded prose-code:bg-muted prose-code:px-[0.3rem] prose-code:py-[0.2rem] prose-code:font-mono prose-code:text-sm prose-pre:my-6 prose-pre:overflow-x-auto prose-pre:rounded-lg prose-pre:border prose-pre:bg-black prose-pre:py-4 prose-pre:font-mono prose-pre:text-sm prose-pre:text-white max-w-none">
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>

        {/* Navigation buttons */}
        <nav className="mt-16 flex items-center justify-between border-t border-gray-200 pt-8">
          <div className="flex gap-4">
            {previousArticle ? (
              <Link
                href={`/blog/${previousArticle.id}`}
                className="group flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-700 transition-all hover:border-gray-300 hover:bg-gray-50"
              >
                <ChevronLeft className="size-4 transition-transform group-hover:-translate-x-1" />
                <div className="flex flex-col">
                  <span className="text-xs text-gray-500">
                    {locale === "ua" ? "Попередня" : "Previous"}
                  </span>
                  <span className="line-clamp-1">{previousArticle.title}</span>
                </div>
              </Link>
            ) : (
              <div className="flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-400">
                <ChevronLeft className="size-4" />
                <span>{locale === "ua" ? "Попередня" : "Previous"}</span>
              </div>
            )}
          </div>

          <Link
            href="/blog"
            className="rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200"
          >
            {locale === "ua" ? "Всі статті" : "All Articles"}
          </Link>

          <div className="flex gap-4">
            {nextArticle ? (
              <Link
                href={`/blog/${nextArticle.id}`}
                className="group flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-700 transition-all hover:border-gray-300 hover:bg-gray-50"
              >
                <div className="flex flex-col text-right">
                  <span className="text-xs text-gray-500">
                    {locale === "ua" ? "Наступна" : "Next"}
                  </span>
                  <span className="line-clamp-1">{nextArticle.title}</span>
                </div>
                <ChevronRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            ) : (
              <div className="flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-400">
                <span>{locale === "ua" ? "Наступна" : "Next"}</span>
                <ChevronRight className="size-4" />
              </div>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
}
