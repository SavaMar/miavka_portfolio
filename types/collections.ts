// types/collections.ts
export interface Collection {
  name: string;
  id: string;
  text: string;
  photo: string;
  button?: boolean; // Optional boolean for displaying a button
  buttonLink?: string;
}

const collections: Collection[] = [
  {
    name: "Little Swiss Riot",
    id: "little-swiss-riot",
    text: "Music and dancing rokabilly party in the Gasthof Zum Bad 2024",
    photo:
      "https://filedn.com/lPmOLyYLDG0bQGSveFAL3WB/photos/collection/little-swiss-riot.jpg",
    button: true,
    buttonLink:
      "https://u.pcloud.link/publink/show?code=kZ2jtO0Zi6b9YK3d3b7uLU3kW0trShh5syu7",
  },
  {
    name: "Oberwil b. Büren",
    id: "buren",
    text: "The beuty of Swiss village where I live",
    photo:
      "https://filedn.com/lPmOLyYLDG0bQGSveFAL3WB/photos/collection/buren.jpg",
  },
  {
    name: "Ghost in Büren",
    id: "ghost-in-buren",
    text: "Fun performance in swiss village",
    photo:
      "https://filedn.com/lPmOLyYLDG0bQGSveFAL3WB/photos/collection/ghost-in-buren.jpg",
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
  {
    name: "Art Space",
    id: "art-space",
    text: "My working place that inspire me for creation.",
    photo:
      "https://filedn.com/lPmOLyYLDG0bQGSveFAL3WB/photos/collection/art-space.jpg",
  },
  {
    name: "Biel Art Shop",
    id: "biel-art-shop",
    text: "Fun photoshoot in one of amazing art shops in Biel",
    photo:
      "https://filedn.com/lPmOLyYLDG0bQGSveFAL3WB/photos/collection/biel-art-shop.jpg",
  },
  {
    name: "Black and White",
    id: "black-and-white",
    text: "The world of black and white feelings",
    photo:
      "https://filedn.com/lPmOLyYLDG0bQGSveFAL3WB/photos/collection/black-and-white.jpg",
  },
];

export default collections;
