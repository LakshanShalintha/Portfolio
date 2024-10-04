"use client";
import React, { useTransition, useState } from "react";
import TabButton from "../common/TabButton";
import SkillDataProvider from "../common/SkillDataProvider";
import {
  Backend_skill,
  Frontend_skill,
  Frontend_skill_1,
  Other_skill,
  Other_skill_1,
} from "../common/constants";

// Define the type for your image objects
interface SkillImage {
  Image: string; // Image could be a URL or path, adjust accordingly
  width: number;
  height: number;
}

// Define TAB_DATA type
interface TabData {
  title: string;
  id: string;
  content: React.ReactNode;
}

const TAB_DATA: TabData[] = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-5 gap-1 pl-2">
        <ul className="list-disc pl- space-y-2">
          <li>Dart</li>
          <li>PHP</li>
          <li>Python</li>
          <li>Java</li>
        </ul>
        <ul className="list-disc pl- space-y-2">
          <li>C</li>
          <li>React</li>
          <li>HTML</li>
          <li>CSS</li>
        </ul>
        <ul className="list-disc pl- space-y-2">
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>MySQL</li>
          <li>MongoDB</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Sabaragamuwa University of Sri Lanka</li>
      </ul>
    ),
  },
  {
    title: "Others",
    id: "others",
    content: (
      <ul className="list-disc pl-2">
        <li>Teamwork</li>
        <li>Leadership</li>
        <li>Critical Thinking</li>
        <li>Time Management</li>
        <li>Communication Skills</li>
      </ul>
    ),
  },
];

const About = () => {
  const [tab, setTab] = useState("skills");
  const [, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const selectedTab = TAB_DATA.find((t) => t.id === tab);

  return (
    <div id="about">
      <div className="text-center py-10 mt-24">
        <h1 className="text-4xl font-bold text-white mt-12">About Me</h1>
      </div>
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-row justify-around flex-wrap -mt-28 gap-5 items-center">
            {Frontend_skill.map((image: SkillImage, index: number) => (
              <SkillDataProvider
                key={index}
                src={image.Image}
                width={image.width}
                height={image.height}
                index={index}
              />
            ))}
          </div>
          <div className="flex flex-row justify-around flex-wrap mt-6 gap-5 items-center">
            {Frontend_skill_1.map((image: SkillImage, index: number) => (
              <SkillDataProvider
                key={index}
                src={image.Image}
                width={image.width}
                height={image.height}
                index={index}
              />
            ))}
          </div>
          <div className="flex flex-row justify-around flex-wrap mt-6 gap-5 items-center">
            {Backend_skill.map((image: SkillImage, index: number) => (
              <SkillDataProvider
                key={index}
                src={image.Image}
                width={image.width}
                height={image.height}
                index={index}
              />
            ))}
          </div>
          <div className="flex flex-row justify-around flex-wrap mt-7 gap-5 items-center">
            {Other_skill.map((image: SkillImage, index: number) => (
              <SkillDataProvider
                key={index}
                src={image.Image}
                width={image.width}
                height={image.height}
                index={index}
              />
            ))}
          </div>
          <div className="flex flex-row justify-around flex-wrap mt-7 gap-5 items-center">
            {Other_skill_1.map((image: SkillImage, index: number) => (
              <SkillDataProvider
                key={index}
                src={image.Image}
                width={image.width}
                height={image.height}
                index={index}
              />
            ))}
          </div>
        </div>
        <div className="mt-2 md:mt-2 text-left flex flex-col h-full">
          <p className="text-base lg:text-lg">
            I&rsquo;m a passionate Software Engineer with a strong background in both
            mobile and web development. My expertise spans across front-end and
            back-end technologies, allowing me to create well-rounded digital
            solutions. I thrive on solving complex problems and continuously
            learning new tools and techniques to stay at the forefront of
            technology. Whether it&rsquo;s building user-friendly interfaces or
            optimizing system performance, I&rsquo;m committed to delivering
            high-quality, efficient results that meet both user and business
            needs.
          </p>

          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("others")}
              active={tab === "others"}
            >
              Others
            </TabButton>
          </div>

          {/* Set a fixed height for the tab content area */}
          <div className="mt-8" style={{ minHeight: '150px', transition: 'height 0.3s ease-in-out' }}>
            {selectedTab ? selectedTab.content : <p>No content available</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
