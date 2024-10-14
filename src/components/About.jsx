import React from 'react';
import { copyrightSign } from "../assets/icons";
import { facebook, twitter, instagram } from '../assets/icons'; 

const About = () => {
  return (
    <footer className="w-full p-8 bg-green-900 text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
      <div className="flex justify-between items-start gap-20 flex-wrap lg:flex-row flex-col">
        {/* Left Section: Brand and Description */}
        <div className="flex flex-col items-start mb-10 lg:mb-0">
          <h1 className="text-4xl font-bold mb-4 cursor-pointer text-yellow-500">
            Agri<span className="text-white">Market</span>🌾
          </h1>
          <p className="text-base leading-7 text-gray-300 max-w-md mb-8">
            Empowering farmers and buyers to connect directly for fresh produce. Explore our platform for the finest agricultural products straight from the source.
          </p>
          <div className="flex items-center gap-4">
            {/* Social Icons */}
            <a
              href="https://facebook.com"
              className="w-12 h-12 bg-white rounded-full flex justify-center items-center cursor-pointer hover:bg-yellow-500 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebook} alt="Facebook" width={24} height={24} />
            </a>
            <a
              href="https://twitter.com"
              className="w-12 h-12 bg-white rounded-full flex justify-center items-center cursor-pointer hover:bg-yellow-500 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={twitter} alt="Twitter" width={24} height={24} />
            </a>
            <a
              href="https://instagram.com"
              className="w-12 h-12 bg-white rounded-full flex justify-center items-center cursor-pointer hover:bg-yellow-500 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagram} alt="Instagram" width={24} height={24} />
            </a>
          </div>
        </div>

        {/* Right Section: Contact Info */}
        <div className="text-base leading-7 text-gray-300">
          <h2 className="text-xl font-bold mb-2 text-yellow-500">Get in Touch</h2>
          <p>
            Email: <a href="mailto:2300032929@kluniversity.in" className="text-white hover:underline">2300032929@kluniversity.in</a>
          </p>
          <p>
            Phone: <a href="tel:+917569788767" className="text-white hover:underline">7569788767</a>
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="flex justify-between items-center text-gray-400 mt-16">
        <div className="flex items-center gap-2">
          <img src={copyrightSign} alt="Copyright sign" width={20} height={20} />
          <p>&copy; 2024 AgriMarket. All rights reserved.</p>
        </div>
        <p className="cursor-pointer hover:text-white">Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default About;