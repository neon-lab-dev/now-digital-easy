import Button from "@/components/Button";
import ClientsLogo from "@/components/ClientsLogo";
import React from "react";

const Hero = () => {
  return (
    <div
      style={{
        background: "linear-gradient(66deg, #D7D6FB 1.16%, #D0FFE5 98.04%)",
      }}
    >
      <div className="flex items-center justify-center flex-col gap-20 pb-16 pt-28 wrapper">
        <div className="flex flex-col items-center justify-center gap-5 ">
          <h1 className="text-primary-500 font-900 font-source-sans-pro text-[36px]  md:text-[42px] xl:text-[61px] tracking-[-2px] leading-[110%] text-center max-w-5xl">
            Simplify, Streamline, Supercharge Your Field Operations
          </h1>
          <p className="font-merriweather text-xs ms:text-base text-primary-500 text-center max-w-3xl">
            Real-time insights, daily work management, live tracking, resource
            allocation, and much more - all with a cloud-based Field Employee
            Tracking Software.
          </p>
          <div className="flex flex-col xs:flex-row gap-4 sm:gap-10">
            <Button variant="cta" className="rounded">
              Get Started Today
            </Button>
            <Button
              variant="primary"
              className="rounded border-[#00C358] min-h-[50px] font-merriweather font-700"
            >
              View Demo
            </Button>
          </div>
        </div>
        <ClientsLogo />
      </div>
    </div>
  );
};

export default Hero;
