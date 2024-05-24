"use client";
import { ICONS, IMAGES } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "./Sidebar";
import { useState, useEffect } from "react";
import ProductDropdown from "./../app/(pages)/(home)/_components/ProductDropdown";

const Navbar = () => {
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);

  const toggleProductsDropdown = () => {
    setIsProductsDropdownOpen(!isProductsDropdownOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent): void => {
      const closestDropdown = (event.target as HTMLElement).closest(
        ".productsDropdown"
      );
      if (isProductsDropdownOpen && closestDropdown === null) {
        setIsProductsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isProductsDropdownOpen]);

  return (
    <nav className='relative productsDropdown bg-gradient-light flex gap-[13px] font-merriweather'>
      <div className="bg-white bg-opacity-50 w-[80px] h-[55px] rounded-b-lg"></div>
      <Link href="/" >
      <Image src={ICONS.logo} alt="logo" className="w-[150px] h-[50px]" />
      </Link>
      <div className="bg-white bg-opacity-50 w-full h-[55px] rounded-b-lg flex items-center justify-between">
        <div className="w-[90%] flex justify-center "> 
          <div className="flex items-center gap-[42px] max-lg:hidden  ">
            <Link
              onClick={toggleProductsDropdown}
              href={""}
              className="flex items-center gap-2 nav-link hover:text-primary-400 transition duration-300"
            >
              Products
              {isProductsDropdownOpen ? (
                <Image
                  src={ICONS.downArrow}
                  alt="downArrow"
                  className="rotate-180"
                />
              ) : (
                <Image src={ICONS.downArrow} alt="downArrow" className="" />
              )}
            </Link>

            {isProductsDropdownOpen && (
              <div
                className={`${
                  isProductsDropdownOpen ? "visible" : "invisible"
                } absolute top-14 z-50 left-0 box-border`}
              >
                <ProductDropdown />
              </div>
            )}

            <Link
              href={""}
              className="flex items-center gap-2 nav-link hover:text-primary-400 transition duration-300"
            >
              Resources
              <Image src={ICONS.downArrow} alt="downArrow" className="" />
            </Link>

            <Link
              href={""}
              className="nav-link hover:text-primary-400 transition duration-300"
            >
              Pricing
            </Link>

            <Link
              href={""}
              className="nav-link hover:text-primary-400 transition duration-300"
            >
              Demo
            </Link>

            <Link
              href={""}
              className="flex items-center gap-2 nav-link hover:text-primary-400 transition duration-300"
            >
              More
              <Image src={ICONS.downArrow} alt="downArrow" className="" />
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-[16px] pr-16 min-w-[260px] max-lg:pr-0">
          <div className="flex  items-center gap-[14px] min-w-[158px] max-md:hidden ">
            <button className="text-button rounded border border-primary-400 px-2 py-[10px] shadow">
              Log In
            </button>

            <button className="text-button rounded border border-primary-400 bg-primary-400 text-white px-2 max-lg:px-1 py-[10px] shadow">
              Sign Up
            </button>
          </div>
          <Sidebar />
          <button className="text-button  shadow px-3 max-lg:px-0 lg:hidden max-md:ml-[200px] ">
              <Image src={ICONS.menu} alt={""}/>
            </button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
