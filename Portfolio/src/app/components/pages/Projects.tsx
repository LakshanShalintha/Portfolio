import React from 'react';

function Projects() {
  // Array of project details
  const projects = [
    {
      id: 1,
      image: '/images/Projects/Logo.png',
      title: 'Audiobook Website',
      description: 'Built a web app for personalized audiobooks with multilingual support, voice customization, and community features.',
      gitUrl: 'https://github.com/LakshanShalintha/AudioBook',
      demoUrl: 'https://audirab.vercel.app/',
      smallGridTexts: ['Text 1A', 'Text 1B', 'Text 1C'], // Small grid texts for Project 1
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/300x200?text=Project+2',
      title: 'Project Title 2',
      description: 'Description for Project 2: This project aims to solve specific problems in a unique way.',
      gitUrl: 'https://github.com/user/project2',
      demoUrl: 'https://demo.com/demo2',
      smallGridTexts: ['Text 2A', 'Text 2B', 'Text 2C'], // Small grid texts for Project 2
    },
    {
      id: 3,
      image: 'https://via.placeholder.com/300x200?text=Project+3',
      title: 'Project Title 3',
      description: 'Description for Project 3: A project focused on user experience and functionality.',
      gitUrl: 'https://github.com/user/project3',
      demoUrl: 'https://demo.com/demo3',
      smallGridTexts: ['Text 3A', 'Text 3B', 'Text 3C'], // Small grid texts for Project 3
    },
    {
      id: 4,
      image: 'https://via.placeholder.com/300x200?text=Project+4',
      title: 'Project Title 4',
      description: 'Highlights the innovative features and design principles used.',
      gitUrl: 'https://github.com/user/project4',
      demoUrl: 'https://demo.com/demo4',
      smallGridTexts: ['Text 4A', 'Text 4B', 'Text 4C'], // Small grid texts for Project 4
    },
    {
      id: 5,
      image: 'https://via.placeholder.com/300x200?text=Project+5',
      title: 'Project Title 5',
      description: 'An exploration of the latest technologies and trends.',
      gitUrl: 'https://github.com/user/project5',
      demoUrl: 'https://demo.com/demo5',
      smallGridTexts: ['Text 5A', 'Text 5B', 'Text 5C'], // Small grid texts for Project 5
    },
    {
      id: 6,
      image: 'https://via.placeholder.com/300x200?text=Project+6',
      title: 'Project Title 6',
      description: 'A comprehensive approach to addressing market needs.',
      gitUrl: 'https://github.com/user/project6',
      demoUrl: 'https://demo.com/demo6',
      smallGridTexts: ['Text 6A', 'Text 6B', 'Text 6C'], // Small grid texts for Project 6
    },
  ];

  return (
    <div className="flex flex-col items-center mt-32">
      {/* Title for the projects section */}
      <h1 className="text-white text-4xl font-bold mb-6">Projects</h1> {/* Added title here */}
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Create grid items */}
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative w-full max-w-xs h-[400px] bg-blue-500 rounded-2xl flex flex-col border-2 border-white transition-transform duration-300 hover:scale-105" // Added hover effect classes
          >
            {/* Upper part for the image */}
            <div
              className="h-1/3 bg-cover bg-center rounded-t-2xl"
              style={{
                backgroundImage: `url('${project.image}')`, // Use the image URL from the project object
              }}
            ></div>
            {/* Content container */}
            <div className="h-1/3 flex flex-col justify-between p-4">
              {/* Title on the left side */}
              <div className="text-white text-lg font-bold mb-2">
                {project.title} {/* Display the corresponding title */}
              </div>
              {/* Small rectangles under the title */}
              <div className="flex mb-2 gap-1"> {/* Flex to align small grids */}
                {project.smallGridTexts.map((text, smallIndex) => (
                  <div
                    key={smallIndex}
                    className="w-[70px] h-[25px] bg-green-400 rounded-md flex items-center justify-center text-white text-xs"
                  >
                    {text} {/* Display text for small grid */}
                  </div>
                ))}
              </div>
              {/* Description under the title */}
              <div className="text-white text-sm mb-2">
                {project.description} {/* Display the corresponding description */}
              </div>
              {/* Buttons at the bottom left */}
              <div className="flex space-x-2">
                <a href={project.gitUrl} target="_blank" rel="noopener noreferrer">
                  <button className="bg-yellow-500 text-white w-[70px] h-[25px] rounded hover:bg-yellow-400 text-xs">
                    View Project
                  </button>
                </a>
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                  <button className="bg-red-500 text-white w-[70px] h-[25px] rounded hover:bg-red-400 text-xs">
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
