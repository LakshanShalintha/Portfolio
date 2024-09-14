"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "../common/TabButton";

const TAB_DATA = [
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
          <li>React</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>CSS</li>
        </ul>
        <ul className="list-disc pl- space-y-2">
          <li>C</li>
          <li>HTML</li>
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
        <li>Fullstack Academy of Code</li>
        <li>University of California, Santa Cruz</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
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

  // Find the currently selected tab's content
  const selectedTab = TAB_DATA.find((t) => t.id === tab);

  return (
    <section className="mt-5 text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image 
            src="/images/Myimages/my-image.png"
            alt="my image"
            width={400}
            height={400}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="mt-16 text-4xl font-bold text-white mb-4">
            About Me
          </h2>
          <p className="text-base lg:text-lg">
            I&rsquo;m a passionate Software Engineer with a strong background in both
            mobile and web development. My expertise spans across front-end and
            back-end technologies, allowing me to create well-rounded digital
            solutions. I thrive on solving complex problems and continuously
            learning new tools and techniques to stay at the forefront of
            technology. Whether it's building user-friendly interfaces or
            optimizing system performance, I’m committed to delivering
            high-quality, efficient results that meet both user and business
            needs.
          </p>
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
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8">
            {selectedTab ? selectedTab.content : <p>No content available</p>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
