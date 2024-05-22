"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import arrow from "@/assets/images/Vector 35.svg";

const mockFAQs = [
  {
    id: 1,
    question: "Can I transfer my existing G-suite / Google Workspace from another service provider or direct Google to Now Digital Easy?",
    answer: "Yes, you can transfer your existing G-suite / Google Workspace from another service provider to Now Digital Easy. We offer seamless migration services to ensure a smooth transition.",
  },
  {
    id: 2,
    question: "Can I transfer my existing G-suite / Google Workspace from another service provider or direct Google to Now Digital Easy?",
    answer: "Yes, you can transfer your existing G-suite / Google Workspace from another service provider to Now Digital Easy. We offer seamless migration services to ensure a smooth transition.",
  },
  {
    id: 3,
    question: "Can I transfer my existing G-suite / Google Workspace from another service provider or direct Google to Now Digital Easy?",
    answer: "Yes, you can transfer your existing G-suite / Google Workspace from another service provider to Now Digital Easy. We offer seamless migration services to ensure a smooth transition.",
  },
  // Add more mock FAQs as needed
];

const FAQs = () => {
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);

    const toggleDropdown = (faqId: number) => {
        setOpenFAQ(prevOpenFAQ => prevOpenFAQ === faqId ? null : faqId);
    };

    return (
        <div className='bg-background-FAQ py-[80px]'>
            <div className="flex justify-center ">
                <span className="text-[65px] max-lg:text-[34px] max-md:text-center max-md:text-[28px]">Frequently Asked Questions</span>
            </div>
            <div className="flex justify-center pt-[20px]">
                <span className="text-[20px] w-[955px] max-lg:w-[600px] max-md:text-[15px] text-center">If you have further inquiries about our Google Workspace, Google Workspace Pricing, dont hesitate to reach out to us. Below are the frequently asked questions regarding our services.</span>
            </div>
            <div className='flex justify-center pt-[30px] p-3'>
                <div className='flex flex-col gap-8'>
                    {mockFAQs.map((faq) => (
                        <div key={faq.id} className='flex flex-col'>
                            <div className={`flex items-center bg-white w-[1004px] max-lg:w-[600px] max-md:w-[400px]  h-[97px] justify-between px-6 max-md:px-2 max-lg:px-2 ${openFAQ === faq.id ? 'rounded-b-none' : 'rounded-[10px]'} gap-2  duration-700`} onClick={() => toggleDropdown(faq.id)}>
                                <span  className='text-[15px]'>{faq.question}</span>
                                <Image src={arrow} alt={''} className={`${openFAQ === faq.id ? 'rotate-180' : 'rotate-0'} duration-300`} />
                            </div>
                            {openFAQ === faq.id && (
                                <div className={`${openFAQ === faq.id ? 'rounded-b-[20px]' : ''} bg-white w-[1004px]  max-md:w-[400px]   max-lg:w-[600px]   items-center py-2 px-6`}>
                                    <span className='text-[15px]'>{faq.answer}</span>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQs;
