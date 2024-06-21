"use client";
import React, { useEffect, useState } from "react";
import searchIcon from "../../../../../src/assets/icons/search.svg";
import Image from "next/image";
import Clients from "@/components/Clients";
import TextTransition, { presets } from "react-text-transition";
import { useMutation } from "@tanstack/react-query";
import { handleCheckDomainAvailabilityService } from "@/services/google-workspace";
import { toast } from "react-toastify";
import DomainResults from "./DomainResults";
import { useAppSelector } from "@/hooks/redux";
import { DOMAIN_REGEX } from "@/assets/constants/regex";
// import './Hero.css';

const Hero = () => {
  const TEXTS = ["travel", "tech", "education", "fun", "online"];
  const [domain, setDomain] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const { currency } = useAppSelector((state) => state.user);

  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 3000);
    return () => clearTimeout(intervalId);
  }, []);

  const getTextColor = (text: string) => {
    if (text === "travel" || text === "fun") {
      return "#A2197F";
    } else {
      return "#0011FF";
    }
  };

  const {
    mutate: handleCheckAvailability,
    isPending: isCheckAvailabilityPending,
    data: domainAvailabilityData,
    isSuccess: isCheckAvailabilitySuccess,
  } = useMutation({
    mutationFn: handleCheckDomainAvailabilityService,
    onError: (error: string) => {
      toast.error(error);
    },
    onSuccess: (data) => {
      setIsOpen(true);
    },
  });

  return (
    <>
      <DomainResults
        domains={domainAvailabilityData ?? []}
        isOpen={isOpen && !isCheckAvailabilityPending}
        setIsOpen={setIsOpen}
      />
      <div className="bg-gradient-domain pt-[156px] pb-[58px] font-source-sans-pro flex flex-col gap-[156px] wrapper">
        <div className="max-width">
          <div className="font-900 text-[16px] md:text-[33px] xl:text-[46px] 2xl:text-[56px] leading-[30px] md:leading-[46px] xl:leading-[67px] text-primary-500 text-center flex gap-[5px] justify-center w-full xl:w-[1300px]">
            <span>Expand your horizons with .</span>
            <TextTransition
              direction="down"
              springConfig={presets.gentle}
              delay={0}
              style={{ color: getTextColor(TEXTS[index % TEXTS.length]) }}
            >
              {TEXTS[index % TEXTS.length]}
            </TextTransition>
          </div>

          <h2 className="text-[15px] sm:text-base xl:text-[24px] font-900 leading-[17px] tracking-1 text-primary-500 text-center mt-[18px] md:mt-6">
            Get started with the perfect domain.
          </h2>

          {/* Input field */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (DOMAIN_REGEX.test(domain?.trim()) === false) {
                toast.error("Invalid domain name");
                return;
              }
              handleCheckAvailability({
                domain: domain?.trim(),
                country_code: currency?.countryCode!,
              });
            }}
            className="flex items-center mt-[30px] max-w-[980px] mx-auto"
          >
            <div className="relative w-full">
              <Image
                src={searchIcon}
                alt="search-icon"
                className="w-6 h-6 absolute top-[18px] left-[14px]"
              />
              <input
                disabled={isCheckAvailabilityPending}
                type="text"
                value={domain}
                onChange={(e) => {
                  setIsOpen(false);
                  setDomain(e.target.value);
                }}
                placeholder="Find and purchase a domain name"
                className="bg-white text-dark-500 pl-[45px] pr-[14px] h-[60px] rounded-l-lg w-full focus:outline-none"
              />
            </div>

            <button
              disabled={isCheckAvailabilityPending}
              className="bg-primary-400 px-[14px] h-[60px] text-white rounded-r-lg font-merriweather text-[17px] font-700"
            >
              {isCheckAvailabilityPending ? "Checking..." : "Search"}
            </button>
          </form>

          <div className="max-w-[980px] mx-auto flex items-center justify-between mt-[14px]">
            <h3 className="text-primary-500 text-[9px] md:text-[13px] font-merriweather font-700 leading-[21.45px] underline">
              Transfer a domain you already own
            </h3>

            <h2 className=" text-primary-500 text-center text-[9px] md:text-[18px] lg:text-2xl tracking-[0px] md:-tracking-1 font-900">
              .COM <span className="font-400">only ₹1080.99</span> .NET{" "}
              <span className="font-400">only ₹999.99</span>
            </h2>
          </div>
        </div>
        <Clients />
      </div>
    </>
  );
};

export default Hero;
