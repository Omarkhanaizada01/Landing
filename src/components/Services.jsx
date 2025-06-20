import React from "react";
import { services } from "../constants";

const Services = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full my-12">
  
  <header className="text-center mb-12">  
    <h2 className="font-medium text-gray-800 text-2xl md:text-4xl mb-4">  
      Manage your entire community
      <br className="hidden md:block" />
      in a single system
    </h2>
    <p className="text-gray-600 text-sm md:text-lg">
      Who is Nextcent suitable for?
    </p>
  </header>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">  
    {services.map((card) => (  
      <article 
        key={card.id}
        className="flex flex-col items-center text-center shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow"  
      >
        <img 
          src={card.icon} 
          alt={`${card.title} icon`}  
          className="w-16 h-16 mb-4"  
        />
        <h3 className="font-medium text-gray-800 text-xl mb-2">  
          {card.title.replace(/<br \/>/g, " ")}  
        </h3>
        <p className="text-gray-600 text-sm max-w-[280px]">
          {card.content}
        </p>
      </article>
    ))}
  </div>
</div>
  );
};

export default Services;
