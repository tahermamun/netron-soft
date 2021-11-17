import React from "react";
import Facebook from "../../assets/image/Facebookp.png";
import Instagram from "../../assets/image/Instagram.png";
import LinkedIn from "../../assets/image/Linkdin.png";
import Email from "../../assets/image/mail.png";
import Phone from "../../assets/image/Phonee.png";

export const TeamCard = () => {
  return (
    <div className="main_container py-8 m-auto ">
      <div className="grid grid-cols-1 md:grid-cols-2 py-4 md:py-8 gap-4">
        <div className="md:pr-36">
          <h1 className="text-2xl font-bold letter-space-2">
            Name of Professional
          </h1>
          <h1 className="text-sm font-bold letter-space-2">
            Chief Executive Officer (CEO)
          </h1>
          <p className="text base md:mt-10 font-thin">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            corporis ipsam perferendis minus. Praesentium soluta laboriosam
            error delectus officiis excepturi mollitia? Perferendis, excepturi
            pariatur dicta exercitationem repudiandae minus modi amet! Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Quisquam odit
            reprehenderit nihil! Adipisci nostrum alias labore sint itaque
            cumque vero.
          </p>
          <div className="md:mt-10 mt-2 flex  items-center">
            <div className="w-10 mr-2 h-10 rounded-full cursor-pointer flex items-center justify-center">
              <img src={Facebook} alt="" className="w-full" />
            </div>
            <div className="w-10 mr-2 h-10 rounded-full cursor-pointer flex items-center justify-center">
              <img src={Instagram} alt="" className="w-full" />
            </div>
            <div className="w-10 mr-2 h-10 rounded-full cursor-pointer flex items-center justify-center">
              <img src={Email} alt="" className="w-full" />
            </div>
            <div className="w-10 mr-2 h-10 rounded-full cursor-pointer flex items-center justify-center">
              <img src={LinkedIn} alt="" className="w-full" />
            </div>
            <div className="w-10 mr-2 h-10 rounded-full cursor-pointer flex items-center justify-center">
              <img src={Phone} alt="" className="w-full" />
            </div>
          </div>
        </div>
        <div className="rounded  px-4 md:px-20 w-full">
          <div className="rounded overflow-hidden h-96 border">
            <img
              className="w-full"
              src="https://i.ibb.co/jLyTrBT/pexels-quang-nguyen-vinh-6711266.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
