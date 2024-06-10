"use client";

import Image from "next/image";
import { SERVICES_PLAN_DATA } from "@/assets/data/servicesPlanData";
import Button from "@/components/Button";
import { twMerge } from "tailwind-merge";
import { Fragment, useState } from "react";
import DomainCheckout from "./DomainCheckout";

const Features = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="wrapper max-width">
      <div className="flex justify-center pt-[120px]">
        <span className="text-[61px] max-lg:text-[30px]  leading-snug font-900 font-source-sans-pro max-md:text-[28px] text-center text-[#000659]">
          Find the right plan for your business.
        </span>
      </div>
      <div className="flex justify-center pt-[15px]">
        <span className="text-[15px] max-md:text-center font-merriweather max-md:text-[16px]">
          Choose the Google Workspace edition that best fits your business.
        </span>
      </div>
      <div className="w-full overflow-hidden mt-[50px]">
        <div className="w-full overflow-x-auto">
          <div className="grid grid-cols-[120px,1fr,1fr,1fr] md:grid-cols-[120px,3fr,1fr,1fr,1fr]  min-w-[630px]  mx-auto border border-[#0437CD] rounded-lg">
            <div className="bg-[#F2F3FF] font-900 flex items-center border-b border-b-[#AAD0FF] justify-center rounded-tl-lg flex-col text-center py-6 px-3">
              <span className="md:hidden">Google Workspace Tools</span>
            </div>
            <div className="!font-900 hidden md:flex items-center border-b border-b-[#AAD0FF] justify-center rounded-tl-lg flex-col text-center text-base lg:text-xl py-6 px-3">
              Google Workspace Features
            </div>
            {[
              {
                title: "Business Starter",
                price: "₹125/mo",
                action: () => setIsOpen(true),
              },
              {
                title: "Business Standard",
                price: "₹672/mo",
              },
              {
                title: "Business Plus",
                price: "₹1299/mo",
              },
            ].map((service, index) => (
              <div
                onClick={service.action}
                key={index}
                className={twMerge(
                  "flex flex-col items-center border-b md:min-w-[152px] border-b-[#AAD0FF] py-6 px-3 gap-1.5 justify-evenly font-900 text-center",
                  index === 2 && "rounded-tr-lg",
                  index !== 1 && " bg-[#F2F3FF]"
                )}
              >
                <div className="flex justify-center flex-col gap-1.5">
                  <span className="">{service.title}</span>
                  <span className="text-[18px] text-[#0437CD]">
                    {service.price}
                  </span>
                </div>

                <Button
                  variant="cta"
                  className="w-fit rounded-lg text-sm px-3 py-2.5"
                >
                  Add To Cart
                </Button>
              </div>
            ))}

            {/* details */}
            {SERVICES_PLAN_DATA.map((service, index) => (
              <Fragment key={index}>
                <div
                  className={twMerge(
                    "flex justify-center bg-[#F2F3FF] border-b text-sm md:text-base border-b-[#AAD0FF] ",
                    index === SERVICES_PLAN_DATA.length - 1 && "rounded-bl-lg"
                  )}
                >
                  <Image src={service.image} alt="email" />
                </div>
                <div className="hidden md:flex font-400 min-w-[150px] flex-col px-2.5 py-6 md:px-4 border-b border-b-[#AAD0FF] ">
                  {service.title}
                </div>
                <div className="bg-[#F2F3FF] font-400 flex items-center  flex-col px-2.5 py-6 md:px-4 border-b border-b-[#AAD0FF]">
                  {service.stater}
                </div>
                <div className=" font-400 flex items-center flex-col px-2.5 py-6 md:px-4 border-b border-b-[#AAD0FF] ">
                  {service.standard}
                </div>
                <div
                  className={twMerge(
                    "bg-[#F2F3FF] font-400 flex items-center flex-col px-2.5 py-6 md:px-4 border-b border-b-[#AAD0FF]",
                    index === SERVICES_PLAN_DATA.length - 1 && "rounded-br-lg"
                  )}
                >
                  {service.plus}
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
      <DomainCheckout isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};
export default Features;
