import { BeakerIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import { Title } from "../SectionTitle/Title";
import "./Contact.css";

export const Contact = () => {
  const [formData, setFormData] = useState({});

  const handleBlur = (e) => {
    let newData = { ...formData };
    newData[e.target.name] = e.target.value;
    setFormData(newData);
  };
  console.log(formData);

  const handleSubmit = () => {};
  return (
    <div className=" py-8">
      <Title title1={"Contact Us"} title2={"Connect Our Team"} />
      <div className="my-16">
        <div className="main_container grid grid-cols-1 md:grid-cols-3">
          <div className="pt-6 pb-6 md:pl-6 md:col-span-2 pl-0 ">
            <div className="bg-white rounded p-0 md:pl-16 md:pt-16 md:pb-16 md:pr-0 md:pr-16 ">
              <div className="p-4 ">
                <h1 className="text-4xl mb-5 md:mb-10 font-semibold letter-space-2">
                  Get In Touch
                </h1>
                <div className="grid grid-cols-1 my-2 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    onBlur={handleBlur}
                    className="p-4 focus:outline-none rounded border border_custom_shadow"
                    placeholder="Name"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    onBlur={handleBlur}
                    className="p-4 focus:outline-none rounded border border_custom_shadow"
                    placeholder="Email"
                    required
                  />
                </div>
                <input
                  type="text"
                  onBlur={handleBlur}
                  name="subject"
                  className="p-4 focus:outline-none rounded w-full my-2 border border_custom_shadow"
                  placeholder="Subject"
                  required
                />
                <textarea
                  name="message"
                  onBlur={handleBlur}
                  className="p-4 h-42 focus:outline-none md:h-52 lg:h-42 my-2 rounded w-full border border_custom_shadow"
                  placeholder="Message"
                ></textarea>
                <button
                  onClick={handleSubmit}
                  className="p-4 rounded flex items-center justify-center bg-red-500 my-2 text-white border_custom_shadow"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
          <div className="bg-red-500 p-4 md:p-10 rounded text-white">
            <h1 className="text-3xl font-semibold my-4 text-center letter-space-2">
              Contact Us
            </h1>
            <div className="flex my-8 items-center  flex-wrap">
              <div className="w-10 mr-2 border h-10 rounded-full flex justify-center items-center">
                <BeakerIcon className="w-4" />
              </div>
              <div className="">
                <p className="text-base font-bold">
                  <span className="ml-2 font-thin">
                    190, Mirpur, Dhaka,
                    <br /> Bangladesh banglasd
                  </span>
                </p>
              </div>
            </div>
            <div className="flex my-8 items-center flex-wrap">
              <div className="w-10 mr-2 border h-10 rounded-full flex justify-center items-center">
                <BeakerIcon className="w-4" />
              </div>
              <div className="">
                <p className="text-base font-bold">
                  <span className="ml-2 font-thin">+881234567897412</span>
                </p>
              </div>
            </div>

            <div className="flex my-8 items-center flex-wrap">
              <div className="w-10 mr-2 border h-10 rounded-full flex justify-center items-center">
                <BeakerIcon className="w-4" />
              </div>
              <div className="">
                <p className="text-base font-bold">
                  <span className="ml-2 font-thin">abgced@mail.com</span>
                </p>
              </div>
            </div>

            <div className="flex my-8 items-center flex-wrap">
              <div className="w-10 mr-2 border h-10 rounded-full flex justify-center items-center">
                <BeakerIcon className="w-4" />
              </div>
              <div className="">
                <p className="text-base font-bold">
                  <span className="ml-2 font-thin">netronsoft.netlify/app</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
