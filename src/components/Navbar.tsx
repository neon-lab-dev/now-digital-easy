"use client";
import { ICONS } from "@/assets";
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
    <nav className='relative productsDropdown bg-gradient-light flex " gap-[13px]'>
      <div className="bg-white bg-opacity-50 w-[57px] h-[55px] rounded-b-lg"></div>
      <Image src={ICONS.logo} alt="logo" className="" />
      <div className="bg-white bg-opacity-50 w-full h-[55px] rounded-b-lg flex items-center justify-between">
        <div className="w-[90%] flex justify-center"> 
          <div className="flex items-center gap-[42px]  ">
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
                } absolute top-16 z-50 left-0 box-border`}
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

        <div className="flex items-center gap-[16px] pr-16 min-w-[260px]">
          <div className="flex items-center gap-[14px] min-w-[158px]">
            <button className="text-button rounded border border-primary-400 px-3 py-[10px] shadow">
              Log In
            </button>

            <button className="text-button rounded border border-primary-400 bg-primary-400 text-white px-3 py-[10px] shadow">
              Sign Up
            </button>
          </div>

          <Sidebar />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
