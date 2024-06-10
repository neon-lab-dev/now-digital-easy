"use client";
import Image from "next/image";
import React, { useState } from "react";
import arrow from "@/assets/images/Vector 35.svg";
import { FAQS } from "@/assets/data/faq";

const FAQs = ({ style }: { style?: React.CSSProperties }) => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleDropdown = (faqId: number) => {
    setOpenFAQ((prevOpenFAQ) => (prevOpenFAQ === faqId ? null : faqId));
  };

  return (
    <div style={style} className="bg-background-FAQ ">
      <div className="py-[80px] wrapper max-width">
        <div className="flex justify-center ">
          <span className="text-[60px] max-lg:text-[34px] max-md:text-center max-md:text-[28px] tracking-tighter text-[#000659] font-source-sans-pro font-900">
            Frequently Asked Questions
          </span>
        </div>
        <div className="flex justify-center pt-[20px]">
          <span className="text-[15px] w-[1050px] max-lg:w-[600px] max-md:w-[375px] max-md:text-[15px] text-center font-merriweather">
            If you have further inquiries about our Google Workspace, Google
            Workspace Pricing, dont hesitate to reach out to us. Below are the
            frequently asked questions regarding our services.
          </span>
        </div>
        <div className="flex justify-center pt-[30px] md:pt-[50px] p-3 w-full">
          <div className="flex flex-col items-center justify-center gap-8 w-full">
            {FAQS.map((faq) => (
              <div
                key={faq.id}
                onClick={() => toggleDropdown(faq.id)}
                className={`flex max-w-[1000px] flex-col bg-white cursor-pointer rounded-[10px] py-[24px] px-[15px] w-full`}
              >
                <div
                  className={`flex items-start justify-between px-6 gap-4  duration-700`}
                >
                  <span className="text-[12px] md:text-[15px] font-merriweather font-600 ">
                    {faq.question}
                  </span>
                  <Image
                    src={arrow}
                    alt={""}
                    className={`${
                      openFAQ === faq.id ? "rotate-180" : "rotate-0"
                    } duration-300 mt-2`}
                  />
                </div>
                {openFAQ === faq.id && (
                  <div className="w-full text-[12px] md:text-[14px]  font-merriweather  items-center py-2 px-6">
                    <span className="text-[15px]">{faq.answer}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
