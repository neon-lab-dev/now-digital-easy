import { ICONS } from '@/assets'
import Image from 'next/image'
import React from 'react'

interface Feature {
    title: string;
    description: string;
}

const features: Feature[] = [
    {
        title: 'Multiple pipelines',
        description: 'No links or codes. Cobrowse with instantly.',
    },
    {
        title: 'Integrations',
        description: 'No links or codes. Cobrowse with instantly.',
    },
    {
        title: 'Workflow Automation',
        description: 'No links or codes. Cobrowse with instantly.',
    },
    {
        title: 'Built In-Telephony',
        description: 'No links or codes. Cobrowse with instantly.',
    },
    {
        title: 'Ready-Made Templates',
        description: 'No links or codes. Cobrowse with instantly.',
    },
    {
        title: 'Fully Mobile',
        description: 'No links or codes. Cobrowse with instantly.',
    },
];

const plans = () => {
    return (
        <>
            <div className='py-10'>
                <div className=' flex justify-center pt-8 py-10'>
                    <span className=' text-5xl font-source-sans-pro font-900 text-primary-500 pb-6 max-lg:text-3xl max-md:text-xl'>Why Choose NDE’s Vision Now?</span>
                </div>
                <div className=' flex justify-center'>
                    <div className='grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-16'>
                        {features.map((feature, index) => (
                            <div key={index} className={`flex items-start gap-4 p-10 w-[317px] max-lg:w-full ${index % 2 === 0 ? 'bg-[#F5F6FF]' : 'bg-[#FFFBE5]'}`}>
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

export default plans;
