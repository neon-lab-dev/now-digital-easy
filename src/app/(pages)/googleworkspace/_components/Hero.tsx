import { IMAGES } from "@/assets"
import hero from "@/assets/images/Group 69102 (1).svg"
import Image from "next/image"
import Marquee from "react-fast-marquee"
const Hero = () => {
    return (
        <div className=" bg-background-light">
            <div className="flex justify-center items-center pt-[80px] gap-[50px] ">
                <div className="flex flex-col">
                    <div className="flex flex-col text-[#000659]">
                        <span className="text-[68px] leading-[20px]">Empower Your Team</span>
                        <span className="text-[68px]  "> With Google Workspace </span>
                    </div>
                    <ul className="grid grid-cols-2 gap-6 px-3 mx-4 py-2 list-disc text-[24px]">
                        <li>Custom Business Email</li>
                        <li>30 GB of Cloud Storage</li>
                        <li>High Standard Security.</li>
                        <li>100 Meet Participants</li>
                    </ul>
                    <div className="flex items-center gap-2">
                        <span className="text-[24px]">Starts at</span>
                        <span className="text-[#0011FF] text-[36px] font-900">₹136/user/mo</span>
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="text-[20px]">For Additional Discount</span>
                        <button className="bg-[#0011FF] text-white  py-3 rounded-[50px] text-[18px] w-[207px]">Request A Call Back</button>
                    </div>
                </div>
                <Image src={hero} alt="hero" className="w-[600px]" />
            </div>
            <div className=" pb-[25px] flex flex-col gap-[25px]">
                <div className="flex justify-center text-[24px] py-10">
                    12,000+ global businesses trust us to transform & grow digitally
                </div>
                <Marquee pauseOnHover={true} className="flex items-center">
                    <Image src={IMAGES.img4} alt="logo1" className="mr-[62px]" />
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
            <div className='h-[100px] bg-background-fade'>
            </div>
        </div>

    )
}

export default Hero