import { ICONS, IMAGES } from "@/assets";
import Image from "next/image";
import React from "react";

const ProductDropdown = () => {
  return (
    <div className=" bg-[#F9FAFF] rounded-b-2xl w-[1280px] h-[473px] mx-auto shadow-2xl">
      <div className="flex justify-between pl-[30px]">
        
        <div className="flex flex-col gap-[46px] ">
          <div className="mt-[22px]">
            <h1 className="text-xl font-source-sans-pro font-700 text-dark-500">
              Build
            </h1>
            <div className="grid grid-cols-2 gap-5 mt-[14px]">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-primary-400 flex justify-center items-center">
                  <Image src={IMAGES.IoxHost} alt="IoxHost" className="" />
                </div>
                <div>
                  <p className="text-[13px] font-source-sans-pro font-700 text-dark-500 mt-1">
                    Domain
                  </p>
                  <p className="text-[13px] font-source-sans-pro font-600 text-dark-300 tracking-tighter">
                    Purchase & manage your own domain.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-primary-400 flex justify-center items-center">
                  <Image src={IMAGES.OpenStack} alt="IoxHost" className="" />
                </div>
                <div>
                  <p className="text-[13px] font-source-sans-pro font-700 text-dark-500 mt-1">
                    Hosting
                  </p>
                  <p className="text-[13px] font-source-sans-pro font-600 text-dark-300 tracking-tighter">
                    Obtain & oversee your hosting solution
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-primary-400 flex justify-center items-center">
                  <Image src={IMAGES.IoxHost} alt="IoxHost" className="" />
                </div>
                <div>
                  <p className="text-[13px] font-source-sans-pro font-700 text-dark-500 mt-1">
                    Google Workspace
                  </p>
                  <p className="text-[13px] font-source-sans-pro font-600 text-dark-300 tracking-tighter">
                    Acquire & efficiently manage your workspace.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-primary-400 flex justify-center items-center">
                  <Image src={IMAGES.IoxHost} alt="IoxHost" className="" />
                </div>
                <div>
                  <p className="text-[13px] font-source-sans-pro font-700 text-dark-500 mt-1">
                    NDE Mail
                  </p>
                  <p className="text-[13px] font-source-sans-pro font-600 text-dark-300 tracking-tighter">
                    Connect & optimize your email communication.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h1 className="text-xl font-source-sans-pro font-700 text-dark-500">
              Manage
            </h1>
            <div className="grid grid-cols-2 gap-5 mt-[14px]">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-primary-400 flex justify-center items-center">
                  <Image src={IMAGES.IoxHost} alt="IoxHost" className="" />
                </div>
                <div>
                  <p className="text-[13px] font-source-sans-pro font-700 text-dark-500 mt-1 leading-[15px]">
                    Vision Now
                  </p>
                  <p className="text-[13px] font-source-sans-pro font-600 text-dark-300 tracking-tighter">
                    Purchase & manage your own domain.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-primary-400 flex justify-center items-center">
                  <Image src={IMAGES.OpenStack} alt="IoxHost" className="" />
                </div>
                <div>
                  <p className="text-[13px] font-source-sans-pro font-700 text-dark-500 mt-1">
                    Hosting
                  </p>
                  <p className="text-[13px] font-source-sans-pro font-600 text-dark-300 tracking-tighter">
                    Obtain & oversee your hosting solution
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-primary-400 flex justify-center items-center">
                  <Image src={IMAGES.IoxHost} alt="IoxHost" className="" />
                </div>
                <div>
                  <p className="text-[13px] font-source-sans-pro font-700 text-dark-500 mt-1">
                    Google Workspace
                  </p>
                  <p className="text-[13px] font-source-sans-pro font-600 text-dark-300 tracking-tighter">
                    Acquire & efficiently manage your workspace.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-primary-400 flex justify-center items-center">
                  <Image src={IMAGES.IoxHost} alt="IoxHost" className="" />
                </div>
                <div>
                  <p className="text-[13px] font-source-sans-pro font-700 text-dark-500 mt-1">
                    NDE Mail
                  </p>
                  <p className="text-[13px] font-source-sans-pro font-600 text-dark-300 tracking-tighter">
                    Connect & optimize your email communication.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[22px]">
          <h1 className="text-xl font-source-sans-pro font-700 text-dark-500">
            Grow
          </h1>
          <div className="flex flex-col gap-[30px] mt-[14px]">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-primary-400 flex justify-center items-center">
                <Image src={IMAGES.IoxHost} alt="IoxHost" className="" />
              </div>
              <div>
                <p className="text-[13px] font-source-sans-pro font-700 text-dark-500 mt-1">
                  Mails Now
                </p>
                <p className="text-[13px] font-source-sans-pro font-600 text-dark-300 tracking-tighter">
                  Purchase & manage your own domain.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-primary-400 flex justify-center items-center">
                <Image src={IMAGES.OpenStack} alt="IoxHost" className="" />
              </div>
              <div>
                <div className="flex items-center gap-[6px]">
                  <p className="text-[13px] font-source-sans-pro font-700 text-dark-500 mt-1">
                    Google Ads
                  </p>
                  <div className="bg-[#00F0FF] text-[10px] font-merriweather rounded-[18px] font-600 text-dark-500 px-1 py-[2px] w-[27px] flex justify-center">
                    New
                  </div>
                </div>
                <p className="text-[13px] font-source-sans-pro font-600 text-dark-300 tracking-tighter">
                  Acquire & efficiently manage your workspace.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-primary-400 flex justify-center items-center">
                <Image src={IMAGES.IoxHost} alt="IoxHost" className="" />
              </div>
              <div>
                <p className="text-[13px] font-source-sans-pro font-700 text-dark-500 mt-1">
                  Social Media Ads
                </p>
                <p className="text-[13px] font-source-sans-pro font-600 text-dark-300 tracking-tighter">
                  Obtain & oversee your hosting solution
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-primary-400 flex justify-center items-center">
                <Image src={IMAGES.IoxHost} alt="IoxHost" className="" />
              </div>
              <div>
                <p className="text-[13px] font-source-sans-pro font-700 text-dark-500 mt-1">
                  Marketing Planner
                </p>
                <p className="text-[13px] font-source-sans-pro font-600 text-dark-300 tracking-tighter">
                  Connect & optimize your email communication.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[300px] h-[473px] rounded-bl-2xl rounded-br-2xl bg-gradient-light px-3 py-[58px]">
          <div className="w-[277px] h-[202px] rounded-2xl border border-white bg-gradient-to-r from-[#CCD1F6] to-[#CCD1F6]">
            <div className="bg-gradient-to-r from-[#CCD1F6] to-[#CCD1F6] py-4 px-1 rounded-t-2xl">
              <Image src={IMAGES.menuCardImg} alt="menuCardImg" className="" />
            </div>

            <div className="bg-white rounded-b-2xl px-[15px] py-5">
              <h1 className="text-xl font-source-sans-pro font-700 text-dark-500">
                Try our interactive self-guided demo
              </h1>
              <p className="text-dark-400 text-[13px] font-merriweather font-400 mt-3 ">
                Experience our product with our interactive self-guided demo
              </p>

              <button className=" text-primary-400 font-merriweather ctext-[13px] font-400 transition duration-300 transform hover:-translate-y-0.5 flex items-center mt-[7px]">
                Live demo
                <Image src={ICONS.arrowRight2} alt="arrowRight2" className="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDropdown;
