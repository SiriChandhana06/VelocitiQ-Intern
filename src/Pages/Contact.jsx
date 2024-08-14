import React from 'react';
import Image from '../Assests/contact us.png'

const ContactForm = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2'>
      <div className='mt-10'>
      <div className='flex justify-center items-center'>
        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">Get In Touch !</h2>
      </div>
      <div className='mx-14 mt-16 hidden lg:block'>
        <img src={Image} alt='image' className='w-auto h-96'/>
      </div>
      </div>
    
    <div className="flex justify-center items-center md:min-h-screen">
      <div className="w-full max-w-lg p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        {/* <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Us</h2> */}
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm dark:bg-gray-900 dark:border-gray-700 dark:text-gray-300 dark:placeholder-gray-500"
                required
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm dark:bg-gray-900 dark:border-gray-700 dark:text-gray-300 dark:placeholder-gray-500"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm dark:bg-gray-900 dark:border-gray-700 dark:text-gray-300 dark:placeholder-gray-500"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm dark:bg-gray-900 dark:border-gray-700 dark:text-gray-300 dark:placeholder-gray-500"
              placeholder="Your message..."
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-primary-500 text-black font-semibold rounded-md shadow-sm hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default ContactForm;

