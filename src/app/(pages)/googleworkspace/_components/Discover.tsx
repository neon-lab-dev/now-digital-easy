"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import google from "@/assets/images/premium partner.svg"
import tenyear from "@/assets/images/10plusyears.svg"
import customer from "@/assets/images/customised solution.svg"

interface ServiceCardProps {
    title: string;
    description: string;
    image:any;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description,image }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div className='flex justify-center z-50 p-4 my-4'>
            <div className={`flex flex-col w-[260px] max-md:w-[330px] h-[216px] bg-background-Discover py-4 gap-6 rounded-xl relative overflow-hidden shadow-lg `}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                <div className={` bg-[#F2F3FF] absolute  top-[-2px] left-0  ${isHovered ? '' : 'rounded-br-full'} ${isHovered ? 'z-2' : 'z-1'} ${isHovered ? 'h-[216px]' : 'h-[70px]'} ${isHovered ? 'w-[330px]' : 'w-[70px]'}  duration-500  ]`}></div>
                <div className='flex justify-center px-2'>
                <Image src={image} alt={''} className={`${isHovered ? 'z-30' : 'z-1'} h-[50px]`}/>
                </div>
                <span className={` h-[52px] text-[27px] max-md:text-[20px] ${isHovered ? 'text-[#000659]' : 'text-[#000659]'} ${isHovered ? 'z-30' : 'z-1'} text-center leading-[26px]`}>{title}</span>
                <span className={` h-[20px] text-[18px] max-md:mx-4 ${isHovered ? 'text-[#151D8C]' : 'text-[#151D8C]'} ${isHovered ? 'z-30' : 'z-1'} text-center leading-[18px]`}>{description}</span>
            </div>
        </div>
    );
};
const Discover = () => {
    const servicesData = [
        {
            title: 'Google Premier Partner',
            description: 'Get support for Google Workspace ',
            image:google
        },
        {
            title: '10 Years',
            description: 'Our dedicated team is here to assist you ',
            image:tenyear
        },
        {
            title: 'Customised Solutions ',
            description: 'Get support for Google Workspace plans anytime ',
            image:customer
        },
        // Add more service data as needed
    ];
    return (
        <div className='bg-[#F5F5F5] my-[130px] py-[50px] max-md:my-[80px] max-md:py-0 flex flex-col gap-4'>
            <div className="mt-[120px] max-md:mt-10 flex justify-center">
                <div className="flex justify-center text-center w-[1055px]">
                    <span className="text-[62px] leading-[62px] max-lg:text-[42px] max-md:text-[28px] max-md:leading-[28px] max-lg:leading-[40px] text-[#000659] max-md:px-4">Discover Why Now Digital Easy is Your Top Choice for Google Workspace</span>
                </div>
            </div>
            <div className=" mt-10 max-md:mt-2 flex justify-center">
                <div className="flex justify-center text-center w-[1155px] max-lg:w-[720px] text-[18px] max-md:text-[16px] ">
                    <p> Embrace the future of simplicity, convenience, and efficiency. Explore why this transformative approach is reshaping how we live, work, and thrive in the digital age. Discover the key reasons why choosing  &apos;Now Digital Easy &apos; is essential for staying ahead in a complex world</p>
                </div>
            </div>
            <div className='flex justify-center'>
                <div className=' flex justify-center flex-wrap gap-4'>
                    {servicesData.map((service, index) => (
                        <ServiceCard key={index} title={service.title} description={service.description} image={service.image} />
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Discover