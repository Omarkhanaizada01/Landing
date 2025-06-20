import React from "react";
import { communityUpdatesData } from "../constants";

const CommunityUpdates = () => {
  return (
    <section className="container mx-auto px-4 py-12 text-center">
      
      <header className="mb-12 max-w-3xl mx-auto">
        <h2 className="text-gray-800 font-medium text-3xl md:text-4xl mb-4">
          Caring is the new marketing
        </h2>
        <p className="text-gray-600 text-base md:text-lg">
          The Nextcent blog is the best place to read about the latest
          membership insights, trends and more. See who's joining the community,
          read about how our community are increasing their membership income
          and lot's more.
        </p>
      </header>

      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {communityUpdatesData.map((card) => (
          <article key={card.id} className="relative group">
            
            <img 
              src={card.image} 
              alt={card.alt || "Community update"} 
              className="w-full h-66 object-cover rounded-lg"
            />
            
           
            <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-4/5 bg-white p-6 rounded-lg shadow-lg transition-all group-hover:-translate-y-2">
              <p className="text-gray-600 mb-4 line-clamp-3">
                {card.text}
              </p>
              {card.button && (
                <div className="flex justify-center">
                  {card.button}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default CommunityUpdates;
