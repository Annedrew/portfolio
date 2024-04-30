"use client"
import React from 'react';
import SectionHeader from './section-header';
import { motion } from 'framer-motion';
import { useSectionInView } from "@/lib/hooks"; 

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section 
    ref={ref}
    className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
      initial={{ opacity: 0, y: 100}}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about">
        <SectionHeader>About Me</SectionHeader>
        <p className=''>
          I have been working with <b>full-stack development</b>, specializing in React, Next.js, Node.js, Express.js and Python recently.
          I graduated from <b>Aalborg University</b>, with a master&apos;s degree in computer science.
          I&apos;m characterized by a <b>long-term</b> mindset, continuously pursuing a better way to build applications.
          My enthusiasm lies in building <b>high-quality</b> software and websites.
          Around 2 years of experience as a <b>System Test Engineer</b>, honed my skills including quality awareness, communication, and an organized approach to work.
          Passionate about staying updated with the latest technologies, I gained some certification on <b>Kubernetes</b> and <b>AWS</b> by self-learning. 
        </p>
    </motion.section>
  )
}
