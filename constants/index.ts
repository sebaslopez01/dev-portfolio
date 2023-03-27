import backend from "@/assets/services/backend.png";
import creator from "@/assets/services/creator.png";
import mobile from "@/assets/services/mobile.png";
import web from "@/assets/services/web.png";

import nextjs from "@/assets/tech/nextjs.png";
import django from "@/assets/tech/django.png";
import git from "@/assets/tech/git.png";
import javascript from "@/assets/tech/javascript.png";
import python from "@/assets/tech/python.png";
import nodejs from "@/assets/tech/nodejs.png";
import reactjs from "@/assets/tech/reactjs.png";
import rust from "@/assets/tech/rust.png";
import c from "@/assets/tech/c.png";
import linux from "@/assets/tech/linux.png";
import tailwind from "@/assets/tech/tailwind.png";
import typescript from "@/assets/tech/typescript.png";
import postgresql from "@/assets/tech/postgresql.png";

import workana from "@/assets/companies/workana.png";
import qsLogo from "@/assets/companies/qs.png";
import holberton from "@/assets/companies/holberton.png";

import agromas from "@/assets/projects/agromas.png";
import qs from "@/assets/projects/qs.png";
import torojob from "@/assets/projects/torojob.png";

import {
  ExperienceData,
  NavLinkData,
  ProjectData,
  ServiceData,
  TechnologyData,
  TestimonialData,
} from "@/interfaces";

export const navLinks: NavLinkData[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: ServiceData[] = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Web Scraping Expert",
    icon: backend,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Python Developer",
    icon: creator,
  },
];

const technologies: TechnologyData[] = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Rust",
    icon: rust,
  },
  {
    name: "C",
    icon: c,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "Linux",
    icon: linux,
  },
  {
    name: "Git",
    icon: git,
  },
];

const experiences: ExperienceData[] = [
  {
    title: "Full-Stack Developer",
    companyName: "Workana",
    icon: workana,
    iconBg: "#383E56",
    date: "April 2021 - March 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full-Stack Developer",
    companyName: "QS",
    icon: qsLogo,
    iconBg: "#E6DEDD",
    date: "Sept 2022 - Nov 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Backend Developer",
    companyName: "Holberton - Capstone Project",
    icon: holberton,
    iconBg: "#383E56",
    date: "Jan 2023 - Feb 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials: TestimonialData[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    companyName: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    companyName: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    companyName: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects: ProjectData[] = [
  {
    name: "Agromas",
    description:
      "AgroMAS was born as an initiative to connect farmers with end users and investors who are interested in supporting small and medium Colombian producers.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "orange-text-gradient",
      },
      {
        name: "postgresql",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: agromas,
    pageLink: "https://agromas-sebaslopez01.vercel.app/",
    sourceCodeLink: "https://github.com/sebaslopez01/agromas",
  },
  {
    name: "QS",
    description:
      "Web application that allows connecting users looking to retire in dollars, save in dollars or invest abroad; with a broker from the company TrinityInvestors.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "orange-text-gradient",
      },
      {
        name: "postgresql",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: qs,
    pageLink: "https://qsseguroseinversiones.com/",
  },
  {
    name: "Torojob",
    description:
      "A job metasearch engine, which allows users to search for jobs from hundreds of web pages in one place. In addition to allowing companies to publish their job offers and follow up on candidates.",
    tags: [
      {
        name: "django",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "orange-text-gradient",
      },
      {
        name: "postgresql",
        color: "green-text-gradient",
      },
      {
        name: "rust",
        color: "pink-text-gradient",
      },
    ],
    image: torojob,
  },
];

export { services, technologies, experiences, testimonials, projects };
