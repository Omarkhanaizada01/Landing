import React from "react";
import { whiteArrow } from "../assets";

const Button = ({ title, style }) => {
  return (
    <button
      className={`bg-[#4CAF4F] hover:bg-green-600 text-white font-Roboto font-noraml flex items-center justify-between py-2 px-4 rounded-md transition-colors duration-200`}
    >
      
      <span className="mr-2">{title}</span>
      <img
        src={whiteArrow}
        alt="arrow"
        className="px-1 lg:px-4 md:hidden lg:block"
        
      />
    </button>
  );
};

export default Button;
