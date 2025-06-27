import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "posts-ua");

interface ArticleSummaryData {
  id: string;
  title: string;
  date: string;
  coverImage: string;
  tags: string[];
  excerpt?: string;
}

interface ArticleData extends ArticleSummaryData {
  contentHtml: string;
}

function parseDate(dateStr: string): Date {
  const parts = dateStr.split(".");
  if (parts.length === 3) {
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1;
    const year = parseInt(parts[2], 10);
    return new Date(year, month, day);
  }
  throw new Error("Invalid date format");
}

export function getSortedArticlesData(): ArticleSummaryData[] {
  const fileNames = fs.readdirSync(postsDirectory);
  const allArticlesData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");

    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContents);

    const { title, date, coverImage, tags, excerpt } = matterResult.data as {
      title: string;
      date: string;
      coverImage: string;
      tags: string[];
      excerpt?: string;
    };

    // Generate excerpt from content if not provided
    const contentExcerpt =
      excerpt ||
      matterResult.content
        .replace(/[#*`]/g, "") // Remove markdown formatting
        .replace(/\n+/g, " ") // Replace newlines with spaces
        .trim()
        .substring(0, 150) + "...";

    return {
      id,
      title,
      date,
      coverImage,
      tags,
      excerpt: contentExcerpt,
    };
  });

  return allArticlesData.sort((a, b) => {
    try {
      const dateA = parseDate(a.date);
      const dateB = parseDate(b.date);
      return dateB.getTime() - dateA.getTime();
    } catch (error) {
      console.error("Error parsing dates:", error);
      return 0;
    }
  });
}

export async function getPostData(id: string): Promise<ArticleData> {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  const { title, date, coverImage, tags, excerpt } = matterResult.data as {
    title: string;
    date: string;
    coverImage: string;
    tags: string[];
    excerpt?: string;
  };

  return {
    id,
    title,
    date,
    coverImage,
    tags,
    excerpt,
    contentHtml,
  };
}
