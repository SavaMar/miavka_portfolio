// types/projects.ts
export interface Project {
  name: string;
  id: string;
  description: string;
  photo: string;
  buttonLink?: string;
  youtubeUrl?: string;
}

const projects: Project[] = [
  {
    name: "The Every Day",
    id: "the-every-day",
    description: "Story about routines in our life",
    photo:
      "https://filedn.com/lPmOLyYLDG0bQGSveFAL3WB/projects/the-every-day.png",
    youtubeUrl: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID",
  },
];

export default projects;
