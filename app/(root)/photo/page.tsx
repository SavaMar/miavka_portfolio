/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import Link from "next/link";

const collections = [
  { name: "Buren", id: "buren" },
  { name: "Self Portrait", id: "self-portrait" },
  { name: "Cokin Filters", id: "cokin-filters" },
  { name: "My Vision", id: "my-vision" },
  { name: "All Around", id: "all-around" },
];

const page = () => {
  return (
    <section>
      <section className="hero-bg flex w-full flex-col px-20 pr-10 sm:flex-row sm:items-center lg:h-60">
        <div className="sm:ml-5 xl:ml-10">
          <p className="monserrat-a my-color mb-5 text-5xl font-extrabold sm:text-6xl md:text-6xl lg:text-8xl">
            Photo
          </p>
          <p className="not-white fw-300 text-lg">
            Here are my photography projects, each with its own unique emotion
            and perspective. For me, photography isn't just about capturing a
            moment; it's about opening a doorway to creativity, inspiration, and
            feelings.
          </p>
        </div>
      </section>
      <div className="mb-24 p-24">
        <div className="hero-bg grid w-full grid-cols-1 justify-between justify-items-stretch gap-6 p-16 text-slate-300 md:grid-cols-2 lg:grid-cols-6">
          {collections.map((collection) => (
            <Link
              key={collection.id}
              href={`photo/${collection.id}`}
              className="rounded-lg bg-slate-500 p-4 shadow-lg transition hover:bg-slate-600"
            >
              <p className="text-xl font-semibold">{collection.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default page;
