"use client";
import React, { useState, useRef } from "react";
import ProjectCards from "../common/ProjectCards";
import ProjectTags from "../common/ProjectTags";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Real-Time Audiobook Website",
    description: "Project 1 description",
    image: "/images/Projects/Logo.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/LakshanShalintha/AudioBook",
    previewUrl: "https://audirab.vercel.app/",
  },
  {
    id: 4,
    title: "Real-Time Audiobook App",
    description: "Project 2 description",
    image: "/images/Projects/Logo.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/LakshanShalintha/Mini-Project",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Travel-Website",
    description: "Project 3 description",
    image: "/images/Projects/Logo.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/LakshanShalintha/PHP-Web-Project",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Sith Arana Psychological Counselling System",
    description: "Project 4 description",
    image: "/images/Projects/Logo.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/LakshanShalintha/SUSL-Faculty-Of-Social-Sciences-Sith-Arana-Psychological-Counseling-System--2024",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Official Website of the Society of Computer Sciences-SUSL ",
    description: "Authentication and CRUD operations",
    image: "/images/Projects/Logo.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Rajarata Pawning Centre ",
    description: "Project 6 description",
    image: "/images/Projects/Logo.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "Travel-Web ",
    description: "Project 7 description",
    image: "/images/Projects/Logo.png",
    tag: ["All", "Web"],
    gitUrl: "/https://github.com/LakshanShalintha/Travel-web",
    previewUrl: "/https://travellsp.vercel.app/",
  },
];

const Projects = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag: React.SetStateAction<string>) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

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
        <div className="text-white flex flex-row justify-center items-center gap-2 py-4">
          <ProjectTags
            onClick={handleTagChange}
            name="All"
            isSelected={tag === "All"}
          />
          <ProjectTags
            onClick={handleTagChange}
            name="Web"
            isSelected={tag === "Web"}
          />
          <ProjectTags
            onClick={handleTagChange}
            name="Mobile"
            isSelected={tag === "Mobile"}
          />
        </div>
        <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
          {filteredProjects.map((project, index) => (
            <motion.li
            key={index}
            variants={{
              initial: { opacity: 0, scale: 0.8 }, 
              animate: { opacity: 1, scale: 1 }   
            }}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ 
              duration: 0.7, 
              delay: index * 0.3,  
              ease: "easeOut"
            }}
          >
            <ProjectCards
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
          
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default Projects;
