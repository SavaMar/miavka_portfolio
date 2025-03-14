import HeroSection from "@/components/shared/HeroSection";
import React from "react";

const page = () => {
  return (
    <section>
      <HeroSection
        title="ART"
        description="My art made for me, commercial and for fun"
      />
      <div className="mb-24 p-24">
        <div className="hero-bg grid w-full grid-cols-1 justify-between justify-items-stretch gap-6 p-16 text-slate-300 md:grid-cols-2 lg:grid-cols-6">
          <p>Will be soon</p>
        </div>
      </div>
    </section>
  );
};

export default page;
