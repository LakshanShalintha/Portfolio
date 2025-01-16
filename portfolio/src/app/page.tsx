"use client";

import { useState, useEffect } from "react";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import MySection from "./components/sections/HeroSection";
import MyServices from "./components/sections/Services";
import NavBar from "./components/sections/NavBar";
import Footer from "./components/sections/Footer";
import Projects from "@/app/components/sections/Projects";

export default function Home() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        if (
            localStorage.theme === "dark" ||
            (!("theme" in localStorage) &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
            setIsDarkMode(true);
        } else {
            setIsDarkMode(false);
        }
    }, []);

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add("dark");
            localStorage.theme = "dark";
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.theme = "";
        }
    }, [isDarkMode]);

    return (
        <>
            <NavBar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
            <div className={`relative h-full w-full ${isDarkMode ? "bg-black" : ""}`}>
                {isDarkMode && (
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
                    </div>
                )}
                <section id="/" >
                    <MySection isDarkMode={false} />
                </section>
                <section id="about" >
                    <About />
                </section>
                <section id="services" >
                    <MyServices />
                </section>
                <section id="project" >
                    <Projects />
                </section>
                <section id="contact" >
                    <Contact />
                </section>
                <Footer />
            </div>
        </>
    );
}

