"use client";
import { ICONS } from "@/assets";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import chart from "@/assets/images/Group 69344.svg"
import google from "@/assets/images/image 110.svg"
import vector from "@/assets/images/Vector.svg"
import trash from "@/assets/images/trash-2.svg"
import cloud from "@/assets/images/Upload to Cloud.png"



const Sidebar = () => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState<boolean>(false);

  const toggleHamburgerMenu = (): void => {
    setIsHamburgerOpen(!isHamburgerOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent): void => {
      const closestDropdown = (event.target as HTMLElement).closest(
        ".hamburgerMenu"
      );
      if (isHamburgerOpen && closestDropdown === null) {
        setIsHamburgerOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isHamburgerOpen]);

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
        {isHamburgerOpen &&
          <div>
            <div className=" bg-gradient-light h-[55px] px-4 py-4 flex items-center">
              <Image src={chart} alt={""} className="w-[21px] h-[33px] " />
            </div>
            <div>
              <div className="flex justify-between font-source-sans-pro text-[15px] font-700 px-8 py-4  text-center">
                <span>Product</span>
                <span>Duration</span>
                <span>Price</span>
              </div>
              <hr className="h-[1px]" />
              <div>
                <div className="flex p-3 gap-8 items-start hover:bg-[#e1e1e180]">
                  <div className="flex items-start ">
                    <Image src={google} alt={""} />
                    <div className="flex flex-col gap-1">
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
                    <span className="font-source-sans-pro text-[12px] font-700 text-[#000000]" >Annually</span>
                    <Image src={vector} alt={""} />
                  </div>
                  <div className="flex justify-between items-center gap-2 ml-[23px]">
                    <span className="font-source-sans-pro text-[12px] font-700 text-[#000000]" >₹225.00</span>
                    <Image src={trash} alt={""} />
                  </div>
                </div>
                <div className="flex p-3 gap-8 items-start hover:bg-[#e1e1e180]">
                  <div className="flex items-start ">
                    <Image src={cloud} alt={""} />
                    <div className="flex flex-col gap-1">
                      <span className="font-source-sans-pro text-[15px] font-700 text-[#000000]">Linux Hosting</span>
                      <span className="w-[130px] font-source-sans-pro text-[12px] font-600 text-[#000000]">Business Starter <span className="text-[#0011FF]">Domain- iaaxin.com </span> </span>
                    </div>
                  </div>
                  <div className="flex justify-between border-[#00000026] border bg-white  w-[125px] h-[28px] p-1">
                    <span className="font-source-sans-pro text-[12px] font-700 text-[#000000]" >Monthly</span>
                    <Image src={vector} alt={""} />
                  </div>
                  <div className="flex justify-between items-center gap-2 ml-[23px]">
                    <span className="font-source-sans-pro text-[12px] font-700 text-[#000000]" >₹225.00</span>
                    <Image src={trash} alt={""} />
                  </div>
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
                <hr className="h-[1px]" />
                <div className="flex justify-center p-4">
                  <button className="font-source-sans-pro text-[17px] font-700 text-white px-10 py-2 rounded-xl w-[225px] h-[40px] bg-[#0011FF]">Continue to Cart</button>
                </div>
              </div>
            </div>
          </div>}
      </div>
    </div>
  );
};

export default Sidebar;
