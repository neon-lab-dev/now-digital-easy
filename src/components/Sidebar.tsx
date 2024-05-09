'use client'
import { useState, useEffect } from "react";
import Image from "next/image";
import { ICONS } from "@/assets";
import chart from "@/assets/images/Group 69344.svg";
import google from "@/assets/images/image 110.svg";
import vector from "@/assets/images/Vector.svg";
import vector1 from "@/assets/images/chevron-down.svg";
import trash from "@/assets/images/trash-2.svg";
import cloud from "@/assets/images/Upload to Cloud.png";
import close from "@/assets/images/x.svg"

const Sidebar = () => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState<boolean>(false);
  const [showLogin, setShowLogin] = useState<boolean>(false);
  const [showSign, setShowSign] = useState<boolean>(false);
  const [showOrderSummary, setShowOrderSummary] = useState<boolean>(false);
  const [showDetails, setShowDetails] = useState(false);


  const toggleHamburgerMenu = (): void => {
    setIsHamburgerOpen(!isHamburgerOpen);
  };

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };


  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent): void => {
      const closestDropdown = (event.target as HTMLElement).closest(".hamburgerMenu");
      if (isHamburgerOpen && closestDropdown === null) {
        setIsHamburgerOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isHamburgerOpen]);

  const handleContinueToCart = () => {
    setShowLogin(true);
  };

  const handleSignUp = () => {
    setShowLogin(false); // Hide the login section
    setShowSign(true);  // Show the signup section
  };


  const handleContinueToOrder = () => {
    setShowSign(false);  // Show the signup section
    setShowOrderSummary(true);
  };


  return (
    <div className="relative hamburgerMenu">
      <Image
        onClick={toggleHamburgerMenu}
        src={ICONS.cart}
        alt="downArrow"
        className="cursor-pointer"
      />

      <div
        className={`overflow-y-auto fixed inset-y-0 right-0 z-50 bg-white w-[471px]   transition-all duration-300 transform ${isHamburgerOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {isHamburgerOpen && !showLogin && !showSign && !showOrderSummary && (
          <div>
            <div className=" bg-gradient-light h-[55px] px-4 py-4 justify-between flex items-center">
              <Image src={chart} alt="" className="w-[21px] h-[33px]" />
              <Image src={close} alt=""/>

              {/* {Timeline} */}
            </div>
            <div>
              <div className="flex justify-between font-source-sans-pro text-[15px] font-700 px-8 py-4  text-center">
                <span>Product</span>
                <span>Duration</span>
                <span>Price</span>
              </div>
              <hr className="h-[1px]" />
              <div>
                {/* Placeholder cart items */}
                <div className="flex py-4 px-1 gap-8 items-start hover:bg-[#e1e1e180]">
                  <div className="flex items-start gap-2">
                    <Image src={google} alt="" />
                    <div className="flex flex-col gap-1 ">
                      <span className="font-source-sans-pro text-[15px] font-700 text-[#000000] text-start">Google Workspace</span>
                      <span className="w-[130px] font-source-sans-pro text-[12px] font-600 text-[#000000]">Business Starter (<span className="text-[#0011FF]"> thedesignerclub.com</span> )</span>
                      <div className="flex gap-1 items-center text-start">
                        <span className="font-source-sans-pro text-[14px] font-700 text-[#000000]">Users</span>
                        <div className="bg-white flex justify-center items-start ">
                          <span className=" border-[#00000026] border px-2 cursor-pointer">-</span>
                          <span className=" border-[#00000026] border px-2 cursor-pointer">3</span>
                          <span className=" border-[#00000026] border px-2 cursor-pointer">+</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between border-[#00000026] border bg-white  w-[125px] h-[28px] p-1">
                    <span className="font-source-sans-pro text-[12px] font-700 text-[#000000]">Annually</span>
                    <Image src={vector} alt="" />
                  </div>
                  <div className="flex justify-between items-center gap-2 ml-[23px]">
                    <span className="font-source-sans-pro text-[12px] font-700 text-[#000000]">₹225.00</span>
                    <Image src={trash} alt="" />
                  </div>
                </div>
                <div className="flex p-2 gap-8 items-start hover:bg-[#e1e1e180]">
                  <div className="flex items-start gap-2">
                    <Image src={cloud} alt="" />
                    <div className="flex flex-col gap-1 ">
                      <span className="font-source-sans-pro text-[15px] font-700 text-[#000000]">Linux Hosting</span>
                      <span className="w-[130px] font-source-sans-pro text-[12px] font-600 text-[#000000]">Business Starter Domain - <span className="text-[#0011FF]">iaaxin.com </span> </span>
                    </div>
                  </div>
                  <div className="flex justify-between border-[#00000026] border bg-white  w-[125px] h-[28px] p-1">
                    <span className="font-source-sans-pro text-[12px] font-700 text-[#000000]">Monthly</span>
                    <Image src={vector} alt="" />
                  </div>
                  <div className="flex justify-between items-center gap-2 ml-[23px]">
                    <span className="font-source-sans-pro text-[12px] font-700 text-[#000000]">₹225.00</span>
                    <Image src={trash} alt="" />
                  </div>
                </div>
                <hr />
              </div>
              <div className="flex justify-between items-start py-2 px-4">
                <span className="font-source-sans-pro text-[17px] font-700 text-[#0011FF] px-6">Have a Coupon Code?</span>
                <div className="flex flex-col gap-3 font-source-sans-pro text-[15px] font-700 text-[#000000] text-end">
                  <span>Subtotal</span>
                  <span>Tax</span>
                </div>
                <div className="flex flex-col gap-3 font-source-sans-pro text-[15px] font-700 text-[#000000] text-end ">
                  <span>₹ 1600.00</span>
                  <span>₹ 80.00</span>
                </div>
              </div>
              <hr className="h-[1px]" />
              <div className="flex justify-end">
                <div className="flex gap-12 font-source-sans-pro text-[15px] font-900 text-[#000000] text-start py-4 px-3">
                  <span>Total</span>
                  <span>₹ 1600.00</span>
                </div>
              </div>
              {/* End of placeholder cart items */}
              <hr />
              <div className="flex justify-center p-4">
                <button
                  onClick={handleContinueToCart}
                  className="font-source-sans-pro text-[17px] font-700 text-white px-10 py-2 bg-[#0011FF] h-[40px] w-[215px]"
                >
                  Continue to Cart
                </button>
              </div>
            </div>
          </div>
        )}

        {showLogin && (
          <div className="">
            <div className=" bg-gradient-light h-[55px] px-4 py-4 flex justify-between items-center">
              <Image src={chart} alt="" className="w-[21px] h-[33px]" />
              <Image src={close} alt=""/>
              {/* {Timeline} */}
            </div>
            <div className="flex justify-center">
              <div className="w-[299px] py-10 flex flex-col">
                <span className="font-source-sans-pro font-700 text-[17px]">Existing User?</span>
                <span className="font-source-sans-pro font-400 text-[13px]">Please sign in with your credentials below to continue.</span>
                <label htmlFor="forEmail" className="font-source-sans-pro font-400 text-[13px] pt-2  text-[#313131]">Email</label>
                <input type="email" name="" id="" placeholder="email address" className="border-[1px] p-3 rounded-lg mt-2" />
                <label htmlFor="forpassword" className="font-source-sans-pro font-400 text-[13px] pt-2  text-[#313131]">Password</label>
                <input type="password" name="" id="" placeholder="Password" className=" border-[1px] p-3 rounded-lg mt-2" />
                <span className="underline font-source-sans-pro font-400 text-[13px] flex justify-end text-[#0011FF]">Forget Password</span>
              </div>
            </div>
            <div className="flex justify-center">
              <button onClick={handleSignUp} className="font-source-sans-pro text-[17px] font-700 text-white px-10 py-2 bg-[#0011FF]  h-[40px] w-[215px]" >
                Login
              </button>
            </div>
            <div className="flex justify-center pt-2">
              <span className="font-source-sans-pro font-400 text-[15px]">New to NowDigitalEasy?  <span onClick={handleSignUp}
                className="underline font-source-sans-pro font-400  text-[#0011FF] cursor-pointer">Sign up here</span></span>
            </div>
          </div>
        )}
        {showSign && (
          <div className="">
            <div className=" bg-gradient-light h-[55px] px-4 py-2 flex justify-between items-center">
              <Image src={chart} alt="" className="w-[21px] h-[33px]" />
              <Image src={close} alt=""/>
              {/* {Timeline} */}
            </div>
            <div className="flex justify-center">
              <div className="w-[406px] py-4 flex flex-col">
                <span className="font-source-sans-pro font-700 text-[17px]">New User?</span>
                <span className="font-source-sans-pro font-400 text-[13px]">Create an account in 10 seconds</span>
                <div className="grid grid-cols-2 gap-2 pt-3 pb-3">
                  <div>
                    <label htmlFor="forEmail" className="font-source-sans-pro font-400 text-[13px] pt-2 text-[#313131]">First Name</label>
                    <input type="text" name="" id="" placeholder="First Name" className=" p-3 rounded-lg mt-2 w-[196px] h-[40px] focus:border-[#0011FF] border-[2px]  focus:outline-none" />
                  </div>
                  <div>
                    <label htmlFor="forEmail" className="font-source-sans-pro font-400 text-[13px] pt-2  text-[#313131]">Last Name</label>
                    <input type="text" name="" id="" placeholder="Last Name" className="  p-3 rounded-lg mt-2 w-[196px] h-[40px] focus:border-[#0011FF] border-[2px]  focus:outline-none" />
                  </div>
                  <div>
                    <label htmlFor="forEmail" className="font-source-sans-pro font-400 text-[13px] pt-2  text-[#313131]">Email</label>
                    <input type="email" name="" id="" placeholder="Email address" className="p-3 rounded-lg mt-2 w-[196px] h-[40px] focus:border-[#0011FF] border-[2px]  focus:outline-none" />
                  </div>
                  <div>
                    <label htmlFor="forEmail" className="font-source-sans-pro font-400 text-[13px] pt-2  text-[#313131]">Phone Number</label>
                    <input type="number" name="" id="" placeholder="Phone Number" className=" p-3 rounded-lg mt-2 w-[196px] h-[40px] focus:border-[#0011FF] border-[2px]  focus:outline-none" />
                  </div>
                  <div>
                    <label htmlFor="forEmail" className="font-source-sans-pro font-400 text-[13px] pt-2  text-[#313131]">Password</label>
                    <input type="password" name="" id="" placeholder="Password" className="  p-3 rounded-lg mt-2 w-[196px] h-[40px] focus:border-[#0011FF] border-[2px]  focus:outline-none" />
                  </div>
                  <div>
                    <label htmlFor="forEmail" className="font-source-sans-pro font-400 text-[13px] pt-2  text-[#313131]">Company Name</label>
                    <input type="text" name="" id="" placeholder="Company Name" className="  p-3 rounded-lg mt-2 w-[196px] h-[40px] focus:border-[#0011FF] border-[2px]  focus:outline-none" />
                  </div>
                </div>
                <div>
                  <label htmlFor="forEmail" className="font-source-sans-pro font-400 text-[13px] pt-2  text-[#313131]">Address</label>
                  <input type="text" name="" id="" placeholder="Address" className=" border-[1px] p-3 rounded-lg mt-2 w-[406px] h-[40px]" />
                </div>
                <div className="grid grid-cols-2 py-1 gap-2">
                  <div>
                    <label htmlFor="forEmail" className="font-source-sans-pro font-400 text-[13px] pt-2  text-[#313131]">City</label>
                    <input type="text" name="" id="" placeholder="City" className="  p-3 rounded-lg mt-2 w-[196px] h-[40px] focus:border-[#0011FF] border-[2px]  focus:outline-none" />
                  </div>
                  <div>
                    <label htmlFor="forEmail" className="font-source-sans-pro font-400 text-[13px] pt-2  text-[#313131]">State</label>
                    <input type="text" name="" id="" placeholder="State" className="  p-3 rounded-lg mt-2 w-[196px] h-[40px] focus:border-[#0011FF] border-[2px]  focus:outline-none" />
                  </div>
                  <div>
                    <label htmlFor="forEmail" className="font-source-sans-pro font-400 text-[13px] pt-2  text-[#313131]">Country</label>
                    <input type="text" name="" id="" placeholder="Country" className="p-3 rounded-lg mt-2 w-[196px] h-[40px] focus:border-[#0011FF] border-[2px]  focus:outline-none placeholder:text-[15px]" />
                  </div>
                  <div>
                    <label htmlFor="forEmail" className="font-source-sans-pro font-400 text-[13px] pt-2  text-[#313131]">Pin Code</label>
                    <input type="number" name="" id="" placeholder="Pin code" className=" p-3 rounded-lg mt-2 w-[196px] h-[40px] focus:border-[#0011FF] border-[2px]  focus:outline-none" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <button onClick={handleContinueToOrder} className="font-source-sans-pro text-[17px] font-700 text-white px-10 py-2 bg-[#0011FF] h-[40px] w-[215px]" >
                Create Account
              </button>
            </div>
            <div className="flex justify-center pt-2">
              <span className="font-source-sans-pro font-400 text-[17px]">Already have an account?<span className="underline font-source-sans-pro font-400  text-[#0011FF]"> Sign in</span></span>
            </div>
          </div>
        )}

        {showOrderSummary && (
          <div>
            <div className=" bg-gradient-light h-[55px] px-4 py-4 flex items-center justify-between">
              <Image src={chart} alt="" className="w-[21px] h-[33px]" />
              <Image src={close} alt=""/>
            </div>
            <div onClick={toggleDetails} className="flex justify-between px-2 py-3 cursor-pointer ">
              <span className=" font-source-sans-pro font-600 text-[17px] px-2 "> Order Summary (2)</span>
              <Image src={vector1} alt={""} className={`${showDetails ? 'rotate-0' : 'rotate-180'} transition-transform duration-500`} />
            </div>
            <hr />
            {showDetails && (
              <div className="order-details">
                <div className="flex p-4 gap-8 justify-between items-start hover:bg-[#e1e1e180]">
                  <div className="flex items-start gap-3">
                    <Image src={google} alt="" />
                    <div className="flex flex-col gap-1 ">
                      <span className="font-source-sans-pro text-[15px] font-700 text-[#000000]">Google Workspace</span>
                      <span className="w-[130px] font-source-sans-pro text-[12px] font-600 text-[#000000]">Business Starter (<span className="text-[#0011FF]"> thedesignerclub.com</span> )</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center gap-2 ml-[23px]">
                    <span className="font-source-sans-pro text-[12px] font-700 text-[#000000]">₹225.00</span>
                  </div>
                </div>
                <div className="flex p-4 justify-between gap-8 items-start hover:bg-[#e1e1e180]">
                  <div className="flex items-start gap-3">
                    <Image src={cloud} alt="" />
                    <div className="flex flex-col gap-1 ">
                      <span className="font-source-sans-pro text-[15px] font-700 text-[#000000]">Linux Hosting</span>
                      <span className="w-[130px] font-source-sans-pro text-[12px] font-600 text-[#000000]">Business Starter Domain - <span className="text-[#0011FF]">iaaxin.com </span> </span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center gap-2 ml-[23px]">
                    <span className="font-source-sans-pro text-[12px] font-700 text-[#000000]">₹225.00</span>
                  </div>
                </div>
                <hr />
              </div>
            )}
            <div className="flex justify-between items-start py-2 px-4">
              <div className="flex flex-col gap-3 font-source-sans-pro text-[15px] font-400 text-[#000000] text-start">
                <span>Subtotal</span>
                <span>Tax</span>
              </div>
              <div className="flex flex-col gap-3 font-source-sans-pro text-[15px] font-700 text-[#000000] text-end ">
                <span>₹ 1600.00</span>
                <span>₹ 80.00</span>
              </div>
            </div>
            <hr />
            <div className="flex justify-end">
              <div className="flex gap-12 font-source-sans-pro text-[17px] font-900 text-[#000000] text-start py-4 px-3">
                <span>Total</span>
                <span>₹ 1600.00</span>
              </div>
            </div>
            <hr />
            <div className="flex justify-center p-4">
              <button
                className="font-source-sans-pro text-[17px] font-400  text-white px-10 py-1 bg-[#0011FF] rounded-xs h-[40px] w-[215px]"
              >
                Pay ₹ 1600.00
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
