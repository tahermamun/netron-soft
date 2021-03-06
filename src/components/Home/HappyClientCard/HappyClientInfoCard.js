import React from "react";

export const HappyClientInfoCard = ({
  img,
  background,
  width,
  count,
  content,
}) => {
  return (
    <div className="rounded py-8">
      <div
        className={`mx-auto w-32 h-32 rounded-full ${background} flex items-center overflow-hidden justify-center`}
      >
        <img src={img} className={`${width}`} />
      </div>
      <p className="mt-4 text-3xl font-bold text-center">{count}</p>
      <p className="my-2 text-2xl font-bold text-center">{content}</p>
    </div>
  );
};
