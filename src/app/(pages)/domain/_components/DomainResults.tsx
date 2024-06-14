"use client";

import Image from "next/image";
import x from "@/assets/icons/x.svg";
import { DomainAvailabilityResponse } from "@/services/google-workspace";

import { getSelectedCurrencySymbol } from "@/helpers/currencies";
import { useAppSelector } from "@/hooks/redux";
import { useEffect, useState } from "react";

type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  domains: DomainAvailabilityResponse[];
};
const DomainResults = ({ isOpen, setIsOpen, domains }: Props) => {
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

      <div className="flex flex-col items-center py-6">
        <div className="w-full px-20 mt-4">
          <div></div>

          {domains.length > 0 && (
            <div className="w-full">
              {domains[0].status == "product currently not available" && (
                <>
                  <div className="flex mr-[600px] gap-10 my-4 mx-2 w-full">
                    <span className="">{domains[0]?.domain}</span>
                    <div className="flex items-center gap-2">
                      <span className=" text-red-500 rounded-[100%] text-[13px] ">
                        X
                      </span>
                      <span className="text-red-500">Not Available</span>
                    </div>
                  </div>
                  <hr className=" bg-[#64646480] h-[2px]" />
                </>
              )}
              <ul
                className="
                  max-h-[400px] overflow-y-auto"
              >
                {domains
                  .filter((d: any) => d.status === "available")
                  .map((domain: any, index: any) => (
                    <DomainCard
                      key={index}
                      domain={domain.domain}
                      prices={domain.price}
                    />
                  ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DomainResults;

const DomainCard = ({
  domain,
  prices,
}: {
  domain: string;
  prices: DomainAvailabilityResponse["price"];
}) => {
  const [selectedPricing, setSelectedPricing] = useState(prices[0]);
  const { currency } = useAppSelector((state) => state.user);

  useEffect(() => {
    setSelectedPricing(prices[0]);
  }, [prices]);

  return (
    <div>
      <div className="flex justify-between items-center gap-10 my-4">
        <li className="">{domain}</li>
        <div className="flex items-center gap-5">
          <select
            className="border border-[#646464] p-1 w-[100px] rounded-lg"
            value={selectedPricing._id}
            onChange={(e) => {
              setSelectedPricing(
                prices.find((price) => price._id === e.target.value)!
              );
            }}
          >
            {prices.map((price, index) => (
              <option key={index} value={price._id}>
                {price.year} year
              </option>
            ))}
          </select>

          <span>
            {getSelectedCurrencySymbol(currency?.code!)}
            {selectedPricing.registerPrice}
          </span>

          <button className=" bg-[#0009FF] text-white rounded-[5px] p-2 shadow-black shadow-md">
            Add to Cart
          </button>
          <hr className=" bg-[#64646480]  h-[2px]" />
        </div>
      </div>
      <hr className=" bg-[#64646480]  h-[2px]" />
    </div>
  );
};
