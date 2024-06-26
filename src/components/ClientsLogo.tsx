import React from "react";
import Marquee from "react-fast-marquee";
import { IMAGES } from "@/assets";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
const ClientsLogo = () => {
  return (
    <div className="flex flex-col gap-5 sm:gap-7 w-full max-width">
      <h2 className="text-text-700 text-base-bold text-center max-md:text-[13px]">
        12,000+ global businesses trust us to transform & grow digitally
      </h2>
      <Marquee
        autoFill
        pauseOnHover={true}
        className="flex items-center justify-center"
      >
        {[
          IMAGES.img1,
          IMAGES.img2,
          IMAGES.img3,
          IMAGES.img4,
          IMAGES.img5,
          IMAGES.img6,
          IMAGES.img7,
          IMAGES.img8,
        ].map((img, index) => (
          <Image
            key={index}
            src={img}
            alt="logo"
            className={twMerge(
              "object-contain object-center max-h-[60px] max-w-[60px] ml-14"
            )}
            height={100}
            width={100}
            quality={100}
          />
        ))}
      </Marquee>
    </div>
  );
};

export default ClientsLogo;
