"use client";

import Image from "next/image";
import vector from "@/assets/images/Vector.svg";
import React, { useState } from "react";
import x from "@/assets/icons/x.svg";
import { twMerge } from "tailwind-merge";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { handleCheckDomainAvailabilityService } from "@/services/google-workspace";
import { BeatLoader } from "react-spinners";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { handleAddADomainToCartService } from "@/services/cart";

const OPTIONS = ["Monthly", "Annually"];
type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const DomainCheckout = ({ isOpen, setIsOpen }: Props) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [chosenOption, setChosenOption] = useState(OPTIONS[0]);
  const [isBuyNowClicked, setIsBuyNowClicked] = useState(false);
  const [radioInputValue, setRadioInputValue] = useState("register");
  const [inputValue, setInputValue] = useState("");
  const [domainThatIsAddingToCart, setDomainThatIsAddingToCart] = useState("");
  const queryClient = useQueryClient();

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
      mutationFn: handleAddADomainToCartService,
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
      className="bg-gradient-checkout transition-all w-[1000px]  border border-[#000659] shadow-[#00065980] shadow-2xl rounded-xl fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
    >
      <button
        onClick={() => setIsOpen(false)}
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
            <span className="font-400 text-[15px]">Business Starter</span>
          </div>
          <div className="flex flex-col ">
            <label htmlFor="" className="text-[17px] text-[#000659]">
              No of Accounts
            </label>
            <input
              type="number"
              defaultValue={1}
              min={1}
              className="placeholder:text-center text-center text-[#646464] bg-transparent placeholder:text-[#646464] border border-[#646464] p-1 w-[100px] rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-[17px] text-[#000659] leading-[15px]">
              Price
            </span>
            <span>Rs.82.80/acc/mo</span>
          </div>
          <div className="flex flex-col h-[100px] pt-5 gap-1">
            <span className="text-[17px] text-[#000659]">Duration</span>
            <div className="flex flex-col">
              <button
                onClick={() => setIsDropdownOpen((prev) => !prev)}
                className="flex justify-between  items-center border-[#00000026] border  bg-transparent  rounded-lg  w-[130px] h-[28px] p-1 px-2"
              >
                <span className="font-source-sans-pro text-[12px] font-700 text-[#646464]">
                  {chosenOption}
                </span>
                <Image
                  src={vector}
                  alt=""
                  className={twMerge(
                    "h-2.5 w-2.5 transition-transform",
                    isDropdownOpen && "rotate-180"
                  )}
                />
              </button>
              {isDropdownOpen && (
                <div className="flex flex-col justify-center border border-black rounded-md bg-gray-100/60 px-1 cursor-pointer">
                  {OPTIONS.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setChosenOption(option);
                        setIsDropdownOpen(false);
                      }}
                      className="text-[12px] font-source-sans-pro font-700 text-[#646464] py-1"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col ">
            <span className="text-[17px] text-[#000659] leading-[15px]">
              Total
            </span>
            <span className="text-[24px] font-600">Rs.999.00</span>
          </div>
          <button
            onClick={() => setIsBuyNowClicked(true)}
            className="px-8 py-4 rounded-xl bg-[#0009FF] text-white"
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
              <div key={index} className="flex items-center ps-4 rounded">
                <input
                  id="bordered-radio-register"
                  type="radio"
                  value={option.value}
                  name="bordered-radio"
                  checked={radioInputValue === option.value}
                  onChange={(e) => setRadioInputValue(e.target.value)}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="bordered-radio-register"
                  className="w-full py-4 ms-2 font-medium text-black"
                >
                  {option.option}
                </label>
              </div>
            ))}
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (radioInputValue === "register") {
                handleCheckAvailability(inputValue);
              }
            }}
            className="flex justify-center"
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
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
                // onClick={handleAssignDomain}
                className="px-7 py-2 h-[51px] bg-[#0009FF] text-white shadow-black shadow-md"
              >
                Assign Domain
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
                          .filter((d) => d.status === "available")
                          .map((domain, index) => (
                            <div key={index}>
                              <div className="flex justify-between items-center gap-10 my-4">
                                <li className="">{domain.domain}</li>
                                <div className="flex items-center gap-5">
                                  <span>{domain.price[0].year} year</span>
                                  <span>₹{domain.price[0].registerPrice}</span>
                                  <button
                                    onClick={() => {
                                      const token = Cookies.get("token");
                                      console.log(domain);
                                      setDomainThatIsAddingToCart(
                                        domain.domain
                                      );
                                      if (token) {
                                        handleAddToCart({
                                          token,
                                          data: {
                                            domainName: domain.domain,
                                            EppCode: "",
                                            product: "domain",
                                            productId:
                                              domain.price[0].productId,
                                            type: "new",
                                            year: domain.price[0].year,
                                          },
                                        });
                                      }
                                    }}
                                    className=" bg-[#0009FF] text-white rounded-[5px] p-2 shadow-black shadow-md"
                                  >
                                    {isAddToCartPending &&
                                    domain.domain ===
                                      domainThatIsAddingToCart ? (
                                      <BeatLoader color="#ffffff" size={7} />
                                    ) : (
                                      "Add to Cart"
                                    )}
                                  </button>
                                  <hr className=" bg-[#64646480]  h-[2px]" />
                                </div>
                              </div>
                              <hr className=" bg-[#64646480]  h-[2px]" />
                            </div>
                          ))}
                      </ul>
                    </div>
                  )
                )}
              </div>
            )}
          {/* {errorMessage && (
            <div className="text-red-500 bg-[#e4c2c2] items-start mt-2 leading-10 px-4 mr-[270px]">
              {`It seems that the domain ${inputValue} is already in use of Google Workspace.`}
            </div>
          )}  */}
        </div>
      )}
    </div>
  );
};

export default DomainCheckout;
