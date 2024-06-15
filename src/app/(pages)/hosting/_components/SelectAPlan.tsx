"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import x from "@/assets/icons/x.svg";

import { getSelectedCurrencySymbol } from "@/helpers/currencies";
import { IHostingProduct } from "@/services/hosting";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  DomainAvailabilityResponse,
  handleCheckDomainAvailabilityService,
} from "@/services/google-workspace";
import { toast } from "react-toastify";
import { handleAddAItemToCartService } from "@/services/cart";
import { BeatLoader } from "react-spinners";
import { ICartItemDomain } from "@/types/cart.types";
import { addCartItem } from "@/store/slices/cartSlice";

type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  pricing: IHostingProduct | null;
};
const SelectAPlan = ({ isOpen, setIsOpen, pricing }: Props) => {
  const [selectedPricing, setSelectedPricing] = useState(pricing?.price[0]);
  const [radioInputValue, setRadioInputValue] = useState("register");
  const [inputValue, setInputValue] = useState("");
  const [tab, setTab] = useState("hosting");
  const dispatch = useAppDispatch();
  const { currency, isLoggedIn } = useAppSelector((state) => state.user);
  const queryClient = useQueryClient();

  useEffect(() => {
    setSelectedPricing(pricing?.price[0]);
  }, [pricing]);

  const {
    mutate: handleCheckAvailability,
    isPending: isCheckAvailabilityPending,
    data: domainAvailabilityData,
    isSuccess: isCheckAvailabilitySuccess,
  } = useMutation({
    mutationFn: handleCheckDomainAvailabilityService,
    onError: (error: string) => {
      toast.error(error);
    },
    onSuccess: (data) => {
      setIsOpen(true);
    },
  });

  const { mutate: handleAddToCart, isPending: isAddToCartPending } =
    useMutation({
      mutationFn: handleAddAItemToCartService,
      onError: (error: string) => {
        toast.error(error);
      },
      onSuccess: () => {
        toast.success("Domain added to cart");
        queryClient.invalidateQueries({
          queryKey: ["cart"],
        });
      },
    });

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
      {tab === "hosting" && (
        <>
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
                    pricing?.price.find(
                      (price) => price.period === e.target.value
                    )!
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
            <button
              onClick={() => {
                setTab("domain");
              }}
              className="px-8 py-4 rounded-xl bg-[#0009FF] text-white disabled:opacity-75"
            >
              Attach Domain
            </button>
          </div>
        </>
      )}
      {tab === "domain" && (
        <>
          <div className="flex flex-col items-center py-6">
            <div className="flex justify-start items-start w-[900px]">
              {[
                {
                  option: "Register a New Domain",
                  value: "register",
                },
                {
                  option: "I already have a Domain Name",
                  value: "existing",
                },
              ].map((option, index) => (
                <label
                  htmlFor={option.value}
                  key={index}
                  className="flex items-center ps-4 rounded cursor-pointer"
                >
                  <input
                    id={option.value}
                    type="radio"
                    value={option.value}
                    name="bordered-radio"
                    checked={radioInputValue === option.value}
                    onChange={(e) => setRadioInputValue(e.target.value)}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 "
                  />
                  <span className="w-full py-4 ms-2 font-medium text-black">
                    {option.option}
                  </span>
                </label>
              ))}
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (radioInputValue === "register") {
                  handleCheckAvailability({
                    country_code: currency?.countryCode!,
                    domain: inputValue,
                  });
                }
              }}
              className="flex justify-center"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => {
                  //accept only alphanumeric and hyphen and dot
                  const regex = /^[a-zA-Z0-9.-]*$/;
                  if (!regex.test(e.target.value)) {
                    return;
                  }
                  setInputValue(e.target.value);
                }}
                autoFocus
                className="bg-transparent border border-black w-[700px] h-[50px] px-4 "
              />
              {radioInputValue === "register" ? (
                <button
                  disabled={isCheckAvailabilityPending || !inputValue}
                  className="px-4 py-2 h-[51px] bg-[#0009FF] disabled:opacity-90 text-white  shadow-black shadow-md"
                >
                  {isCheckAvailabilityPending ? (
                    <BeatLoader color="#ffffff" size={12} />
                  ) : (
                    "Check Availability"
                  )}
                </button>
              ) : (
                <button
                  onClick={() => {
                    const data = {
                      product: "hosting",
                      productId: pricing?._id,
                      domainName: inputValue,
                      period: selectedPricing?.period,
                    };
                    if (isLoggedIn) {
                      handleAddToCart(data);
                    } else {
                      dispatch(
                        // @ts-ignore
                        addCartItem({
                          ...data,
                        } as ICartItemDomain)
                      );
                      toast.success("Hosting added to cart");
                    }
                  }}
                  className="px-7 py-2 h-[50px] bg-[#0009FF] text-white shadow-black shadow-md"
                >
                  {isAddToCartPending ? (
                    <BeatLoader color="#ffffff" size={12} />
                  ) : (
                    "Add to cart"
                  )}
                </button>
              )}
            </form>
            {isCheckAvailabilitySuccess &&
              radioInputValue === "register" &&
              domainAvailabilityData && (
                <div className="w-full px-20 mt-4">
                  <div></div>
                  {isCheckAvailabilityPending ? (
                    <div className=" items-start mt-2 leading-10 px-4 mr-[270px]">
                      {`Checking availability of ${inputValue}...`}
                    </div>
                  ) : (
                    domainAvailabilityData.length > 0 && (
                      <div className="w-full">
                        {domainAvailabilityData[0].status ==
                          "product currently not available" && (
                          <>
                            <div className="flex mr-[600px] gap-10 my-4 mx-2 w-full">
                              <span className="">
                                {domainAvailabilityData[0]?.domain}
                              </span>
                              <div className="flex items-center gap-2">
                                <span className=" text-red-500 rounded-[100%] text-[13px] ">
                                  X
                                </span>
                                <span className="text-red-500">
                                  Not Available
                                </span>
                              </div>
                            </div>
                            <hr className=" bg-[#64646480] h-[2px]" />
                          </>
                        )}
                        <ul
                          className="
                  max-h-[400px] overflow-y-auto"
                        >
                          {domainAvailabilityData
                            .filter((d: any) => d.status === "available")
                            .map((domain, i) => (
                              <DomainCard
                                domain={domain.domain}
                                prices={domain.price}
                                key={i}
                                period={selectedPricing?.period!}
                                productId={pricing?._id!}
                              />
                            ))}
                        </ul>
                      </div>
                    )
                  )}
                </div>
              )}
          </div>
        </>
      )}
    </div>
  );
};

