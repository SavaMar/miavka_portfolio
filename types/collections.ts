// types/collections.ts
export interface Collection {
  name: string;
  id: string;
  text: string;
  photo: string;
}

const collections: Collection[] = [
  {
    name: "Buren",
    id: "buren",
    text: "A detailed exploration of Buren's installations.",
    photo:
      "https://filedn.com/lPmOLyYLDG0bQGSveFAL3WB/photos/collection/buren.jpg",
  },
  {
    name: "Self Portrait",
    id: "self-portrait",
    text: "Self-portraits capturing personal and artistic growth.",
    photo:
      "https://filedn.com/lPmOLyYLDG0bQGSveFAL3WB/photos/collection/self-portrait.jpg",
  },
  {
    name: "Cokin Filters",
    id: "cokin-filters",
    text: "Using Cokin filters to enhance photographic effects.",
    photo:
      "https://filedn.com/lPmOLyYLDG0bQGSveFAL3WB/photos/collection/cokin-filters.jpg",
  },
  {
    name: "My Vision",
    id: "my-vision",
    text: "The world through my lens; a personal vision.",
    photo:
      "https://filedn.com/lPmOLyYLDG0bQGSveFAL3WB/photos/collection/my-vision.jpg",
  },
  {
    name: "All Around",
    id: "all-around",
    text: "A comprehensive collection capturing diverse subjects.",
    photo:
      "https://filedn.com/lPmOLyYLDG0bQGSveFAL3WB/photos/collection/all-around.jpg",
  },
];

export default collections;
