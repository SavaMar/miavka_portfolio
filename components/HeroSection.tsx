import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="flex hero-bg lg:h-96 p-20 w-full flex-col sm:flex-row sm:items-center">
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
