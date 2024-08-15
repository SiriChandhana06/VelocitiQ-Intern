import React, { useState } from 'react';
import Image from '../Assests/contact us.png';
import toast, { Toaster } from 'react-hot-toast';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.firstName && formData.lastName && formData.email && formData.message) {
      toast.success('Form submitted successfully!');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
      });
    } else {
      toast.error('Please fill out all fields.');
    }
  };

  return (
    <div className='grid grid-cols-1 md:grid-cols-2'>
      <Toaster />
      <div className='md:ml-2 mt-4 lg:mt-10'>
        <div className='flex justify-center items-center'>
          <h2 className="text-4xl md:text-6xl font-bold text-[#674188] dark:text-[#b994d9] mb-6">Get In Touch !</h2>
        </div>
        <div className='mx-14 mt-16 hidden md:block'>
          <img src={Image} alt='image' className='md:w-96 md:h-72 lg:w-auto lg:h-96' />
        </div>
      </div>

      <div className="flex justify-center items-center lg:min-h-screen m-10 ">
        <div className="w-full max-w-lg p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
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
                  value={formData.lastName}
                  onChange={handleChange}
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
                value={formData.email}
                onChange={handleChange}
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
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm dark:bg-gray-900 dark:border-gray-700 dark:text-gray-300 dark:placeholder-gray-500"
                placeholder="Your message..."
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-[#674188] text-white font-semibold rounded-md shadow-sm hover:bg-[#371555] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
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
