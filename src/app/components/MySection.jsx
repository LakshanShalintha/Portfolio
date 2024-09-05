import React from 'react'
import Image from 'next/image' 

function MySection() {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white text-4xl sm:text-6xl lg:text-6xl  mb-4 font-extrabold"> 
            Hello, I'm Lakshan
          </h1>
          <p className='text-gray-100 text-base sm:text-lg mb-6 lg:text-xl'>
            I'm dcide gedbug hbuhde b uedbue c ug uef hdohh eefiueheur urierio ro3
          </p>
          <dev>
            <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white'>
                Contact Me
            </button>
            <button className='px-6 py-3 w-full sm:w-fit rounded-full bg-transparent hover:bg-slate-800 text-white border border-white mt-3 justify-center'>
                Downloard CV
            </button>
          </dev>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#090909]  w-[350px] h-[350px] lg:w[400px] lg:h[400px] relative">
            <Image
              src="/images/Myimages/my-image.png"
              alt="my image"
              className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default MySection
