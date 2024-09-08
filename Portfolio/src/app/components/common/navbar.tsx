import Link from 'next/link';
import React from 'react';

function NavBar() {
  return (
    <nav>
      <div className='flex flex-wrap items-center justify-between mx-auto p-8'>
        <Link href="/" className="text-5xl text-white font-semibold">
          LSP
        </Link>
        <div className='menu hidden md:block md:w-auto' id="navbar">
          <ul className='flex space-x-8'>
            <li>
              <Link href="#about" className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link href="#services" className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded hover:text-white">
                Services
              </Link>
            </li>
          </ul>   
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
