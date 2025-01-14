"use client";
import React from 'react';
import Image from 'next/image';
import { useRef } from "react";
import { motion, useInView } from "framer-motion";



function MyServices() {
    const ref = useRef(null); // Reference for the section
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const isInView = useInView(ref, { triggerOnce: false, threshold: 0.1 }); // Adjust threshold for smoother re-trigger

    const servicesData = [
        {
            title: 'Web design',
            description: 'Web development is the process of building, programming...',
            image: '/images/Common/Web.png',
        },
        {
            title: 'Mobile app',
            description: 'Mobile app development involves building applications...',
            image: '/images/Common/Mobile.png',
        },
        {
            title: 'UI/UX design',
            description: 'UI/UX design focuses on user experience and interface...',
            image: '/images/Common/UIUX.png',
        },
    ];

    return (
        <motion.section ref={ref} id="services" className="py-16 px-[12%] scroll-mt-20"
                 initial={{ opacity: 0, y: -20 }}
                 animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                 transition={{ duration: 0.6 }}
        >
            <div className="container mx-auto">
                <motion.h2 className="text-center text-5xl font-Ovo font-bold mb-12"
                           initial={{ y: -20, opacity: 0 }}
                           whileInView={{ y: 0, opacity: 1 }}
                           transition={{ delay: 0.3, duration: 0.5 }}
                >My Services</motion.h2>
                <motion.p className="text-center mb-12"
                          initial={{opacity: 0 }}
                          whileInView={{opacity: 1 }}
                          transition={{ delay: 0.7, duration: 0.5 }}
                >
                    I specialize in crafting modern, responsive websites, developing cross-platform mobile applications, <br/> and designing user-centric interfaces that blend aesthetics with functionality to deliver seamless digital experiences.
                </motion.p>

                <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                >
                    {servicesData.map((service, index) => (
                        <div
                            key={index}
                            className="border border-gray-400 rounded-xl p-6 flex flex-col gap-4 hover:bg-lightHover hover:-translate-y-1 duration-200 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50"
                        >
                            {/* Image */}
                            <div className="flex justify-left mb-4">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    width={80} // Adjust the width as needed
                                    height={80} // Adjust the height as needed
                                    className="rounded-lg"
                                />
                            </div>

                            {/* Title */}
                            <h3 className="text-lg font-semibold text-lrft">{service.title}</h3>

                            {/* Description */}
                            <p className="text-sm text-left">{service.description}</p>

                            {/* Read more link */}
                            <button className="text-left">Read more →</button>
                        </div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
}

export default MyServices;
