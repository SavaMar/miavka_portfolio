"use client";
import React, { useState, useMemo } from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { ArrowLeft, Search, Star, Quote } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

// Import books based on locale
const getBooks = (locale: string) => {
  if (locale === "ua") {
    return require("@/data/books-ua").books;
  }
  return require("@/data/books-en").books;
};

interface Book {
  id: number;
  title: string;
  author: string;
  cover: string;
  description: string;
  hashtags: string[];
  "my-score": number | "lifechanging" | "життєзмінно";
  translation: string[];
  quotes: string[];
}

const BooksPage = () => {
  const locale = useLocale();
  const t = useTranslations("books");
  const books = getBooks(locale);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedScore, setSelectedScore] = useState<string>("all");
  const [selectedHashtag, setSelectedHashtag] = useState<string>("all");
  const [selectedAuthor, setSelectedAuthor] = useState<string>("all");
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Get unique values for filters
  const allHashtags = useMemo(() => {
    const hashtags = new Set<string>();
    books.forEach((book: Book) => {
      book.hashtags.forEach((tag) => hashtags.add(tag));
    });
    return Array.from(hashtags).sort();
  }, [books]);

  const allAuthors = useMemo(() => {
    const authors = new Set<string>();
    books.forEach((book: Book) => authors.add(book.author));
    return Array.from(authors).sort();
  }, [books]);

  const allScores = useMemo(() => {
    const scores = new Set<string>();
    books.forEach((book: Book) => {
      if (typeof book["my-score"] === "number") {
        scores.add(book["my-score"].toString());
      } else {
        scores.add(book["my-score"]);
      }
    });
    return Array.from(scores).sort();
  }, [books]);

  // Filter books
  const filteredBooks = useMemo(() => {
    return books.filter((book: Book) => {
      const matchesSearch =
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesScore =
        selectedScore === "all" ||
        (typeof book["my-score"] === "number"
          ? book["my-score"].toString() === selectedScore
          : book["my-score"] === selectedScore);

      const matchesHashtag =
        selectedHashtag === "all" || book.hashtags.includes(selectedHashtag);

      const matchesAuthor =
        selectedAuthor === "all" || book.author === selectedAuthor;

      return matchesSearch && matchesScore && matchesHashtag && matchesAuthor;
    });
  }, [books, searchTerm, selectedScore, selectedHashtag, selectedAuthor]);

  const handleBookClick = (book: Book) => {
    setSelectedBook(book);
    setIsDialogOpen(true);
  };

  const getScoreDisplay = (score: number | string) => {
    if (score === "lifechanging" || score === "життєзмінно") {
      return (
        <div className="flex items-center gap-1">
          <Star className="size-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm font-medium text-yellow-600">
            {t("lifechanging")}
          </span>
        </div>
      );
    }

    return (
      <div className="flex items-center gap-1">
        {Array.from({ length: score as number }, (_, i) => (
          <Star key={i} className="size-4 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
    );
  };

  const getTranslationStatus = (translations: string[]) => {
    const status = {
      en: translations.includes("en"),
      ua: translations.includes("ua"),
      ru: translations.includes("ru"),
    };

    return (
      <div className="flex gap-2">
        <Badge variant={status.en ? "default" : "secondary"}>EN</Badge>
        <Badge variant={status.ua ? "default" : "secondary"}>UA</Badge>
        <Badge variant={status.ru ? "default" : "secondary"}>RU</Badge>
      </div>
    );
  };

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
            <span>{t("backToHome")}</span>
          </Link>

          <div className="mb-6">
            <h1 className="mb-4 bg-gradient-to-r from-[#e95a4f] to-[#ff7a6f] bg-clip-text text-4xl font-bold text-transparent">
              {locale === "ua" ? "Мої книги" : "My Books"}
            </h1>
            <p className="text-lg text-gray-600">
              {locale === "ua"
                ? "Колекція книг, які я прочитав і які змінили моє життя"
                : "A collection of books I've read that have changed my life"}
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="mb-8 rounded-2xl border border-neutral-100 bg-white p-6 shadow-lg">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-gray-400" />
              <Input
                placeholder={locale === "ua" ? "Пошук..." : "Search..."}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Score Filter */}
            <Select value={selectedScore} onValueChange={setSelectedScore}>
              <SelectTrigger>
                <SelectValue
                  placeholder={locale === "ua" ? "Оцінка" : "Score"}
                />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">
                  {locale === "ua" ? "Всі оцінки" : "All scores"}
                </SelectItem>
                {allScores.map((score) => (
                  <SelectItem key={score} value={score}>
                    {score === "lifechanging" || score === "життєзмінно"
                      ? locale === "ua"
                        ? "Життєзмінно"
                        : "Lifechanging"
                      : `${score} ${locale === "ua" ? "зірок" : "stars"}`}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Hashtag Filter */}
            <Select value={selectedHashtag} onValueChange={setSelectedHashtag}>
              <SelectTrigger>
                <SelectValue placeholder={locale === "ua" ? "Теги" : "Tags"} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">
                  {locale === "ua" ? "Всі теги" : "All tags"}
                </SelectItem>
                {allHashtags.map((tag) => (
                  <SelectItem key={tag} value={tag}>
                    #{tag}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Author Filter */}
            <Select value={selectedAuthor} onValueChange={setSelectedAuthor}>
              <SelectTrigger>
                <SelectValue
                  placeholder={locale === "ua" ? "Автор" : "Author"}
                />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">
                  {locale === "ua" ? "Всі автори" : "All authors"}
                </SelectItem>
                {allAuthors.map((author) => (
                  <SelectItem key={author} value={author}>
                    {author}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Clear Filters */}
            <Button
              variant="outline"
              onClick={() => {
                setSearchTerm("");
                setSelectedScore("all");
                setSelectedHashtag("all");
                setSelectedAuthor("all");
              }}
            >
              {locale === "ua" ? "Очистити" : "Clear"}
            </Button>
          </div>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
          {filteredBooks.map((book: Book) => (
            <div
              key={book.id}
              className="group cursor-pointer"
              onClick={() => handleBookClick(book)}
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl group-hover:scale-105">
                <Image
                  src={book.cover}
                  alt={`${book.title} by ${book.author} - ${getScoreDisplay(book["my-score"])}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, (max-width: 1280px) 16vw, 12vw"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 transition-all duration-300 group-hover:bg-opacity-20" />

                {/* Score overlay */}
                <div className="absolute right-2 top-2 rounded-full bg-white bg-opacity-90 p-1">
                  {getScoreDisplay(book["my-score"])}
                </div>

                {/* Hashtags overlay */}
                <div className="absolute inset-x-2 bottom-2">
                  <div className="flex flex-wrap gap-1">
                    {book.hashtags.slice(0, 2).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No results */}
        {filteredBooks.length === 0 && (
          <div className="py-12 text-center">
            <p className="text-lg text-gray-500">
              {locale === "ua"
                ? "Книги не знайдено. Спробуйте змінити фільтри."
                : "No books found. Try adjusting your filters."}
            </p>
          </div>
        )}

        {/* Book Details Dialog */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="max-h-[90vh] max-w-2xl overflow-y-auto">
            {selectedBook && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold">
                    {selectedBook.title}
                  </DialogTitle>
                </DialogHeader>

                <div className="space-y-6">
                  {/* Author and Score */}
                  <div className="flex items-center justify-between">
                    <p className="text-lg text-gray-600">
                      {locale === "ua" ? "Автор:" : "Author:"}{" "}
                      {selectedBook.author}
                    </p>
                    {getScoreDisplay(selectedBook["my-score"])}
                  </div>

                  {/* Description */}
                  <div>
                    <h3 className="mb-2 font-semibold">
                      {locale === "ua" ? "Опис:" : "Description:"}
                    </h3>
                    <p className="leading-relaxed text-gray-700">
                      {selectedBook.description}
                    </p>
                  </div>

                  {/* Hashtags */}
                  <div>
                    <h3 className="mb-2 font-semibold">
                      {locale === "ua" ? "Теги:" : "Tags:"}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedBook.hashtags.map((tag) => (
                        <Badge key={tag} variant="outline">
                          #{tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Translation Status */}
                  <div>
                    <h3 className="mb-2 font-semibold">
                      {locale === "ua" ? "Переклади:" : "Translations:"}
                    </h3>
                    {getTranslationStatus(selectedBook.translation)}
                  </div>

                  {/* Quotes */}
                  <div>
                    <h3 className="mb-3 flex items-center gap-2 font-semibold">
                      <Quote className="size-4" />
                      {locale === "ua" ? "Цитати:" : "Quotes:"}
                    </h3>
                    <div className="space-y-3">
                      {selectedBook.quotes.map((quote, index) => (
                        <blockquote
                          key={index}
                          className="border-l-4 border-[#e95a4f] pl-4 italic text-gray-700"
                        >
                          &ldquo;{quote}&rdquo;
                        </blockquote>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default BooksPage;
