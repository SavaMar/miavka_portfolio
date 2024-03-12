import HeroSection from "@/components/HeroSection";
import React from "react";

const page = () => {
  return (
    <section>
      <HeroSection
        imageName="development"
        backgroundClass=""
        mainTitle="Web development"
        descriptionText="Next.js, React, Tailwind, Typescript, PostgressSQL"
      />
      <p>Development</p>
    </section>
  );
};

export default page;
