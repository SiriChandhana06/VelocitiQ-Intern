import React from 'react';
import ProgrammingLanguage from '../Json/Services';

const Services = () => {
  return (
    <div className="bg-[#f3e1f4] dark:bg-gray-900 ">
        <div>
            <h1 className='text-4xl font-extrabold text-[#674188] dark:text-[#b994d9] text-center'>Our Services</h1>
        </div>
      <div className="flex overflow-x-scroll scrollbar-hide space-x-6 md:space-x-10 p-10 md:p-20">
        {ProgrammingLanguage.map((ProgrammingLanguage, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-80 bg-white shadow-lg rounded-xl overflow-hidden "
          >
            <div>
              <img src={ProgrammingLanguage.image} alt={ProgrammingLanguage.title} className="w-full h-56 object-cover" />
            </div>
            <div className="bg-[#17212E] p-4 text-white">
              <div className="mb-4 flex gap-4 justify-between">
                <h1 className="text-xl dark:text-white font-bold">{ProgrammingLanguage.title}</h1>
                <button
                  onClick={() => window.location.href = ProgrammingLanguage.link}
                  className="px-2 py-1 md:px-4 md:py-2 bg-[#674188] text-white font-semibold rounded-xl transform transition-transform hover:scale-105"
                >
                  View Course
                </button>
              </div>
              <div className="flex justify-between mb-4">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                    <path d="m19 7-1.343 1.343A8 8 0 1 0 6.343 19.657A8 8 0 0 0 17.657 8.343M12 10v4M9 3h6"/>
                  </svg>
                  <h1 className="ml-2">{ProgrammingLanguage.hours}</h1>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                    <g>
                      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0m.6-3h16.8M3.6 15h16.8"/>
                      <path d="M11.5 3a17 17 0 0 0 0 18m1-18a17 17 0 0 1 0 18"/>
                    </g>
                  </svg>
                  <h1 className="ml-2">{ProgrammingLanguage.lang}</h1>
                </div>
              </div>
              <div>
                <h1 className="text-md">Skill you’ll gain: {ProgrammingLanguage.description}</h1>
              </div>
            </div>
            <div className="bg-[#674188] flex justify-center">
              <h1 className="text-white text-lg font-bold">You Save Upto {ProgrammingLanguage.off}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
