"use client";
import { useEffect, useState, useRef } from "react";
import { ICONS, IMAGES } from "@/assets";
import Image from "next/image";
import ServiceCard from "./ServiceCard";
import { BUSINESS_DETAILS } from "@/assets/data/businessDetails";
import Slider from "react-slick";

const BuildYourBusiness = () => {
  const titles = ["Build", "Manage", "Grow"];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  //change slidesToShow based on screen size
  const handleCheckScreenSize = () => {
    if (window.innerWidth >= 1024) {
      return 3;
    } else if (window.innerWidth >= 768) {
      return 2;
    } else {
      return 1;
    }
  };

  const [slidesToShow, setSlidesToShow] = useState(() =>
    handleCheckScreenSize()
  );

  useEffect(() => {
    const setSliderCount = () => {
      setSlidesToShow(handleCheckScreenSize());
    };
    window.addEventListener("resize", setSliderCount);
    return () => window.removeEventListener("resize", setSliderCount);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToShow,
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-[50px] mt-12 wrapper md:mt-24 max-width">
      <h1 className="heading2 capitalize text-center w-[800px] max-lg:w-[700px] max-md:w-[350px] max-lg:text-[48px] max-md:text-[30px] max-md:leading-[30px]">
        <div className=" w-[237px] max-md:w-[110px]  text-primary-400 inline-flex justify-end ">
          <div className="text-end max-md:text-[30px] border-b-4 border-dashed border-primary-400 w-fit ">
            {titles[currentTitleIndex]}
          </div>
        </div>{" "}
        your business in one single platform
      </h1>

      <div className="slider-container w-full">
        <Slider {...settings}>
          {BUSINESS_DETAILS.map((businessCard, index) => (
            <ServiceCard
              key={index}
              title={businessCard.title}
              subTitle={businessCard.subTitle}
              details={businessCard.details}
            />
          ))}
        </Slider>
      </div>

      {/* <div className="flex items-center gap-[13px] justify-center max-md:hidden">
        <Image
          onClick={prevSlider}
          src={ICONS.arrowLeft}
          alt="cardBg"
          className="w-[6px] h-[12px] cursor-pointer"
        />

        <div className="flex items-center gap-2">
          {[...Array(Math.ceil(businessCardDetails.length / 3)).keys()].map(
            (index) => (
              <div
                key={index}
                className={`w-4 h-4 rounded-full ${
                  currentSlider === index * 3
                    ? "bg-primary-100"
                    : "bg-dark-400 opacity-40"
                }`}
                onClick={() => setCurrentSlider(index * 3)}
                style={{ cursor: "pointer" }}
              ></div>
            )
          )}
        </div>

        <Image
          onClick={nextSlider}
          src={ICONS.arrowRight}
          alt="cardBg"
          className="w-[6px] h-[12px] cursor-pointer"
        />
      </div> */}
    </div>
  );
};

export default BuildYourBusiness;
