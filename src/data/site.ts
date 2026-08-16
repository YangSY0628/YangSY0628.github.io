export const profile = {
  name: "Shiyuan Yang",
  initials: "SY",
  role: "PhD Student",
  affiliation: "University of Macau",
  location: "Macau, China",
  email: "yc57974@um.edu.mo",
  introduction:
    "I am a PhD student at the University of Macau, interested in robotics and autonomous systems. My research profile is currently being updated.",
  links: {
    github: "https://github.com/YangSY0628",
    linkedin:
      "https://cn.linkedin.com/in/shiyuanyang51b941174?trk=people-guest_people_search-card",
  },
} as const;

export const navigation = [
  { id: "highlights", label: "Highlights" },
  { id: "publications", label: "Publications" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
] as const;

export const highlights: Array<{
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  video: string;
  fullVideo: string;
  poster: string;
  href?: string;
}> = [
  {
    slug: "fabrivla",
    eyebrow: "Robot Learning",
    title: "FabriVLA",
    description: "Vision-language-action policies for robust robotic manipulation.",
    video: "/videos/fabrivla-highlight.mp4",
    fullVideo: "/videos/fabrivla-full.mp4",
    poster: "/images/fabrivla-poster.webp",
  },
  {
    slug: "multi-robot-formation",
    eyebrow: "Multi-Robot Systems",
    title: "Multi-Robot Formation",
    description: "Learning-based formation control across heterogeneous robot platforms.",
    video: "/videos/multi-robot-formation-highlight.mp4",
    fullVideo: "/videos/multi-robot-formation-full.mp4",
    poster: "/images/multi-robot-formation-poster.webp",
  },
];

export const publications: Array<{
  year: string;
  title: string;
  authors: string;
  venue: string;
  paper?: string;
  code?: string;
}> = [];

export const projects: Array<{
  title: string;
  description: string;
  tags: string[];
  image?: string;
  href?: string;
}> = [];

export const experience = [
  {
    period: "Present",
    role: "PhD Student",
    organization: "University of Macau",
    description: "Research details will be added soon.",
  },
] as const;
