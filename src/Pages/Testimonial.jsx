import React, { useState, useEffect, useRef } from 'react';
import img1 from '../Assests/john.jpeg';
import img2 from '../Assests/jane.jpeg';
import img3 from '../Assests/alex.jpg';

const testimonials = [
  {
    name: "John Doe",
    profession: "Software Engineer",
    image: img1,
    description: "This service exceeded my expectations. The team was professional and the results were outstanding.",
    rating: 5,
  },
  {
    name: "Jane Smith",
    profession: "Project Manager",
    image: img2,
    description: "Amazing experience! Highly recommend to anyone looking for quality and professionalism & The team was incredible.",
    rating: 5,
  },
  {
    name: "Alex Johnson",
    profession: "UI/UX Designer",
    image: img3,
    description: "The team was incredibly attentive and delivered exactly what I needed. Their understanding of design was top-notch.",
    rating: 4,
  },
];

const TestimonialCard = ({ testimonial, active }) => (
  <div
    className={`relative flex-shrink-0 w-64 sm:w-72 md:w-80 lg:w-96 h-full p-6 bg-white shadow-lg rounded-xl overflow-hidden transition-transform duration-500 transform ${
      active ? 'scale-110 z-30' : 'scale-100 hover:scale-105'
    }`}
  >
    <div className="flex items-center mb-4">
      <img
        src={testimonial.image}
        alt={testimonial.name}
        className="w-16 h-16 rounded-full object-cover mr-4"
      />
      <div>
        <h3 className="text-lg md:text-xl font-bold text-[#674188]">{testimonial.name}</h3>
        <p className="text-gray-400 text-lg md:text-xl ">{testimonial.profession}</p>
      </div>
    </div>
    <p className="text-gray-600 mb-4 text-xl px-4 ">{testimonial.description}</p>
    <div className="flex justify-center">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          fill={i < testimonial.rating ? "#674188" : "none"}
          stroke="#674188"
          viewBox="0 0 24 24"
          className="w-8 h-8"
        >
          <path d="M12 17.27l5.18 3.73-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73-1.64 7.03L12 17.27z" />
        </svg>
      ))}
    </div>
  </div>
);

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const scrollPosition = (containerWidth * activeIndex) / testimonials.length;
      containerRef.current.scrollTo({ left: scrollPosition, behavior: 'smooth' });
    }
  }, [activeIndex]);

  return (
    <div className="flex justify-center items-center space-x-10 md:space-x-20 px-10 md:px-24 py-20 bg-[#f3e1f4] dark:bg-gray-900 overflow-x-auto scrollbar-hide">
      <div
        ref={containerRef}
        className="flex space-x-6 md:space-x-20 snap-x snap-mandatory w-96 md:w-full px-4 md:px-0"
      >
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            testimonial={testimonial}
            active={activeIndex === index}
            onMouseEnter={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
