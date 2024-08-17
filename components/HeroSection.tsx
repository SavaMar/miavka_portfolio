import React from "react";
import Image from "next/image";

interface HeroSectionProps {
  imageName: string;
  backgroundClass?: string;
  mainTitle: string;
  addTitle: string;
  descriptionText: string;
}

const HeroSection = ({
  imageName,
  backgroundClass,
  addTitle,
  mainTitle,
  descriptionText,
}: HeroSectionProps) => {
  return (
    <section className="hero-bg flex w-full flex-col p-20 pr-10 sm:flex-row sm:items-center lg:h-80">
      <Image
        src={`/assets/img/links/${imageName}.jpg`}
        alt="hero"
        width={240}
        height={20}
        className="top-3 rounded-lg lg:relative lg:top-5"
      />
      <div className="sm:ml-5 xl:ml-10">
        <p className="monserrat-a my-color mb-5 text-5xl font-extrabold sm:text-6xl md:text-6xl lg:text-8xl">
          {mainTitle}
        </p>
        <p className="monserrat-a my-color mb-5 text-5xl font-extrabold sm:text-6xl md:text-6xl lg:text-8xl">
          {addTitle}
        </p>
        <p className="not-white fw-300 text-lg">{descriptionText}</p>
      </div>
    </section>
  );
};

export default HeroSection;
