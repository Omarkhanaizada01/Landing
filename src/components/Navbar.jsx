import React, { useState } from "react";
import { navLinks } from "../constants/index.jsx";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed w-full top-0 left-0 bg-white shadow-md z-50">
     
      <div className="container mx-auto px-4 py-3 flex justify-between  items-center">
        
       
        <div className="flex items-center">
          <img 
            src={logo} 
            alt="Company Logo" 
            className="h-5 cursor-pointer " 
          />
        </div>

       
        <button 
          className="md:hidden p-2 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <img 
            src={isMenuOpen ? close : menu} 
            alt="Menu icon" 
            className="w-8 h-8" 
          />
        </button>

        
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:block`}>
          <div className="md:flex items-center">
          
            <ul className="md:flex md:space-x-8 space-y-4 md:space-y-0 mb-4 md:mb-0">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a 
                    href={link.url} 
                    className="block py-2 text-gray-700 hover:text-green-600 transition-colors"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>

           
            <div className="flex items-center space-x-4 md:ml-8">
              <a 
                href="#" 
                className="text-green-600 hover:text-green-800 font-medium"
              >
                Login
              </a>
              <a 
                href="#" 
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md font-medium transition-colors"
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;