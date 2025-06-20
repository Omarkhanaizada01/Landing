import React from "react";
import { greenArrow } from "../assets";

const ComplexButton = ({ title, style }) => {
  return (
    <button
      className={`bg-white hover:bg-green-50 text-primary font-Roboto font-bold text-lg flex items-center justify-between py-2 px-2 rounded-[4px]`}
    >
      {title}
      <img src={greenArrow} alt="arrow" className="px-2 lg:px-4" />
    </button>
  );
};

export default ComplexButton;
