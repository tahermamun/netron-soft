import React from "react";

export const LatestProjectCard = () => {
  return (
    <div className="sell">
      <div className="top-selling">
        <div className="absolute p-12 text-white text-left w-full h-full top-product-details">
          <div className="h-3/6 ">
            <p className="text-sm font-bold">Property Name</p>
            <p className="text-sm font-bold">Property Category</p>
          </div>
          <div className="flex justify-center">
            <button className="w-30 bg-black px-4 py-1">See More</button>
          </div>
        </div>
        <img 
          src="https://i.ibb.co/tcPJqLz/pexels-eziz-charyyev-1475938.jpg"
          alt=""
        />
      </div>
    </div>
  );
};
