"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Masonry from "react-masonry-css";
import HeroSection from "@/components/shared/HeroSection";

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
};

const imagesCount = 31;
const baseUrl = "https://filedn.com/lPmOLyYLDG0bQGSveFAL3WB/work";

// Generate versioned image URLs with cache busting for mixed formats
const generateWorkImageUrls = () => {
  const urls: string[] = [];
  const version = Date.now(); // Cache busting version

  for (let i = 1; i <= imagesCount; i++) {
    // Try .jpg first, then .png if .jpg doesn't exist
    const jpgUrl = `${baseUrl}/${i}.jpg?v=${version}`;

    // For now, we'll use .jpg as default, but you can adjust this logic
    // based on which files actually exist in your storage
    urls.push(jpgUrl);
  }

  return urls;
};

const imageUrls = generateWorkImageUrls();

const Work = () => {
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
  const [visibleImages, setVisibleImages] = useState<number[]>([]);
  const [isMobile, setIsMobile] = useState(false);
  const [isPageVisible, setIsPageVisible] = useState(true);

  const loadingRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Detect screen size and set initial images
  useEffect(() => {
    const checkScreenSize = () => {
      const mobile = window.innerWidth < 700;
      setIsMobile(mobile);

      // Set initial images based on screen size
      const initialCount = mobile ? 2 : 4;
      setVisibleImages(Array.from({ length: initialCount }, (_, i) => i));
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Page visibility detection
  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsPageVisible(!document.hidden);
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  // Progressive loading with intersection observer
  useEffect(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (
            entry.isIntersecting &&
            visibleImages.length < imagesCount &&
            isPageVisible
          ) {
            // Load next batch of images based on screen size
            const batchSize = isMobile ? 2 : 4;
            const nextBatch: number[] = [];
            const currentLength = visibleImages.length;

            for (
              let i = currentLength;
              i < Math.min(currentLength + batchSize, imagesCount);
              i++
            ) {
              nextBatch.push(i);
            }

            if (nextBatch.length > 0) {
              setVisibleImages((prev) => [...prev, ...nextBatch]);
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: "100px" }
    );

    if (loadingRef.current) {
      observerRef.current.observe(loadingRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [visibleImages.length, isMobile, isPageVisible]);

  const handleImageLoad = useCallback((index: number) => {
    setLoadedImages((prev) => new Set(Array.from(prev).concat(index)));
  }, []);

  const handleImageError = useCallback((index: number) => {
    // If .jpg fails, try .png
    const currentUrl = imageUrls[index];
    if (currentUrl.includes(".jpg")) {
      const pngUrl = currentUrl.replace(".jpg", ".png");
      // Update the URL in the array
      imageUrls[index] = pngUrl;
      // Force re-render by updating loaded images
      setLoadedImages((prev) => {
        const newSet = new Set(prev);
        newSet.delete(index);
        return newSet;
      });
    }
  }, []);

  return (
    <>
      <HeroSection
        title="MY WORK"
        description="My professional work and projects"
      />
      <div className="mb-24 bg-neutral-100 p-5">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex gap-4 rounded-lg p-2"
          columnClassName="flex flex-col gap-4"
        >
          {imageUrls.map((url, index) => {
            const isVisible = visibleImages.includes(index);
            const isLoaded = loadedImages.has(index);

            if (!isVisible) return null;

            return (
              <div key={index} className="relative overflow-hidden rounded-lg">
                {/* Loading skeleton - show until image is loaded */}
                {!isLoaded && (
                  <div className="absolute inset-0 z-10 flex items-center justify-center rounded-lg bg-gray-200">
                    <div className="flex flex-col items-center gap-2">
                      <div className="size-8 animate-spin rounded-full border-4 border-my-color border-t-transparent"></div>
                      <p className="text-xs text-gray-600">Loading...</p>
                    </div>
                  </div>
                )}

                <Image
                  src={url}
                  alt={`Work ${index + 1}`}
                  className={`h-auto w-full rounded-lg object-cover transition-all duration-300 ${
                    isLoaded ? "image-loaded" : "image-blur"
                  }`}
                  width={400}
                  height={300}
                  sizes="(max-width: 500px) 100vw, (max-width: 700px) 50vw, (max-width: 1100px) 33vw, 25vw"
                  priority={index < (isMobile ? 2 : 4)} // Priority loading based on screen size
                  onLoad={() => handleImageLoad(index)}
                  onError={() => handleImageError(index)}
                  loading={index < (isMobile ? 2 : 4) ? "eager" : "lazy"}
                  quality={80} // Slightly reduced quality for faster loading
                />
              </div>
            );
          })}
        </Masonry>

        {/* Loading indicator for remaining images */}
        {visibleImages.length < imagesCount && (
          <div ref={loadingRef} className="mt-8 text-center">
            {isPageVisible ? (
              <>
                <div className="inline-block size-8 animate-spin rounded-full border-4 border-my-color border-t-transparent"></div>
                <p className="mt-2 text-sm text-gray-600">
                  Loading more images... ({visibleImages.length}/{imagesCount})
                </p>
              </>
            ) : (
              <>
                <div className="inline-block size-8 rounded-full border-4 border-gray-300"></div>
                <p className="mt-2 text-sm text-gray-500">
                  Loading paused - page not visible ({visibleImages.length}/
                  {imagesCount})
                </p>
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Work;
