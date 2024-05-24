'use client';
import { useState, useEffect, SetStateAction } from "react";
import Image from "next/image";
import { ICONS } from "@/assets";
import chart from "@/assets/images/Group 69344.svg";
import close from "@/assets/images/x.svg"
import Stepper from "./Stepper";
import CartSummary from "./CartSummary";
import Signup from "./Signup";
import Login from "./Login";
import OrderSummary from "./OrderSummary";


const Sidebar = () => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState<boolean>(false);
  const [showSignup, setShowSignup] = useState(true)
  const [currentStep, setCurrentStep] = useState(0);


  const handleContinueToCartAndNextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const handleSignUp = () => {
    setShowSignup(!showSignup);

  };
  const handleSignIn = () => {
    setCurrentStep((prev) => prev + 1);
    setShowSignup(false);
  };

  const handlePlaceOrder = () => {
    setCurrentStep((prev) => prev + 1);
  };
  interface Step {
    label: string
    step: number
  }

  interface StepperProps {
    steps: Step[]
  }

  const steps = [
    {
      label: 'Summary',
      step: 1,
    },
    {
      label: 'Login',
      step: 2,
    },
    {
      label: 'Payment',
      step: 3,
    },
  ]
  
  const closeCart = () => {
    setIsHamburgerOpen(false);
  };


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


  return (
    <div className="relative hamburgerMenu max-md:hidden ">
      <Image
        onClick={toggleHamburgerMenu}
        src={ICONS.cart}
        alt="downArrow"
        className="cursor-pointer"
      />
      <div
        className={`overflow-y-auto fixed inset-y-0 right-0 z-50 bg-white w-[471px]   transition-all duration-300 transform ${isHamburgerOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {isHamburgerOpen && (
          <div className=" bg-gradient-light h-[55px] px-4 py-4 justify-between flex items-center">
            <Image src={chart} alt="" className="pt-1" />
            <Stepper steps={steps} activeStep={1} currentStep={0} />
            <button onClick={closeCart}>
              <Image src={close} alt="Close" className="w-[20px]" />
            </button>
          </div>
        )}
        {isHamburgerOpen && (
          <div>
            {currentStep === 0 && <CartSummary handleContinueToCartAndNextStep={handleContinueToCartAndNextStep} />}
            {currentStep === 1 && (showSignup ? <Signup handleSignIn={handleSignIn} handleSignUp={handleSignUp} /> : <Login handleSignUp={handleSignUp} handleSignIn={handleSignIn}/>)}
            {currentStep === 2 && <OrderSummary handlePlaceOrder={handlePlaceOrder} />}
          </div>
        )
        }
      </div>
    </div>
  );
};

export default Sidebar;


