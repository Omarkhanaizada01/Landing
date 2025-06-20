import React from "react";
import { community } from "../assets";
import { clients } from "../constants";
import ComplexButton from "./ComplexButton";

const Community = () => {
  return (
    <section className="container mx-auto px-4 py-12 bg-gray-50">
      <div className="flex flex-col-reverse lg:flex-row-reverse items-center gap-12">
        
        <article className="w-full lg:w-1/2">
          <blockquote className="text-gray-600 text-base leading-relaxed mb-6 max-w-2xl">
          Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
          </blockquote>

          <div className="mb-8">
            <h3 className="text-green-600 font-bold text-xl mb-1">
              Tim Smith
            </h3>
            <p className="text-gray-500 text-sm">
              British Dragon Boat Racing Association
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex flex-wrap justify-center gap-2">
              {clients.slice(0, 6).map((client) => (
                <figure key={client.id} className="w-10 h-10">
                  <img 
                    src={client.icon} 
                    alt={`${client.name || 'Client'} logo`} 
                    className="w-full h-full object-contain"
                  />
                </figure>
              ))}
            </div>
            <ComplexButton 
              title="Meet all customers" 
              className="whitespace-nowrap"
            />
          </div>
        </article>

       
        <figure className="w-full lg:w-1/2 flex justify-center">
          <img
            src={community}
            alt="Community members discussing"
            className="w-full max-w-md object-contain"
          />
        </figure>
      </div>
    </section>
  );
};

export default Community;