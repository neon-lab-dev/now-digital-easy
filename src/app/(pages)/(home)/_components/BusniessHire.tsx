'use client';
import { SetStateAction, useState } from 'react';
import Image from "next/image";
import business from "@/assets/images/Rectangle 46383.svg";
import tools from '@/assets/images/AdministrativeTools.svg';
import safe from '@/assets/images/Protect.svg';
import money from '@/assets/images/Receive Euro.svg';
import building from '@/assets/images/Business Buildings.svg';
import people from '@/assets/images/People.svg';

const BusniessHire = () => {
    const [activeButton, setActiveButton] = useState("safe");

    const handleClick = (buttonName: string) => {
        setActiveButton(buttonName);
    };
    

    return (
        <>
            <div className="pt-[120px] flex justify-center">
                <div className="w-[75%] text-center flex flex-col gap-10 text-[#363B4C] items-center">
                    <span className="heading2 max-lg:text-[36px] max-lg:leading-[30px]">Businesses hire us because of the results we provide.</span>
                    <span className="text-s flex items-center justify-center w-[650px] max-lg:w-[550px] max-md:w-[350px] max-lg:text-[14px] ">We transform businesses wholly, across all the digital touch-points with targeted, highly relevant and personalized experiences.</span>
                </div>
            </div>
            <div className="flex max-lg:flex-col justify-center py-10 gap-4 max-lg:mx-8">
                <div className="h-[556px] w-[850px] max-lg:w-[712px] max-md:w-[350px] max-md:h-[300px] rounded-[60px] bg-gradient-gif">
                </div>
                <div className="flex flex-col gap-6" >
                    <button className={`rounded-xl w-[381px] max-lg:w-[712px] max-md:w-[350px] h-[92px] border-[3px] bg-[#F8F9FA]  ${activeButton === 'safe' ? 'border-[#1224F1] shadow-lg' : 'border-none'}`} onClick={() => handleClick('safe')}>
                        <div className="flex items-center max-lg:justify-center gap-3 px-3">
                            <Image src={safe} className="w-[60px] h-[60px] " alt={""} />
                            <span className={`subheading3 ${activeButton === 'safe' ? 'text-[#1224F1]' : ''}`}>Safe and Secure</span>
                        </div>
                    </button>
                    <button className={`rounded-xl w-[381px] max-lg:w-[712px] max-md:w-[350px]  h-[92px] border-[3px] bg-[#F8F9FA]  ${activeButton === 'tools' ? 'border-[#1224F1] shadow-lg' : 'border-none'}`} onClick={() => handleClick('tools')}>
                        <div className="flex items-center  max-lg:justify-center gap-3 px-3">
                            <Image src={tools} className="w-[60px] h-[60px] " alt={""} />
                            <span className={`subheading3 ${activeButton === 'tools' ? 'text-[#1224F1]' : ''}`}>User Friendly Tools</span>
                        </div>
                    </button>
                    <button className={`rounded-xl w-[381px] max-lg:w-[712px] max-md:w-[350px] h-[92px] border-[3px] bg-[#F8F9FA]  ${activeButton === 'money' ? 'border-[#1224F1] shadow-lg' : 'border-none'}`} onClick={() => handleClick('money')}>
                        <div className="flex items-center  max-lg:justify-center gap-3 px-3">
                            <Image src={money} className="w-[60px] h-[60px] " alt={""} />
                            <span className={`subheading3 ${activeButton === 'money' ? 'text-[#1224F1]' : ''}`}>Budget-Friendly Pricing</span>
                        </div>
                    </button>
                    <button className={`rounded-xl w-[381px] max-lg:w-[712px] max-md:w-[350px] h-[92px] border-[3px] bg-[#F8F9FA]  ${activeButton === 'building' ? 'border-[#1224F1] shadow-lg' : 'border-none'}`} onClick={() => handleClick('building')}>
                        <div className="flex items-center  max-lg:justify-center gap-3 px-3">
                            <Image src={building} className="w-[60px] h-[60px] " alt={""} />
                            <span className={`subheading3 ${activeButton === 'building' ? 'text-[#1224F1]' : ''}`}>10+ Years Experience</span>
                        </div>
                    </button>
                    <button className={`rounded-xl w-[381px] max-lg:w-[712px] max-md:w-[350px] h-[92px] border-[3px] bg-[#F8F9FA]  ${activeButton === 'people' ? 'border-[#1224F1] shadow-lg' : 'border-none'}`} onClick={() => handleClick('people')}>
                        <div className="flex items-center  max-lg:justify-center gap-3 px-3">
                            <Image src={people} className="w-[60px] h-[60px] " alt={""} />
                            <span className={`subheading3 ${activeButton === 'people' ? 'text-[#1224F1]' : ''}`}>12,000+ Customers</span>
                        </div>
                    </button>
                </div>
            </div>
        </>
    );
};

export default BusniessHire;
