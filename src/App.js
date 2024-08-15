import React from "react";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Testimonials from "./Pages/Testimonial";
import Footer from "./Components/Footer";
import Contact from "./Pages/Contact";

function App() {
  return (
    <div className="bg-[#f3e1f4] dark:bg-gray-900 overflow-x-hidden">
      <div >
      <Navbar/>
      </div>
      <div id="home">
      <Header/>
      </div>
      <div id="about">
      <About/>
      </div>
      <div >
      <Testimonials/>
      </div>
      <div id="services">
      <Services/>
      </div>
      <div id="contact">
      <Contact/>
      </div>
      <div>
      <Footer/>
      </div>
    </div>
  );
}

export default App;
