"use client";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";
import { useState } from "react";
import Masonry from "react-masonry-css";

// Define the mapping of collection IDs to their respective number of images
const collectionImageCounts: Record<string, number> = {
  buren: 9,
  "self-portrait": 20,
  "cokin-filters": 15,
  "my-vision": 30,
  "all-around": 18,
};

const breakpointColumnsObj = {
  default: 5,
  1100: 3,
  700: 2,
  500: 2,
};

export default function GalleryPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const imageCount = collectionImageCounts[id] || 0; // Get the number of images for the collection
  const imageUrls = Array.from(
    { length: imageCount },
    (_, i) =>
      `https://filedn.com/lPmOLyYLDG0bQGSveFAL3WB/photos/${id}/${i + 1}.jpg`
  );

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false); // Manage dialog open state

  return (
    <section>
      {/* <div className="flex w-full p-6"> */}
      <section className="hero-bg flex w-full flex-col px-20 pr-10 sm:flex-row sm:items-center lg:h-60">
        <div className="sm:ml-5 xl:ml-10">
          <p className="monserrat-a my-color mb-5 text-5xl font-extrabold capitalize sm:text-6xl md:text-6xl lg:text-8xl">
            {id.replace("-", " ")}
          </p>
          <p className="not-white fw-300 text-lg">
            The beuty around place where I live
          </p>
        </div>
      </section>
      <div className="mb-24 p-10 md:p-24">
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
                      layout="responsive"
                      width={500}
                      height={300}
                      className="h-auto w-full rounded-lg object-cover hover:opacity-45"
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
      </div>
    </section>
  );
}
