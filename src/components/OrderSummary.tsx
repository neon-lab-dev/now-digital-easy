// @ts-nocheck

"use client";
import { useState } from "react";
import Cookies from "js-cookie";
import Image from "next/image";
import google from "@/assets/images/image 110.svg";
import vector1 from "@/assets/images/chevron-down.svg";
import { useMutation, useQuery } from "@tanstack/react-query";
import hostingImage from "@/assets/icons/Upload to Cloud.png";
import { ICart } from "@/types/cart.types";
import { handleCheckoutService } from "@/services/checkout";
import { getSelectedCurrencySymbol } from "@/helpers/currencies";
import { useAppSelector } from "@/hooks/redux";
import { toast } from "react-toastify";

const OrderSummary = () => {
  const [showDetails, setShowDetails] = useState(false);
  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const { data } = useQuery<ICart>({
    queryKey: ["cart"],
  });

  const { mutate, isPending } = useMutation({
    mutationFn: () => {
      const token = Cookies.get("token");
      return handleCheckoutService({ token: token! });
    },
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      toast.error(error);
    },
  });

  const { currency } = useAppSelector((state) => state.user);

  return (
    <div className="">
      <div>
        <div
          onClick={toggleDetails}
          className="flex justify-between px-2 py-3 cursor-pointer "
        >
          <span className=" font-source-sans-pro font-600 text-[17px] px-2 ">
            Order Summary ({data?.products?.length})
          </span>
          <Image
            src={vector1}
            alt={""}
            className={`${
              showDetails ? "rotate-0" : "rotate-180"
            } transition-transform duration-500`}
          />
        </div>
        <hr />
        {showDetails && (
          <div className="order-details">
            {data?.products?.map((item, i) => (
              <div
                key={i}
                className="flex p-4 gap-8 justify-between items-start hover:bg-[#e1e1e180]"
              >
                <div className="flex items-start gap-3">
                  <Image
                    src={item.product === "hosting" ? hostingImage : google}
                    alt=""
                  />
                  <div className="flex flex-col gap-1 ">
                    <span className="font-source-sans-pro text-[15px] font-700 text-[#000000] capitalize">
                      {item.groupName}
                    </span>
                    <span className="w-[130px] font-source-sans-pro text-[12px] font-600 text-[#000000]">
                      {item?.productName} (
                      <span className="text-[#0011FF]">{item.domainName}</span>)
                    </span>
                  </div>
                </div>
                <div className="flex justify-between items-center gap-2 ml-[23px]">
                  <span className="font-source-sans-pro text-[12px] font-700 text-[#000000]">
                    ₹
                    {item.product === "gsuite"
                      ? item.gsuitePrice
                      : item.product === "hosting"
                      ? item.pleskPrice
                      : item.domainprice}
                  </span>
                </div>
              </div>
            ))}
            <hr />
          </div>
        )}
        <div className="flex justify-between items-start py-2 px-4">
          <div className="flex flex-col gap-3 font-source-sans-pro text-[15px] font-400 text-[#000000] text-start">
            <span>Subtotal</span>
            <span>Tax</span>
          </div>
          <div className="flex flex-col gap-3 font-source-sans-pro text-[15px] font-700 text-[#000000] text-end ">
            <span>
              {getSelectedCurrencySymbol(currency?.code!)} {data?.subTotal}
            </span>
            <span>
              {getSelectedCurrencySymbol(currency?.code!)}{" "}
              {Number(data?.Total) - Number(data?.subTotal)}
            </span>
          </div>
        </div>
        <hr />
        <div className="flex justify-end">
          <div className="flex gap-12 font-source-sans-pro text-[17px] font-900 text-[#000000] text-start py-4 px-3">
            <span>Total</span>
            <span>
              {getSelectedCurrencySymbol(currency?.code!)} {data?.Total}
            </span>
          </div>
        </div>
        <hr />
        <div className="flex justify-center p-4">
          <button
            onClick={() => mutate()}
            className="font-source-sans-pro text-[17px] font-400  text-white px-10 py-1 bg-[#0011FF] rounded-xs h-[40px] w-[215px] rounded-[4px]"
          >
            {isPending
              ? "Loading..."
              : `Pay ${getSelectedCurrencySymbol(currency?.code!)} ${
                  data?.Total
                }`}
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
