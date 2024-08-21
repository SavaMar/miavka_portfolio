/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
import { getSortedArticlesData } from "../../../lib/markdownUtils";

// Fetch the data directly in the component
export default async function BlogPage() {
  const allArticlesData = getSortedArticlesData();

  return (
    <section>
      <section className="hero-bg flex w-full flex-col px-20 pr-10 sm:flex-row sm:items-center lg:h-60">
        <div className="sm:ml-5 xl:ml-10">
          <p className="monserrat-a my-color mb-5 text-5xl font-extrabold sm:text-6xl md:text-6xl lg:text-8xl">
            Blog
          </p>
          <p className="not-white fw-300 text-lg">
            I'm sharing my way here and tips for finding your own style and how
            to work with your inner creativity. My mission is to inspire others'
            spirits.
          </p>
        </div>
      </section>
      <div className="mb-24 p-20">
        <div className="w-full rounded-lg bg-slate-300 p-16">
          {allArticlesData.map(({ id, title, date, coverImage }) => (
            <div
              key={id}
              className="mb-8 flex flex-col items-center sm:flex-row"
            >
              <Image
                src={coverImage}
                width={100}
                height={100}
                alt={title}
                className="mb-4 h-40 w-full rounded-lg object-cover sm:mb-0 sm:mr-6 sm:w-1/3"
              />
              <div className="flex flex-col">
                <h2 className="mb-2 text-2xl font-semibold">{title}</h2>
                <p className="mb-4 text-gray-500">{date}</p>
                <a
                  href={`/blog/${id}`}
                  className="text-blue-500 hover:underline"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
