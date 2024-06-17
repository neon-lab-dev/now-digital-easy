import Image from "next/image"
import Marquee from "react-fast-marquee"
import { ICONS, IMAGES } from "@/assets"
import { twMerge } from "tailwind-merge";

const Hero = () => {
  const features = [
    { icon: ICONS.checkmark, text: "Free Domain" },
    { icon: ICONS.checkmark, text: "24/7 Support" },
    { icon: ICONS.checkmark, text: "Unmetered Traffic" }
  ];
  return (
    <div className=" warpper pb-10" style={{"background": "linear-gradient(112.9deg, #D3D6FD 0%, #FFEF99 100%)"
    }}>
      <div className="flex items-center max-width pt-[160px] max-lg:pt-10 px-14 max-lg:flex-col max-lg:text-center pb-[50px]">
        <div className="w-[800px] max-lg:w-full flex flex-col gap-6 max-lg:gap-4">
          <span className=" heading1 font-source-sans-pro text-primary-500 leading-heading1 max-lg:text-5xl max-md:text-xl">The easiest CRM to manage your customers</span>
          <span className=" font-merriweather text-md pr-[200px] max-lg:pr-0 max-md:text-[12px]">Now is the time to stop the scavenger hunt! Vision Now by NowDigitalEasy CRM is a simple yet powerful tool for any small or micro-sized business. Read on to find out what makes Vision Now stand above the rest.</span>
          <div className="flex max-lg:justify-center">
            <button className=" bg-primary-300 font-merriweather text-md w-[200px] font-bold text-white p-2 rounded-[4px]">Sign Up For Free</button>
          </div>
        </div>
        <div className="h-[200px]"></div>
      </div>
      <div className="flex flex-col gap-5 sm:gap-7 w-full max-width">
        <h2 className="text-text-700 text-base-bold text-center max-md:text-[13px]">
          12,000+ global businesses trust us to transform & grow digitally
        </h2>
        <Marquee
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
                "object-contain object-center max-h-[60px] max-w-[60px]",
                index !== 0 ? "ml-14" : ""
              )}
              height={100}
              width={100}
              quality={100}
            />
          ))}
        </Marquee>
      </div>
    </div>
  )
}
export default Hero