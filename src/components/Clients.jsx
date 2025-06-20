import React from "react";
import { clients } from "../constants";

const Clients = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center space-y-5 text-center mt-10 mb-5 ">
      <div>
        <h4 className="text-gray-700 font-semibold font-Roboto text-3xl md:text-4xl lg:text-5xl mb-4">
          Our Clients
        </h4>
        <p className="text-gray-600 font-Roboto text-sm">
          We have been working with some Fortune 500+ clients
        </p>
      </div>

      <div className="w-full">
        <ul className="w-full flex items-center justify-evenly">
          {clients.map((items) => {
            return (
              <li key={items.id}>
                <img src={items.icon} alt="clients" className="w-3/4" />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Clients;
