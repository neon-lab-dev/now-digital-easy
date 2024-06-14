"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import x from "@/assets/icons/x.svg";

import { getSelectedCurrencySymbol } from "@/helpers/currencies";
import { IHostingProduct } from "@/services/hosting";
import { useAppSelector } from "@/hooks/redux";

type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  pricing: IHostingProduct | null;
};
const SelectAPlan = ({ isOpen, setIsOpen, pricing }: Props) => {
  const [selectedPricing, setSelectedPricing] = useState(pricing?.price[0]);
  const { currency } = useAppSelector((state) => state.user);

  useEffect(() => {
    setSelectedPricing(pricing?.price[0]);
  }, [pricing]);

  return (
    <div
      style={{
        scale: isOpen ? 1 : 0,
      }}
      className="bg-gradient-checkout transition-all w-[1000px]  border border-[#000659] shadow-[#00065980] shadow-2xl rounded-xl fixed bottom-6 left-1/2 -translate-x-1/2 z-[100]"
    >
      <button
        onClick={() => setIsOpen(false)}
        className="absolute -top-4 -right-4 bg-gray-400 rounded-full p-1"
      >
        <Image src={x} alt="" className="h-6 w-6" />
      </button>
      <div className="flex justify-between items-center px-6  py-6">
        <div className="flex flex-col gap-2">
          <span className="text-[17px] text-[#000659] leading-[15px]">
            Plan Name
          </span>
          <span className="font-400 text-[15px]">{pricing?.name}</span>
        </div>
        <div className="flex flex-col h-[100px] pt-5 gap-1">
          <span className="text-[17px] text-[#000659]">Duration</span>
          <select
            className="border border-[#646464] p-1 w-[100px] rounded-lg"
            value={selectedPricing?.period}
            onChange={(e) => {
              setSelectedPricing(
                pricing?.price.find((price) => price.period === e.target.value)!
              );
            }}
          >
            {pricing?.price.map((price, index) => (
              <option key={index} value={price.period}>
                {price.period}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col ">
          <span className="text-[17px] text-[#000659] leading-[15px]">
            Total
          </span>
          <span className="text-[24px] font-600">
            {getSelectedCurrencySymbol(currency?.code!)}
            {selectedPricing?.amount}
          </span>
        </div>
        <button className="px-8 py-4 rounded-xl bg-[#0009FF] text-white disabled:opacity-75">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default SelectAPlan;
