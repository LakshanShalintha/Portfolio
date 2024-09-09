"use client"
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon, HomeIcon, UserIcon, DocumentIcon } from '@heroicons/react/24/outline';

const navLinks = [
  {
    title: "About",
    path: "#about",
    icon: <UserIcon className="h-6 w-6" />
  },
  {
    title: "Projects",
    path: "#projects",
    icon: <DocumentIcon className="h-6 w-6" />
  },
  {
    title: "Contact",
    path: "#contact",
    icon: <DocumentIcon className="h-6 w-6" />
  },
];

function NavBar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Function to handle resize events
  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setSidebarOpen(false); // Close the sidebar on larger screens
    }
  };

  useEffect(() => {
    // Add resize event listener
    window.addEventListener('resize', handleResize);

    // Clean up event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <nav className='fixed top-10 left-1/2 transform -translate-x-1/2 z-10 bg-[#412350] bg-opacity-90 rounded-full' style={{ padding: '10px 40px', height: '70px', width: '70%' }}>
        <div className='flex items-center justify-between mx-auto px-4 py-2'>
          {/* Show the menu icon only on small screens */}
          <div className='flex items-center space-x-4'>
            <button 
              onClick={() => setSidebarOpen(!sidebarOpen)} 
              className='md:hidden flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'
            >
              {!sidebarOpen ? <Bars3Icon className="h-5 w-5" /> : <XMarkIcon className="h-5 w-5" />}
            </button>
            <Link href="/" className="text-2xl md:text-3xl text-white font-semibold px-4 bg-white text-black rounded-full">
              LSP
            </Link>
          </div>
          {/* Show links on medium and larger screens, hide on small screens */}
          <ul className="hidden md:flex items-center space-x-6">
            {navLinks.map(link => (
              <li key={link.title}>
                <Link href={link.path} className="text-white hover:text-gray-300">
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Sidebar with responsive width */}
      {sidebarOpen && (
        <div className="fixed top-16 left-0 bg-[#412350] bg-opacity-90 shadow-lg z-20 flex flex-col items-center md:hidden" 
             style={{ 
               width: '5%', // Use viewport width for responsiveness
               maxWidth: '300px', // Set a maximum width
               minWidth: '50px', // Ensure a minimum width
               height: '22vh', // Full height
               borderRadius: '35px',
               padding: '10px' // Add padding to ensure content doesn't touch the edges
             }}>
          <ul className="flex flex-col items-center justify-around h-full py-4 space-y-4">
            {navLinks.map(link => (
              <li key={link.title} className="flex flex-col items-center">
                <Link href={link.path} className="text-white hover:text-gray-300">
                  {link.icon}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default NavBar;
