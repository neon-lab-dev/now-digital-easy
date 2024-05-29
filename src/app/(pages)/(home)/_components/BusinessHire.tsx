"use client";
import { SetStateAction, useState } from "react";
import Image from "next/image";
import business from "@/assets/images/Rectangle 46383.svg";
import tools from "@/assets/images/AdministrativeTools.svg";
import safe from "@/assets/images/Protect.svg";
import money from "@/assets/images/Receive Euro.svg";
import building from "@/assets/images/Business Buildings.svg";
import people from "@/assets/images/People.svg";

const BUTTONS = [
  {
    label: "Safe and Secure",
    image: safe,
  },
  {
    label: "User Friendly Tools",
    image: tools,
  },
  {
    label: "Budget-Friendly Pricing",
    image: money,
  },
  {
    label: "10+ Years Experience",
    image: building,
  },
  {
    label: "12,000+ Customers",
    image: people,
  },
];

const BusinessHire = () => {
  const [activeButton, setActiveButton] = useState(BUTTONS[0].label);

  const handleClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  return (
    <div className="flex flex-col gap-11 pt-[120px] max-width wrapper">
      <div className="flex justify-center">
        <div className="w-[75%] text-center flex flex-col gap-10 text-[#363B4C] items-center">
          <span className="heading2 max-lg:text-[36px] max-lg:leading-[30px]">
            Businesses hire us because of the results we provide.
          </span>
          <span className="text-s flex items-center justify-center w-[650px] max-lg:w-[550px] max-md:w-[350px] max-lg:text-[14px] ">
            We transform businesses wholly, across all the digital touch-points
            with targeted, highly relevant and personalized experiences.
          </span>
        </div>
      </div>
      <div className="flex max-lg:flex-col justify-center py-10 gap-4 max-lg:mx-8">
        <div className="h-[556px] w-[850px] max-lg:w-[712px] max-md:w-[350px] max-md:h-[300px] rounded-[60px] bg-gradient-gif flex-grow"></div>
        <div className="flex flex-col gap-6 w-full xl:max-w-[385px]">
          {BUTTONS.map((button, index) => (
            <button
              key={index}
              className={`rounded-xl flex items-center max-lg:justify-center gap-3 px-3 w-full h-[92px] border-[3px] bg-[#F8F9FA]  ${
                activeButton === button.label
                  ? "border-[#1224F1] shadow-lg"
                  : "border-none"
              }`}
              onClick={() => handleClick(button.label)}
            >
              <Image
                src={button.image}
                className="w-[60px] h-[60px] "
                alt={""}
              />
              <span
                className={`subheading3 ${
                  activeButton === button.label ? "text-[#1224F1]" : ""
                }`}
              >
                {button.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BusinessHire;
