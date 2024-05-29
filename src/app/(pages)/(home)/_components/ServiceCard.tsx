import { IMAGES } from "@/assets";
import Image from "next/image";
import React from "react";

type Props = {
  title: string;
  subTitle: string;
  details: string;
};

const ServiceCard = ({ details, subTitle, title }: Props) => {
  return (
    <div className="bg-gradient-card snap-center max-w-[85%] min-w-[300px] sm:min-w-[350px] max-md:w-[330px]  max-md:h-[420px] h-[420px] max-lg:h-[350px] max-lg:w-[226px] rounded-2xl">
      <div className="relative">
        <Image
          src={IMAGES.cardBg}
          alt="cardBg"
          className="w-full h-[153px] max-lg:h-[140px] max-md:h-[153px]"
        />
        <div className="bg-primary-400 w-full h-[60px] max-md:h-[60px] max-lg:h-[40px] flex items-center absolute top-[55px]">
          <div className="flex items-center px-4 gap-2">
            <h1 className="font-source-sans-pro font-900 text-[30px] text-white max-lg:text-[14px] max-md:text-[30px]">
              {title}
            </h1>
            <div className="bg-primary-400 w-[120px] max-md:w-[120px] max-md:h-[120px] max-lg:w-[100px] h-[120px] max-lg:h-[100px] rounded-full flex justify-center items-center">
              <div className="bg-white w-[90px] h-[90px]  rounded-full flex justify-center items-center">
                <Image
                  src={IMAGES.communication}
                  alt="cardBg"
                  className="w-[52px] max-lg:w-[30px] max-md:w-[52px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-6 pb-[30px]">
        <h1 className="subheading3 mt-[12px] max-w-[190px] max-md:text-[24px] max-lg:text-[22px] max-lg:leading-[22px]">
          {subTitle.length > 25 ? subTitle.slice(0, 22) + "..." : subTitle}
        </h1>
        <p className="card-text-body mt-[14px] max-md:text-[18px] max-md:leading-[20px] max-lg:text-[12px] max-lg:leading-[13px] ">
          {details}
        </p>
        <button className="card-text-cta text-primary-400 mt-5 underline transition duration-300 transform hover:-translate-y-0.5">
          Know More
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
