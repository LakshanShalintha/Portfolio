"use client";

import { useState, useEffect } from "react";
import Footer from "./components/Common/Footer";
import NavBar from "./components/Common/NavBar";

import MySection from "./components/Screens/mysection/page";


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
            <section id="/" ><MySection isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/></section>

            <Footer/>
        </>
    );
}
