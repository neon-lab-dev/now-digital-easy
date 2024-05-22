import start from "@/assets/images/Group 69477.svg"
import arrow from "@/assets/images/arrowright.svg"

import Image from "next/image"
const StartNow = () => {
    return (
        <div className="flex justify-center">
            <div className="bg-gradient-start max-md:flex-col max-md:gap-6 max-lg:ml-4 max-md:ml-0 flex w-[1250px] max-lg:w-[710px] h-[376px] max-md:h-full max-md:w-full rounded-[50px] mt-[120px] items-center max-md:py-4">
                <div className="flex flex-col w-[900px] max-lg:w-[450px] max-md:w-[350px] gap-4 items-start max-md:items-center pl-[30px] max-lg:pl-8 max-md:pl-0">
                    <span className="heading4 w-[500px] max-lg:w-[400px] max-md:w-[350px] max-md:text-center ">For what you are<br/> waiting for?</span>
                    <span className="text-base w-[417px] max-md:w-[340px]  max-md:text-center ">12,000+ global businesses found an empowering digital transformation. Its your turn.</span>
                    <button className="w-[144px] h-[49px] bg-[#0011FF] p-2 rounded-xl ">
                        <div className="flex justify-center items-center gap-3">
                            <span className=" font-source-sans-pro text-[15px] text-white">Start Now</span>
                            <Image src={arrow} alt={""} />
                        </div>
                    </button>
                </div>
                <Image src={start} alt="start" className=" max-lg:w-[240px]" />
            </div>
        </div>

    )
}

export default StartNow