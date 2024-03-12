import React from "react";
import Link from "next/link";
import Image from "next/image";
import { photoLinks } from "@/constants/PhotoLinks";

const PhotoLinks = () => {
  return (
    <>
      {photoLinks.map((item) => {
        return (
          <Link
            key={item.label}
            href={item.route}
            target="_blank"
            className="mt-5 cursor-pointer rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-black transition delay-75 ease-in-out hover:text-white"
          >
            <div className="monserrat-a flex w-full place-content-center items-center rounded-t-lg bg-pink-900 py-2 text-xl font-extrabold tracking-wide ">
              <h2 className="flex">{item.linkName}</h2>
            </div>
            <Image
              src={`/assets/img/links/${item.label}.jpg`}
              alt={item.label}
              width={500}
              height={100}
              className="rounded-b-md transition delay-75 ease-in-out hover:opacity-50"
            />
          </Link>
        );
      })}
    </>
  );
};

export default PhotoLinks;
