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
        <div className=" warpper  bg-gradient-Hosing">
            <div className="flex items-center max-width pt-[160px] px-14 max-lg:flex-col max-lg:text-center pb-[50px]">
                <div className="w-[800px] max-lg:w-full flex flex-col gap-6 max-lg:gap-4">
                    <span className=" heading2 font-source-sans-pro text-primary-500 leading-[60px] max-lg:text-5xl max-md:text-2xl">EXPERIENCE POWERFUL WEB HOSTING</span>
                    <span className=" font-merriweather text-md pr-[200px] max-lg:pr-0 max-md:text-[12px]">We minimise your downtime with our reliable technical experts and IT infrastructure management</span>
                    <div className="flex gap-6 max-lg:justify-center max-md:flex-wrap max-md:gap-4 max-md:pb-6">
                        {features.map((feature, index) => (
                            <div key={index} className="flex gap-1 items-center">
                                <Image src={feature.icon} alt="Checkmark Icon" />
                                <span className="font-merriweather font-semibold text-primary-500 text-md max-md:text-xs">{feature.text}</span>
                            </div>
                        ))}
                    </div>
                    <div className=" flex items-center gap-1 max-lg:justify-center">
                        <span className=" font-source-sans-pro text-primary-500 font-700 text-lg mt-1">Starts @ </span>
                        <span className="text-primary-500  text-4xl items-center font-source-sans-pro font-900">167.00</span>
                        <span className="font-merriweather text-primary-500 font-900 text-lg mt-3">/mo</span>
                    </div>
                    <div className="flex max-lg:justify-center">
                        <button className=" bg-primary-300 font-merriweather text-md w-[200px] font-bold text-white p-2 rounded-[4px]">Get Started Now</button>
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