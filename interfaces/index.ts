import { StaticImageData } from "next/image";

interface NavLinkData {
  id: string;
  title: string;
}

interface ServiceData {
  title: string;
  icon: StaticImageData;
}

interface TechnologyData {
  name: string;
  icon: StaticImageData;
}

interface ExperienceData {
  title: string;
  companyName: string;
  icon: StaticImageData;
  iconBg: string;
  date: string;
  points: string[];
}

interface TestimonialData {
  testimonial: string;
  name: string;
  designation: string;
  companyName: string;
  image: StaticImageData | string;
}

interface ProjectData {
  name: string;
  description: string;
  tags: {
    name: string;
    color:
      | "blue-text-gradient"
      | "green-text-gradient"
      | "pink-text-gradient"
      | "orange-text-gradient";
  }[];
  image: StaticImageData;
  pageLink?: string;
  sourceCodeLink?: string;
}

export type {
  NavLinkData,
  ServiceData,
  TechnologyData,
  ExperienceData,
  TestimonialData,
  ProjectData,
};
