import React from "react";

const SimpleButton = ({ title }) => {
  return (
    <button
      className={`bg-green-500 hover:bg-green-600 text-white font-Roboto font-noraml flex items-center justify-between py-2 px-3 rounded-[4px]`}
    >
      {title}
    </button>
  );
};

export default SimpleButton;
