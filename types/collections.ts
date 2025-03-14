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
    name: "Fight Night FSA",
    id: "fight-night-fsa",
    text: "Fight Night in Bern. Fusion Sport Academy",
    photo:
      "https://filedn.com/lPmOLyYLDG0bQGSveFAL3WB/photos/collection/fight-night-fsa.jpg",
    button: true,
    buttonLink:
      "https://u.pcloud.link/publink/show?code=kZ00J85ZrkUm2UqT7dLMdMfAolOmXjep5xj7",
  },
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
    name: "With story",
    id: "with-story",
    text: "Fun photoshoot in one of amazing art shops in Biel",
    photo:
      "https://filedn.com/lPmOLyYLDG0bQGSveFAL3WB/photos/collection/with-story.jpg",
  },
];

export default collections;
