import React from "react";
import img from "@/assets/images/features-chat-now.png";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

const FEATURES = [
  {
    label: "Live Chat Software",
    title: "Spark customer delight, one message at a time",
    labelBackground: "#C7CBFF",
    labelTextColor: "#0011FF",
    img,
    desc: "Enhance your communication with prospects and customers at every stage of their customer journey—from the time they land on your website to the customer support phase—with Zoho SalesIQ's live chat software.",
  },
  {
    label: "Instant Messaging",
    title: "Reach customers on their favorite instant messaging channels",
    img,
    labelBackground: "#E7FFC3",
    labelTextColor: "#4D593C",
    background: "#F0F4EA",
    desc: "Connect with your prospects and customers wherever they are and give them the convenience of chatting with your business from their preferred channels.",
  },
  {
    label: "Co browsing",
    title: "Reach customers on their favorite instant messaging channels",
    img,
    labelBackground: "#C7CBFF",
    labelTextColor: "#0011FF",
    background: "#F3F4FD",
    desc: "Our cobrowsing software provides real-time assistance with shared browsing and live chat. Crisp lets you co-browse with your customers without any plugin other than our live chat solution.",
  },
];

const Features = () => {
  return (
    <div className="flex flex-col w-full ">
      <h2 className="text-primary-500 wrapper font-900 font-source-sans-pro text-[36px]  md:text-[42px] xl:text-[61px] tracking-[-2px] leading-[110%] text-center">
        How It Works
      </h2>
      <div className="flex flex-col">
        {FEATURES.map((feature, index) => (
          <div
            key={index}
            style={{
              background: feature.background,
            }}
            className="py-9 xl:py-20"
          >
            <div
              className={twMerge(
                "flex flex-col items-center justify-center text-center xl:text-left wrapper max-width gap-6 md:gap-16",
                index % 2 === 0 ? "xl:flex-row" : "xl:flex-row-reverse"
              )}
            >
              <div className="flex flex-col items-center xl:items-start justify-center gap-4 xl:max-w-[500px]">
                <div
                  className={twMerge(
                    "px-6 py-4 rounded-xl font-source-sans-pro font-900 text-xl md:text-2xl"
                  )}
                  style={{
                    background: feature.labelBackground,
                    color: feature.labelTextColor,
                  }}
                >
                  {feature.label}
                </div>
                <h3 className=" mt-4 font-900 text-[25px] tracking-[-2px] leading-[110%] md:text-[34px]">
                  {feature.title}
                </h3>
                <p className="text-sm font-merriweather leading-[165%] md:text-base">
                  {feature.desc}
                </p>
              </div>
              <Image
                src={feature.img}
                alt="feature"
                height={1000}
                width={1000}
                quality={100}
                className="object-contain object-center max-w-[550px] w-full"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
