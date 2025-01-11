"use client";

import { useState, useEffect } from "react";
import Footer from "./components/Common/Footer";
import NavBar from "./components/Common/NavBar";
import About from "./components/Screens/about/page";
import Contact from "./components/Screens/contact/page";
import MySection from "./components/Screens/mysection/page";
import Projects from "./components/Screens/projets/page";
import MyServices from "./components/Screens/services/page";

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
            <section id="/" ><MySection isDarkMode={isDarkMode} /></section>
            <section id="about" ><About /></section>
            <section id="services" ><MyServices/></section>
            <section id="project" ><Projects/></section>
            <section id="contact" ><Contact/></section>
            <Footer/>
        </>
    );
}
