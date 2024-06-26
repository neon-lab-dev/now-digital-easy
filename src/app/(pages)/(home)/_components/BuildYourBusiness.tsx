"use client";
import { useEffect, useState, useRef } from "react";
import ServiceCard from "./ServiceCard";
import { BUSINESS_DETAILS } from "@/assets/data/businessDetails";
import Image from "next/image";
import { ICONS } from "@/assets";

const BuildYourBusiness = () => {
  const titles = ["Build", "Manage", "Grow"];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const cardContainerRef = useRef<HTMLDivElement>(null);

  // dynamically change the title
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // scroll the card container
  const handleScrollCard = (dir: "left" | "right") => {
    const withToScroll = (() => {
      const windowWidth = window.innerWidth;
      if (windowWidth < 400) {
        return 300;
      }
      if (windowWidth < 768) {
        return 400;
      }
      if (windowWidth < 1024) {
        return 500;
      }
      if (windowWidth < 1440) {
        return 600;
      } else {
        return 700;
      }
    })();
    if (cardContainerRef.current) {
      if (dir === "left") {
        cardContainerRef.current.scrollBy({
          left: -withToScroll,
          behavior: "smooth",
        });
      } else {
        cardContainerRef.current.scrollBy({
          left: withToScroll,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-[50px] mt-12 wrapper md:mt-24 max-width">
      <h1 className="heading2 capitalize text-center w-[800px] max-lg:w-[700px] max-md:w-[350px] max-lg:text-[48px] max-md:text-[30px] max-md:leading-[30px]">
        <div className=" w-[237px] max-md:w-[110px]  text-primary-400 inline-flex justify-end ">
          <div className="relative bottom-1 max-md:text-[30px] mr-1 border-b-[3px] border-dashed border-primary-400 w-fit leading-[1] font-source-sans-pro">
            {titles[currentTitleIndex]}
          </div>
        </div>{" "}
        your business in one single platform
      </h1>

      <div className="max-w-full overflow-hidden">
        <div
          ref={cardContainerRef}
          className="flex gap-4 scrollbar-none items-start snap-mandatory snap-x justify-start overflow-x-auto overflow-y-hidden  w-full"
        >
          {BUSINESS_DETAILS.map((businessCard, index) => (
            <ServiceCard
              key={index}
              title={businessCard.title}
              subTitle={businessCard.subTitle}
              details={businessCard.details}
            />
          ))}
        </div>
      </div>

      {/* scroll cards btn */}
      <div className="flex items-center gap-[13px] justify-center">
        <button onClick={() => handleScrollCard("left")} className="p-1">
          <Image
            src={ICONS.arrowLeft}
            alt="cardBg"
            className="w-[12px] h-[12px]"
          />
        </button>

        <button className="p-1" onClick={() => handleScrollCard("right")}>
          <Image
            src={ICONS.arrowRight}
            alt="cardBg"
            className="w-[12px] h-[12px]"
            height={12}
            width={12}
          />
        </button>
      </div>
    </div>
  );
};

export default BuildYourBusiness;
