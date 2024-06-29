"use client"
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-4 inset-x-0 flex flex-wrap justify-between z-50 w-full bg-neutral-800 rounded-[28px] mx-2 lg:mx-auto">
      <nav className="w-full py-3 px-5 flex justify-between items-center">
        <a href="../templates/agency/index.html" aria-label="Preline" className="text-xl font-semibold text-white">
          <svg className="w-28 h-auto" width="116" height="32" viewBox="0 0 116 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* SVG paths here */}
          </svg>
        </a>
        <button
          type="button"
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-controls="navbar-collapse"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <svg className={`${isOpen ? 'hidden' : 'block'} w-6 h-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
          <svg className={`${isOpen ? 'block' : 'hidden'} w-6 h-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className={`md:flex md:items-center ${isOpen ? 'block' : 'hidden'}`} id="navbar-collapse">
          <a href="../templates/agency/index.html" className="block py-2 px-3 text-sm text-white hover:text-neutral-300">Home</a>
          <a href="#" className="block py-2 px-3 text-sm text-white hover:text-neutral-300">Stories</a>
          <a href="#" className="block py-2 px-3 text-sm text-white hover:text-neutral-300">Reviews</a>
          <a href="#" className="block py-2 px-3 text-sm text-white hover:text-neutral-300">Approach</a>
          <div className="relative group">
            <button className="flex items-center py-2 px-3 text-sm text-white hover:text-neutral-300">
              About
              <svg className="ml-1 w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="hidden group-hover:block absolute bg-neutral-800 text-white rounded-lg mt-2 py-2 w-48">
              <a href="#" className="block py-2 px-3 text-sm hover:text-neutral-300">About</a>
              <a href="#" className="block py-2 px-3 text-sm hover:text-neutral-300">Downloads</a>
              <a href="#" className="block py-2 px-3 text-sm hover:text-neutral-300">Team Account</a>
            </div>
          </div>
          <a href="../templates/agency/index.html#contact" className="group inline-flex items-center gap-x-2 py-2 px-3 bg-[#ff0] text-neutral-800 rounded-full">
            Contact us
          </a>
        </div>
      </nav>
    </header>
  );
}
