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
            <div className={`flex flex-col w-[260px] h-[216px] bg-background-Discover py-4 gap-6 rounded-xl relative overflow-hidden shadow-lg `}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                <div className={` bg-[#F2F3FF] absolute  top-[-2px] left-0  ${isHovered ? '' : 'rounded-br-full'} ${isHovered ? 'z-2' : 'z-1'} ${isHovered ? 'h-[216px]' : 'h-[70px]'} ${isHovered ? 'w-[260px]' : 'w-[70px]'}  duration-500  ]`}></div>
                <div className='flex justify-center px-2'>
                <Image src={image} alt={''} className={`${isHovered ? 'z-30' : 'z-1'} h-[50px]`}/>
                </div>
                <span className={` h-[52px] text-[27px] ${isHovered ? 'text-[#000659]' : 'text-[#000659]'} ${isHovered ? 'z-30' : 'z-1'} text-center leading-[26px]`}>{title}</span>
                <span className={` h-[20px] text-[18px] ${isHovered ? 'text-[#151D8C]' : 'text-[#151D8C]'} ${isHovered ? 'z-30' : 'z-1'} text-center leading-[18px]`}>{description}</span>
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
        <div className='bg-[#F5F5F5] my-[130px] py-[50px] flex flex-col gap-4'>
            <div className="mt-[120px] flex justify-center">
                <div className="flex justify-center text-center w-[1055px]">
                    <span className="text-[62px] leading-[62px] text-[#000659]">Discover Why Now Digital Easy is Your Top Choice for Google Workspace</span>
                </div>
            </div>
            <div className=" mt-10 flex justify-center">
                <div className="flex justify-center text-center w-[1155px] text-[18px] text-[#000659]">
                    <p> Embrace the future of simplicity, convenience, and efficiency. Explore why this transformative approach is reshaping how we live, work, and thrive in the digital age. Discover the key reasons why choosing 'Now Digital Easy' is essential for staying ahead in a complex world</p>
                </div>
            </div>
            <div className='flex justify-center'>
                <div className=' grid grid-cols-3 gap-4'>
                    {servicesData.map((service, index) => (
                        <ServiceCard key={index} title={service.title} description={service.description} image={service.image} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Discover