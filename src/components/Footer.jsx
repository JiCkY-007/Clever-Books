import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 w-full text-gray-400 mt-0 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-500 text-sm">
              Copyright 2024 Clever Books. Terms of Service. Privacy Policy. Conifer Innovations Private Limited. CIN: U72900KA2022PTC163144
            </p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-300">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;