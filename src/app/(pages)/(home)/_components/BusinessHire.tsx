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
        <div className="w-[75%] text-center flex flex-col gap-5 md:gap-6 text-[#363B4C] items-center">
          <span className="text-[20px] md:text-[36px] xl:text-[42px] font-900 leading-tight font-merriweather">
            Businesses hire us because of the results we provide.
          </span>
          <span className="text-s flex items-center justify-center w-[650px] max-lg:w-[550px] max-md:w-[350px] max-lg:text-[14px]">
            We transform businesses wholly, across all the digital touch-points
            with targeted, highly relevant and personalized experiences.
          </span>
        </div>
      </div>
      <div className="flex max-lg:flex-col justify-center pb-10 gap-6 md:gap-12">
        <div className="h-[274px] w-full md:h-[525px] border-2 rounded-3xl lg:h-auto bg-gradient-gif flex-grow"></div>
        <div className="flex flex-col gap-6 w-full lg:max-w-[385px]">
          {BUTTONS.map((button, index) => (
            <button
              key={index}
              className={`rounded-xl flex items-center !text-[20px] md:!text-[24px] max-lg:justify-center gap-3 px-3 w-full h-[92px] border-[3px] bg-[#F8F9FA]  ${
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
