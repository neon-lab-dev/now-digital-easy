import Image from "next/image"
import rectangle from "@/assets/images/Rectangle 46377.svg"
import cube from "@/assets/images/Group.svg"
import heart from "@/assets/images/heart.svg"
import Marquee from "react-fast-marquee"
import { IMAGES } from "@/assets"
import play from "@/assets/images/play-circle.svg"

const Hero = () => {
    return (
        <div className="bg-background-nde ">
            <div className="flex justify-center pt-16">
                <div className=" flex justify-center text-center text-[#000659] max-md:text-[30px]  text-[62px] w-[940px] max-lg:text-[48px] leading-[62px] max-lg:leading-[46px] max-md:leading-[30px] ">
                    <span className="">The customer-centric business email service that helps you grow</span>
                </div>
            </div>
            <div className="flex justify-center pt-8">
                <div className=" flex justify-center text-center text-[#000659] text-[15px] w-[640px] leading-[15px]">
                    <span className="">NDE Mail is the first business email service that helps you build deeper, more meaningful relationships with your customers.</span>
                </div>
            </div>
            <div className="flex justify-center pt-8">
                <div className=" flex justify-center text-center text-[#000659] text-[15px] w-[640px] leading-[15px]">
                    <button className="bg-[#0011FF] text-white p-6 rounded-[50px]">ACCESS NDE MAIL</button>
                </div>
            </div>
            <div className="flex justify-center pt-8 max-lg:pt-[100px] ">
                <div className=" flex justify-center relative">
                    <Image src={rectangle} alt={""} className="w-[1200px] max-lg:w-[670px] max-md:w-[380px] z-10" />
                    <Image src={cube} alt={""} className=" absolute right-[-30px] top-[-30px] max-lg:w-[80px] max-md:w-[40px] max-md:top-[-15px] max-md:right-[-15px]" />
                    <Image src={heart} alt={""} className="absolute  bottom-[-100px] max-lg:bottom-[-50px] left-[-70px] max-lg:left-[-40px] max-lg:w-[100px] max-md:w-[60px] max-md:left-[-20px] max-md:bottom-[-30px]" />
                    <button className="bg-black absolute z-10 text-white p-3 rounded-[50px] top-[50%] right-[40%] max-md:right-[30%]">
                        <div className="flex gap-2 items-start ">
                            <Image src={play} alt={""} />
                            <span>Watch Video</span>
                        </div>
                    </button>
                </div>
            </div>
            <div className="mt-[100px] pb-[25px] flex flex-col gap-[25px]">
                <h2 className="text-base-bold text-center py-2">
                    12,000+ global businesses trust us to transform & grow digitally
                </h2>
                <Marquee pauseOnHover={true} className="flex items-center">
                    <Image src={IMAGES.img1} alt="logo1" className="mr-[62px]" />
                    <Image src={IMAGES.img2} alt="logo1" className="mr-[62px]" />
                    <Image src={IMAGES.img3} alt="logo1" className="mr-[62px]" />
                    <Image src={IMAGES.img4} alt="logo1" className="mr-[62px]" />
                    <Image src={IMAGES.img5} alt="logo1" className="mr-[62px]" />
                    <Image src={IMAGES.img6} alt="logo1" className="mr-[62px]" />
                    <Image src={IMAGES.img7} alt="logo1" className="mr-[62px]" />
                    <Image src={IMAGES.img8} alt="logo1" className="mr-[62px]" />
                    <Image src={IMAGES.img4} alt="logo1" className="mr-[62px]" />
                </Marquee>
            </div>
            <div className="h-[150px] bg-background-nde-fade"></div>
        </div>
    )
}
export default Hero