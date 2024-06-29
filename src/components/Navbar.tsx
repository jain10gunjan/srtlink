"use client"
import { useState } from 'react';
import Banner from './Banner';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
    <header className="sticky top-4 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full">
      <nav className="relative max-w-[66rem] w-full bg-neutral-800 rounded-[28px] py-3 ps-5 pe-2 md:flex md:items-center md:justify-between md:py-0 mx-2 lg:mx-auto" aria-label="Global">
        <div className="flex items-center justify-between p-4">
          <a className="flex-none rounded-md text-xl text-white inline-block font-semibold focus:outline-none focus:opacity-80" href="/" aria-label="srtlink">
            SrtLink
          </a>
        </div>
      </nav>
    </header>

    <Banner/>
    </>

  );
}
