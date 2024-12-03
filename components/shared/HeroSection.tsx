// components/HeroSection.tsx
import React from "react";

interface HeroSectionProps {
  title: string;
  description: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, description }) => {
  return (
    <section className="hero-bg flex w-full flex-col px-20 pr-10 sm:flex-row sm:items-center lg:h-60">
      <div className="sm:mx-5 xl:mx-10">
        <p className="my-5 font-namu text-5xl font-extrabold text-my-color sm:text-6xl md:text-6xl lg:text-8xl">
          {title}
        </p>
        <p className="not-white fw-300 text-lg">{description}</p>
      </div>
    </section>
  );
};

export default HeroSection;
