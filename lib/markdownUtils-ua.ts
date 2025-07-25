import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { visit } from "unist-util-visit";

const postsDirectory = path.join(process.cwd(), "posts-ua");

// Custom remark plugin to handle iframes
function remarkIframe() {
  return function (tree: any) {
    visit(tree, "html", (node) => {
      if (node.value.includes("<iframe")) {
        // Keep iframe HTML as is
        return node;
      }
    });
  };
}

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

  // Filter for .md files with date pattern (e.g., 23_07_25.md)
  const articleFiles = fileNames.filter(
    (fileName) =>
      fileName.endsWith(".md") && /^\d{2}_\d{2}_\d{2}\.md$/.test(fileName)
  );

  const allArticlesData = articleFiles.map((fileName) => {
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
    .use(remarkIframe)
    .use(html, { sanitize: false })
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
