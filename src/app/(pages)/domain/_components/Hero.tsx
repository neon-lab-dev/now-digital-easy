"use client"

import React, { useEffect, useState } from 'react';
import searchIcon from "../../../../../src/assets/icons/search.svg";
import Image from 'next/image';
import Clients from '@/components/Clients';
import TextTransition, { presets } from "react-text-transition";
// import './Hero.css';

const Hero = () => {
  const TEXTS = [
    "travel",
    "tech",
    "education",
    "fun",
    "online",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 3000);
    return () => clearTimeout(intervalId);
  }, []);

  const getTextColor = (text : string) => {
    if (text === "travel" || text === "fun") {
      return '#A2197F';
    } else {
      return '#0011FF';
    }
  };


    return (
        <div className="bg-gradient-domain pt-[156px] pb-[58px] font-source-sans-pro flex flex-col gap-[156px]">
            <div className="px-[200px]">
            {/* <div className='animation-container'> */}
            <h1 className="heading1 text-primary-500 text-center animation-container flex gap-[5px]">
            Expand your horizons with . 
            {/* <div className="slider">
                <h1 className="text-primary-400 line">travel</h1>
                <h1 className="text-primary-400 line">tech</h1>
                <h1 className="text-primary-400 line">education</h1>
                <h1 className="text-primary-400 line">fun</h1>
                <h1 className="text-primary-400 line">online</h1>
            </div> */}

<TextTransition
            direction="down"
            springConfig={presets.gentle}
            delay={0}
            style={{ color: getTextColor(TEXTS[index % TEXTS.length]) }}
          >
            {TEXTS[index % TEXTS.length]}
          </TextTransition>
          </h1>
            {/* </div> */}

          <h2 className='subheading3 text-primary-500 text-center mt-6'>Get started with the perfect domain.</h2>

          {/* Input field */}
          <div className="flex items-center w-full mt-[30px]">
          <div className="relative w-full">
          <Image src={searchIcon} alt='search-icon' className='w-6 h-6 absolute top-[18px] left-[14px]'/>
          <input type="text" placeholder="Find and purchase a domain name" className='bg-white text-dark-500 pl-[45px] pr-[14px] h-[60px] rounded-l-lg w-full focus:outline-none' />
          </div>

          <button className="bg-primary-400 px-[14px] h-[60px] text-white rounded-r-lg font-merriweather text-[17px] font-700">Search</button>
          </div>


          <div className="flex items-center justify-between mt-[14px]">
          <h3 className="text-primary-500 font-merriweather font-700 leading-[21.45px] underline">Transfer a domain you already own</h3>

          <h2 className='subheading3 text-primary-500 text-center -tracking-1'>.COM <span className="font-400">only ₹1080.99</span> .NET <span className="font-400">only ₹999.99</span></h2>
          </div>

        </div>
          <Clients/>
        </div>
    );
};

export default Hero;