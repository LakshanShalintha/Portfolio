'use client';
import React, { useState } from 'react';

function Projects() {
  // Array of project details with categories
  const projects = [
    {
      id: 1,
      image: '/images/Projects/Logo.png',
      title: 'Audiobook Website',
      description: 'Built a web app for personalized audiobooks with multilingual support, voice customization, and community features.',
      gitUrl: 'https://github.com/LakshanShalintha/AudioBook',
      demoUrl: 'https://audirab.vercel.app/',
      smallGridTexts: ['React Js', 'Firebase'],
      category: 'Web', 
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/300x200?text=Project+2',
      title: 'Audiobook MobileApp',
      description: 'Built a mobile app for personalized audiobooks with multilingual support, voice customization, and community features.',
      gitUrl: 'https://github.com/LakshanShalintha/Mini-Project',
      demoUrl: 'https://demo.com/demo2',
      smallGridTexts: ['Flutter', 'Firebase'],
      category: 'Mobile', 
    },
    {
      id: 3,
      image: 'https://via.placeholder.com/300x200?text=Project+3',
      title: 'Travel Website',
      description: "Explore and plan your adventures with our Traveling Website, featuring destination guides, booking options, and user reviews, all built using Laravel, Bootstrap, and MySQL",
      gitUrl: 'https://github.com/LakshanShalintha/PHP-Web-Project',
      demoUrl: 'https://demo.com/demo3',
      smallGridTexts: ['Laravel', 'Bootstrap', 'MySql'],
      category: 'Web', 
    },
    {
      id: 4,
      image: 'https://via.placeholder.com/300x200?text=Project+4',
      title: 'AgriZone',
      description: 'Our app connects farmers and consumers directly, eliminating middlemen to ensure fair prices and increased profits for farmers while enhancing market access and sustainability.',
      gitUrl: '',
      demoUrl: 'https://demo.com/demo4',
      smallGridTexts: ['Laravel', 'Bootstrap', 'MySql'],
      category: 'Mobile', 
    },
    {
      id: 5,
      image: 'https://via.placeholder.com/300x200?text=Project+5',
      title: 'Psychological Counselling',
      description: 'Sith Arana: A web app streamlining counseling services at SUSL, supporting students, counselors, and admins with efficient and user-friendly management.',
      gitUrl: 'https://github.com/LakshanShalintha/SUSL-Faculty-Of-Social-Sciences-Sith-Arana-Psychological-Counseling-System--2024',
      demoUrl: 'https://demo.com/demo4',
      smallGridTexts: ['Laravel', 'Bootstrap', 'MySql'],
      category: 'Web', 
    },
    {
      id: 6,
      image: 'https://via.placeholder.com/300x200?text=Project+5',
      title: 'Rajarata Pawning Centre',
      description: 'Developed a travel website frontend, allowing users to book places, view attractions, explore a gallery, and access our services.',
      gitUrl: 'https://github.com/LakshanShalintha/Travel-web',
      demoUrl: 'https://demo.com/demo5',
      smallGridTexts: ['Laravel', 'Bootstrap', 'MySql'],
      category: 'Web', 
    },
    {
      id: 7,
      image: 'https://via.placeholder.com/300x200?text=Project+6',
      title: 'Personal Portfolio',
      description: "This is my personal website that I frequently update with innovative new technologies that I learn during my journey.",
      gitUrl: 'https://github.com/LakshanShalintha/Portfolio',
      demoUrl: 'https://lakshan-shalintha.vercel.app/',
      smallGridTexts: ['Next Js', 'Tailwind'],
      category: 'Web', 
    },
    {
      id: 8,
      image: 'https://via.placeholder.com/300x200?text=Project+6',
      title: 'Travel-Web',
      description: "Developed a travel website frontend, allowing users to book places, view attractions, explore a gallery, and access our services.",
      gitUrl: 'https://github.com/LakshanShalintha/Travel-web',
      demoUrl: 'https://travellsp.vercel.app/',
      smallGridTexts: ['Html', 'CSS', 'JavaScript'],
      category: 'Web', 
    }
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
    <div className="flex flex-col items-center mt-32">
      {/* Title for the projects section */}
      <h1 className="text-white text-4xl font-bold mb-20">Projects</h1>

      {/* Buttons for filtering projects */}
      <div className="flex justify-center mb-8 space-x-4">
        {/* All button */}
        <button
          className={`${
            selectedCategory === 'All' ? 'bg-purple-500' : 'bg-gray-500'
          } text-white py-2 px-4 rounded`}
          onClick={() => handleCategoryClick('All')}
        >
          All
        </button>

        {/* Web button */}
        <button
          className={`${
            selectedCategory === 'Web' ? 'bg-purple-500' : 'bg-gray-500'
          } text-white py-2 px-4 rounded`}
          onClick={() => handleCategoryClick('Web')}
        >
          Web
        </button>

        {/* Mobile button */}
        <button
          className={`${
            selectedCategory === 'Mobile' ? 'bg-purple-500' : 'bg-gray-500'
          } text-white py-2 px-4 rounded`}
          onClick={() => handleCategoryClick('Mobile')}
        >
          Mobile
        </button>
      </div>

      {/* Grid for displaying projects */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div
          key={project.id}
          className="relative w-full max-w-xs h-[350px] bg-purple-700 rounded-[19px] flex flex-col border-2 border-white transition-transform duration-300 hover:scale-105 hover:border-purple-500 hover:border-[4px] hover:shadow-[0_0_25px_1px_rgba(255,255,255,0.5)]"
        >
          {/* Upper part for the image */}
          <div
            className="h-1/3 bg-cover bg-center rounded-t-2xl"
            style={{
              backgroundImage: `url('${project.image}')`,
            }}
          ></div>
          {/* Content container */}
          <div className="h-1/3 flex flex-col justify-between p-4">
            {/* Title on the left side */}
            <div className="text-white text-lg font-bold mb-2">{project.title}</div>
            {/* Small rectangles under the title */}
            <div className="flex mb-2 gap-1">
              {project.smallGridTexts.map((text, smallIndex) => (
                <div
                  key={smallIndex}
                  className="w-[70px] h-[25px] bg-gray-500 rounded-md flex items-center justify-center text-white text-xs"
                >
                  {text}
                </div>
              ))}
            </div>
            {/* Description under the title */}
            <div className="text-white text-[13px] mb-2">{project.description}</div>
            {/* Buttons at the bottom left */}
            <div className="flex space-x-2">
              <a href={project.gitUrl} target="_blank" rel="noopener noreferrer">
                <button className="bg-purple-500 text-white w-[70px] h-[25px] rounded hover:bg-purple-800 transition-colors text-xs">
                  View Project
                </button>
              </a>
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                <button className="bg-purple-500 text-white w-[70px] h-[25px] rounded hover:bg-purple-800 transition-colors text-xs">
                  View Demo
                </button>
              </a>
            </div>
          </div>
        </div>
        
        ))}
      </div>
    </div>
  );
}

export default Projects;
