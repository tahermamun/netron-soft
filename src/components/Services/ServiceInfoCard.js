import React from "react";

export const ServiceInfoCard = ({
  img,
  title1,
  title2,
  description,
  background,
}) => {
  return (
    <div className="p-6 rounded bg-white">
      <div className="flex items-center">
        <div
          className={`w-20 flex justify-center items-center rounded-full h-20 ${background} overflow-hidden`}
        >
          <img src={img} className="w-8" alt="" />
        </div>
        <p className="text-2xl font-bold ml-2 md:ml-4">
          {title1}
        </p>
      </div>
      <p className="px-0 pt-4 text-md font-semibold">{description}</p>
    </div>
  );
};
