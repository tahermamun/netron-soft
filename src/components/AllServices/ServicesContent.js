import React from "react";

export const ServicesContent = ({ item }) => {
  return (
    <div className="bg-white px-2 md:px-6 py-2 md:py-8">
      <h1 className="text-2xl letter-space-2 font-bold py-2">
        {item.serviceTitle}
      </h1>
      <div className="h-1 w-52 bg-red-500"></div>
      <p className="text-xl py-4 letter-space-1">{item.serviceDescription}</p>
    </div>
  );
};
