import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className={`bg-[#f3e1f4] dark:bg-gray-800 shadow-md`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-xl md:text-4xl font-bold text-[#AC68E8] dark:text-[#ffffff]">Altogether</span>
          </div>
          <div className="flex items-center">
            <div className="hidden md:flex md:space-x-10">
              <a href="#home" className="text-[#674188] dark:text-[#ffffff] hover:text-gray-600 dark:hover:text-gray-300 text-xl font-semibold">Home</a>
              <a href="#about" className="text-[#674188] dark:text-[#ffffff] hover:text-gray-600 dark:hover:text-gray-300 text-xl font-semibold">About</a>
              <a href="#services" className="text-[#674188] dark:text-[#ffffff] hover:text-gray-600 dark:hover:text-gray-300 text-xl font-semibold">Services</a>
              <a href="#contact" className="text-[#674188] dark:text-[#ffffff] hover:text-gray-600 dark:hover:text-gray-300 text-xl font-semibold">Contact</a>
              <button
                onClick={toggleDarkMode}
                className="bg-[#674188] text-white hover:bg-[#371555] dark:bg-gray-600 dark:text-white px-3 py-1 rounded-xl"
              >
                {darkMode ? 'Light Mode' : 'Dark Mode'}
              </button>
            </div>
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="text-gray-800 dark:text-white focus:outline-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#home" className="text-[#674188] dark:text-[#ffffff] block px-3 py-2 rounded-md text-base font-medium">Home</a>
          <a href="#about" className="text-[#674188] dark:text-[#ffffff] block px-3 py-2 rounded-md text-base font-medium">About</a>
          <a href="#services" className="text-[#674188] dark:text-[#ffffff] block px-3 py-2 rounded-md text-base font-medium">Services</a>
          <a href="#contact" className="text-[#674188] dark:text-[#ffffff] block px-3 py-2 rounded-md text-base font-medium">Contact</a>
          <button
            onClick={toggleDarkMode}
            className="bg-[#674188] text-white hover:bg-[#371555] dark:bg-gray-600 dark:text-white block w-full text-left px-3 py-2 rounded-md text-base font-medium"
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
