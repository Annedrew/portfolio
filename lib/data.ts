import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import wujigo from "@/public/wujigo.png";
import senpage from "@/public/senpage.png";
import admin from "@/public/admin.png";

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
    description: [
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
    title: "Master Journey",
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
    description: [
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
    description: [
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
    title: "Senpage ",
    description:
      "Senpage in-house website.",
    tags: ["React", "Next.js", "RESTful API", "Ruby on rails", "PostgreSQL", "Bootstrap"],
    imageUrl: senpage,
  },
  {
    title: "Admin",
    description:
      "Full stack websites, with coffee client-facing coffee shop website and backend management system.",
    tags: ["React", "Next.js", "Node.js", "Express.js", "MongoDB", "CSS"],
    imageUrl: admin,
  },
  {
    title: "Wuji Go",
    description:
      "A competitive 3-level game optimized for both Android and iOS platforms.",
    tags: ["C#", "Unity 3D", "Git", "Visual Studio"],
    imageUrl: wujigo,
  },
] as const;

export const skillsData = [
  "React",
  "Next.js",
  "JavaScript",
  "HTML",
  "CSS",
  "Tailwind",
  "Python",
  "Node.js",
  "TypeScript",
  "Git",
  "MongoDB",
  "Express",
  "PostgreSQL",
  "Django",
] as const;