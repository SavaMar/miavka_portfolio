import React from "react";
import Image from "next/image";
import SocialLinks from "@/components/shared/SocialLinks";

const page = () => {
  return (
    <>
      <section className="hero-bg flex h-80 w-full flex-wrap justify-between px-20 pr-10 pt-5">
        <div className="flex">
          <Image
            src={`/assets/img/avatar.jpg`}
            alt="hero"
            width={290}
            height={15}
            className="mx-10 hidden rounded-lg md:block"
          />
          <div className="absolute mt-7 sm:ml-7 md:relative xl:ml-5">
            <p className="mb-5 font-namu text-4xl font-extrabold text-my-color-light sm:text-6xl md:text-6xl lg:text-7xl">
              MARI MIAVKA
            </p>
            <SocialLinks className="" />
            <p className="not-white fw-300 font-namu text-lg">
              A spirit of rebellion and endless curiosity drives me to cast
              light into the shadows, inspiring those around me to embrace and
              shine their true selves. 🌼
            </p>
          </div>
        </div>
      </section>
      <div className="container mx-auto p-4 md:mt-20">
        <div className="grid grid-cols-3 gap-4 md:grid-cols-6">
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <div key={index} className="relative h-32 w-full md:h-48">
              <Image
                src={`/assets/img/about/${index}.png`}
                alt={`Placeholder ${index}`}
                layout="fill" // This uses the parent div’s relative position to fill the div completely
                objectFit="cover" // This keeps the aspect ratio and covers the div area
                className="rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="mb-24 p-10">
        <div className="w-full rounded-lg bg-slate-300  p-5">
          <p>My small story</p>
        </div>
      </div>
    </>
  );
};

export default page;
