import React from "react";
import { Title } from "../SectionTitle/Title";
import "./Blog.css";
import { BlogCard } from "./BlogCard";

export const Blogs = () => {
  return (
    <div className="bg-gray-100 md:px-0 py-8 px-2">
      <Title title1={"Our Blogs"} title2={"Latest Blogs"} />
      <div className="main_container py-8 m-auto grid grid-cols-1 md:grid-cols-3 gap-20">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
};
