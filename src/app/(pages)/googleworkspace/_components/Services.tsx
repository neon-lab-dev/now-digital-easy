"use client"
import React, { useState } from 'react';
interface ServiceCardProps {
    title: string;
    description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div className='flex justify-center  z-50 p-4 my-4 max-lg:my-0 '>
            <div className={`flex flex-col w-[368px] h-[200px] bg-[#F0F1FF] p-3 gap-2 rounded-xl relative overflow-hidden shadow-lg `}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                <div className={` bg-[#000AFF] absolute right-0 top-[-2px]  ${isHovered ? '' : 'rounded-bl-full'} ${isHovered ? 'z-2' : 'z-1'} ${isHovered ? 'h-[210px]' : 'h-[40px]'} ${isHovered ? 'w-[368px]' : 'w-[50px]'}  duration-500  ]`}></div>
                <span className={` text-[24px] ${isHovered ? 'text-white' : 'text-[#0437CD]'} ${isHovered ? 'z-30' : 'z-1'}`}>{title}</span>
                <span className={` text-[18px] ${isHovered ? 'text-white' : 'text-[#646464]'} ${isHovered ? 'z-30' : 'z-1'}`}>{description}</span>
            </div>
        </div>
    );
};

const Services = () => {
    const servicesData = [
        {
            title: 'Technical Support',
            description: 'Get support for Google Workspace plans anytime you need it from our team of professional Google wizards.'
        },
        {
            title: 'Customer Service',
            description: 'Our dedicated team is here to assist you with any inquiries or issues you may have. Reach out to us anytime!'
        },
        {
            title: 'Technical Support',
            description: 'Get support for Google Workspace plans anytime you need it from our team of professional Google wizards.'
        },
        {
            title: 'Customer Service',
            description: 'Our dedicated team is here to assist you with any inquiries or issues you may have. Reach out to us anytime!'
        },
        {
            title: 'Technical Support',
            description: 'Get support for Google Workspace plans anytime you need it from our team of professional Google wizards.'
        },
        {
            title: 'Customer Service',
            description: 'Our dedicated team is here to assist you with any inquiries or issues you may have. Reach out to us anytime!'
        },
        // Add more service data as needed
    ];

    return (
        <div className='pt-[180px] max-lg:pt-[50px] bg-background-service'>
            <div className='flex justify-center'>
                <span className='text-[55px] max-lg:text-[38px] max-md:text-[24px]'>Services What We Provide For You</span>
            </div>
            <div className='flex justify-center '>
                <div className=' grid grid-cols-3 gap-4 max-md:gap-2 max-lg:grid-cols-2 max-md:grid-cols-1'>
                    {servicesData.map((service, index) => (
                        <ServiceCard key={index} title={service.title} description={service.description} />
                    ))}
                </div>
            </div>
            <div className='h-[100px] bg-background-fade'></div>
        </div>
    );
};
export default Services;
