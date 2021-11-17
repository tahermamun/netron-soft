import React from "react";
import { Title } from "../SectionTitle/Title";
import { LatestProjectCard } from "./LatestProjectCard";

export const LatestProject = () => {
  return (
    <div className="py-8">
      <Title title1={"our Work"} title2={"Latest Project"} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:py-8 py-4 md:grid-cols-4">
        <LatestProjectCard />
        <LatestProjectCard />
        <LatestProjectCard />
        <LatestProjectCard />
      </div>
    </div>
  );
};
