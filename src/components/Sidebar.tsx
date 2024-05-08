"use client";
import { ICONS } from "@/assets";
import Image from "next/image";
import React, { useEffect, useState } from "react";

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
        className={`overflow-y-scroll fixed inset-y-0 right-0 z-50 bg-white w-[471px] h-screen transition-all duration-300 transform ${
          isHamburgerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {isHamburgerOpen && <div></div>}
      </div>
    </div>
  );
};

export default Sidebar;
