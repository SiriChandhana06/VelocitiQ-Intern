import React from 'react';
import image1 from '../Assests/Group 111.png'

const Header = () => {
  return (
    <div className='overflow-x-hidden'>
      <div className='relative'>
      <div className='relative '>
        <img src={image1} alt='image' className='h-full w-full'/>
        <a href="#contact">
        <button 
          className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#ed9bfa] text-black h-8 w-21 md:h-16 md:w-48 text-xs md:text-2xl px-4 md:px-8 py-1 md:py-4 rounded-xl mt-6 md:mt-14 ml-4 md:ml-10 lg:mt-24 transition-transform duration-300 hover:scale-110'
        >
          Contact Us!
        </button>
        </a>
      </div>
    </div>
    </div>
  )
}

export default Header
