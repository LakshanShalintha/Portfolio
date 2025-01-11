"use client";

import React, { useState, useRef } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion, useInView } from "framer-motion";

const Contact: React.FC = () => {
  const [status, setStatus] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const ref = useRef(null); // Reference for the section
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const isInView = useInView(ref, { triggerOnce: false, threshold: 0.1 }); // Adjust threshold for smoother re-trigger


  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    formData.append("access_key", "eb8ee4a1-569b-4696-9655-47807ca605f4");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });
      const result = await response.json();
      if (result.success) {
        setStatus("Success! Your message has been sent.");
        if (formRef.current) {
          formRef.current.reset();
        }
        setTimeout(() => {
          setStatus(null);
        }, 5000);
      } else {
        setStatus("Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      setStatus("Error submitting the form. Please try again.");
    }
  }

  return (
    <motion.section ref={ref} id="contact" className="py-16 px-[12%] scroll-mt-20"
                    initial={{ opacity: 0, y: -20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto">
        <motion.h2 className="text-center text-5xl font-Ovo font-bold  mb-12"
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}        >Contact Me</motion.h2>
      </div>

      <div className="p-[6px] rounded-md mt-4 mr-8 ml-8">
        <div className="flex flex-col md:flex-row justify-between items-start  p-8 rounded-md">
          <motion.div className=" flex-1 mb-8 md:mb-0 md:pr-8"
                      initial={{opacity: 0 }}
                      whileInView={{opacity: 1 }}
                      transition={{ delay: 0.7, duration: 0.5 }}
          >
            <h2 className=" text-2xl font-semibold mb-4">Let&rsquo;s Connect</h2>
            <p className=" mb-6">
              I&rsquo;m currently looking for new opportunities, my inbox is always
              open. Whether you have a question or just want to say hi, I&apos;ll try
              my best to get back to you!
            </p>

            <div className="flex space-x-4">
              <a
                href="https://github.com/LakshanShalintha"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:text-gray-400"
              >
                <FaGithub size={30} />
              </a>
              <a
                href="https://www.linkedin.com/in/lakshan-shalintha-707bba300/"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:text-gray-400"
              >
                <FaLinkedin size={30} />
              </a>
            </div>
          </motion.div>

          <motion.div className="flex-1 w-full md:w-auto"
                      initial={{opacity: 0 }}
                      whileInView={{opacity: 1 }}
                      transition={{ delay: 0.7, duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} ref={formRef} className="flex flex-col space-y-4">
              <motion.div className="flex flex-col"
                          initial={{ x: -50, opacity: 0 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          transition={{ delay: 1.1, duration: 0.6 }}
              >
                <label htmlFor="email" className=" mb-1">
                  Your email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Your email"
                  className="p-3  border border-gray-400 rounded  focus:outline-none focus:ring-2 focus:ring-gray-400"
                  required
                />
              </motion.div>

              <motion.div className="flex flex-col"
                          initial={{ x: 50, opacity: 0 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          transition={{ delay: 1.1, duration: 0.6 }}
              >
                <label htmlFor="subject" className=" mb-1">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="p-3  border border-gray-400 rounded  focus:outline-none focus:ring-2 focus:ring-gray-400"
                  required
                />
              </motion.div>

              <motion.div className="flex flex-col"
                          initial={{ x: 100, opacity: 0 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          transition={{ delay: 1.1, duration: 0.6 }}
              >
                <label htmlFor="message" className=" mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Message"
                  rows={4}
                  className="p-3  border border-gray-400 rounded  focus:outline-none focus:ring-2 focus:ring-gray-400"
                  required
                ></textarea>
              </motion.div>

              <motion.button
                type="submit"
                className="py-3 px-6 bg-gray-600 rounded hover:bg-gray-400 transition duration-300  font-semibold"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                Send Message
              </motion.button>
            </form>

            {status && (
              <div className={`mt-4 p-4 rounded-md text-black ${status.startsWith("Success") ? "bg-green-600" : "bg-red-600"}`}>
                {status}
              </div>
            )}
          </motion.div>
        </div>
      </div>
      </motion.section>
  );
};

export default Contact;
