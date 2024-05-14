import React from 'react'
import Image from "next/image";
import group1 from "@/assets/images/Group 69505.svg";
import arrow from "@/assets/images/Group 69507.svg";
import apple from "@/assets/images/Apple Logo.svg";
import play from "@/assets/images/Google Play.svg";
import phone from "@/assets/images/phone.svg";
import rec from "@/assets/images/Rectangle 46422.svg";
import rec1 from "@/assets/images/Rectangle 46423.svg";


const MalionMoblie = () => {
  return (
    <div className={` bg-background-Mail`}>
    <div className="flex justify-center gap-[150px]  items-center">
        <div className="flex flex-col gap-6 text-start w-[600px] p-10">
            <span className="text-[35px] text-[#000659] leading-[35px]">
            Mail on Mobile
            </span>
            <p className="text-[17] w-[431px]">Manage your business emails even when you &apos;re away from your desk. Native mobile apps for Mail, Mail Admin, and Streams make staying in touch on the go easy and effortless.</p>
            <div className="flex items-center gap-2">
                <span className="text-[#0088FF] text-[20px]">Go Moblie</span>
                <button>
                    <Image src={arrow} alt="arrow" />
                </button>
            </div>
            <div className="flex items-center gap-4">
                <button className='bg-black px-3 py-1 rounded-lg'>
                    <div className='flex gap-2 justify-center items-center text-white '>
                        <Image src={apple} alt={''}/>
                        <div className='flex flex-col justify-start items-start'>
                            <span className='text-[10px] leading-2' >Download on the</span>
                            <span className='text-[20px]'>App Store</span>
                        </div>
                    </div>
                </button>
                <button className='bg-black px-3 py-1 rounded-lg'>
                    <div className='flex gap-2 justify-center items-center text-white '>
                        <Image src={play} alt={''}/>
                        <div className='flex flex-col justify-start items-start'>
                            <span className='text-[10px] leading-2' >Download on the</span>
                            <span className='text-[20px]'>Play Store</span>
                        </div>
                    </div>
                </button>
            </div>
        </div>
        <div className="flex justify-center px-16 py-16 relative ">
            <Image src={phone} alt="" className="rounded-3xl z-10"/>
            <Image src={rec} alt="" className=" absolute left-5 z-0"/>
            <Image src={rec1} alt="" className=" absolute bottom-[85px] right-0 z-0"/>
        </div>
    </div>
</div>
  )
}

export default MalionMoblie