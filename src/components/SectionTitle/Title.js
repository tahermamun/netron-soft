import React from "react";

export const Title = ({ title1, title2 }) => {
  return (
    <div className="text-center">
      <p className="text-sm text-red-400 letter-space-2 uppercase">{title1}</p>
      <p className="text-4xl letter-space-2 font-bold">{title2}</p>
      <div className="m-auto my-2 h-1 w-20 rounded bg-red-500"></div>
    </div>
  );
};
