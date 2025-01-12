"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "motion/react";

function MySection({ isDarkMode }: { isDarkMode: boolean }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });

    return (
        <section id="home" className="flex flex-col items-center text-center py-16">
            <motion.div
                className="mt-16"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            >
                <img
                    src="/images/Myimages/my-image.png"
                    alt="Profile"
                    className="w-64 h-64 rounded-full mb-4 shadow-lg"
                />
            </motion.div>

            <motion.h2
                ref={ref}
                className="text-lg font-medium"
                initial={{ opacity: 0, y: -20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                Hi! I&rsquo;m Laksha Shalintha
            </motion.h2>

            <motion.h1
                initial={{ y: -30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-4xl md:text-5xl font-bold leading-tight my-4"
            >
                Full Stack Developer
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="max-w-2xl mx-auto mb-8"
            >
                I&rsquo;m a Software Engineer with expertise in mobile and web development, passionate about building
                user-friendly and efficient digital solutions. Welcome to my portfolio, where innovation meets
                technology.
            </motion.p>

            <div className="flex space-x-4">
                <motion.button
                    className={`hidden md:flex px-6 py-1 rounded-full transition ${
                        isDarkMode
                            ? "border border-white hover:bg-gray-600"
                            : "border border-gray-400 hover:bg-gray-400 hover:text-white"
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                    <Link href="#contact">Connect Me →</Link>
                </motion.button>

                <motion.button
                    className="text-black bg-white border border-black py-0.2 px-8 rounded-full shadow hover:bg-gray-400 transition"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                >
                    <a href="/CV/Lakshan_Shalintha.pdf" download="Lakshan_Shalintha.pdf">
                        My Resume ↗
                    </a>
                </motion.button>
            </div>
        </section>
    );
}

// Ensure the correct default export is a page
export default function Page() {
    return <MySection isDarkMode={false} />;
}
