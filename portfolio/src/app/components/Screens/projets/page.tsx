"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";


function Projects() {
  const ref = useRef(null); // Reference for the section
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const isInView = useInView(ref, { triggerOnce: false, threshold: 0.1 });

  return (
    <motion.section ref={ref} id="project" className="py-16 px-[12%] scroll-mt-20"
                    initial={{ opacity: 0, y: -20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto">
        <motion.h2 className="text-center text-5xl font-Ovo font-bold  mb-12"
                   initial={{ y: -20, opacity: 0 }}
                   whileInView={{ y: 0, opacity: 1 }}
                   transition={{ delay: 0.3, duration: 0.5 }}
        >
          My Projects
        </motion.h2>
        <motion.p className=" text-center mt-4 mb-12"
                  initial={{opacity: 0 }}
                  whileInView={{opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
        >
          Explore a collection of projects showcasing my expertise in front-end development.
        </motion.p>
      </div>

      <div className="flex justify-center">
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 w-full max-w-7xl"
                    initial={{opacity: 0 }}
                    whileInView={{opacity: 1 }}
                    transition={{ delay: 0.9, duration: 0.6 }}
        >
          {/* First Row */}
          <motion.div className="relative group border border-gray-300 rounded-xl"
               whileHover={{ scale: 1.05 }}
               transition={{ duration: 0.3 }}
          >
            <img
              src="/images/Projects/AudiRAB.png"
              alt="Project 1"
              className="w-full h-64 object-cover rounded-xl"
            />
          </motion.div>

          <motion.div className="relative group border border-gray-300 rounded-xl"
               whileHover={{ scale: 1.05 }}
               transition={{ duration: 0.3 }}
          >
            <img
              src="/images/Projects/Sith Arana.png"
              alt="Project 2"
              className="w-full h-64 object-cover rounded-xl"
            />
          </motion.div>

          <motion.div className="relative group border border-gray-300 rounded-xl"
               whileHover={{ scale: 1.05 }}
               transition={{ duration: 0.3 }}
          >
            <img
              src="/images/Projects/AgriZone.png"
              alt="Project 3"
              className="w-full h-64 object-cover rounded-xl"
            />
          </motion.div>

          <motion.div className="relative group border border-gray-300 rounded-xl"
               whileHover={{ scale: 1.05 }}
               transition={{ duration: 0.3 }}
          >
            <img
              src="/images/Projects/AudiRAB.png"
              alt="Project 4"
              className="w-full h-64 object-cover rounded-xl"
            />
          </motion.div>

          {/* Second Row */}
          <motion.div className="relative group border border-gray-300 rounded-xl"

               whileHover={{ scale: 1.05 }}
               transition={{ duration: 0.3 }}>
            <img
              src="/images/Projects/Travelling.png"
              alt="Project 5"
              className="w-full h-64 object-cover rounded-xl"
            />
          </motion.div>

          <motion.div className="relative group border border-gray-300 rounded-xl"
               whileHover={{ scale: 1.05 }}
               transition={{ duration: 0.3 }}
          >
            <img
              src="/images/Projects/Travel.png"
              alt="Project 6"
              className="w-full h-64 object-cover rounded-xl"
            />
          </motion.div>

          <motion.div className="relative group border border-gray-300 rounded-xl"

               whileHover={{ scale: 1.05 }}
               transition={{ duration: 0.3 }}>
            <img
              src="/images/Projects/SOCS.png"
              alt="Project 7"
              className="w-full h-64 object-cover rounded-xl"
            />
          </motion.div>

          <motion.div className="relative group border border-gray-300 rounded-xl"

               whileHover={{ scale: 1.05 }}
               transition={{ duration: 0.3 }}>
            <img
              src="/images/project8.jpg"
              alt="Project 8"
              className="w-full h-64 object-cover rounded-xl"
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Projects;
