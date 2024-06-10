import Button from "@/components/Button";
import ClientsLogo from "@/components/ClientsLogo";
import React from "react";

const Hero = () => {
  return (
    <div
      style={{
        background: "linear-gradient(113deg, #D3D6FD 0%, #F0FFC6 100%)",
      }}
    >
      <div className="flex items-center justify-center flex-col gap-20 pb-16 pt-28 wrapper">
        <div className="flex w-full h-full items-center justify-center">
          <div className="flex flex-col items-center justify-center xl:justify-start xl:items-start gap-5 md:min-w-[650px]">
            <h1 className="text-primary-500 font-900 font-source-sans-pro text-[36px]  md:text-[42px] xl:text-[61px] tracking-[-2px] leading-[110%] text-center  xl:text-left max-w-5xl">
              Discover the future of customer engagement
            </h1>
            <p className="font-merriweather text-xs ms:text-base text-primary-500 text-center max-w-3xl xl:text-left">
              Enhance your communication with prospects and customers at every
              stage of their customer journey—from the time they land on your
              website to the customer support phase—with Zoho SalesIQ's live
              chat software.
            </p>
            <Button variant="cta" className="rounded">
              Get Started Today
            </Button>
          </div>
          <div className="h-full hidden xl:block flex-grow w-full"></div>
        </div>
        <ClientsLogo />
      </div>
    </div>
  );
};

export default Hero;
