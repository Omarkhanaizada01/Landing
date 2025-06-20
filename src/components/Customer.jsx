import React from "react";
import Button from "./Button";

const Customer = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center text-center gap-8">
        <h2 className="text-gray-800 font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl max-w-4xl leading-tight">
          Pellentesque suscipit fringilla libero eu.
        </h2>
        <Button 
          title="Get a Demo" 
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
        />
      </div>
    </section>
  );
};

export default Customer;
