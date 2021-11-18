import React from "react";
import img4 from "../../assets/image/mobileApp.png";
import img1 from "../../assets/image/ResponsiveDesign.png";
import img3 from "../../assets/image/UIUX.png";
import img2 from "../../assets/image/webdesign.png";
import { Title } from "../SectionTitle/Title";
import { ServiceImg } from "./ServiceImg";
import { ServicesAllCard } from "./ServicesAllCard";
import { ServicesContent } from "./ServicesContent";
// import img5 from '../../assets/image/hosting.png'
// import img6 from '../../assets/image/ManyMore.png'

import servicesData from '../../database/servicesData.json'




export const AllServices = () => {
  return (
    <div className=" py-4 md:py-8 px-4 md:px-0">
      <Title title1={"what we do?"} title2={"Our Services"} />
      {
        servicesData.map((item, index) =>
          <ServicesAllCard
            image={<ServiceImg img={img1} />}
            content={<ServicesContent item={item}  />}
            index={index+1}
          />
        )
      }

    </div>
  );
};
