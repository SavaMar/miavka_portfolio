import HeroSection from "@/components/HeroSection";
import PhotoLinksBjj from "@/components/shared/PhotoLinksBjj";
import React from "react";

const page = () => {
  return (
    <section>
      <HeroSection
        imageName="bjj"
        backgroundClass=""
        mainTitle="Brazilian Jiu Jitsu"
        descriptionText="Photography. Video. Reels. Custom rashguards"
      />
      <div className="my-10 flex w-full justify-end gap-6 p-5 text-slate-300 sm:flex-row sm:items-center">
        <div className="grid grid-cols-1 gap-12 px-12 sm:grid-cols-2 sm:p-2 md:grid-cols-2 lg:mr-36 lg:grid-cols-3">
          <PhotoLinksBjj />
        </div>
      </div>
    </section>
  );
};

export default page;
