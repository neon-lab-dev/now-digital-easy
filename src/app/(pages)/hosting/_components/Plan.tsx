// Plan.tsx
import { ICONS } from '@/assets';
import Image from 'next/image';
import React from 'react';

interface PlanCardProps {
    planName: string;
    price: string;
    billingInfo: string;
}

const PlanCard: React.FC<PlanCardProps> = ({ planName, price, billingInfo }) => {
    return (
        <div className='flex flex-col rounded-2xl gap-4  w-[300px] bg-[#F5F6FF]'>
            <div className='flex justify-center p-3 bg-[#8D8D8D1A] rounded-t-2xl rounded-b-none'>
                <span className='subheading1 font-source-sans-pro'>{planName}</span>
            </div>
            <div className='flex justify-center'>
                <div className='flex flex-col'>
                    <div className='flex justify-center items-center'>
                        <span className=' mb-10 font-source-sans-pro font-700'>₹</span>
                        <span className='font-source-sans-pro font-900 heading2'>{price}</span>
                    </div>
                    <span className='text-[12px]'>{billingInfo}</span>
                </div>
            </div>
            <span className='text-xs text-center'>Start with our free plan and upgrade only when you need additional features.</span>
            <div className='flex justify-center my-2'>
                <button className='flex justify-center bg-white border-black border-[2px] w-[175px] font-merriweather text-md p-1'>Sign Up For Free</button>
            </div>
            <div className='flex flex-col gap-4 my-4'>
                {features.map((feature, index) => (
                    <div key={index} className='flex items-center px-5 gap-2'>
                        <Image src={ICONS.check} alt='' />
                        <span>{feature}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

const features = [
    'Single Pipeline',
    '500 Records',
    'Automations (3)',
    'Telephony',
    'Developer APIs',
    'Standard Dashboard'
];

const Plan: React.FC<{ backgroundStyle: React.CSSProperties }> = ({ backgroundStyle }) => {
    return (
        <div className=' py-16' style={backgroundStyle}>
            <div className='flex justify-center pt-8'>
                <span className='heading4 font-source-sans-pro font-900 text-primary-500 pb-6 max-lg:text-3xl max-md:text-xl'>Choose a Right Plan for Your Website</span>
                <p className="text-sm font-merriweather leading-[165%] md:text-base max-w-[700px]">{desc}</p>
            </div>
            <div className='flex justify-center items-center pt-8 gap-10 flex-wrap'>
                <PlanCard planName='Free' price='0' billingInfo='/Single user' />
                <PlanCard planName='EXPRESS' price='400' billingInfo='/user/month/billed yearly' />
                <PlanCard planName='PREMIER' price='720' billingInfo='/user/month/billed yearly' />
            </div>
        </div>
    );
};

export default Plan;
