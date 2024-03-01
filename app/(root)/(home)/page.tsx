import HeroSection from "@/components/HeroSection";
import React from "react";

const Home = () => {
  return (
    <>
      <HeroSection />
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <div>Navbar</div>
      </div>
    </>
  );
};

export default Home;
