import React from "react";
import Img2 from "../../../assets/image/CloickIndogo.png";
import Img1 from "../../../assets/image/HandRed.png";
import Img4 from "../../../assets/image/TikAqua.png";
import Img3 from "../../../assets/image/WorldGreen.png";
import { HappyClientInfoCard } from "./HappyClientInfoCard";

export const HappyClientCard = () => {
  return (
    <div className="py-16">
      <div className="main_container px-4 md:py-16 m-auto grid grid-cols-1 md:grid-cols-4">
        <HappyClientInfoCard
          img={Img1}
          width={"w-14"}
          background={"bg-red-100"}
          count={"100 +"}
          content={"Happy Client"}
        />
        <HappyClientInfoCard
          img={Img2}
          width={"w-16"}
          background={"bg-indigo-100"}
          count={"3 +"}
          content={"Year's Of Experience"}
        />
        <HappyClientInfoCard
          img={Img3}
          width={"w-24"}
          background={"bg-green-100"}
          count={"10 +"}
          content={"Countries Served"}
        />
        <HappyClientInfoCard
          img={Img4}
          width={"w-20"}
          background={"bg-blue-100"}
          count={"60 +"}
          content={"Project Done"}
        />
      </div>
    </div>
  );
};
