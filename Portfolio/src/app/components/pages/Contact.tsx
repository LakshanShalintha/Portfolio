"use client"; 

import React, { useState, useRef } from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact: React.FC = () => {
  const [status, setStatus] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

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
    <div id="contact">
      <div className="text-center py-10 mt-20">
        <h1 className="text-4xl font-bold text-white mt-12">Contact Me</h1>
      </div>

      <div className="bg-gradient-to-r from-[rgb(107,3,252)] via-[#8a30b8] to-[#a481b6] p-[6px] rounded-md mt-4">
        <div className="flex flex-col md:flex-row justify-between items-start bg-black text-white p-8 rounded-md">
          <div className="flex-1 mb-8 md:mb-0 md:pr-8">
            <h2 className="text-2xl font-semibold mb-4">Let&rsquo;s Connect</h2>
            <p className="text-gray-400 mb-6">
              I&rsquo;m currently looking for new opportunities, my inbox is always
              open. Whether you have a question or just want to say hi, I&apos;ll try
              my best to get back to you!
            </p>

            <div className="flex space-x-4">
              <a
                href="https://github.com/LakshanShalintha"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400"
              >
                <FaGithub size={30} />
              </a>
              <a
                href="https://www.linkedin.com/in/lakshan-shalintha-707bba300/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400"
              >
                <FaLinkedin size={30} />
              </a>
            </div>
          </div>

          <div className="flex-1 w-full md:w-auto">
            <form onSubmit={handleSubmit} ref={formRef} className="flex flex-col space-y-4">
              <div className="flex flex-col">
                <label htmlFor="email" className="text-white mb-1">
                  Your email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Your email"
                  className="p-3 bg-gray-800 border border-gray-700 rounded text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="subject" className="text-white mb-1">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="p-3 bg-gray-800 border border-gray-700 rounded text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="message" className="text-white mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Message"
                  rows={4}
                  className="p-3 bg-gray-800 border border-gray-700 rounded text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="py-3 px-6 bg-purple-600 rounded hover:bg-purple-700 transition duration-300 text-white font-semibold"
              >
                Send Message
              </button>
            </form>

            {status && (
              <div className={`mt-4 p-4 rounded-md text-white ${status.startsWith("Success") ? "bg-green-600" : "bg-red-600"}`}>
                {status}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
