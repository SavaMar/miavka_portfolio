"use client";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";
import { useState } from "react";
import Masonry from "react-masonry-css";
import HeroSection from "@/components/shared/HeroSection";
import collections from "@/types/collections";
import Link from "next/link";

// Define the mapping of collection IDs to their respective number of images
const collectionImageCounts: Record<string, number> = {
  "fight-night-fsa": 15,
  "little-swiss-riot": 12,
  buren: 36,
  "with-story": 27,
};

const breakpointColumnsObj = {
  default: 5,
  1100: 3,
  700: 2,
  500: 2,
};

interface GalleryPageProps {
  params: {
    id: string;
  };
}

export default function GalleryPage({ params }: GalleryPageProps) {
  const { id } = params;

  // Hooks must be at the top level
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const collection = collections.find((col) => col.id === id);

  // Handle the case where the collection is not found
  if (!collection) {
    return <p>No such collection found.</p>;
  }

  const { name, text, button, buttonLink } = collection;
  const imageCount = collectionImageCounts[id] || 0;
  const imageUrls = Array.from(
    { length: imageCount },
    (_, index) =>
      `https://filedn.com/lPmOLyYLDG0bQGSveFAL3WB/photos/${id}/${(index + 1).toString().padStart(2, "0")}.jpg`
  );

  return (
    <section>
      <HeroSection title={name} description={text} />
      <div className="mb-24 p-10 md:p-24">
        <Link
          href="/photos"
          className="mb-5 ml-5 pb-10 text-my-color underline hover:text-my-color-dark"
        >
          ← BACK TO PHOTOS
        </Link>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="hero-bg flex gap-4 rounded-lg p-10"
          columnClassName="flex flex-col gap-4"
        >
          {imageUrls.map((url, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg">
              <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogTrigger asChild>
                  <button
                    onClick={() => {
                      setSelectedImage(url);
                      setIsOpen(true);
                    }}
                  >
                    <Image
                      src={url}
                      alt={`Image ${index + 1}`}
                      // layout="responsive"
                      width={500}
                      height={300}
                      onLoad={() => setIsLoaded(true)}
                      loading="lazy"
                      className={`h-auto w-full rounded-lg object-cover hover:opacity-45 ${isLoaded ? "image-loaded" : "image-blur"}`}
                    />
                  </button>
                </DialogTrigger>
                {selectedImage && (
                  <DialogContent className="flex items-center justify-center">
                    {/* <div className="h-screen"> */}
                    <Image
                      src={selectedImage}
                      alt={`Full size of Image ${index + 1}`}
                      // layout="fill" // Fill the screen height
                      objectFit="contain" // Scale image to fit within the dialog
                      layout="responsive"
                      width={200}
                      height={200}
                      className="rounded-lg object-contain"
                    />
                    {/* </div> */}
                  </DialogContent>
                )}
              </Dialog>
            </div>
          ))}
        </Masonry>
        {button && (
          <div className="mt-4 w-full">
            <a
              href={buttonLink}
              target="_blank"
              className="flex w-full justify-center rounded bg-my-color p-4 text-white hover:bg-my-color-dark"
            >
              <p>ALL PHOTOS</p>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
