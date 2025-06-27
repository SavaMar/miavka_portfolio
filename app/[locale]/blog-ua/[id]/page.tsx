// app/blog/[id]/page.tsx
import Image from "next/image";
// app/blog/[id]/page.tsx
import React from "react";
import { getPostData, getSortedArticlesData } from "@/lib/markdownUtils-ua";

export async function generateStaticParams() {
  const posts = getSortedArticlesData();
  return posts.map((post) => ({
    id: post.id,
  }));
}

export default async function PostPage({ params }: { params: { id: string } }) {
  const postData = await getPostData(params.id);

  return (
    <div className="mx-auto max-w-4xl bg-slate-300 px-4 py-8">
      <h1 className="mb-4 text-4xl font-bold">{postData.title}</h1>
      <p className="mb-8 text-gray-500">{postData.date}</p>
      <Image
        src={postData.coverImage}
        width={100}
        height={100}
        alt={postData.title}
        className="mb-8 h-64 w-full rounded-lg object-cover"
      />
      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
      />
    </div>
  );
}
