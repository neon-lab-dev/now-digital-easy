"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import x from "@/assets/icons/x.svg";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  DomainAvailabilityResponse,
  handleCheckDomainAvailabilityService,
} from "@/services/google-workspace";
import { BeatLoader } from "react-spinners";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import {
  handleAddAItemToCartService,
  handleGetAllCartItemsService,
} from "@/services/cart";
import { IGSuiteProduct } from "@/services/gsuite";
import { getSelectedCurrencySymbol } from "@/helpers/currencies";
import { getLocalStorage, setLocalStorage } from "@/helpers/localstorage";
import { useDispatch } from "react-redux";
import { addCartItem } from "@/store/slices/cartSlice";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { DOMAIN_REGEX } from "@/assets/constants/regex";
import {
  setIsSideBarActive,
  setIsSidebarOpen,
} from "@/store/slices/sidebarSlice";
import { ICartItemDomain } from "@/types/cart.types";

type IsOpen = {
  open: boolean;
  selectedServiceNameFromBackend: string;
  title: string;
};

type Props = {
  isOpen: IsOpen;
  setIsOpen: React.Dispatch<React.SetStateAction<IsOpen>>;
  selectedService: IGSuiteProduct;
};
const DomainCheckout = ({ isOpen, setIsOpen, selectedService }: Props) => {
  const [isBuyNowClicked, setIsBuyNowClicked] = useState(false);
  const [radioInputValue, setRadioInputValue] = useState("register");
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const [selectedNumberOfAccounts, setSelectedNumberOfAccounts] = useState(1);
  const queryClient = useQueryClient();
  const [selectedPricing, setSelectedPricing] = useState(
    selectedService?.price[0]
  );

  useEffect(() => {
    if (selectedService) {
      setSelectedPricing(selectedService.price[0]);
    }
  }, [selectedService]);

  const { currency } = useAppSelector((state) => state.user);

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
        scale: isOpen.open ? 1 : 0,
      }}
      className="bg-gradient-checkout transition-all w-[1000px]  border border-[#000659] shadow-[#00065980] shadow-2xl rounded-xl fixed bottom-6 left-1/2 -translate-x-1/2 z-[100]"
    >
      <button
        onClick={() => setIsOpen((prev) => ({ ...prev, open: false }))}
        className="absolute -top-4 -right-4 bg-gray-400 rounded-full p-1"
      >
        <Image src={x} alt="" className="h-6 w-6" />
      </button>
      {!isBuyNowClicked ? (
        <div className="flex justify-between items-center px-6  py-6">
          <div className="flex flex-col gap-2">
            <span className="text-[17px] text-[#000659] leading-[15px]">
              Plan Name
            </span>
            <span className="font-400 text-[15px]">{isOpen.title}</span>
          </div>
          <div className="flex flex-col ">
            <label htmlFor="" className="text-[17px] text-[#000659]">
              No of Accounts
            </label>
            <input
              type="number"
              value={selectedNumberOfAccounts}
              onChange={(e) => {
                setSelectedNumberOfAccounts(Number(e.target.value));
              }}
              min={1}
              defaultValue={1}
              className="placeholder:text-center text-center text-[#646464] bg-transparent placeholder:text-[#646464] border border-[#646464] p-1 w-[100px] rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-[17px] text-[#000659] leading-[15px]">
              Price
            </span>
            <span>
              {getSelectedCurrencySymbol(currency?.code!)}
              {selectedPricing?.offerPrice ??
                selectedService?.price[0].offerPrice}
            </span>
          </div>
          <div className="flex flex-col h-[100px] pt-5 gap-1">
            <span className="text-[17px] text-[#000659]">Duration</span>
            <select
              className="border border-[#646464] p-1 w-[100px] rounded-lg"
              value={selectedPricing?.period}
              onChange={(e) => {
                const selectedPrice = selectedService?.price.find(
                  (price) => price.period === e.target.value
                );
                setSelectedPricing(selectedPrice!);
              }}
            >
              {selectedService?.price.map((price, index) => (
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
              {(
                (selectedPricing?.offerPrice ??
                  selectedService?.price[0].offerPrice) *
                selectedNumberOfAccounts
              ).toFixed(2)}
            </span>
          </div>
          <button
            onClick={() => {
              setIsBuyNowClicked(true);
            }}
            disabled={selectedNumberOfAccounts < 1}
            className="px-8 py-4 rounded-xl bg-[#0009FF] text-white disabled:opacity-75"
          >
            Buy Now
          </button>
        </div>
      ) : (
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
                  const token = Cookies.get("token");
                  const data = {
                    product: "gsuite",
                    productId: selectedService._id,
                    domainName: inputValue,
                    period: selectedPricing?.period,
                    type: "new",
                    qty: selectedNumberOfAccounts,
                  } as const;

                  if (token) {
                    handleAddToCart(data);
                  } else {
                    dispatch(
                      addCartItem({
                        ...data,
                        name: isOpen.title,
                      })
                    );
                    toast.success("Domain added to cart");
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
                ) : domainAvailabilityData.length > 0 ? (
                  <div className="w-full">
                    <ul className="  max-h-[400px] overflow-y-auto">
                      <div>
                        <div className="flex justify-between items-center gap-10 my-4 text-xl font-600">
                          <div className="flex gap-4 items-center">
                            <span>Domain</span>
                          </div>
                          <div className="flex items-center gap-5">
                            <div className="min-w-28 text-left">Year</div>
                            <div className="min-w-24">Pricing</div>

                            <div className="min-w-28"></div>
                          </div>
                        </div>
                        <hr className=" bg-[#64646480]  h-[2px]" />
                      </div>
                      {domainAvailabilityData.map((domain, i) => (
                        <DomainCard
                          domain={domain.domain}
                          prices={domain.price}
                          key={i}
                          period={selectedPricing?.period!}
                          productId={selectedService._id}
                          status={domain.status}
                          setIsOpen={(val) =>
                            setIsOpen((prev) => ({ ...prev, open: val }))
                          }
                          qty={selectedNumberOfAccounts}
                          name={isOpen.title}
                        />
                      ))}
                    </ul>
                  </div>
                ) : (
                  <div className="flex justify-center items-center h-[200px]">
                    <span>No domains found</span>
                  </div>
                )}
              </div>
            )}
        </div>
      )}
    </div>
  );
};

