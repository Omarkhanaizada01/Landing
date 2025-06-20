import React from "react";
import SimpleButton from "./SimpleButton";
import { hero } from "../assets";

const Hero = () => {
  return (
    
    <div className="w-full bg-gray-100 ">
    
      <section className="container mx-auto px-4 py-10 flex flex-col lg:flex-row items-center relative">
        <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
          <h1 className="text-gray-800 font-semibold font-Roboto text-3xl md:text-4xl xl:text-5xl mb-4">
            Lessons and insights{" "}
            <span className="text-green-600 block md:inline">from 8 years</span>
          </h1>
          
          <p className="text-gray-600 font-Roboto text-base md:text-lg leading-relaxed mb-6">
            Where to grow your business as a photographer: site or social media?
          </p>

          <SimpleButton 
            title="Register" 
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3"
          />
        </div>

        <div className="lg:w-1/2 flex justify-center">
          <img
            src={hero}
            alt="Hero illustration"
            className="w-full max-w-md lg:max-w-lg"
          />
        </div>

        <div className="flex absolute bottom-4 left-1/2 transform -translate-x-1/2 space-x-2">
          {[true, false, false].map((active, index) => (
            <div 
              key={index}
              className={`w-3 h-3 rounded-full cursor-pointer ${active ? 'bg-green-600' : 'bg-green-200'}`}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Hero;