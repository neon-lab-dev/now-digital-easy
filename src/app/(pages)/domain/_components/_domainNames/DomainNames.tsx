/* eslint-disable react/no-unescaped-entities */
import React from "react";
import DomainNameCard from "./DomainNameCard";

export type TDomainNames = {
  domainName: string;
  details: string;
  price: string;
};

const DomainNames = () => {
  const domainNames: TDomainNames[] = [
    {
      domainName: ".Com",
      details:
        "The most popular and professional extension for any kind of website.",
      price: "Starting at $12.99/first year*",
    },
    {
      domainName: ".Store",
      details:
        "The most popular and professional extension for any kind of website.",
      price: "Starting at $12.99/first year*",
    },
    {
      domainName: ".Org",
      details:
        "The most popular and professional extension for any kind of website.",
      price: "Starting at $12.99/first year*",
    },
    {
      domainName: ".Com",
      details:
        "The most popular and professional extension for any kind of website.",
      price: "Starting at $12.99/first year*",
    },
    {
      domainName: ".Store",
      details:
        "The most popular and professional extension for any kind of website.",
      price: "Starting at $12.99/first year*",
    },
    {
      domainName: ".Org",
      details:
        "The most popular and professional extension for any kind of website.",
      price: "Starting at $12.99/first year*",
    },
  ];
  return (
    <div className="max-width flex flex-col gap-5 mt-20">
      <div className="flex flex-col gap-4">
        <h1 className="heading1 text-primary-500 font-source-sans-pro text-center tracking-2">
          Build your brand with the perfect domain name
        </h1>
        <p className="font-merriweather text-[14px] md:text-[15px] mt-8 md:mt-[19px] xl:mt-4 font-700 text-dark-500 leading-6 text-center">
          With more than 300 domain extensions, you'll find the one that fits
          just right. 
        </p>
      </div>

      <div className="flex gap-5 flex-wrap justify-center mt-[72px] md:mt-[65px]">
        {domainNames.map((data, index) => (
          <DomainNameCard key={index} data={data} />
        ))}
      </div>
    </div>
  );
};

export default DomainNames;
