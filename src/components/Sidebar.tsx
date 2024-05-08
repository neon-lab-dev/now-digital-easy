'use client'
import { useState, useEffect } from "react";
import Image from "next/image";
import { ICONS } from "@/assets";
import chart from "@/assets/images/Group 69344.svg";
import google from "@/assets/images/image 110.svg";
import vector from "@/assets/images/Vector.svg";
import trash from "@/assets/images/trash-2.svg";
import cloud from "@/assets/images/Upload to Cloud.png";

const Sidebar = () => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState<boolean>(false);
  const [showLogin, setShowLogin] = useState<boolean>(false);
  const [showSign, setShowSign] = useState<boolean>(false);


  const toggleHamburgerMenu = (): void => {
    setIsHamburgerOpen(!isHamburgerOpen);
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


  return (
    <div className="relative hamburgerMenu">
      <Image
        onClick={toggleHamburgerMenu}
        src={ICONS.cart}
        alt="downArrow"
        className="cursor-pointer"
      />

      <div
        className={`overflow-y-auto fixed inset-y-0 right-0 z-50 bg-white w-[471px] h-[695px]  transition-all duration-300 transform ${isHamburgerOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {isHamburgerOpen && !showLogin && !showSign && (
          <div>
            <div className=" bg-gradient-light h-[55px] px-4 py-4 flex items-center">
              <Image src={chart} alt="" className="w-[21px] h-[33px]" />
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
                <div className="flex p-2 gap-8 items-start hover:bg-[#e1e1e180]">
                  <div className="flex items-start gap-1">
                    <Image src={google} alt="" />
                    <div className="flex flex-col gap-1 ">
                      <span className="font-source-sans-pro text-[15px] font-700 text-[#000000]">Google Workspace</span>
                      <span className="w-[130px] font-source-sans-pro text-[12px] font-600 text-[#000000]">Business Starter (<span className="text-[#0011FF]"> thedesignerclub.com</span> )</span>
                      <div className="flex gap-1 items-center">
                        <span className="font-source-sans-pro text-[15px] font-700 text-[#000000]">Users</span>
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
              </div>
              {/* End of placeholder cart items */}

              <div className="flex justify-center p-4">
                <button
                  onClick={handleContinueToCart}
                  className="font-source-sans-pro text-[17px] font-700 text-white px-10 py-2 bg-[#0011FF] rounded-lg h-[40px] w-[215px]"
                >
                  Continue to Cart
                </button>
              </div>
            </div>
          </div>
        )}

        {showLogin && (
          <div className="">
            <div className=" bg-gradient-light h-[55px] px-4 py-4 flex items-center">
              <Image src={chart} alt="" className="w-[21px] h-[33px]" />
              {/* {Timeline} */}
            </div>
            <div className="flex justify-center">
              <div className="w-[299px] py-10 flex flex-col">
                <span className="font-source-sans-pro font-700 text-[17px]">Existing User?</span>
                <span className="font-source-sans-pro font-400 text-[13px]">Please sign in with your credentials below to continue.</span>
                <label htmlFor="forEmail" className="pt-4">Email</label>
                <input type="email" name="" id="" placeholder="email address" className="border border-[1px] p-3 rounded-lg mt-2" />
                <label htmlFor="forpassword" className="pt-4">Password</label>
                <input type="password" name="" id="" placeholder="Password" className="border border-[1px] p-3 rounded-lg mt-2" />
                <span className="underline font-source-sans-pro font-400 text-[13px] flex justify-end text-[#0011FF]">Forget Password</span>
              </div>
            </div>
            <div className="flex justify-center">
              <button onClick={handleSignUp} className="font-source-sans-pro text-[17px] font-700 text-white px-10 py-2 bg-[#0011FF] rounded-lg h-[40px] w-[215px]" >
                Login
              </button>
            </div>
            <div className="flex justify-center pt-2">
              <span className="font-source-sans-pro font-700 text-[17px]">New to NowDigitalEasy?  <span className="underline font-source-sans-pro font-400  text-[#0011FF]">Sign up here</span></span>
            </div>
          </div>
        )}

        {showSign && (
          <div className="">
            <div className=" bg-gradient-light h-[55px] px-4 py-4 flex items-center">
              <Image src={chart} alt="" className="w-[21px] h-[33px]" />
              {/* {Timeline} */}
            </div>
            <div className="flex justify-center">
              <div className="w-[406px] py-10 flex flex-col">
                <span className="font-source-sans-pro font-700 text-[17px]">New User?</span>
                <span className="font-source-sans-pro font-400 text-[13px]">Create an account in 10 seconds</span>
                <div className="grid grid-cols-2 gap-2 py-10">
                <div>
                  <label htmlFor="forEmail" className="pt-4">Email</label>
                  <input type="email" name="" id="" placeholder="email address" className=" border-[1px] p-3 rounded-lg mt-2" />
                </div>
                <div>
                  <label htmlFor="forEmail" className="pt-4">Email</label>
                  <input type="email" name="" id="" placeholder="email address" className=" border-[1px] p-3 rounded-lg mt-2" />
                </div>
                <div>
                  <label htmlFor="forEmail" className="pt-4">Email</label>
                  <input type="email" name="" id="" placeholder="email address" className=" border-[1px] p-3 rounded-lg mt-2" />
                </div>
                <div>
                  <label htmlFor="forEmail" className="pt-4">Email</label>
                  <input type="email" name="" id="" placeholder="email address" className=" border-[1px] p-3 rounded-lg mt-2" />
                </div>
                <div>
                  <label htmlFor="forEmail" className="pt-4">Email</label>
                  <input type="email" name="" id="" placeholder="email address" className=" border-[1px] p-3 rounded-lg mt-2" />
                </div>
                <div>
                  <label htmlFor="forEmail" className="pt-4">Email</label>
                  <input type="email" name="" id="" placeholder="email address" className=" border-[1px] p-3 rounded-lg mt-2" />
                </div>
              </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
