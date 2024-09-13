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
    previewUrl: "/",
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

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-32 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
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
            initial: { opacity: 0, rotate: 180, y: 30 }, // Starts with a rotation, a slight bounce, and invisible
            animate: { opacity: 1, rotate: 0, y: 0 }    // Rotates back to normal position, bounces up to its position, and becomes visible
          }}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          transition={{ 
            duration: 0.7, // Duration for the rotation and bounce effect
            delay: index * 0.3, // Staggered delay based on index
            ease: "anticipate" // Easing with a slight bounce
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
    </section>
  );
};

export default Projects;
