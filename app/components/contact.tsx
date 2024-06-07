"use client";
import React, { useEffect, useState } from "react";
import SectionHeader from "./section-header";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { useSectionInView } from "@/app/lib/hooks";
import { sendEmail } from "@/app/actions/sendEmail";
import { useFormStatus } from "react-dom";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const { pending } = useFormStatus();
  const [submit, setSubmit] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [inputArea, setInputArea] = useState("");

  const handleInputChange = () => {
    if (submit === true) {
      setInputValue("");
    }
  }

  const handleInputAreaChange = () => {
    if (submit === true) {
      setInputArea("");
    }
  }

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="mb:20 sm:mb-28 w-[min(100%, 38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeader>Contact Me</SectionHeader>
      <p className="text-gray-700">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:anningcn0721@gmail.com">
          anningcn0721@gmail.com
        </a>{" "}
        or through this form.
      </p>
      <form
        className="mt-10 flex flex-col"
        action={async (formData) => {
          await sendEmail(formData);
          console.log(`formData: ${JSON.stringify(formData)}`)
          setSubmit(true);
        }}
      >
        <input
          name="senderEmail"
          required
          maxLength={500}
          type="email"
          className="h-14 rounded-lg borderBlack px-4"
          placeholder="Your email"
          onChange={handleInputChange}
          value={inputValue}
        />
        <textarea
          name="message"
          required
          maxLength={5000}
          className="h-52 my-3 rounded-lg borderBlack p-4"
          placeholder="Your message"
          onChange={handleInputAreaChange}
          value={inputArea}
        />
        <button
          type="submit"
          className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65"
          disabled={pending}
        >
          {pending ? (
            <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
          ) : (
            <>
              Submit{" "}
              <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
            </>
          )}
        </button>
      </form>
    </motion.section>
  );
}
