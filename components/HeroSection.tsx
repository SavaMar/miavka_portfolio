import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="hero-bg flex w-full flex-col p-20 sm:flex-row sm:items-center lg:h-96">
      <Image
        src="/assets/favicon/favicon.png"
        alt="hero"
        width={300}
        height={300}
      />
      <div>
        <h1 className="text-5xl font-bold">Mari Miavka</h1>
        <p className="text-lg">
          Photography. Illustration. Tattoo. Design. Art.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
