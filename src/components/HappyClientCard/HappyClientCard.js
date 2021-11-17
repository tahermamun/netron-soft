import React from "react";
import Img2 from "../../assets/image/CloickIndogo.png";
import Img1 from "../../assets/image/HandRed.png";
import Img4 from "../../assets/image/TikAqua.png";
import Img3 from "../../assets/image/WorldGreen.png";
import { HappyClientInfoCard } from "./HappyClientInfoCard";

export const HappyClientCard = () => {
  return (
    <div>
      <div className="max-w-screen-2xl px-4 py-8 m-auto grid grid-cols-1 md:grid-cols-4">
        <HappyClientInfoCard
          img={Img1}
          width={"w-20"}
          background={"bg-red-100"}
          count={"100 +"}
          content={"Happy Client"}
        />
        <HappyClientInfoCard
          img={Img2}
          width={"w-24"}
          background={"bg-indigo-100"}
          count={"3 +"}
          content={"Year's Of Experience"}
        />
        <HappyClientInfoCard
          img={Img3}
          width={"w-28"}
          background={"bg-green-100"}
          count={"10 +"}
          content={"Countries Served"}
        />
        <HappyClientInfoCard
          img={Img4}
          width={"w-28"}
          background={"bg-blue-100"}
          count={"60 +"}
          content={"Project Done"}
        />
      </div>
    </div>
  );
};