export default DomainCheckout;

const DomainCard = ({
  domain,
  prices = [],
  status,
  period,
  productId,
  setIsOpen,
  qty,
  name,
}: {
  domain: string;
  prices?: DomainAvailabilityResponse["price"];
  status: string;
  setIsOpen: (val: boolean) => void;
  period: string;
  name: string;
  productId: string;
  qty: number;
}) => {
  const { cartItems } = useAppSelector((state) => state.cart);
  const [selectedPricing, setSelectedPricing] = useState(prices[0]);
  const { isSidebarOpen } = useAppSelector((state) => state.sidebar);
  const { isLoggedIn } = useAppSelector((state) => state.user);
  const { currency } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const queryClient = useQueryClient();

  const { data } = useQuery({
    queryKey: ["cart"],
    queryFn: () => handleGetAllCartItemsService(currency?.code!),
    enabled: isLoggedIn,
  });

  const isAddedToCart = isLoggedIn
    ? data?.products?.some((item: any) => item.domainName === domain)
    : cartItems.some((item) => item.domainName === domain);

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
        dispatch(setIsSidebarOpen(!isSidebarOpen));
        dispatch(setIsSideBarActive(true));
        setIsOpen(false);
      },
    });

  return (
    <div>
      <div className="flex justify-between items-center gap-10 my-4">
        <div className="flex gap-4 items-center">
          <span>{domain}</span>
          {status !== "available" && (
            <>
              <span className="text-sm text-red-500">Not Available</span>
            </>
          )}
        </div>
        <div className="flex items-center gap-5">
          {status === "available" && (
            <>
              <select
                className="border border-[#646464] p-1 w-[100px] rounded-lg"
                value={selectedPricing?._id}
                onChange={(e) => {
                  setSelectedPricing(
                    prices.find((price) => price._id === e.target.value)!
                  );
                }}
              >
                {prices?.map((price, index) => (
                  <option key={index} value={price._id}>
                    {price.year} year
                  </option>
                ))}
              </select>
              <div className="min-w-24">
                {getSelectedCurrencySymbol(currency?.code!)}
                {selectedPricing?.registerPrice}
              </div>
            </>
          )}

          <button
            disabled={status !== "available" || isAddedToCart}
            onClick={() => {
              const token = Cookies.get("token");
              const data = {
                product: "gsuite",
                productId: productId,
                domainName: domain,
                period: selectedPricing?.year,
                type: "new",
                qty,
              } as const;

              if (token) {
                handleAddToCart(data);
              } else {
                dispatch(
                  // @ts-ignore
                  addCartItem({
                    ...data,
                    name,
                  })
                );
                toast.success("Domain added to cart");
                dispatch(setIsSidebarOpen(!isSidebarOpen));
                dispatch(setIsSideBarActive(true));
                setIsOpen(false);
              }
            }}
            className=" bg-[#0009FF] text-white rounded-[5px] p-2 shadow-black shadow-md disabled:opacity-50 min-w-28"
          >
            {isAddedToCart
              ? "Added to cart"
              : isAddToCartPending
              ? "Adding ..."
              : "Add to cart"}
          </button>
          <hr className=" bg-[#64646480]  h-[2px]" />
        </div>
      </div>
      <hr className=" bg-[#64646480]  h-[2px]" />
    </div>
  );
};
