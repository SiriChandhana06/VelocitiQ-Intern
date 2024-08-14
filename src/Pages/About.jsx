import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-[#f3e1f4] dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-[#674188] dark:text-[#b994d9]">About Us</h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
            Empowering students and professionals to achieve their goals through personalized and cutting-edge educational services.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-[#674188] dark:text-[#b994d9] mb-4">Our Mission</h3>
            <p className="text-gray-600 text-xl dark:text-gray-400">
              Our mission is to provide high-quality, accessible, and flexible learning experiences that enable students and professionals to thrive in an ever-changing world. Whether you’re looking to advance your career, learn new skills, or explore new subjects, we’re here to guide you every step of the way.
            </p>
          </div>
          <div className='hidden lg:block ml-48 border-l-2 border-black dark:border-white '>
          </div>
          <div >
            <h3 className="text-2xl font-bold text-[#674188] dark:text-[#b994d9] mb-4">Why Choose Us?</h3>
            <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400 text-xl">
              <li>Expert instructors with real-world experience</li>
              <li>Comprehensive curriculum tailored to your needs</li>
              <li>Flexible learning options: online, in-person, and hybrid</li>
              <li>Personalized support and mentorship</li>
              <li>Community-driven learning environment</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 text-center">
          <a
            href="#services"
            className="inline-block bg-[#674188] text-white  font-bold py-4 px-8 rounded-xl transition-transform duration-300 hover:scale-110"
          >
            Explore Our Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
