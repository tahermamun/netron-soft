import React from "react";
import "./Subscribe.css";

export const Subscribe = () => {
  return (
    <div className="h-86 md:h-36 p-2 md:p-0  w-full bg-header">
      <div className="main_container m-auto py-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="py-4">
          <h1 className="text-3xl letter-space-2 font-bold text-white">
            Subscribe Us
          </h1>
          <p className="text-sm text-white font-thin letter-space-1 md:pr-20">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem
            numquam veritatis inventore sint nam maiores officiis excepturi quos
            corrupti dolorum.
          </p>
        </div>
        <div className="border-white  flex items-center justify-center">
          <div className="w-96 border rounded p-2">
            <input
              type="text"
              className="border-none text-white outline-none p-2 w-60 bg-transparent"
              placeholder="Enter Your Email"
            />
            <button className="text-white text-pink-600 h-full text-xl font-bold mx-2">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
