import Image from "next/image";
import blob from "@/assets/icons/blob.svg";
import React from "react";

type Props = {
  label: string;
  desc: string;
  icon: any;
};

const ServiceCard = ({ icon, label, desc }: Props) => {
  return (
    <div
      style={{
        boxShadow: "4px 4px 20px 0px rgba(0, 0, 0, 0.25)",
      }}
      className="flex flex-col sm:max-w-[320px] items-center justify-center px-5 py-6 bg-[#FDFEFF] rounded-xl gap-2"
    >
      <div className="flex flex-col items-center justify-center relative">
        <Image src={blob} alt="blob" height={60} width={60} />
        <Image
          src={icon}
          alt={label}
          className="w-5 h-5 absolute inset-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      <h3 className="font-900 text-primary-500 text-[24px]">{label}</h3>
      <p className="text-text-900 text-center font-merriweather opacity-60 text-sm">
        {desc}
      </p>
    </div>
  );
};

export default ServiceCard;
