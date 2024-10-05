"use client";
import React, { useState, useRef } from "react";
import ProjectCards from "../common/ProjectCards";
import ProjectTags from "../common/ProjectTags";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Audiobook Website",
    description: "Built a web app for personalized audiobooks with multilingual support, voice customization, and community features.",
    image: "/images/Projects/Logo.png",
    tags: ["React Js", "Firebase"],
    gitUrl: "https://github.com/LakshanShalintha/AudioBook",
    demoUrl: "https://audirab.vercel.app/", // Add demoUrl
  },
  {
    id: 2,
    title: "Travel Website",
    description: "Explore and plan your adventures with our Traveling Website, featuring destination guides, booking options, and user reviews, all built using Laravel, Bootstrap, and MySQL",
    image: "/images/Projects/Logo.png",
    tags: ["Laravel", "Bootstrap", "MySql"],
    gitUrl: "https://github.com/LakshanShalintha/PHP-Web-Project",
    demoUrl: "/", // Add demoUrl
  },
  {
    id: 3,
    title: "Psychological Counselling",
    description: "Sith Arana: A web app streamlining counseling services at SUSL, supporting students, counselors, and admins with efficient and user-friendly management.",
    image: "/images/Projects/Logo.png",
    tags: ["Laravel", "Bootstrap", "MySql"],
    gitUrl: "https://github.com/LakshanShalintha/SUSL-Faculty-Of-Social-Sciences-Sith-Arana-Psychological-Counseling-System--2024",
    demoUrl: "/", // Add demoUrl
  },
  {
    id: 4,
    title: "Audiobook MobileApp",
    description: "Built a mobile appfor personalized audiobooks with multilingual support, voice customization, and community features.",
    image: "/images/Projects/Logo.png",
    tags: ["Flutter", "Firebase"],
    gitUrl: "https://github.com/LakshanShalintha/Mini-Project",
    demoUrl: "/", // Add demoUrl
  },
  {
    id: 5,
    title: "Official site of the Socs-SUSL",
    description: "A central platform for easily sharing information, facilitating member communication, and promoting society activities.",
    image: "/images/Projects/Logo.png",
    tags: ["Next Js", "Next.js API Routes"],
    gitUrl: "https://github.com/LakshanShalintha/SUSL-Faculty-Of-Social-Sciences-Sith-Arana-Psychological-Counseling-System--2024",
    demoUrl: "https://socs-website-front-end.vercel.app/", // Add demoUrl
  },
  {
    id: 6,
    title: "Rajarata Pawning Centre",
    description: "Creating a user-friendly UI and database system for Rajarata Pawning Centre to streamline operations and manage customer data efficiently.",
    image: "/images/Projects/Logo.png",
    tags: ["Laravel", "Bootstrap", "Mysql"],
    gitUrl: "https://github.com/LakshanShalintha/Rajarata-Pawning-Centre",
    demoUrl: "https://pawning-demo.com", // Add demoUrl
  },
  {
    id: 7,
    title: "Personal Portfolio",
    description: "This is my personal website that I frequently update with innovative new technologies that I learn during my journey.",
    image: "/images/Projects/Logo.png",
    tags: ["Next Js", "Bootstrap"],
    gitUrl: "https://github.com/LakshanShalintha/Portfolio",
    demoUrl: "https://lakshan-shalintha.vercel.app/", // Add demoUrl
  },
  {
    id: 8,
    title: "Travel-Web",
    description: "Developed a travel website frontend, allowing users to book places, view attractions, explore a gallery, and access our services.",
    image: "/images/Projects/Logo.png",
    tags: ["Html", "CSS", "JavaScript"],
    gitUrl: "https://github.com/LakshanShalintha/Travel-web",
    demoUrl: "https://travellsp.vercel.app/", // Add demoUrl
  },
];

const Projects = () => {
  const [selectedTag, setSelectedTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (tag: string) => {
    setSelectedTag(tag);
  };

  const filteredProjects =
    selectedTag === "All"
      ? projectsData
      : projectsData.filter((project) => project.tags.includes(selectedTag));

  return (
    <motion.div
      initial={{ opacity: 0, scale: 1 }}
      animate={{ opacity: 1, scale: 1.1 }}
      transition={{ duration: 0.5 }}
      className="col-span-7 place-self-center text-center sm:text-left"
    >
      <div id="projects">
        <div className="text-center py-10 mt-20">
          <h1 className="text-4xl font-bold text-white mt-12">Projects</h1>
        </div>
        {/* Project Tags */}
        <div className="text-white flex flex-row justify-center items-center gap-2 py-4">
          <ProjectTags
            onClick={handleTagChange}
            name="All"
            isSelected={selectedTag === "All"}
          />
          <ProjectTags
            onClick={handleTagChange}
            name="Web"
            isSelected={selectedTag === "Web"}
          />
          <ProjectTags
            onClick={handleTagChange}
            name="Mobile"
            isSelected={selectedTag === "Mobile"}
          />
        </div>

        {/* Project Cards */}
        <ul
          ref={ref}
          className="grid md:grid-cols-3 gap-y-4 gap-x-8 justify-center ml-32 mr-32"
        >
          {filteredProjects.map((project, index) => (
            <motion.li
              key={index}
              variants={{
                initial: { opacity: 0, scale: 0.8 },
                animate: { opacity: 1, scale: 1 },
              }}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{
                duration: 0.7,
                delay: index * 0.3,
                ease: "easeOut",
              }}
            >
              <ProjectCards
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                tags={project.tags}
                gitUrl={project.gitUrl}
                demoUrl={project.demoUrl} // Pass demoUrl to ProjectCards
              />
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default Projects;
