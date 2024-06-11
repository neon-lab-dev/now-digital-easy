import { ICONS } from '@/assets'
import Image from 'next/image'
import React from 'react'

interface Feature {
    title: string;
    description: string;
}

const features: Feature[] = [
    {
        title: 'State-of-the-Art Infrastructure',
        description: 'Our shared hosting serves are built on premium servers powered by intel Xeon-E5 Dual Quad-Core Processors w/HyperThreading which ensures maximum uptime and availability.',
    },
    {
        title: 'Easy-to-use cPanel of Shared Web Hosting',
        description: 'Our shared hosting serves are built on premium servers powered by intel Xeon-E5 Dual Quad-Core Processors w/HyperThreading which ensures maximum uptime and availability.',
    },
    {
        title: 'Advanced Programming & Database for building website',
        description: 'Our shared hosting serves are built on premium servers powered by intel Xeon-E5 Dual Quad-Core Processors w/HyperThreading which ensures maximum uptime and availability.',
    },
    {
        title: 'Professional Email Hosting',
        description: 'Our shared hosting serves are built on premium servers powered by intel Xeon-E5 Dual Quad-Core Processors w/HyperThreading which ensures maximum uptime and availability.',
    },
];



const plans = () => {
    return (
        <>
            <div className='py-16' style={{
                background: "linear-gradient(109.2deg, rgba(242, 200, 220, 0.5) 2.06%, rgba(215, 214, 250, 0.5) 110.59%)"
            }}>
                <div className=' flex justify-center pt-8 '>
                    <span className=' text-5xl font-source-sans-pro font-900 text-primary-500 pb-6 max-lg:text-3xl'>Features</span>
                </div>
                <div className=' flex justify-center'>
                    <div className='grid grid-cols-2 max-lg:grid-cols-1 gap-2'>
                        {features.map((feature, index) => (
                            <div key={index} className='flex items-start gap-4 px-4 py-6 w-[550px] max-lg:w-full'>
                                <Image src={ICONS.like} alt='Feature icon' />
                                <div className='flex flex-col gap-4'>
                                    <span className='font-900 font-source-sans-pro text-2xl tracking-tighter max-lg:text-lg'>{feature.title}</span>
                                    <span className='font-merriweather text-gray-400 text-[15px] max-lg:text-[12px]'>{feature.description}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='h-[80px]' style={{
                background: "linear-gradient(0deg, rgba(215, 214, 250, 0.05) 0%, #FFFFFF 102.63%)"
            }}>
            </div>
        </>

    )
}

export default plans