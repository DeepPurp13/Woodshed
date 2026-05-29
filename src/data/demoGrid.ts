export type DemoGridItem = {
  to: string;
  imageSrc: string;
  screenClass: string;
  title: string;
  tags: readonly [string, string, string];
  /** `target="_blank"` on preview image link */
  imageTargetBlank: boolean;
  /** `target="_blank"` on title link under caption */
  titleTargetBlank: boolean;
};

export const demoGridItems: DemoGridItem[] = [
  {
    to: "/index-branding-studio",
    imageSrc: "/img/demo/screens/01.webp",
    screenClass: "screen-01",
    title: "Branding studio",
    tags: ["Cards Stack", "Slideshow", "Split Text"],
    imageTargetBlank: true,
    titleTargetBlank: true,
  },
  {
    to: "/index-software-development-company",
    imageSrc: "/img/demo/screens/02.webp",
    screenClass: "screen-02",
    title: "Software development company",
    tags: ["Zoom Video", "Bento", "Perspective"],
    imageTargetBlank: true,
    titleTargetBlank: false,
  },
  {
    to: "/index-creative-agency",
    imageSrc: "/img/demo/screens/03.webp",
    screenClass: "screen-03",
    title: "Creative agency",
    tags: ["cursor Trail", "Video Preview", "Services Stack"],
    imageTargetBlank: true,
    titleTargetBlank: false,
  },
  {
    to: "/index-freelancer-portfolio",
    imageSrc: "/img/demo/screens/04.webp",
    screenClass: "screen-04",
    title: "Freelancer portfolio",
    tags: ["Image Cursor", "Zoom Slides", "Phisics"],
    imageTargetBlank: true,
    titleTargetBlank: false,
  },
  {
    to: "/index-design-studio",
    imageSrc: "/img/demo/screens/05.webp",
    screenClass: "screen-05",
    title: "Design studio",
    tags: ["Hover Slideshow", "Marquee", "Phisics"],
    imageTargetBlank: true,
    titleTargetBlank: false,
  },
  {
    to: "/index-web-developer",
    imageSrc: "/img/demo/screens/06.webp",
    screenClass: "screen-06",
    title: "Web developer",
    tags: ["Sticky Block", "Slideshow", "Image Cursor"],
    imageTargetBlank: true,
    titleTargetBlank: false,
  },
  {
    to: "/index-personal-portfolio",
    imageSrc: "/img/demo/screens/07.webp",
    screenClass: "screen-07",
    title: "Personal portfolio",
    tags: ["Perspective", "Resume", "Phisics"],
    imageTargetBlank: true,
    titleTargetBlank: false,
  },
  {
    to: "/index-digital-agency",
    imageSrc: "/img/demo/screens/08.webp",
    screenClass: "screen-08",
    title: "Digital agency",
    tags: ["3D Images", "Fullscreen Carousel", "Cursor Trail"],
    imageTargetBlank: true,
    titleTargetBlank: false,
  },
  {
    to: "/index-web-studio",
    imageSrc: "/img/demo/screens/09.webp",
    screenClass: "screen-09",
    title: "Web studio",
    tags: ["Horizontal Showcase", "Stack Cards", "Cursor Images"],
    imageTargetBlank: true,
    titleTargetBlank: false,
  },
  {
    to: "/index-digital-designer",
    imageSrc: "/img/demo/screens/10.webp",
    screenClass: "screen-10",
    title: "Digital designer",
    tags: ["Inertia images", "Fullscreen showcase", "Images reveal"],
    imageTargetBlank: true,
    titleTargetBlank: true,
  },
];

export const demoGridMarqueeTexts = [
  "Freelancer/",
  "Designer/",
  "Developer/",
  "DigitalAgency/",
  "CreativeStudio/",
] as const;
