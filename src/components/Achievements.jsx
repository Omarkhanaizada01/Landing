import React from "react";
import { featuers } from "../constants"; 

const Achievements = () => {
  return (
    <section 
      className="container mx-auto px-4 py-12 bg-gray-50"
      aria-label="Our achievements"
    >
      <div className="flex flex-col items-center lg:flex-row gap-12">
        
        <article className="lg:w-1/2 text-center lg:text-start">
          <h2 className="text-gray-800 text-3xl md:text-4xl font-semibold mb-4">
            Helping a local <br />
            <span className="text-green-600 block lg:inline">business reinvent itself</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg mb-8">
            We reached here with our hard work and dedication
          </p>
        </article>

       
        <div className="lg:w-1/2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {featuers.map((item) => (
              <div
                key={item.id}
                className="flex items-start gap-4 p-3 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <figure className="flex-shrink-0">
                  <img
                    src={item.icon}
                    alt={`${item.title} icon`} 
                    className="w-12 h-12 object-contain"
                  />
                </figure>
                <div>
                  <h3 className="text-gray-800 text-xl font-semibold mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    {item.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;