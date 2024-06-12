import React from "react";
import Hero from "./_components/Hero";
import DomainNames from "./_components/_domainNames/DomainNames";
import ChooseRightDomain from "./_components/ChooseRightDomain";
import WhyChoose from "./_components/WhyChoose";

const page = () => {
  return (
    <div>
      <Hero />
      <DomainNames />
      <ChooseRightDomain />
      <WhyChoose />
    </div>
  );
};

export default page;
