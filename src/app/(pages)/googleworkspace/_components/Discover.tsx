"use client";
import Image from "next/image";
import React, { useState } from "react";
import google from "@/assets/images/premium partner.svg";
import tenyear from "@/assets/images/10plusyears.svg";
import customer from "@/assets/images/customised solution.svg";

const SERVICES_DATA = [
  {
    title: "Google Premier Partner",
    description: "Get support for Google Workspace ",
    image: google,
  },
  {
    title: "10 Years",
    description: "Our dedicated team is here to assist you ",
    image: tenyear,
  },
  {
    title: "Customized Solutions ",
    description: "Get support for Google Workspace plans anytime ",
    image: customer,
  },
  // Add more service data as needed
];

const Discover = () => {
  return (
    <div className=" bg-[#F5F5F5]">
      <div className=" my-[130px] wrapper max-width py-[50px] max-md:my-[80px] flex flex-col gap-4">
        <div className="mt-[120px] max-md:mt-10 flex justify-center">
          <div className="flex justify-center text-center w-[1180px]">
            <span className="text-[55px] leading-[62px] max-lg:text-[42px] max-md:text-[30px] max-md:leading-[28px] tracking-tighter max-lg:leading-[40px] text-[#000659] max-md:px-4 font-source-sans-pro font-900">
              Discover Why Now Digital Easy is Your Top Choice for Google
              Workspace
            </span>
          </div>
        </div>
        <div className="mt-6 max-md:mt-2 flex justify-center">
          <div className="flex justify-center text-center  font-merriweather w-[1155px] max-lg:w-[720px]  max-md:w-[375px] text-[15px] max-md:text-[14px] font-700">
            <p>
              Embrace the future of simplicity, convenience, and efficiency.
              Explore why this transformative approach is reshaping how we live,
              work, and thrive in the digital age. Discover the key reasons why
              choosing &apos;Now Digital Easy &apos; is essential for staying
              ahead in a complex world
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-6">
          <div className=" flex justify-center flex-wrap gap-4 md:gap-5 xl:gap-7 items-center">
            {SERVICES_DATA.map((service, index) => (
              <div
                key={index}
                className="flex justify-center z-50 p-4 bg-background-Discover shadow-lg rounded-xl overflow-hidden relative"
              >
                <div className="flex group flex-col max-w-full w-[260px] max-md:w-[330px] h-[216px]  py-4 gap-6 ">
                  <div className="bg-[#F2F3FF] absolute  top-[-2px] left-0 group-hover: rounded-br-full group-hover:z-2 z-1 group-hover:h-[500px] h-[70px] group-hover:w-[500px] w-[70px] duration-500" />
                  <div className="flex justify-center px-2">
                    <Image
                      src={service.image}
                      alt={""}
                      className="group-hover:z-30 z-1 h-[50px]"
                    />
                  </div>
                  <span className="h-[40px] text-[24px] max-md:text-[20px]  group-hover:text-[#000659] text-[#000659] group-hover:z-30 z-1 text-center leading-[26px] font-source-sans-pro font-900">
                    {service.title}
                  </span>
                  <span className="h-[20px] text-[18px] max-md:mx-4 group-hover:text-[#151D8C] text-[#151D8C] group-hover:z-30 z-1 text-center leading-[20spx] font-merriweather">
                    {service.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Discover;
