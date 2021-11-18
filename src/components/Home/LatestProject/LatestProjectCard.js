import React from "react";
import latestProjectImg from "../../../assets/image/mobileApp.png"



export const LatestProjectCard = () => {
  return (
    <div className="sell border">
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
        <img className="latestProjectImg" src={latestProjectImg} alt="" />
      </div>
    </div>
  );
};
