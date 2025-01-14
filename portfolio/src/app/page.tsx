"use client";

import { useState, useEffect } from "react";
import Footer from "./components/common/Footer";
import NavBar from "./components/common/NavBar";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import MySection from "./components/sections/HeroSection";
import Projects from "./components/sections/Projects";
import MyServices from "./components/sections/Services";

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
            <section id="project" ><Projects/></section>
            <section id="contact" ><Contact/></section>
            <Footer/>
        </>
    );
}
