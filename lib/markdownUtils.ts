import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "posts");

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

interface NowPageData {
  title: string;
  lastUpdated: string;
  description: string;
  contentHtml: string;
}

interface AboutPageData {
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

export async function getNowPageData(locale: string): Promise<NowPageData> {
  const fileName = locale === "ua" ? "now-ua.md" : "now-en.md";
  const fullPath = path.join(postsDirectory, fileName);

  try {
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);

    // Process markdown content to HTML
    const processedContent = await remark()
      .use(html)
      .process(matterResult.content);
    const contentHtml = processedContent
      .toString()
      .replace(/<h2>/g, '<h2 class="section-header">')
      .replace(/<p>/g, '<p class="section-paragraph">');

    // Header content is now handled by the page component constants
    // These are fallback values in case they're needed
    const title = locale === "ua" ? "Що я роблю зараз" : "What I'm Up To";
    const lastUpdated = "20 July 2025";
    const description =
      locale === "ua"
        ? 'Це сторінка "зараз", натхненна Дереком Сайверсом. Це знімок того, на чому я зараз зосереджена.'
        : "This is a now page, inspired by Derek Sivers. It's a snapshot of what I'm currently focused on.";

    return {
      title,
      lastUpdated,
      description,
      contentHtml,
    };
  } catch (error) {
    console.error(`Error reading now page for locale ${locale}:`, error);
    // Return fallback content
    return {
      title: locale === "ua" ? "Що я роблю зараз" : "What I'm Up To",
      lastUpdated: "20 July 2025",
      description:
        locale === "ua"
          ? 'Це сторінка "зараз", натхненна Дереком Сайверсом. Це знімок того, на чому я зараз зосереджена.'
          : "This is a now page, inspired by Derek Sivers. It's a snapshot of what I'm currently focused on.",
      contentHtml: "<p>Content not available</p>",
    };
  }
}

export async function getAboutPageData(locale: string): Promise<AboutPageData> {
  const fileName = locale === "ua" ? "about-ua.md" : "about-en.md";
  const fullPath = path.join(postsDirectory, fileName);

  try {
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);

    // Process markdown content to HTML
    const processedContent = await remark()
      .use(html)
      .process(matterResult.content);
    const contentHtml = processedContent
      .toString()
      .replace(/<h1>/g, '<h1 class="about-title">')
      .replace(/<h2>/g, '<h2 class="about-section-title">')
      .replace(/<h3>/g, '<h3 class="about-subsection-title">')
      .replace(/<p>/g, '<p class="about-paragraph">')
      .replace(/<ul>/g, '<ul class="about-list">')
      .replace(/<li>/g, '<li class="about-list-item">');

    return {
      contentHtml,
    };
  } catch (error) {
    console.error(`Error reading about page for locale ${locale}:`, error);
    // Return fallback content
    return {
      contentHtml: "<p>Content not available</p>",
    };
  }
}
