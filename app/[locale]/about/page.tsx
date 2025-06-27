import React from "react";
import Image from "next/image";
import SocialLinks from "@/components/shared/SocialLinks";
import { Button } from "@/components/ui/button";

// Base URL for Instagram
const instagramBaseUrl = "https://www.instagram.com/";

// Define Instagram links with only the specific user paths
const instagramLinks = [
  { path: "marisava33", label: "MY LIFESTYLE" },
  { path: "mari_miavka", label: "MY ART" },
  { path: "zla_miavka_bjj", label: "SPORT CLOTH DESIGNS" },
  { path: "bjj_photographer", label: "SPORT PHOTOGRAPHY/ VIDEOGRAPHY" },
  { path: "miavka_ua", label: "Українською про мистецтво" },
];

const Page = () => {
  const imageIndexes = Array.from({ length: 6 }, (_, index) => index);
  return (
    <>
      <section className="hero-bg flex h-80 w-full flex-wrap justify-between px-20 pr-10 pt-5">
        <div className="flex">
          <Image
            src={`/assets/img/avatar.jpg`}
            alt="hero"
            width={290}
            height={15}
            className="mx-10 hidden rounded-lg md:block"
          />
          <div className="relative mt-7 xl:ml-5">
            <p className="mb-5 font-namu text-4xl font-extrabold text-my-color-light sm:text-6xl">
              MARI MIAVKA
            </p>
            <SocialLinks />
            <p className="not-white fw-300 font-namu text-lg">
              A spirit of rebellion and endless curiosity drives me to cast
              light into the shadows.
            </p>
          </div>
        </div>
      </section>
      <div className="container mx-auto p-4 md:mt-20">
        <div className="grid grid-cols-3 gap-4 md:grid-cols-6">
          {imageIndexes.map((index) => (
            <div key={index} className="relative h-32 w-full md:h-48">
              <Image
                src={`/assets/img/about/${index + 1}.png`}
                alt={`Placeholder ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="mb-24 mt-10 rounded-lg bg-slate-300 p-10">
        <p>
          My small story will be here, but for now you can look at my instagram
          to have an idea at least
        </p>
        <div>
          {instagramLinks.map((link, index) => (
            <Button
              key={index}
              variant="outline"
              className={`ml-${index ? 5 : 0} text-teal-700 underline underline-offset-4`}
            >
              <a
                href={`${instagramBaseUrl}${link.path}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            </Button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Page;
