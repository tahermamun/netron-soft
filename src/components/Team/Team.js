import React from "react";
import { Title } from "../SectionTitle/Title";
import { TeamCard } from "./TeamCard";

export const Team = () => {
  return (
    <div className="bg-gray-100 p-2 md:py-16 py-16">
      <Title title1={"meet our team"} title2={"Team of Professional"} />
      <TeamCard />
    </div>
  );
};
