import Image from "next/image"
import Marquee from "react-fast-marquee"
import { ICONS, IMAGES } from "@/assets"
import { twMerge } from "tailwind-merge";

const Hero = () => {
  return (
    <div className=" warpper py-10" style={{ "background": "linear-gradient(180deg, #F4F3F3 0%, #E2C1FC 100%)" }}>
      <div className="flex items-center max-width pt-[100px] max-md:pt-10 px-14 max-lg:flex-col max-lg:text-center pb-[50px] gap-10">
        <div className="w-[640px] max-lg:w-full flex flex-col gap-6 max-lg:gap-4">
          <span className=" heading2 font-source-sans-pro text-primary-500 leading-[60px] max-lg:text-5xl max-md:text-2xl max-xl:text-3xl">Land in the Inbox. Not the Spam Folder.</span>
          <span className=" font-merriweather text-md pr-[200px] max-xl:pr-10  max-lg:pr-0 max-md:text-[12px]">Mailivery&apos;s email warmup tool improves your email reputation by having real conversations in your inbox, helping you to beat SPAM algorithms.</span>
          <div className="flex max-lg:justify-center gap-10  max-lg:inline ">
              <button className=" bg-primary-300 font-merriweather text-md w-[200px] text-md max-lg:m-2   font-bold text-white p-2 rounded-[4px]">Get Started Today</button>
              <button className="  border-[2px] border-[#AA39FF]  font-merriweather text-md  max-lg:m-2 max-md:w-[150px]  w-[200px] font-bold  p-2 rounded-[4px]">View Demo</button>
          </div>
        </div>
        <Image src={IMAGES.mailnow} alt={""} />
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