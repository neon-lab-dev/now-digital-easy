import start from "@/assets/images/Group 69477.svg"
import arrow from "@/assets/images/arrowright.svg"

import Image from "next/image"
const StartNow = () => {
    return (
        <div className="flex justify-center">
            <div className="bg-gradient-start flex w-[1250px] h-[376px] rounded-[50px] mt-[120px] items-center">
                <div className="flex flex-col w-[900px] gap-4 items-start pl-[30px]">
                    <span className="heading4 w-[500px] ">For what you are<br/> waiting for?</span>
                    <span className="text-base w-[417px]">12,000+ global businesses found an empowering digital transformation. Its your turn.</span>
                    <button className="w-[144px] h-[49px] bg-[#0011FF] p-2 rounded-xl ">
                        <div className="flex justify-center items-center gap-3">
                            <span className=" font-source-sans-pro text-[15px] text-white">Start Now</span>
                            <Image src={arrow} alt={""} />
                        </div>
                    </button>
                </div>
                <Image src={start} alt="start" />
            </div>
        </div>

    )
}

export default StartNow