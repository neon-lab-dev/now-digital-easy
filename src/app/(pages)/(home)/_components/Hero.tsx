import Image from "next/image";
import React from "react";
import arrowRight from "../../../../assets/icons/arrow-right.svg";
import Marquee from "react-fast-marquee";
import { ICONS, IMAGES } from "@/assets";

const Hero = () => {
  return (
    <div className='bg-gradient-light'>

      <div className="flex gap-[31px] pl-[72px] pt-[94px] ">
        <div className="w-[60%]">
          <h1 className="heading1 tracking-[-2]">
            Hey Business Owners Go Digital Effortlessly
          </h1>
          <p className="text-base-bold mt-[21px]">
            Stop being static! Scale your business by going digital, the easy
            way, with NDE. We’re technology-enabled and structured for speed and
            efficiency to meet the ever-changing needs of today’s business.
          </p>

          <button className="mt-[29px] px-8 py-4 bg-primary-400 flex items-center gap-5 text-white rounded-[50px] cta">
            Get Started
            <Image
              src={arrowRight}
              alt="arrowRight"
              className="w-[10px] h-[16px]"
            />
          </button>
        </div>
        {/* video */}
        <div className="w-[40%] mr-16 h-[344px] rounded-[34px] border-[15px] border-dark-500"></div>
      </div>

      <div className="mt-[88px] pb-[25px] flex flex-col gap-[25px]">
        <h2 className="text-base-bold text-center">
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
        </Marquee>
      </div>
    </div>
  );
};

export default Hero;
