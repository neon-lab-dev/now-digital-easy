import Image from "next/image";
import React from "react";
import arrowRight from "../../../../assets/icons/arrow-right.svg";
import Marquee from "react-fast-marquee";
import { ICONS, IMAGES } from "@/assets";

const Hero = () => {
  return (
    <div className='bg-gradient-light'>
      <div className="flex  gap-[31px] pl-[72px] max-md:pl-8 pt-[94px] max-lg:flex-col">
        <div className="w-[700px] max-md:w-[350px] ">
          {/* Heading */}
          <div className="flex max-lg:justify-center">
            <h1 className="heading1 tracking-[-2px] max-lg:text-[42px] max-md:text-[26px]">
              Hey Business Owners<br /> Go Digital Effortlessly
            </h1>
          </div>
          <p className="text-base-bold mt-[21px] max-md:text-[15px] max-md:text-center">
            Stop being static! Scale your business by going digital, the easy
            way, with NDE. We’re technology-enabled and structured for speed and
            efficiency to meet the ever-changing needs of today’s business.
          </p>

          <div className="flex max-lg:justify-center max-lg:py-6">
            <button className="mt-[29px] w-[185px] px-6 py-3  bg-primary-400 flex items-center gap-2 text-white rounded-[50px] cta">
              Get Started
              <Image
                src={arrowRight}
                alt="arrowRight"
                className="w-[10px] h-[16px]"
              />
            </button>
          </div>
        </div>

        {/* video */}
        <div className="w-[55%] max-lg:w-[600px] max-md:mr-0  mr-16 aspect-[550/332] max-md:w-[370px] rounded-[34px] border-[15px] max-md:border-[10px] border-dark-500"></div>
      </div>
      <div className="mt-[88px] pb-[25px] flex flex-col gap-[25px] max-md:w-full">
        <h2 className="text-base-bold text-center max-md:text-[13px]">
          12,000+ global businesses trust us to transform & grow digitally
        </h2>
        <Marquee pauseOnHover={true} className="flex items-center">
          <Image src={IMAGES.img1} alt="logo1" className="mr-[62px]" />
          <Image src={IMAGES.img2} alt="logo1" className="mr-[62px]" />
          <Image src={IMAGES.img3} alt="logo1" className="mr-[62px]" />
          <Image src={IMAGES.img4} alt="logo1" className="mr-[62px]" />
          <Image src={IMAGES.img5} alt="logo1" className="mr-[62px]" />
          <Image src={IMAGES.img6} alt="logo1" className="mr-[62px]" />
          <Image src={IMAGES.img7} alt="logo1" className="mr-[62px]" />
          <Image src={IMAGES.img8} alt="logo1" className="mr-[62px]" />
          <Image src={IMAGES.img4} alt="logo1" className="mr-[62px]" />
        </Marquee>
      </div>
    </div>
  );
};

export default Hero;
