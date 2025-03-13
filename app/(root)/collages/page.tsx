"use client";
import React, { useState } from "react";
import Image from "next/image";
import Masonry from "react-masonry-css";

const breakpointColumnsObj = {
  default: 5,
  1100: 3,
  700: 2,
  500: 2,
};
const imagesCount = 25; // Total number of images
const baseUrl = "https://filedn.com/lPmOLyYLDG0bQGSveFAL3WB/home";

// Generate URLs for the images
const imageUrls = Array.from(
  { length: imagesCount },
  (_, index) => `${baseUrl}/${String(index + 1).padStart(2, "0")}.jpg`
);

const Collages = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <>
      <section className="hero-bg mb-10 flex h-64 w-full flex-wrap justify-between px-20 pr-10 pt-5">
        <div className="relative flex">
          <div className=" -left-6 sm:left-0 sm:ml-7 md:relative md:mt-2 lg:mt-10 xl:ml-5">
            <p className="mb-5 font-namu text-4xl font-extrabold text-my-color sm:text-6xl md:text-6xl lg:text-6xl">
              Collages
            </p>
            <p className="not-white fw-300 mt-10 font-namu text-lg">
              My digital collages made for music covers, magazines and and
              advertising
            </p>
          </div>
        </div>
      </section>
      <div className=" mb-24 bg-neutral-100  p-5">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className=" flex gap-4 rounded-lg p-2"
          columnClassName="flex flex-col gap-4"
        >
          {imageUrls.map((url, index) => (
            <Image
              key={index}
              src={url}
              alt={`Self Portrait ${index + 1}`}
              className={`h-auto w-full rounded-lg object-cover ${isLoaded ? "image-loaded" : "image-blur"}`}
              width={500}
              height={300}
              onLoad={() => setIsLoaded(true)}
              loading="lazy"
            />
          ))}
        </Masonry>
      </div>
    </>
  );
};

export default Collages;
