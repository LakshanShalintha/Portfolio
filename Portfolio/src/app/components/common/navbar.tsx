"use client";
import Link from "next/link";
import React from "react";
import { HomeIcon, UserIcon, FolderIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

const navLinks = [
  {
    title: "Home",
    path: "#home",
    icon: <HomeIcon className="h-5 w-5 text-white" />,
  },
  {
    title: "About",
    path: "#about",
    icon: <UserIcon className="h-5 w-5 text-white" />,
  },
  {
    title: "Projects",
    path: "#projects",
    icon: <FolderIcon className="h-5 w-5 text-white" />,
  },
  {
    title: "Contact",
    path: "#contact",
    icon: <EnvelopeIcon className="h-5 w-5 text-white" />,
  },
];

function NavBar() {
  return (
    <nav className="fixed right-10 top-1/3 z-10">
      {/* Circle-like background for the nav */}
      <div
        className="bg- rounded-full h-[300px] w-[50px] shadow-lg flex flex-col justify-center items-center"
        style={{
          borderRadius: "100px",
          padding: "20px",
          
        }}
      >
        <ul className="flex flex-col items-center space-y-4">
          {navLinks.map((link) => (
            <li key={link.title} className="relative group">
              <Link href={link.path}>
                <div className="flex items-center p-2 rounded-full transition-all duration-300 bg-purple-600 text-white group-hover:bg-purple-700 group-hover:text-white">
                  {/* Container for icon and text */}
                  <div className="flex items-center space-x- group-hover:space-x-1">
                    {/* Text visible on hover */}
                    <span className="hidden group-hover:inline-block  text-white px-2 py-1 rounded-full whitespace-nowrap">
                      {link.title}
                    </span>
                    {link.icon}
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
