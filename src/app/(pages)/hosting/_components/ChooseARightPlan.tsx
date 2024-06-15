"use client";

import React, { useEffect, useState } from "react";
import PlanCard from "./PlanCard";
import { useQuery } from "@tanstack/react-query";
import {
  IHostingProduct,
  handleGetHostingDetailsServices,
} from "@/services/hosting";
import { useAppSelector } from "@/hooks/redux";
import { PulseLoader } from "react-spinners";
import SelectAPlan from "./SelectAPlan";

const Plan = ({
  bgColor = "#F6E6F0",
  desc,
}: {
  bgColor?: string;
  desc?: string;
}) => {
  const { currency } = useAppSelector((state) => state.user);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPricing, setSelectedPricing] =
    useState<IHostingProduct | null>(null);
  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ["hosting"],
    queryFn: () => handleGetHostingDetailsServices(currency?.countryCode!),
  });

  useEffect(() => {
    if (isSuccess) {
      setSelectedPricing(data[0]);
    }
  }, [isSuccess]);

  return (
    <>
      <div style={{ backgroundColor: bgColor }} className={`py-16`}>
        <div className="flex justify-center items-center text-center flex-col gap-3 pt-8">
          <span className="heading4 font-source-sans-pro font-900 text-primary-500 pb-6 max-lg:text-3xl max-md:text-xl">
            Choose a Right Plan for Your Website
          </span>
          <p className="text-sm font-merriweather leading-[165%] md:text-base max-w-[700px]">
            {desc}
          </p>
        </div>
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <PulseLoader color="#12fa" size={10} />
          </div>
        ) : (
          <div className="flex justify-center items-center pt-8 gap-10 flex-wrap">
            {data?.map((product, i) => (
              <PlanCard
                key={product._id}
                startingPrice={product.price[0].amount}
                setSelectedPricing={setSelectedPricing}
                product={product}
                setIsOpen={setIsOpen}
              />
            ))}
          </div>
        )}
      </div>
      <SelectAPlan
        pricing={selectedPricing}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </>
  );
};

export default Plan;
