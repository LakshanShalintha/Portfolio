"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

function NavBar({
                  isDarkMode,
                  setIsDarkMode,
                }: {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
      <nav
          className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${
              isScroll
                  ? isDarkMode
                      ? "bg-gray-800 text-white bg-opacity-100 shadow-sm"
                      : "bg-white text-black bg-opacity-100 shadow-sm"
                  : isDarkMode
                      ? "bg-transparent text-white"
                      : "bg-transparent text-black"
          }`}
      >
        {/* Logo */}
          <div className="text-2xl font-bold">
              <Link href="#home">
                  NLS<span className="text-red-500"> .</span>
              </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div
              className={`hidden md:flex items-center ${
                  isDarkMode ? "bg-gray-700" : "bg-gray-100"
            } px-6 py-2 rounded-full shadow-sm`}
        >
          <ul className="flex space-x-8">
            <li>
              <a
                  href="#home"
                  className={`font-medium hover:opacity-70 transition ${
                      isDarkMode ? "text-white" : "text-black"
                  }`}
              >
                Home
              </a>
            </li>
            <li>
              <a
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    const projectSection = document.getElementById("about");
                    if (projectSection) {
                      const offset = 80; // Adjust this value based on your nav height
                      const top = projectSection.getBoundingClientRect().top + window.scrollY - offset;
                      window.scrollTo({top, behavior: "smooth"});
                    }
                  }}
                  className={`font-medium hover:opacity-70 transition ${
                      isDarkMode ? "text-white" : "text-black"
                  }`}
              >
                About
              </a>

            </li>
            <li>
              <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault();
                    const projectSection = document.getElementById("services");
                    if (projectSection) {
                      const offset = 80; // Adjust this value based on your nav height
                      const top = projectSection.getBoundingClientRect().top + window.scrollY - offset;
                      window.scrollTo({top, behavior: "smooth"});
                    }
                  }}
                  className={`font-medium hover:opacity-70 transition ${
                      isDarkMode ? "text-white" : "text-black"
                  }`}
              >
                Services
              </a>

            </li>
            <li>
              <a
                  href="#project"
                  onClick={(e) => {
                    e.preventDefault();
                    const projectSection = document.getElementById("project");
                    if (projectSection) {
                      const offset = 80; // Adjust this value based on your nav height
                      const top = projectSection.getBoundingClientRect().top + window.scrollY - offset;
                      window.scrollTo({top, behavior: "smooth"});
                    }
                  }}
                  className={`font-medium hover:opacity-70 transition ${
                      isDarkMode ? "text-white" : "text-black"
                  }`}
              >
                Projects
              </a>

            </li>
            <li>
              <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    const projectSection = document.getElementById("contact");
                    if (projectSection) {
                      const offset = 80; // Adjust this value based on your nav height
                      const top = projectSection.getBoundingClientRect().top + window.scrollY - offset;
                      window.scrollTo({top, behavior: "smooth"});
                    }
                  }}
                  className={`font-medium hover:opacity-70 transition ${
                      isDarkMode ? "text-white" : "text-black"
                  }`}
              >
                Contact
              </a>

            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-6">
          {/* Dark Mode Toggle */}
          <button
              onClick={() => setIsDarkMode((prev: boolean) => !prev)}
              className={`p-2 rounded-full transition ${
                  isDarkMode ? "bg-gray-200 hover:bg-gray-400" : "bg-gray-100 hover:bg-gray-200"
              }`}
          >
            <img
                src={isDarkMode ? "/images/Common/Light.png" : "/images/Common/Dark.png"}
                alt={isDarkMode ? "Light Mode Icon" : "Dark Mode Icon"}
                className="h-6 w-6"
            />
          </button>

          {/* Contact Button (Desktop Only) */}
          <button
              className={`hidden md:flex px-6 py-1 rounded-full transition ${
                  isDarkMode
              ? "text-white border border-white hover:bg-gray-600"
              : "text-gray-700 border border-gray-400 hover:bg-gray-400 hover:text-white"}`}>
              <Link href="#contact">Contact ↗</Link>
          </button>

          {/* Menu Icon (Mobile Only) */}
          <button
              onClick={toggleMenu}
              className={`p-2 rounded-md transition ${
                  isDarkMode ? "bg-gray-100 hover:bg-gray-600" : " hover:bg-gray-200"
              } md:hidden`}
          >
            <img
                src="/images/Common/Menu.png"
                alt="Menu Icon"
                className="h-6 w-6"
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <ul
            className={`fixed top-0 right-0 h-screen w-44 ${
                isDarkMode ? "bg-gray-800" : "bg-rose-50 text-gray-700"
            } z-50 flex flex-col gap-4 py-10 px-8 shadow-lg transition-transform duration-500 ${
                isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          {/* Close Icon */}
          <div className="absolute right-6 top-6">
            <button onClick={closeMenu} className="cursor-pointer">
              <img
                  src="/images/Common/Close.png"
                  alt="Close Icon"
                  className="h-6 w-6"
              />
            </button>
          </div>

          {/* Menu Links */}
          <li>
            <a href="#home" className="hover:opacity-70">
              Home
            </a>
          </li>
            <li>
                <a
                    href="#about"
                    onClick={(e) => {
                        e.preventDefault();
                        const projectSection = document.getElementById("about");
                        if (projectSection) {
                            const offset = 80; // Adjust this value based on your nav height
                            const top = projectSection.getBoundingClientRect().top + window.scrollY - offset;
                            window.scrollTo({top, behavior: "smooth"});
                        }
                    }}
                    className={`font-medium hover:opacity-70 transition ${
                        isDarkMode ? "text-white" : "text-black"
                    }`}
                >
                    About
                </a>
            </li>
            <li>
                <a
                    href="#services"
                    onClick={(e) => {
                        e.preventDefault();
                        const projectSection = document.getElementById("services");
                        if (projectSection) {
                            const offset = 80; // Adjust this value based on your nav height
                            const top = projectSection.getBoundingClientRect().top + window.scrollY - offset;
                            window.scrollTo({top, behavior: "smooth"});
                        }
                    }}
                    className={`font-medium hover:opacity-70 transition ${
                        isDarkMode ? "text-white" : "text-black"
                    }`}
                >
                    Services
                </a>
            </li>
            <li>
                <a
                    href="#project"
                    onClick={(e) => {
                        e.preventDefault();
                        const projectSection = document.getElementById("project");
                        if (projectSection) {
                            const offset = 80; // Adjust this value based on your nav height
                            const top = projectSection.getBoundingClientRect().top + window.scrollY - offset;
                            window.scrollTo({top, behavior: "smooth"});
                        }
                    }}
                    className={`font-medium hover:opacity-70 transition ${
                        isDarkMode ? "text-white" : "text-black"
                    }`}
                >
                    Projects
                </a>
            </li>
            <li>
                <a
                    href="#contact"
                    onClick={(e) => {
                        e.preventDefault();
                        const projectSection = document.getElementById("contact");
                        if (projectSection) {
                            const offset = 80; // Adjust this value based on your nav height
                            const top = projectSection.getBoundingClientRect().top + window.scrollY - offset;
                            window.scrollTo({top, behavior: "smooth"});
                        }
                    }}
                    className={`font-medium hover:opacity-70 transition ${
                        isDarkMode ? "text-white" : "text-black"
                    }`}
                >
                    Contact
                </a>
            </li>
        </ul>
      </nav>
  );
}

export default NavBar;
