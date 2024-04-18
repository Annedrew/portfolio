"use client";
import React from "react";
import Image from "next/image";
import SectionHeader from "../section-header";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import styles from "./certification.module.css";

export default function Certification() {
  const { ref } = useSectionInView("Certification");
  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="certification"
    >
      <SectionHeader>Certification</SectionHeader>
      <div className={styles.cert}>
        <a href="https://www.credly.com/badges/0443c492-bdcb-428a-9f9f-02ba7dc05bc2/linked_in_profile">
          <Image
            src="/ckad.png"
            alt="Certified Kubernetes Application Developer"
            width={200}
            height={200}
          />
        </a>
        <a href="https://www.credly.com/badges/2d1992c9-acfc-46dc-96d3-7c4a235f8ce3/linked_in_profile">
          <Image
            src="/cka.png"
            alt="Certified Kubernetes Administrator"
            width={200}
            height={200}
          />
        </a>
        <a href="https://www.credly.com/badges/0de5eb4f-6467-46fb-8c2d-278912da0834/linked_in_profile">
          <Image
            src="/awscp.png"
            alt="AWS Certified Cloud Practitioner"
            width={200}
            height={200}
          />
        </a>
      </div>
    </motion.section>
  );
}