export default SelectAPlan;

const DomainCard = ({
  domain,
  prices,
  period,
  productId,
}: {
  domain: string;
  prices: DomainAvailabilityResponse["price"];
  period: string;
  productId: string;
}) => {
  const [selectedPricing, setSelectedPricing] = useState(prices[0]);
  const { isLoggedIn } = useAppSelector((state) => state.user);
  const { currency } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const queryClient = useQueryClient();

  useEffect(() => {
    setSelectedPricing(prices[0]);
  }, [prices]);

  const { mutate: handleAddToCart, isPending: isAddToCartPending } =
    useMutation({
      mutationFn: handleAddAItemToCartService,
      onError: (error: string) => {
        toast.error(error);
      },
      onSuccess: () => {
        toast.success("Added to cart!");
        queryClient.invalidateQueries({
          queryKey: ["cart"],
        });
      },
    });

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

          <button
            onClick={() => {
              const data = {
                product: "hosting",
                productId: productId,
                domainName: domain,
                period: period,
              };
              if (isLoggedIn) {
                handleAddToCart(data);
              } else {
                dispatch(
                  // @ts-ignore
                  addCartItem({
                    ...data,
                  } as ICartItemDomain)
                );
                toast.success("Hosting added to cart");
              }
            }}
            className=" bg-[#0009FF] text-white rounded-[5px] p-2 shadow-black shadow-md"
          >
            {isAddToCartPending ? "Adding ..." : "Add to cart"}
          </button>
          <hr className=" bg-[#64646480]  h-[2px]" />
        </div>
      </div>
      <hr className=" bg-[#64646480]  h-[2px]" />
    </div>
  );
};