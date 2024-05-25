// @ts-nocheck

"use client";
import email from "@/assets/images/image 80.svg";
import meet from "@/assets/images/image 81.svg";
import calender from "@/assets/images/image 82.svg";
import chat from "@/assets/images/image 83.svg";
import docs from "@/assets/images/image 84.svg";
import sheet from "@/assets/images/image 85.svg";
import keep from "@/assets/images/image 86.svg";
import project from "@/assets/images/image 87.svg";
import form from "@/assets/images/image 88.svg";
import form1 from "@/assets/images/image 89.svg";
import form2 from "@/assets/images/image 90.svg";
import form3 from "@/assets/images/image 91.svg";
import form4 from "@/assets/images/image 92.svg";
import form5 from "@/assets/images/image 93.svg";
import form6 from "@/assets/images/image 94.svg";
import Image from "next/image";
import { toast } from "react-toastify";
import vector from "@/assets/images/Vector.svg";
import { SetStateAction, useState } from "react";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import {
  handleAddToCart,
  handleCheckDomainAvailability,
} from "@/Services/google-workspace";

const Features = () => {
  const [selectedDomain, setSelectedDomain] = useState<string>(""); // State to manage selected domain
  const [open, setOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Monthly");
  const [isOpen, setIsOpen] = useState(false);
  const [showCheckout, setShowCheckout] = useState(true);
  const [showAvailability, setShowAvailability] = useState(false);
  const [chosenOption, setChosenOption] = useState("register"); // State to manage selected radio button
  const [inputValue, setInputValue] = useState(""); // State to manage the input value
  const [errorMessage, setErrorMessage] = useState(""); // State to manage error message
  const [errorMessage1, setErrorMessage1] = useState(""); // State to manage error message
  const [similarDomains, setSimilarDomains] = useState<string[]>([]);

  const handleRadioChange = (option: SetStateAction<string>) => {
    setChosenOption(option); // Set the selected radio button
    setErrorMessage(""); // Reset error message when radio button changes
    setErrorMessage1("");
  };

  const handleInputChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setInputValue(event.target.value); // Update input value
    setErrorMessage(""); // Reset error message when input changes
  };

  const handleAssignDomain = async () => {
    try {
      const response = await axios.get(
        `https://liveserver.nowdigitaleasy.com:5000/product/domain_availability`,
        {
          params: {
            country_code: "IN",
            domain: inputValue,
          },
        }
      );
      const data = response.data;
      if (data.available) {
        // Domain is available
        setErrorMessage(""); // Clear any previous error messages
        // Proceed with other actions if needed
      } else {
        // Domain is not available
        setErrorMessage(
          "Domain is already taken. Please choose a different one."
        );
        // You can also access similar domains from data.similar_domains if needed
        // setSimilarDomains(data.similar_domains);
      }
    } catch (error) {
      console.error("Error checking domain availability:", error);
      // Handle error appropriately
    }
  };

  //
  const { mutate, isPending } = useMutation({
    mutationFn: handleCheckDomainAvailability,
    onSuccess: (data) => {
      console.log("Domain availability data:", data);
      const res = data.response;
      setSimilarDomains(res);
      setErrorMessage1(
        res.find((domain: any) => domain.domain === inputValue).status ===
          "available"
          ? "Domain is available. Proceed to checkout."
          : "Domain is already taken. Please choose a different one."
      );
    },
    onError: (error) => {
      console.error("Error checking domain availability:", error);
      // Handle error appropriately
    },
    onSettled: () => {
      setSelectedDomain("");
    },
  });

  const handleCheckAvailability = () => {
    mutate(inputValue);
  };

  const handleBuyNow = () => {
    setShowCheckout(false); // Hide checkout component
    setShowAvailability(true); // Show availability message
    // Additional logic for processing purchase or showing availability message
  };

  const handleOptionSelect = (option: SetStateAction<string>) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleContinuetoCheckout = () => {
    setOpen(!open);
  };

  // mutate add to cart
  const { mutate: addToCartMutation, isPending: isAddToCartPending } =
    useMutation({
      mutationFn: handleAddToCart,
      onSuccess: (data) => {
        toast.success("Domain added to cart");
      },
      onError: (error) => {
        console.error("Error adding domain to cart:", error);
        toast.error("Error adding domain to cart. Please try again.");
      },
    });

  const addToCart = (domain: string) => {
    // Add domain to cart
    setSelectedDomain(domain.domain);
    addToCartMutation([
      {
        EppCode: "",
        domainName: domain.domain,
        year: 1,
        type: "new",
        productId: domain.price[0].productId,
        product: "domain",
      },
    ]);
    console.log("Domain added to cart:", domain);
  };

  const Checkout = () => {
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
                            <span className="">
                              {similarDomains[0]?.domain}
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
  const servicesData = [
    {
      title: "Get secure and personalised email account for your business",
      image: email,
      stater: "✔️",
      standand: "✔️",
      plus: "✔️",
    },
    {
      title:
        "Setup HD video with 100 participants to ensure uninterrupted productivity.",
      image: meet,
      stater: "100 participant video meetings",
      standand: "150 participant video meetings + recording",
      plus: "500 participant video meetings + recording, attendance tracking",
    },
    {
      title: "Keep track of important events and share your schedule.",
      image: calender,
      stater: "✔️",
      standand: "✔️",
      plus: "✔️",
    },
    {
      title:
        "Secure communications tool, built for teams that makes team communication easy and efficient.",
      image: chat,
      stater: "✔️",
      standand: "✔️",
      plus: "✔️",
    },
    {
      title:
        "Generate and work on documents with images, tables, drawings, charts and more",
      image: docs,
      stater: "✔️",
      standand: "✔️",
      plus: "✔️",
    },
    {
      title:
        "Get valuable insights via spreadsheet data using formulas, charts, connectors and macros",
      image: sheet,
      stater: "✔️",
      standand: "✔️",
      plus: "✔️",
    },
    {
      title:
        "Make stunning presentations using templates, embed videos and images",
      image: keep,
      stater: "✔️",
      standand: "✔️",
      plus: "✔️",
    },
    {
      title: "Do engaging, high-quality sites for your project.",
      image: project,
      stater: "✔️",
      standand: "✔️",
      plus: "✔️",
    },
    {
      title: "Create custom forms for surveys and questionnaires.",
      image: form,
      stater: "❌",
      standand: "❌",
      plus: "❌",
    },
    {
      title:
        "Manage your to-do’s, take notes on the go and never lose track of ideas.",
      image: form1,
      stater: "✔️",
      standand: "✔️",
      plus: "✔️",
    },
    {
      title:
        "Experience interesting conversations, discuss ideas, gather input and keep everyone in your organization engaged.",
      image: form2,
      stater: "✔️",
      standand: "✔️",
      plus: "✔️",
    },
    {
      title: "Basic security and admin controls.",
      image: form3,
      stater: "✔️",
      standand: "✔️",
      plus: "✔️",
    },
    {
      title: "Standard Endpoint device management for account security",
      image: form6,
      stater: "✔️",
      standand: "✔️",
      plus: "✔️",
    },
    {
      title:
        "Smart Search within and outside Google Workspace with Cloud Search.",
      image: form5,
      stater: "✔️",
      standand: "✔️",
      plus: "✔️",
    },
    {
      title: "Vault for eDiscovery for emails, chats, and files and archiving.",
      image: form4,
      stater: "❌",
      standand: "❌",
      plus: "✔️",
    },
    // Add more service data as needed
  ];
  return (
    <div className="">
      <div className="flex justify-center pt-[120px]">
        <span className="text-[61px] max-lg:text-[30px] font-900 font-source-sans-pro max-lg:leading-[30px] max-md:text-[28px]  max-md:text-center text-[#000659]">
          Find the right plan for your business.
        </span>
      </div>
      <div className="flex justify-center pt-[15px]">
        <span className="text-[15px] max-md:text-center font-merriweather max-md:text-[16px]">
          Choose the Google Workspace edition that best fits your business.
        </span>
      </div>
      <div className="max-md:w-[400px] max-md:mx-3">
        <div className="flex justify-center py-[50px] overflow-hidden ">
          <table className="table-fixed  w-[1252px]">
            <thead>
              <tr className="h-[200px]  border border-[#0437CD] border-b-[#AAD0FF] ">
                <th className="w-[91px] bg-[#F2F3FF] "></th>
                <th className="w-[440px] max-lg:w-[280px] max-lg:text-[18px]  max-md:w-0 ">
                  <span className=" max-md:hidden">
                    Google Workspace Features
                  </span>
                </th>
                <th className="bg-[#F2F3FF]">
                  <div className="flex flex-col p-2 gap-3">
                    <span className=" max-lg:text-[13px]">
                      Business Starter
                    </span>
                    <span className="text-[28px] max-lg:text-[16px] text-[#0437CD]">
                      ₹125/mo
                    </span>
                    <div className="flex justify-center">
                      <button
                        className="bg-[#000AFF] text-white hover:bg-black p-3 max-lg:p-1 w-[180px] max-lg:w-[100px] rounded-lg"
                        onClick={handleContinuetoCheckout}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </th>
                <th>
                  <div className="flex flex-col p-2 gap-3">
                    <span className="max-lg:text-[12px]">
                      Business Standard
                    </span>
                    <span className="text-[28px] max-lg:text-[16px] text-[#0437CD]">
                      ₹672/mo
                    </span>
                    <div className="flex justify-center">
                      <button className="bg-[#000AFF] text-white hover:bg-black p-3 w-[180px] max-lg:p-1 max-lg:w-[100px]  rounded-lg">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </th>
                <th className="bg-[#F2F3FF]">
                  <div className="flex flex-col p-2 gap-3 ">
                    <span className=" max-lg:text-[12px]">Business Plus</span>
                    <span className="text-[28px] text-[#0437CD] max-lg:text-[16px]">
                      ₹1,299/mo
                    </span>
                    <div className="flex justify-center">
                      <button className="bg-[#000AFF] text-white hover:bg-black p-3 w-[180px] max-lg:p-1 max-lg:w-[100px]   rounded-lg">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {servicesData.map((service, index) => (
                <tr
                  key={index}
                  className="h-[80px]  border border-[#0437CD] border-t-[#AAD0FF] border-b-[#AAD0FF] "
                >
                  <th className="w-[91px] bg-[#F2F3FF] ">
                    <div className="flex justify-center">
                      <Image src={service.image} alt="email" />
                    </div>
                  </th>
                  <th className="w-[440px] max-lg:w-[280px] max-lg:text-[14px] max-md:w-0 px-4 text-start ">
                    <span className=" max-md:hidden">{service.title}</span>
                  </th>
                  <th className="bg-[#F2F3FF]">
                    <span className="font-source-sans-pro text-xl  p-2 leading-[7px] max-lg:text-[12px]  ">
                      {service.stater}
                    </span>
                  </th>
                  <th>
                    <span className=" font-source-sans-pro text-xl  p-2 leading-xl leading-[7px] max-lg:text-[12px]   ">
                      {service.standand}
                    </span>
                  </th>
                  <th className="bg-[#F2F3FF]">
                    <span className="font-source-sans-pro text-xl  p-2 leading-2xl leading-[7px] max-lg:text-[12px]   ">
                      {service.plus}
                    </span>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {open && (
        <>
          <Checkout />
        </>
      )}
    </div>
  );
};
export default Features;
