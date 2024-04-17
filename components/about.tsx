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
            Around 2 years of experience as a <b>System Test Engineer</b>, honed my skills including quality awareness, communication, and an organized approach to work. 
            I have been working with full-stack development, specializing in React, Next.js, Node.js, and Python. 
            Passionate about staying updated with the latest technologies, I gained <b>Certified Kubernetes Application Developer</b> and <b>Certified Kubernetes Administrator</b> by self-learning. 
        </p>
    </motion.section>
  )
}
