"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { TypeAnimation } from "react-type-animation";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section ref={ref} className="mb-28 max-w-[50rem] scroll-mt-28" id="home">
      <div className="flex items-center justify-center gap-5">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/avatar.jpg"
              alt="Ning An"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
          <motion.span
            className=" absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.p
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-1xl text-center"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        Hello, I&apos;m <span className="font-bold">Ning!
        <br />
        <br />
        <TypeAnimation
          sequence={["Web Developer", 1000, "Full Stack Developer", 1000]}
          wrapper="span"
          cursor={true}
          repeat={Infinity}
          style={{ fontSize: "2em", display: "inline-block" }}
        />
        <br />
        <br />
        </span>I enjoy writing elegant code and building websites.
        <br />
        My focus is <span className="underline">React, Next.js and Python</span>.
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
          href="#contact"
          className="group text-black px-7 py-3 flex items-center gap-2 focus:scale-110 rounded-full hover:scale-110 active:scale-105 transition"
        >
          Contact me here
          <BsArrowRight className="opacity-70 group-hover:translate-x-4 transition" />
        </Link>
        <a
          className="group bg-white text-black px-7 py-3 flex items-center gap-2 focus:scale-110 rounded-full hover:scale-110 active:scale-105 transition cursor-pointer borderBlack"
          href="/CV.pdf"
          download={true}
        >
          Download CV
          <HiDownload className="opacity-70 group-hover:translate-x-1 transition" />
        </a>
        <a
          className="group bg-white text-black px-7 py-3 flex items-center gap-2 focus:scale-[1.15] rounded-full hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack"
          href="https://www.linkedin.com/in/ning-an-262960224/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a
          className="group bg-white text-black px-7 py-3 flex items-center gap-2 focus:scale-[1.15] rounded-full hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack"
          href="https://github.com/annedrew"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
