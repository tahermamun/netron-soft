import React from "react";
import { About } from "../About/About";
import { AllServices } from "../AllServices/AllServices";
import { Blogs } from "../Blogs/Blogs";
import { HappyClientCard } from "../HappyClientCard/HappyClientCard";
import { LatestProject } from "../LatestProject/LatestProject";
import { Services } from "../Services/Services";
import { Subscribe } from "../Subscribe/Subscribe";
import { Team } from "../Team/Team";

const Homepage = () => {
  return (
    <div>
      <HappyClientCard />
      <Services />
      <LatestProject />
      <Team />
      <Subscribe />
      <Blogs />
      <About />
      <AllServices />
    </div>
  );
};

export default Homepage;
