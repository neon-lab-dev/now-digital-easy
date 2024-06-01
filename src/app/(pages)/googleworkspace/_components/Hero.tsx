import Image from "next/image";
import { IMAGES } from "@/assets";
import hero from "@/assets/images/Group 69102 (1).svg";

import React from "react";
import Marquee from "react-fast-marquee";
import { twMerge } from "tailwind-merge";
import Button from "@/components/Button";

const Hero = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(270deg, rgba(186, 215, 201, 0.90) 0.38%, rgba(254, 243, 227, 0.90) 49.19%, rgba(211, 214, 253, 0.90) 99.99%)",
      }}
      className="wrapper py-8 flex flex-col gap-12 sm:gap-16 xl:gap-24 items-center justify-center"
    >
      <div className="flex flex-col gap-14 lg:gap-8 max-w-[550px] lg:max-w-none mx-auto sm:gap-24 lg:justify-between lg:flex-row w-full pt-12 xl:gap-24  lg:pt-24 xl:max-w-7xl">
        <div className="flex flex-col lg:mt-auto gap-3 sm:gap-6 items-center lg:items-start justify-center lg:justify-start max-w-[800px]">
          {/* Heading */}
          <h1 className="heading1 text-primary-500 text-center lg:text-left">
            Empower Your Team
            <br className="hidden lg:block" /> With Google Workspace
          </h1>
          <ul className="grid grid-cols-1 xs:grid-cols-2 gap-x-6 gap-y-1 font-merriweather py-2 list-disc list-inside text-[17px] font-700 max-lg:text-[17px] max-md:text-[14px] text-[#151D8C]">
            {[
              "Custom Business Email",
              "30 GB of Cloud Storage",
              "High Standard Security.",
              "100 Meet Participants",
            ].map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <div className="flex flex-col gap-1 items-center lg:items-start justify-center text-primary-200 font-merriweather text-sm sm:text-base font-700">
            <span>
              Starts at{" "}
              <span className="font-source-sans-pro text-[28px] md:text-[38px] font-900 text-[#01F]">
                ₹136/user/mo
              </span>
            </span>
            <span>For Additional Discount</span>
          </div>

          <Button
            variant="cta"
            className="cta flex items-center justify-center"
          >
            Request A Call Back
          </Button>
        </div>

        {/* video */}
        <Image
          src={hero}
          alt="hero"
          className=" max-md:w-[350px] w-[500px] max-2xl:w-[400px] m-auto"
        />
      </div>

      {/* clients */}
      <div className="flex flex-col gap-5 sm:gap-7 w-full max-width">
        <h2 className="text-text-700 text-base-bold text-center max-md:text-[13px]">
          12,000+ global businesses trust us to transform & grow digitally
        </h2>
        <Marquee
          pauseOnHover={true}
          className="flex items-center justify-center"
        >
          {[
            IMAGES.img1,
            IMAGES.img2,
            IMAGES.img3,
            IMAGES.img4,
            IMAGES.img5,
            IMAGES.img6,
            IMAGES.img7,
            IMAGES.img8,
          ].map((img, index) => (
            <Image
              key={index}
              src={img}
              alt="logo"
              className={twMerge(
                "object-contain object-center max-h-[60px] max-w-[60px]",
                index !== 0 ? "ml-14" : ""
              )}
              height={100}
              width={100}
              quality={100}
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Hero;
