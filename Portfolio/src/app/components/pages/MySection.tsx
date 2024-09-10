"use client"; // Add this line at the top

import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

function MySection() {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white text-4xl sm:text-6xl lg:text-6xl mb-4 font-extrabold mt-12">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b171d1] to-[#8437f0]">
              Hello, I'm Lakshan
            </span>
          </h1>
          <div className="text-white text-3xl sm:text-4xl lg:text-4xl">
            <TypeAnimation
              sequence={[
                'Web Developer',
                1000, 
                'Mobile Developer',
                1000,
                '1',
                1000,
                '2',
                1000
              ]}
              wrapper="div"
              speed={50}
              style={{ fontSize: '1em', display: 'inline-block' }}
              repeat={Infinity}
            />
          </div>

          <p className='text-gray-200 text-base sm:text-lg mb-6 lg:text-xl mt-12'>
          I'm a Software Engineer with expertise in mobile and web development, passionate about building user-friendly and efficient digital solutions. Welcome to my portfolio, where innovation meets technology.
          </p>
          <div>
            <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-[#a481b6] via-[#8a30b8] to-[#6b03fc] hover:bg-slate-200 text-white'>                
              Contact Me
            </button>
            <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-[#a481b6] via-[#8a30b8] to-[#6b03fc] hover:bg-slate-800 text-white mt-3 justify-center'>
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-4 py-2">
                Download CV
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-2 lg:mt-1">
          <div className="bg-[#161515] w-[350px] h-[350px] lg:w-[350px] lg:h-[400px] relative mt-20 shadow-[0_0_25px_1px_rgba(255,255,255,0.5)]">
            <Image
               src="/images/Myimages/my-image.png"
              alt="my image"
              className='absolute bottom-0 left-1/2 transform -translate-x-1/2'
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default MySection;
