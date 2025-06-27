"use client";

/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import HeroSection from "@/components/shared/HeroSection";

interface Article {
  id: string;
  title: string;
  date: string;
  coverImage: string;
  tags: string[];
}

export default function BlogPage() {
  const [allArticlesData, setAllArticlesData] = useState<Article[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [allTags, setAllTags] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch("/api/articles");
        const articles = await response.json();
        setAllArticlesData(articles);

        // Extract unique tags from all articles
        const tags = Array.from(
          new Set(articles.flatMap((article: Article) => article.tags))
        ).sort() as string[];
        setAllTags(tags);
      } catch (error) {
        console.error("Error fetching articles:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const filteredArticles = allArticlesData.filter(
    (article) =>
      selectedTags.length === 0 ||
      article.tags.some((tag) => selectedTags.includes(tag))
  );

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
        description="I'm sharing my way here and tips for finding your own style and how to work with your inner creativity. My mission is to inspire others' spirits."
      />

      {/* Tag Filter Section */}
      <div className="px-10 pt-6">
        <h3 className="mb-4 text-lg font-semibold text-my-color-light">
          Filter by tags:
        </h3>
        <div className="mb-6 flex flex-wrap gap-2">
          {allTags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className={`cursor-pointer transition-all ${
                selectedTags.includes(tag)
                  ? "bg-my-color text-white"
                  : "bg-my-color-light/20 hover:bg-my-color-light/40"
              }`}
              onClick={() => toggleTag(tag)}
            >
              #{tag}
            </Badge>
          ))}
        </div>
      </div>

      <div className="mb-24 p-10">
        <div className="hero-bg w-full rounded-lg md:p-10">
          {filteredArticles.length === 0 ? (
            <p className="py-8 text-center text-my-color-light">
              No articles found with selected tags.
            </p>
          ) : (
            filteredArticles.map(({ id, title, date, coverImage, tags }) => (
              <Link
                href={`/blog/${id}`}
                key={id}
                className="mb-8 flex cursor-pointer flex-col items-center transition duration-300 ease-in-out hover:scale-105 hover:ease-in-out sm:flex-row"
              >
                <Image
                  src={coverImage}
                  width={100}
                  height={100}
                  alt={title}
                  className="mb-4 h-40 w-full rounded-lg object-cover sm:mb-0 sm:mr-6 sm:w-1/3"
                />
                <div className="flex flex-col">
                  <h2 className="mb-2 text-2xl font-semibold text-my-color-light">
                    {title}
                  </h2>
                  <p className="mb-4 text-sm text-slate-300">{date}</p>
                  <div className="mb-4">
                    {tags.map((tag) => (
                      <Badge
                        variant="secondary"
                        key={tag}
                        className="mr-1 rounded-md bg-my-color-light"
                      >
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
