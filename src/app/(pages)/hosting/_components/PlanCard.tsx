"use client";

import { ICONS } from "@/assets";
import { getSelectedCurrencySymbol } from "@/helpers/currencies";
import { useAppSelector } from "@/hooks/redux";
import { IHostingProduct } from "@/services/hosting";
import Image from "next/image";

interface PlanCardProps {
  startingPrice: string | number;
  billingInfo?: string;
  setSelectedPricing: React.Dispatch<
    React.SetStateAction<IHostingProduct | null>
  >;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  product: IHostingProduct;
}

const PlanCard: React.FC<PlanCardProps> = ({
  startingPrice,
  billingInfo,
  setIsOpen,
  setSelectedPricing,
  product,
}) => {
  const { currency } = useAppSelector((state) => state.user);
  return (
    <div className="flex flex-col rounded-2xl gap-4  w-[300px] bg-[#F5F6FF]">
      <div className="flex justify-center p-3 bg-[#8D8D8D1A] rounded-t-2xl rounded-b-none">
        <span className="subheading1 font-source-sans-pro">
          {product?.name}
        </span>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col">
          <div className="flex justify-center items-center">
            <span className=" mb-10 font-source-sans-pro font-700">
              {getSelectedCurrencySymbol(currency?.code!)}
            </span>
            <span className="font-source-sans-pro font-900 heading2">
              {startingPrice}
            </span>
          </div>
          <span className="text-[12px]">{billingInfo}</span>
        </div>
      </div>
      <span className="text-xs text-center">
        Start with our free plan and upgrade only when you need additional
        features.
      </span>
      <div className="flex justify-center my-2">
        <button
          onClick={() => {
            setIsOpen(true);
            setSelectedPricing(product);
          }}
          className="flex justify-center bg-white border-black border-[2px] w-[175px] font-merriweather text-md p-1"
        >
          Sign Up For Free
        </button>
      </div>
      <div className="flex flex-col gap-4 my-4">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center px-5 gap-2">
            <Image src={ICONS.check} alt="" />
            <span>{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const features = [
  "Single Pipeline",
  "500 Records",
  "Automations (3)",
  "Telephony",
  "Developer APIs",
  "Standard Dashboard",
];

export default PlanCard;
