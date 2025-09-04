'use client';
import {motion} from 'motion/react';
import React, {useRef, useState} from 'react';
import {useInView} from "framer-motion";

function Projects() {

  const ref = useRef(null); // Reference for the section
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const isInView = useInView(ref, {triggerOnce: false, threshold: 0.1});

  // Array of project details with categories
  const projects = [
    {
      id: 1,
      image: '/images/Projects/AudiRAB.png',
      title: 'Audiobook Website',
      description: 'Built a web app for personalized audiobooks with multilingual support, voice customization, and community features.',
      gitUrl: 'https://github.com/LakshanShalintha/AudioBook',
      hasDemo: true,
      demoUrl: 'https://audirab.vercel.app/',
      smallGridTexts: ['React Js', 'Firebase'],
      category: 'Web',
    },
    {
      id: 2,
      image: '/images/Projects/AudiRAB.png',
      title: 'Audiobook MobileApp',
      description: 'Built a mobile app for personalized audiobooks with multilingual support, voice customization, and community features.',
      gitUrl: 'https://github.com/LakshanShalintha/Mini-Project',
      hasDemo: false,
      demoUrl: '',
      smallGridTexts: ['Flutter', 'Firebase'],
      category: 'Mobile',
    },
    {
      id: 3,
      image: '/images/Projects/Travelling.png',
      title: 'Travel Website',
      description: "Explore and plan your adventures with our Traveling Website, featuring destination guides, booking options, and user reviews, all built using Laravel, Bootstrap, and MySQL",
      gitUrl: 'https://github.com/LakshanShalintha/PHP-Web-Project',
      hasDemo: false,
      demoUrl: '',
      smallGridTexts: ['Laravel', 'Bootstrap', 'MySql'],
      category: 'Web',
    },
    {
      id: 4,
      image: '/images/Projects/AgriZone.png',
      title: 'AgriZone',
      description: 'Our app connects farmers and consumers directly, eliminating middlemen to ensure fair prices and increased profits for farmers while enhancing market access and sustainability.',
      gitUrl: 'https://github.com/LakshanShalintha/iwb102-team-novices',
      hasDemo: false,
      demoUrl: '',
      smallGridTexts: ['Laravel', 'Bootstrap', 'MySql'],
      category: 'Mobile',
    },
    {
      id: 5,
      image: '/images/Projects/SithArana.png',
      title: 'Psychological Counselling',
      description: 'Sith Arana: A web app streamlining counseling services at SUSL, supporting students, counselors, and admins with efficient and user-friendly management.',
      gitUrl: 'https://github.com/LakshanShalintha/SUSL-Faculty-Of-Social-Sciences-Sith-Arana-Psychological-Counseling-System--2024',
      hasDemo: true,
      demoUrl: 'http://sitharana.sab.ac.lk/',
      smallGridTexts: ['Laravel', 'Bootstrap', 'MySql'],
      category: 'Web',
    },
    {
      id: 6,
      image: 'https://via.placeholder.com/300x200?text=Project+5',
      title: 'Rajarata Pawning Centre',
      description: 'Developed a travel website frontend, allowing users to book places, view attractions, explore a gallery, and access our services.',
      gitUrl: 'https://github.com/LakshanShalintha/Rajarata-Pawning-Centre',
      hasDemo: false,
      demoUrl: 'https://demo.com/demo5',
      smallGridTexts: ['Laravel', 'Bootstrap', 'MySql'],
      category: 'Web',
    },
    {
      id: 7,
      image: '/images/Projects/Portfolio.png',
      title: 'Personal Portfolio',
      description: "This is my personal website that I frequently update with innovative new technologies that I learn during my journey.",
      gitUrl: 'https://github.com/LakshanShalintha/Portfolio',
      hasDemo: true,
      demoUrl: 'https://lakshan-shalintha.vercel.app/',
      smallGridTexts: ['Next Js', 'Tailwind'],
      category: 'Web',
    },
    {
      id: 8,
      image: '/images/Projects/SOCS.png',
      title: 'SOCS Web',
      description: "Developed a travel website frontend, allowing users to book places, view attractions, explore a gallery, and access our services.",
      gitUrl: 'https://github.com/LakshanShalintha/SOCS-Website-Front_end',
      hasDemo: true,
      demoUrl: 'socs-website-front-end.vercel.app',
      smallGridTexts: ['Next Js', 'Tailwind'],
      category: 'Web',
    },
    {
      id: 9,
      image: '/images/Projects/Qpid.png',
      title: 'Qpid',
      description: "Developed a travel website frontend, allowing users to book places, view attractions, explore a gallery, and access our services.",
      gitUrl: 'https://github.com/LakshanShalintha/qpid_web',
      hasDemo: true,
      demoUrl: 'http://www.qpidgifts.me/',
      smallGridTexts: ['Next Js', 'Tailwind'],
      category: 'Web',
      isDisabled: true, // Disable the button for this project
    },
    {
      id: 10,
      image: '/images/Projects/Travel.png',
      title: 'Travel-Web',
      description: "Developed a travel website frontend, allowing users to book places, view attractions, explore a gallery, and access our services.",
      gitUrl: 'https://github.com/LakshanShalintha/Travel-web',
      hasDemo: true,
      demoUrl: 'https://travellsp.vercel.app/',
      smallGridTexts: ['Html', 'CSS', 'JavaScript'],
      category: 'Web',
    },
    {
      id: 11,
      image: '/images/Projects/Fit at Home.jpeg',
      title: 'Fit at Home',
      description: "",
      gitUrl: '',
      hasDemo: false,
      demoUrl: 'https://travellsp.vercel.app/',
      smallGridTexts: ['Fluter', 'Firebase'],
      category: 'Mobile',
    },
    {
      id: 12,
      image: '/images/Projects/Ayurveda Web.JPG',
      title: 'CeylonMystique',
      description: "",
      gitUrl: '',
      hasDemo: true,
      demoUrl: 'https://www.ceylonmystique.com/',
      smallGridTexts: ['React Js', 'Firebase'],
      category: 'Web',
    },
  ];

  // State for selected category
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Handler for changing selected category
  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  // Filter the projects based on the selected category
  const filteredProjects =
      selectedCategory === 'All'
          ? projects
          : projects.filter(project => project.category === selectedCategory);

  return (
      <motion.section ref={ref} id="project" className="py-16 px-[12%] scroll-mt-20 z-10"
                      initial={{opacity: 0, y: -20}}
                      animate={isInView ? {opacity: 1, y: 0} : {opacity: 0, y: 20}}
                      transition={{duration: 0.6}}
      >
        <div className="flex flex-col items-center mt-32 z-10">
          {/* Title for the projects section */}
          <motion.h2 className="text-center text-5xl font-Ovo font-bold  mb-12 z-10"
                     whileInView={{ opacity: 1, y: 0 }}
                     initial={{ opacity: 0, y: -100 }}
                     transition={{ duration: 0.5 }}
          >
            My Projects
          </motion.h2>

          {/* Buttons for filtering projects */}
          <motion.div className="flex justify-center mb-8 space-x-4 z-10 "
                      initial={{opacity: 0 }}
                      whileInView={{opacity: 1 }}
                      transition={{ delay: 0.7, duration: 0.5 }}
          >
            {/* All button */}
            <button
                className={`${
                    selectedCategory === 'All' ? 'bg-gray-400' : ''
                }  py-2 px-4 rounded border-2 z-10`}
                onClick={() => handleCategoryClick('All')}
            >
              All
            </button>

            {/* Web button */}
            <button
                className={`${
                    selectedCategory === 'Web' ? 'bg-gray-400' : ''
                }  py-2 px-4 rounded border-2 z-10`}
                onClick={() => handleCategoryClick('Web')}
            >
              Web
            </button>

            {/* Mobile button */}
            <button
                className={`${
                    selectedCategory === 'Mobile' ? 'bg-gray-400' : ''
                }  py-2 px-4 rounded border-2 z-10`}
                onClick={() => handleCategoryClick('Mobile')}
            >
              Mobile
            </button>
          </motion.div>

          {/* Grid for displaying projects */}
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 z-10"
               initial={{opacity: 0 }}
               whileInView={{opacity: 1 }}
               transition={{ delay: 0.9, duration: 0.6 }}
          >
            {filteredProjects.map((project) => (
                <motion.div
                    key={project.id}
                    className=" z-10 relative w-[500px] max-w-xs h-[350px]  rounded-[19px] flex flex-col border-2 transition-transform duration-300 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.1 }}
                >
                  {/* Upper part for the image */}
                  <div
                      className="h-2/3 bg-cover bg-center rounded-t-2xl z-10"
                      style={{
                        backgroundImage: `url('${project.image}')`,
                      }}
                  ></div>
                  {/* Content container */}
                  <div className="h-1/3 flex flex-col justify-between p-4 z-10">
                    {/* Title on the left side */}
                    <div className=" text-lg font-bold mb-2 z-10">{project.title}</div>
                    {/* Small rectangles under the title */}
                    <div className="flex mb-2 gap-1 z-10">
                      {project.smallGridTexts.map((text, smallIndex) => (
                          <div
                              key={smallIndex}
                              className=" z-10 w-[70px] h-[25px] bg-gray-500 rounded-md flex items-center justify-center  text-xs -mb-2"
                          >
                            {text}
                          </div>
                      ))}
                    </div>
                    {/* Description under the title */}
                    {/*<div className="text-white text-[13px] mb-2">{project.description}</div>*/}

                    {/* Buttons at the bottom left */}
                    <div className="flex space-x-2 z-10">
                      <a
                          href={project.gitUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={project.isDisabled ? 'pointer-events-none opacity-50' : ''}
                      >
                        <button
                            className={`w-[70px] h-[25px] rounded border-2 hover:bg-gray-400 transition-colors text-xs ${
                                project.isDisabled ? 'cursor-not-allowed' : ''
                            }`}
                            disabled={project.isDisabled}
                        >
                          Project
                        </button>
                      </a>
                      {project.hasDemo && (
                          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                            <button
                                className="border-2 w-[70px] h-[25px] rounded hover:bg-gray-400 transition-colors text-xs"
                            >
                              View Demo
                            </button>
                          </a>
                      )}
                    </div>
                  </div>
                </motion.div>

            ))}
          </motion.div>
        </div>
      </motion.section>
  );
}

export default Projects;
