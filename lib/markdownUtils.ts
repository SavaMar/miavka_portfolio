import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "posts");

interface ArticleSummaryData {
  id: string;
  title: string;
  date: string; // Store date as string
  coverImage: string;
  tags: string[];
}

interface ArticleData extends ArticleSummaryData {
  contentHtml: string;
}

function parseDate(dateStr: string): Date {
  const parts = dateStr.split(".");
  // Check that we have the day, month, and year parts
  if (parts.length === 3) {
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1; // Adjust for zero-based month index
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

    const { title, date, coverImage, tags } = matterResult.data as {
      title: string;
      date: string;
      coverImage: string;
      tags: string[];
    };

    return {
      id,
      title,
      date, // Use the date string directly here
      coverImage,
      tags,
    };
  });

  // If you need to sort by date, you will need to convert dates into a comparable format here
  return allArticlesData.sort((a, b) => {
    try {
      const dateA = parseDate(a.date);
      const dateB = parseDate(b.date);
      return dateB.getTime() - dateA.getTime(); // Use getTime() for comparison
    } catch (error) {
      console.error("Error parsing dates:", error);
      return 0; // Default to a neutral value in case of error
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

  const { title, date, coverImage, tags } = matterResult.data as {
    title: string;
    date: string;
    coverImage: string;
    tags: string[];
  };

  return {
    id,
    title,
    date, // Directly use the date string as received from the markdown file
    coverImage,
    tags,
    contentHtml,
  };
}
