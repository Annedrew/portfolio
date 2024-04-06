"use client"
import React, { useEffect } from 'react';
import SectionHeader from './section-header';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/active-section-context';

export default function About() {
  const {ref, inView} = useInView({
    threshold: 0.75,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("About");
    }
  }, [inView, setActiveSection, timeOfLastClick]);

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
            Around 2 years of experience as a Test Engineer, honed my skills including quality awareness, communication, and an organized approach to work. 
            I have been working with full-stack development, specializing in React, Next.js, Node.js, and Python. 
            Passionate about staying updated with the latest technologies, I gained Certified Kubernetes Application Developer and Certified Kubernetes Administrator by self-learning. 
        </p>
    </motion.section>
  )
}
