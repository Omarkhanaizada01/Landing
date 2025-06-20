import React from "react";
import { whiteLogo } from "../assets";
import { footerLinks, socialMeda } from "../constants";

const Footer = () => {
  return (
    <div className="w-full px-24 py-10 bg-[#263238] text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
      <div className="flex flex-col items-start justify-center gap-5">
        <img src={whiteLogo} alt="Logo" className="w-[120px]" />

        <p className="font-Roboto font-normal text-gray-400 text-sm">
          Copyright @ 2025 Landify Ui Kit. <br />
          All rights reserved
        </p>

        <ul className="flex items-center justify-center gap-2">
          {socialMeda.map((socials) => {
            return (
              <li
                key={socials.id}
                className="bg-gray-600 cursor-pointer rounded-full flex items-center justify-center p-1"
              >
                <img
                  src={socials.icon}
                  alt="social icons"
                  className="w-[20px] h-[20px]"
                />
              </li>
            );
          })}
        </ul>
      </div>

      {footerLinks.map((items) => {
        return (
          <div
            key={items.id}
            className="flex flex-col items-start justify-center"
          >
            <h1 className="text-lg font-Roboto font-semibold mb-3">
              {items.title}
            </h1>

            <ul className="flex flex-col items-start space-y-1">
              {items.links.map((link) => (
                <li key={link.id}>{link.title}</li>
              ))}
            </ul>
          </div>
        );
      })}

      <div className="flex flex-col gap-3 w-full items-start">
        <h1 className="text-lg font-Roboto font-semibold">Stay up do date</h1>
        <div className="flex items-center flex-row relative">
          <input
            type="text"
            placeholder="Your email address"
            className="outline-none border-none bg-[#c2c2c261] px-3 py-1 rounded-md font-Roboto"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4 absolute right-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Footer;
