import React from "react";
import './AllServices.css'
export const ServicesAllCard = ({ image, content, index }) => {
  console.log(index % 2 == 0);
  return (

    <div className="main_container m-auto ">
    <div className="computer_view">
      <div className="grid m-auto md:grid-cols-2 justify-center items-center">
        {index % 2 == 0 ? content : image}
        {index % 2 == 0 ? image : content}
      </div>
    </div>
    <div className="mobile_view ">
     <div className="mobile_view_grid">
     {index === index == 0 ? content : image}
      {/* {index % 2 == 0 ? image : content} */}
      {index === index == 0 ? image : content}
     </div>

    </div>


  </div>


  );
};


