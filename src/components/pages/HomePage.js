import React from "react";
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
    </div>
  );
};

export default Homepage;
