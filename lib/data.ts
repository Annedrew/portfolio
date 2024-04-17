import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Certification",
    hash: "#certification",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Full Stack Intern",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2024.01 - now",
  },
  {
    title: "Student",
    location: "Aalborg, DK",
    description:
      "I studied as a master student on computer science for 2 years in Aalborg University.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2023",
  },
  {
    title: "Student",
    location: "Aalborg, DK",
    description:
      "I studied as a master student on computer science for 2 years in Aalborg University.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2023",
  },
  {
    title: "Writer",
    location: "Heibei, CN",
    description:
      "I wrote a series of storybooks for children and it is published in China.",
    icon: React.createElement(FaReact),
    date: "2020 - 2021",
  },
  {
    title: "System Test Engineer",
    location: "Wuhan, CN",
    description:
      "I wrote a series of storybooks for children.",
    icon: React.createElement(FaReact),
    date: "2017 - 2019",
  },
  {
    title: "Bachelor Student",
    location: "Zhuhai, CN",
    description:
      "I wrote a series of storybooks for children.",
    icon: React.createElement(FaReact),
    date: "2014 - 2018",
  },
] as const;

export const projectsData = [
  {
    title: "Wuji Go",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
    videoUrl: "https://www.bilibili.com/video/BV1Rx411m7GR/?spm_id_from=333.999.0.0&vd_source=d6632c725b413afc63537bf3348021a3"
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
] as const;