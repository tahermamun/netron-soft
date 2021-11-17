import React from "react";
import { Title } from "../SectionTitle/Title";
import { BlogCard } from "./BlogCard";

export const Blogs = () => {
  return (
    <div className="bg-gray-100 md:px-0 py-8 px-2">
      <Title title1={"Our Blogs"} title2={"Latest Blogs"} />
      <div className="max-w-screen-2xl m-auto grid grid-cols-1 md:grid-cols-3 gap 4">
        <BlogCard />
      </div>
    </div>
  );
};
