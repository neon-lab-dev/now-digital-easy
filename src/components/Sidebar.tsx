"use client";
import { useEffect } from "react";
import Image from "next/image";
import { ICONS } from "@/assets";
import chart from "@/assets/images/Group 69344.svg";
import close from "@/assets/images/x.svg";
import Stepper from "./Stepper";
import CartSummary from "./CartSummary";
import OrderSummary from "./OrderSummary";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import {
  setIsSideBarActive,
  setIsSidebarOpen,
} from "@/store/slices/sidebarSlice";
import { twMerge } from "tailwind-merge";
import Login from "./Login";
import Signup from "./Signup";
import { setSidebarActiveStep } from "@/store/slices/cartSlice";

const Sidebar = () => {
  const { isSidebarOpen, isSidebarActive, activeAuthTab } = useAppSelector(
    (state) => state.sidebar
  );
  const { sidebarActiveStep } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const steps = ["Summary", "Login", "Payment"];

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent): void => {
      const closestDropdown = (event.target as HTMLElement).closest(
        ".hamburgerMenu"
      );
      if (isSidebarOpen && closestDropdown === null) {
        dispatch(setIsSidebarOpen(false));
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isSidebarOpen]);

  return (
    <>
      {isSidebarOpen && (
        <div
          onClick={() => {
            dispatch(setIsSidebarOpen(!isSidebarOpen));
            dispatch(setIsSideBarActive(true));
          }}
          className="fixed top-0 left-0 w-full h-dvh bg-black bg-opacity-50 z-40 backdrop-blur-[1px]"
        />
      )}
      <div className="relative hamburgerMenu">
        <Image
          onClick={() => {
            dispatch(setIsSidebarOpen(!isSidebarOpen));
            dispatch(setIsSideBarActive(true));
          }}
          src={ICONS.cart}
          alt="downArrow"
          className="cursor-pointer"
        />
        <div
          className={`overflow-y-auto fixed inset-y-0 right-0 z-50 bg-white w-full max-w-[471px] shadow-2xl  transition-all duration-300 transform ${
            isSidebarOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div
            className={twMerge(
              "h-[55px] px-4 py-4 justify-between flex items-center",
              (isSidebarActive || sidebarActiveStep === 1) &&
                "bg-gradient-light"
            )}
          >
            <Image
              src={chart}
              alt=""
              className={twMerge(
                "pt-1",
                isSidebarActive || sidebarActiveStep === 1
                  ? "opacity-100"
                  : "opacity-0"
              )}
            />
            <div
              className={
                isSidebarActive || sidebarActiveStep === 1
                  ? "opacity-100"
                  : "opacity-0"
              }
            >
              <Stepper steps={steps} activeStep={1} />
            </div>
            <button
              onClick={() => {
                dispatch(setIsSidebarOpen(false));
                dispatch(setSidebarActiveStep(0));
              }}
            >
              <Image src={close} alt="Close" className="w-[20px]" />
            </button>
          </div>
          {!isSidebarActive ? (
            <>{activeAuthTab === "signup" ? <Signup /> : <Login />}</>
          ) : (
            <div>
              {sidebarActiveStep === 0 && <CartSummary />}
              {sidebarActiveStep === 2 && <OrderSummary />}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
