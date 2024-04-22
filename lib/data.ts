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
    location: "Copenhagen, Denmark",
    description:[
      "💼",
      "Joined an interesting project that allows study and explore and design."
    ],
    icon: React.createElement(LuGraduationCap),
    date: "2024.01 - now",
  },
  {
    title: "Explorer",
    location: "Aalborg, Denmark",
    description: [
      "🧑‍💻",
      "I have been working on my own projects and study about Kubernetes and AWS cloud. Trying to get a full-time job and think about my career.",
      "🌍",
      "Traveled to different cities in China.",
      "🍣",
      "Worked in a Sushi restaurant."
    ],
    icon: React.createElement(CgWorkAlt),
    date: "2023.07 - 2024.01",
  },
  {
    title: "Master Student",
    location: "Aalborg, Denmark",
    description:
    [
      "🧑‍🎓",
      "I studied as a master student on computer science for 2 years in Aalborg University. Learning how to collaborate with student from different countries.",
      "🌍",
      "Traveled to many countries in Europe."
    ],
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2023",
  },
  {
    title: "Learner & Writer",
    location: "China",
    description:[
      "📑",
      "To further study computer science and experience a different life, I resigned from my job and prepared for master's degree exams and applications.",
      "📖",
      "In the meantime, I got an opportunity to write a series of children's books. I worked on the book, and it is published and sold in China.",
      "🌍",
      "Traveled to different cities in China.",
    ],
    icon: React.createElement(FaReact),
    date: "2020 - 2021",
  },
  {
    title: "System Test Engineer",
    location: "China",
    description:[
      "💼",
      "Responsible for the testing of spreadsheet of WPS Office. ",
      "Developed automated script to improve work efficiency. "
    ],
    icon: React.createElement(FaReact),
    date: "2018 - 2019",
  },
  {
    title: "Bachelor Journey",
    location: "China",
    description: [
      "💼",
      "The last year of my university was spent on internship.",
      "In Kingsoft Office Software Corporation Limited , I was a System Test Engineer intern.",
      "In YGsoft, I was a Security Test Engineer intern.",
      "🎮",
      "At the third year of university study, with other 4 students as a team, we cooperated with a game company to develop a mobile game.",
      "💬",
      "I enjoy working with self-media operations. As a member of the university employment association, I am responsible for managing the university's official self-media account.",
      "🛼 · ",
      "I am passionate about roller skating. Alongside a group of like-minded friends, we traversed nearly every street in Zhuhai city."
    ],
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