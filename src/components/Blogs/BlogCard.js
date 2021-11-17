import { BellIcon } from "@heroicons/react/outline";
import React from "react";

export const BlogCard = () => {
  return (
    <div>
      <div className="border relative rounded overflow-hidden">
        <div className="absolute w-full h-72 overflow-hidden blog-overly"></div>
        <div className="h-72 overflow-hidden">
          <img
            className="w-full"
            src="https://i.ibb.co/gZJZJyq/pexels-curtis-adams-3935350.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="border p-4 rounded">
        <h1 className="text-2xl letter-space-2 mt-2 font-bold text-black">
          Json Thompson
        </h1>
        <p className="text-base my-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde iusto
          facere blanditiis incidunt voluptatem aspernatur consequuntur
          voluptates quam voluptatibus sed harum fugit maiores itaque cum ad
          rerum cupiditate, qui necessitatibus similique laudantium numquam rem!
          Illum nesciunt libero molestiae dicta tempore.
        </p>
        <hr />
        <div className="flex my-4 mb-4 justify-between items-center">
          <div className="flex justify-center items-center">
            <BellIcon className="w-6 mr-2 text-gray-600" />
            <p className="text-base font-semibold text-gray-600">Facebook</p>
          </div>
          <div className="flex justify-center items-center">
            <BellIcon className="w-6 mr-2 text-gray-600" />
            <p className="text-base font-semibold text-gray-600">Twitter</p>
          </div>
          <div className="flex justify-center items-center">
            <BellIcon className="w-6 mr-2 text-gray-600" />
            <p className="text-base font-semibold text-gray-600">Email</p>
          </div>
        </div>
        <p className="text-xl cursor-pointer font-bold text-pink-600 letter-space-2">
          Read More -//
        </p>
      </div>
    </div>
  );
};
