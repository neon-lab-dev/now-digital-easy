'use client';
import { useState } from "react";
import Image from "next/image";
import google from "@/assets/images/image 110.svg";
import vector1 from "@/assets/images/chevron-down.svg";
import cloud from "@/assets/images/Upload to Cloud.png";


const OrderSummary = ({ handlePlaceOrder }: { handlePlaceOrder: () => void }) => {
  const [showDetails, setShowDetails] = useState(false);
const toggleDetails = () => {
  setShowDetails(!showDetails);
};
    return (
      <div className="">
         <div>
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
                className="font-source-sans-pro text-[17px] font-400  text-white px-10 py-1 bg-[#0011FF] rounded-xs h-[40px] w-[215px] rounded-[4px]"
              >
                Pay ₹ 1600.00
              </button>
            </div>
          </div>
      </div>
    );
  };
  
  export default OrderSummary;
  