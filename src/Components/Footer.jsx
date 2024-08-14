import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center bg-[#f3e1f4] dark:bg-gray-900 text-base-content rounded p-10 shadow-md shadow-black dark:shadow-white">
                <nav className="grid grid-flow-col gap-4">
                    <a href='#home' className="link link-hover text-sm  md:text-xl text-[#674188] dark:text-gray-400">Home</a>
                    <a href='#about' className="link link-hover text-sm  md:text-xl text-[#674188] dark:text-gray-400">About </a>
                    <a href='#services' className="link link-hover text-sm  md:text-xl text-[#674188] dark:text-gray-400">Services</a>
                    <a href='#contact' className="link link-hover text-sm  md:text-xl text-[#674188] dark:text-gray-400">Contact</a>
                </nav>
                <div className="flex-shrink-0 flex items-center">
            <span className="text-xl md:text-4xl font-bold text-[#AC68E8] dark:text-[#ffffff]">Altogether</span>
          </div>
                <aside>
                    <p className='text-[#674188] dark:text-gray-400'>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
                </aside>
            </footer>
        </div>
    )
}

export default Footer

