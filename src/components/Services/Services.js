import React from "react";
import img from "../../assets/image/HandRed.png";
import { Title } from "../SectionTitle/Title";
import { ServiceInfoCard } from "./ServiceInfoCard";

export const Services = () => {
  return (
    <div className="bg-gray-100 py-8">
      <Title title1={"what we do ?"} title2={"Our Services"} />
      <div className="max-w-screen-2xl py-8 m-auto grid grid-cols-1 gap-4 md:grid-cols-3">
        <ServiceInfoCard
          img={img}
          title1={`Web`}
          background={"bg-red-100"}
          title2={"Development"}
          description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore nisi ipsum odio temporibus ea cumque! Placeat temporibus dolorem, quasi et hic, adipisci, quidem excepturi numquam esse quaerat veritatis aliquid tempora. Ea minus rerum sed libero et eaque nesciunt explicabo dignissimos."
        />
        <ServiceInfoCard
          img={img}
          title1={`Web`}
          background={"bg-red-100"}
          title2={"Development"}
          description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore nisi ipsum odio temporibus ea cumque! Placeat temporibus dolorem, quasi et hic, adipisci, quidem excepturi numquam esse quaerat veritatis aliquid tempora. Ea minus rerum sed libero et eaque nesciunt explicabo dignissimos."
        />
        <ServiceInfoCard
          img={img}
          title1={`Web`}
          background={"bg-red-100"}
          title2={"Development"}
          description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore nisi ipsum odio temporibus ea cumque! Placeat temporibus dolorem, quasi et hic, adipisci, quidem excepturi numquam esse quaerat veritatis aliquid tempora. Ea minus rerum sed libero et eaque nesciunt explicabo dignissimos."
        />
      </div>
    </div>
  );
};
