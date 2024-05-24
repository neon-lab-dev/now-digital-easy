import { IMAGES } from "@/assets"
import hero from "@/assets/images/Group 69102 (1).svg"
import Image from "next/image"
import Marquee from "react-fast-marquee"
const Hero = () => {
    return (
        <div className=" bg-background-light ">
            <div className="flex justify-center max-lg:flex-col items-center pt-[80px] max-lg:gap-[80px] ">
                <div className="flex flex-col gap-4 max-lg:gap-1 max-lg:items-center max-lg:w-[600px] max-md:w-[375px] w-[760px] ">
                    <div className="flex flex-col text-[#000659] max-lg:items-center ">
                        <span className="text-[58px] max-lg:text-[42px] font-source-sans-pro font-900 leading-[62px] max-lg:leading-[42px] tracking-[-2px] max-lg:text-center  max-md:text-[26px] max-md:leading-[28px]">Empower Your Team  With Google Workspace</span>
                    </div>
                    <ul className="grid grid-cols-2 gap-4 max-md:ml-4 font-merriweather mx-6 max-lg:mx-0 py-2 list-disc text-[17px] font-700 max-lg:text-[17px] max-md:text-[12px] text-[#151D8C]">
                        <li>Custom Business Email</li>
                        <li>30 GB of Cloud Storage</li>
                        <li>High Standard Security.</li>
                        <li>100 Meet Participants</li>
                    </ul>
                    <div className="flex items-center gap-2 font-merriweather">
                        <span className="text-[17px] text-[#151D8C] font-700">Starts at</span>
                        <span className="text-[#0011FF] text-[28px] font-900">₹136/user/mo</span>
                    </div>
                    <span className="text-[14px] text-[#151D8C] font-700 font-merriweather max-md:mr-[110px] ">For Additional Discount</span>
                    <div className="flex flex-col gap-1 font-merriweather">
                        <button className="bg-[#0011FF] text-white  py-3 rounded-[50px] text-[15px] w-[207px] max-md:mt-[30px]">Request A Call Back</button>
                    </div>
                </div>
                <Image src={hero} alt="hero" className=" max-md:w-[350px] w-[550px] max-2xl:w-[400px]" />
            </div>
            <div className="flex justify-center text-[24px] max-md:text-[16px] text-center font-700 py-16 font-merriweather">
                    12,000+ global businesses trust us to transform & grow digitally
                </div>
            <div className=" pb-[25px] flex flex-col gap-[25px] pt-[35px] max-md:pt-0">
                <Marquee pauseOnHover={true} className="flex items-center">
                    <Image src={IMAGES.img4} alt="logo1" className="mr-[62px] w-[98px]" />
                    <Image src={IMAGES.img1} alt="logo1" className="mr-[62px] w-[98px]" />
                    <Image src={IMAGES.img2} alt="logo1" className="mr-[62px] w-[98px]" />
                    <Image src={IMAGES.img3} alt="logo1" className="mr-[62px] w-[98px]" />
                    <Image src={IMAGES.img4} alt="logo1" className="mr-[62px] w-[98px]" />
                    <Image src={IMAGES.img5} alt="logo1" className="mr-[62px] w-[98px]" />
                    <Image src={IMAGES.img6} alt="logo1" className="mr-[62px] w-[98px]" />
                    <Image src={IMAGES.img7} alt="logo1" className="mr-[62px] w-[98px]" />
                    <Image src={IMAGES.img8} alt="logo1" className="mr-[62px] w-[98px]" />
                    <Image src={IMAGES.img4} alt="logo1" className="mr-[62px] w-[98px]" />
                </Marquee>
            </div>
            <div className='h-[100px] bg-background-fade'>
            </div>
        </div>
    )
}

export default Hero