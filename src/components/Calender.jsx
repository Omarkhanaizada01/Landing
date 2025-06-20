import React from "react";
import { pana } from "../assets";
import SimpleButton from "./SimpleButton";

const Calender = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row-reverse items-center ">
      <div className="flex flex-col items-start mb-5 w-full lg:w-1/2">
        <h1 className="text-[#4D4D4D] font-semibold font-Roboto text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-3">
          How to design your site footer like
          <br /> we did
        </h1>
        <p className="font-Roboto font-normal text-gray-600 text-sm mb-3 max-w-[560px]">
          Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
          augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
          elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
          habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
          facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet
          urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur
          quis massa. Praesent felis est, finibus et nisi ac, hendrerit
          venenatis libero. Donec consectetur faucibus ipsum id gravida.
        </p>
        <SimpleButton title="Learn More" />
      </div>

      <div className="mb-5 w-full lg:w-1/2">
        <img
          src={pana}
          alt="features icon"
          className="w-full mx-auto object-contain lg:w-[80%]"
        />
      </div>
    </div>
  );
};

export default Calender;
