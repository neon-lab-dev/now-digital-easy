"use client"
import Image from 'next/image';
import React, { useState } from 'react'
import arrow from "@/assets/images/Vector 35.svg"

const FAQs = () => {
    const [isOpen, setIsOpen] = useState(false);


    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className='bg-background-FAQ  mb-[40px] py-[120px]'>
            <div className="flex justify-center ">
                <span className="text-[65px]">Frequently Asked Questions</span>
            </div>
            <div className="flex justify-center pt-[20px]">
                <span className="text-[20px] w-[955px] text-center">If you have further inquiries about our Google Workspace, Google Workspace Pricing, don &apos;t hesitate to reach out to us. Below are the frequently asked questions regarding our services.</span>
            </div>
            <div className='flex justify-center pt-[30px] p-3'>
                <div className='flex flex-col gap-8'>
                    <div className='flex flex-col'>
                    <div className={`flex items-center bg-white w-[1004px] h-[97px] justify-between px-6 ${isOpen ? 'rounded-b-none' : 'rounded-[10px]'}  duration-700`} onClick={toggleDropdown}>
                        <span>Can I transfer my existing G-suite / Google Workspace from another service provideror direct Google to Now Digital Easy?</span>
                        <Image src={arrow} alt={''} className={`${isOpen ? 'rotate-180' : 'rotate-0'} duration-300`} />
                    </div>
                    {isOpen && (
                        <div className={`${isOpen ? 'rounded-b-[20px]' : ''} bg-white w-[1004px] h-[80px]  items-center py-2 px-6`}>
                            <span>Can I transfer my existing G-suite / Google Workspace from another service provideror direct Google to Now Digital Easy?Can I transfer my existing G-suite / Google Workspace from another service provideror direct Google to Now Digital Easy?</span>
                        </div>
                    )}
                    </div>

                    <div className='flex items-center bg-white w-[1004px] h-[97px] justify-between px-6 rounded-[10px]'>
                        <span>Can I transfer my existing G-suite / Google Workspace from another service provideror direct Google to Now Digital Easy?</span>
                        <Image src={arrow} alt={''} />
                    </div>
                    <div className='flex items-center bg-white w-[1004px] h-[97px] justify-between px-6 rounded-[10px]'>
                        <span>Can I transfer my existing G-suite / Google Workspace from another service provideror direct Google to Now Digital Easy?</span>
                        <Image src={arrow} alt={''} />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default FAQs