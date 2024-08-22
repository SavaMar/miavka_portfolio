import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "posts");

// Define a type for the front matter data
interface ArticleSummaryData {
  id: string;
  title: string;
  date: string;
  coverImage: string;
  tags: string[];
}

interface ArticleData extends ArticleSummaryData {
  contentHtml: string;
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
      date,
      coverImage,
      tags, // Include tags in the returned data
    };
  });

  return allArticlesData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

// Function to get data for a specific post
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
    date,
    coverImage,
    tags, // Include tags in the returned data
    contentHtml,
  };
}
