import Image from "next/image";
import React from "react";
import arrowRight from "../../../../assets/icons/arrow-right.svg";

import Button from "@/components/Button";
import ClientsLogo from "@/components/ClientsLogo";

const Hero = () => {
  return (
    <div className="bg-gradient-light wrapper py-8 flex flex-col gap-12 sm:gap-16 xl:gap-24 items-center justify-center">
      <div className="flex flex-col gap-14 lg:gap-8 max-w-[550px] lg:max-w-none mx-auto sm:gap-24 lg:justify-between lg:flex-row w-full pt-12 xl:gap-24  lg:pt-24 xl:max-w-7xl">
        <div className="flex flex-col lg:mt-auto gap-4 sm:gap-6 items-center lg:items-start justify-center lg:justify-start max-w-[700px]">
          {/* Heading */}
          <h1 className="heading1 text-text-900">
            Hey Business Owners
            <br /> Go Digital Effortlessly
          </h1>
          <p className="text-s text-center lg:text-left font-500 text-text-900/80">
            Stop being static! Scale your business by going digital, the easy
            way, with NDE. We’re technology-enabled and structured for speed and
            efficiency to meet the ever-changing needs of today’s business.
          </p>

          <Button
            variant="cta"
            className="w-[185px] mt-4 sm:mt-8 lg:mt-0 cta flex items-center justify-center"
          >
            Get Started
            <Image
              src={arrowRight}
              alt="arrowRight"
              className="w-[10px] h-[16px]"
            />
          </Button>
        </div>

        {/* video */}
        <div className="aspect-[1.6/1] w-full lg:h-[280px] xl:h-[344px] lg:w-auto rounded-[34px] border-8 md:border-[14px] max-md:border-[10px] border-dark-500"></div>
      </div>

      {/* clients */}
      <ClientsLogo />
    </div>
  );
};

export default Hero;
