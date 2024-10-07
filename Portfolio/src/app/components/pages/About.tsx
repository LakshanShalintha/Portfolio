"use client";
import React, { useTransition, useState } from "react";
import TabButton from "../common/TabButton";

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
      <div className="grid grid-cols-1 md:grid-cols-5 gap-2 pl-2">
        <ul className="list-disc pl-4 space-y-2">
          <li>Dart</li>
          <li>PHP</li>
          <li>Python</li>
          <li>Java</li>
        </ul>
        <ul className="list-disc pl-4 space-y-2">
          <li>C</li>
          <li>React</li>
          <li>HTML</li>
          <li>CSS</li>
        </ul>
        <ul className="list-disc pl-4 space-y-2">
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
      <ul className="list-disc pl-4">
        <li>Sabaragamuwa University of Sri Lanka</li>
      </ul>
    ),
  },
  {
    title: "Others",
    id: "others",
    content: (
      <ul className="list-disc pl-4">
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
    <div id="about" className="py-10 mt-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mt-12 mb-24">About Me</h1>
      </div>
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        {/* Left side: Image */}
        <div className="flex justify-center -mt-24">
          <img
            src="/images/Myimages/my-image.png"
            alt="About Me Image"
            className="w-[250px] h-[250px] md:w-[350px] md:h-[350px] object-cover rounded-lg"
          />
        </div>

        {/* Right side: Content */}
        <div className="flex flex-col items-center justify-center">
          <div className="mt-2 md:mt-2 text-left flex flex-col h-full">
            <p className="text-base lg:text-lg">
              I&rsquo;m a passionate Software Engineer with a strong background
              in both mobile and web development. My expertise spans across
              front-end and back-end technologies, allowing me to create
              well-rounded digital solutions. I thrive on solving complex
              problems and continuously learning new tools and techniques to
              stay at the forefront of technology. Whether it&rsquo;s building
              user-friendly interfaces or optimizing system performance,
              I&rsquo;m committed to delivering high-quality, efficient results
              that meet both user and business needs.
            </p>

            <div className="flex flex-row justify-start mt-8 space-x-4">
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
            <div
              className="mt-8"
              style={{
                minHeight: "150px",
                transition: "height 0.3s ease-in-out",
              }}
            >
              {selectedTab ? selectedTab.content : <p>No content available</p>}
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center -mt-4 overflow-x-auto">
        <div className="flex items-center space-x-4 min-w-max">
          <img
            src="/images/Technology/html.jpeg"
            alt="HTML"
            className="w-16 h-16 object-fill border-2 border-gray-500 rounded-lg p-2 animation-float"
          />
          <img
            src="/images/Technology/js.png"
            alt="JavaScript"
            className="w-16 h-16 object-fill border-2 border-gray-500 rounded-lg p-2 animation-float"
          />
          <img
            src="/images/Technology/tailwind.png"
            alt="Tailwind CSS"
            className="w-16 h-16 object-fill border-2 border-gray-500 rounded-lg p-2 animation-float"
          />
          <img
            src="/images/Technology/java.png"
            alt="Java"
            className="w-16 h-16 object-fill border-2 border-gray-500 rounded-lg p-2 animation-float"
          />
          <img
            src="/images/Technology/react.png"
            alt="React"
            className="w-16 h-16 object-fill border-2 border-gray-500 rounded-lg p-2 animation-float"
          />
          <img
            src="/images/Technology/ts.png"
            alt="TypeScript"
            className="w-16 h-16 object-fill border-2 border-gray-500 rounded-lg p-2 animation-float"
          />
          <img
            src="/images/Technology/laravel.png"
            alt="Laravel"
            className="w-16 h-16 object-fill border-2 border-gray-500 rounded-lg p-2 animation-float"
          />
          <img
            src="/images/Technology/c.png"
            alt="C"
            className="w-16 h-16 object-fill border-2 border-gray-500 rounded-lg p-2 animation-float"
          />
          <img
            src="/images/Technology/dart.png"
            alt="Dart"
            className="w-16 h-16 object-fill border-2 border-gray-500 rounded-lg p-2 animation-float"
          />
          <img
            src="/images/Technology/next.png"
            alt="Next.js"
            className="w-16 h-16 object-fill border-2 border-gray-500 rounded-lg p-2 animation-float"
          />
          <img
            src="/images/Technology/node-js.png"
            alt="Node.js"
            className="w-16 h-16 object-fill border-2 border-gray-500 rounded-lg p-2 animation-float"
          />
          <img
            src="/images/Technology/Firebase.png"
            alt="Firebase"
            className="w-16 h-16 object-fill border-2 border-gray-500 rounded-lg p-2 animation-float"
          />
          <img
            src="/images/Technology/mysql.png"
            alt="MySQL"
            className="w-16 h-16 object-fill border-2 border-gray-500 rounded-lg p-2 animation-float"
          />
          <img
            src="/images/Technology/github.png"
            alt="GitHub"
            className="w-16 h-16 object-fill border-2 border-gray-500 rounded-lg p-2 animation-float"
          />
          <img
            src="/images/Technology/trello.jpeg"
            alt="Trello"
            className="w-16 h-16 object-fill border-2 border-gray-500 rounded-lg p-2 animation-float"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
