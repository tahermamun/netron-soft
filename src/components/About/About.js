import React from "react";

export const About = () => {
  return (
    <div className="bg-indigo-50 py-16">
      <div className="main_container py-8 m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-2 md:p-0">
          <div>
            <h1 className="text-3xl font-bold letter-space-2 py-2 mb-2 md:mb-8">
              Why Netron<span className="text-pink-600">Soft</span>
            </h1>
            <p className="text-base font-thin pr-4 md:pr-10 letter-space-1">
            Our Business model is very flexible and we don't want to force you into anything that will not work with your business. We have worked with almost 100+ companies. We have achieved a lot since the beginning. We are provided with the best support to our customers. Our staff are available 24 hours and they can assist with anything your need, so you never have to worry about being left out on something important.
            </p>
          </div>
          <div className="w-full rounded">
            <img
              src="https://i.ibb.co/tDs4543/pexels-olia-danilevich-4974914.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
