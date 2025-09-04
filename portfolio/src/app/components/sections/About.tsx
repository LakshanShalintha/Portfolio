"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

function About() {
  const ref = useRef(null); // Reference for the section
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const isInView = useInView(ref, { triggerOnce: false, threshold: 0.1 }); // Adjust threshold for smoother re-trigger

  return (
      <motion.section
          ref={ref}
          id="about"
          className="py-16 px-[12%] scroll-mt-20 z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
      >
        <motion.h2 className="text-center text-5xl font-Ovo font-bold mb-12 z-10"
                   whileInView={{ opacity: 1, y: 0 }}
                   initial={{ opacity: 0, y: -100 }}
                   transition={{ duration: 0.5 }}
        >
          About me
        </motion.h2>

        <motion.div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
        >
          {/* Profile Image */}
          <motion.div className="w-64 sm:w-80 rounded-3xl max-none z-10"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6 }}
          >
            <Image
                src="/images/Myimages/About_img.jpeg"
                alt="User"
                width={320}
                height={350}
                className="w-full rounded-3xl"
            />
          </motion.div>

          {/* Text Content */}
          <div className="flex-1">
            <p className="text-lg mb-12 z-10">
              I am an experienced Frontend Developer with over a decade of
              professional expertise in the field. Throughout my career, I have
              had the privilege of collaborating with prestigious organizations,
              contributing to their success and growth.
            </p>

            {/* Cards Section */}
            <motion.div className="grid grid-cols-1 sm:grid-cols-3 gap-6 justify-items-center sm:justify-items-start z-10"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1 }}
            >
              {/* Card 1 */}
              <motion.div
                  className="border border-gray-400 w-60 h-56 rounded-xl p-6 shadow-md hover:bg-lightHover hover:-translate-y-1 duration-200 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50 z-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6 }}
              >
                <div className="text-2xl mb-4 z-10">{"</>"}</div>
                <h3 className="text-lg font-semibold mb-2 z-10">Languages</h3>
                <p className="text-sm z-10">
                  C, JavaScript, TypeScript, Java, PHP, Dart, HTML
                </p>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                  className=" z-10 border border-gray-400 w-60 h-56 rounded-xl p-6 shadow-md hover:bg-lightHover hover:-translate-y-1 duration-200 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.8 }}
              >
                <div className="text-2xl mb-4 z-10">🎓</div>
                <h3 className="text-lg font-semibold mb-2 z-10">Education</h3>
                <p className="text-sm z-10">
                  B.Sc (Hons) in Computing & Information Systems, Sabaragamuwa
                  University of Sri Lanka
                </p>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                  className="z-10 relative border border-gray-400 w-60 h-56 rounded-xl p-6 shadow-md hover:bg-lightHover hover:-translate-y-1 duration-200 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 1 }}
              >
                <div className="text-2xl mb-4 z-10">📁</div>
                <h3 className="text-lg font-semibold mb-2 z-10">Projects</h3>
                <p className="text-sm z-10">Built more than 5 projects</p>

                {/* Arrow Icon */}
                <div
                    className="text-3xl absolute bottom-2 right-8 cursor-pointer"
                    onClick={() => {
                      const projectSection = document.getElementById("project");
                      if (projectSection) {
                        projectSection.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                >
                  →
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Tools Section */}
        <motion.ul className="flex items-center justify-center gap-3 sm:gap-5 -mt-10 z-10"
                   initial={{ opacity: 0 }}
                   whileInView={{ opacity: 1 }}
                   transition={{ delay: 1.5, duration: 0.6 }}
        >
          {[
            "/images/Technology/c.png",
            "/images/Technology/ts.png",
            "/images/Technology/react.png",
            "/images/Technology/dart.png",
            "/images/Technology/css.png",
            "/images/Technology/laravel.png",
            "/images/Technology/php.png",
            "/images/Technology/figma.png",
            "/images/Technology/Firebase.png",
            "/images/Technology/github.png",
            "/images/Technology/mysql.png",
            "/images/Technology/tailwind.png",
          ].map((tool, index) => (
              <motion.li
                  key={index}
                  className=" z-10 flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Image
                    src={tool}
                    alt="Tool"
                    width={28}
                    height={28}
                    className="w-5 sm:w-7"
                />
              </motion.li>
          ))}
        </motion.ul>
      </motion.section>
  );
}

export default About;
