import React from "react";
import Image from "next/image";
import SocialLinks from "@/components/shared/SocialLinks";

const page = () => {
  return (
    <section className="hero-bg flex h-80 w-full flex-wrap justify-between px-20 pr-10 pt-5">
      <div className="flex">
        <Image
          src={`/assets/img/links/home.jpg`}
          alt="hero"
          width={220}
          height={20}
          className="mx-20 rounded-lg"
        />
        <div className="absolute mt-7 sm:ml-7 md:relative xl:ml-5">
          <p className="monserrat-a my-color mb-5 text-4xl font-extrabold sm:text-6xl md:text-6xl lg:text-7xl">
            Mari Miavka
          </p>
          <SocialLinks className="" />
          <p className="not-white fw-300 text-lg">
            This part in development and will be ready soon :) 🌼
          </p>
        </div>
      </div>
    </section>
  );
};

export default page;
