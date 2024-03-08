import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="hero-bg flex w-full flex-col p-20 pr-10 sm:flex-row sm:items-center lg:h-96">
      <Image
        src="/assets/img/avatar.jpg"
        alt="hero"
        width={440}
        height={250}
        className=" rounded-full"
      />
      <div className="ml-10">
        <h1 className="monserrat-a mb-5 text-8xl font-extrabold">
          Mari Miavka
        </h1>
        <p className="text-lg">
          Photography. Illustration. Tattoo. Design. Art.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
