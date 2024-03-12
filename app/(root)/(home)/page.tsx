import HeroSection from "@/components/HeroSection";
import React from "react";
import PhotoLinks from "@/components/shared/PhotoLinks";

const Home = () => {
  return (
    <>
      <HeroSection
        imageName="home"
        backgroundClass=""
        mainTitle="Mari Miavka"
        descriptionText="Photography. Illustration. Tattoo. Design. Art."
      />
      <div className="my-10 flex w-full justify-between gap-4 px-5 text-slate-300 sm:flex-row sm:items-center">
        <div className="grid grid-cols-1 gap-4 px-12 sm:grid-cols-2 sm:p-2 md:grid-cols-3 lg:grid-cols-6">
          <PhotoLinks />
        </div>
      </div>
    </>
  );
};

export default Home;
