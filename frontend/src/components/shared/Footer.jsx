import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-t-gray-200 md:py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-[0.9rem] sm:text-xl font-bold">Kaam Khoja</h2>
            <p className="text-xs sm:text-sm">Created by Sagar Regmi.</p>
          </div>
          
          <div className="flex space-x-4 ">
            <a href="https://facebook.com/" className="text-xl md:text-3xl hover:text-blue-400 hover:scale-x-110 rounded-full" aria-label="Facebook">
            <FaGithub/>
            </a>
            <a href="https://twitter.com" className="text-xl md:text-3xl hover:text-blue-400 hover:scale-x-110" aria-label="Twitter">
            <FaFacebook/>
            </a>
            <a href="https://linkedin.com" className="text-xl md:text-3xl hover:text-blue-400 hover:scale-x-110" aria-label="LinkedIn">
            <FaLinkedin/>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;