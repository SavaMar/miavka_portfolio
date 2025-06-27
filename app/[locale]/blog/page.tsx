"use client";

/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useLocale } from "next-intl";
import { Calendar, Filter, X } from "lucide-react";
import HeroSection from "@/components/shared/HeroSection";

interface Article {
  id: string;
  title: string;
  date: string;
  coverImage: string;
  tags: string[];
  excerpt?: string;
}

export default function BlogPage() {
  const locale = useLocale();
  const [allArticlesData, setAllArticlesData] = useState<Article[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [allTags, setAllTags] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const apiEndpoint =
          locale === "ua" ? "/api/articles-ua" : "/api/articles";
        const response = await fetch(apiEndpoint);
        const articles = await response.json();
        setAllArticlesData(articles);

        // Extract unique tags from all articles
        const tags = Array.from(
          new Set(articles.flatMap((article: Article) => article.tags || []))
        ).sort() as string[];
        setAllTags(tags);
      } catch (error) {
        console.error("Error fetching articles:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticles();
  }, [locale]);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setSelectedTags([]);
    setSearchTerm("");
  };

  const filteredArticles = allArticlesData.filter((article) => {
    if (!article || !article.title) return false;

    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (article.excerpt &&
        article.excerpt.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (article.tags &&
        article.tags.some((tag) =>
          tag.toLowerCase().includes(searchTerm.toLowerCase())
        ));

    const matchesTags =
      selectedTags.length === 0 ||
      (article.tags && article.tags.some((tag) => selectedTags.includes(tag)));

    return matchesSearch && matchesTags;
  });

  const formatDate = (dateStr: string) => {
    const [day, month, year] = dateStr.split(".");
    const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    return date.toLocaleDateString(locale === "ua" ? "uk-UA" : "en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-my-color-light">Loading articles...</div>
      </div>
    );
  }

  return (
    <section>
      <HeroSection
        title="BLOG"
        description={
          locale === "ua"
            ? "Я ділюся своїм шляхом тут і порадами для пошуку власного стилю та роботи з внутрішньою творчістю. Моя місія - надихати дух інших."
            : "I'm sharing my way here and tips for finding your own style and how to work with your inner creativity. My mission is to inspire others' spirits."
        }
      />

      {/* Main Content Area */}
      <div className="mt-10 w-full bg-white px-6 py-12">
        {/* Search and Filter Section */}
        <div className="mb-12">
          <div className="flex flex-col gap-6">
            {/* Search - Full Width */}
            <div className="relative w-full">
              <input
                type="text"
                placeholder={
                  locale === "ua" ? "Пошук статей..." : "Search articles..."
                }
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 pl-10 text-gray-900 placeholder:text-gray-500 focus:border-my-color focus:outline-none focus:ring-2 focus:ring-my-color/20"
              />
              <Filter className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-gray-400" />
            </div>

            {/* Active Filters */}
            {(selectedTags.length > 0 || searchTerm) && (
              <Button
                variant="outline"
                onClick={clearFilters}
                className="flex items-center gap-2 self-start"
              >
                <X className="size-4" />
                {locale === "ua" ? "Очистити фільтри" : "Clear filters"}
              </Button>
            )}
          </div>

          {/* Tags */}
          {allTags.length > 0 && (
            <div className="mt-6">
              <h3 className="mb-3 text-sm font-medium text-gray-700">
                {locale === "ua" ? "Фільтр за тегами:" : "Filter by tags:"}
              </h3>
              <div className="flex flex-wrap gap-2">
                {allTags.map((tag) => (
                  <Badge
                    key={tag}
                    className={`cursor-pointer rounded-md transition-all hover:scale-105 ${
                      selectedTags.includes(tag)
                        ? "bg-my-color text-white shadow-md"
                        : "hero-bg text-white hover:bg-gray-200 hover:text-my-color"
                    }`}
                    onClick={() => toggleTag(tag)}
                  >
                    #{tag}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Articles Grid */}
        {filteredArticles.length === 0 ? (
          <div className="py-16 text-center">
            <div className="mx-auto max-w-md">
              <div className="mb-4 text-gray-400">
                <Filter className="mx-auto size-12" />
              </div>
              <h3 className="mb-2 text-lg font-medium text-gray-900">
                {locale === "ua" ? "Статті не знайдено" : "No articles found"}
              </h3>
              <p className="text-gray-500">
                {locale === "ua"
                  ? "Спробуйте змінити фільтри або пошуковий запит."
                  : "Try adjusting your filters or search terms."}
              </p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
            {filteredArticles.map((article) => (
              <Link
                href={`/${locale}/blog/${article.id}`}
                key={article.id}
                className="group block overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Article Image */}
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={article.coverImage}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>

                {/* Article Content */}
                <div className="p-6">
                  {/* Date */}
                  <div className="mb-3 flex items-center gap-2 text-sm text-gray-500">
                    <Calendar className="size-4" />
                    <time dateTime={article.date}>
                      {formatDate(article.date)}
                    </time>
                  </div>

                  {/* Title */}
                  <h2 className="mb-3 line-clamp-2 text-xl font-bold text-gray-900 transition-colors group-hover:text-my-color">
                    {article.title}
                  </h2>

                  {/* Excerpt */}
                  {article.excerpt && (
                    <p className="mb-4 line-clamp-3 leading-relaxed text-gray-600">
                      {article.excerpt}
                    </p>
                  )}

                  {/* Tags */}
                  <div className="mb-4 flex flex-wrap gap-1">
                    {article.tags &&
                      article.tags.slice(0, 3).map((tag) => (
                        <Badge
                          key={tag}
                          className="hero-bg rounded-md text-xs text-white hover:bg-my-color-dark"
                        >
                          #{tag}
                        </Badge>
                      ))}
                    {article.tags && article.tags.length > 3 && (
                      <Badge
                        variant="outline"
                        className="border-gray-200 bg-gray-50 text-xs text-gray-600"
                      >
                        +{article.tags.length - 3}
                      </Badge>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Results Count */}
        {filteredArticles.length > 0 && (
          <div className="mt-12 text-center">
            <p className="text-sm text-gray-500">
              {locale === "ua"
                ? `Показано ${filteredArticles.length} з ${allArticlesData.length} статей`
                : `Showing ${filteredArticles.length} of ${allArticlesData.length} articles`}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
