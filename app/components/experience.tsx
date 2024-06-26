"use client";
import React from "react";
import SectionHeader from "./section-header";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/app/lib/data";
import { useSectionInView } from "@/app/lib/hooks";

export default function Experience() {
  const { ref } = useSectionInView("Experience");

  return (
    <section ref={ref} id="experience" className="scroll-mt-28 mb-28 sm:40">
      <SectionHeader>My Experience</SectionHeader>
      <VerticalTimeline lineColor="" animate={true}>
        {experiencesData.map((experience, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible={true}
              contentStyle={{
                background: "#f3f4f6",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight: "0.4rem solid #9ca3af",
              }}
              date={experience.date}
              icon={experience.icon}
              iconStyle={{
                background: "white",
                fontSize: "1.5rem",
              }}
            >
              <h3
                className="font-semibold capitalize"
              >
                {experience.title}
              </h3>
              <p className="font-normal text-gray-400 !mt-0">{experience.location}</p>
              {Array.isArray(experience.description) ? 
                experience.description.map((des, index) => (
                  <p className="font-normal !mt-1 text-gray-700" key={index}>{des}</p>
                )) : 
                <p className="font-normal !mt-1 text-gray-700">{experience.description}</p>
              }
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
