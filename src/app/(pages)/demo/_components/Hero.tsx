import React from "react";
import Form from "./Form";

const Hero = () => {
  return (
    <div className="wrapper absolute top-[71px] flex flex-row flex-wrap justify-center w-full gap-[80px] h-full">
      {/* Heading */}
      <h1 className="2xl:max-w-[444px] text-heading1 leading-heading1 font-[900] mt-[50px] text-primary-500 text-center lg:text-left">
        Book a demo to explore NDE
      </h1>
      <Form />
    </div>
  );
};

export default Hero;
