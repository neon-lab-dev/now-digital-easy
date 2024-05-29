import { ICONS, IMAGES } from "@/assets";
import { PRODUCT_DROPDOWN_DATA } from "@/assets/data/navlinks";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  closeDropdown: () => void;
};

const ProductDropdown = ({ closeDropdown }: Props) => {
  return (
    <div
      onClick={() => closeDropdown()}
      className=" bg-[#F9FAFF] rounded-b-2xl w-screen box-border h-[473px] shadow-2xl font-600"
    >
      <div className="flex justify-between pl-[30px]">
        <div className="flex flex-col gap-[46px] ">
          <div className="mt-[22px]">
            <h1 className="text-xl font-700 text-dark-500">Build</h1>
            <div className="grid grid-cols-2 gap-5 mt-[14px]">
              {PRODUCT_DROPDOWN_DATA.build.map((item, i) => (
                <ProductDropdownLink key={i} {...item} />
              ))}
            </div>
          </div>

          <div>
            <h1 className="text-xl font-700 text-dark-500">Manage</h1>
            <div className="grid grid-cols-2 gap-5 mt-[14px]">
              {PRODUCT_DROPDOWN_DATA.manage.map((item, i) => (
                <ProductDropdownLink key={i} {...item} />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-[22px]">
          <h1 className="text-xl font-700 text-dark-500">Grow</h1>
          <div className="flex flex-col gap-[30px] mt-[14px]">
            {PRODUCT_DROPDOWN_DATA.grow.map((item, i) => (
              <ProductDropdownLink key={i} {...item} />
            ))}
          </div>
        </div>

        <div className="w-[300px] h-[473px] rounded-bl-2xl rounded-br-2xl bg-gradient-light px-3 py-[58px]">
          <div className="w-[277px] h-[202px] rounded-2xl border border-white bg-gradient-to-r from-[#CCD1F6] to-[#CCD1F6]">
            <div className="bg-gradient-to-r from-[#CCD1F6] to-[#CCD1F6] py-4 px-1 rounded-t-2xl">
              <Image src={IMAGES.menuCardImg} alt="menuCardImg" className="" />
            </div>

            <div className="bg-white rounded-b-2xl px-[15px] py-5">
              <h1 className="text-xl font-700 text-dark-500">
                Try our interactive self-guided demo
              </h1>
              <p className="text-dark-400 text-[13px] font-merriweather font-400 mt-3 ">
                Experience our product with our interactive self-guided demo
              </p>
              <button className=" text-primary-400 font-merriweather ctext-[13px] font-400 transition duration-300 transform hover:-translate-y-0.5 flex items-center mt-[7px]">
                <div className="flex items-center gap-1">
                  <span>Live demo</span>
                  <Image
                    src={ICONS.arrowRight2}
                    alt="arrowRight2"
                    className=""
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDropdown;

const ProductDropdownLink = ({
  ...item
}: (typeof PRODUCT_DROPDOWN_DATA.build)[number]) => {
  return (
    <Link href={item.href} className="flex items-center gap-3">
      <div className="w-9 h-9 rounded-lg bg-primary-400 flex justify-center items-center">
        <Image src={item.img} alt="IoxHost" className="" />
      </div>
      <div>
        <p className="text-[13px] font-700 text-dark-500 mt-1">{item.title}</p>
        <p className="text-[13px] font-600 text-dark-300 tracking-tighter">
          {item.description}
        </p>
      </div>
    </Link>
  );
};
