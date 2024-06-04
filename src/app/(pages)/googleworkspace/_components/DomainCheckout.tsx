"use client";

import Image from "next/image";
import vector from "@/assets/images/Vector.svg";

interface Props {
  showCheckout: boolean;
  showAvailability: boolean;
  toggleDropdown: () => void;
  handleOptionSelect: (option: string) => void;
  selectedOption: string;
  handleBuyNow: () => void;
  chosenOption: string;
  handleRadioChange: (option: string) => void;
  inputValue: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCheckAvailability: () => void;
  handleAssignDomain: () => void;
  errorMessage: string;
  errorMessage1: string;
  isPending: boolean;
  similarDomains: any[];
  isAddToCartPending: boolean;
  addToCart: (domain: any) => void;
  selectedDomain: string;
  isOpen: boolean;
}

const DomainCheckout = ({
  showCheckout,
  showAvailability,
  toggleDropdown,
  handleOptionSelect,
  selectedOption,
  handleBuyNow,
  chosenOption,
  handleRadioChange,
  inputValue,
  handleInputChange,
  handleCheckAvailability,
  handleAssignDomain,
  errorMessage,
  errorMessage1,
  isPending,
  similarDomains,
  isAddToCartPending,
  addToCart,
  selectedDomain,
  isOpen,
}: Props) => {
  return (
    <div className="bg-gradient-checkout w-[1000px]  border border-[#000659] shadow-[#00065980] shadow-2xl rounded-xl fixed bottom-6 left-[300px] z-50">
      {showCheckout && (
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
              type="text"
              className="placeholder:text-center text-center text-[#646464] bg-transparent placeholder:text-[#646464] border border-[#646464] p-1 w-[100px] rounded-lg"
              value="5"
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
              <div
                onClick={toggleDropdown}
                className="flex justify-between  border-[#00000026] border  bg-transparent  rounded-lg  w-[130px] h-[28px] p-1 "
              >
                <span className="font-source-sans-pro text-[12px] font-700 text-[#646464]">
                  {selectedOption}
                </span>
                <Image src={vector} alt="" />
              </div>
              {isOpen && (
                <div className="flex flex-col justify-center border border-black px-1 bg-transparent cursor-pointer">
                  <span
                    onClick={() => handleOptionSelect("Monthly")}
                    className="text-[12px]"
                  >
                    Monthly
                  </span>
                  <hr />
                  <span
                    onClick={() => handleOptionSelect("Annually")}
                    className="text-[12px]"
                  >
                    Annually
                  </span>
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col ">
            <span className="text-[17px] text-[#000659] leading-[15px]">
              Total
            </span>
            <span className="text-[24px]">Rs.999.00</span>
          </div>
          <button
            onClick={handleBuyNow}
            className="px-8 py-4 rounded-xl bg-[#0009FF] text-white"
          >
            Buy Now
          </button>
        </div>
      )}
      {showAvailability && (
        <div className="flex flex-col items-center py-6">
          <div className="flex justify-start items-start w-[900px]">
            <div className="flex items-center ps-4 rounded">
              <input
                id="bordered-radio-register"
                type="radio"
                value="register"
                name="bordered-radio"
                checked={chosenOption === "register"} // Set checked based on chosenOption state
                onChange={() => handleRadioChange("register")} // Call handleRadioChange function on change
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="bordered-radio-register"
                className="w-full py-4 ms-2 font-medium text-black"
              >
                Register a New Domain
              </label>
            </div>
            <div className="flex items-center ps-4 rounded">
              <input
                id="bordered-radio-existing"
                type="radio"
                value="existing"
                name="bordered-radio"
                checked={chosenOption === "existing"} // Set checked based on chosenOption state
                onChange={() => handleRadioChange("existing")} // Call handleRadioChange function on change
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="bordered-radio-existing"
                className="w-full py-4 ms-2 text-gray-600"
              >
                I already have a Domain Name
              </label>
            </div>
          </div>
          <div className="flex justify-center">
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              autoFocus
              className="bg-transparent border border-black w-[700px] h-[50px] px-4 "
            />
            {chosenOption === "register" ? (
              <button
                onClick={handleCheckAvailability}
                className="px-4 py-2 h-[51px] bg-[#0009FF] text-white  shadow-black shadow-md"
              >
                {isPending ? "Checking..." : "Check Availability"}
              </button>
            ) : (
              <button
                onClick={handleAssignDomain}
                className="px-7 py-2 h-[51px] bg-[#0009FF] text-white shadow-black shadow-md"
              >
                Assign Domain
              </button>
            )}
          </div>
          {errorMessage1 && (
            <div className="w-full px-20">
              <div></div>
              {isPending ? (
                <div className=" items-start mt-2 leading-10 px-4 mr-[270px]">
                  {`Checking availability of ${inputValue}...`}
                </div>
              ) : (
                similarDomains.length > 0 && (
                  <div className="w-full">
                    {similarDomains[0].status ==
                      "product currently not available" && (
                      <>
                        <div className="flex mr-[600px] gap-10 my-4 mx-2 w-full">
                          <span className="">{similarDomains[0]?.domain}</span>
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
                      {similarDomains
                        .filter((d) => d.status === "available")
                        .map((domain, index) => (
                          <div key={index}>
                            <div className="flex justify-between items-center gap-10 my-4">
                              <li className="">{domain.domain}</li>
                              <div className="flex items-center gap-5">
                                <span>{domain.price[0].year} year</span>
                                <span>₹{domain.price[0].registerPrice}</span>
                                <button
                                  onClick={() => addToCart(domain)}
                                  className=" bg-[#0009FF] text-white rounded-[5px] p-2 shadow-black shadow-md"
                                >
                                  {isAddToCartPending &&
                                  selectedDomain === domain.domain
                                    ? "Adding ..."
                                    : "Add to Cart"}
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
          {errorMessage && (
            <div className="text-red-500 bg-[#e4c2c2] items-start mt-2 leading-10 px-4 mr-[270px]">
              {`It seems that the domain ${inputValue} is already in use of Google Workspace.`}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default DomainCheckout;
