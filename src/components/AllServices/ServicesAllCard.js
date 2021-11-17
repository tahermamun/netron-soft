import React from "react";

export const ServicesAllCard = ({ image, content, index }) => {
  console.log(index % 2 == 0);
  return (
    <div className="main_container m-auto grid grid-cols-1 md:grid-cols-2">
      {index % 2 == 0 ? content : image}
      {index % 2 == 0 ? image : content}
    </div>
  );
};
