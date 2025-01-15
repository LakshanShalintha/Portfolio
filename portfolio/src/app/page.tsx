"use client";

import { useState, useEffect } from "react";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import MySection from "./components/sections/HeroSection";
import MyServices from "./components/sections/Services";
import NavBar from "./components/sections/NavBar";
import Footer from "./components/sections/Footer";
import Project from "@/app/components/sections/Projects/Project";

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
            <section id="/" ><MySection /></section>
            <section id="about" ><About /></section>
            <section id="services" ><MyServices/></section>
            <section id="project" ><Project /></section>
            <section id="contact" ><Contact/></section>
            <Footer/>
        </>
    );
}
