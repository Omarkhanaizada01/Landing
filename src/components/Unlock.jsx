import React from "react";
import SimpleButton from "./SimpleButton";
import { features } from "../assets";

const Unlock = () => {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="flex flex-col-reverse lg:flex-row-reverse items-center gap-8">
        <article className="w-full lg:w-1/2">
          <h2 className="text-gray-800 font-semibold text-2xl md:text-3xl lg:text-4xl mb-4">
            The unseen of spending three years at Pixelgrade
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6 max-w-[560px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
          </p>
          <SimpleButton 
            title="Learn More" 
            className="bg-blue-600 hover:bg-blue-700" 
          />
        </article>

        <figure className="w-full lg:w-1/2">
          <img
            src={features}
            alt="Pixelgrade company features and statistics"
            className="w-full max-w-xl mx-auto"
          />
        </figure>
      </div>
    </section>
  );
};

export default Unlock;