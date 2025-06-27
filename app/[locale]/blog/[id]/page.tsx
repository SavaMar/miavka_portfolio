// app/blog/[id]/page.tsx
import React from "react";
import Image from "next/image";
import { getPostData, getSortedArticlesData } from "@/lib/markdownUtils";

export async function generateStaticParams() {
  const posts = getSortedArticlesData();
  return posts.map((post: { id: string }) => ({
    id: post.id,
  }));
}

export default async function PostPage({ params }: { params: { id: string } }) {
  const postData = await getPostData(params.id);

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <h1 className="mb-4 text-4xl font-bold text-my-color-light">
        {postData.title}
      </h1>
      <p className="mb-8 text-slate-300">{postData.date}</p>
      <Image
        src={postData.coverImage}
        width={800}
        height={400}
        alt={postData.title}
        className="mb-8 h-64 w-full rounded-lg object-cover"
      />
      <article
        className="prose prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
      />
    </div>
  );
}
