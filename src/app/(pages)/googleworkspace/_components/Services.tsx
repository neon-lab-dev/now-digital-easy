"use client";
import { SERVICES_DATA } from "@/assets/data/servicesData";
import React, { useState } from "react";
interface ServiceCardProps {
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="flex justify-center z-50 p-4 ">
      <div
        className={`flex flex-col w-[368px] min-h-[200px] bg-[#F0F1FF] p-8  gap-2 rounded-xl relative overflow-hidden shadow-lg `}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className={` bg-[#000AFF] absolute right-0 top-[-2px]  ${
            isHovered ? "" : "rounded-bl-full"
          } ${isHovered ? "z-2" : "z-1"} ${
            isHovered ? "h-[210px]" : "h-[40px]"
          } ${isHovered ? "w-[368px]" : "w-[50px]"}  duration-500  ]`}
        ></div>
        <span
          className={` text-[24px] font-source-sans-pro font-900  ${
            isHovered ? "text-white" : "text-[#0437CD]"
          } ${isHovered ? "z-30" : "z-1"}`}
        >
          {title}
        </span>
        <span
          className={` text-[15px] font-merriweather font-400 ${
            isHovered ? "text-white" : "text-[#646464]"
          } ${isHovered ? "z-30" : "z-1"}`}
        >
          {description}
        </span>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div className="pt-[180px] max-lg:pt-[50px] bg-background-service">
      <div className="max-width wrapper">
        <div className="flex justify-center text-[#000659] font-900">
          <span className="text-[55px] max-lg:text-[38px] max-md:text-[24px] text-center">
            Services What We Provide For You
          </span>
        </div>
        <div className="flex justify-center ">
          <div className=" grid grid-cols-3 gap-4 max-md:gap-2 max-lg:grid-cols-2 max-md:grid-cols-1">
            {SERVICES_DATA.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="h-[100px] bg-background-fade"></div>
    </div>
  );
};
export default Services;
