import React from "react";
import img from "../../assets/image/HandRed.png";
import { Title } from "../SectionTitle/Title";
import { ServiceInfoCard } from "./ServiceInfoCard";

import servicesData from '../../database/servicesData.json'




export const Services = () => {
  return (
    <div className="bg-gray-100 py-16">
      <Title title1={"what we do ?"} title2={"Our Services"} />
      <div className="main_container ">
        <div className="py-8 m-auto grid grid-cols-1 gap-4 md:grid-cols-3">


          {
            servicesData.map(item =>
              <ServiceInfoCard
                img={img}
                title1={item.serviceTitle}
                background={"bg-red-100"}
                description={item.serviceDescription}
              />
            )
          }


        </div>
      </div>
    </div>
  );
};
