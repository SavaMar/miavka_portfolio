// import HeroSection from "@/components/HeroSection";
import React from "react";
// import PhotoLinks from "@/components/shared/PhotoLinks";
import Image from "next/image";
import MenuBlocks from "@/components/MenuBlocks";

const Home = () => {
  return (
    <>
      <section className="hero-bg flex h-80 w-full flex-wrap justify-between px-20 pr-10 pt-5">
        <div className="relative flex">
          <Image
            src={`/assets/img/avatar.png`}
            alt="hero"
            width={290}
            height={20}
            className="relative -top-8 mx-20 rounded-lg"
          />
          <div className="absolute -left-6 mt-7 sm:left-0 sm:ml-7 md:relative xl:ml-5">
            <p className="monserrat-a my-color mb-5 text-4xl font-extrabold sm:text-6xl md:text-6xl lg:text-7xl">
              Mari
            </p>
            <p className="monserrat-a my-color mb-5 text-4xl font-extrabold sm:text-6xl md:text-6xl lg:text-7xl">
              Miavka
            </p>
            <p className="not-white fw-300 text-lg">Unicorn visual artist 🌼</p>
          </div>
        </div>
      </section>
      <MenuBlocks />
    </>
  );
};

export default Home;
