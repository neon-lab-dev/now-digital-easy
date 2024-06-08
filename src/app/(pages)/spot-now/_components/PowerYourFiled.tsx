import React from "react";
import location from "@/assets/icons/location.svg";
import ServiceCard from "./ServiceCard";

const SERVICE_CARDS = [
  {
    label: "Activity Timeline",
    desc: "Stay in the loop with a visual timeline of your team's daily activities, ensuring transparency and accountability.",
    icon: location,
  },
  {
    label: "Daily Attendance",
    desc: "Effortlessly record and monitor daily attendance that eliminates confusions and proxies.",
    icon: location,
  },
  {
    label: "Live Tracking",
    desc: "Instantly pinpoint the exact location of your field employees for precise monitoring and efficient task allocation.",
    icon: location,
  },
  {
    label: "Task Management",
    desc: "Assign, prioritize, and monitor tasks in real-time, ensuring your team stays focused and productive.",
    icon: location,
  },
  {
    label: "AUser-Friendly Interface",
    desc: "Intuitive and easy-to-navigate platform that requires no technical expertise for seamless integration into your workflow.",
    icon: location,
  },
  {
    label: "Reports & Analytics",
    desc: "Generate reports of your business with real-time insights of your KPIs to make better, data-driven decisions.",
    icon: location,
  },
];

const PowerYourField = () => {
  return (
    <div className="w-full bg-[#EEFDF6] bg-opacity-50">
      <div className="flex flex-col wrapper max-width items-center justify-center gap-6 py-12">
        <h1 className="text-center font-source-sans-pro font-900 text-primary-500 text-[25px] md:text-[36px] txl:ext-[54px] tracking-[-2px] leading-[110%]">
          Power your Field Service Team and Deliver Better Results
        </h1>
        <p className="font-merriweather text-primary-500 text-sm md:text-base text-center max-w-[700px]">
          SpotNow is your key to seamless, agile, and data-driven workforce
          management.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-9 xl:gap-12 mt-6">
          {SERVICE_CARDS.map((card, index) => (
            <ServiceCard key={index} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PowerYourField;
