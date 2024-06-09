import React from 'react';
import Form from './Form';

const Hero = () => {
  return (
    <div className=" wrapper border flex flex-row pt-[54px] md:pt-[81px] flex-wrap justify-center w-full gap-[80px] h-full">
      {/* Heading */}
      <h1 className="max-w-[444px] heading1 text-primary-500 text-center lg:text-left lg:pt-[52px] md:pb-[72px]">
        Book a demo to explore NDE
      </h1>
      <Form />
    </div>
  );
};

export default Hero;
