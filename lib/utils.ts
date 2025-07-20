import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Manual version control for cache busting
// Update this when you upload new images to force cache refresh
const IMAGE_VERSION = "2024-12-19-v1";

// Image versioning utility for cache busting
export function getVersionedImageUrl(
  baseUrl: string,
  version?: string
): string {
  const timestamp = version || IMAGE_VERSION;
  const separator = baseUrl.includes("?") ? "&" : "?";
  return `${baseUrl}${separator}v=${timestamp}`;
}

// Generate versioned URLs for a batch of images
export function generateVersionedImageUrls(
  baseUrl: string,
  count: number,
  version?: string
): string[] {
  return Array.from({ length: count }, (_, index) =>
    getVersionedImageUrl(
      `${baseUrl}/${String(index + 1).padStart(2, "0")}.jpg`,
      version
    )
  );
}

// Alternative: Generate URLs without padding (for work and art pages)
export function generateVersionedImageUrlsSimple(
  baseUrl: string,
  count: number,
  version?: string
): string[] {
  return Array.from({ length: count }, (_, index) =>
    getVersionedImageUrl(`${baseUrl}/${index + 1}.jpg`, version)
  );
}
