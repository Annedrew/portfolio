"use client"
import React from 'react';
import SectionHeader from './section-header';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.section className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40'>
        <SectionHeader>About Me</SectionHeader>
        <p className=''>
            Around 2 years of experience as a Test Engineer, honed my skills including quality awareness, communication, and an organized approach to work. 
            I have been working with full-stack development, specializing in React, Next.js, Node.js, and Python. 
            Passionate about staying updated with the latest technologies, I gained Certified Kubernetes Application Developer and Certified Kubernetes Administrator by self-learning. 
        </p>
    </motion.section>
  )
}
